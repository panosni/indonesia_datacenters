// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════
var DC = [
  { operator:"DCI Indonesia", facility_name:"JK5 Cibitung", city:"Bekasi", province:"West Java", status:"Operational", capacity_mw:36, planned_capacity_mw:null, investment_usd_million:null, year_operational:2023, lat:-6.340, lng:107.130, notes:"Part of Cibitung campus; Tier IV" },
  { operator:"DCI Indonesia", facility_name:"JK6 Cibitung", city:"Bekasi", province:"West Java", status:"Operational", capacity_mw:36, planned_capacity_mw:null, investment_usd_million:null, year_operational:2024, lat:-6.342, lng:107.132, notes:"Cloud provider anchor tenant; Tier IV" },
  { operator:"DCI Indonesia", facility_name:"H1 Campus", city:"Bekasi", province:"West Java", status:"Under Construction", capacity_mw:null, planned_capacity_mw:73, investment_usd_million:null, year_operational:2025, lat:-6.338, lng:107.128, notes:"Full campus build-out" },
  { operator:"DCI Indonesia", facility_name:"H2 Pertiwi Lestari", city:"Bekasi", province:"West Java", status:"Under Construction", capacity_mw:135, planned_capacity_mw:600, investment_usd_million:null, year_operational:2026, lat:-6.336, lng:107.135, notes:"Solar-powered; Salim Group JV; 135 MW Phase 1" },
  { operator:"Telkom (NeutraDC)", facility_name:"NeutraDC Portfolio", city:"Multiple", province:"Multiple", status:"Operational", capacity_mw:42, planned_capacity_mw:60, investment_usd_million:null, year_operational:2020, lat:-6.210, lng:106.845, notes:"33 sites; 70% utilization; 19 micro-edge" },
  { operator:"NTT DATA", facility_name:"Jakarta 2 (JKT2)", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:9.4, planned_capacity_mw:null, investment_usd_million:null, year_operational:2020, lat:-6.195, lng:106.822, notes:"7,700 sqm IT space" },
  { operator:"NTT DATA", facility_name:"Jakarta 3 (JKT3)", city:"Bekasi", province:"West Java", status:"Operational", capacity_mw:15.2, planned_capacity_mw:45, investment_usd_million:null, year_operational:2023, lat:-6.345, lng:107.138, notes:"18,000 sqm; 4-story; expandable to 45 MW" },
  { operator:"NTT DATA", facility_name:"Jakarta 2 Annex (JKT2A)", city:"Jakarta", province:"DKI Jakarta", status:"Under Construction", capacity_mw:12, planned_capacity_mw:null, investment_usd_million:null, year_operational:2026, lat:-6.200, lng:106.824, notes:"5,800 sqm; early 2026 completion" },
  { operator:"SpaceDC", facility_name:"ID01", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:25.45, planned_capacity_mw:null, investment_usd_million:null, year_operational:2022, lat:-6.225, lng:106.830, notes:"PUE 1.3; green positioning" },
  { operator:"EdgeConneX", facility_name:"GTN Cikarang", city:"Bekasi", province:"West Java", status:"Operational", capacity_mw:7, planned_capacity_mw:90, investment_usd_million:null, year_operational:2022, lat:-6.350, lng:107.145, notes:"Acquired 2022; expansion to 90 MW planned" },
  { operator:"EdgeConneX", facility_name:"Jakarta Campus", city:"Bekasi", province:"West Java", status:"Under Construction", capacity_mw:30, planned_capacity_mw:200, investment_usd_million:null, year_operational:2025, lat:-6.248, lng:107.000, notes:"Multi-phase 30 MW each; hyperscale" },
  { operator:"Princeton Digital Group", facility_name:"JC3 Jakarta", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:120, planned_capacity_mw:null, investment_usd_million:null, year_operational:2023, lat:-6.185, lng:106.835, notes:"Carrier-neutral; AI-ready; PUE <1.4" },
  { operator:"Princeton Digital Group", facility_name:"Cibitung Campus", city:"Bekasi", province:"West Java", status:"Under Construction", capacity_mw:null, planned_capacity_mw:22, investment_usd_million:110, year_operational:2025, lat:-6.332, lng:107.126, notes:"IDR 1.7T green loan; AI-ready" },
  { operator:"Princeton Digital Group", facility_name:"Batam Campus", city:"Batam", province:"Riau Islands", status:"Planned", capacity_mw:null, planned_capacity_mw:96, investment_usd_million:null, year_operational:2026, lat:1.130, lng:104.053, notes:"Cross-strait cable demand" },
  { operator:"Digital Edge", facility_name:"EDGE1", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:15, planned_capacity_mw:null, investment_usd_million:null, year_operational:2021, lat:-6.240, lng:106.790, notes:"Part of combined Jakarta capacity" },
  { operator:"Digital Edge", facility_name:"EDGE2", city:"Jakarta", province:"DKI Jakarta", status:"Under Construction", capacity_mw:null, planned_capacity_mw:23, investment_usd_million:325, year_operational:2026, lat:-6.242, lng:106.793, notes:"$325M credit facility" },
  { operator:"Digital Edge", facility_name:"CGK Campus (GIIC)", city:"Bekasi", province:"West Java", status:"Under Construction", capacity_mw:null, planned_capacity_mw:500, investment_usd_million:4500, year_operational:2027, lat:-6.255, lng:107.040, notes:"500 MW scalable to 1 GW; PUE 1.25; $4.5B" },
  { operator:"DAMAC Digital", facility_name:"Cikarang DC", city:"Bekasi", province:"West Java", status:"Planned", capacity_mw:null, planned_capacity_mw:144, investment_usd_million:2300, year_operational:2026, lat:-6.358, lng:107.148, notes:"AI-ready; part of 300 MW SEA strategy" },
  { operator:"Digital Realty / Bersama", facility_name:"CGK10", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:5, planned_capacity_mw:null, investment_usd_million:null, year_operational:2025, lat:-6.175, lng:106.840, notes:"JV with Bersama Digital Infrastructure Asia" },
  { operator:"Digital Realty / Bersama", facility_name:"CGK11", city:"Jakarta", province:"DKI Jakarta", status:"Planned", capacity_mw:null, planned_capacity_mw:32, investment_usd_million:375, year_operational:2026, lat:-6.177, lng:106.842, notes:"Campus expansion" },
  { operator:"BDx Indonesia", facility_name:"CGK4 Jatiluhur", city:"Purwakarta", province:"West Java", status:"Planned", capacity_mw:null, planned_capacity_mw:500, investment_usd_million:null, year_operational:2027, lat:-6.500, lng:107.350, notes:"500 MW renewable-powered AI campus" },
  { operator:"Equinix / Astra", facility_name:"JK1 Jakarta", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2024, lat:-6.212, lng:106.847, notes:"AI-ready; 50+ network service providers" },
  { operator:"ST Telemedia GDC", facility_name:"STT Jakarta-2", city:"Jakarta", province:"DKI Jakarta", status:"Under Construction", capacity_mw:null, planned_capacity_mw:72, investment_usd_million:null, year_operational:2025, lat:-6.218, lng:106.831, notes:"Ground broken; 24-72 MW planned" },
  { operator:"IndoKeppel", facility_name:"IKDC1 Bogor", city:"Bogor", province:"West Java", status:"Under Construction", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2025, lat:-6.597, lng:106.806, notes:"7-hectare campus" },
  { operator:"Gaw Capital / Sinar Primera", facility_name:"Batam Phase 1", city:"Batam", province:"Riau Islands", status:"Operational", capacity_mw:5.2, planned_capacity_mw:20, investment_usd_million:null, year_operational:2024, lat:1.120, lng:104.045, notes:"Phase 1 live; 20 MW planned" },
  { operator:"DayOne / INA JV", facility_name:"Nongsa Digital Park", city:"Batam", province:"Riau Islands", status:"Under Construction", capacity_mw:null, planned_capacity_mw:72, investment_usd_million:null, year_operational:2026, lat:1.140, lng:104.060, notes:"JV with Indonesia Investment Authority" },
  { operator:"Indosat-NVIDIA", facility_name:"AI Factory Jakarta", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:null, planned_capacity_mw:80, investment_usd_million:250, year_operational:2024, lat:-6.215, lng:106.850, notes:"AI factory; H100 GPUs; 80 MW future phases" },
  { operator:"Tencent", facility_name:"Indonesia Expansion", city:"Jakarta", province:"DKI Jakarta", status:"Planned", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:500, year_operational:2026, lat:-6.220, lng:106.855, notes:"Capacity expansion pledge Nov 2024" },
  { operator:"Microsoft", facility_name:"Indonesia Central Region", city:"Jakarta", province:"DKI Jakarta", status:"Under Construction", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:1700, year_operational:2028, lat:-6.208, lng:106.849, notes:"First cloud region in Indonesia; AI-ready" },
  { operator:"Oracle", facility_name:"Indonesia North (Batam)", city:"Batam", province:"Riau Islands", status:"Operational", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2025, lat:1.145, lng:104.065, notes:"Leased from DayOne at Nongsa Digital Park" },
  { operator:"Elitery Data Center", facility_name:"Elitery DC", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2015, lat:-6.230, lng:106.810, notes:"Colocation operator" },
  { operator:"Moratelindo (NDC)", facility_name:"NDC Facilities", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2018, lat:-6.235, lng:106.815, notes:"Nusantara Data Center" },
  { operator:"Biznet", facility_name:"Biznet DC", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2012, lat:-6.188, lng:106.800, notes:"Colocation and connectivity" },
  { operator:"Datacomm", facility_name:"Datacomm DC", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2010, lat:-6.192, lng:106.803, notes:"Managed services and colocation" },
  { operator:"SEAX Indonesia", facility_name:"SEAX DC", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2023, lat:-6.205, lng:106.818, notes:"Submarine cable connected" },
  { operator:"LG Sinar Mas", facility_name:"LG SM DC", city:"Jakarta", province:"DKI Jakarta", status:"Under Construction", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2025, lat:-6.228, lng:106.838, notes:"Joint venture facility" },
  { operator:"Aslan Energy Capital", facility_name:"Aslan DC", city:"Jakarta", province:"DKI Jakarta", status:"Planned", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2026, lat:-6.215, lng:106.828, notes:"New entrant" },
  { operator:"BW Digital", facility_name:"BW DC", city:"Jakarta", province:"DKI Jakarta", status:"Planned", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2026, lat:-6.222, lng:106.832, notes:"New entrant" },
  { operator:"Triputra Group", facility_name:"Triputra DC", city:"Jakarta", province:"DKI Jakarta", status:"Planned", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2026, lat:-6.218, lng:106.843, notes:"New entrant" },
  { operator:"Pure Data Centres", facility_name:"Pure DC", city:"Jakarta", province:"DKI Jakarta", status:"Operational", capacity_mw:null, planned_capacity_mw:null, investment_usd_million:null, year_operational:2019, lat:-6.200, lng:106.812, notes:"Colocation operator" }
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
    labels: ['Digital Edge (CGK)', 'DAMAC Digital', 'Microsoft', 'JV Consortia', 'Tencent', 'Digital Edge (EDGE2)', 'Indosat-NVIDIA', 'Princeton Digital'],
    datasets: [{
      label: 'Investment (USD Billion)',
      data: [4.50, 2.30, 1.70, 0.75, 0.50, 0.33, 0.25, 0.11],
      backgroundColor: ['#1B3A5C', '#2C5F8A', '#2980B9', '#3498DB', '#5DADE2', '#85C1E9', '#AED6F1', '#D6EAF8'],
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
    labels: ['DCI H2 Pertiwi', 'Digital Edge CGK', 'BDx Jatiluhur', 'EdgeConneX', 'DAMAC', 'PDG', 'DayOne/INA', 'STT GDC', 'Telkom', 'NTT Group'],
    datasets: [{
      label: 'Planned MW',
      data: [600, 500, 500, 200, 144, 118, 72, 72, 60, 57],
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

// Fiscal doughnut
new Chart(document.getElementById('fiscalChart'), {
  type: 'doughnut',
  data: {
    labels: ['Annual CIT Foregone ($370M)', 'OECD Top-up Recovery (-$250M)', 'SEZ VAT Foregone ($150M)'],
    datasets: [{
      data: [370, 250, 150],
      backgroundColor: ['#C0392B', '#16A085', '#E67E22'],
      hoverOffset: 8
    }]
  },
  options: {
    plugins: {
      legend: { position: 'right', labels: { font: { size: 12 }, padding: 12 } },
      title: { display: true, text: 'Annual Fiscal Cost Breakdown (USD Million)', font: { size: 13 } }
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
