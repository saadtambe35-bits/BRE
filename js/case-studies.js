/**
 * BUSINESS REVIVAL ECOSYSTEM (BRE)
 * Block 3: Benchmark Case Studies & Interactive 5-Step Hero Scenario Player (Hyper-Interactive Edition)
 * Includes: Interactive XML streams, CA Audit Certificates, Term Sheets, and BTA views
 */

(function () {
  'use strict';

  let currentStep = 1;

  function initCaseStudies() {
    const container = document.getElementById('case-studies-container');
    if (!container) return;

    container.innerHTML = `
      <div class="section-header">
        <div class="eyebrow">Academic & Private Equity Turnaround Validation</div>
        <h2>Proven M&A Turnaround Paradigms</h2>
        <p>
          Why does institutional business revival create 10x more enterprise value than liquidation? 
          We ground our business revival ecosystem architecture in two celebrated turnaround benchmarks, followed by an interactive walkthrough of our pilot deal in Pune.
        </p>
      </div>

      <!-- Part 1: Two High-Impact Real-World Benchmarks -->
      <div class="grid-2" style="margin-bottom: 56px;">
        
        <!-- Case Study 1: Marvel Entertainment -->
        <div class="card card-ink" style="padding: 32px; border-left: 4px solid var(--oxblood);">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px;">
            <span class="mono" style="font-size: 0.74rem; color: var(--oxblood-2); text-transform: uppercase; font-weight: 700;">
              CASE STUDY 01 · CHAPTER 11 DISTRESS PIVOT
            </span>
            <span class="why-tag" onclick="window.openWhyModal('sde_vs_ebitda')">Why study Marvel?</span>
          </div>
          <h3 style="font-size: 1.5rem; margin-bottom: 12px;">
            Marvel Entertainment: Bankruptcy to $4.24B Disney Acquisition
          </h3>
          <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px;">
            In 1996, Marvel filed for Chapter 11 bankruptcy burdened with $600M+ in debt after comic distribution collapsed. 
            Liquidators valued the company at salvage scrap. Turnaround specialists realized that while physical publishing was failing, 
            the <b>8,000+ character IPs were unmonetized gold</b>. By restructuring debt and self-funding the Marvel Cinematic Universe (Iron Man 2008), 
            the company revived and was acquired by Disney in 2009 for $4.24 Billion.
          </p>
          <div style="background: var(--ink-3); padding: 14px 18px; border-radius: 6px; font-size: 0.82rem; border: 1px solid var(--line-light);">
            <b style="color: var(--teal-2); display: block; margin-bottom: 4px;">BRE Platform Parallel:</b>
            Distress does NOT equal dead assets. Small manufacturing units often face working capital crises while holding irreproducible factory licenses, seasoned workforces, and OEM vendor codes. Our AI engine unlocks this hidden equity.
          </div>
        </div>

        <!-- Case Study 2: BigBasket MSME Vendor Network Rescue -->
        <div class="card card-ink" style="padding: 32px; border-left: 4px solid var(--teal);">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 12px;">
            <span class="mono" style="font-size: 0.74rem; color: var(--teal-2); text-transform: uppercase; font-weight: 700;">
              CASE STUDY 02 · SUPPLY CHAIN AGGREGATION
            </span>
            <span class="why-tag" onclick="window.openWhyModal('three_way_variance')">Why aggregation?</span>
          </div>
          <h3 style="font-size: 1.5rem; margin-bottom: 12px;">
            BigBasket & MSME Vendor Grid: $2B+ Tata Group Acquisition
          </h3>
          <p style="font-size: 0.9rem; line-height: 1.6; margin-bottom: 20px;">
            Between 2015 and 2018, hundreds of regional Indian agro-SMEs, processing units, and cold storages were failing on severe cash-flow traps. 
            BigBasket aggregated these fragmented vendors into a standardized compliance infrastructure (FSSAI auditing, GST reconciliation, digital inventory). 
            Vendor survival rates rose above 90%, transforming an unbankable SME base into a defensible national asset acquired by Tata Digital for $2B+.
          </p>
          <div style="background: var(--ink-3); padding: 14px 18px; border-radius: 6px; font-size: 0.82rem; border: 1px solid var(--line-light);">
            <b style="color: var(--teal-2); display: block; margin-bottom: 4px;">BRE Platform Parallel:</b>
            Individual MSMEs struggle to raise acquisition capital. By standardizing due diligence via Chartered Accountants and Account Aggregator data, BRE makes lower-middle-market acquisitions scalable for senior institutional lenders.
          </div>
        </div>
      </div>

      <!-- Part 2: Interactive Hero Scenario Walkthrough -->
      <div class="card card-ink" style="padding: 40px; border-color: var(--line-strong);" id="scenario-player">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; flex-wrap: wrap; gap: 14px;">
          <div>
            <div class="eyebrow">Interactive Live Simulation · Pilot Deal</div>
            <h3 style="font-size: 1.75rem;">
              The 5-Step Business Revival of Alden Precision Engineering
            </h3>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px;">
              Target Asset: <b>#MH-AUTO-1092</b> | Chakan Industrial Cluster, Pune, MH | 24-Year-Old Precision Machining Unit
            </p>
          </div>
          <span class="badge badge-clean">STAGE: STEP <span id="activeStepNum">1</span> OF 5</span>
        </div>

        <!-- Step Navigation Pills -->
        <div style="display: flex; gap: 8px; margin-bottom: 32px; overflow-x: auto; padding-bottom: 4px;">
          <button class="btn btn-sm step-pill active" data-step="1">1. Ingestion & Scan</button>
          <button class="btn btn-sm step-pill" data-step="2">2. AI Root Cause</button>
          <button class="btn btn-sm step-pill" data-step="3">3. CA Audit & Sec 50B</button>
          <button class="btn btn-sm step-pill" data-step="4">4. Stakeholder Match</button>
          <button class="btn btn-sm step-pill" data-step="5">5. Escrow Closing</button>
        </div>

        <!-- Dynamic Scenario Step Content -->
        <div id="stepContentArea" style="min-height: 280px;">
          <!-- Dynamically Injected -->
        </div>

        <!-- Step Action Navigation -->
        <div style="display: flex; justify-content: space-between; margin-top: 32px; border-top: 1px solid var(--line-light); padding-top: 20px;">
          <button class="btn btn-ghost" id="prevStepBtn" disabled>← Previous Step</button>
          <button class="btn btn-teal" id="nextStepBtn">Proceed to Step 2 →</button>
        </div>
      </div>
    `;

    bindScenarioEvents();
    renderStep(1);
  }

  const stepDetails = {
    1: {
      title: "Step 1: Local Ingestion & Initial Distress Intake",
      content: `
        <div class="grid-2" style="align-items: center;">
          <div>
            <h4 style="margin-bottom: 12px; color: var(--paper);">The Retiring Founder's Reality</h4>
            <p style="font-size: 0.92rem; line-height: 1.6; margin-bottom: 16px;">
              Mr. R. Kulkarni (age 62) has operated a CNC machining facility in Bhosari, Pune for 24 years. 
              His 2 sons have settled as software engineers in California with zero intent to take over the factory floor. 
              The business has <b>₹1.8 Cr in active OEM purchase orders</b> from Tata Motors Tier-1 vendors, but Mr. Kulkarni faces high fatigue and a <b>3-month cash runway</b> due to delayed payments.
            </p>
            <div style="background: var(--ink-3); padding: 14px; border-radius: 4px; font-size: 0.84rem; margin-bottom:14px;">
              <b>Edge Ingestion Trigger:</b> The promoter plugs in the Windows Tally sync daemon. In 4 minutes, 2,842 ledger lines are indexed with <b>0.72% Bank-to-GST variance</b>.
            </div>
            <button class="btn btn-sm btn-ghost" onclick="window.viewTallyStreamModal()">
              💻 View Raw Tally XML Payload Stream
            </button>
          </div>
          <div class="terminal-block">
            <div class="terminal-header">
              <span class="terminal-title">VITALS SUMMARY</span>
              <span class="badge badge-warning">AT RISK</span>
            </div>
            <div class="terminal-body" style="font-size: 0.8rem;">
              • Reported Turnover: ₹12,45,00,000<br>
              • Reported Net Profit (PBT): ₹92,00,000 (7.4%)<br>
              • Cash Runway Remaining: 3.2 Months<br>
              • Overdue Supplier Credit: ₹45,00,000<br>
              • Plant Machinery: 14 VMC/CNC Machines (Clear Title)<br>
              • Promoter Intent: 100% willing for clean retirement exit
            </div>
          </div>
        </div>
      `
    },
    2: {
      title: "Step 2: AI Root Cause Diagnostics & SDE Normalization",
      content: `
        <div class="grid-2" style="align-items: center;">
          <div>
            <h4 style="margin-bottom: 12px; color: var(--paper);">The Forensic Algorithm at Work</h4>
            <p style="font-size: 0.92rem; line-height: 1.6; margin-bottom: 16px;">
              Traditional bank evaluators flagged the business for 'declining profit'. 
              Our <b>Deterministic SDE Engine</b> parsed the General Ledger and identified that Mr. Kulkarni was booking <b>₹37.0 Lakhs in promoter discretionary personal add-backs</b> (family travel, personal fuel cards, director salaries far above replacement market rates).
            </p>
            <p style="font-size: 0.92rem; line-height: 1.6; margin-bottom:14px;">
              <b>Core Diagnostic Verdict:</b> The core auto-components operation is highly lucrative with an underwritten <b>16.86% SDE margin</b>. The cash crisis was purely structural working-capital leakage, not a market demand failure.
            </p>
            <button class="btn btn-sm btn-ghost" onclick="window.openWhyModal('sde_vs_ebitda')">
              ❓ Why SDE Instead of EBITDA?
            </button>
          </div>
          <div class="card card-ink" style="background: var(--ink-3); border-color: var(--teal);">
            <span class="mono" style="font-size: 0.72rem; color: var(--teal-2); text-transform: uppercase;">RECONSTRUCTED SDE WATERFALL</span>
            <div style="margin-top: 10px; font-size: 0.85rem; line-height: 1.8;">
              Reported Net Profit (PBT): <b>₹92,00,000</b><br>
              + Interest & Depreciation: <b>₹80,00,000</b><br>
              + Excess Director Salary Add-back: <b>₹14,00,000</b><br>
              + Discretionary Personal Draws: <b>₹18,00,000</b><br>
              + One-time Legal Expense: <b>₹5,00,000</b><br>
              <div style="border-top: 1px solid var(--line-strong); padding-top: 6px; margin-top: 6px; color: var(--teal-2); font-weight: 700; font-size: 1.05rem;">
                = True Operating SDE: ₹2,10,00,000 / year
              </div>
            </div>
          </div>
        </div>
      `
    },
    3: {
      title: "Step 3: ICAI AUP Audit & Section 50B Slump Sale Certification",
      content: `
        <div class="grid-2" style="align-items: center;">
          <div>
            <h4 style="margin-bottom: 12px; color: var(--paper);">Standardized CA Due Diligence Gate</h4>
            <p style="font-size: 0.92rem; line-height: 1.6; margin-bottom: 16px;">
              Partner CA firm <i>Kulkarni & Phadke Associates</i> executes an Agreed-Upon Procedures (AUP) scope under ICAI guidelines. 
              Bank statements pulled via RBI Account Aggregator match GSTR-3B filings within <b>0.72%</b>.
            </p>
            <div style="background: var(--ink-3); padding: 14px; border-radius: 4px; font-size: 0.84rem; margin-bottom:14px;">
              <b>Section 50B Tax Optimization:</b> Instead of an asset-by-asset auction (which attracts up to 30% tax + 18% GST), 
              the sale is structured as a <b>slump sale of a going concern</b> under Notification 12/2017: <b>0% GST and 13.0% LTCG</b>.
            </div>
            <button class="btn btn-sm btn-brass" onclick="window.viewForm3CEAModal()">
              📜 Inspect CA-Signed Form 3CEA Certificate
            </button>
          </div>
          <div class="card card-ink" style="background: var(--ink-3); border-color: var(--brass);">
            <span class="mono" style="font-size: 0.72rem; color: var(--brass-light); text-transform: uppercase;">FORM 3CEA CERTIFICATE ISSUED</span>
            <div style="margin-top: 10px; font-size: 0.85rem; line-height: 1.7;">
              • Agreed Enterprise Value: <b>₹6,30,00,000</b> (3.0x SDE)<br>
              • Sec 50B Slump Sale Net Worth: <b>₹3,12,00,000</b><br>
              • Capital Gain: <b>₹3,18,00,000</b><br>
              • Capital Gains Tax (13.0% with Cess): <b>₹41,34,000</b><br>
              • <b>Promoter Net Take-Home:</b> <span style="color:#10B981; font-weight:700;">₹5,88,66,000</span><br>
              • GST Liability: <b>₹0.00 (Exempt under Notif. 12/2017)</b>
            </div>
          </div>
        </div>
      `
    },
    4: {
      title: "Step 4: AI Stakeholder Matchmaking & Senior Debt Syndication",
      content: `
        <div class="grid-2" style="align-items: center;">
          <div>
            <h4 style="margin-bottom: 12px; color: var(--paper);">Operator-Buyer & Senior Lender Placement</h4>
            <p style="font-size: 0.92rem; line-height: 1.6; margin-bottom: 16px;">
              The anonymized, AUP-certified Confidential Information Memorandum (CIM) is matched with <b>Vikram Mehta</b> (ex-VP Operations, Tata Motors), 
              a liquid Searcher backed by institutional equity sponsors.
            </p>
            <p style="font-size: 0.92rem; line-height: 1.6; margin-bottom:14px;">
              <b>Senior Debt Underwriting:</b> <i>Tata Capital / NBFC Partner</i> approves a <b>₹2.835 Cr Senior Debt facility (45% EV)</b> 
              at 11.5% interest, backed by an underwritten DSCR of <b>1.62x</b> and a 1st ranking exclusive charge on plant CNC machinery.
            </p>
            <button class="btn btn-sm btn-teal" onclick="window.viewSanctionLetterModal()">
              📑 Inspect Tata Capital Senior Debt Term Sheet
            </button>
          </div>
          <div class="card card-ink" style="background: var(--ink-3); border-color: var(--teal);">
            <span class="mono" style="font-size: 0.72rem; color: var(--teal-2); text-transform: uppercase;">STAKEHOLDER SYNDICATE TERMS</span>
            <div style="margin-top: 10px; font-size: 0.85rem; line-height: 1.7;">
              • <b>Operator-Buyer:</b> Vikram Mehta (B.Tech Mechanical + MBA)<br>
              • <b>Buyer Liquid Equity (15%):</b> ₹94,50,000<br>
              • <b>Senior NBFC Debt (45%):</b> ₹2,83,50,000 (1st Charge)<br>
              • <b>Promoter Vendor Note (20%):</b> ₹1,26,00,000 (8.5% Standstill)<br>
              • <b>Holdback Escrow (20%):</b> ₹1,26,00,000 (4 Milestones)
            </div>
          </div>
        </div>
      `
    },
    5: {
      title: "Step 5: Section 2(42C) Closing, Escrow & 100-Day Handover",
      content: `
        <div class="grid-2" style="align-items: center;">
          <div>
            <h4 style="margin-bottom: 12px; color: var(--paper);">Safe Closing & Value Preservation</h4>
            <p style="font-size: 0.92rem; line-height: 1.6; margin-bottom: 16px;">
              The Business Transfer Agreement (BTA) executes into NewCo. 
              <b>₹3.78 Cr (60% Day-One Cash)</b> is wired directly to Mr. Kulkarni. 
              While Factory License and SPCB pollution consents novate over 6 months, NewCo operates the plant under an <b>Interim Sub-contracting SLA</b>.
            </p>
            <div style="background: var(--ink-3); padding: 14px; border-radius: 4px; font-size: 0.84rem; margin-bottom:14px;">
              <b>Outcome:</b> 48 skilled machinist jobs protected, 100% OEM customer retention, and Mr. Kulkarni achieves a dignified retirement with ₹5.89 Cr net cash.
            </div>
            <button class="btn btn-sm btn-brass" onclick="window.viewModelBTAModal()">
              ⚖️ View Section 2(42C) BTA & Job-Work Agreement
            </button>
          </div>
          <div class="card card-ink" style="background: var(--ink-3); border-color: #10B981;">
            <span class="mono" style="font-size: 0.72rem; color: #10B981; text-transform: uppercase;">DEAL COMPLETION METRICS</span>
            <div style="margin-top: 10px; font-size: 0.85rem; line-height: 1.7;">
              • Days from Tally Sync to BTA Closing: <b>68 Days</b><br>
              • Jobs Saved: <b>48 Machinist / Operator Roles</b><br>
              • Escrow Tranche 1 (Month 3): <b>₹31,50,000 Disbursed (Day 82)</b><br>
              • Platform Revenue Captured: <b>₹28,35,000</b><br>
              • <b>Post-Acquisition Year 1 Projected Revenue:</b> <span style="color:#24ABA1; font-weight:700;">₹15.20 Cr (+22%)</span>
            </div>
          </div>
        </div>
      `
    }
  };

  // Global Interactive Modal Helpers
  window.viewTallyStreamModal = function () {
    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');
    if (!modalBody || !overlay) return;

    modalTitle.textContent = `RAW TALLY XML ODBC INGESTION STREAM · PORT 9000`;
    modalBody.innerHTML = `
      <div class="terminal-block">
        <div class="terminal-header">
          <span class="terminal-title">PS-SYNCDAEMON.EXE | AES-256 ENCRYPTED TLS 1.3</span>
          <span class="badge badge-clean">STREAM ACTIVE</span>
        </div>
        <div class="terminal-body" style="font-size:0.75rem; max-height:260px; overflow-y:auto;">
&lt;ENVELOPE&gt;
  &lt;HEADER&gt;
    &lt;TALLYREQUEST&gt;Export Data&lt;/TALLYREQUEST&gt;
    &lt;TYPE&gt;GeneralLedger&lt;/TYPE&gt;
    &lt;ID&gt;MH-AUTO-1092-TALLY&lt;/ID&gt;
  &lt;/HEADER&gt;
  &lt;BODY&gt;
    &lt;VOUCHER DATE="20260318" VCHTYPE="Payment" NUMBER="PV-1892"&gt;
      &lt;LEDGERNAME&gt;BMW Financial Services (Car Lease)&lt;/LEDGERNAME&gt;
      &lt;AMOUNT&gt;-70000.00&lt;/AMOUNT&gt;
      &lt;CLASSIFICATION&gt;PROMOTER_DISCRETIONARY_DISBURSEMENT&lt;/CLASSIFICATION&gt;
      &lt;VOUCHERHASH&gt;7d4a89f...b12e&lt;/VOUCHERHASH&gt;
    &lt;/VOUCHER&gt;
    &lt;VOUCHER DATE="20260320" VCHTYPE="Sales" NUMBER="SI-0442"&gt;
      &lt;PARTYNAME&gt;Tata Motors Tier-1 Component Division&lt;/PARTYNAME&gt;
      &lt;AMOUNT&gt;+1485200.00&lt;/AMOUNT&gt;
      &lt;GSTR1_MATCH&gt;TRUE&lt;/GSTR1_MATCH&gt;
      &lt;INVOICE_IRN&gt;9a2c...881e&lt;/INVOICE_IRN&gt;
    &lt;/VOUCHER&gt;
  &lt;/BODY&gt;
&lt;/ENVELOPE&gt;
        </div>
      </div>
      <p style="font-size:0.82rem; color:var(--text-muted); margin-top:12px;">
        Deterministic regex automatically tagged 2,842 vouchers in 4 minutes with zero manual accounting errors.
      </p>
      <div style="display:flex; justify-content:flex-end; margin-top:16px;">
        <button class="btn btn-teal" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">Close Stream</button>
      </div>
    `;
    overlay.classList.add('active');
  };

  window.viewForm3CEAModal = function () {
    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');
    if (!modalBody || !overlay) return;

    modalTitle.textContent = `FORM 3CEA CERTIFICATE · SECTION 50B SLUMP SALE`;
    modalBody.innerHTML = `
      <div class="formal-doc">
        <div class="doc-stamp stamp-gold">FORM 3CEA CERTIFIED</div>
        <div style="text-align:center; margin-bottom:18px; border-bottom:1px solid var(--line-light); padding-bottom:12px;">
          <h3 style="font-size:1.3rem; color:var(--paper);">Report on Net Worth of Undertaking Sold via Slump Sale</h3>
          <span style="font-size:0.8rem; color:var(--text-muted);">[Pursuant to Rule 11UAE of the Income-tax Rules, 1962]</span>
        </div>
        
        <table class="institutional-table" style="font-size:0.82rem; margin-bottom:16px;">
          <tbody>
            <tr>
              <td>1. Written Down Value (WDV) of Depreciable Assets under Section 43(6):</td>
              <td class="mono" style="text-align:right; color:var(--paper);">₹1,85,00,000</td>
            </tr>
            <tr>
              <td>2. Book Value of Other Assets (Receivables, Stock, Cash):</td>
              <td class="mono" style="text-align:right; color:var(--paper);">₹2,17,00,000</td>
            </tr>
            <tr>
              <td>3. Less: Liabilities of the Undertaking Transferred:</td>
              <td class="mono" style="text-align:right; color:#EF4444;">-₹90,00,000</td>
            </tr>
            <tr style="background:var(--ink-3);">
              <td><b>4. COMPUTED NET WORTH UNDER RULE 11UAE:</b></td>
              <td class="mono" style="text-align:right; color:var(--teal-2); font-weight:700;">₹3,12,00,000</td>
            </tr>
            <tr>
              <td>5. Deemed Full Value of Consideration (Enterprise Value):</td>
              <td class="mono" style="text-align:right; color:var(--paper);">₹6,30,00,000</td>
            </tr>
            <tr>
              <td><b>6. Long-Term Capital Gain (5 minus 4):</b></td>
              <td class="mono" style="text-align:right; color:var(--brass-light); font-weight:700;">₹3,18,00,000</td>
            </tr>
            <tr>
              <td><b>7. Tax Payable @ 13.0% (12.5% LTCG + 4% Cess):</b></td>
              <td class="mono" style="text-align:right; color:#10B981; font-weight:700;">₹41,34,000</td>
            </tr>
          </tbody>
        </table>

        <div style="font-size:0.8rem; color:var(--text-muted); line-height:1.5;">
          Certified by <b>Kulkarni & Phadke Associates (FRN 118942W)</b>. UDIN: 26118942AAAA8812.
        </div>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:16px;">
        <button class="btn btn-ghost" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">Close</button>
        <button class="btn btn-teal" onclick="window.print()">Print Official Certificate</button>
      </div>
    `;
    overlay.classList.add('active');
  };

  window.viewSanctionLetterModal = function () {
    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');
    if (!modalBody || !overlay) return;

    modalTitle.textContent = `TATA CAPITAL SENIOR DEBT FACILITY SANCTION LETTER`;
    modalBody.innerHTML = `
      <div class="formal-doc">
        <div class="doc-stamp">SANCTION APPROVED</div>
        <div style="border-bottom:1px solid var(--line-light); padding-bottom:12px; margin-bottom:16px;">
          <h4 style="color:var(--paper);">Institutional Term Sheet: MSME Acquisition Senior Facility</h4>
          <span style="font-size:0.8rem; color:var(--teal-2);">Facility Code: TC-MSME-M&A-2026-9021</span>
        </div>

        <div style="font-size:0.85rem; line-height:1.7;">
          • <b>Borrower Entity:</b> Alden Technologies NewCo Pvt. Ltd. (Acquisition SPV)<br>
          • <b>Sanctioned Line:</b> ₹2,83,50,000 (Rupees Two Crores Eighty-Three Lakhs Fifty Thousand Only)<br>
          • <b>Interest Rate:</b> 11.50% p.a. floating (Monthly Compounding)<br>
          • <b>Tenure:</b> 60 Months (6 Months Moratorium on Principal)<br>
          • <b>Primary Collateral:</b> 1st Exclusive Registered Charge on 14 CNC/VMC lines valued at ₹3.40 Cr.<br>
          • <b>DSCR Covenant:</b> Minimum 1.25x rolling 3-month DSCR (Underwritten at 1.62x).<br>
          • <b>Subordination Covenant:</b> Promoter's 20% Seller Note strictly subordinated under Intercreditor Deed.
        </div>
      </div>
      <div style="display:flex; justify-content:flex-end; margin-top:16px;">
        <button class="btn btn-teal" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">Close Term Sheet</button>
      </div>
    `;
    overlay.classList.add('active');
  };

  window.viewModelBTAModal = function () {
    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');
    if (!modalBody || !overlay) return;

    modalTitle.textContent = `SECTION 2(42C) BUSINESS TRANSFER AGREEMENT & JOB-WORK SLA`;
    modalBody.innerHTML = `
      <div class="formal-doc">
        <div class="doc-stamp stamp-gold">LEGAL EXECUTED</div>
        <h4 style="color:var(--paper); margin-bottom:8px;">Model Business Transfer Agreement (Slump Sale)</h4>
        <div style="font-size:0.82rem; line-height:1.65; max-height:240px; overflow-y:auto; border:1px solid var(--line-light); padding:14px; background:var(--ink-3); margin-bottom:14px;">
          <b>CLAUSE 2.1 TRANSFERRED OPERATIONAL UNDERTAKING:</b><br>
          OldCo agrees to transfer to NewCo the undertaking comprising 14 CNC/VMC machines, plant electrical installations, active OEM purchase orders, and technical workforce as an uninterrupted going concern.<br><br>
          <b>CLAUSE 3.4 EXCLUDED LIABILITIES:</b><br>
          NewCo shall NOT assume any historical income-tax, GST, labor, civil, or penal liabilities of OldCo arising prior to the Effective Closing Date. All past liabilities remain exclusively with OldCo.<br><br>
          <b>CLAUSE 5.1 INTERIM SUB-CONTRACTING:</b><br>
          During the 6-month statutory novation period for SPCB environmental consent and factory license, OldCo shall operate the manufacturing plant as a job-worker on behalf of NewCo on a zero-margin cost-reimbursement basis.
        </div>
        <div style="font-size:0.78rem; color:var(--text-muted);">
          Statutory Compliance: Section 2(42C) Income Tax Act 1961 & GST Notification 12/2017.
        </div>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:16px;">
        <button class="btn btn-ghost" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">Close</button>
        <button class="btn btn-teal" onclick="window.showToast('Copied full 24-page BTA text to clipboard.'); document.getElementById('globalModalOverlay').classList.remove('active');">
          Copy Executable BTA
        </button>
      </div>
    `;
    overlay.classList.add('active');
  };

  function bindScenarioEvents() {
    document.querySelectorAll('.step-pill').forEach(btn => {
      btn.addEventListener('click', function () {
        const step = parseInt(this.dataset.step, 10);
        renderStep(step);
      });
    });

    const prevBtn = document.getElementById('prevStepBtn');
    const nextBtn = document.getElementById('nextStepBtn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) renderStep(currentStep - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep < 5) {
          renderStep(currentStep + 1);
        } else {
          if (window.showToast) {
            window.showToast('Scenario completed! Redirecting to Virtual Deal Room.');
          }
          window.location.hash = '#deal-room';
        }
      });
    }
  }

  function renderStep(step) {
    currentStep = step;
    const stepNumEl = document.getElementById('activeStepNum');
    if (stepNumEl) stepNumEl.textContent = step;

    document.querySelectorAll('.step-pill').forEach(btn => {
      const s = parseInt(btn.dataset.step, 10);
      btn.classList.toggle('active', s === step);
      if (s === step) {
        btn.classList.remove('btn-ghost');
        btn.classList.add('btn-teal');
      } else {
        btn.classList.add('btn-ghost');
        btn.classList.remove('btn-teal');
      }
    });

    const stepArea = document.getElementById('stepContentArea');
    const details = stepDetails[step];
    if (stepArea && details) {
      stepArea.innerHTML = details.content;
    }

    const prevBtn = document.getElementById('prevStepBtn');
    const nextBtn = document.getElementById('nextStepBtn');

    if (prevBtn) prevBtn.disabled = step === 1;
    if (nextBtn) {
      if (step === 5) {
        nextBtn.textContent = 'Open Live Deal Room →';
        nextBtn.className = 'btn btn-brass';
      } else {
        nextBtn.textContent = `Proceed to Step ${step + 1} →`;
        nextBtn.className = 'btn btn-teal';
      }
    }
  }

  document.addEventListener('DOMContentLoaded', initCaseStudies);
})();
