/**
 * BUSINESS REVIVAL ECOSYSTEM (BRE) v4.0.0-ENTERPRISE
 * Central Institutional State Manager & Reactive Event Bus
 * Includes: Comprehensive Data Room, Statutory Citations, and Faculty Viva Defense Guide
 */

(function () {
  'use strict';

  // Event Listeners Map
  const listeners = {};

  const BRE_STATE = {
    // Current Active Stakeholder View
    currentUserRole: 'promoter', // 'promoter' | 'buyer' | 'lender' | 'diligence'

    // Premium Access Flag (Demo / Paid)
    isPremiumUnlocked: false,

    // Active Scan Result (from Interactive AI Diagnostic Engine)
    activeScanResult: null,

    // Faculty Viva Defense & "Why This Is Here" Knowledge Base
    vivaDefenseGuide: {
      sde_vs_ebitda: {
        title: "Why Seller's Discretionary Earnings (SDE) Instead of EBITDA?",
        statutory: "ICAI Technical Guide on Valuation of Small and Medium Enterprises",
        reason: "In closely held MSMEs, promoters intentionally minimize reported accounting profits (EBITDA) to reduce income-tax liabilities. They disburse profits through personal car leases, family member director salaries above market replacement cost, and personal travel. Standard EBITDA severely undervalues the business. Reconstructed SDE adds back these discretionary owner expenses to reflect the true cash generation available to an incoming operator."
      },
      slump_sale_sec_2_42c: {
        title: "Why Section 2(42C) Slump Sale Instead of Purchasing OldCo Shares?",
        statutory: "Income Tax Act 1961, Section 2(42C) & Section 50B; Companies Act 2013",
        reason: "If a buyer acquires the equity shares of the promoter's existing company (OldCo), the buyer automatically inherits all historical hidden liabilities: past income tax assessments, unrecorded promoter guarantees, pending labor litigations, and old vendor disputes. In a slump sale, NewCo purchases only the operating undertaking (assets, machines, customer contracts, active staff) for a lump sum, leaving all historical liabilities isolated inside OldCo."
      },
      three_way_variance: {
        title: "Why Must 3-Way Variance Be Under 3.0%?",
        statutory: "ICAI Standard on Related Services (SRS 4400) - Agreed-Upon Procedures",
        reason: "MSMEs frequently maintain different numbers for different authorities: high revenue to banks for working capital loans, low revenue to income tax authorities, and different figures on GSTN. The platform algorithmically checks 36 months of Bank statement credits vs. GSTR-3B tax payments vs. Tally general ledgers. If deviation exceeds 3.0%, the onboarding halts immediately to protect buyers and senior lenders from accounting fraud."
      },
      gst_notification_12_2017: {
        title: "Why is the Slump Sale 100% Exempt from GST?",
        statutory: "GST Notification No. 12/2017-Central Tax (Rate), Serial No. 2",
        reason: "Normal sales of individual plant and machinery attract 18% to 28% GST. However, Notification 12/2017 specifically exempts 'Services by way of transfer of a going concern, as a whole or an independent part thereof'. Because our Business Transfer Agreement transfers the entire operational undertaking without assigning itemized values to individual tools, the transaction is legally 100% exempt from GST."
      },
      capital_stack_60_20_20: {
        title: "Why Structure the Capital Stack as 60 / 20 / 20?",
        statutory: "Prudential Guidelines for NBFC Lending & Search Fund Best Practices",
        reason: "1. 60% Day-One Cash (45% NBFC Debt + 15% Buyer Equity) provides the retiring founder with an immediate dignified multi-crore exit while keeping debt service coverage (DSCR) above a safe 1.35x floor.\n2. 20% Subordinated Seller Note ensures the retiring promoter stays skin-in-the-game to assist during the transition.\n3. 20% Performance Holdback Escrow protects the buyer against lost customer accounts, un-novated factory licenses, and undisclosed balance sheet defects."
      },
      interim_subcontracting: {
        title: "Why Deploy an Interim Sub-Contracting Agreement?",
        statutory: "Indian Factories Act 1948 & State Pollution Control Board (Consent-to-Operate)",
        reason: "Government factory licenses, State Pollution Control Board (SPCB) environmental consents, and OEM Tier-1 vendor codes take 6 to 9 months for official statutory transfer to NewCo. Rather than stalling the sale, NewCo operates as principal (purchasing raw material and collecting customer payments), while OldCo manufactures on a cost-plus job-work basis under its existing licenses until government approvals clear."
      },
      senior_lender_standstill: {
        title: "Why is the Seller Note Subordinated with a Standstill Covenant?",
        statutory: "Reserve Bank of India (RBI) Intercreditor Agreement Framework",
        reason: "Institutional lenders (e.g. Tata Capital) require a first ranking exclusive charge on all company assets and operational cash flows. If the company experiences a macro-economic shock and rolling DSCR falls below 1.15x, the standstill covenant automatically freezes monthly payments on the promoter's 20% note without default penalty, ensuring the senior lender is protected and the company does not go bankrupt."
      },
      sec_50b_tax_13_pct: {
        title: "Why is Promoter Capital Gains Tax Only 13.0%?",
        statutory: "Finance Act 2024 Amendments & Section 50B (Rule 11UAE)",
        reason: "In an asset-by-asset liquidation, profits are taxed as short-term business income at peak corporate/individual slabs (up to 30% + surcharge). Under Section 50B, if the industrial undertaking has been owned for over 36 months, the entire gain is classified as Long-Term Capital Gains (LTCG) taxed at a flat concessional rate of 12.5% plus 4% Health & Education cess (13.0% effective), saving the retiring founder crores in tax."
      }
    },

    // Hero Case Study Deal (#MH-AUTO-1092 - Pune Automotive Cluster)
    heroDeal: {
      id: 'MH-AUTO-1092',
      name: 'Alden Precision Engineering Pvt. Ltd.',
      sector: 'CNC Precision Machining & Auto Components',
      cluster: 'Chakan-Bhosari Belt, Pune, MH',
      promoterAge: 62,
      yearsInOperation: 24,
      keyClients: ['Tata Motors Tier-1', 'Bajaj Auto Ancillary', 'Bharat Forge Supply'],
      workforceCount: 48,
      status: 'AUP-PASSED',
      financials: {
        reportedTurnover: 124500000, // ₹12.45 Cr
        reportedNetProfit: 9200000,   // ₹92.0 L
        taxProvision: 2600000,        // ₹26.0 L
        interestExpense: 3800000,     // ₹38.0 L
        depreciation: 4200000,        // ₹42.0 L
        ebitda: 19800000,             // ₹1.98 Cr
        // Forensic Add-backs
        promoterPersonalDraws: 1800000,       // ₹18.0 L
        excessDirectorRemuneration: 1400000,   // ₹14.0 L
        oneTimeLitigationSettlement: 500000,   // ₹5.0 L
        reconstructedSDE: 21000000,           // ₹2.10 Cr (16.86% margin)
        sdeMultiple: 3.0,
        agreedEnterpriseValue: 63000000,      // ₹6.30 Cr
        dayOneCashOut: 37800000,              // 60% = ₹3.78 Cr
        seniorDebtNBFC: 28350000,             // 45% = ₹2.835 Cr (Tata Capital line @ 11.5%)
        buyerEquityCash: 9450000,             // 15% = ₹94.5 L
        sellerVendorNote: 12600000,           // 20% = ₹1.26 Cr (36M @ 8.5% p.a. subordinated)
        escrowHoldback: 12600000,             // 20% = ₹1.26 Cr (4 Quarterly Milestones)
        underwrittenDSCR: 1.62,
        maintenanceCapEx: 1500000,
        wdvDepreciableAssets: 18500000,
        bookValueOtherAssets: 21700000,
        liabilitiesTransferred: 9000000,
        sec50BNetWorth: 31200000,             // ₹3.12 Cr
        capitalGainsTax: 4134000,             // 13.0% LTCG with Cess
        netPromoterTakeHome: 58866000         // ₹5.886 Cr Net in hand
      },
      verification: {
        tallySyncStatus: 'COMPLETED',
        tallyVouchersIndexed: 2842,
        unreconciledSuspenseBalance: 0,
        bankCredits36M: 373500000,
        gstTurnover36M: 370800000,
        threeWayVariancePct: 0.72,
        isVerifiedClean: true,
        caFirm: 'Kulkarni & Phadke Associates, Pune',
        caRegistrationNo: 'FRN 118942W',
        form3CEAGenerated: true
      },
      escrowSchedule: [
        {
          tranche: 1,
          quarter: 'Q1 (Month 3)',
          amount: 3150000,
          condition: 'SPCB Factory Consent & Novation of Top-5 OEM Purchase Orders',
          status: 'DISBURSED',
          disbursedDay: 82,
          authOfficer: 'Adv. S. Deshmukh (Corporate Counsel)'
        },
        {
          tranche: 2,
          quarter: 'Q2 (Month 6)',
          amount: 3150000,
          condition: 'Promoter 20 hrs/mo Advisory Handover Logged (Min. 120 hrs total)',
          status: 'AUDIT_IN_REVIEW',
          currentProgress: '124.5 / 120.0 Hours Verified',
          authOfficer: 'Buyer Operator Counter-Signature'
        },
        {
          tranche: 3,
          quarter: 'Q3 (Month 9)',
          amount: 3150000,
          condition: 'Maintenance of Unbroken 30-Day Vendor Credit Lines across Top-5 Suppliers',
          status: 'LOCKED',
          authOfficer: 'Automated Account Aggregator Audit Rail'
        },
        {
          tranche: 4,
          quarter: 'Q4 (Month 12)',
          amount: 3150000,
          condition: 'Minimum 85% Revenue Retention across Historical Top-10 Customer Accounts',
          status: 'LOCKED',
          authOfficer: 'Partner CA Reconciliation Certificate'
        }
      ],

      // Full Virtual Data Room (Audited Statements, Machine List, Timesheets)
      dataRoom: {
        pnl: [
          { year: 'FY 2023-24', revenue: '₹10.80 Cr', rawMaterial: '₹5.60 Cr', labor: '₹1.45 Cr', opex: '₹1.90 Cr', ebitda: '₹1.85 Cr', pbt: '₹78.0 L', sde: '₹1.80 Cr' },
          { year: 'FY 2024-25', revenue: '₹11.90 Cr', rawMaterial: '₹6.15 Cr', labor: '₹1.60 Cr', opex: '₹2.10 Cr', ebitda: '₹2.05 Cr', pbt: '₹86.0 L', sde: '₹1.95 Cr' },
          { year: 'FY 2025-26 (Audited)', revenue: '₹12.45 Cr', rawMaterial: '₹6.40 Cr', labor: '₹1.72 Cr', opex: '₹2.35 Cr', ebitda: '₹1.98 Cr', pbt: '₹92.0 L', sde: '₹2.10 Cr' }
        ],
        machines: [
          { name: 'Haas VF-2 Vertical Machining Center', year: 2018, wdv: '₹22.5 L', marketValue: '₹34.0 L', status: 'Operational (OEE 84%)' },
          { name: 'DMG Mori NVX 5080 High-Precision VMC', year: 2020, wdv: '₹38.0 L', marketValue: '₹52.0 L', status: 'Operational (OEE 91%)' },
          { name: 'Mazak Quick Turn 250MSY CNC Lathe', year: 2017, wdv: '₹18.0 L', marketValue: '₹28.0 L', status: 'Operational (OEE 79%)' },
          { name: 'BFW Agni 45 XL VMC Line (x2 Units)', year: 2019, wdv: '₹31.0 L', marketValue: '₹46.0 L', status: 'Operational (OEE 86%)' },
          { name: 'Carl Zeiss Coordinate Measuring Machine (CMM)', year: 2021, wdv: '₹26.0 L', marketValue: '₹38.0 L', status: 'Calibrated NABL' }
        ],
        timesheet: [
          { session: 1, date: '14-Apr-2026', hours: 14.5, topic: 'Novation of Tata Motors Tier-1 purchase order specifications & QA protocols', signed: true },
          { session: 2, date: '28-Apr-2026', hours: 12.0, topic: 'Vendor negotiations with alloy steel stockists & 45-day rolling credit terms', signed: true },
          { session: 3, date: '12-May-2026', hours: 15.0, topic: 'Machine tooling calibrations & operator shift allocation with incoming plant head', signed: true },
          { session: 4, date: '26-May-2026', hours: 16.0, topic: 'Bajaj Auto ancillary vendor code transition & SPCB compliance paperwork', signed: true },
          { session: 5, date: '09-Jun-2026', hours: 18.0, topic: 'ERP job-card dispatch protocols & scrap recovery ledger audit', signed: true },
          { session: 6, date: '23-Jun-2026', hours: 14.0, topic: 'Shop-floor key technician retention review & wage contract renewals', signed: true },
          { session: 7, date: '07-Jul-2026', hours: 15.0, topic: 'Customer relationship handover: Bharat Forge procurement meeting', signed: true },
          { session: 8, date: '21-Jul-2026', hours: 20.0, topic: 'Final inventory physical verification with partner CA (100% reconcile)', signed: true }
        ]
      }
    },

    // 6 Curated Lower-Middle-Market MSME Listings
    businesses: [
      {
        id: 'MH-AUTO-1092',
        title: 'Chakan Precision CNC Tooling & Machining',
        sector: 'Manufacturing',
        cluster: 'Pune, Maharashtra',
        turnover: '₹12.45 Cr',
        turnoverNum: 124500000,
        sde: '₹2.10 Cr',
        ev: '₹6.30 Cr',
        healthScore: 78,
        status: 'AUP-PASSED',
        riskCategory: 'STABLE_CASH_COW',
        badges: ['CA Verified', 'Tier-1 Auto Code', 'GST Clean <0.8%'],
        pitch: '24-year-old precision machining workshop with 14 CNC/VMC lines, running at 72% capacity for Tier-1 auto OEMs. Retiring founder offering clean 60% cash-out exit with 12M transition advisory.'
      },
      {
        id: 'GJ-FDRY-3041',
        title: 'Rajkot Ductile Iron & Auto Casting Foundry',
        sector: 'Foundry & Castings',
        cluster: 'Rajkot, Gujarat',
        turnover: '₹18.60 Cr',
        turnoverNum: 186000000,
        sde: '₹2.75 Cr',
        ev: '₹7.80 Cr',
        healthScore: 48,
        status: 'UNDER_FORENSIC_REVIEW',
        riskCategory: 'SUCCESSION_CRUNCH',
        badges: ['Working Capital Trap', 'Export Potential', 'High Asset Backing'],
        pitch: 'Fully equipped green sand foundry with DISA molding line. Healthy 22% gross margin, but starved of working capital due to 90-day delayed OEM receivables. Ideal for turnaround debt restructuring.'
      },
      {
        id: 'KA-AERO-2019',
        title: 'Peenya Aerospace Jig & Fixture Fabricator',
        sector: 'Aerospace & Defense',
        cluster: 'Bengaluru, Karnataka',
        turnover: '₹8.90 Cr',
        turnoverNum: 89000000,
        sde: '₹1.85 Cr',
        ev: '₹5.55 Cr',
        healthScore: 84,
        status: 'AUP-PASSED',
        riskCategory: 'GROWTH_READY',
        badges: ['AS9100D Certified', 'HAL/ISRO Vendor Code', 'Zero Bank Debt'],
        pitch: 'High-precision aerospace component maker with active AS9100D defense certifications and high recurring margins. Single promoter seeking strategic buyer to expand into export aerospace brackets.'
      },
      {
        id: 'TN-ELEC-4402',
        title: 'Coimbatore Motor Stamping & Lamination Works',
        sector: 'Electrical Machinery',
        cluster: 'Coimbatore, Tamil Nadu',
        turnover: '₹14.20 Cr',
        turnoverNum: 142000000,
        sde: '₹1.40 Cr',
        ev: '₹4.20 Cr',
        healthScore: 32,
        status: 'CRITICAL_INTERVENTION',
        riskCategory: 'DISTRESS_OPPORTUNITY',
        badges: ['High Machinery Value', 'Raw Material Squeeze', 'Quick Deal'],
        pitch: 'Supplying EV motor stators and industrial pump laminations. High-speed progressive presses valued at ₹3.8 Cr. High leverage due to commodity raw material spike. Prime candidate for Sec 2(42C) slump sale.'
      },
      {
        id: 'HR-PACK-1184',
        title: 'Manesar Industrial Corrugated Packaging',
        sector: 'Packaging & Logistics',
        cluster: 'Manesar, Haryana',
        turnover: '₹11.10 Cr',
        turnoverNum: 111000000,
        sde: '₹1.65 Cr',
        ev: '₹4.95 Cr',
        healthScore: 56,
        status: 'AUP-PASSED',
        riskCategory: 'AT_RISK_RECOVERABLE',
        badges: ['FMCG Clients', '5-Ply Auto Line', 'Stable Book'],
        pitch: 'Automated 5-ply corrugated board plant supplying FMCG and white-goods brands in NCR. 18 years in operation. 2nd generation children moved to software; founder seeks clean handover.'
      },
      {
        id: 'MH-CHEM-5021',
        title: 'Tarapur Specialty Surfactants & Industrial Solvents',
        sector: 'Chemicals & Solvents',
        cluster: 'Tarapur, Maharashtra',
        turnover: '₹22.40 Cr',
        turnoverNum: 224000000,
        sde: '₹3.90 Cr',
        ev: '₹11.70 Cr',
        healthScore: 88,
        status: 'AUP-PASSED',
        riskCategory: 'PREMIUM_ASSET',
        badges: ['Consent-to-Operate Valid 2029', 'Zero Liquid Discharge', '18% EBITDA'],
        pitch: 'Specialty formulation plant with rare environmental SPCB Consent-to-Operate through 2029. Fully zero-liquid-discharge compliant with long-term pharma chemical customer supply contracts.'
      }
    ],

    // State Mutation Methods
    setRole: function (newRole) {
      if (['promoter', 'buyer', 'lender', 'diligence'].includes(newRole)) {
        this.currentUserRole = newRole;
        this.emit('roleChanged', newRole);
      }
    },

    unlockPremium: function () {
      this.isPremiumUnlocked = true;
      this.emit('premiumUnlocked', true);
    },

    updateScanResult: function (data) {
      this.activeScanResult = data;
      this.emit('scanCompleted', data);
    },

    releaseTranche: function (trancheIndex) {
      const tranche = this.heroDeal.escrowSchedule.find(t => t.tranche === trancheIndex);
      if (tranche && tranche.status !== 'DISBURSED') {
        tranche.status = 'DISBURSED';
        tranche.disbursedDay = 120;
        this.emit('escrowUpdated', this.heroDeal.escrowSchedule);
        return true;
      }
      return false;
    },

    // Simple Pub/Sub Event System
    on: function (event, callback) {
      if (!listeners[event]) listeners[event] = [];
      listeners[event].push(callback);
    },

    emit: function (event, payload) {
      if (listeners[event]) {
        listeners[event].forEach(cb => {
          try {
            cb(payload);
          } catch (err) {
            console.error('State event error:', err);
          }
        });
      }
    }
  };

  // Global Helper: Open "Why This Is Here" Explainer Modal
  window.openWhyModal = function (topicKey) {
    const guide = BRE_STATE.vivaDefenseGuide[topicKey];
    if (!guide) return;

    const modalBody = document.getElementById('globalModalBody');
    const modalTitle = document.getElementById('globalModalTitle');
    const overlay = document.getElementById('globalModalOverlay');

    if (!modalBody || !overlay) return;

    modalTitle.textContent = `VIVA DEFENSE: ${guide.title.toUpperCase()}`;
    modalBody.innerHTML = `
      <div class="formal-doc" style="background:#081014; border-color:var(--brass);">
        <div class="doc-stamp stamp-gold">ACADEMIC & LEGAL DEFENSE</div>
        
        <div style="margin-bottom:14px;">
          <span class="mono" style="font-size:0.75rem; color:var(--brass-light); text-transform:uppercase; letter-spacing:0.08em;">
            STATUTORY CITATION:
          </span>
          <div style="font-family:'IBM Plex Mono', monospace; font-size:0.85rem; color:var(--teal-2); font-weight:600; margin-top:2px;">
            ${guide.statutory}
          </div>
        </div>

        <div style="border-top:1px solid var(--line-light); padding-top:14px; margin-top:14px;">
          <h4 style="font-size:1.15rem; color:var(--paper); margin-bottom:8px;">Pedagogical & Institutional Rationale:</h4>
          <p style="font-size:0.92rem; line-height:1.7; color:var(--paper); white-space:pre-line;">
            ${guide.reason}
          </p>
        </div>

        <div style="margin-top:20px; background:var(--ink-3); padding:12px; border-radius:4px; font-size:0.8rem; color:var(--text-muted);">
          <b>Tip for Faculty Viva:</b> Cite the specific section and explain the risk transfer asymmetry (how NewCo is insulated from historical tax liabilities).
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end; margin-top:18px;">
        <button class="btn btn-teal" onclick="document.getElementById('globalModalOverlay').classList.remove('active')">
          Understood, Close Defense
        </button>
      </div>
    `;

    overlay.classList.add('active');
  };

  // Expose Globally
  window.BRE_STATE = BRE_STATE;
})();
