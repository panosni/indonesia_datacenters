"""
Generate fiscal_slides.pptx — 3 slides matching the LaTeX Beamer deck.
Run: python reports/make_slides.py
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.util import Cm
from pptx.oxml.ns import qn
from lxml import etree
import copy

# ── Colours ───────────────────────────────────────────────────────────────────
NAVY   = RGBColor(0x1B, 0x3A, 0x6B)
CRIMSON= RGBColor(0xC0, 0x39, 0x2B)
WHITE  = RGBColor(0xFF, 0xFF, 0xFF)
LGRAY  = RGBColor(0xF2, 0xF2, 0xF2)
MGRAY  = RGBColor(0xCC, 0xCC, 0xCC)
BLACK  = RGBColor(0x00, 0x00, 0x00)

SLIDE_W = Inches(13.33)
SLIDE_H = Inches(7.5)

prs = Presentation()
prs.slide_width  = SLIDE_W
prs.slide_height = SLIDE_H

blank_layout = prs.slide_layouts[6]   # completely blank


# ── Helper functions ──────────────────────────────────────────────────────────

def add_textbox(slide, left, top, width, height, text,
                font_size=12, bold=False, color=BLACK,
                bg_color=None, align=PP_ALIGN.LEFT, wrap=True):
    txb = slide.shapes.add_textbox(left, top, width, height)
    tf  = txb.text_frame
    tf.word_wrap = wrap
    p   = tf.paragraphs[0]
    p.alignment = align
    run = p.add_run()
    run.text = text
    run.font.size  = Pt(font_size)
    run.font.bold  = bold
    run.font.color.rgb = color
    if bg_color:
        fill = txb.fill
        fill.solid()
        fill.fore_color.rgb = bg_color
    return txb


def add_rect(slide, left, top, width, height, fill_color):
    shape = slide.shapes.add_shape(
        1,   # MSO_SHAPE_TYPE.RECTANGLE
        left, top, width, height
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_color
    shape.line.color.rgb = fill_color
    return shape


def header_bar(slide, text, top=Inches(0.15)):
    """Full-width navy header bar."""
    bar = add_rect(slide, Inches(0), top, SLIDE_W, Inches(0.65), NAVY)
    tf  = bar.text_frame
    tf.word_wrap = False
    p   = tf.paragraphs[0]
    p.alignment = PP_ALIGN.LEFT
    run = p.add_run()
    run.text = "  " + text
    run.font.size  = Pt(18)
    run.font.bold  = True
    run.font.color.rgb = WHITE


def table_cell(table, row, col, text,
               font_size=9, bold=False,
               fg=BLACK, bg=WHITE, align=PP_ALIGN.CENTER):
    cell = table.cell(row, col)
    cell.fill.solid()
    cell.fill.fore_color.rgb = bg
    tf   = cell.text_frame
    tf.word_wrap = False
    p    = tf.paragraphs[0]
    p.alignment = align
    run  = p.add_run()
    run.text = text
    run.font.size  = Pt(font_size)
    run.font.bold  = bold
    run.font.color.rgb = fg


# ══════════════════════════════════════════════════════════════════════════════
# SLIDE 1 — RESULTS
# ══════════════════════════════════════════════════════════════════════════════
sl1 = prs.slides.add_slide(blank_layout)
header_bar(sl1, "Indonesia Datacenter Fiscal Exposure — Key Results")

# ── Left column: KPI boxes ─────────────────────────────────────────────────
col1_l = Inches(0.4)
col1_w = Inches(4.2)

kpis = [
    ("Grand Total Fiscal Cost",   "IDR 138.1T",  "USD 8.9B equivalent"),
    ("Portfolio Covered",          "45 facilities","IDR 373.9T invested"),
    ("Pillar 2 Share",             "12% of cost", "IDR 16.8T (P2 in-scope)"),
]
kpi_top = Inches(1.05)
for label, value, sub in kpis:
    box = add_rect(sl1, col1_l, kpi_top, col1_w, Inches(1.55), LGRAY)
    add_textbox(sl1, col1_l+Inches(0.1), kpi_top+Inches(0.08),
                col1_w-Inches(0.2), Inches(0.3),
                label, font_size=9, bold=True, color=NAVY)
    add_textbox(sl1, col1_l+Inches(0.1), kpi_top+Inches(0.38),
                col1_w-Inches(0.2), Inches(0.55),
                value, font_size=22, bold=True, color=CRIMSON)
    add_textbox(sl1, col1_l+Inches(0.1), kpi_top+Inches(0.98),
                col1_w-Inches(0.2), Inches(0.28),
                sub, font_size=8, color=BLACK)
    kpi_top += Inches(1.72)

# ── Right column: two mini tables ─────────────────────────────────────────
col2_l = Inches(5.2)
col2_w = SLIDE_W - col2_l - Inches(0.4)

# Cost breakdown header
add_textbox(sl1, col2_l, Inches(1.05), col2_w, Inches(0.3),
            "Cost Breakdown", font_size=10, bold=True, color=NAVY)

tbl1_data = [
    ["Instrument",     "IDR T",  "Share"],
    ["Tax Holiday (CIT)", "118.2",  "86%"],
    ["Super Deduction (PP 78)", "19.1", "14%"],
    ["SEZ VAT Exemption",  "0.8",   "<1%"],
    ["Grand Total",    "138.1",  "100%"],
]
rows1 = len(tbl1_data)
cols1 = 3
col_widths1 = [col2_w*0.55, col2_w*0.22, col2_w*0.23]
tbl1_top = Inches(1.40)
tbl1_h   = Inches(1.65)

t1 = sl1.shapes.add_table(rows1, cols1, col2_l, tbl1_top,
                           int(col2_w), int(tbl1_h)).table
for c, w in enumerate(col_widths1):
    t1.columns[c].width = int(w)

for r, row_data in enumerate(tbl1_data):
    is_hdr  = (r == 0)
    is_foot = (r == rows1 - 1)
    bg = NAVY if (is_hdr or is_foot) else (LGRAY if r % 2 == 0 else WHITE)
    fg = WHITE if (is_hdr or is_foot) else BLACK
    for c, val in enumerate(row_data):
        align = PP_ALIGN.LEFT if c == 0 else PP_ALIGN.CENTER
        table_cell(t1, r, c, val,
                   font_size=9, bold=(is_hdr or is_foot),
                   fg=fg, bg=bg, align=align)

# Pillar 2 split header
add_textbox(sl1, col2_l, Inches(3.25), col2_w, Inches(0.3),
            "Pillar 2 Split", font_size=10, bold=True, color=NAVY)

tbl2_data = [
    ["Scope",                       "IDR T", "Share"],
    ["In scope (7% forfeited)",     "16.8",  "12%"],
    ["Not in scope (22% forfeited)","121.3", "88%"],
    ["Total",                       "138.1", "100%"],
]
rows2 = len(tbl2_data)
tbl2_top = Inches(3.60)
tbl2_h   = Inches(1.35)

t2 = sl1.shapes.add_table(rows2, cols1, col2_l, tbl2_top,
                           int(col2_w), int(tbl2_h)).table
for c, w in enumerate(col_widths1):
    t2.columns[c].width = int(w)

for r, row_data in enumerate(tbl2_data):
    is_hdr  = (r == 0)
    is_foot = (r == rows2 - 1)
    bg = NAVY if (is_hdr or is_foot) else (LGRAY if r % 2 == 0 else WHITE)
    fg = WHITE if (is_hdr or is_foot) else BLACK
    for c, val in enumerate(row_data):
        align = PP_ALIGN.LEFT if c == 0 else PP_ALIGN.CENTER
        table_cell(t2, r, c, val,
                   font_size=9, bold=(is_hdr or is_foot),
                   fg=fg, bg=bg, align=align)


# ══════════════════════════════════════════════════════════════════════════════
# SLIDE 2 — TIER TABLE
# ══════════════════════════════════════════════════════════════════════════════
sl2 = prs.slides.add_slide(blank_layout)
header_bar(sl2, "Fiscal Cost by Investment Tier")

tier_data = [
    ["Investment Tier",     "N",  "Inv. (IDR T)", "Holiday (T)", "SD (T)", "VAT (T)", "Total (T)", "Share"],
    ["Below IDR 100B",      "2",  "0.14",   "0.000",  "0.000",  "0.000",  "0.000",   "0.0%"],
    ["IDR 100B–500B",       "2",  "0.64",   "0.043",  "0.042",  "0.018",  "0.103",   "0.1%"],
    ["IDR 500B–1T",         "3",  "2.34",   "0.157",  "0.079",  "0.000",  "0.236",   "0.2%"],
    ["IDR 1T–5T",           "19", "47.72",  "6.379",  "2.283",  "0.119",  "8.781",   "6.4%"],
    ["IDR 5T–15T",          "14", "98.36",  "18.460", "4.616",  "0.659",  "23.735",  "17.2%"],
    ["IDR 15T–30T",         "2",  "41.85",  "9.458",  "1.577",  "0.000",  "11.035",  "8.0%"],
    ["Above IDR 30T",       "3",  "182.90", "83.737", "10.468", "0.000",  "94.205",  "68.2%"],
    ["TOTAL",               "45", "373.95", "118.234","19.065", "0.796",  "138.095", "100%"],
]

n_rows = len(tier_data)
n_cols = 8
tbl_l = Inches(0.3)
tbl_t = Inches(1.0)
tbl_w = SLIDE_W - Inches(0.6)
tbl_h = Inches(5.7)

col_pcts = [0.24, 0.05, 0.10, 0.11, 0.09, 0.09, 0.11, 0.08]
col_widths_main = [int(tbl_w * p) for p in col_pcts]
# Adjust last col for rounding
col_widths_main[-1] = int(tbl_w) - sum(col_widths_main[:-1])

t3 = sl2.shapes.add_table(n_rows, n_cols, tbl_l, tbl_t,
                           int(tbl_w), int(tbl_h)).table
for c, w in enumerate(col_widths_main):
    t3.columns[c].width = w

for r, row_data in enumerate(tier_data):
    is_hdr  = (r == 0)
    is_foot = (r == n_rows - 1)
    if is_hdr or is_foot:
        bg, fg = NAVY, WHITE
    elif r % 2 == 0:
        bg, fg = LGRAY, BLACK
    else:
        bg, fg = WHITE, BLACK
    for c, val in enumerate(row_data):
        align = PP_ALIGN.LEFT if c == 0 else PP_ALIGN.CENTER
        table_cell(t3, r, c, val,
                   font_size=9, bold=(is_hdr or is_foot),
                   fg=fg, bg=bg, align=align)

# footnote
add_textbox(sl2, tbl_l, Inches(6.85), tbl_w, Inches(0.35),
            "Top 5 individual exposures (IDR T): Microsoft Azure 47.3  ·  Google 22.5  ·  Equinix 13.4  ·  STT GDC 12.3  ·  Digital Realty 9.7",
            font_size=8, color=NAVY, bold=True)


# ══════════════════════════════════════════════════════════════════════════════
# SLIDE 3 — ASSUMPTIONS
# ══════════════════════════════════════════════════════════════════════════════
sl3 = prs.slides.add_slide(blank_layout)
header_bar(sl3, "Key Assumptions")

assumptions = [
    ("A.  Investment values",
     "Announced USD figures converted at USD/IDR 15,500. MW-based imputation used where monetary data absent "
     "(USD 1.5M/MW operational, USD 2M/MW planned)."),
    ("B.  Profitability",
     "Annual EBIT = 12% of total investment. Applied uniformly as a sector benchmark for fiscal cost computation."),
    ("C.  Tax Holiday (PMK 69/2024)",
     "CIT = 22%. Tiers: ≥IDR 100T → 20 yrs; IDR 30T–100T → 15 yrs; IDR 500B–30T → 10 yrs; "
     "IDR 100B–500B → 5 yrs; <IDR 100B → 0 yrs. 50% reduction for 2-yr extensions where applicable."),
    ("D.  BEPS Pillar Two",
     "In scope: global group revenue >€750M AND operating/EBITDA margin >10%. GloBE minimum rate = 15%. "
     "P2 in-scope: Indonesia forfeits 7% (22%–15%). P2 out-of-scope: Indonesia forfeits full 22% "
     "(or 11% for 50%-reduction facilities)."),
    ("E.  Super Deduction (PP 78/2019)",
     "30% net income reduction over 6 years at 5%/yr. Applies after tax holiday ends. "
     "Data centres qualify under KBLI 63111. Fiscal cost = deduction × CIT-forfeited rate × 6 yrs. "
     "Annual deduction = 5% of investment."),
    ("F.  SEZ VAT Exemption",
     "4 facilities in Nongsa Digital Park KEK (Batam). "
     "VAT cost = investment × 35% × 11% (PMK-131/2024: 12% × 11/12)."),
]

col_a_l = Inches(0.35)
col_b_l = Inches(6.85)
col_w   = Inches(6.1)

top = Inches(0.98)
row_h = Inches(1.05)

for i, (heading, body) in enumerate(assumptions):
    col_l = col_a_l if i % 2 == 0 else col_b_l
    row_top = top + (i // 2) * row_h

    # Heading
    add_textbox(sl3, col_l, row_top, col_w, Inches(0.25),
                heading, font_size=10, bold=True, color=NAVY)
    # Body
    add_textbox(sl3, col_l, row_top + Inches(0.27), col_w, Inches(0.72),
                body, font_size=8.5, color=BLACK)

# ── Save ─────────────────────────────────────────────────────────────────────
out_path = "reports/fiscal_slides.pptx"
prs.save(out_path)
print(f"Saved: {out_path}")
