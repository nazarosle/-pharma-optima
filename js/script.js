/* =========================================================
   PHARMA OPTIMA — SCRIPT PRINCIPAL
   Requer que data.js seja carregado ANTES deste arquivo.
   ========================================================= */

/* ---------------------------------------------------------
   1. TRADUÇÕES (i18n)
   Cobre a estrutura fixa da interface (menu, títulos,
   botões, cabeçalhos de tabela, configurações). Os dados
   cadastrados pelo usuário (nomes de produtos, funcionários,
   metas) continuam no idioma em que foram digitados.
--------------------------------------------------------- */

const I18N = {

  pt: {
    "nav.dashboard": "Dashboard",
    "nav.estoque": "Estoque",
    "nav.relatorios": "Relatórios",
    "nav.metas": "Metas",
    "nav.funcionarios": "Funcionários",
    "nav.configuracoes": "Configurações",

    "search.placeholder": "Pesquisar medicamentos, relatórios...",

    "page.dashboard.title": "Dashboard",
    "page.estoque.title": "Estoque",
    "page.estoque.subtitle": "Controle de medicamentos, lotes e validade",
    "page.relatorios.title": "Relatórios",
    "page.relatorios.subtitle": "Análises de produção, vendas e conformidade",
    "page.metas.title": "Metas",
    "page.metas.subtitle": "Objetivos de produção, vendas e qualidade",
    "page.funcionarios.title": "Funcionários",
    "page.funcionarios.subtitle": "Equipe, departamentos e turnos",
    "page.configuracoes.title": "Configurações",
    "page.configuracoes.subtitle": "Conta, notificações e preferências do sistema",

    "common.verTudo": "Ver tudo",
    "common.novoProduto": "Novo produto",
    "common.novaMeta": "Nova meta",
    "common.novoFuncionario": "Novo funcionário",
    "common.salvar": "Salvar",
    "common.salvarAlteracoes": "Salvar alterações",
    "common.cancelar": "Cancelar",
    "common.editar": "Editar",
    "common.excluir": "Excluir",
    "common.buscar": "Buscar...",
    "common.todos": "Todos",

    "table.produto": "Produto",
    "table.categoria": "Categoria",
    "table.lote": "Lote",
    "table.validade": "Validade",
    "table.quantidade": "Quantidade",
    "table.status": "Status",
    "table.acoes": "Ações",
    "table.registro": "Registro Anvisa",
    "table.meta": "Meta",
    "table.responsavel": "Responsável",
    "table.prazo": "Prazo",
    "table.progresso": "Progresso",
    "table.nome": "Nome",
    "table.cargo": "Cargo",
    "table.departamento": "Departamento",
    "table.turno": "Turno",

    "settings.tab.perfil": "Perfil",
    "settings.tab.notificacoes": "Notificações",
    "settings.tab.seguranca": "Segurança",
    "settings.tab.sistema": "Sistema",
    "settings.alterarFoto": "Alterar foto",
    "settings.tema": "Tema padrão",
    "settings.fuso": "Fuso horário",
    "settings.idioma": "Idioma"
  },

  en: {
    "nav.dashboard": "Dashboard",
    "nav.estoque": "Inventory",
    "nav.relatorios": "Reports",
    "nav.metas": "Goals",
    "nav.funcionarios": "Employees",
    "nav.configuracoes": "Settings",

    "search.placeholder": "Search medicines, reports...",

    "page.dashboard.title": "Dashboard",
    "page.estoque.title": "Inventory",
    "page.estoque.subtitle": "Manage medicines, batches and expiry dates",
    "page.relatorios.title": "Reports",
    "page.relatorios.subtitle": "Production, sales and compliance analytics",
    "page.metas.title": "Goals",
    "page.metas.subtitle": "Production, sales and quality objectives",
    "page.funcionarios.title": "Employees",
    "page.funcionarios.subtitle": "Team, departments and shifts",
    "page.configuracoes.title": "Settings",
    "page.configuracoes.subtitle": "Account, notifications and system preferences",

    "common.verTudo": "View all",
    "common.novoProduto": "New product",
    "common.novaMeta": "New goal",
    "common.novoFuncionario": "New employee",
    "common.salvar": "Save",
    "common.salvarAlteracoes": "Save changes",
    "common.cancelar": "Cancel",
    "common.editar": "Edit",
    "common.excluir": "Delete",
    "common.buscar": "Search...",
    "common.todos": "All",

    "table.produto": "Product",
    "table.categoria": "Category",
    "table.lote": "Batch",
    "table.validade": "Expiry",
    "table.quantidade": "Quantity",
    "table.status": "Status",
    "table.acoes": "Actions",
    "table.registro": "Registration No.",
    "table.meta": "Goal",
    "table.responsavel": "Owner",
    "table.prazo": "Deadline",
    "table.progresso": "Progress",
    "table.nome": "Name",
    "table.cargo": "Role",
    "table.departamento": "Department",
    "table.turno": "Shift",

    "settings.tab.perfil": "Profile",
    "settings.tab.notificacoes": "Notifications",
    "settings.tab.seguranca": "Security",
    "settings.tab.sistema": "System",
    "settings.alterarFoto": "Change photo",
    "settings.tema": "Default theme",
    "settings.fuso": "Time zone",
    "settings.idioma": "Language"
  },

  es: {
    "nav.dashboard": "Panel",
    "nav.estoque": "Inventario",
    "nav.relatorios": "Informes",
    "nav.metas": "Metas",
    "nav.funcionarios": "Empleados",
    "nav.configuracoes": "Configuración",

    "search.placeholder": "Buscar medicamentos, informes...",

    "page.dashboard.title": "Panel",
    "page.estoque.title": "Inventario",
    "page.estoque.subtitle": "Gestión de medicamentos, lotes y vencimientos",
    "page.relatorios.title": "Informes",
    "page.relatorios.subtitle": "Análisis de producción, ventas y cumplimiento",
    "page.metas.title": "Metas",
    "page.metas.subtitle": "Objetivos de producción, ventas y calidad",
    "page.funcionarios.title": "Empleados",
    "page.funcionarios.subtitle": "Equipo, departamentos y turnos",
    "page.configuracoes.title": "Configuración",
    "page.configuracoes.subtitle": "Cuenta, notificaciones y preferencias del sistema",

    "common.verTudo": "Ver todo",
    "common.novoProduto": "Nuevo producto",
    "common.novaMeta": "Nueva meta",
    "common.novoFuncionario": "Nuevo empleado",
    "common.salvar": "Guardar",
    "common.salvarAlteracoes": "Guardar cambios",
    "common.cancelar": "Cancelar",
    "common.editar": "Editar",
    "common.excluir": "Eliminar",
    "common.buscar": "Buscar...",
    "common.todos": "Todos",

    "table.produto": "Producto",
    "table.categoria": "Categoría",
    "table.lote": "Lote",
    "table.validade": "Vencimiento",
    "table.quantidade": "Cantidad",
    "table.status": "Estado",
    "table.acoes": "Acciones",
    "table.registro": "N.º de registro",
    "table.meta": "Meta",
    "table.responsavel": "Responsable",
    "table.prazo": "Plazo",
    "table.progresso": "Progreso",
    "table.nome": "Nombre",
    "table.cargo": "Cargo",
    "table.departamento": "Departamento",
    "table.turno": "Turno",

    "settings.tab.perfil": "Perfil",
    "settings.tab.notificacoes": "Notificaciones",
    "settings.tab.seguranca": "Seguridad",
    "settings.tab.sistema": "Sistema",
    "settings.alterarFoto": "Cambiar foto",
    "settings.tema": "Tema predeterminado",
    "settings.fuso": "Zona horaria",
    "settings.idioma": "Idioma"
  }

};

