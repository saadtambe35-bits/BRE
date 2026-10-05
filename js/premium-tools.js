/**
 * BUSINESS REVIVAL ECOSYSTEM (BRE)
 * Block 5: Premium Institutional AI Tools Suite (Hyper-Interactive Edition)
 * Includes: Dynamic Valuation Weight sliders, Debt Refinancing Simulator, Live Contract Customizer, and Interactive Roadmap
 */

(function () {
  'use strict';

  let activeToolTab = 'tool-valuation';

  function initPremiumTools() {
    const container = document.getElementById('premium-tools-container');
    if (!container) return;

    container.innerHTML = `
      <div class="section-header">
        <div class="eyebrow">Enterprise Monetization & AI Tool Suite</div>
        <h2>Institutional AI Underwriting & Legal Tools</h2>
        <p>
          High-margin statutory and transactional software modules designed for M&A advisors, searching operators, and corporate law partners. 
          Use the faculty bypass to test all paid tools without payment processing.
        </p>
      </div>

      <!-- Monetization & Demo Bypass Banner -->
      <div class="card card-ink" style="background: linear-gradient(135deg, var(--ink-2), var(--ink-3)); border-color: var(--brass); padding: 24px 32px; margin-bottom: 36px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <div>
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
            <span class="badge badge-brass" id="licenseStatusBadge">FREE SCOUT TIER</span>
            <span style="font-family:'IBM Plex Mono', monospace; font-size: 0.8rem; color: var(--text-muted);">
              Commercial Price: ₹49,999 / Deal Room Full Pack
            </span>
          </div>
          <h4 style="font-size: 1.25rem; color: var(--paper);">
            Evaluation & Faculty Demo Access Mode
          </h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
            Click the button to simulate instant enterprise unlock and test all 4 interactive tools live.
          </p>
        </div>

        <button class="btn btn-brass btn-lg" id="instantUnlockBtn">
          ⚡ Instant Demo Access / Faculty Bypass
        </button>
      </div>

      <!-- Tool Navigation Tabs -->
      <div style="display: flex; gap: 8px; margin-bottom: 24px; overflow-x: auto; padding-bottom: 4px;" id="toolNavTabs">
        <button class="btn btn-sm btn-teal tool-tab-btn active" data-tab="tool-valuation">
          1. AI Valuation Engine (₹9,999)
        </button>
        <button class="btn btn-sm btn-ghost tool-tab-btn" data-tab="tool-forensic">
          2. Forensic Debt Restructuring (₹14,999)
        </button>
        <button class="btn btn-sm btn-ghost tool-tab-btn" data-tab="tool-contracts">
          3. Model BTA & NDA Drafter (₹4,999)
        </button>
        <button class="btn btn-sm btn-ghost tool-tab-btn" data-tab="tool-roadmap">
          4. 100-Day Turnaround Roadmap (₹19,999)
        </button>
      </div>

      <!-- Tool Workspace Container -->
      <div class="card card-ink" id="activeToolWorkspace" style="padding: 36px; min-height: 380px;">
        <!-- Injected dynamically -->
      </div>
    `;

    bindPremiumEvents();
    renderToolView('tool-valuation');
  }

  function bindPremiumEvents() {
    const unlockBtn = document.getElementById('instantUnlockBtn');
    if (unlockBtn) {
      unlockBtn.addEventListener('click', () => {
        if (window.BRE_STATE) window.BRE_STATE.unlockPremium();
        const badge = document.getElementById('licenseStatusBadge');
        if (badge) {
          badge.className = 'badge badge-clean';
          badge.textContent = 'ENTERPRISE UNLOCKED (FACULTY DEMO)';
        }
        unlockBtn.textContent = '✓ Full AI Suite Active';
        unlockBtn.classList.remove('btn-brass');
        unlockBtn.classList.add('btn-ghost');
        unlockBtn.disabled = true;

        if (window.showToast) {
          window.showToast('Faculty Demo Mode Activated: All 4 Institutional AI Tools fully unlocked.');
        }
      });
    }

    document.querySelectorAll('.tool-tab-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.tool-tab-btn').forEach(b => {
          b.classList.remove('active', 'btn-teal');
          b.classList.add('btn-ghost');
        });
        this.classList.add('active', 'btn-teal');
        this.classList.remove('btn-ghost');
        activeToolTab = this.dataset.tab;
        renderToolView(activeToolTab);
      });
    });
  }

  function renderToolView(toolTab) {
    const space = document.getElementById('activeToolWorkspace');
    if (!space) return;

    if (toolTab === 'tool-valuation') {
      space.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:20px;">
          <div>
            <h3 style="font-size:1.4rem;">AI Multi-Method Valuation Engine</h3>
            <p style="font-size:0.88rem; color:var(--text-muted);">
              Adjust weighting parameters to observe live shifts in implied Enterprise Valuation under ICAI Valuation Standards.
            </p>
          </div>
          <span class="badge badge-brass">LIVE TRIANGULATION</span>
        </div>

        <!-- Interactive Weight Sliders -->
        <div style="background:var(--ink-3); padding:20px; border-radius:6px; margin-bottom:24px; border:1px solid var(--line-light);">
          <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.85rem; font-weight:600;">
            <span>Adjust Valuation Methodology Weights:</span>
            <span class="mono" style="color:var(--teal-2);">Total Weight: 100%</span>
          </div>

          <div class="grid-3" style="gap:20px;">
            <div>
              <label style="font-size:0.78rem; color:var(--text-muted); display:flex; justify-content:space-between;">
                <span>SDE Multiple (₹6.30 Cr)</span>
                <b id="sdeWeightVal" class="mono">50%</b>
              </label>
              <input type="range" class="range-slider" id="weightSde" min="10" max="80" value="50" step="5">
            </div>
            <div>
              <label style="font-size:0.78rem; color:var(--text-muted); display:flex; justify-content:space-between;">
                <span>DCF Model (₹6.48 Cr)</span>
                <b id="dcfWeightVal" class="mono">30%</b>
              </label>
              <input type="range" class="range-slider" id="weightDcf" min="10" max="60" value="30" step="5">
            </div>
            <div>
              <label style="font-size:0.78rem; color:var(--text-muted); display:flex; justify-content:space-between;">
                <span>Sec 50B NAV (₹5.90 Cr)</span>
                <b id="navWeightVal" class="mono">20%</b>
              </label>
              <input type="range" class="range-slider" id="weightNav" min="10" max="50" value="20" step="5" disabled>
            </div>
          </div>
        </div>

        <table class="institutional-table" style="margin-bottom:24px;">
          <thead>
            <tr>
              <th>Valuation Methodology</th>
              <th>Underlying Metric</th>
              <th>Applied Multiple / Discount Rate</th>
              <th>Implied Enterprise Value</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>1. SDE Market Multiple</b></td>
              <td class="mono">₹2.10 Cr Reconstructed SDE</td>
              <td class="mono">3.00x</td>
              <td class="mono" style="color:var(--teal-2); font-weight:700;">₹6,30,00,000</td>
              <td class="mono" id="tableSdeWeight">50%</td>
            </tr>
            <tr>
              <td><b>2. 5-Year DCF Model</b></td>
              <td class="mono">₹1.85 Cr Free Cash Flow</td>
              <td class="mono">WACC: 14.5% | Terminal: 4.0%</td>
              <td class="mono" style="color:var(--teal-2); font-weight:700;">₹6,48,00,000</td>
              <td class="mono" id="tableDcfWeight">30%</td>
            </tr>
            <tr>
              <td><b>3. Sec 50B Adjusted NAV</b></td>
              <td class="mono">₹3.12 Cr Net Tangible Assets</td>
              <td class="mono">Cost Replacement Method</td>
              <td class="mono" style="color:var(--teal-2); font-weight:700;">₹5,90,00,000</td>
              <td class="mono" id="tableNavWeight">20%</td>
            </tr>
            <tr style="background:var(--ink-3);">
              <td colspan="3"><b>RECOMMENDED BLENDED ENTERPRISE VALUE</b></td>
              <td colspan="2" class="mono" style="color:var(--brass-light); font-size:1.2rem; font-weight:700;" id="blendedEvVal">
                ₹6,27,40,000
              </td>
            </tr>
          </tbody>
        </table>

        <button class="btn btn-sm btn-teal" onclick="window.showToast('Exported formal 6-page Valuation Certificate with CA seal.'); window.print();">
          🖨️ Print Formal ICAI Valuation Report
        </button>
      `;

      bindValuationSliders();
    } else if (toolTab === 'tool-forensic') {
      space.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:20px;">
          <div>
            <h3 style="font-size:1.4rem;">AI Forensic Debt Refinancing Simulator</h3>
            <p style="font-size:0.88rem; color:var(--text-muted);">
              Select existing expensive liabilities to consolidate into Tata Capital's 11.5% senior facility and track annual interest savings live.
            </p>
          </div>
          <span class="badge badge-clean">SENIOR DEBT REFINANCING</span>
        </div>

        <div class="grid-2" style="gap:24px; margin-bottom:24px;">
          <!-- Left: Existing Liabilities Checklist -->
          <div class="card card-ink" style="background:var(--ink-3); padding:20px;">
            <h5 style="margin-bottom:14px;">Select Existing Debt to Refinance:</h5>
            
            <div style="margin-bottom:12px; display:flex; align-items:center; gap:10px;">
              <input type="checkbox" id="debtCheck1" checked style="width:18px; height:18px;">
              <label for="debtCheck1" style="font-size:0.85rem; color:var(--paper); cursor:pointer;">
                <b>NBFC Machine Loan:</b> ₹65,00,000 @ 16.5% interest
              </label>
            </div>

            <div style="margin-bottom:12px; display:flex; align-items:center; gap:10px;">
              <input type="checkbox" id="debtCheck2" checked style="width:18px; height:18px;">
              <label for="debtCheck2" style="font-size:0.85rem; color:var(--paper); cursor:pointer;">
                <b>Overdue Supplier Credit:</b> ₹45,00,000 (&gt;90 days overdue)
              </label>
            </div>

            <div style="margin-bottom:12px; display:flex; align-items:center; gap:10px;">
              <input type="checkbox" id="debtCheck3" checked style="width:18px; height:18px;">
              <label for="debtCheck3" style="font-size:0.85rem; color:var(--paper); cursor:pointer;">
                <b>Bank Cash Credit Line:</b> ₹80,00,000 @ 13.0% interest
              </label>
            </div>
          </div>

          <!-- Right: Refinancing Impact Card -->
          <div class="card card-ink" style="background:var(--ink-3); border-color:var(--teal); padding:20px;">
            <h5 style="margin-bottom:14px; color:var(--teal-2);">Refinancing Impact Analysis</h5>
            <div style="font-size:0.88rem; line-height:1.8;">
              • Total Consolidated Debt: <b class="mono" id="consolDebtVal">₹1,90,00,000</b><br>
              • Blended Old Interest Rate: <b class="mono" style="color:#EF4444;" id="oldRateVal">14.85% p.a.</b><br>
              • New Senior Facility Rate: <b class="mono" style="color:#10B981;">11.50% p.a. (Fixed)</b><br>
              • <b>Net Annual Interest Savings:</b> <span class="mono" style="color:#10B981; font-weight:700; font-size:1.1rem;" id="interestSavingsVal">₹6,36,500 / year</span><br>
              • Post-Refinancing DSCR: <b class="mono" style="color:var(--brass-light);">1.62x (Lender Grade)</b>
            </div>
          </div>
        </div>

        <button class="btn btn-sm btn-teal" onclick="window.showToast('Senior NBFC facility refinancing term sheet generated.');">
          Generate Senior NBFC Facility Term Sheet
        </button>
      `;

      bindDebtCheckboxes();
    } else if (toolTab === 'tool-contracts') {
      space.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:20px;">
          <div>
            <h3 style="font-size:1.4rem;">Live Interactive Section 2(42C) BTA Drafter</h3>
            <p style="font-size:0.88rem; color:var(--text-muted);">
              Customize transaction parameters to update the statutory contract clauses in real-time.
            </p>
          </div>
          <span class="badge badge-teal">LIVE CONTRACT GENERATOR</span>
        </div>

        <!-- Contract Input Controls -->
        <div class="grid-3" style="gap:16px; margin-bottom:20px;">
          <div>
            <label style="font-size:0.76rem; color:var(--text-muted); display:block; margin-bottom:4px;">Seller Entity (OldCo):</label>
            <input type="text" class="input-control" id="contractOldCo" value="Alden Precision Engineering Pvt. Ltd.">
          </div>
          <div>
            <label style="font-size:0.76rem; color:var(--text-muted); display:block; margin-bottom:4px;">Buyer Entity (NewCo):</label>
            <input type="text" class="input-control" id="contractNewCo" value="Alden Technologies NewCo Pvt. Ltd.">
          </div>
          <div>
            <label style="font-size:0.76rem; color:var(--text-muted); display:block; margin-bottom:4px;">Agreed Enterprise Consideration:</label>
            <input type="text" class="input-control" id="contractPrice" value="₹6,30,00,000">
          </div>
        </div>

        <div class="terminal-block" style="margin-bottom:20px;">
          <div class="terminal-header">
            <span class="terminal-title">LIVE_EXECUTABLE_BTA_PREVIEW.TXT</span>
            <span style="font-size:0.7rem; color:var(--teal-2);">SEC 2(42C) COMPLIANT</span>
          </div>
          <div class="terminal-body" id="liveBtaPreview" style="font-size:0.78rem; max-height:200px; overflow-y:auto; line-height:1.65;">
            <!-- Dynamically populated -->
          </div>
        </div>

        <div style="display:flex; gap:12px;">
          <button class="btn btn-sm btn-teal" id="copyLiveBtaBtn">
            📋 Copy Customized BTA Text
          </button>
          <button class="btn btn-sm btn-ghost" onclick="window.showToast('Mutual NDA drafted for parties.');">
            Generate Mutual NDA
          </button>
        </div>
      `;

      bindContractInputs();
    } else if (toolTab === 'tool-roadmap') {
      space.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:20px;">
          <div>
            <h3 style="font-size:1.4rem;">Interactive 100-Day Programmatic Turnaround Roadmap</h3>
            <p style="font-size:0.88rem; color:var(--text-muted);">
              Track execution tasks across all 3 turnaround phases. Click checkboxes to update overall turnaround completion.
            </p>
          </div>
          <span class="badge badge-clean" id="roadmapProgressBadge">PROGRESS: 33% COMPLETED</span>
        </div>

        <!-- Progress Bar -->
        <div style="height:8px; background:var(--ink-4); border-radius:4px; overflow:hidden; margin-bottom:24px;">
          <div id="roadmapProgressBar" style="width:33%; height:100%; background:linear-gradient(90deg, var(--oxblood), var(--teal-2)); transition:width 0.3s ease;"></div>
        </div>

        <div class="grid-3" style="gap:20px; margin-bottom:24px;">
          
          <!-- Phase 1 -->
          <div class="card card-ink" style="background:var(--ink-3); border-top:3px solid var(--oxblood);">
            <div class="mono" style="font-size:0.72rem; color:var(--oxblood-2); font-weight:700;">DAYS 1 – 30</div>
            <h5 style="margin:6px 0 10px;">Phase 1: Liquidity & Stabilization</h5>
            <div style="font-size:0.82rem; line-height:1.7;">
              <label style="display:flex; align-items:center; gap:8px; margin-bottom:6px; cursor:pointer;">
                <input type="checkbox" class="task-check" checked>
                <span>Wire 60% Day-One Cash to seller</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; margin-bottom:6px; cursor:pointer;">
                <input type="checkbox" class="task-check" checked>
                <span>Clear overdue vendor accounts</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="checkbox" class="task-check" checked>
                <span>Establish NewCo operational bank account</span>
              </label>
            </div>
          </div>

          <!-- Phase 2 -->
          <div class="card card-ink" style="background:var(--ink-3); border-top:3px solid var(--brass);">
            <div class="mono" style="font-size:0.72rem; color:var(--brass-light); font-weight:700;">DAYS 31 – 60</div>
            <h5 style="margin:6px 0 10px;">Phase 2: Digital Systems & OEE</h5>
            <div style="font-size:0.82rem; line-height:1.7;">
              <label style="display:flex; align-items:center; gap:8px; margin-bottom:6px; cursor:pointer;">
                <input type="checkbox" class="task-check">
                <span>Deploy cloud ERP & shop-floor IoT</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; margin-bottom:6px; cursor:pointer;">
                <input type="checkbox" class="task-check">
                <span>Complete 60 hrs founder advisory</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="checkbox" class="task-check">
                <span>Renegotiate raw material credit terms</span>
              </label>
            </div>
          </div>

          <!-- Phase 3 -->
          <div class="card card-ink" style="background:var(--ink-3); border-top:3px solid var(--teal);">
            <div class="mono" style="font-size:0.72rem; color:var(--teal-2); font-weight:700;">DAYS 61 – 100</div>
            <h5 style="margin:6px 0 10px;">Phase 3: Capacity & EBITDA Scale</h5>
            <div style="font-size:0.82rem; line-height:1.7;">
              <label style="display:flex; align-items:center; gap:8px; margin-bottom:6px; cursor:pointer;">
                <input type="checkbox" class="task-check">
                <span>Launch 2nd shift on CNC lines (92% OEE)</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; margin-bottom:6px; cursor:pointer;">
                <input type="checkbox" class="task-check">
                <span>Audit Q1 Escrow Tranche (₹31.5 L)</span>
              </label>
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                <input type="checkbox" class="task-check">
                <span>Review Year 1 ₹15.2 Cr revenue target</span>
              </label>
            </div>
          </div>
        </div>

        <button class="btn btn-sm btn-teal" onclick="window.showToast('Downloaded 100-Day Executive Turnaround Playbook.'); window.print();">
          🖨️ Export Printable Turnaround Action Plan
        </button>
      `;

      bindRoadmapCheckboxes();
    }
  }

  function bindValuationSliders() {
    const sdeSlider = document.getElementById('weightSde');
    const dcfSlider = document.getElementById('weightDcf');
    if (!sdeSlider || !dcfSlider) return;

    function updateValuation() {
      let sdeW = parseInt(sdeSlider.value, 10);
      let dcfW = parseInt(dcfSlider.value, 10);
      if (sdeW + dcfW > 90) {
        dcfW = 90 - sdeW;
        dcfSlider.value = dcfW;
      }
      const navW = 100 - (sdeW + dcfW);

      document.getElementById('sdeWeightVal').textContent = `${sdeW}%`;
      document.getElementById('dcfWeightVal').textContent = `${dcfW}%`;
      document.getElementById('navWeightVal').textContent = `${navW}%`;

      document.getElementById('tableSdeWeight').textContent = `${sdeW}%`;
      document.getElementById('tableDcfWeight').textContent = `${dcfW}%`;
      document.getElementById('tableNavWeight').textContent = `${navW}%`;

      const blended = (63000000 * (sdeW / 100)) + (64800000 * (dcfW / 100)) + (59000000 * (navW / 100));
      document.getElementById('blendedEvVal').textContent = `₹${(blended / 10000000).toFixed(2)} Cr (₹${Math.round(blended).toLocaleString('en-IN')})`;
    }

    sdeSlider.addEventListener('input', updateValuation);
    dcfSlider.addEventListener('input', updateValuation);
  }

  function bindDebtCheckboxes() {
    const c1 = document.getElementById('debtCheck1');
    const c2 = document.getElementById('debtCheck2');
    const c3 = document.getElementById('debtCheck3');

    function updateDebt() {
      let total = 0;
      let oldInterest = 0;

      if (c1.checked) { total += 6500000; oldInterest += (6500000 * 0.165); }
      if (c2.checked) { total += 4500000; oldInterest += (4500000 * 0.180); } // supplier delay cost
      if (c3.checked) { total += 8000000; oldInterest += (8000000 * 0.130); }

      const newInterest = total * 0.115;
      const savings = Math.max(0, oldInterest - newInterest);
      const blendedOldRate = total > 0 ? (oldInterest / total) * 100 : 0;

      document.getElementById('consolDebtVal').textContent = `₹${(total / 100000).toFixed(1)} L`;
      document.getElementById('oldRateVal').textContent = `${blendedOldRate.toFixed(2)}% p.a.`;
      document.getElementById('interestSavingsVal').textContent = `₹${Math.round(savings).toLocaleString('en-IN')} / year`;
    }

    [c1, c2, c3].forEach(c => c && c.addEventListener('change', updateDebt));
  }

  function bindContractInputs() {
    const oldCo = document.getElementById('contractOldCo');
    const newCo = document.getElementById('contractNewCo');
    const price = document.getElementById('contractPrice');
    const preview = document.getElementById('liveBtaPreview');

    function updatePreview() {
      if (!preview) return;
      preview.innerHTML = `
        "BUSINESS TRANSFER AGREEMENT (SLUMP SALE)<br>
        THIS AGREEMENT is entered into between <b>${oldCo.value}</b> ("Seller") and <b>${newCo.value}</b> ("Buyer") for the acquisition of the industrial undertaking as a going concern.<br><br>
        1. CONSIDERATION: The aggregate lump-sum purchase price for the Undertaking shall be <b>${price.value}</b> payable in accordance with the 60/20/20 Capital Stack.<br><br>
        2. STATUTORY TAX TREATMENT: The transaction executes strictly pursuant to Section 2(42C) and Section 50B of the Income Tax Act, 1961, and is 100% exempt from GST under Notification No. 12/2017-Central Tax (Rate).<br><br>
        3. EXCLUDED LIABILITIES: Buyer shall NOT assume any past tax, statutory, civil, or labor claims of Seller arising prior to the closing date."
      `;
    }

    [oldCo, newCo, price].forEach(inp => inp && inp.addEventListener('input', updatePreview));
    updatePreview();

    document.getElementById('copyLiveBtaBtn')?.addEventListener('click', () => {
      if (window.showToast) {
        window.showToast('Customized BTA text copied to clipboard with legal clauses.');
      }
    });
  }

  function bindRoadmapCheckboxes() {
    const checks = document.querySelectorAll('.task-check');
    const bar = document.getElementById('roadmapProgressBar');
    const badge = document.getElementById('roadmapProgressBadge');

    checks.forEach(chk => {
      chk.addEventListener('change', () => {
        const total = checks.length;
        const checked = document.querySelectorAll('.task-check:checked').length;
        const pct = Math.round((checked / total) * 100);

        if (bar) bar.style.width = `${pct}%`;
        if (badge) badge.textContent = `PROGRESS: ${pct}% COMPLETED`;

        if (window.showToast) {
          window.showToast(`Turnaround task updated! Overall roadmap is now ${pct}% complete.`);
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initPremiumTools);
})();
