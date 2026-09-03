/* DARK MODE */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
  });
}

/* CLOCK */

function updateClock(){

  const clock = document.getElementById("clock");

  if (!clock) return;

  const now = new Date();

  const hours = String(now.getHours()).padStart(2,"0");

  const minutes = String(now.getMinutes()).padStart(2,"0");

  clock.innerHTML = `${hours}:${minutes}`;
}

setInterval(updateClock,1000);

updateClock();

/* MENU MOBILE */

const menuToggle = document.getElementById("menuToggle");

const sidebar = document.getElementById("sidebar");

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

/* ACTIVE NAV LINK (highlights the current page automatically) */

(function highlightActiveNav(){

  const links = document.querySelectorAll(".sidebar nav a");

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }

  });

})();

/* LINE CHART (only runs on pages that have this canvas) */

const lineCtx = document.getElementById("lineChart");

if (lineCtx) {

  new Chart(lineCtx, {

    type:"line",

    data:{

      labels:[
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun"
      ],

      datasets:[{

        label:"Produção",

        data:[12,19,15,28,35,48],

        borderColor:"#0ea5a4",

        backgroundColor:"rgba(14,165,164,0.2)",

        fill:true,

        tension:0.4
      }]
    },

    options:{

      responsive:true,

      maintainAspectRatio:false
    }

  });

}

/* PIE CHART (only runs on pages that have this canvas) */

const pieCtx = document.getElementById("pieChart");

if (pieCtx) {

  new Chart(pieCtx, {

    type:"doughnut",

    data:{

      labels:[
        "Pesquisa",
        "Produção",
        "Vendas"
      ],

      datasets:[{

        data:[35,45,20],

        backgroundColor:[
          "#0ea5a4",
          "#0f3b8c",
          "#22c55e"
        ],

        borderWidth:0
      }]
    },

    options:{

      responsive:true,

      maintainAspectRatio:false
    }

  });

}

/* SETTINGS TABS (only runs on configuracoes.html) */

const settingsTabs = document.querySelectorAll(".settings-tab");

if (settingsTabs.length) {

  settingsTabs.forEach(tab => {

    tab.addEventListener("click", () => {

      settingsTabs.forEach(t => t.classList.remove("active"));

      tab.classList.add("active");

      document.querySelectorAll(".settings-panel").forEach(panel => {
        panel.hidden = true;
      });

      const target = document.getElementById(`panel-${tab.dataset.tab}`);

      if (target) target.hidden = false;

    });

  });

}

/* TABLE SEARCH FILTER (reusable on any page with .filter-bar input + table) */

const tableSearch = document.getElementById("tableSearch");

if (tableSearch) {

  tableSearch.addEventListener("input", (e) => {

    const term = e.target.value.trim().toLowerCase();

    const rows = document.querySelectorAll("table tbody tr");

    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(term) ? "" : "none";
    });

  });

}

/* STATUS FILTER (dropdown that filters rows by data-status attribute) */

const statusFilter = document.getElementById("statusFilter");

if (statusFilter) {

  statusFilter.addEventListener("change", (e) => {

    const value = e.target.value;

    const rows = document.querySelectorAll("table tbody tr");

    rows.forEach(row => {
      const status = row.getAttribute("data-status");
      row.style.display = (value === "all" || status === value) ? "" : "none";
    });

  });

} 