function t(key){
  const lang = Store.getSettings().language || "pt";
  return (I18N[lang] && I18N[lang][key]) || I18N.pt[key] || key;
}

function applyTranslations(){

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });

}

/* ---------------------------------------------------------
   2. CONFIGURAÇÕES (tema, fuso horário, foto)
--------------------------------------------------------- */

function applyTheme(theme){
  document.body.classList.toggle("light", theme === "light");
  const themeBtn = document.getElementById("themeBtn");
  if (themeBtn) themeBtn.textContent = theme === "light" ? "☀️" : "🌙";
}

function applyPhoto(photoDataUrl){
  if (!photoDataUrl) return;
  document.querySelectorAll(".profile img, .settings-avatar").forEach(img => {
    img.src = photoDataUrl;
  });
}

function applySettingsToPage(){

  const settings = Store.getSettings();

  applyTheme(settings.theme);
  applyPhoto(settings.photo);
  applyTranslations();

  const themeSelect = document.getElementById("settingTheme");
  if (themeSelect) themeSelect.value = settings.theme;

  const tzSelect = document.getElementById("settingTimezone");
  if (tzSelect) tzSelect.value = settings.timezone;

  const langSelect = document.getElementById("settingLanguage");
  if (langSelect) langSelect.value = settings.language;

}

