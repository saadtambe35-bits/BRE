/**
 * BUSINESS REVIVAL ECOSYSTEM (BRE)
 * Block 6A: Virtual Deal Room, Capital Stack Customizer & 4-Tranche Escrow Console (Hyper-Interactive Edition)
 * Includes: Live Capital Stack Sliders, Advisory Timesheet Inspector, and Digital Closing Certificate
 */

(function () {
  'use strict';

  function initDealRoom() {
    const container = document.getElementById('deal-room-container');
    if (!container) return;

    container.innerHTML = `
      <div class="section-header">
        <div class="eyebrow">Virtual Escrow & Transaction Governance</div>
        <h2>60/20/20 Capital Stack & Milestone Escrow</h2>
        <p>
          Transactions execute strictly under Section 2(42C) slump sale governance. 
          Use the interactive structuring engine below to customize capital allocations or inspect and release milestone holdback tranches.
        </p>
      </div>

      <!-- Part 1: Interactive Capital Stack Customizer -->
      <div class="card card-ink" style="padding: 32px; margin-bottom: 32px; border-color:var(--line-strong);">
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:12px; flex-wrap:wrap; gap:10px;">
          <div>
            <h4 style="font-size:1.25rem;">Interactive Capital Stack Structuring Engine</h4>
            <span style="font-size:0.82rem; color:var(--text-muted);">Deal: <b>#MH-AUTO-1092 (Alden Precision Engineering)</b> | Target EV: <b>₹6,30,00,000</b></span>
          </div>
          <span class="why-tag" onclick="window.openWhyModal('capital_stack_60_20_20')">Why 60/20/20?</span>
        </div>

        <!-- Dynamic Multi-Color Capital Stack Bar -->
        <div class="capital-stack-bar" id="liveStackBar">
          <div class="stack-segment stack-senior" id="segSenior" style="width:45%;" title="Senior NBFC Debt">
            <span>45% SENIOR DEBT (₹2.835 Cr)</span>
          </div>
          <div class="stack-segment stack-equity" id="segEquity" style="width:15%;" title="Buyer Liquid Equity">
            <span>15% EQUITY (₹94.5 L)</span>
          </div>
          <div class="stack-segment stack-seller" id="segSeller" style="width:20%;" title="Subordinated Seller Note">
            <span>20% SELLER NOTE (₹1.26 Cr)</span>
          </div>
          <div class="stack-segment stack-escrow" id="segEscrow" style="width:20%;" title="Performance Holdback Escrow">
            <span>20% ESCROW (₹1.26 Cr)</span>
          </div>
        </div>

        <div class="capital-stack-legend">
          <div class="legend-item">
            <span class="legend-color" style="background:#138A81;"></span>
            <span>Senior Debt (Tata Capital @ 11.5% · 1st Charge)</span>
          </div>
          <div class="legend-item">
            <span class="legend-color" style="background:#23ACA2;"></span>
            <span>Buyer Liquid Equity (Vikram Mehta)</span>
          </div>
          <div class="legend-item">
            <span class="legend-color" style="background:#C79A45;"></span>
            <span>Seller Promissory Note (8.5% Standstill)</span>
          </div>
          <div class="legend-item">
            <span class="legend-color" style="background:#7A2331;"></span>
            <span>Performance Escrow (4 Quarterly Milestones)</span>
          </div>
        </div>

        <!-- Interactive Structuring Sliders -->
        <div style="background:var(--ink-3); padding:20px; border-radius:6px; margin:20px 0; border:1px solid var(--line-light);">
          <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.84rem; font-weight:600;">
            <span>Customize Acquisition Capital Allocation:</span>
            <span class="mono" style="color:var(--teal-2);">Total: 100% EV</span>
          </div>

          <div class="grid-3" style="gap:20px;">
            <div>
              <label style="font-size:0.76rem; color:var(--text-muted); display:flex; justify-content:space-between;">
                <span>Senior NBFC Debt %</span>
                <b id="debtPctDisplay" class="mono">45%</b>
              </label>
              <input type="range" class="range-slider" id="sliderSeniorDebt" min="30" max="55" value="45" step="5">
            </div>
            <div>
              <label style="font-size:0.76rem; color:var(--text-muted); display:flex; justify-content:space-between;">
                <span>Buyer Equity Cash %</span>
                <b id="equityPctDisplay" class="mono">15%</b>
              </label>
              <input type="range" class="range-slider" id="sliderBuyerEquity" min="10" max="30" value="15" step="5">
            </div>
            <div>
              <label style="font-size:0.76rem; color:var(--text-muted); display:flex; justify-content:space-between;">
                <span>Seller Vendor Note %</span>
                <b id="sellerNotePctDisplay" class="mono">20%</b>
              </label>
              <input type="range" class="range-slider" id="sliderSellerNote" min="10" max="30" value="20" step="5">
            </div>
          </div>
        </div>

        <!-- Escrow Settlement Status Counters -->
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; background:var(--ink-3); padding:16px; border-radius:6px;">
          <div>
            <span style="font-size:0.7rem; color:var(--text-muted); display:block;">ESCROW HOLDBACK POOL</span>
            <b class="mono" style="font-size:1.1rem; color:var(--paper);" id="escrowTotalPoolVal">₹1,26,00,000</b>
          </div>
          <div>
            <span style="font-size:0.7rem; color:var(--text-muted); display:block;">SETTLED TO PROMOTER</span>
            <b class="mono" style="font-size:1.1rem; color:#10B981;" id="escrowDisbursedVal">₹31,50,000 (25%)</b>
          </div>
          <div>
            <span style="font-size:0.7rem; color:var(--text-muted); display:block;">SENIOR DEBT DSCR</span>
            <b class="mono" style="font-size:1.1rem; color:var(--teal-2);" id="liveDscrVal">1.62x (Lender Grade)</b>
          </div>
        </div>
      </div>

      <!-- Tranche Milestone Governance Console -->
      <div class="card card-ink" style="padding:32px; margin-bottom:32px;">
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:20px;">
          <div>
            <h4 style="font-size:1.25rem;">Escrow Milestone Governance Schedule</h4>
            <p style="font-size:0.85rem; color:var(--text-muted);">
              Funds held in platform digital escrow under ICICI Bank custodial rail. Tranches release only upon signed regulatory or operational verification.
            </p>
          </div>
          <span class="badge badge-clean">4 QUARTERLY TRANCHES</span>
        </div>

        <div id="escrowTranchesList">
          <!-- Injected dynamically -->
        </div>
      </div>

      <!-- Closing Certificate Generator -->
      <div class="card card-ink" style="padding:28px; background:linear-gradient(135deg, var(--ink-2), var(--ink-3)); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px;">
        <div>
          <h4 style="font-size:1.15rem; color:var(--paper);">Section 2(42C) Digital Closing Certificate</h4>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-top:4px;">
            Cryptographically sealed closing ledger with SHA-256 verification hash and partner CA digital signatures.
          </p>
        </div>
        <button class="btn btn-brass btn-lg" id="generateCertBtn">
          📜 Inspect & Print Digital Closing Certificate
        </button>
      </div>
    `;

    renderEscrowTranches();
    bindDealRoomEvents();
    bindStackSliders();
  }

  function renderEscrowTranches() {
    const list = document.getElementById('escrowTranchesList');
    if (!list || !window.BRE_STATE) return;

    const tranches = window.BRE_STATE.heroDeal.escrowSchedule;
    let totalDisbursed = 0;

    list.innerHTML = tranches.map(t => {
      let statusClass = 'locked';
      let statusBadge = '<span class="badge badge-warning">LOCKED</span>';
      let actionBtn = '';

      if (t.status === 'DISBURSED') {
        totalDisbursed += t.amount;
        statusClass = 'disbursed';
        statusBadge = `<span class="badge badge-clean">✓ DISBURSED (DAY ${t.disbursedDay || '82'})</span>`;
        actionBtn = `
          <button class="btn btn-sm btn-ghost view-proof-btn" data-tranche="${t.tranche}">
            📄 View Proof
          </button>
        `;
      } else if (t.status === 'AUDIT_IN_REVIEW') {
        statusClass = 'review';
        statusBadge = '<span class="badge badge-brass">● AUDIT IN REVIEW</span>';
        actionBtn = `
          <button class="btn btn-sm btn-brass inspect-timesheet-btn" data-tranche="${t.tranche}">
            📋 Inspect Timesheet (${t.currentProgress || '124.5 hrs'})
          </button>
        `;
      } else {
        actionBtn = `
          <button class="btn btn-sm btn-ghost view-criteria-btn" data-tranche="${t.tranche}">
            🔍 View Criteria
          </button>
        `;
      }

      return `
        <div class="escrow-tranche-card ${statusClass}">
          <div class="tranche-info">
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
              <h5>Tranche ${t.tranche}: ${t.quarter}</h5>
              ${statusBadge}
            </div>
            <p style="margin-bottom:6px;"><b>Milestone Release Trigger:</b> ${t.condition}</p>
            <div style="font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-muted);">
              Verification Authority: <span style="color:var(--teal-2);">${t.authOfficer}</span>
            </div>
          </div>

          <div class="tranche-payout">
            <span class="tranche-amount mono" style="color:var(--paper);">₹${(t.amount / 100000).toFixed(1)} L</span>
            <div style="margin-top:10px;">
              ${actionBtn}
            </div>
          </div>
        </div>
      `;
    }).join('');

    const totalHoldback = window.BRE_STATE.heroDeal.financials.escrowHoldback;
    const pct = Math.round((totalDisbursed / totalHoldback) * 100);
    const disbDisplay = document.getElementById('escrowDisbursedVal');
    if (disbDisplay) {
      disbDisplay.textContent = `₹${(totalDisbursed / 100000).toFixed(1)} L (${pct}%)`;
    }

    // Bind Timesheet Inspection Modal
    document.querySelectorAll('.inspect-timesheet-btn').forEach(btn => {
      btn.addEventListener('click', openTimesheetModal);
    });

    // Bind Proof & Criteria modals
    document.querySelectorAll('.view-proof-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        window.showToast('Tranche 1 proof: SPCB Consent-to-Operate & 5 OEM purchase orders novated on Day 82.');
      });
    });

    document.querySelectorAll('.view-criteria-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        window.showToast('Tranche criteria active under ICICI Bank digital escrow schedule.');
      });
    });
  }

  function openTimesheetModal() {
    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');
    if (!modalBody || !overlay) return;

    const hero = window.BRE_STATE.heroDeal;
    const rows = hero.dataRoom.timesheet.map(s => `
      <tr>
        <td class="mono">#${s.session}</td>
        <td class="mono">${s.date}</td>
        <td class="mono" style="color:var(--teal-2); font-weight:600;">${s.hours} hrs</td>
        <td>${s.topic}</td>
        <td><span class="badge badge-clean">✓ COUNTER-SIGNED</span></td>
      </tr>
    `).join('');

    modalTitle.textContent = `PROMOTER ADVISORY HANDOVER AUDIT LOG · TRANCHE 2 VERIFICATION`;
    modalBody.innerHTML = `
      <div class="formal-doc">
        <div class="doc-stamp stamp-gold">124.5 HRS VERIFIED</div>
        <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:14px;">
          <div>
            <h4 style="color:var(--paper); font-size:1.15rem;">Founder Transition Advisory Timesheet</h4>
            <span style="font-size:0.8rem; color:var(--text-muted);">Promoter: <b>Mr. R. Kulkarni</b> | Buyer Operator: <b>Vikram Mehta</b></span>
          </div>
          <span class="badge badge-clean">TARGET: 120 HRS (MET)</span>
        </div>

        <table class="institutional-table" style="font-size:0.78rem; margin-bottom:16px;">
          <thead>
            <tr>
              <th>Session</th>
              <th>Date</th>
              <th>Hours</th>
              <th>Operational Focus & Handover Deliverable</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>

        <div style="background:var(--ink-3); padding:12px; border-radius:4px; font-size:0.8rem; color:var(--text-muted); line-height:1.6;">
          <b>Legal Certification:</b> Both promoter and operator have executed digital sign-offs confirming the completion of 124.5 advisory hours across customer procurement, CNC calibrations, and supplier trade lines.
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:20px;">
        <button class="btn btn-ghost" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">Cancel</button>
        <button class="btn btn-brass" id="disburseTranche2Btn">
          ✓ Approve Timesheet & Disburse Tranche 2 (₹31,50,000)
        </button>
      </div>
    `;

    overlay.classList.add('active');

    document.getElementById('disburseTranche2Btn')?.addEventListener('click', () => {
      overlay.classList.remove('active');
      if (window.BRE_STATE.releaseTranche(2)) {
        if (window.showToast) {
          window.showToast('Tranche 2 Approved! ₹31,50,000 wired to promoter account. Escrow disbursed updated to 50%.');
        }
        renderEscrowTranches();
      }
    });
  }

  function bindStackSliders() {
    const sDebt = document.getElementById('sliderSeniorDebt');
    const sEquity = document.getElementById('sliderBuyerEquity');
    const sSeller = document.getElementById('sliderSellerNote');

    function updateStack() {
      if (!sDebt || !sEquity || !sSeller) return;

      const debt = parseInt(sDebt.value, 10);
      const equity = parseInt(sEquity.value, 10);
      const seller = parseInt(sSeller.value, 10);
      const escrow = Math.max(5, 100 - (debt + equity + seller));

      document.getElementById('debtPctDisplay').textContent = `${debt}%`;
      document.getElementById('equityPctDisplay').textContent = `${equity}%`;
      document.getElementById('sellerNotePctDisplay').textContent = `${seller}%`;

      const ev = 63000000;
      const debtAmt = (ev * debt) / 100;
      const eqAmt = (ev * equity) / 100;
      const sellerAmt = (ev * seller) / 100;
      const escrowAmt = (ev * escrow) / 100;

      const segSenior = document.getElementById('segSenior');
      const segEquity = document.getElementById('segEquity');
      const segSeller = document.getElementById('segSeller');
      const segEscrow = document.getElementById('segEscrow');

      if (segSenior) {
        segSenior.style.width = `${debt}%`;
        segSenior.innerHTML = `<span>${debt}% SENIOR DEBT (₹${(debtAmt / 10000000).toFixed(2)} Cr)</span>`;
      }
      if (segEquity) {
        segEquity.style.width = `${equity}%`;
        segEquity.innerHTML = `<span>${equity}% EQUITY (₹${(eqAmt / 100000).toFixed(1)} L)</span>`;
      }
      if (segSeller) {
        segSeller.style.width = `${seller}%`;
        segSeller.innerHTML = `<span>${seller}% SELLER NOTE (₹${(sellerAmt / 100000).toFixed(1)} L)</span>`;
      }
      if (segEscrow) {
        segEscrow.style.width = `${escrow}%`;
        segEscrow.innerHTML = `<span>${escrow}% ESCROW (₹${(escrowAmt / 100000).toFixed(1)} L)</span>`;
      }

      // Recompute DSCR
      const annualDebtService = (debtAmt * 0.115) + (debtAmt / 5);
      const ocf = 21000000 - 1500000; // SDE minus capex
      const dscr = annualDebtService > 0 ? (ocf / annualDebtService) : 1.5;

      const dscrEl = document.getElementById('liveDscrVal');
      if (dscrEl) {
        dscrEl.textContent = `${dscr.toFixed(2)}x ${dscr >= 1.25 ? '(Lender Grade)' : '(High Leverage Risk)'}`;
        dscrEl.style.color = dscr >= 1.25 ? '#10B981' : '#EF4444';
      }

      const poolEl = document.getElementById('escrowTotalPoolVal');
      if (poolEl) poolEl.textContent = `₹${(escrowAmt / 100000).toFixed(1)} L`;
    }

    [sDebt, sEquity, sSeller].forEach(s => s && s.addEventListener('input', updateStack));
  }

  function bindDealRoomEvents() {
    const certBtn = document.getElementById('generateCertBtn');
    if (certBtn) {
      certBtn.addEventListener('click', () => {
        openClosingCertModal();
      });
    }

    if (window.BRE_STATE) {
      window.BRE_STATE.on('escrowUpdated', () => {
        renderEscrowTranches();
      });
    }
  }

  function openClosingCertModal() {
    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');
    if (!modalBody || !overlay) return;

    modalTitle.textContent = `STATUTORY CLOSING CERTIFICATE · DEAL #MH-AUTO-1092`;
    modalBody.innerHTML = `
      <div style="border: 2px solid var(--brass); padding: 32px; border-radius: 6px; background: #060D11; font-family:'IBM Plex Sans', sans-serif;">
        <div style="text-align:center; border-bottom:1px solid var(--line-light); padding-bottom:18px; margin-bottom:20px;">
          <span class="mono" style="font-size:0.75rem; color:var(--teal-2); letter-spacing:0.12em; text-transform:uppercase;">
            BUSINESS REVIVAL ECOSYSTEM · CERTIFICATE OF COMPLETION
          </span>
          <h2 style="font-size:1.8rem; margin:6px 0; color:var(--paper);">
            Section 2(42C) Slump Sale Execution
          </h2>
          <span style="font-size:0.85rem; color:var(--text-muted);">
            Statutory Reference: Income Tax Act 1961 Sec 50B | GST Notification No. 12/2017-Central Tax
          </span>
        </div>

        <div style="font-size:0.88rem; line-height:1.7; margin-bottom:24px;">
          This is to certify that the operating undertaking of <b>Alden Precision Engineering Pvt. Ltd.</b> has successfully transferred to <b>Alden Technologies NewCo Pvt. Ltd.</b> for a total enterprise consideration of <b>₹6,30,00,000 (Rupees Six Crores Thirty Lakhs Only)</b>.<br><br>
          • <b>Day-One Wire Disbursed:</b> ₹3,78,00,000 (60% Consideration)<br>
          • <b>Senior Debt Charge Created:</b> 1st Exclusive Lien in favor of Tata Capital Ltd.<br>
          • <b>Subordinated Seller Note:</b> ₹1,26,00,000 (36M @ 8.5% Standstill Terms)<br>
          • <b>ICAI AUP Audit Verification:</b> Bank-to-GST Variance 0.72% [CLEAN]
        </div>

        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:16px; border-top:1px solid var(--line-light); padding-top:16px; font-family:'IBM Plex Mono', monospace; font-size:0.75rem; color:var(--text-muted);">
          <div>
            <b>SHA-256 TRANSACTION HASH:</b><br>
            <span style="color:var(--teal-2); word-break:break-all;">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</span>
          </div>
          <div>
            <b>AUDITING CA REGISTRATION:</b><br>
            <span style="color:var(--brass-light);">Kulkarni & Phadke Associates (FRN 118942W)</span>
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end; margin-top:20px; gap:12px;">
        <button class="btn btn-ghost" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">Close</button>
        <button class="btn btn-teal" onclick="window.print()">Print Official Certificate</button>
      </div>
    `;

    overlay.classList.add('active');
  }

  document.addEventListener('DOMContentLoaded', initDealRoom);
})();
