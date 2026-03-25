"""
Generate fiscal_cost_report.docx from the fiscal_cost_report.tex content.
Run: python3 reports/make_docx.py
"""

from docx import Document
from docx.shared import Pt, RGBColor, Cm, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_ALIGN_VERTICAL
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
import copy

doc = Document()

# ── Page margins ─────────────────────────────────────────────────────────────
section = doc.sections[0]
section.top_margin    = Cm(2.5)
section.bottom_margin = Cm(2.5)
section.left_margin   = Cm(2.54)
section.right_margin  = Cm(2.54)

# ── Styles ───────────────────────────────────────────────────────────────────
NAVY   = RGBColor(0x1B, 0x3A, 0x6B)
CRIMSON= RGBColor(0xC0, 0x39, 0x2B)
WHITE  = RGBColor(0xFF, 0xFF, 0xFF)
LGRAY  = RGBColor(0xF2, 0xF2, 0xF2)
BLACK  = RGBColor(0x00, 0x00, 0x00)

normal = doc.styles['Normal']
normal.font.name = 'Calibri'
normal.font.size = Pt(10)


def set_cell_bg(cell, rgb: RGBColor):
    tc   = cell._tc
    tcPr = tc.get_or_add_tcPr()
    shd  = OxmlElement('w:shd')
    # RGBColor is a tuple subclass: (r, g, b)
    hex_color = f'{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}'
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), hex_color)
    tcPr.append(shd)


def heading_para(text, level=1):
    p = doc.add_heading(text, level=level)
    p.style.font.color.rgb = NAVY
    return p


def add_table_header_row(table, headers, col_widths_cm=None):
    row = table.rows[0]
    for i, h in enumerate(headers):
        cell = row.cells[i]
        set_cell_bg(cell, NAVY)
        cell.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run = p.add_run(h)
        run.bold = True
        run.font.color.rgb = WHITE
        run.font.size = Pt(9)
    if col_widths_cm:
        for i, w in enumerate(col_widths_cm):
            row.cells[i].width = Cm(w)


def fill_row(table, row_idx, values, bold=False, bg=None, alignments=None):
    row = table.rows[row_idx]
    for i, val in enumerate(values):
        cell = row.cells[i]
        if bg:
            set_cell_bg(cell, bg)
        cell.vertical_alignment = WD_ALIGN_VERTICAL.CENTER
        p = cell.paragraphs[0]
        align = WD_ALIGN_PARAGRAPH.RIGHT
        if alignments:
            align = alignments[i]
        elif i == 0:
            align = WD_ALIGN_PARAGRAPH.LEFT
        p.alignment = align
        run = p.add_run(str(val))
        run.bold = bold
        run.font.size = Pt(9)


# ═════════════════════════════════════════════════════════════════════════════
# TITLE
# ═════════════════════════════════════════════════════════════════════════════
title = doc.add_paragraph()
title.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = title.add_run("Fiscal Cost of Indonesia's Data Centre Tax Incentive Regime")
run.bold = True
run.font.size = Pt(16)
run.font.color.rgb = NAVY

sub = doc.add_paragraph()
sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
run2 = sub.add_run("March 2026  |  Policy Research")
run2.font.size = Pt(10)
run2.font.color.rgb = RGBColor(0x80, 0x80, 0x80)

doc.add_paragraph()

# ═════════════════════════════════════════════════════════════════════════════
# OVERVIEW
# ═════════════════════════════════════════════════════════════════════════════
heading_para("Overview", level=2)
overview = doc.add_paragraph(
    "Indonesia's data centre market has attracted IDR\u00a0385.8\u00a0trillion (USD\u00a024.4\u00a0billion) "
    "in identified investment across 49\u00a0facilities (27\u00a0operational, 12\u00a0under\u00a0construction, "
    "10\u00a0planned), encompassing 3,089\u00a0MW of capacity (526\u00a0MW operational, 2,563\u00a0MW pipeline). "
    "Three fiscal instruments apply: a CIT holiday of up to 20\u00a0years (PMK-130/2020); a post-holiday "
    "investment allowance of 30\% of capex under GR\u00a0No.\u00a045/2019; and VAT plus import duty "
    "exemptions for Batam Nongsa Digital Park SEZ operators. Total cumulative fiscal cost is estimated "
    "at\u00a0"
)
run = overview.add_run("IDR\u00a0130.659\u00a0trillion (USD\u00a08.27\u00a0billion)")
run.bold = True
r2 = overview.add_run(
    ", equivalent to\u00a0"
)
r3 = overview.add_run("0.590\u00a0% of 2024 GDP")
r3.bold = True
r4 = overview.add_run(
    " and 19.5\u00a0% of the annual government education budget."
)