/* ---------------------------------------------------------
   3. RELÓGIO (respeita o fuso horário salvo)
--------------------------------------------------------- */

function updateClock(){

  const clock = document.getElementById("clock");

  if (!clock) return;

  const settings = Store.getSettings();

  try {

    const formatter = new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: settings.timezone || "America/Sao_Paulo"
    });

    clock.innerHTML = formatter.format(new Date());

  } catch (e) {

    const now = new Date();
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    clock.innerHTML = `${hours}:${minutes}`;

  }

}

/* ---------------------------------------------------------
   4. TEMA (botão da navbar)
--------------------------------------------------------- */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const current = Store.getSettings().theme;
    const next = current === "light" ? "dark" : "light";
    Store.updateSettings({ theme: next });
    applyTheme(next);
    const themeSelect = document.getElementById("settingTheme");
    if (themeSelect) themeSelect.value = next;
  });
}

/* ---------------------------------------------------------
   5. MENU MOBILE
--------------------------------------------------------- */

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

/* ---------------------------------------------------------
   6. LINK ATIVO NO MENU
--------------------------------------------------------- */

(function highlightActiveNav(){

  const links = document.querySelectorAll(".sidebar nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

})();

/* ---------------------------------------------------------
   7. MODAL (genérico, reutilizado pelos 3 formulários)
--------------------------------------------------------- */

function openModal(id){
  const modal = document.getElementById(id);
  if (modal) modal.classList.add("open");
}

function closeModal(id){
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove("open");
}

document.querySelectorAll("[data-close-modal]").forEach(el => {
  el.addEventListener("click", () => closeModal(el.getAttribute("data-close-modal")));
});

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("open");
  });
});

/* ---------------------------------------------------------
   8. HELPERS DE FORMATAÇÃO
--------------------------------------------------------- */

function formatDateBR(isoDate){
  if (!isoDate) return "-";
  const [y,m,d] = isoDate.split("-");
  return `${d}/${m}/${y}`;
}

function pillForProductStatus(status){
  const map = {
    alto:   { cls:"blue",   label:"Alto" },
    medio:  { cls:"orange", label:"Médio" },
    baixo:  { cls:"red",    label:"Baixo" },
    esgotado:{ cls:"red",   label:"Esgotado" }
  };
  return map[status] || map.medio;
}

function pillForGoalStatus(status){
  const map = {
    andamento:{ cls:"blue",  label:"Em andamento" },
    atrasado: { cls:"red",   label:"Atrasada" },
    concluido:{ cls:"green", label:"Concluída" }
  };
  return map[status] || map.andamento;
}

/* ---------------------------------------------------------
   9. PÁGINA: ESTOQUE (produtos)
--------------------------------------------------------- */

