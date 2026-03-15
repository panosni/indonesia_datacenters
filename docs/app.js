// ═══════════════════════════════════════════════════════════
// DATA — generated from indonesia_datacenters.csv (March 2025)
// ═══════════════════════════════════════════════════════════
var DC = [
  { operator:"DCI Indonesia", facility_name:"JK5", city:"Bekasi", province:"West Java", status:"Operational", capacity_mw:36, planned_capacity_mw:null, investment_usd_million:353, year_operational:2023, lat:-6.34, lng:107.13, tax_holiday_years:10, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.147, cumulative_fiscal_cost_idr:1.473, notes:"PP 78/2019 tax allowance: 5% × 5.58T = 0.279T/yr deduction for 6 yrs after holiday" },
  { operator:"DCI Indonesia", facility_name:"JK6", city:"Bekasi", province:"West Java", status:"Operational", capacity_mw:36, planned_capacity_mw:null, investment_usd_million:353, year_operational:2024, lat:-6.342, lng:107.132, tax_holiday_years:10, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.147, cumulative_fiscal_cost_idr:1.473, notes:"PP 78/2019 tax allowance: 5% × 5.58T = 0.279T/yr deduction for 6 yrs after holiday; taxable income = 0.391T/yr" },
  { operator:"DCI Indonesia", facility_name:"H1 Campus", city:"Bekasi", province:"West Java", status:"Under Construction", capacity_mw:16.3, planned_capacity_mw:73, investment_usd_million:716, year_operational:2025, lat:-6.338, lng:107.128, tax_holiday_years:10, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.299, cumulative_fiscal_cost_idr:2.988, notes:"PP 78/2019 tax allowance: 5% × 11.32T = 0.566T/yr deduction for 6 yrs after holiday" },
  { operator:"DCI Indonesia", facility_name:"H2 Pertiwi Lestari (Phase 1)", city:"Bekasi", province:"West Java", status:"Under Construction", capacity_mw:135, planned_capacity_mw:600, investment_usd_million:111, year_operational:2026, lat:-6.336, lng:107.135, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.046, cumulative_fiscal_cost_idr:0.323, notes:"PP 78/2019 tax allowance: 5% × 1.75T = 0.088T/yr deduction for 6 yrs after holiday" },
  { operator:"DCI Indonesia", facility_name:"H2-02", city:"Bekasi", province:"West Java", status:"Planned", capacity_mw:6.7, planned_capacity_mw:30, investment_usd_million:294, year_operational:2026, lat:-6.336, lng:107.137, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.123, cumulative_fiscal_cost_idr:0.859, notes:"PP 78/2019 tax allowance: 5% × 4.65T = 0.233T/yr deduction for 6 yrs after holiday" },
  { operator:"Telkom Indonesia (NeutraDC)", facility_name:"NeutraDC Portfolio (33 sites)", city:"Multiple", province:"Multiple", status:"Operational", capacity_mw:42, planned_capacity_mw:null, investment_usd_million:165, year_operational:null, lat:-6.21, lng:106.845, tax_holiday_years:7, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.022, cumulative_fiscal_cost_idr:0.153, notes:"PP 78/2019 tax allowance: 5% × 2.60T = 0.130T/yr deduction for 6 yrs after holiday" },
  { operator:"Telkom Indonesia (NeutraDC)", facility_name:"Cikarang Expansion", city:"Bekasi", province:"West Java", status:"Under Construction", capacity_mw:13.4, planned_capacity_mw:60, investment_usd_million:471, year_operational:2025, lat:-6.352, lng:107.148, tax_holiday_years:10, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.062, cumulative_fiscal_cost_idr:0.625, notes:"PP 78/2019 tax allowance: 5% × 7.44T = 0.372T/yr deduction for 6 yrs after holiday" },
  { operator:"NTT DATA", facility_name:"Jakarta 2 (JKT2)", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:9.4, planned_capacity_mw:null, investment_usd_million:74, year_operational:2020, lat:-6.195, lng:106.822, tax_holiday_years:7, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.01, cumulative_fiscal_cost_idr:0.069, notes:"PT NTT Global Data Centers Indonesia" },
  { operator:"NTT DATA", facility_name:"Jakarta 3 (JKT3)", city:"Bekasi", province:"West Java", status:"Operational", capacity_mw:15.2, planned_capacity_mw:45, investment_usd_million:500, year_operational:2023, lat:-6.345, lng:107.138, tax_holiday_years:10, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.065, cumulative_fiscal_cost_idr:0.651, notes:"PT NTT Global Data Centers Indonesia" },
  { operator:"NTT DATA", facility_name:"Jakarta 2 Annex (JKT2A)", city:"Jakarta", province:"DKI Jakarta", status:"Under Construction", capacity_mw:12, planned_capacity_mw:null, investment_usd_million:100, year_operational:2026, lat:-6.2, lng:106.824, tax_holiday_years:7, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.013, cumulative_fiscal_cost_idr:0.093, notes:"PT NTT Global Data Centers Indonesia" },
  { operator:"NTT DATA", facility_name:"Jakarta 1 (JKT1)", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:5, planned_capacity_mw:null, investment_usd_million:39, year_operational:2015, lat:-6.193, lng:106.82, tax_holiday_years:5, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.005, cumulative_fiscal_cost_idr:0.026, notes:"PT NTT Global Data Centers Indonesia; tax holiday confirmed (BKPM list)" },
  { operator:"SpaceDC", facility_name:"ID01", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:25.45, planned_capacity_mw:null, investment_usd_million:175, year_operational:2022, lat:-6.225, lng:106.83, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.073, cumulative_fiscal_cost_idr:0.51, notes:"PP 78/2019 tax allowance: 5% × 2.76T = 0.138T/yr deduction for 6 yrs after holiday" },
  { operator:"EdgeConneX", facility_name:"GTN Cikarang", city:"Bekasi", province:"West Java", status:"Operational", capacity_mw:7, planned_capacity_mw:90, investment_usd_million:48, year_operational:2022, lat:-6.35, lng:107.145, tax_holiday_years:5, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.006, cumulative_fiscal_cost_idr:0.032, notes:"PP 78/2019 tax allowance: 5% × 0.76T = 0.038T/yr deduction for 6 yrs after holiday" },
  { operator:"EdgeConneX", facility_name:"Jakarta Campus", city:"Bekasi", province:"West Java", status:"Under Construction", capacity_mw:30, planned_capacity_mw:200, investment_usd_million:396, year_operational:2025, lat:-6.248, lng:107, tax_holiday_years:10, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.053, cumulative_fiscal_cost_idr:0.526, notes:"PP 78/2019 tax allowance: 5% × 6.26T = 0.313T/yr deduction for 6 yrs after holiday" },
  { operator:"Princeton Digital Group", facility_name:"JC3", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:120, planned_capacity_mw:null, investment_usd_million:1000, year_operational:2023, lat:-6.185, lng:106.835, tax_holiday_years:15, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.409, cumulative_fiscal_cost_idr:6.138, notes:"PP 78/2019 tax allowance: 5% × 15.50T = 0.775T/yr deduction for 6 yrs after holiday" },
  { operator:"Princeton Digital Group", facility_name:"Cibitung Campus", city:"Bekasi", province:"West Java", status:"Under Construction", capacity_mw:22, planned_capacity_mw:null, investment_usd_million:110, year_operational:2025, lat:-6.332, lng:107.126, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.045, cumulative_fiscal_cost_idr:0.316, notes:"PP 78/2019 tax allowance: 5% × 1.71T = 0.086T/yr deduction for 6 yrs after holiday" },
  { operator:"Princeton Digital Group", facility_name:"Batam Campus", city:"Batam", province:"Riau Islands", status:"Planned", capacity_mw:21.5, planned_capacity_mw:96, investment_usd_million:659, year_operational:2026, lat:1.13, lng:104.053, tax_holiday_years:10, pillar2:false, in_sez:true, annual_fiscal_cost_idr:0.275, cumulative_fiscal_cost_idr:2.751, notes:"PP 78/2019 tax allowance: 5% × 10.42T = 0.521T/yr deduction for 6 yrs after holiday" },
  { operator:"Digital Edge (Indonet)", facility_name:"EDGE1", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:15, planned_capacity_mw:null, investment_usd_million:147, year_operational:2021, lat:-6.24, lng:106.79, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.062, cumulative_fiscal_cost_idr:0.431, notes:"PT Ekagrata Data Gemilang (via PT Indointernet IDX:EDGE); tax holiday confirmed (BKPM list)" },
  { operator:"Digital Edge (Indonet)", facility_name:"EDGE2", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:14, planned_capacity_mw:23, investment_usd_million:325, year_operational:2026, lat:-6.242, lng:106.793, tax_holiday_years:10, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.133, cumulative_fiscal_cost_idr:1.331, notes:"PT Ekagrata Data Gemilang (via PT Indointernet IDX:EDGE); tax holiday confirmed (BKPM list)" },
  { operator:"Digital Edge (Indonet)", facility_name:"CGK Campus", city:"Bekasi", province:"West Java", status:"Under Construction", capacity_mw:111.7, planned_capacity_mw:500, investment_usd_million:4500, year_operational:null, lat:-6.255, lng:107.04, tax_holiday_years:20, pillar2:false, in_sez:false, annual_fiscal_cost_idr:1.841, cumulative_fiscal_cost_idr:36.828, notes:"PT Ekagrata Data Gemilang (via PT Indointernet IDX:EDGE); tax holiday confirmed (BKPM list)" },
  { operator:"DAMAC Digital", facility_name:"Cikarang DC", city:"Bekasi", province:"West Java", status:"Planned", capacity_mw:32.2, planned_capacity_mw:144, investment_usd_million:2300, year_operational:2026, lat:-6.358, lng:107.148, tax_holiday_years:20, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.299, cumulative_fiscal_cost_idr:5.989, notes:"PP 78/2019 tax allowance: 5% × 35.65T = 1.783T/yr deduction for 6 yrs after holiday" },
  { operator:"Digital Realty / Bersama Digital (BDDC)", facility_name:"CGK10", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:5, planned_capacity_mw:null, investment_usd_million:59, year_operational:2025, lat:-6.175, lng:106.84, tax_holiday_years:5, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.008, cumulative_fiscal_cost_idr:0.039, notes:"PT PCDC Propco One (BDDC/BDIA platform)" },
  { operator:"Digital Realty / Bersama Digital (BDDC)", facility_name:"CGK11", city:"Jakarta", province:"DKI Jakarta", status:"Planned", capacity_mw:7.2, planned_capacity_mw:32, investment_usd_million:137, year_operational:2026, lat:-6.177, lng:106.842, tax_holiday_years:7, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.018, cumulative_fiscal_cost_idr:0.128, notes:"PP 78/2019 tax allowance: 5% × 2.17T = 0.109T/yr deduction for 6 yrs after holiday" },
  { operator:"Digital Realty / Bersama Digital (BDDC)", facility_name:"JBT1 (Jakarta Barat Tangerang 1)", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:30, planned_capacity_mw:null, investment_usd_million:196, year_operational:2022, lat:-6.179, lng:106.841, tax_holiday_years:7, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.026, cumulative_fiscal_cost_idr:0.182, notes:"PT PCDC Propco One; tax holiday confirmed (BKPM list)" },
  { operator:"BDx Indonesia", facility_name:"CGK4 Jatiluhur", city:"Purwakarta", province:"West Java", status:"Planned", capacity_mw:111.7, planned_capacity_mw:500, investment_usd_million:4905, year_operational:2027, lat:-6.5, lng:107.35, tax_holiday_years:20, pillar2:false, in_sez:false, annual_fiscal_cost_idr:2.046, cumulative_fiscal_cost_idr:40.92, notes:"PP 78/2019 tax allowance: 5% × 77.50T = 3.875T/yr deduction for 6 yrs after holiday" },
  { operator:"Equinix / Astra International", facility_name:"JK1", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:2.4, planned_capacity_mw:18, investment_usd_million:74, year_operational:2024, lat:-6.212, lng:106.847, tax_holiday_years:7, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.01, cumulative_fiscal_cost_idr:0.068, notes:"PP 78/2019 tax allowance: 5% × 1.15T = 0.058T/yr deduction for 6 yrs after holiday" },
  { operator:"ST Telemedia GDC", facility_name:"STT Jakarta-2", city:"Jakarta", province:"DKI Jakarta", status:"Under Construction", capacity_mw:24, planned_capacity_mw:null, investment_usd_million:235, year_operational:2025, lat:-6.218, lng:106.831, tax_holiday_years:7, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.031, cumulative_fiscal_cost_idr:0.219, notes:"PP 78/2019 tax allowance: 5% × 3.72T = 0.186T/yr deduction for 6 yrs after holiday" },
  { operator:"IndoKeppel Data Centres", facility_name:"IKDC1", city:"Bogor", province:"West Java", status:"Under Construction", capacity_mw:11.6, planned_capacity_mw:null, investment_usd_million:417, year_operational:2025, lat:-6.597, lng:106.806, tax_holiday_years:10, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.055, cumulative_fiscal_cost_idr:0.554, notes:"PP 78/2019 tax allowance: 5% × 6.59T = 0.330T/yr deduction for 6 yrs after holiday" },
  { operator:"Gaw Capital / Sinar Primera", facility_name:"Batam Phase 1", city:"Batam", province:"Riau Islands", status:"Operational", capacity_mw:5.2, planned_capacity_mw:20, investment_usd_million:30, year_operational:2024, lat:1.12, lng:104.045, tax_holiday_years:5, pillar2:false, in_sez:true, annual_fiscal_cost_idr:0.006, cumulative_fiscal_cost_idr:0.032, notes:"PP 78/2019 tax allowance: 5% × 0.48T = 0.024T/yr deduction for 6 yrs after holiday" },
  { operator:"DayOne / INA JV", facility_name:"Nongsa Digital Park", city:"Batam", province:"Riau Islands", status:"Under Construction", capacity_mw:16.1, planned_capacity_mw:72, investment_usd_million:424, year_operational:2026, lat:1.14, lng:104.06, tax_holiday_years:10, pillar2:false, in_sez:true, annual_fiscal_cost_idr:0.177, cumulative_fiscal_cost_idr:1.769, notes:"PT GDS IDC Service; tax holiday confirmed (BKPM list); parent GDS Holdings (NASDAQ:GDS; HKEX:9698) via DayOne" },
  { operator:"Indosat-NVIDIA (Lintasarta)", facility_name:"AI Factory (GPU Merdeka)", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:5, planned_capacity_mw:80, investment_usd_million:250, year_operational:2024, lat:-6.215, lng:106.85, tax_holiday_years:7, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.033, cumulative_fiscal_cost_idr:0.228, notes:"PP 78/2019 tax allowance: 5% × 3.88T = 0.194T/yr deduction for 6 yrs after holiday" },
  { operator:"Tencent", facility_name:"Indonesia Expansion", city:"Jakarta", province:"DKI Jakarta", status:"Planned", capacity_mw:13.7, planned_capacity_mw:null, investment_usd_million:500, year_operational:2026, lat:-6.22, lng:106.855, tax_holiday_years:10, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.065, cumulative_fiscal_cost_idr:0.651, notes:"PP 78/2019 tax allowance: 5% × 7.75T = 0.388T/yr deduction for 6 yrs after holiday" },
  { operator:"Microsoft", facility_name:"Indonesia Central Cloud Region", city:"Jakarta", province:"DKI Jakarta", status:"Under Construction", capacity_mw:46.4, planned_capacity_mw:null, investment_usd_million:1700, year_operational:null, lat:-6.208, lng:106.849, tax_holiday_years:15, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.221, cumulative_fiscal_cost_idr:3.32, notes:"PT Microsoft Operations Indonesia; tax holiday confirmed (BKPM list)" },
  { operator:"Elitery Data Center", facility_name:"Elitery DC", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:0.7, planned_capacity_mw:null, investment_usd_million:4, year_operational:null, lat:-6.23, lng:106.81, tax_holiday_years:0, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0, cumulative_fiscal_cost_idr:0, notes:"No tax holiday (below IDR 100B threshold); PP 78/2019 super deduction not triggered in post-holiday context" },
  { operator:"Moratelindo (NDC)", facility_name:"NDC Jakarta", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:1, planned_capacity_mw:null, investment_usd_million:5, year_operational:null, lat:-6.235, lng:106.815, tax_holiday_years:0, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0, cumulative_fiscal_cost_idr:0, notes:"No tax holiday (below IDR 100B threshold); PP 78/2019 super deduction not triggered in post-holiday context" },
  { operator:"Biznet", facility_name:"Biznet DC (Technovillage + MidPlaza)", city:"Multiple", province:"Multiple", status:"Operational", capacity_mw:7, planned_capacity_mw:null, investment_usd_million:41, year_operational:null, lat:-6.188, lng:106.8, tax_holiday_years:5, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.017, cumulative_fiscal_cost_idr:0.086, notes:"PP 78/2019 tax allowance: 5% × 0.65T = 0.033T/yr deduction for 6 yrs after holiday" },
  { operator:"Datacomm", facility_name:"Datacomm DC (HQ + Alam Sutera + Jababeka)", city:"Multiple", province:"Multiple", status:"Operational", capacity_mw:2, planned_capacity_mw:null, investment_usd_million:10, year_operational:null, lat:-6.192, lng:106.803, tax_holiday_years:5, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.002, cumulative_fiscal_cost_idr:0.011, notes:"PP 78/2019 tax allowance: 5% × 0.16T = 0.008T/yr deduction for 6 yrs after holiday" },
  { operator:"Pure Data Centres", facility_name:"Pure DC", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:20, planned_capacity_mw:null, investment_usd_million:137, year_operational:2019, lat:-6.2, lng:106.812, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.057, cumulative_fiscal_cost_idr:0.401, notes:"PP 78/2019 tax allowance: 5% × 2.17T = 0.109T/yr deduction for 6 yrs after holiday" },
  { operator:"SEAX Indonesia Pratama", facility_name:"SEAX DC (BSD Technopark)", city:"South Tangerang", province:"Banten", status:"Operational", capacity_mw:15, planned_capacity_mw:30, investment_usd_million:89, year_operational:2025, lat:-6.205, lng:106.818, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.037, cumulative_fiscal_cost_idr:0.259, notes:"PP 78/2019 tax allowance: 5% × 1.40T = 0.070T/yr deduction for 6 yrs after holiday" },
  { operator:"Oracle", facility_name:"Indonesia North Cloud Region (Batam)", city:"Batam", province:"Riau Islands", status:"Operational", capacity_mw:20, planned_capacity_mw:120, investment_usd_million:196, year_operational:2025, lat:1.145, lng:104.065, tax_holiday_years:7, pillar2:true, in_sez:true, annual_fiscal_cost_idr:0.026, cumulative_fiscal_cost_idr:0.182, notes:"PP 78/2019 tax allowance: 5% × 3.10T = 0.155T/yr deduction for 6 yrs after holiday" },
  { operator:"Metta DC", facility_name:"ID01 (Jababeka)", city:"Bekasi", province:"West Java", status:"Operational", capacity_mw:35, planned_capacity_mw:null, investment_usd_million:95, year_operational:null, lat:-6.362, lng:107.141, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.04, cumulative_fiscal_cost_idr:0.277, notes:"PP 78/2019 tax allowance: 5% × 1.50T = 0.075T/yr deduction for 6 yrs after holiday" },
  { operator:"K2 Strategic (K2 Data Centres / Sinar Mas Land JV)", facility_name:"K2 JKT1", city:"Bekasi", province:"West Java", status:"Operational", capacity_mw:15, planned_capacity_mw:58.8, investment_usd_million:375, year_operational:2024, lat:-6.36, lng:107.144, tax_holiday_years:10, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.05, cumulative_fiscal_cost_idr:0.497, notes:"PT K2ID Strategic Infrastructure; tax holiday confirmed (BKPM list)" },
  { operator:"K2 Strategic (K2 Data Centres / Sinar Mas Land JV)", facility_name:"K2 Karawang Campus", city:"Karawang", province:"West Java", status:"Planned", capacity_mw:13.1, planned_capacity_mw:58.8, investment_usd_million:491, year_operational:2027, lat:-6.297, lng:107.32, tax_holiday_years:10, pillar2:true, in_sez:false, annual_fiscal_cost_idr:0.065, cumulative_fiscal_cost_idr:0.651, notes:"PT K2ID Strategic Infrastructure; tax holiday confirmed (BKPM list — same entity as K2 JKT1)" },
  { operator:"Aslan Energy Capital", facility_name:"Aslan DC", city:"Jakarta", province:"DKI Jakarta", status:"Planned", capacity_mw:8.9, planned_capacity_mw:40, investment_usd_million:392, year_operational:2027, lat:-6.215, lng:106.828, tax_holiday_years:10, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.164, cumulative_fiscal_cost_idr:1.637, notes:"PP 78/2019 tax allowance: 5% × 6.20T = 0.310T/yr deduction for 6 yrs after holiday" },
  { operator:"BW Digital", facility_name:"BW DC", city:"Jakarta", province:"DKI Jakarta", status:"Planned", capacity_mw:5.5, planned_capacity_mw:null, investment_usd_million:196, year_operational:2026, lat:-6.222, lng:106.832, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.082, cumulative_fiscal_cost_idr:0.573, notes:"PP 78/2019 tax allowance: 5% × 3.10T = 0.155T/yr deduction for 6 yrs after holiday" },
  { operator:"Triputra Group", facility_name:"Triputra DC", city:"Jakarta", province:"DKI Jakarta", status:"Planned", capacity_mw:4.1, planned_capacity_mw:null, investment_usd_million:147, year_operational:2026, lat:-6.218, lng:106.843, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.062, cumulative_fiscal_cost_idr:0.431, notes:"PP 78/2019 tax allowance: 5% × 2.33T = 0.117T/yr deduction for 6 yrs after holiday" },
  { operator:"Korea Investment / Sinar Mas (PT Kuningan Mas Gemilang)", facility_name:"KMG Jakarta (AI Data Hub)", city:"Jakarta", province:"DKI Jakarta", status:"Under Construction", capacity_mw:18, planned_capacity_mw:null, investment_usd_million:300, year_operational:2027, lat:-6.255, lng:107.042, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.123, cumulative_fiscal_cost_idr:0.859, notes:"PT Kuningan Mas Gemilang" },
  { operator:"DCI Indonesia", facility_name:"E1 Data Center", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:18, planned_capacity_mw:null, investment_usd_million:196, year_operational:2023, lat:-6.339, lng:107.131, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.082, cumulative_fiscal_cost_idr:0.573, notes:"PT Datacenter Indonesia Sukses Perkasa (JV: PT DCI Indonesia Tbk IDX:DCII + Salim Group)" },
  { operator:"Bitera (MMS Group Indonesia)", facility_name:"Bitera Jakarta", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:20, planned_capacity_mw:null, investment_usd_million:196, year_operational:2024, lat:-6.197, lng:106.817, tax_holiday_years:7, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0.082, cumulative_fiscal_cost_idr:0.573, notes:"PT Mitra Informatika Gemilang; tax holiday confirmed (BKPM list)" },
  { operator:"Data Center Galaxis", facility_name:"Unknown — pending verification", city:"Unknown", province:"Unknown", status:"Unknown", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:null, lat:-6.23, lng:106.84, tax_holiday_years:0, pillar2:false, in_sez:false, annual_fiscal_cost_idr:0, cumulative_fiscal_cost_idr:0, notes:"PT. Data Center Galaxis" },
];