doc.add_paragraph()

# ═════════════════════════════════════════════════════════════════════════════
# TABLE 1 — Annual and Cumulative Fiscal Cost
# ═════════════════════════════════════════════════════════════════════════════
heading_para("Table 1 — Annual and Cumulative Fiscal Cost by Instrument", level=2)

intro1 = doc.add_paragraph(
    "Taxable income proxied at 12\u00a0% ROIC. CIT forgone: 22\u00a0% for non-GMT operators (n\u00a0=\u00a028), "
    "7\u00a0% net for GMT-subject MNEs (n\u00a0=\u00a021) after the QDMTT floor (PMK-136/2024, effective 1\u00a0Jan\u00a02025). "
    "Post-holiday investment allowance applies to non-GMT entities only; QDMTT recaptures all saving for GMT operators. "
    "SEZ VAT and import duty are one-time costs at construction."
)

t1_headers = ["Year", "CIT Holiday", "Super Ded.", "Annual Total", "% GDP", "Cum. Total", "Cum. % GDP"]
t1_data = [
    ["2025", "4.024", "—", "4.024", "0.018%", "5.001", "0.023%"],
    ["2027", "7.642", "0.012", "7.654", "0.035%", "17.927", "0.081%"],
    ["2030", "7.366", "0.090", "7.456", "0.034%", "40.530", "0.183%"],
    ["2035", "5.695", "0.395", "6.090", "0.028%", "74.311", "0.336%"],
    ["2040", "4.186", "0.483", "4.669", "0.021%", "99.899", "0.451%"],
    ["2045", "2.345", "0.384", "2.729", "0.012%", "119.782", "0.541%"],
    ["Cumulative (all periods)", "118.705", "10.977", "—", "—", "130.659", "0.590%"],
]

t1 = doc.add_table(rows=1 + len(t1_data), cols=len(t1_headers))
t1.style = 'Table Grid'
add_table_header_row(t1, t1_headers)
for i, row_data in enumerate(t1_data):
    is_foot = (i == len(t1_data) - 1)
    bg = LGRAY if i % 2 == 0 else None
    if is_foot:
        bg = NAVY
    fill_row(t1, i + 1, row_data, bold=is_foot, bg=bg)
    if is_foot:
        for cell in t1.rows[i + 1].cells:
            for para in cell.paragraphs:
                for run in para.runs:
                    run.font.color.rgb = WHITE

fn1 = doc.add_paragraph()
fn1_run = fn1.add_run(
    "a  Post-holiday 5-year window: 2 years at 11% CIT + 3 years at 22% CIT. Zero net cost for GMT entities (QDMTT recapture). "
    "Zero during holiday (double-dipping prohibited, PMK-153/2020 Art. 7).\n"
    "b  Includes SEZ VAT (IDR 0.796T) and import duty (IDR 0.181T), one-time at construction. "
    "GDP: BPS 2024. Education: APBN 2024 (IDR 670T). Rate: IDR 15,800/USD."
)
fn1_run.font.size = Pt(8)
fn1_run.font.color.rgb = RGBColor(0x60, 0x60, 0x60)

doc.add_paragraph()

# ═════════════════════════════════════════════════════════════════════════════
# TABLE 2 — Policy Scenarios
# ═════════════════════════════════════════════════════════════════════════════
heading_para("Table 2 — Policy Scenarios", level=2)