function renderProducts(){

  const tbody = document.getElementById("productsTableBody");
  if (!tbody) return;

  const products = Store.getProducts();

  const totalItems = products.reduce((sum,p) => sum + Number(p.quantidade), 0);
  const lowStock = products.filter(p => Store.productStatus(p) === "baixo").length;
  const expiring = products.filter(p => Store.isExpiringSoon(p, 30)).length;
  const outOfStock = products.filter(p => Store.productStatus(p) === "esgotado").length;

  const elTotal = document.getElementById("statTotalItems");
  const elLow = document.getElementById("statLowStock");
  const elExpiring = document.getElementById("statExpiringSoon");
  const elOut = document.getElementById("statOutOfStock");

  if (elTotal) elTotal.textContent = totalItems.toLocaleString("pt-BR");
  if (elLow) elLow.textContent = lowStock;
  if (elExpiring) elExpiring.textContent = expiring;
  if (elOut) elOut.textContent = outOfStock;

  tbody.innerHTML = products.map(p => {

    const status = Store.productStatus(p);
    const pill = pillForProductStatus(status);

    return `
      <tr data-status="${status}" data-id="${p.id}">
        <td>${p.nome}</td>
        <td>${p.categoria}</td>
        <td>${p.lote}</td>
        <td>${formatDateBR(p.validade)}</td>
        <td>${Number(p.quantidade).toLocaleString("pt-BR")} un</td>
        <td><span class="pill ${pill.cls}">${pill.label}</span></td>
        <td>
          <div class="row-actions">
            <button aria-label="Editar" data-action="edit-product" data-id="${p.id}"><i class="fa-solid fa-pen"></i></button>
            <button aria-label="Excluir" data-action="delete-product" data-id="${p.id}"><i class="fa-solid fa-trash"></i></button>
          </div>
        </td>
      </tr>
    `;

  }).join("");

}

function setupProductsPage(){

  const form = document.getElementById("productForm");
  if (!form) return;

  const addBtn = document.getElementById("btnAddProduct");

  addBtn.addEventListener("click", () => {
    form.reset();
    document.getElementById("productId").value = "";
    document.getElementById("productModalTitle").textContent = "Novo produto";
    openModal("productModal");
  });

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const id = document.getElementById("productId").value;

    const productData = {
      nome: document.getElementById("productName").value.trim(),
      principioAtivo: document.getElementById("productActive").value.trim(),
      categoria: document.getElementById("productCategory").value,
      lote: document.getElementById("productBatch").value.trim(),
      validade: document.getElementById("productExpiry").value,
      quantidade: Number(document.getElementById("productQty").value),
      registroAnvisa: document.getElementById("productRegistry").value.trim()
    };

    if (id) {
      Store.updateProduct(id, productData);
    } else {
      Store.addProduct(productData);
    }

    closeModal("productModal");
    renderProducts();

  });

  document.getElementById("productsTableBody").addEventListener("click", (e) => {

    const btn = e.target.closest("button[data-action]");
    if (!btn) return;

    const id = btn.getAttribute("data-id");

    if (btn.dataset.action === "delete-product") {
      if (confirm("Remover este produto do estoque?")) {
        Store.deleteProduct(id);
        renderProducts();
      }
    }

    if (btn.dataset.action === "edit-product") {
      const p = Store.getProducts().find(p => p.id === id);
      if (!p) return;
      document.getElementById("productId").value = p.id;
      document.getElementById("productName").value = p.nome;
      document.getElementById("productActive").value = p.principioAtivo;
      document.getElementById("productCategory").value = p.categoria;
      document.getElementById("productBatch").value = p.lote;
      document.getElementById("productExpiry").value = p.validade;
      document.getElementById("productQty").value = p.quantidade;
      document.getElementById("productRegistry").value = p.registroAnvisa;
      document.getElementById("productModalTitle").textContent = "Editar produto";
      openModal("productModal");
    }

  });

}