// ═══════════════════════════════════════════════════════════
// MAP
// ═══════════════════════════════════════════════════════════
var map = L.map('map').setView([-4.0, 106.0], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors', maxZoom: 18
}).addTo(map);

var COLOR = { 'Operational': '#27AE60', 'Under Construction': '#E67E22', 'Planned': '#C0392B' };
var allMarkers = [];

DC.forEach(function(d) {
  if (!d.lat) return;
  var mwText = d.capacity_mw ? '<b>' + d.capacity_mw + ' MW</b> live' : '';
  var mwPlan = d.planned_capacity_mw ? '<b>' + d.planned_capacity_mw + ' MW</b> planned' : '';
  var parts = [mwText, mwPlan].filter(Boolean).join(' &middot; ');
  var inv = d.investment_usd_million
    ? '<br>Investment: <b>$' + (d.investment_usd_million >= 1000 ? (d.investment_usd_million / 1000).toFixed(1) + 'B' : d.investment_usd_million + 'M') + '</b>'
    : '';
  var popup =
    '<div style="min-width:200px;font-family:sans-serif">' +
      '<div style="font-weight:800;font-size:1rem;color:#1B3A5C;border-bottom:2px solid #1B3A5C;padding-bottom:4px;margin-bottom:6px">' + d.facility_name + '</div>' +
      '<div style="color:#666;font-size:.85rem;margin-bottom:4px">' + d.operator + '</div>' +
      '<div style="margin-bottom:4px"><span style="background:' + COLOR[d.status] + '20;color:' + COLOR[d.status] + ';padding:2px 8px;border-radius:10px;font-size:.78rem;font-weight:700">' + d.status + '</span></div>' +
      '<div style="font-size:.85rem">' + parts + inv + '</div>' +
      (d.notes ? '<div style="font-size:.78rem;color:#888;margin-top:4px">' + d.notes + '</div>' : '') +
    '</div>';
  var radius = 7 + (d.capacity_mw || d.planned_capacity_mw || 0) / 60;
  var m = L.circleMarker([d.lat, d.lng], {
    radius: Math.min(radius, 22),
    fillColor: COLOR[d.status],
    color: '#fff',
    weight: 1.5,
    fillOpacity: 0.85
  }).bindPopup(popup);
  m._dcStatus = d.status;
  m.addTo(map);
  allMarkers.push(m);
});