intro2 = doc.add_paragraph()
intro2.add_run("Scenario A").bold = True
intro2.add_run(
    ": expansion to 2,000\u00a0MW operational by 2030 (+1,474\u00a0MW from current 526\u00a0MW), requiring "
    "IDR\u00a0163.6T at IDR\u00a0111B/MW; GMT/non-GMT split 43\u00a0%/57\u00a0%; 10-year holiday for new entrants; "
    "no new SEZ concessions. "
)
intro2.add_run("Scenario B").bold = True
intro2.add_run(
    ": expansion to 3,000\u00a0MW operational by 2030 (+2,474\u00a0MW from current 526\u00a0MW), requiring "
    "IDR\u00a0274.6T at IDR\u00a0111B/MW; same entrant mix and holiday structure as Scenario\u00a0A. "
)
intro2.add_run("VAT/Import Duty").bold = True
intro2.add_run(
    " (Combined scenarios only): universal VAT exemption (11\u00a0%) + import duty waiver (2.5\u00a0%) "
    "extended to all operators on the equipment share (35\u00a0% of investment), layered on top of "
    "Scenario\u00a0A (IDR\u00a0239.7T base) or Scenario\u00a0B (IDR\u00a0350.7T base)."
)

t2_headers = ["Scenario", "MW", "Inv. (IDR T)", "CIT (IDR T)", "SD (IDR T)", "VAT+Duty (IDR T)", "Total (IDR T)", "Ann. % GDP"]
t2_data = [
    ["Baseline (526 MW op.)",       "526",   "76.1",  "15.7", "2.2", "0.2",  "18.1",  "0.007%"],
    ["A: incremental (+1,474 MW)",  "+1474", "+163.6","+30.5","+4.7","—",    "+35.2", "+0.014%"],
    ["Scenario A total (2,000 MW)", "2000",  "239.7", "46.2", "6.8", "0.2",  "53.2",  "0.021%"],
    ["B: incremental (+2,474 MW)",  "+2474", "+274.6","+51.2","+7.8","—",    "+59.1", "+0.023%"],
    ["Scenario B total (3,000 MW)", "3000",  "350.7", "66.9", "10.0","0.2",  "77.1",  "0.030%"],
    ["Combined A + VAT",            "2000",  "239.7", "46.2", "6.8", "11.2", "64.2",  "0.038%"],
    ["Combined B + VAT",            "3000",  "350.7", "66.9", "10.0","16.4", "93.3",  "0.055%"],
]

t2 = doc.add_table(rows=1 + len(t2_data), cols=len(t2_headers))
t2.style = 'Table Grid'
add_table_header_row(t2, t2_headers)

ORANGE = RGBColor(0xFF, 0xCC, 0x99)
BLUE_LT = RGBColor(0xCC, 0xE0, 0xFF)
GREEN_LT = RGBColor(0xCC, 0xE5, 0xCC)

row_bgs = [LGRAY, None, BLUE_LT, None, BLUE_LT, GREEN_LT, GREEN_LT]
row_bolds = [False, False, True, False, True, True, True]

for i, row_data in enumerate(t2_data):
    bg = row_bgs[i]
    fill_row(t2, i + 1, row_data, bold=row_bolds[i], bg=bg)

fn2 = doc.add_paragraph()
fn2_run = fn2.add_run(
    "CIT/SD/VAT+Duty all in IDR T (cumulative over incentive periods). "
    "Ann. % GDP = (CIT/10 yr + VAT+Duty/3 yr) ÷ IDR 22,139T (2024 GDP). "
    "Scenarios A and B assume no new SEZ concessions; existing SEZ VAT (IDR 0.2T) reflected in baseline. "
    "VAT+Duty for Combined A: IDR 9.2T (VAT) + IDR 2.0T (duty) = IDR 11.2T on IDR 83.9T equipment base "
    "(35% of IDR 239.7T). Combined B: IDR 13.5T (VAT) + IDR 2.9T (duty) = IDR 16.4T on IDR 122.7T "
    "equipment base (35% of IDR 350.7T)."
)
fn2_run.font.size = Pt(8)
fn2_run.font.color.rgb = RGBColor(0x60, 0x60, 0x60)

doc.add_paragraph()

# ═════════════════════════════════════════════════════════════════════════════
# TABLE 3 — Fiscal Cost by Data Centre (top 20)
# ═════════════════════════════════════════════════════════════════════════════
heading_para("Table 3 — Tax Incentive Cost by Data Centre (Top 20 by Exposure)", level=2)