/* ---------------------------------------------------------
   10. PÁGINA: METAS
--------------------------------------------------------- */

function renderGoals(){

  const tbody = document.getElementById("goalsTableBody");
  const progressContainer = document.getElementById("goalsProgressContainer");
  if (!tbody && !progressContainer) return;

  const goals = Store.getGoals();

  const active = goals.filter(g => Store.goalStatus(g) !== "concluido").length;
  const completed = goals.filter(g => Store.goalStatus(g) === "concluido").length;
  const inProgress = goals.filter(g => Store.goalStatus(g) === "andamento").length;
  const late = goals.filter(g => Store.goalStatus(g) === "atrasado").length;

  const elActive = document.getElementById("statActiveGoals");
  const elCompleted = document.getElementById("statCompletedGoals");
  const elInProgress = document.getElementById("statInProgressGoals");
  const elLate = document.getElementById("statLateGoals");

  if (elActive) elActive.textContent = active;
  if (elCompleted) elCompleted.textContent = completed;
  if (elInProgress) elInProgress.textContent = inProgress;
  if (elLate) elLate.textContent = late;

  if (progressContainer) {

    progressContainer.innerHTML = goals.map(g => `
      <div class="progress-card">
        <div class="progress-title">
          <span>${g.titulo}</span>
          <span>${g.progresso}%</span>
        </div>
        <div class="progress-bar">
          <div style="width:${g.progresso}%"></div>
        </div>
      </div>
    `).join("");

  }

  if (tbody) {

    tbody.innerHTML = goals.map(g => {

      const status = Store.goalStatus(g);
      const pill = pillForGoalStatus(status);

      return `
        <tr data-status="${status}" data-id="${g.id}">
          <td>${g.titulo}</td>
          <td>${g.responsavel}</td>
          <td>${formatDateBR(g.prazo)}</td>
          <td>${g.progresso}%</td>
          <td><span class="pill ${pill.cls}">${pill.label}</span></td>
          <td>
            <div class="row-actions">
              <button aria-label="Editar" data-action="edit-goal" data-id="${g.id}"><i class="fa-solid fa-pen"></i></button>
              <button aria-label="Excluir" data-action="delete-goal" data-id="${g.id}"><i class="fa-solid fa-trash"></i></button>
            </div>
          </td>
        </tr>
      `;

    }).join("");

  }

}

function setupGoalsPage(){

  const form = document.getElementById("goalForm");
  if (!form) return;

  const addBtn = document.getElementById("btnAddGoal");

  addBtn.addEventListener("click", () => {
    form.reset();
    document.getElementById("goalId").value = "";
    document.getElementById("goalModalTitle").textContent = "Nova meta";
    openModal("goalModal");
  });

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const id = document.getElementById("goalId").value;

    const goalData = {
      titulo: document.getElementById("goalTitle").value.trim(),
      responsavel: document.getElementById("goalOwner").value.trim(),
      prazo: document.getElementById("goalDeadline").value,
      progresso: Number(document.getElementById("goalProgress").value)
    };

    if (id) {
      Store.updateGoal(id, goalData);
    } else {
      Store.addGoal(goalData);
    }

    closeModal("goalModal");
    renderGoals();

  });

  const tbody = document.getElementById("goalsTableBody");

  if (tbody) {

    tbody.addEventListener("click", (e) => {

      const btn = e.target.closest("button[data-action]");
      if (!btn) return;

      const id = btn.getAttribute("data-id");

      if (btn.dataset.action === "delete-goal") {
        if (confirm("Remover esta meta?")) {
          Store.deleteGoal(id);
          renderGoals();
        }
      }

      if (btn.dataset.action === "edit-goal") {
        const g = Store.getGoals().find(g => g.id === id);
        if (!g) return;
        document.getElementById("goalId").value = g.id;
        document.getElementById("goalTitle").value = g.titulo;
        document.getElementById("goalOwner").value = g.responsavel;
        document.getElementById("goalDeadline").value = g.prazo;
        document.getElementById("goalProgress").value = g.progresso;
        document.getElementById("goalModalTitle").textContent = "Editar meta";
        openModal("goalModal");
      }

    });

  }

}

