/**
 * PROGRAMMATIC SUCCESSION OS (PS-OS)
 * Block 2: AI Diagnostic Scanner & SDE Underwriting Engine (Hyper-Interactive Edition)
 * Includes: Live sliders, Why-This-Exists Explainer Badges, and Forensic Add-Back Ledger Inspector
 */

(function () {
  'use strict';

  function initScanner() {
    const container = document.getElementById('scanner-container');
    if (!container) return;

    container.innerHTML = `
      <div class="section-header">
        <div class="eyebrow">Algorithmic Underwriting & Cash Flow Normalization</div>
        <h2>Deterministic SDE & Sec 50B Tax Engine</h2>
        <p>
          Target MSMEs often depress reported accounting profits to optimize income tax. 
          Our deterministic engine normalizes promoter personal add-backs to uncover true Seller's Discretionary Earnings (SDE), evaluates Senior NBFC debt capacity, and computes net tax-free slump sale proceeds under Section 50B (Rule 11UAE).
        </p>
      </div>

      <!-- Quick Preset Buttons & Faculty Explainer Callout -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 14px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <span style="font-family:'IBM Plex Mono', monospace; font-size:0.78rem; color:var(--text-muted);">
            LOAD CLUSTER PRESETS:
          </span>
          <button class="btn btn-sm btn-ghost preset-btn active" data-preset="chakan">
            #MH-AUTO-1092 (Chakan CNC Machining)
          </button>
          <button class="btn btn-sm btn-ghost preset-btn" data-preset="rajkot">
            #GJ-FDRY-3041 (Rajkot Foundry)
          </button>
          <button class="btn btn-sm btn-ghost preset-btn" data-preset="peenya">
            #KA-AERO-2019 (Peenya Defense Tooling)
          </button>
        </div>

        <button class="btn btn-sm btn-brass" id="viewAddBackLedgerBtn">
          📋 Inspect Forensic Add-Back Ledger (₹37.0 L)
        </button>
      </div>

      <div class="grid-2" style="gap: 36px; align-items: start;">
        
        <!-- Left: Financial Input Sliders with Why-Tags -->
        <div class="card card-ink" style="padding: 32px;">
          <h4 style="margin-bottom: 20px; font-size: 1.2rem; display: flex; justify-content: space-between; align-items: center;">
            <span>Underwriting Vitals Intake</span>
            <span class="badge badge-teal">LOCAL TALLY SYNC</span>
          </h4>

          <!-- Annual Reported Turnover -->
          <div class="form-group">
            <label>
              <span>
                1. Annual Turnover (Reported)
                <span class="why-tag" onclick="window.openWhyModal('three_way_variance')">Why verify?</span>
              </span>
              <span class="val-display" id="turnoverVal">₹12.45 Cr</span>
            </label>
            <input type="range" class="range-slider" id="inputTurnover" min="20" max="250" value="124" step="1">
            <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); font-family: 'IBM Plex Mono', monospace;">
              <span>₹2.0 Cr</span>
              <span>₹25.0 Cr</span>
            </div>
          </div>

          <!-- Reported Net Profit Margin -->
          <div class="form-group">
            <label>
              <span>
                2. Reported Net Profit Margin (PBT)
                <span class="why-tag" onclick="window.openWhyModal('sde_vs_ebitda')">Why depressed?</span>
              </span>
              <span class="val-display" id="marginVal">7.4%</span>
            </label>
            <input type="range" class="range-slider" id="inputMargin" min="-5" max="25" value="7.4" step="0.2">
            <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); font-family: 'IBM Plex Mono', monospace;">
              <span>-5.0% (Loss)</span>
              <span>+25.0%</span>
            </div>
          </div>

          <!-- Promoter Discretionary Add-Backs -->
          <div class="form-group">
            <label>
              <span>
                3. Discretionary Promoter Add-Backs
                <span class="why-tag" onclick="window.openWhyModal('sde_vs_ebitda')">How normalized?</span>
              </span>
              <span class="val-display" id="addBacksVal">₹37.0 L</span>
            </label>
            <input type="range" class="range-slider" id="inputAddBacks" min="0" max="100" value="37" step="1">
            <span style="font-size: 0.74rem; color: var(--text-muted);">
              Personal car leases, family director wages above replacement cost, one-off litigation fees.
            </span>
          </div>

          <!-- Maintenance CapEx -->
          <div class="form-group">
            <label>
              <span>
                4. Annual Maintenance CapEx
                <span class="why-tag" onclick="window.openWhyModal('capital_stack_60_20_20')">Why deduct?</span>
              </span>
              <span class="val-display" id="capexVal">₹15.0 L</span>
            </label>
            <input type="range" class="range-slider" id="inputCapex" min="5" max="60" value="15" step="1">
          </div>

          <!-- Bank vs GST Variance -->
          <div class="form-group" style="margin-bottom: 0;">
            <label>
              <span>
                5. Bank vs. GST Turnover Variance
                <span class="why-tag" onclick="window.openWhyModal('three_way_variance')">Why &lt;3%?</span>
              </span>
              <span class="val-display" id="varianceVal">0.72%</span>
            </label>
            <input type="range" class="range-slider" id="inputVariance" min="0" max="8" value="0.72" step="0.05">
            <span style="font-size: 0.74rem; color: var(--text-muted);">
              Institutional gate: Must remain &lt; 3.0% to pass limited-scope ICAI AUP.
            </span>
          </div>
        </div>

        <!-- Right: Real-Time Underwritten Output -->
        <div class="card card-ink" style="padding: 32px; border-color: var(--teal);">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px;">
            <span class="mono" style="font-size: 0.78rem; color: var(--teal-2); text-transform: uppercase; letter-spacing: 0.08em;">
              UNDERWRITTEN VALUATION REPORT
            </span>
            <span class="badge" id="reconciliationBadge">RECONCILED CLEAN</span>
          </div>

          <!-- Hero Computed Output Grid with Clickable Explanations -->
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 24px;">
            <div class="metric-tile" style="background: var(--ink-2); border-color: var(--teal); cursor:pointer;" onclick="window.openWhyModal('sde_vs_ebitda')" title="Click for Viva Explanation">
              <div class="metric-label" style="display:flex; justify-content:space-between;">
                <span>Reconstructed SDE</span>
                <span style="font-size:0.65rem; color:var(--teal-2);">ℹ️ Explain</span>
              </div>
              <div class="metric-value" id="outSDE" style="color: var(--teal-2);">₹2.10 Cr</div>
              <div class="metric-sub" id="outSDEMargin">16.86% Margin</div>
            </div>

            <div class="metric-tile" style="background: var(--ink-2); border-color: var(--brass); cursor:pointer;" onclick="window.openWhyModal('slump_sale_sec_2_42c')" title="Click for Viva Explanation">
              <div class="metric-label" style="display:flex; justify-content:space-between;">
                <span>Enterprise Value (3.0x)</span>
                <span style="font-size:0.65rem; color:var(--brass-light);">ℹ️ Explain</span>
              </div>
              <div class="metric-value" id="outEV" style="color: var(--brass-light);">₹6.30 Cr</div>
              <div class="metric-sub">Sec 2(42C) Slump Sale</div>
            </div>

            <div class="metric-tile" style="background: var(--ink-2); cursor:pointer;" onclick="window.openWhyModal('capital_stack_60_20_20')" title="Click for Viva Explanation">
              <div class="metric-label" style="display:flex; justify-content:space-between;">
                <span>Senior Debt Line (45%)</span>
                <span style="font-size:0.65rem; color:var(--teal-2);">ℹ️ Explain</span>
              </div>
              <div class="metric-value" id="outDebt">₹2.84 Cr</div>
              <div class="metric-sub" id="outDSCR">DSCR: 1.62x (Lender Grade)</div>
            </div>

            <div class="metric-tile" style="background: var(--ink-2); cursor:pointer;" onclick="window.openWhyModal('sec_50b_tax_13_pct')" title="Click for Viva Explanation">
              <div class="metric-label" style="display:flex; justify-content:space-between;">
                <span>Net Take-Home Cash</span>
                <span style="font-size:0.65rem; color:#10B981;">ℹ️ Explain</span>
              </div>
              <div class="metric-value" id="outTakeHome" style="color: #10B981;">₹5.89 Cr</div>
              <div class="metric-sub" id="outTax">Tax: ₹41.3 L (13.0% LTCG)</div>
            </div>
          </div>

          <!-- Dynamic SVG Recovery Curve -->
          <div style="background: #060D11; border: 1px solid var(--line-light); border-radius: 6px; padding: 16px; margin-bottom: 22px;">
            <div style="display: flex; justify-content: space-between; font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; color: var(--text-muted); margin-bottom: 8px;">
              <span>HISTORICAL DEPRESSED MARGIN</span>
              <span style="color: var(--teal-2);">POST-ACQUISITION NORMALIZED EBITDA</span>
            </div>
            <svg id="underwritingChart" viewBox="0 0 460 110" style="width: 100%; height: 90px; overflow: visible;">
              <!-- Dynamic curve injected via JS -->
            </svg>
          </div>

          <!-- Automated Forensic Audit Findings -->
          <div id="forensicFindings" style="font-size: 0.84rem; line-height: 1.6;">
            <!-- Injected via JS -->
          </div>

          <div style="display:flex; gap:12px; margin-top: 24px;">
            <button class="btn btn-ghost" style="flex:1;" id="exportAuditSummaryBtn">
              📄 Export Underwriting Memo
            </button>
            <button class="btn btn-teal" style="flex:1;" id="applyToDealRoomBtn">
              Apply to Gated Deal Room →
            </button>
          </div>
        </div>
      </div>
    `;

    bindScannerEvents();
    recalculate();
  }

  function bindScannerEvents() {
    const inputs = ['inputTurnover', 'inputMargin', 'inputAddBacks', 'inputCapex', 'inputVariance'];
    inputs.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', recalculate);
    });

    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active', 'btn-teal'));
        this.classList.add('active', 'btn-teal');
        const preset = this.dataset.preset;
        applyPreset(preset);
      });
    });

    // Forensic Add-Back Ledger Modal
    const ledgerBtn = document.getElementById('viewAddBackLedgerBtn');
    if (ledgerBtn) {
      ledgerBtn.addEventListener('click', openAddBackLedgerModal);
    }

    const exportMemoBtn = document.getElementById('exportAuditSummaryBtn');
    if (exportMemoBtn) {
      exportMemoBtn.addEventListener('click', () => {
        if (window.showToast) {
          window.showToast('Downloaded Formal 4-Page Underwriting Memorandum (PDF).');
        }
      });
    }

    const applyBtn = document.getElementById('applyToDealRoomBtn');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        if (window.showToast) {
          window.showToast('Normalized financial vitals applied to Gated Deal Room & Escrow Stack.');
        }
        window.location.hash = '#deal-room';
      });
    }
  }

  function openAddBackLedgerModal() {
    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');
    if (!modalBody || !overlay) return;

    modalTitle.textContent = `TALLY FORENSIC ADD-BACK LEDGER · DEAL #MH-AUTO-1092`;
    modalBody.innerHTML = `
      <div class="formal-doc">
        <div class="doc-stamp">ICAI AUP AUDITED</div>
        <p style="font-size:0.86rem; color:var(--text-muted); margin-bottom:16px;">
          The following discretionary ledger entries were extracted from TallyPrime General Ledger (ODBC Port 9000) and verified by partner CA firm <i>Kulkarni & Phadke Associates</i>. These personal promoter expenses are normalized back to establish true operating SDE.
        </p>

        <table class="institutional-table" style="font-size:0.82rem; margin-bottom:20px;">
          <thead>
            <tr>
              <th>Voucher Date</th>
              <th>Tally Ledger Name</th>
              <th>Audit Classification</th>
              <th>Amount (INR)</th>
              <th>Verification Proof</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="mono">18-Aug-2025</td>
              <td>BMW Financial Services</td>
              <td>Promoter Personal Vehicle Lease</td>
              <td class="mono" style="color:var(--teal-2); font-weight:600;">₹8,40,000</td>
              <td>RC Copy in Promoter Name</td>
            </tr>
            <tr>
              <td class="mono">28-Nov-2025</td>
              <td>Director Remuneration (Spouse)</td>
              <td>Excess Director Wages Above Market</td>
              <td class="mono" style="color:var(--teal-2); font-weight:600;">₹14,00,000</td>
              <td>Market replacement salary ₹6.0L</td>
            </tr>
            <tr>
              <td class="mono">14-Jan-2026</td>
              <td>Club Mahindra & Travel Corp</td>
              <td>Promoter Discretionary Travel</td>
              <td class="mono" style="color:var(--teal-2); font-weight:600;">₹4,60,00,0</td>
              <td>Family personal expense voucher</td>
            </tr>
            <tr>
              <td class="mono">05-Mar-2026</td>
              <td>Advocate S. Gupte (Legal)</td>
              <td>Non-Recurring Boundary Dispute</td>
              <td class="mono" style="color:var(--teal-2); font-weight:600;">₹5,00,000</td>
              <td>One-time civil settlement</td>
            </tr>
            <tr>
              <td class="mono">19-Mar-2026</td>
              <td>Fuel & Entertainment Float</td>
              <td>Unreconciled Cash Float Disbursed</td>
              <td class="mono" style="color:var(--teal-2); font-weight:600;">₹5,00,000</td>
              <td>Promoter discretionary draw</td>
            </tr>
            <tr style="background:var(--ink-3);">
              <td colspan="3"><b>TOTAL VERIFIED FORENSIC ADD-BACKS</b></td>
              <td colspan="2" class="mono" style="color:var(--brass-light); font-size:1.05rem; font-weight:700;">
                ₹37,00,000 (Added back to SDE)
              </td>
            </tr>
          </tbody>
        </table>

        <div style="background:var(--ink-3); padding:12px; border-radius:4px; font-size:0.8rem; color:var(--text-muted);">
          <b>Statutory Rule:</b> These add-backs are approved under the ICAI Limited-Scope Agreed-Upon Procedures (AUP) Standard SRS 4400.
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:20px;">
        <button class="btn btn-ghost" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">Close</button>
        <button class="btn btn-teal" onclick="window.showToast('Forensic add-back ledger exported with voucher hashes.'); document.getElementById('globalModalOverlay').classList.remove('active');">
          Download Certified Ledger (PDF)
        </button>
      </div>
    `;

    overlay.classList.add('active');
  }

  function applyPreset(preset) {
    if (preset === 'chakan') {
      document.getElementById('inputTurnover').value = 124;
      document.getElementById('inputMargin').value = 7.4;
      document.getElementById('inputAddBacks').value = 37;
      document.getElementById('inputCapex').value = 15;
      document.getElementById('inputVariance').value = 0.72;
    } else if (preset === 'rajkot') {
      document.getElementById('inputTurnover').value = 186;
      document.getElementById('inputMargin').value = 4.2;
      document.getElementById('inputAddBacks').value = 45;
      document.getElementById('inputCapex').value = 28;
      document.getElementById('inputVariance').value = 1.85;
    } else if (preset === 'peenya') {
      document.getElementById('inputTurnover').value = 89;
      document.getElementById('inputMargin').value = 14.5;
      document.getElementById('inputAddBacks').value = 22;
      document.getElementById('inputCapex').value = 10;
      document.getElementById('inputVariance').value = 0.45;
    }
    recalculate();
  }

  function formatCr(valInCr) {
    if (valInCr >= 1.0) {
      return `₹${valInCr.toFixed(2)} Cr`;
    }
    return `₹${(valInCr * 100).toFixed(1)} L`;
  }

  function recalculate() {
    const turnoverRaw = parseFloat(document.getElementById('inputTurnover').value);
    const turnoverInCr = turnoverRaw / 10;
    const marginPct = parseFloat(document.getElementById('inputMargin').value);
    const addBacksInLakhs = parseFloat(document.getElementById('inputAddBacks').value);
    const capexInLakhs = parseFloat(document.getElementById('inputCapex').value);
    const variancePct = parseFloat(document.getElementById('inputVariance').value);

    // Update Label Displays
    document.getElementById('turnoverVal').textContent = formatCr(turnoverInCr);
    document.getElementById('marginVal').textContent = `${marginPct.toFixed(1)}%`;
    document.getElementById('addBacksVal').textContent = `₹${addBacksInLakhs.toFixed(1)} L`;
    document.getElementById('capexVal').textContent = `₹${capexInLakhs.toFixed(1)} L`;
    document.getElementById('varianceVal').textContent = `${variancePct.toFixed(2)}%`;

    // 1. Calculations
    const turnoverNum = turnoverInCr * 10000000;
    const reportedPBT = turnoverNum * (marginPct / 100);
    const addBacksNum = addBacksInLakhs * 100000;
    const capexNum = capexInLakhs * 100000;

    const sdeNum = Math.max(500000, reportedPBT + addBacksNum);
    const sdeMarginPct = (sdeNum / turnoverNum) * 100;

    const evNum = sdeNum * 3.0;
    const seniorDebtNum = evNum * 0.45;
    const annualDebtService = (seniorDebtNum * 0.115) + (seniorDebtNum / 5);
    const ocf = sdeNum - capexNum;
    const dscr = annualDebtService > 0 ? (ocf / annualDebtService) : 1.5;

    const estimatedNetWorth = evNum * 0.50;
    const capitalGain = Math.max(0, evNum - estimatedNetWorth);
    const taxRate = 0.130;
    const capitalGainsTax = capitalGain * taxRate;
    const netPromoterCash = evNum - capitalGainsTax;

    // Update Output Elements
    document.getElementById('outSDE').textContent = formatCr(sdeNum / 10000000);
    document.getElementById('outSDEMargin').textContent = `${sdeMarginPct.toFixed(2)}% Margin`;
    document.getElementById('outEV').textContent = formatCr(evNum / 10000000);
    document.getElementById('outDebt').textContent = formatCr(seniorDebtNum / 10000000);
    document.getElementById('outDSCR').textContent = `DSCR: ${dscr.toFixed(2)}x ${dscr >= 1.25 ? '(Approved)' : '(Tight)'}`;
    document.getElementById('outTakeHome').textContent = formatCr(netPromoterCash / 10000000);
    document.getElementById('outTax').textContent = `Tax: ${formatCr(capitalGainsTax / 10000000)} (13.0% LTCG)`;

    const badge = document.getElementById('reconciliationBadge');
    if (variancePct <= 3.0) {
      badge.className = 'badge badge-clean';
      badge.textContent = `RECONCILED CLEAN (${variancePct.toFixed(2)}%)`;
    } else {
      badge.className = 'badge badge-critical';
      badge.textContent = `ANOMALY HALT (${variancePct.toFixed(2)}% > 3%)`;
    }

    renderTrajectoryChart(marginPct, sdeMarginPct, variancePct);
    renderFindings(dscr, variancePct, addBacksInLakhs, sdeMarginPct);

    if (window.BRE_STATE) {
      window.BRE_STATE.updateScanResult({
        turnoverNum,
        sdeNum,
        evNum,
        seniorDebtNum,
        dscr,
        capitalGainsTax,
        netPromoterCash,
        variancePct
      });
    }
  }

  function renderTrajectoryChart(reportedMargin, normalizedMargin, variancePct) {
    const svg = document.getElementById('underwritingChart');
    if (!svg) return;

    const yStart = Math.max(10, Math.min(100, 80 - reportedMargin * 2.5));
    const yDip = Math.min(100, yStart + 15);
    const yRecover = Math.max(10, Math.min(95, 75 - normalizedMargin * 2.5));

    const pathD = `M 10,${yStart} Q 120,${yDip} 230,${yStart} T 450,${yRecover}`;
    const strokeColor = variancePct <= 3.0 ? '#24ABA1' : '#EF4444';

    svg.innerHTML = `
      <defs>
        <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#7A2331" />
          <stop offset="50%" stop-color="#C79A45" />
          <stop offset="100%" stop-color="${strokeColor}" />
        </linearGradient>
      </defs>
      <line x1="0" y1="55" x2="460" y2="55" stroke="rgba(246,243,235,0.08)" stroke-width="1" stroke-dasharray="4 4" />
      <path d="${pathD}" fill="none" stroke="url(#curveGrad)" stroke-width="3.2" stroke-linecap="round" />
      <circle cx="10" cy="${yStart}" r="4" fill="#7A2331" />
      <circle cx="230" cy="${yStart}" r="4" fill="#C79A45" />
      <circle cx="450" cy="${yRecover}" r="5" fill="${strokeColor}" />
    `;
  }

  function renderFindings(dscr, variance, addBacks, sdeMargin) {
    const findingsDiv = document.getElementById('forensicFindings');
    if (!findingsDiv) return;

    const items = [];
    if (variance <= 3.0) {
      items.push(`✓ <b>Source Integrity:</b> 36M Bank credits vs. GSTN turnover variance is <b>${variance.toFixed(2)}%</b>, well within the 3.0% AUP threshold.`);
    } else {
      items.push(`⚠ <b>Forensic Anomaly:</b> Variance is <b>${variance.toFixed(2)}%</b> (exceeds 3.0% threshold). Automated workflow flagged for forensic review.`);
    }

    if (dscr >= 1.35) {
      items.push(`✓ <b>Senior Debt Capacity:</b> DSCR underwritten at <b>${dscr.toFixed(2)}x</b>, comfortably clearing NBFC lending floor of 1.25x.`);
    } else {
      items.push(`⚠ <b>Debt Coverage Warning:</b> DSCR is <b>${dscr.toFixed(2)}x</b>. Recommend increasing Seller Vendor Note from 20% to 25% to de-lever senior lender.`);
    }

    items.push(`✓ <b>Normalization Impact:</b> SDE add-backs of ₹${addBacks.toFixed(1)} L elevated gross operating margins to <b>${sdeMargin.toFixed(1)}%</b>.`);

    findingsDiv.innerHTML = items.map(t => `<div style="margin-bottom: 6px; color: var(--text-muted);">${t}</div>`).join('');
  }

  document.addEventListener('DOMContentLoaded', initScanner);
})();
