/**
 * BUSINESS REVIVAL ECOSYSTEM (BRE)
 * Block 4B: Multi-Role Institutional Portals (Hyper-Interactive Edition)
 * Includes: Direct document modals, Intercreditor terms viewer, and ICAI AUP verification
 */

(function () {
  'use strict';

  function initDashboards() {
    const container = document.getElementById('dashboards-container');
    if (!container) return;

    container.innerHTML = `
      <div class="section-header">
        <div class="eyebrow">Institutional Access Control · 4 Stakeholder Views</div>
        <h2>Multi-Stakeholder Operational Portals</h2>
        <p>
          Every participant in a business revival ecosystem experiences a dedicated, legally bounded view of the transaction 
          driven by the same immutable Tally and Account Aggregator data foundation. Click any metric to inspect its statutory rationale.
        </p>
      </div>

      <!-- Role Tabs -->
      <div class="role-nav-bar">
        <button class="role-tab-btn active" data-role="promoter">
          <span class="role-icon">01</span> Retiring Promoter (Founder)
        </button>
        <button class="role-tab-btn" data-role="buyer">
          <span class="role-icon">02</span> Operator-Buyer (Searcher)
        </button>
        <button class="role-tab-btn" data-role="lender">
          <span class="role-icon">03</span> Senior Lender (NBFC Debt)
        </button>
        <button class="role-tab-btn" data-role="diligence">
          <span class="role-icon">04</span> Diligence Partner (CA Firm)
        </button>
      </div>

      <!-- Dynamic Role View Shell -->
      <div class="portal-card" id="activePortalShell">
        <!-- Rendered dynamically -->
      </div>
    `;

    bindDashboardEvents();
    renderRoleView(window.BRE_STATE ? window.BRE_STATE.currentUserRole : 'promoter');
  }

  function bindDashboardEvents() {
    document.querySelectorAll('.role-tab-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.role-tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const role = this.dataset.role;
        if (window.BRE_STATE) window.BRE_STATE.setRole(role);
        renderRoleView(role);
      });
    });

    if (window.BRE_STATE) {
      window.BRE_STATE.on('roleChanged', role => {
        renderRoleView(role);
      });
    }
  }

  function renderRoleView(role) {
    const shell = document.getElementById('activePortalShell');
    if (!shell || !window.BRE_STATE) return;

    const hero = window.BRE_STATE.heroDeal;

    if (role === 'promoter') {
      shell.innerHTML = `
        <div class="portal-header">
          <div class="portal-title-area">
            <h3>Retiring Promoter Portal · Clean Retirement Exit</h3>
            <p>Asset: <b>${hero.name} (#${hero.id})</b> | Promoter: <b>Mr. R. Kulkarni (Age 62)</b></p>
          </div>
          <span class="badge badge-clean badge-live"><span class="badge-dot"></span> TALLY SYNC CONNECTED</span>
        </div>

        <div class="portal-metrics-grid">
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('slump_sale_sec_2_42c')">
            <div class="metric-label">Agreed Enterprise Value <span class="why-tag">Why 3.0x?</span></div>
            <div class="metric-value" style="color:var(--brass-light);">₹6.30 Cr</div>
            <div class="metric-sub">Sec 2(42C) Slump Sale</div>
          </div>
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('capital_stack_60_20_20')">
            <div class="metric-label">Day-One Cash-Out (60%) <span class="why-tag">Why 60%?</span></div>
            <div class="metric-value" style="color:#10B981;">₹3.78 Cr</div>
            <div class="metric-sub">Direct Bank Wire at Closing</div>
          </div>
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('senior_lender_standstill')">
            <div class="metric-label">Seller Vendor Note (20%) <span class="why-tag">Why note?</span></div>
            <div class="metric-value" style="color:var(--teal-2);">₹1.26 Cr</div>
            <div class="metric-sub">36M Amort. @ 8.5% p.a.</div>
          </div>
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('sec_50b_tax_13_pct')">
            <div class="metric-label">Net Take-Home Cash <span class="why-tag">Tax rate?</span></div>
            <div class="metric-value" style="color:#10B981;">₹5.89 Cr</div>
            <div class="metric-sub">Post-Sec 50B Capital Gains Tax</div>
          </div>
        </div>

        <div class="grid-2" style="gap:24px;">
          <div class="card card-ink" style="background:var(--ink-3);">
            <h4 style="font-size:1.05rem; margin-bottom:14px; display:flex; justify-content:space-between;">
              <span>Vetted Buyer Inquiry Feed</span>
              <span class="badge badge-teal">3 OPERATORS MATCHED</span>
            </h4>
            <div style="font-size:0.85rem; line-height:1.7;">
              • <b>Vikram Mehta:</b> Ex-VP Operations (Tata Motors), ₹1.5 Cr Liquid Equity Ready.<br>
              • <b>Anjali Rao & Partners:</b> Industrial Operator Syndicate, Completed KYC.<br>
              • <b>Mahindra Ancillary Fund:</b> Strategic co-investor evaluating 20% holdback.
            </div>
            <button class="btn btn-sm btn-ghost" style="margin-top:14px;" onclick="window.location.hash='#marketplace'">
              View Full Buyer Data Room Logs →
            </button>
          </div>

          <div class="card card-ink" style="background:var(--ink-3);">
            <h4 style="font-size:1.05rem; margin-bottom:14px; display:flex; justify-content:space-between;">
              <span>Statutory Slump Sale Status</span>
              <span class="badge badge-clean">FORM 3CEA ISSUED</span>
            </h4>
            <div style="font-size:0.85rem; line-height:1.7;">
              • Sec 50B Net Worth: <b>₹3,12,00,000</b> (Audited by Partner CA)<br>
              • Estimated LTCG Tax: <b>₹41,34,000 (13.0% with Cess)</b><br>
              • GST Exemption: <b>100% Tax-Exempt under Notif. 12/2017 (Going Concern)</b>
            </div>
            <button class="btn btn-sm btn-teal" style="margin-top:14px;" onclick="window.viewForm3CEAModal()">
              📜 Inspect CA-Signed Form 3CEA Certificate
            </button>
          </div>
        </div>
      `;
    } else if (role === 'buyer') {
      shell.innerHTML = `
        <div class="portal-header">
          <div class="portal-title-area">
            <h3>Operator-Buyer Portal · Acquisition Pipeline</h3>
            <p>Sponsor: <b>Vikram Mehta (Ex-VP Tata Motors)</b> | Mandate: <b>Auto Ancillary Manufacturing</b></p>
          </div>
          <span class="badge badge-teal">BUYER EQUITY VERIFIED: ₹1.50 CR</span>
        </div>

        <div class="portal-metrics-grid">
          <div class="metric-tile">
            <div class="metric-label">Target Acquisition</div>
            <div class="metric-value">#MH-AUTO-1092</div>
            <div class="metric-sub">Chakan CNC Machining</div>
          </div>
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('sde_vs_ebitda')">
            <div class="metric-label">Underwritten SDE <span class="why-tag">Why?</span></div>
            <div class="metric-value" style="color:var(--teal-2);">₹2.10 Cr</div>
            <div class="metric-sub">16.86% Normalized Margin</div>
          </div>
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('capital_stack_60_20_20')">
            <div class="metric-label">Buyer Cash Equity <span class="why-tag">Why 15%?</span></div>
            <div class="metric-value" style="color:var(--brass-light);">₹94.5 L</div>
            <div class="metric-sub">15% of ₹6.30 Cr EV</div>
          </div>
          <div class="metric-tile">
            <div class="metric-label">Projected 3-Yr Cash ROI</div>
            <div class="metric-value" style="color:#10B981;">34.8%</div>
            <div class="metric-sub">DSCR: 1.62x Senior Debt</div>
          </div>
        </div>

        <div class="grid-2" style="gap:24px;">
          <div class="card card-ink" style="background:var(--ink-3);">
            <h4 style="font-size:1.05rem; margin-bottom:14px;">Acquisition Diligence Checklist</h4>
            <div style="font-size:0.85rem; line-height:1.8;">
              ✓ 36-Month Bank vs GST Variance: <b>0.72% [CLEAN]</b><br>
              ✓ Machinery Inventory: <b>14 CNC/VMC Units (1st Charge Clear)</b><br>
              ✓ Customer Code Novation: <b>Top 3 OEM Codes Verified</b><br>
              ✓ Interim Sub-Contracting Agreement: <b>Drafted & Approved</b>
            </div>
            <button class="btn btn-sm btn-teal" style="margin-top:14px;" onclick="window.viewModelBTAModal()">
              ⚖️ Review Model BTA & Job-Work Agreement
            </button>
          </div>

          <div class="card card-ink" style="background:var(--ink-3);">
            <h4 style="font-size:1.05rem; margin-bottom:14px;">Senior Debt Terms (Tata Capital)</h4>
            <div style="font-size:0.85rem; line-height:1.7;">
              • Approved Facility Line: <b>₹2,83,50,000 (45% EV)</b><br>
              • Interest Rate: <b>11.50% p.a. (60-Month Amortization)</b><br>
              • DSCR Floor Covenant: <b>Minimum 1.25x (Underwritten at 1.62x)</b><br>
              • Security: <b>1st Exclusive Charge on Fixed & Current Assets</b>
            </div>
            <button class="btn btn-sm btn-brass" style="margin-top:14px;" onclick="window.viewSanctionLetterModal()">
              📑 Inspect Senior Debt Sanction Letter
            </button>
          </div>
        </div>
      `;
    } else if (role === 'lender') {
      shell.innerHTML = `
        <div class="portal-header">
          <div class="portal-title-area">
            <h3>Senior Institutional Lender Portal · Cash-Flow Underwriting</h3>
            <p>Institution: <b>Tata Capital / NBFC Senior Credit Desk</b> | Facility: <b>MSME M&A Senior Debt</b></p>
          </div>
          <span class="badge badge-clean">SENIOR CHARGE: 1ST EXCLUSIVE</span>
        </div>

        <div class="portal-metrics-grid">
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('capital_stack_60_20_20')">
            <div class="metric-label">Senior Facility Size <span class="why-tag">Why 45%?</span></div>
            <div class="metric-value" style="color:var(--teal-2);">₹2.835 Cr</div>
            <div class="metric-sub">45% of ₹6.30 Cr EV</div>
          </div>
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('senior_lender_standstill')">
            <div class="metric-label">Underwritten DSCR <span class="why-tag">Floor?</span></div>
            <div class="metric-value" style="color:#10B981;">1.62x</div>
            <div class="metric-sub">Covenant Floor: 1.25x</div>
          </div>
          <div class="metric-tile">
            <div class="metric-label">Plant Machinery Value</div>
            <div class="metric-value" style="color:var(--brass-light);">₹3.40 Cr</div>
            <div class="metric-sub">120% Senior Asset Cover</div>
          </div>
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('senior_lender_standstill')">
            <div class="metric-label">Seller Note Standstill <span class="why-tag">How?</span></div>
            <div class="metric-value" style="color:var(--oxblood-2);">ACTIVE</div>
            <div class="metric-sub">Frozen if DSCR &lt; 1.15x</div>
          </div>
        </div>

        <div class="card card-ink" style="background:var(--ink-3);">
          <h4 style="font-size:1.05rem; margin-bottom:12px;">Intercreditor Subordination Terms</h4>
          <p style="font-size:0.86rem; line-height:1.6; color:var(--text-muted); margin-bottom:16px;">
            The ₹1.26 Cr (20%) Seller Vendor Note held by Mr. Kulkarni is fully subordinated to Tata Capital's senior facility. 
            Under the standardized Intercreditor Agreement, no payments on the seller note are permitted if senior principal/interest is in arrears or DSCR falls below 1.15x.
          </p>
          <button class="btn btn-sm btn-brass" onclick="window.openIntercreditorModal()">
            🛡️ Inspect Intercreditor Subordination Deed & Covenants
          </button>
        </div>
      `;
    } else if (role === 'diligence') {
      shell.innerHTML = `
        <div class="portal-header">
          <div class="portal-title-area">
            <h3>Diligence Partner Portal · ICAI AUP Audit Grid</h3>
            <p>Firm: <b>Kulkarni & Phadke Associates, Chartered Accountants (Pune, FRN 118942W)</b></p>
          </div>
          <span class="badge badge-clean">ICAI LIMITED-SCOPE AUP SIGNED</span>
        </div>

        <div class="portal-metrics-grid">
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('three_way_variance')">
            <div class="metric-label">Bank vs GST Variance <span class="why-tag">Why?</span></div>
            <div class="metric-value" style="color:#10B981;">0.72%</div>
            <div class="metric-sub">Threshold &lt; 3.0% [PASSED]</div>
          </div>
          <div class="metric-tile">
            <div class="metric-label">Tally Vouchers Audited</div>
            <div class="metric-value">2,842</div>
            <div class="metric-sub">Suspense Balance: ₹0.00</div>
          </div>
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('sec_50b_tax_13_pct')">
            <div class="metric-label">Sec 50B Net Worth <span class="why-tag">Rule?</span></div>
            <div class="metric-value" style="color:var(--brass-light);">₹3.12 Cr</div>
            <div class="metric-sub">Form 3CEA Certified</div>
          </div>
          <div class="metric-tile" style="cursor:pointer;" onclick="window.openWhyModal('gst_notification_12_2017')">
            <div class="metric-label">GST Going Concern <span class="why-tag">Law?</span></div>
            <div class="metric-value" style="color:#10B981;">EXEMPT</div>
            <div class="metric-sub">Notification No. 12/2017</div>
          </div>
        </div>

        <div class="card card-ink" style="background:var(--ink-3);">
          <h4 style="font-size:1.05rem; margin-bottom:12px;">Auditor Sign-off Console</h4>
          <p style="font-size:0.86rem; line-height:1.6; color:var(--text-muted); margin-bottom:16px;">
            The 3-way reconciliation across Tally General Ledger (ODBC port 9000), GSTN returns (GSTR-1, 3B, 9C), and RBI Account Aggregator bank credits confirms reported sales of ₹12.45 Cr with <b>0.72% deviation</b>.
          </p>
          <div style="display:flex; gap:12px;">
            <button class="btn btn-sm btn-teal" onclick="window.openAupModal()">
              🔍 Inspect ICAI AUP Audit Trail & UDIN
            </button>
            <button class="btn btn-sm btn-ghost" onclick="window.viewForm3CEAModal()">
              📜 View Form 3CEA Net Worth
            </button>
          </div>
        </div>
      `;
    }
  }

  // Intercreditor Modal Helper
  window.openIntercreditorModal = function () {
    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');
    if (!modalBody || !overlay) return;

    modalTitle.textContent = `INTERCREDITOR SUBORDINATION DEED · SENIOR LENDER VS SELLER NOTE`;
    modalBody.innerHTML = `
      <div class="formal-doc">
        <div class="doc-stamp">LEGAL EXECUTED</div>
        <h4 style="color:var(--paper); margin-bottom:10px;">Intercreditor Priority & Standstill Deed</h4>
        <div style="font-size:0.82rem; line-height:1.7; background:var(--ink-3); padding:16px; border-radius:4px; max-height:240px; overflow-y:auto; margin-bottom:16px;">
          <b>PARTIES:</b> Tata Capital Financial Services Ltd (Senior Lender) & Mr. R. Kulkarni (Subordinated Creditor)<br><br>
          <b>1. SENIOR PRIORITY:</b><br>
          The Senior Lender retains an exclusive, first-ranking registered mortgage and hypothecation over all fixed machinery, current assets, inventory, receivables, and bank accounts of NewCo.<br><br>
          <b>2. SUBORDINATION & STANDSTILL:</b><br>
          The Seller Promissory Note of ₹1,26,00,000 shall be subordinate in right of payment to the Senior Debt. If NewCo's rolling 3-month DSCR falls below 1.15x, all scheduled principal and interest payments on the Seller Note shall freeze automatically (Standstill Period) without accelerating default.
        </div>
        <div style="font-size:0.78rem; color:var(--text-muted);">
          Registered with Registrar of Companies (ROC Pune) under Charge ID #CHG-2026-8812.
        </div>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:16px;">
        <button class="btn btn-ghost" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">Close</button>
        <button class="btn btn-teal" onclick="window.showToast('Intercreditor subordination covenants verified with senior credit desk.'); document.getElementById('globalModalOverlay').classList.remove('active');">
          Confirm Senior Charge
        </button>
      </div>
    `;
    overlay.classList.add('active');
  };

  // ICAI AUP Modal Helper
  window.openAupModal = function () {
    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');
    if (!modalBody || !overlay) return;

    modalTitle.textContent = `ICAI LIMITED-SCOPE AUP AUDIT TRAIL · UDIN: 26118942AAAA8812`;
    modalBody.innerHTML = `
      <div class="formal-doc">
        <div class="doc-stamp stamp-gold">ICAI CERTIFIED</div>
        <h4 style="color:var(--paper); margin-bottom:10px;">Agreed-Upon Procedures (AUP) Report on 3-Way Variance</h4>
        <p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:14px;">
          Conducted by <b>Kulkarni & Phadke Associates, Chartered Accountants</b> under standard SRS 4400.
        </p>

        <table class="institutional-table" style="font-size:0.8rem; margin-bottom:16px;">
          <thead>
            <tr>
              <th>Audit Dimension</th>
              <th>Primary Source Data</th>
              <th>Audited Result</th>
              <th>Compliance State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bank Credit Verification</td>
              <td>RBI Account Aggregator (36M)</td>
              <td class="mono">₹37,35,00,000</td>
              <td><span class="badge badge-clean">VERIFIED</span></td>
            </tr>
            <tr>
              <td>GSTN Return Turnover</td>
              <td>GSTR-1, 3B & 9C Audit Returns</td>
              <td class="mono">₹37,08,00,000</td>
              <td><span class="badge badge-clean">VERIFIED</span></td>
            </tr>
            <tr>
              <td>Tally General Ledger</td>
              <td>Edge Sync SHA-256 Hash</td>
              <td class="mono">₹37,21,00,000</td>
              <td><span class="badge badge-clean">VERIFIED</span></td>
            </tr>
            <tr style="background:var(--ink-3);">
              <td colspan="2"><b>MAX RECONCILIATION VARIANCE</b></td>
              <td colspan="2" class="mono" style="color:#10B981; font-weight:700;">
                0.72% (Threshold &lt; 3.00%)
              </td>
            </tr>
          </tbody>
        </table>

        <div style="font-size:0.78rem; color:var(--text-muted);">
          Auditor Conclusion: No evidence of artificial inflation or circular invoices detected. Eligible for Section 50B certification.
        </div>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:16px;">
        <button class="btn btn-ghost" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">Close</button>
        <button class="btn btn-teal" onclick="window.print()">Print Official AUP Report</button>
      </div>
    `;
    overlay.classList.add('active');
  };

  document.addEventListener('DOMContentLoaded', initDashboards);
})();