t3_headers = ["Operator", "Facility", "GMT", "Hol. Yrs", "Inv. (IDR T)", "Ann. CIT", "Cum. CIT", "SD (IDR T)"]
t3_data = [
    ["BDx Indonesia",               "CGK4 Jatiluhur",          "No",  "20", "77.50", "2.046", "40.920", "3.410"],
    ["Digital Edge (Indonet)",      "CGK Campus",               "No",  "20", "69.75", "1.841", "36.828", "3.069"],
    ["Princeton Digital Group",     "JC3",                      "No",  "15", "15.50", "0.409", "6.138",  "0.682"],
    ["DAMAC Digital",               "Cikarang DC",              "Yes", "20", "35.65", "0.299", "5.989",  "—"],
    ["Princeton Digital Group",     "Batam Campus",             "No",  "10", "10.42", "0.275", "2.751",  "0.458"],
    ["DCI Indonesia",               "H1 Campus",                "No",  "10", "11.32", "0.299", "2.988",  "0.498"],
    ["Microsoft",                   "Indonesia Central Cloud",  "Yes", "15", "26.35", "0.221", "3.320",  "—"],
    ["DayOne / INA JV",             "Nongsa Digital Park",      "No",  "10", "6.70",  "0.177", "1.769",  "0.295"],
    ["Aslan Energy Capital",        "Aslan DC",                 "No",  "10", "6.20",  "0.164", "1.637",  "0.273"],
    ["DCI Indonesia",               "JK5",                      "No",  "10", "5.58",  "0.147", "1.473",  "0.246"],
    ["DCI Indonesia",               "JK6",                      "No",  "10", "5.58",  "0.147", "1.473",  "0.246"],
    ["Digital Edge (Indonet)",      "EDGE2",                    "No",  "10", "5.04",  "0.133", "1.331",  "0.222"],
    ["DCI Indonesia",               "H2-02",                    "No",  "7",  "4.65",  "0.123", "0.859",  "0.205"],
    ["Korea Investment / Sinar Mas","KMG Jakarta (AI Data)",    "No",  "7",  "4.65",  "0.123", "0.859",  "0.205"],
    ["BW Digital",                  "BW DC",                    "No",  "7",  "3.10",  "0.082", "0.573",  "0.136"],
    ["DCI Indonesia",               "E1 Data Center",           "No",  "7",  "3.10",  "0.082", "0.573",  "0.136"],
    ["Bitera (MMS Group)",          "Bitera Jakarta",           "No",  "7",  "3.10",  "0.082", "0.573",  "0.136"],
    ["NTT DATA",                    "Jakarta 3 (JKT3)",         "Yes", "10", "7.75",  "0.065", "0.651",  "—"],
    ["Tencent",                     "Indonesia Expansion",      "Yes", "10", "7.75",  "0.065", "0.651",  "—"],
    ["K2 Strategic",                "K2 Karawang Campus",       "Yes", "10", "7.75",  "0.065", "0.651",  "—"],
    ["TOTAL (45 facilities)",       "",                         "",    "",   "385.81","7.720", "118.705","10.977"],
]

t3 = doc.add_table(rows=1 + len(t3_data), cols=len(t3_headers))
t3.style = 'Table Grid'
add_table_header_row(t3, t3_headers)
for i, row_data in enumerate(t3_data):
    is_foot = (i == len(t3_data) - 1)
    bg = LGRAY if i % 2 == 0 else None
    if is_foot:
        bg = NAVY
    fill_row(t3, i + 1, row_data, bold=is_foot, bg=bg)
    if is_foot:
        for cell in t3.rows[i + 1].cells:
            for para in cell.paragraphs:
                for run in para.runs:
                    run.font.color.rgb = WHITE

fn3 = doc.add_paragraph()
fn3_run = fn3.add_run(
    "Cum. CIT = CIT forgone over full holiday. SD = cumulative post-holiday investment allowance CIT cost "
    "(non-GMT only). Elitery/Moratelindo below IDR 100B threshold (no holiday). "
    "CIT forfeited: 22% non-GMT; 7% GMT; 11% for 50%-reduction tier."
)
fn3_run.font.size = Pt(8)
fn3_run.font.color.rgb = RGBColor(0x60, 0x60, 0x60)