/* ---------------------------------------------------------
   11. PÁGINA: FUNCIONÁRIOS
--------------------------------------------------------- */

function renderEmployees(){

  const tbody = document.getElementById("employeesTableBody");
  if (!tbody) return;

  const employees = Store.getEmployees();

  const total = employees.length;
  const present = employees.filter(e => e.status === "Presente").length;
  const absent = employees.filter(e => e.status !== "Presente").length;

  const elTotal = document.getElementById("statTotalEmployees");
  const elPresent = document.getElementById("statPresentToday");
  const elAbsent = document.getElementById("statAbsentToday");

  if (elTotal) elTotal.textContent = total.toLocaleString("pt-BR");
  if (elPresent) elPresent.textContent = present.toLocaleString("pt-BR");
  if (elAbsent) elAbsent.textContent = absent.toLocaleString("pt-BR");

  tbody.innerHTML = employees.map(emp => {

    const statusPill = emp.status === "Presente" ? "green" : "orange";

    return `
      <tr data-status="${emp.departamento.toLowerCase()}" data-id="${emp.id}">
        <td>${emp.nome}</td>
        <td>${emp.cargo}</td>
        <td>${emp.departamento}</td>
        <td>
          <select class="shift-select" data-action="change-shift" data-id="${emp.id}">
            <option value="Manhã" ${emp.turno === "Manhã" ? "selected" : ""}>Manhã</option>
            <option value="Tarde" ${emp.turno === "Tarde" ? "selected" : ""}>Tarde</option>
            <option value="Noite" ${emp.turno === "Noite" ? "selected" : ""}>Noite</option>
          </select>
        </td>
        <td><span class="pill ${statusPill}">${emp.status}</span></td>
        <td>
          <div class="row-actions">
            <button aria-label="Editar" data-action="edit-employee" data-id="${emp.id}"><i class="fa-solid fa-pen"></i></button>
            <button aria-label="Excluir" data-action="delete-employee" data-id="${emp.id}"><i class="fa-solid fa-trash"></i></button>
          </div>
        </td>
      </tr>
    `;

  }).join("");

}

function setupEmployeesPage(){

  const form = document.getElementById("employeeForm");
  if (!form) return;

  const addBtn = document.getElementById("btnAddEmployee");

  addBtn.addEventListener("click", () => {
    form.reset();
    document.getElementById("employeeId").value = "";
    document.getElementById("employeeModalTitle").textContent = "Novo funcionário";
    openModal("employeeModal");
  });

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const id = document.getElementById("employeeId").value;

    const employeeData = {
      nome: document.getElementById("employeeName").value.trim(),
      cargo: document.getElementById("employeeRole").value.trim(),
      departamento: document.getElementById("employeeDept").value,
      turno: document.getElementById("employeeShift").value,
      status: document.getElementById("employeeStatus").value
    };

    if (id) {
      Store.updateEmployee(id, employeeData);
    } else {
      Store.addEmployee(employeeData);
    }

    closeModal("employeeModal");
    renderEmployees();

  });

  const tbody = document.getElementById("employeesTableBody");

  tbody.addEventListener("click", (e) => {

    const btn = e.target.closest("button[data-action]");
    if (!btn) return;

    const id = btn.getAttribute("data-id");

    if (btn.dataset.action === "delete-employee") {
      if (confirm("Remover este funcionário?")) {
        Store.deleteEmployee(id);
        renderEmployees();
      }
    }

    if (btn.dataset.action === "edit-employee") {
      const emp = Store.getEmployees().find(e => e.id === id);
      if (!emp) return;
      document.getElementById("employeeId").value = emp.id;
      document.getElementById("employeeName").value = emp.nome;
      document.getElementById("employeeRole").value = emp.cargo;
      document.getElementById("employeeDept").value = emp.departamento;
      document.getElementById("employeeShift").value = emp.turno;
      document.getElementById("employeeStatus").value = emp.status;
      document.getElementById("employeeModalTitle").textContent = "Editar funcionário";
      openModal("employeeModal");
    }

  });

  tbody.addEventListener("change", (e) => {

    const select = e.target.closest("select[data-action='change-shift']");
    if (!select) return;

    Store.updateEmployee(select.getAttribute("data-id"), { turno: select.value });

  });

}