// Legend
var legend = L.control({ position: 'bottomright' });
legend.onAdd = function() {
  var div = L.DomUtil.create('div');
  div.style.cssText = 'background:white;padding:10px 14px;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,.2);font-size:.8rem;line-height:1.8;font-family:sans-serif';
  var html = '';
  for (var key in COLOR) {
    html += '<div><span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:' + COLOR[key] + ';margin-right:6px;vertical-align:middle"></span>' + key + '</div>';
  }
  div.innerHTML = html;
  return div;
};
legend.addTo(map);

function filterMap(status, btn) {
  allMarkers.forEach(function(m) {
    if (status === 'all' || m._dcStatus === status) m.addTo(map);
    else map.removeLayer(m);
  });
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active-filter'); });
  if (btn) btn.classList.add('active-filter');
}
// expose globally
window.filterMap = filterMap;


// ═══════════════════════════════════════════════════════════
// CHARTS
// ═══════════════════════════════════════════════════════════

// Investment chart
new Chart(document.getElementById('investChart'), {
  type: 'bar',
  data: {
    labels: ['BDx Jatiluhur', 'Digital Edge CGK', 'DAMAC Cikarang', 'Microsoft', 'Princeton JC3', 'DCI H1 Campus', 'Princeton Batam', 'NTT JKT3'],
    datasets: [{
      label: 'Investment (USD Billion)',
      data: [4.91, 4.41, 2.26, 1.67, 0.98, 0.72, 0.66, 0.49],
      backgroundColor: ['#1B3A5C','#2C5F8A','#2980B9','#3498DB','#5DADE2','#85C1E9','#AED6F1','#D6EAF8'],
      borderRadius: 6
    }]
  },
  options: {
    indexAxis: 'y',
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: '#eee' }, ticks: { callback: function(v) { return '$' + v + 'B'; } } },
      y: { grid: { display: false }, ticks: { font: { size: 11 } } }
    }
  }
});

