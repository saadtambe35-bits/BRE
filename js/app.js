/**
 * BUSINESS REVIVAL ECOSYSTEM (BRE)
 * Master Application Orchestrator, UI Event Dispatcher & Faculty Tour Engine
 */

(function () {
  'use strict';

  // Global Toast Notification Helper
  window.showToast = function (message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon">✓</div>
      <div class="toast-body">
        <b>Protocol Notification</b>
        <span>${message}</span>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('leaving');
      setTimeout(() => toast.remove(), 350);
    }, 4200);
  };

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Progress Rail
    const rail = document.getElementById('progressRail');
    const navLinks = document.querySelectorAll('[data-nav]');
    const navSections = Array.from(navLinks).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      if (rail) rail.style.width = pct + '%';

      let current = null;
      navSections.forEach(sec => {
        const r = sec.getBoundingClientRect();
        if (r.top <= 120 && r.bottom > 120) current = sec.id;
      });

      navLinks.forEach(a => {
        a.classList.toggle('active', current && a.getAttribute('href') === '#' + current);
      });
    }, { passive: true });

    // 2. Global Modal Close Listeners
    const modalCloseBtn = document.getElementById('globalModalCloseBtn');
    const modalOverlay = document.getElementById('globalModalOverlay');

    if (modalCloseBtn && modalOverlay) {
      modalCloseBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
      });

      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
          modalOverlay.classList.remove('active');
        }
      });
    }

    // 3. Navigation Bar Demo Bypass Button
    const demoBypassBtn = document.getElementById('demoBypassNavBtn');
    if (demoBypassBtn) {
      demoBypassBtn.addEventListener('click', () => {
        if (window.BRE_STATE) window.BRE_STATE.unlockPremium();
        const licenseBadge = document.getElementById('licenseStatusBadge');
        if (licenseBadge) {
          licenseBadge.className = 'badge badge-clean';
          licenseBadge.textContent = 'ENTERPRISE UNLOCKED (FACULTY DEMO)';
        }
        window.showToast('Faculty Presentation Mode: Enterprise AI Tools & Gated Data Rooms Unlocked.');
        window.location.hash = '#premium-tools';
      });
    }

    // 4. Faculty Audit Tour Drawer Initialization
    initFacultyTour();

    console.log('Business Revival Ecosystem (BRE) v4.0.0-ENTERPRISE initialized.');
  });

  function initFacultyTour() {
    const tourBtn = document.getElementById('facultyTourNavBtn');
    const drawerOverlay = document.getElementById('facultyDrawerOverlay');
    const closeBtn = document.getElementById('closeFacultyDrawerBtn');
    const qList = document.getElementById('facultyQuestionsList');

    if (!tourBtn || !drawerOverlay) return;

    const questions = [
      {
        q: "1. Why use Reconstructed SDE instead of pure EBITDA?",
        target: "scanner",
        whyKey: "sde_vs_ebitda",
        snippet: "In MSMEs, owners run personal expenses through company books to depress income tax. Standard EBITDA understates real cash generation."
      },
      {
        q: "2. Why execute via Section 2(42C) Slump Sale instead of share acquisition?",
        target: "dashboards",
        whyKey: "slump_sale_sec_2_42c",
        snippet: "Buying shares inherits historical tax notices and unrecorded promoter debt. Slump sale transfers only clean assets into NewCo."
      },
      {
        q: "3. Why must 3-Way Variance (Bank vs GST vs Tally) remain under 3.0%?",
        target: "scanner",
        whyKey: "three_way_variance",
        snippet: "MSMEs frequently submit mismatched numbers across banks, GST, and ITR. Algorithmic reconciliation eliminates circular billing fraud."
      },
      {
        q: "4. Why is the slump sale 100% exempt from GST?",
        target: "faq",
        whyKey: "gst_notification_12_2017",
        snippet: "Notification 12/2017 Central Tax exempts 'transfer of a going concern'. No individual machinery invoices are issued."
      },
      {
        q: "5. Why structure the capital stack as 60% Cash / 20% Seller Note / 20% Escrow?",
        target: "deal-room",
        whyKey: "capital_stack_60_20_20",
        snippet: "Balances immediate promoter liquidity (60%) with risk holdbacks (20%) and founder transition commitment (20%)."
      },
      {
        q: "6. How does the plant legally operate during the 6-month factory license transfer?",
        target: "case-studies",
        whyKey: "interim_subcontracting",
        snippet: "Dual-stage model: NewCo is principal owning client orders, while OldCo manufactures as job-worker under active licenses."
      },
      {
        q: "7. What protects Senior NBFC Lenders from default on the Seller Note?",
        target: "dashboards",
        whyKey: "senior_lender_standstill",
        snippet: "The Intercreditor Subordination Deed gives the bank 1st exclusive charge and freezes seller note payments if DSCR < 1.15x."
      },
      {
        q: "8. Why is promoter capital gains tax only 13.0% under Section 50B?",
        target: "scanner",
        whyKey: "sec_50b_tax_13_pct",
        snippet: "Under Section 50B Rule 11UAE, undertakings held > 36 months qualify for concessional Long-Term Capital Gains tax."
      }
    ];

    if (qList) {
      qList.innerHTML = questions.map(item => `
        <div class="faculty-question-card">
          <h5>
            <span>${item.q}</span>
            <span class="why-tag" data-why="${item.whyKey}">Inspect Defense</span>
          </h5>
          <p>${item.snippet}</p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <a href="#${item.target}" class="btn btn-sm btn-ghost jump-link" style="font-size:0.75rem;">
              Jump to Live Section (→ #${item.target})
            </a>
          </div>
        </div>
      `).join('');

      // Bind question clicks
      qList.querySelectorAll('.why-tag').forEach(tag => {
        tag.addEventListener('click', function () {
          const key = this.dataset.why;
          drawerOverlay.classList.remove('active');
          if (window.openWhyModal) window.openWhyModal(key);
        });
      });

      qList.querySelectorAll('.jump-link').forEach(link => {
        link.addEventListener('click', () => {
          drawerOverlay.classList.remove('active');
        });
      });
    }

    tourBtn.addEventListener('click', () => {
      drawerOverlay.classList.add('active');
    });

    closeBtn?.addEventListener('click', () => {
      drawerOverlay.classList.remove('active');
    });

    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) {
        drawerOverlay.classList.remove('active');
      }
    });
  }
})();