/* ---------------------------------------------------------
   12. PÁGINA: DASHBOARD (index.html)
--------------------------------------------------------- */

function renderDashboard(){

  const stockBody = document.getElementById("dashboardStockBody");
  const statProducts = document.getElementById("statProductsCount");
  const statEmployees = document.getElementById("statEmployeesCount");

  if (!stockBody && !statProducts && !statEmployees) return;

  const products = Store.getProducts();
  const employees = Store.getEmployees();

  if (statProducts) statProducts.textContent = products.length.toLocaleString("pt-BR");
  if (statEmployees) statEmployees.textContent = employees.length.toLocaleString("pt-BR");

  if (stockBody) {

    stockBody.innerHTML = products.slice(0, 3).map(p => {

      const status = Store.productStatus(p);
      const pill = pillForProductStatus(status);
      const growth = status === "alto" ? "+12%" : status === "medio" ? "+7%" : "-3%";

      return `
        <tr>
          <td>${p.nome}</td>
          <td><span class="pill ${pill.cls}">${pill.label}</span></td>
          <td>${growth}</td>
        </tr>
      `;

    }).join("");

  }

}

/* ---------------------------------------------------------
   13. PÁGINA: CONFIGURAÇÕES
--------------------------------------------------------- */

function setupSettingsPage(){

  const systemForm = document.getElementById("systemSettingsForm");
  if (!systemForm) return;

  systemForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const theme = document.getElementById("settingTheme").value;
    const timezone = document.getElementById("settingTimezone").value;
    const language = document.getElementById("settingLanguage").value;

    Store.updateSettings({ theme, timezone, language });

    applySettingsToPage();
    updateClock();

    alert(t("common.salvarAlteracoes") + " ✓");

  });

  document.getElementById("settingTheme").addEventListener("change", (e) => {
    applyTheme(e.target.value);
  });

  const photoInput = document.getElementById("photoUpload");
  const changePhotoBtn = document.getElementById("btnChangePhoto");

  if (changePhotoBtn && photoInput) {

    changePhotoBtn.addEventListener("click", () => photoInput.click());

    photoInput.addEventListener("change", (e) => {

      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {
        Store.updateSettings({ photo: reader.result });
        applyPhoto(reader.result);
      };

      reader.readAsDataURL(file);

    });

  }

}

/* ---------------------------------------------------------
   14. FILTROS DE TABELA (busca + status)
--------------------------------------------------------- */

function setupTableFilters(){

  const tableSearch = document.getElementById("tableSearch");

  if (tableSearch) {

    tableSearch.addEventListener("input", (e) => {

      const term = e.target.value.trim().toLowerCase();

      document.querySelectorAll("table tbody tr").forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? "" : "none";
      });

    });

  }

  const statusFilter = document.getElementById("statusFilter");

  if (statusFilter) {

    statusFilter.addEventListener("change", (e) => {

      const value = e.target.value;

      document.querySelectorAll("table tbody tr").forEach(row => {
        const status = row.getAttribute("data-status");
        row.style.display = (value === "all" || status === value) ? "" : "none";
      });

    });

  }

}

/* ---------------------------------------------------------
   15. GRÁFICOS (Dashboard e Relatórios)
--------------------------------------------------------- */

const lineCtx = document.getElementById("lineChart");