// Capacity chart
new Chart(document.getElementById('capChart'), {
  type: 'bar',
  data: {
    labels: ['DCI H2 Pertiwi', 'Digital Edge CGK', 'BDx Jatiluhur', 'EdgeConneX', 'DAMAC', 'Princeton JC3', 'Oracle Batam', 'Princeton Batam'],
    datasets: [{
      label: 'Planned MW',
      data: [600, 500, 500, 200, 144, 120, 120, 96],
      backgroundColor: '#16A085',
      borderRadius: 6
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: '#eee' }, title: { display: true, text: 'MW' } },
      x: { grid: { display: false }, ticks: { font: { size: 10 } } }
    }
  }
});

// Fiscal doughnut — cumulative cost breakdown (USD Million)
new Chart(document.getElementById('fiscalChart'), {
  type: 'doughnut',
  data: {
    labels: ['CIT Holiday ($7.51B)', 'Super Deduction ($0.69B)', 'SEZ VAT & Duty ($0.06B)'],
    datasets: [{
      data: [7510, 694, 62],
      backgroundColor: ['#C0392B','#E67E22','#16A085'],
      hoverOffset: 8
    }]
  },
  options: {
    plugins: {
      legend: { position: 'right', labels: { font: { size: 12 }, padding: 12 } },
      title: { display: true, text: 'Cumulative Fiscal Cost by Instrument (USD Million)', font: { size: 13 } }
    }
  }
});

