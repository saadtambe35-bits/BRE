/**
 * BUSINESS REVIVAL ECOSYSTEM (BRE)
 * Block 4A: Gated Institutional Marketplace & 5-Tab Virtual Data Room (Hyper-Interactive Edition)
 * Includes: Multi-tab CIM Data Room, Machinery schedules, and Interactive LOI Generator
 */

(function () {
  'use strict';

  let activeSector = 'all';
  let activeStatus = 'all';

  function initMarketplace() {
    const container = document.getElementById('marketplace-container');
    if (!container) return;

    container.innerHTML = `
      <div class="section-header">
        <div class="eyebrow">Institutional Deal Flow · Lower-Middle Market</div>
        <h2>Gated MSME Succession Marketplace</h2>
        <p>
          Every asset listed below has undergone automated 3-way variance reconciliation between Tally ledgers, GSTN returns, and bank statements. 
          Financials are pre-normalized to SDE, and assets are structured for Section 2(42C) slump sale.
        </p>
      </div>

      <!-- Filter Controls -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; flex-wrap: wrap; gap: 16px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="sectorFilters">
          <button class="btn btn-sm btn-dark filter-chip active" data-sector="all">All Sectors</button>
          <button class="btn btn-sm btn-ghost filter-chip" data-sector="Manufacturing">Manufacturing</button>
          <button class="btn btn-sm btn-ghost filter-chip" data-sector="Foundry & Castings">Foundry & Castings</button>
          <button class="btn btn-sm btn-ghost filter-chip" data-sector="Aerospace & Defense">Aerospace & Defense</button>
          <button class="btn btn-sm btn-ghost filter-chip" data-sector="Electrical Machinery">Electrical</button>
          <button class="btn btn-sm btn-ghost filter-chip" data-sector="Packaging & Logistics">Packaging</button>
          <button class="btn btn-sm btn-ghost filter-chip" data-sector="Chemicals & Solvents">Chemicals</button>
        </div>

        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-family:'IBM Plex Mono', monospace; font-size:0.76rem; color:var(--text-muted);">AUDIT STATUS:</span>
          <select class="input-control" id="statusFilter" style="width: auto; padding: 6px 12px; font-size: 0.8rem;">
            <option value="all">All Statuses</option>
            <option value="AUP-PASSED">AUP-PASSED (Clean)</option>
            <option value="UNDER_FORENSIC_REVIEW">Under Review</option>
            <option value="CRITICAL_INTERVENTION">Distress Intervention</option>
          </select>
        </div>
      </div>

      <!-- Listings Grid -->
      <div class="grid-3" id="listingsGrid" style="gap: 24px;">
        <!-- Injected dynamically -->
      </div>
    `;

    bindMarketplaceEvents();
    renderListings();
  }

  function bindMarketplaceEvents() {
    document.querySelectorAll('#sectorFilters .filter-chip').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('#sectorFilters .filter-chip').forEach(b => {
          b.classList.remove('active', 'btn-dark');
          b.classList.add('btn-ghost');
        });
        this.classList.add('active', 'btn-dark');
        this.classList.remove('btn-ghost');
        activeSector = this.dataset.sector;
        renderListings();
      });
    });

    const statusSel = document.getElementById('statusFilter');
    if (statusSel) {
      statusSel.addEventListener('change', function () {
        activeStatus = this.value;
        renderListings();
      });
    }
  }

  function renderListings() {
    const grid = document.getElementById('listingsGrid');
    if (!grid || !window.BRE_STATE) return;

    const items = window.BRE_STATE.businesses.filter(b => {
      const matchSector = activeSector === 'all' || b.sector === activeSector;
      const matchStatus = activeStatus === 'all' || b.status === activeStatus;
      return matchSector && matchStatus;
    });

    if (items.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--text-muted); background: var(--ink-2); border-radius: 6px;">
          No verified assets found matching the selected filters.
        </div>
      `;
      return;
    }

    grid.innerHTML = items.map(deal => {
      let statusBadge = 'badge-clean';
      if (deal.status === 'UNDER_FORENSIC_REVIEW') statusBadge = 'badge-warning';
      if (deal.status === 'CRITICAL_INTERVENTION') statusBadge = 'badge-critical';

      const badgesHtml = deal.badges.map(b => `<span class="badge badge-teal" style="font-size:0.65rem;">${b}</span>`).join(' ');

      return `
        <div class="card card-ink" style="display: flex; flex-direction: column; justify-content: space-between; border-top: 3px solid var(--teal);">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
              <span class="mono" style="font-size: 0.76rem; color: var(--teal-2); font-weight: 700;">${deal.id}</span>
              <span class="badge ${statusBadge}">${deal.status.replace(/_/g, ' ')}</span>
            </div>

            <h4 style="font-size: 1.15rem; margin-bottom: 4px; line-height: 1.25;">${deal.title}</h4>
            <div style="font-family:'IBM Plex Mono', monospace; font-size: 0.72rem; color: var(--text-muted); margin-bottom: 14px;">
              ${deal.cluster} · ${deal.sector}
            </div>

            <!-- Financials Highlight -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; background: var(--ink-3); padding: 10px; border-radius: 4px; margin-bottom: 14px; text-align: center;">
              <div>
                <span style="font-size: 0.65rem; color: var(--text-muted); display: block;">TURNOVER</span>
                <b class="mono" style="font-size: 0.88rem; color: var(--paper);">${deal.turnover}</b>
              </div>
              <div>
                <span style="font-size: 0.65rem; color: var(--text-muted); display: block;">NORM. SDE</span>
                <b class="mono" style="font-size: 0.88rem; color: var(--teal-2);">${deal.sde}</b>
              </div>
              <div>
                <span style="font-size: 0.65rem; color: var(--text-muted); display: block;">VALUATION</span>
                <b class="mono" style="font-size: 0.88rem; color: var(--brass-light);">${deal.ev}</b>
              </div>
            </div>

            <p style="font-size: 0.82rem; line-height: 1.5; color: var(--text-muted); margin-bottom: 16px;">
              ${deal.pitch}
            </p>

            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 20px;">
              ${badgesHtml}
            </div>
          </div>

          <div style="display: flex; gap: 10px; margin-top: auto; border-top: 1px solid var(--line-light); padding-top: 14px;">
            <button class="btn btn-sm btn-ghost view-cim-btn" style="flex: 1;" data-id="${deal.id}">
              🔍 5-Tab Data Room
            </button>
            <button class="btn btn-sm btn-teal request-loi-btn" style="flex: 1;" data-id="${deal.id}">
              ✍️ Issue Model LOI
            </button>
          </div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.view-cim-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const dealId = this.dataset.id;
        openDataRoomModal(dealId);
      });
    });

    document.querySelectorAll('.request-loi-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const dealId = this.dataset.id;
        openLoiBuilderModal(dealId);
      });
    });
  }

  function openDataRoomModal(dealId) {
    const deal = window.BRE_STATE ? window.BRE_STATE.businesses.find(b => b.id === dealId) : null;
    if (!deal) return;

    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');
    if (!modalBody || !overlay) return;

    const hero = window.BRE_STATE.heroDeal;
    const pnlRows = hero.dataRoom.pnl.map(row => `
      <tr>
        <td class="mono"><b>${row.year}</b></td>
        <td class="mono" style="color:var(--paper);">${row.revenue}</td>
        <td class="mono">${row.rawMaterial}</td>
        <td class="mono">${row.labor}</td>
        <td class="mono">${row.opex}</td>
        <td class="mono" style="color:var(--teal-2); font-weight:600;">${row.ebitda}</td>
        <td class="mono" style="color:var(--brass-light); font-weight:700;">${row.sde}</td>
      </tr>
    `).join('');

    const machineRows = hero.dataRoom.machines.map(m => `
      <tr>
        <td><b>${m.name}</b></td>
        <td class="mono">${m.year}</td>
        <td class="mono">${m.wdv}</td>
        <td class="mono" style="color:var(--teal-2); font-weight:600;">${m.marketValue}</td>
        <td><span class="badge badge-clean">${m.status}</span></td>
      </tr>
    `).join('');

    modalTitle.textContent = `INSTITUTIONAL DATA ROOM · ${deal.id} (${deal.title})`;
    modalBody.innerHTML = `
      <div style="background:var(--ink-2); border-radius:6px; overflow:hidden;">
        
        <!-- Tab Strip -->
        <div class="dataroom-tab-strip">
          <button class="dataroom-tab-btn active" data-tab="tab-summary">1. Executive Summary</button>
          <button class="dataroom-tab-btn" data-tab="tab-pnl">2. Audited P&L (3-Yr)</button>
          <button class="dataroom-tab-btn" data-tab="tab-machines">3. 14 CNC Machinery Schedule</button>
          <button class="dataroom-tab-btn" data-tab="tab-reconciliation">4. Bank & GST 3-Way Variance</button>
          <button class="dataroom-tab-btn" data-tab="tab-customers">5. OEM Customer Purchase Orders</button>
        </div>

        <!-- Pane 1: Summary -->
        <div class="dataroom-tab-pane active" id="pane-tab-summary">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;">
            <div>
              <h4 style="font-size:1.25rem;">${deal.title}</h4>
              <p style="font-size:0.85rem; color:var(--text-muted);">${deal.cluster} · ${deal.sector}</p>
            </div>
            <span class="badge badge-clean">ICAI AUP CERTIFIED</span>
          </div>

          <div style="background:#060D11; padding:16px; border-radius:6px; font-size:0.84rem; line-height:1.6; margin-bottom:20px;">
            <b>Asset Overview:</b> 24-year-old operating workshop with 14 CNC/VMC machine lines, holding long-standing vendor codes for Tata Motors, Bajaj Auto, and Bharat Forge. Retiring founder offering clean 60% cash-out exit with 12 months transition advisory.
          </div>

          <div class="grid-2" style="gap:16px;">
            <div class="card card-ink" style="background:var(--ink-3); padding:16px;">
              <span class="mono" style="font-size:0.7rem; color:var(--teal-2); text-transform:uppercase;">UNDERWRITTEN SDE</span>
              <div style="font-size:1.4rem; font-family:'Fraunces', serif; color:var(--paper);">${deal.sde} / year</div>
              <span style="font-size:0.75rem; color:var(--text-muted);">Normalized Margin: 16.86%</span>
            </div>
            <div class="card card-ink" style="background:var(--ink-3); padding:16px;">
              <span class="mono" style="font-size:0.7rem; color:var(--brass-light); text-transform:uppercase;">AGREED ENTERPRISE VALUE</span>
              <div style="font-size:1.4rem; font-family:'Fraunces', serif; color:var(--brass-light);">${deal.ev}</div>
              <span style="font-size:0.75rem; color:var(--text-muted);">Multiple: 3.00x SDE</span>
            </div>
          </div>
        </div>

        <!-- Pane 2: 3-Year Audited P&L -->
        <div class="dataroom-tab-pane" id="pane-tab-pnl">
          <h4 style="margin-bottom:12px; font-size:1.15rem;">Audited 3-Year Comparative Income Statement</h4>
          <table class="institutional-table" style="font-size:0.8rem;">
            <thead>
              <tr>
                <th>Fiscal Year</th>
                <th>Gross Revenue</th>
                <th>Raw Material</th>
                <th>Direct Labor</th>
                <th>Operating Costs</th>
                <th>Reported EBITDA</th>
                <th>True Operating SDE</th>
              </tr>
            </thead>
            <tbody>
              ${pnlRows}
            </tbody>
          </table>
          <p style="font-size:0.76rem; color:var(--text-muted); margin-top:10px;">
            *Figures audited by Kulkarni & Phadke Associates, Chartered Accountants. Add-backs verified under ICAI SRS 4400.
          </p>
        </div>

        <!-- Pane 3: Machinery Schedule -->
        <div class="dataroom-tab-pane" id="pane-tab-machines">
          <h4 style="margin-bottom:12px; font-size:1.15rem;">Plant & Machinery Fixed Asset Inventory (14 Lines)</h4>
          <table class="institutional-table" style="font-size:0.8rem;">
            <thead>
              <tr>
                <th>Machine Asset Description</th>
                <th>Year</th>
                <th>WDV (IT Act)</th>
                <th>Market Valuation</th>
                <th>Operating Condition</th>
              </tr>
            </thead>
            <tbody>
              ${machineRows}
            </tbody>
          </table>
          <p style="font-size:0.76rem; color:var(--text-muted); margin-top:10px;">
            Primary Collateral: Senior 1st exclusive registered charge created in favor of Tata Capital Senior Facility.
          </p>
        </div>

        <!-- Pane 4: Bank & GST 3-Way Variance -->
        <div class="dataroom-tab-pane" id="pane-tab-reconciliation">
          <h4 style="margin-bottom:12px; font-size:1.15rem;">Forensic 3-Way Variance Reconciliation Report</h4>
          <div class="grid-2" style="gap:16px; margin-bottom:16px;">
            <div class="card card-ink" style="background:var(--ink-3); padding:16px;">
              <span class="mono" style="font-size:0.7rem; color:var(--text-muted);">36M ACCOUNT AGGREGATOR BANK CREDITS</span>
              <div class="mono" style="font-size:1.25rem; color:var(--paper); font-weight:700;">₹37,35,00,000</div>
              <span style="font-size:0.75rem; color:#10B981;">✓ Digitally Signed Bank Rail</span>
            </div>
            <div class="card card-ink" style="background:var(--ink-3); padding:16px;">
              <span class="mono" style="font-size:0.7rem; color:var(--text-muted);">36M GSTN GSTR-3B TAX PAID TURNOVER</span>
              <div class="mono" style="font-size:1.25rem; color:var(--paper); font-weight:700;">₹37,08,00,000</div>
              <span style="font-size:0.75rem; color:#10B981;">✓ GST Portal GSP Ingested</span>
            </div>
          </div>
          <div style="background:#060D11; padding:14px; border-radius:6px; font-size:0.84rem;">
            <b>Computed Mathematical Variance:</b> <span class="mono" style="color:#10B981; font-weight:700;">0.72%</span> (Institutional threshold: &lt;3.0%).<br>
            <span style="color:var(--text-muted); font-size:0.78rem;">Result: Passed forensic audit with zero circular transaction or unrecorded revenue red flags.</span>
          </div>
        </div>

        <!-- Pane 5: OEM Purchase Orders -->
        <div class="dataroom-tab-pane" id="pane-tab-customers">
          <h4 style="margin-bottom:12px; font-size:1.15rem;">Active Customer Purchase Orders & OEM Vendor Codes</h4>
          <div style="font-size:0.85rem; line-height:1.7;">
            • <b>Tata Motors Tier-1 Component Division:</b> Vendor Code #TM-PUN-8812 | Active PO Backlog: <b>₹1,85,00,000</b><br>
            • <b>Bajaj Auto Ancillary Stamping Group:</b> Vendor Code #BA-MH-2041 | Active PO Backlog: <b>₹94,00,000</b><br>
            • <b>Bharat Forge Sub-Assembly Works:</b> Preferred Supplier Agreement through 2028 | Monthly Run-rate: <b>₹28,50,000</b>
          </div>
          <div style="margin-top:16px; background:var(--ink-3); padding:12px; border-radius:4px; font-size:0.8rem; color:var(--teal-2);">
            <b>Customer Novation Status:</b> All 3 customer division heads have signed letters of intent to transfer supplier codes to NewCo upon BTA execution.
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:20px; border-top:1px solid var(--line-light); padding-top:16px;">
        <button class="btn btn-ghost" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">Close Data Room</button>
        <button class="btn btn-teal" onclick="window.location.hash='#deal-room'; document.getElementById('globalModalOverlay').classList.remove('active');">
          Enter Live Escrow Room →
        </button>
      </div>
    `;

    overlay.classList.add('active');

    // Bind tab clicks inside the modal
    document.querySelectorAll('.dataroom-tab-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.dataroom-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.dataroom-tab-pane').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        const targetPane = document.getElementById(`pane-${this.dataset.tab}`);
        if (targetPane) targetPane.classList.add('active');
      });
    });
  }

  function openLoiBuilderModal(dealId) {
    const deal = window.BRE_STATE ? window.BRE_STATE.businesses.find(b => b.id === dealId) : null;
    if (!deal) return;

    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');
    if (!modalBody || !overlay) return;

    modalTitle.textContent = `ISSUE SECTION 2(42C) MODEL LETTER OF INTENT (LOI) · ${deal.id}`;
    modalBody.innerHTML = `
      <div class="formal-doc">
        <div class="doc-stamp">LOI DRAFT</div>
        <h4 style="margin-bottom:8px; color:var(--paper);">Non-Binding Indicative Term Sheet (Slump Sale)</h4>
        
        <div class="form-group" style="margin-top:16px;">
          <label>Proposed Enterprise Valuation (INR):</label>
          <input type="text" class="input-control" id="loiOfferPrice" value="${deal.ev}">
        </div>

        <div class="grid-2" style="gap:14px; font-size:0.85rem; margin-bottom:16px;">
          <div>
            <label style="color:var(--text-muted); display:block; margin-bottom:4px;">Day-One Cash Consideration (60%):</label>
            <input type="text" class="input-control" value="60% (Senior NBFC + Equity)" readonly>
          </div>
          <div>
            <label style="color:var(--text-muted); display:block; margin-bottom:4px;">Promoter Vendor Note (20%):</label>
            <input type="text" class="input-control" value="20% (36M @ 8.5% Standstill)" readonly>
          </div>
        </div>

        <div class="form-group">
          <label>Buyer Sponsor Entity:</label>
          <input type="text" class="input-control" id="loiBuyerEntity" value="Vikram Mehta & Strategic Search Partners LLP">
        </div>

        <div style="background:var(--ink-3); padding:12px; border-radius:4px; font-size:0.8rem; color:var(--text-muted);">
          <b>Statutory Lock:</b> Transaction stipulates Section 2(42C) slump sale with full GST Notification 12/2017 exemption.
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:20px;">
        <button class="btn btn-ghost" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">Cancel</button>
        <button class="btn btn-brass" id="submitLoiBtn">Digitally Sign & Dispatch LOI</button>
      </div>
    `;

    overlay.classList.add('active');

    document.getElementById('submitLoiBtn')?.addEventListener('click', () => {
      overlay.classList.remove('active');
      if (window.showToast) {
        window.showToast(`Indicative Model LOI dispatched to promoter for ${deal.id}. Escrow room initialized.`);
      }
      window.location.hash = '#deal-room';
    });
  }

  document.addEventListener('DOMContentLoaded', initMarketplace);
})();