doc.add_paragraph()

# ═════════════════════════════════════════════════════════════════════════════
# APPENDIX: Modelling Assumptions
# ═════════════════════════════════════════════════════════════════════════════
heading_para("Appendix — Key Modelling Assumptions", level=2)

t4_headers = ["Parameter", "Rationale", "Value"]
t4_data = [
    ["ROIC", "DCI Indonesia (IDX: DCII) 2023 ROIC 14–16%; global DC sector 8–15%", "12%"],
    ["Exchange rate", "Bank Indonesia 2024 annual average", "IDR 15,800/USD"],
    ["Non-GMT forgone CIT", "No QDMTT floor; full statutory CIT rate", "22%"],
    ["GMT forgone CIT", "Net of 15% QDMTT floor (PMK-136/2024, effective 1 Jan 2025)", "7%"],
    ["50%-reduction tier", "IDR 100B–500B investment bracket", "11%"],
    ["Holiday duration", "<IDR 100B: 0 yr; 100B–500B: 5 yr; 500B–1T: 5 yr; 1T–5T: 7 yr; 5T–15T: 10 yr; 15T–30T: 15 yr; >30T: 20 yr", "See tier"],
    ["Investment allowance", "5%/yr × 6 yr = 30% cumulative (GR 45/2019)", "5%/yr"],
    ["GMT post-holiday", "QDMTT recaptures all base-erosion CIT saving", "Zero net cost"],
    ["Equipment share (SEZ)", "Capital equipment as share of total capex", "35%"],
    ["VAT rate", "UU No. 7/2021", "11%"],
    ["Import duty", "Blended rate, IT and electrical equipment", "2.5%"],
    ["Scenario A target", "Expansion from 526 MW baseline", "2,000 MW (+1,474 MW)"],
    ["Scenario A benchmark", "Blended database ratio", "IDR 111B/MW"],
    ["Scenario A GMT/non-GMT", "Mirrors current database", "43%/57%"],
    ["Scenario A holiday", "New entrants", "10 yr"],
    ["Scenario B target", "Expansion from 526 MW baseline", "3,000 MW (+2,474 MW)"],
    ["Scenario B benchmark", "Same as Scenario A", "IDR 111B/MW"],
    ["Scenario B GMT/non-GMT", "Same as Scenario A", "43%/57%"],
    ["VAT/Duty equipment share", "Capital equipment as share of total capex", "35%"],
    ["VAT/Duty base (A)", "35% of Scenario A investment (239.7T)", "IDR 83.9T"],
    ["VAT/Duty base (B)", "35% of Scenario B investment (350.7T)", "IDR 122.7T"],
    ["GDP 2024", "BPS preliminary estimate", "IDR 22,139T"],
    ["Education budget", "APBN 2024", "IDR 670T"],
]

t4 = doc.add_table(rows=1 + len(t4_data), cols=3)
t4.style = 'Table Grid'
add_table_header_row(t4, t4_headers, col_widths_cm=[5.0, 10.0, 3.5])
for i, row_data in enumerate(t4_data):
    bg = LGRAY if i % 2 == 0 else None
    fill_row(t4, i + 1, row_data, bg=bg,
             alignments=[WD_ALIGN_PARAGRAPH.LEFT, WD_ALIGN_PARAGRAPH.LEFT, WD_ALIGN_PARAGRAPH.CENTER])

fn4 = doc.add_paragraph()
fn4_run = fn4.add_run(
    "Sensitivity: ±3 pp ROIC alters annual CIT by ≈IDR ±0.6T. "
    "±5 pp equipment share alters SEZ costs by ≈IDR ±0.1T. "
    "Treating pre-2025 holiday years for GMT operators at full 22% raises total cost by ≈IDR 8–10T."
)
fn4_run.font.size = Pt(8)
fn4_run.font.color.rgb = RGBColor(0x60, 0x60, 0x60)

# ── Save ─────────────────────────────────────────────────────────────────────
out_path = "reports/fiscal_cost_report.docx"
doc.save(out_path)
print(f"Saved: {out_path}")