// ═══════════════════════════════════════════════════════════
// TABLE
// ═══════════════════════════════════════════════════════════
var sortKey = null;
var sortDir = 1;
var MAX_MW = Math.max.apply(null, DC.map(function(d) { return d.capacity_mw || d.planned_capacity_mw || 0; }));

// Populate city filter
var cities = [];
DC.forEach(function(d) { if (cities.indexOf(d.city) === -1) cities.push(d.city); });
cities.sort();
var citySelect = document.getElementById('cityFilter');
cities.forEach(function(c) {
  var o = document.createElement('option');
  o.value = c; o.text = c;
  citySelect.appendChild(o);
});

function renderTable() {
  var q = document.getElementById('searchBox').value.toLowerCase();
  var st = document.getElementById('statusFilter').value;
  var ct = document.getElementById('cityFilter').value;
  var rows = DC.filter(function(d) {
    var text = [d.operator, d.facility_name, d.city, d.notes || ''].join(' ').toLowerCase();
    return (!q || text.indexOf(q) !== -1) &&
           (!st || d.status === st) &&
           (!ct || d.city === ct);
  });
  if (sortKey) {
    rows = rows.slice().sort(function(a, b) {
      var av = a[sortKey] != null ? a[sortKey] : (sortDir === 1 ? Infinity : -Infinity);
      var bv = b[sortKey] != null ? b[sortKey] : (sortDir === 1 ? Infinity : -Infinity);
      if (av < bv) return -sortDir;
      if (av > bv) return sortDir;
      return 0;
    });
  }
  document.getElementById('rowCount').textContent = rows.length + ' facilities';
  var tb = document.getElementById('tableBody');
  tb.innerHTML = rows.map(function(d) {
    var mw = d.capacity_mw || d.planned_capacity_mw || 0;
    var barW = mw ? Math.max(2, Math.round(mw / MAX_MW * 80)) : 0;
    var badge = d.status === 'Operational' ? 'badge-op' : d.status === 'Under Construction' ? 'badge-uc' : 'badge-pl';
    var inv = d.investment_usd_million
      ? (d.investment_usd_million >= 1000 ? '$' + (d.investment_usd_million / 1000).toFixed(1) + 'B' : '$' + d.investment_usd_million + 'M')
      : '\u2014';
    return '<tr>' +
      '<td><b>' + d.operator + '</b></td>' +
      '<td title="' + (d.notes || '') + '">' + d.facility_name + '</td>' +
      '<td>' + d.city + '</td>' +
      '<td>' + d.province + '</td>' +
      '<td><span class="badge ' + badge + '">' + d.status + '</span></td>' +
      '<td>' + (d.capacity_mw != null ? '<div class="mw-bar-wrap"><div class="mw-bar" style="width:' + barW + 'px;background:#27AE60"></div><span>' + d.capacity_mw + '</span></div>' : '\u2014') + '</td>' +
      '<td>' + (d.planned_capacity_mw != null ? '<div class="mw-bar-wrap"><div class="mw-bar" style="width:' + barW + 'px;background:#2980B9"></div><span>' + d.planned_capacity_mw + '</span></div>' : '\u2014') + '</td>' +
      '<td>' + inv + '</td>' +
      '<td>' + (d.year_operational || '\u2014') + '</td>' +
    '</tr>';
  }).join('');
}
window.renderTable = renderTable;

function sortTable(key) {
  if (sortKey === key) sortDir *= -1;
  else { sortKey = key; sortDir = 1; }
  var cols = ['operator', 'facility_name', 'city', 'province', 'status', 'capacity_mw', 'planned_capacity_mw', 'investment_usd_million', 'year_operational'];
  document.querySelectorAll('.dc-table thead th').forEach(function(th) { th.className = ''; });
  var idx = cols.indexOf(key);
  if (idx >= 0) {
    var th = document.querySelectorAll('.dc-table thead th')[idx];
    th.className = sortDir === 1 ? 'asc' : 'desc';
  }
  renderTable();
}
window.sortTable = sortTable;

renderTable();