if (lineCtx) {
  new Chart(lineCtx, {
    type:"line",
    data:{
      labels:["Jan","Fev","Mar","Abr","Mai","Jun"],
      datasets:[{
        label:"Produção",
        data:[12,19,15,28,35,48],
        borderColor:"#0ea5a4",
        backgroundColor:"rgba(14,165,164,0.2)",
        fill:true,
        tension:0.4
      }]
    },
    options:{ responsive:true, maintainAspectRatio:false }
  });
}

const pieCtx = document.getElementById("pieChart");

if (pieCtx) {
  new Chart(pieCtx, {
    type:"doughnut",
    data:{
      labels:["Pesquisa","Produção","Vendas"],
      datasets:[{
        data:[35,45,20],
        backgroundColor:["#0ea5a4","#0f3b8c","#22c55e"],
        borderWidth:0
      }]
    },
    options:{ responsive:true, maintainAspectRatio:false }
  });
}

/* ---------------------------------------------------------
   16. ABAS DE CONFIGURAÇÕES
--------------------------------------------------------- */

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

/* ---------------------------------------------------------
   17. VERIFICAÇÃO ANVISA
   Consulta a coleção "anvisa_produtos" (populada pelo script
   anvisa-import.js, rodado uma vez fora do navegador).
--------------------------------------------------------- */

function setupAnvisaCheck(){

  const btn = document.getElementById("btnVerifyAnvisa");
  const resultsBox = document.getElementById("anvisaResults");
  if (!btn || !resultsBox) return;

  btn.addEventListener("click", async () => {

    const termo = document.getElementById("productActive").value || document.getElementById("productName").value;

    if (!termo || !termo.trim()) {
      resultsBox.innerHTML = `<p class="settings-hint">Digite o nome do produto ou princípio ativo primeiro.</p>`;
      return;
    }

    resultsBox.innerHTML = `<p class="settings-hint">Consultando base da Anvisa...</p>`;

    try {

      const results = await Store.verificarAnvisa(termo);

      if (!results.length) {
        resultsBox.innerHTML = `<p class="settings-hint">Nenhum resultado. Confira se já rodou o anvisa-import.js, ou tente um termo mais simples.</p>`;
        return;
      }

      resultsBox.innerHTML = results.map(r => `
        <button type="button" class="anvisa-result-item"
          data-nome="${(r.nome || "").replace(/"/g,'&quot;')}"
          data-registro="${(r.numeroRegistro || "").replace(/"/g,'&quot;')}">
          <strong>${r.nome}</strong>
          <span>Reg. ${r.numeroRegistro} — ${r.situacao || "Situação não informada"}</span>
        </button>
      `).join("");

      resultsBox.querySelectorAll(".anvisa-result-item").forEach(item => {
        item.addEventListener("click", () => {
          document.getElementById("productRegistry").value = item.dataset.registro;
          resultsBox.innerHTML = `<p class="settings-hint">✓ Registro preenchido a partir da base oficial da Anvisa.</p>`;
        });
      });

    } catch (e) {
      console.error(e);
      resultsBox.innerHTML = `<p class="settings-hint">Erro ao consultar. Veja o console para detalhes.</p>`;
    }

  });

}

/* ---------------------------------------------------------
   18. RENDERIZAÇÃO GERAL E INICIALIZAÇÃO
   Só começa depois que o auth-guard.js confirma o login
   (evento "pharma:authReady"), e depois roda de novo toda
   vez que os dados mudam na nuvem (Store.onChange).
--------------------------------------------------------- */

function renderAll(){
  applySettingsToPage();
  renderProducts();
  renderGoals();
  renderEmployees();
  renderDashboard();
}

document.addEventListener("pharma:authReady", () => {

  Store.onChange(renderAll);

  setupProductsPage();
  setupGoalsPage();
  setupEmployeesPage();
  setupSettingsPage();
  setupTableFilters();
  setupAnvisaCheck();

  updateClock();
  setInterval(updateClock, 1000);

  Store.init();

});