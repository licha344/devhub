// =============================================
// TRANSLATIONS
// =============================================
const LANGS = {
  es: {
    "nav.home":"Inicio","nav.branches":"Ramas","nav.admin":"Administración","nav.projects":"Proyectos","nav.roadmap":"Roadmap","nav.login":"Iniciar sesión","nav.register":"Registrarse","nav.logout":"Salir",
    "hero.badge":"⚡ v2.0 — Actualizado para 2026","hero.h1a":"El universo del","hero.h1b":"Programador","hero.p":"Explora todas las ramas de la programación, gestiona tus proyectos con Scrum y traza tu camino.","hero.btn1":"🚀 Comenzar ahora","hero.btn2":"📖 Explorar ramas",
    "stats.branches":"Ramas","stats.tech":"Tecnologías","stats.projects":"Proyectos","stats.devs":"Devs","stats.poss":"Posibilidades",
    "login.title":"Bienvenido a DevHub","login.sub":"Gestiona tus proyectos de desarrollo","login.tab":"Iniciar Sesión","register.tab":"Registrarse","login.email":"Email","login.password":"Contraseña","login.btn":"Ingresar","login.demo":"Demo:","register.name":"Nombre","register.role":"Especialización","register.btn":"Crear Cuenta",
    "col.pend":"Pendiente","col.dev":"En Desarrollo","col.future":"A Futuro","col.done":"Finalizado",
    "task.new":"Nueva Tarea","task.sub":"Agregar tarea al tablero Scrum","task.title":"Título","task.branch":"Rama","task.status":"Estado","task.priority":"Prioridad","task.due":"Fecha límite","task.desc":"Descripción","task.save":"Guardar Tarea","task.add":"+ Nueva Tarea","task.add2":"agregar tarea","cancel":"Cancelar",
    "project.new":"+ Nuevo Proyecto","project.sub":"Crear un nuevo proyecto en tu workspace","project.name":"Nombre del proyecto","project.desc":"Descripción","project.branch":"Rama","project.method":"Metodología","project.save":"Crear Proyecto",
    "admin.title":"📋 Administración de Proyectos","admin.board":"Tablero Scrum","admin.backlog":"Backlog","admin.metrics":"Métricas","admin.info":"ℹ️ Metodología Scrum — arrastra las tarjetas entre columnas para actualizar el estado","admin.metrics.sub":"Resumen de progreso y velocidad del equipo",
    "sprint.name":"Sprint #7","sprint.complete":"Completar Sprint",
    "sidebar.branches":"🌿 Ramas","sidebar.trends":"🔥 Tendencias","sidebar.sprint":"📋 Sprint Activo","sidebar.filters":"🔍 Filtros","sidebar.myprojects":"📁 Mis Proyectos","sidebar.langs":"Lenguajes",
    "branches.title":"🌿 Ramas de la Programación","branches.sub":"Explora todas las especializaciones del mundo del desarrollo de software",
    "filter.all":"Todas",
    "projects.title":"📁 Mis Proyectos","projects.sub":"Gestiona todos tus repositorios y proyectos activos","projects.all":"Todos",
    "roadmap.title":"🗺️ Roadmap del Programador","roadmap.sub":"Tu guía de aprendizaje estructurada por niveles — de Fundamentos a Expert",
    "code.title":"💻 Código en Acción",
    "metrics.burndown":"🔥 Burndown Visual","metrics.start":"Inicio Sprint","metrics.end":"Fin Sprint",
    "footer.text":"El universo del Programador"
  },
  en: {
    "nav.home":"Home","nav.branches":"Branches","nav.admin":"Administration","nav.projects":"Projects","nav.roadmap":"Roadmap","nav.login":"Sign in","nav.register":"Sign up","nav.logout":"Sign out",
    "hero.badge":"⚡ v2.0 — Updated for 2026","hero.h1a":"The universe of the","hero.h1b":"Developer","hero.p":"Explore all programming branches, manage your projects with Scrum and chart your path to professional development.","hero.btn1":"🚀 Get started","hero.btn2":"📖 Explore branches",
    "stats.branches":"Branches","stats.tech":"Technologies","stats.projects":"Projects","stats.devs":"Devs","stats.poss":"Possibilities",
    "login.title":"Welcome to DevHub","login.sub":"Manage your development projects","login.tab":"Sign In","register.tab":"Sign Up","login.email":"Email","login.password":"Password","login.btn":"Sign In","login.demo":"Demo:","register.name":"Name","register.role":"Specialization","register.btn":"Create Account",
    "col.pend":"Pending","col.dev":"In Development","col.future":"Future","col.done":"Completed",
    "task.new":"New Task","task.sub":"Add task to Scrum board","task.title":"Title","task.branch":"Branch","task.status":"Status","task.priority":"Priority","task.due":"Due date","task.desc":"Description","task.save":"Save Task","task.add":"+ New Task","task.add2":"add task","cancel":"Cancel",
    "project.new":"+ New Project","project.sub":"Create a new project in your workspace","project.name":"Project name","project.desc":"Description","project.branch":"Branch","project.method":"Methodology","project.save":"Create Project",
    "admin.title":"📋 Project Management","admin.board":"Scrum Board","admin.backlog":"Backlog","admin.metrics":"Metrics","admin.info":"ℹ️ Scrum methodology — drag cards between columns to update status","admin.metrics.sub":"Team progress and velocity summary",
    "sprint.name":"Sprint #7","sprint.complete":"Complete Sprint",
    "sidebar.branches":"🌿 Branches","sidebar.trends":"🔥 Trends","sidebar.sprint":"📋 Active Sprint","sidebar.filters":"🔍 Filters","sidebar.myprojects":"📁 My Projects","sidebar.langs":"Languages",
    "branches.title":"🌿 Programming Branches","branches.sub":"Explore all specializations in the software development world",
    "filter.all":"All",
    "projects.title":"📁 My Projects","projects.sub":"Manage all your repositories and active projects","projects.all":"All",
    "roadmap.title":"🗺️ Developer Roadmap","roadmap.sub":"Your structured learning guide — from Fundamentals to Expert",
    "code.title":"💻 Code in Action",
    "metrics.burndown":"🔥 Burndown Chart","metrics.start":"Sprint Start","metrics.end":"Sprint End",
    "footer.text":"The Developer's Universe"
  },
  pt: {
    "nav.home":"Início","nav.branches":"Ramos","nav.admin":"Administração","nav.projects":"Projetos","nav.roadmap":"Roadmap","nav.login":"Entrar","nav.register":"Registrar","nav.logout":"Sair",
    "hero.badge":"⚡ v2.0 — Atualizado para 2026","hero.h1a":"O universo do","hero.h1b":"Programador","hero.p":"Explore todos os ramos da programação, gerencie seus projetos com Scrum e trace seu caminho para o desenvolvimento profissional.","hero.btn1":"🚀 Começar agora","hero.btn2":"📖 Explorar ramos",
    "stats.branches":"Ramos","stats.tech":"Tecnologias","stats.projects":"Projetos","stats.devs":"Devs","stats.poss":"Possibilidades",
    "login.title":"Bem-vindo ao DevHub","login.sub":"Gerencie seus projetos de desenvolvimento","login.tab":"Entrar","register.tab":"Registrar","login.email":"E-mail","login.password":"Senha","login.btn":"Entrar","login.demo":"Demo:","register.name":"Nome","register.role":"Especialização","register.btn":"Criar Conta",
    "col.pend":"Pendente","col.dev":"Em Desenvolvimento","col.future":"A Futuro","col.done":"Concluído",
    "task.new":"Nova Tarefa","task.sub":"Adicionar tarefa ao quadro Scrum","task.title":"Título","task.branch":"Ramo","task.status":"Status","task.priority":"Prioridade","task.due":"Prazo","task.desc":"Descrição","task.save":"Salvar Tarefa","task.add":"+ Nova Tarefa","task.add2":"adicionar tarefa","cancel":"Cancelar",
    "project.new":"+ Novo Projeto","project.sub":"Criar um novo projeto no seu workspace","project.name":"Nome do projeto","project.desc":"Descrição","project.branch":"Ramo","project.method":"Metodologia","project.save":"Criar Projeto",
    "admin.title":"📋 Gerenciamento de Projetos","admin.board":"Quadro Scrum","admin.backlog":"Backlog","admin.metrics":"Métricas","admin.info":"ℹ️ Metodologia Scrum — arraste os cartões entre colunas para atualizar o status","admin.metrics.sub":"Resumo de progresso e velocidade da equipe",
    "sprint.name":"Sprint #7","sprint.complete":"Completar Sprint",
    "sidebar.branches":"🌿 Ramos","sidebar.trends":"🔥 Tendências","sidebar.sprint":"📋 Sprint Ativo","sidebar.filters":"🔍 Filtros","sidebar.myprojects":"📁 Meus Projetos","sidebar.langs":"Linguagens",
    "branches.title":"🌿 Ramos da Programação","branches.sub":"Explore todas as especializações do mundo do desenvolvimento de software",
    "filter.all":"Todos",
    "projects.title":"📁 Meus Projetos","projects.sub":"Gerencie todos os seus repositórios e projetos ativos","projects.all":"Todos",
    "roadmap.title":"🗺️ Roadmap do Programador","roadmap.sub":"Seu guia de aprendizado estruturado por níveis — de Fundamentos a Expert",
    "code.title":"💻 Código em Ação",
    "metrics.burndown":"🔥 Burndown Visual","metrics.start":"Início Sprint","metrics.end":"Fim Sprint",
    "footer.text":"O universo do Programador"
  }
};

let currentLang = 'es';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.textContent === lang.toUpperCase());
  });
  applyTranslations();
  renderBoard();
  renderBranches();
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>\"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#39;'
  })[char]);
}

function formatTaskDate(value) {
  if (!value) return '–';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day).toLocaleDateString('es', { day: '2-digit', month: 'short', year: 'numeric' });
}

function t(key) { return LANGS[currentLang][key] || LANGS['es'][key] || key; }

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
}

// =============================================
// AUTH
// =============================================
let currentUser = null;

function openLogin() { document.getElementById('loginModal').classList.remove('hidden'); }
function closeLogin() { document.getElementById('loginModal').classList.add('hidden'); }
function requireLogin(page) {
  if (currentUser) showPage(page);
  else openLogin();
}

function switchAuthTab(tab) {
  document.getElementById('loginForm').style.display = tab === 'login' ? '' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? '' : 'none';
  document.getElementById('loginTabBtn').classList.toggle('active', tab === 'login');
  document.getElementById('registerTabBtn').classList.toggle('active', tab === 'register');
}

function doLogin() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;
  if (!email || !pass) { showToast('⚠️', 'Ingresa email y contraseña'); return; }
  currentUser = { name: email.split('@')[0], email, role: 'Full Stack Dev', avatar: email.slice(0,2).toUpperCase() };
  onLogin();
}

function doRegister() {
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const role = document.getElementById('regRole').value;
  if (!name || !email) { showToast('⚠️', 'Completa los campos requeridos'); return; }
  currentUser = { name, email, role, avatar: name.slice(0,2).toUpperCase() };
  onLogin();
}

function onLogin() {
  closeLogin();
  document.getElementById('authButtons').style.display = 'none';
  document.getElementById('userButtons').style.display = 'flex';
  document.getElementById('navUserName').textContent = currentUser.name;
  renderSidebarsUser();
  showToast('✅', `Bienvenido, ${currentUser.name}!`);
  showPage('admin');
}

function doLogout() {
  currentUser = null;
  document.getElementById('authButtons').style.display = 'flex';
  document.getElementById('userButtons').style.display = 'none';
  showPage('home');
  showToast('👋', 'Sesión cerrada');
}

function renderSidebarsUser() {
  const html = `<div class="user-profile"><div class="user-avatar">${escapeHTML(currentUser.avatar)}</div><div><div class="user-name">${escapeHTML(currentUser.name)}</div><div class="user-role">${escapeHTML(currentUser.role)}</div></div></div>`;
  document.getElementById('sidebarUser').innerHTML = html;
  document.getElementById('sidebarUser2').innerHTML = html;
}

// =============================================
// NAVIGATION
// =============================================
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const nav = document.getElementById('nav-' + id);
  if (nav) nav.classList.add('active');
  if (id === 'admin') { renderBoard(); renderMetrics(); }
  if (id === 'projects') renderProjects();
  if (id === 'branches') renderBranches();
  if (id === 'roadmap') setTimeout(renderRoadmap, 100);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================
// TASKS DATA
// =============================================
let tasks = [
  { id:'DEV-01', title:'Implementar API REST con Node.js', branch:'Backend', status:'dev', priority:'high', date:'2026-03-06', desc:'Endpoints CRUD completos con autenticación JWT' },
  { id:'DEV-02', title:'Diseñar UI del Dashboard', branch:'Frontend', status:'pend', priority:'mid', date:'2026-03-10', desc:'Componentes React con Tailwind CSS' },
  { id:'DEV-03', title:'Setup Pipeline CI/CD', branch:'DevOps', status:'dev', priority:'high', date:'2026-03-08', desc:'GitHub Actions con deploy automático' },
  { id:'DEV-04', title:'Modelo ML Recomendaciones', branch:'Data', status:'future', priority:'low', date:'2026-03-20', desc:'Algoritmo de filtrado colaborativo' },
  { id:'DEV-05', title:'App móvil Flutter', branch:'Mobile', status:'pend', priority:'mid', date:'2026-03-15', desc:'Módulo de autenticación y perfil de usuario' },
  { id:'DEV-06', title:'Tests unitarios Backend', branch:'QA', status:'done', priority:'mid', date:'2026-03-01', desc:'Coverage > 80% en módulos críticos' },
  { id:'DEV-07', title:'Configurar base de datos PostgreSQL', branch:'Backend', status:'done', priority:'high', date:'2026-02-28', desc:'Migraciones y seeders iniciales' },
  { id:'DEV-08', title:'Smart contracts Solidity', branch:'Backend', status:'future', priority:'low', date:'2026-03-30', desc:'Contratos ERC-20 para tokenización' },
];

let taskIdCounter = 9;
let draggedTaskId = null;

const branchColors = {
  Frontend:'#f97316', Backend:'#238636', Mobile:'#8b5cf6', Data:'#06b6d4',
  DevOps:'#eab308', Security:'#ef4444', QA:'#10b981', Game:'#ec4899', Blockchain:'#1f6feb'
};

const priorityColors = { high:'#ef4444', mid:'#eab308', low:'#238636' };

function getTasksByStatus(status) { return tasks.filter(t => t.status === status); }

function renderBoard() {
  ['pend','dev','future','done'].forEach(col => {
    const colTasks = getTasksByStatus(col);
    document.getElementById('cnt-' + col).textContent = colTasks.length;
    const container = document.getElementById('tasks-' + col);
    container.innerHTML = colTasks.map((tk, i) => renderTaskCard(tk, i)).join('');
  });
  updateCounts();
}

function renderTaskCard(tk, delay = 0) {
  const color = branchColors[tk.branch] || '#8b949e';
  const pColor = priorityColors[tk.priority] || '#8b949e';
  const isDone = tk.status === 'done';
  return `<div class="task-card${isDone?' done':''}" style="animation-delay:${delay*0.08}s" draggable="true" ondragstart="dragStart(event,'${escapeHTML(tk.id)}')" onclick="openTaskDetail('${escapeHTML(tk.id)}')">
    <div class="task-priority" style="background:${pColor}"></div>
    <div class="task-tags"><span class="tag" style="background:${color}22;color:${color};border-color:${color}44">${escapeHTML(tk.branch)}</span></div>
    <div class="task-title-text">${escapeHTML(tk.title)}</div>
    <div class="task-meta">
      <span class="task-id-badge">${escapeHTML(tk.id)}</span>
      <span class="task-date-text">📅 ${escapeHTML(formatTaskDate(tk.date))}</span>
      <div class="task-avatar" style="background:${color}">${escapeHTML(tk.branch.slice(0,2))}</div>
    </div>
  </div>`;
}

function updateCounts() {
  const counts = { all: tasks.length, pend:0, dev:0, future:0, done:0 };
  tasks.forEach(tk => counts[tk.status]++);
  document.getElementById('cntAll').textContent = counts.all;
  document.getElementById('cntPend').textContent = counts.pend;
  document.getElementById('cntDev').textContent = counts.dev;
  document.getElementById('cntFuture').textContent = counts.future;
  document.getElementById('cntDone').textContent = counts.done;
}

// Drag & Drop
function dragStart(e, id) { draggedTaskId = id; e.dataTransfer.effectAllowed = 'move'; }
function allowDrop(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }
function dropTask(e, newStatus) {
  e.preventDefault();
  if (!draggedTaskId) return;
  const task = tasks.find(t => t.id === draggedTaskId);
  if (task) { task.status = newStatus; renderBoard(); showToast('🔄', `Tarea movida a: ${t('col.'+newStatus)}`); }
  draggedTaskId = null;
}

// =============================================
// TASK MODAL
// =============================================
let editingStatus = null;

function openTaskModal() {
  document.getElementById('taskModal').classList.remove('hidden');
  editingStatus = null;
  const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate()+7);
  document.getElementById('taskDate').value = tomorrow.toISOString().split('T')[0];
}

function openTaskModalStatus(status) {
  openTaskModal();
  document.getElementById('taskStatus').value = status;
  editingStatus = status;
}

function closeTaskModal() { document.getElementById('taskModal').classList.add('hidden'); }

function openTaskDetail(id) {
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  document.getElementById('taskTitle').value = task.title;
  document.getElementById('taskBranch').value = task.branch;
  document.getElementById('taskStatus').value = task.status;
  document.getElementById('taskPriority').value = task.priority;
  document.getElementById('taskDesc').value = task.desc || '';
  document.getElementById('taskDate').value = /^\d{4}-\d{2}-\d{2}$/.test(task.date) ? task.date : '';
  document.getElementById('taskModal').classList.remove('hidden');
  editingStatus = task.id;
}

function saveTask() {
  const title = document.getElementById('taskTitle').value.trim();
  if (!title) { showToast('⚠️', 'El título es requerido'); return; }
  const status = document.getElementById('taskStatus').value;
  const branch = document.getElementById('taskBranch').value;
  const priority = document.getElementById('taskPriority').value;
  const desc = document.getElementById('taskDesc').value;
  const date = document.getElementById('taskDate').value;

  if (typeof editingStatus === 'string' && editingStatus.startsWith('DEV-')) {
    const task = tasks.find(t => t.id === editingStatus);
    if (task) { Object.assign(task, { title, status, branch, priority, desc, date }); }
  } else {
    tasks.push({ id:`DEV-${String(taskIdCounter++).padStart(2,'0')}`, title, branch, status, priority, date, desc });
  }
  closeTaskModal();
  renderBoard();
  renderBacklog();
  showToast('✅', 'Tarea guardada correctamente');
  document.getElementById('taskTitle').value = '';
  document.getElementById('taskDesc').value = '';
}

function filterTasks(status, el) {
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  if (el) el.classList.add('active');
  const cards = document.querySelectorAll('.task-card');
  cards.forEach(card => {
    if (status === 'all') card.style.display = '';
    else {
      const colId = card.closest('.sprint-col')?.id;
      card.style.display = colId === 'col-' + status ? '' : 'none';
    }
  });
}

// =============================================
// BACKLOG
// =============================================
function renderBacklog() {
  const search = (document.getElementById('searchBacklog')?.value || '').toLowerCase();
  const branchFilter = document.getElementById('filterBranchBacklog')?.value || 'all';
  let filtered = tasks.filter(t => {
    const matchSearch = t.title.toLowerCase().includes(search) || t.id.toLowerCase().includes(search);
    const matchBranch = branchFilter === 'all' || t.branch === branchFilter;
    return matchSearch && matchBranch;
  });
  const container = document.getElementById('backlogList');
  if (!container) return;
  if (!filtered.length) { container.innerHTML = '<div class="empty-state"><div class="empty-icon">📭</div>No hay tareas que coincidan</div>'; return; }
  const statusOrder = ['pend','dev','future','done'];
  const statusColors = { pend:'#06b6d4', dev:'#eab308', future:'#8b5cf6', done:'#238636' };
  container.innerHTML = filtered.sort((a,b) => statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status)).map(tk => {
    const color = branchColors[tk.branch] || '#8b949e';
    const sc = statusColors[tk.status];
    return `<div style="background:var(--bg2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:8px;display:flex;align-items:center;gap:14px;cursor:pointer;transition:.2s" onmouseover="this.style.borderColor='${color}'" onmouseout="this.style.borderColor='var(--border)'" onclick="openTaskDetail('${escapeHTML(tk.id)}')">
      <span style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:var(--text-dim);min-width:58px">${escapeHTML(tk.id)}</span>
      <div style="flex:1"><div style="font-size:.875rem;font-weight:600">${escapeHTML(tk.title)}</div><div style="font-size:.75rem;color:var(--text-muted)">${escapeHTML(tk.desc||'')}</div></div>
      <span class="tag" style="background:${color}22;color:${color};border-color:${color}44">${escapeHTML(tk.branch)}</span>
      <span class="tag" style="background:${sc}22;color:${sc};border-color:${sc}44">${escapeHTML(t('col.'+tk.status))}</span>
      <span style="font-size:.75rem;color:var(--text-muted)">📅 ${escapeHTML(formatTaskDate(tk.date))}</span>
      <button class="btn btn-red btn-sm" onclick="event.stopPropagation();deleteTask('${escapeHTML(tk.id)}')">🗑️</button>
    </div>`;
  }).join('');
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderBoard(); renderBacklog(); showToast('🗑️', 'Tarea eliminada');
}

// =============================================
// METRICS
// =============================================
function renderMetrics() {
  const total = tasks.length;
  const done = tasks.filter(t => t.status === 'done').length;
  const dev = tasks.filter(t => t.status === 'dev').length;
  const pend = tasks.filter(t => t.status === 'pend').length;
  const future = tasks.filter(t => t.status === 'future').length;
  const pct = total ? Math.round(done/total*100) : 0;

  const metrics = [
    { label: 'Total Tareas', value: total, color: '#388bfd' },
    { label: '✅ Finalizadas', value: done, color: '#238636' },
    { label: '⚡ En Desarrollo', value: dev, color: '#eab308' },
    { label: '⏳ Pendientes', value: pend, color: '#06b6d4' },
    { label: '🔮 A Futuro', value: future, color: '#8b5cf6' },
    { label: '📈 Progreso', value: pct + '%', color: pct > 60 ? '#238636' : '#f97316' },
  ];

  document.getElementById('metricsContent').innerHTML = metrics.map(m =>
    `<div style="background:var(--bg2);border:1px solid var(--border);border-radius:10px;padding:20px;text-align:center">
      <div style="font-family:'JetBrains Mono',monospace;font-size:2rem;font-weight:700;color:${m.color}">${m.value}</div>
      <div style="font-size:.78rem;color:var(--text-muted);margin-top:4px">${m.label}</div>
    </div>`).join('');

  // Burndown bars
  const days = 10;
  const bars = Array.from({length:days}, (_,i) => {
    const remaining = Math.max(total - Math.floor((total/days)*i) + (Math.random()*2-1).toFixed(0)*1, 0);
    return remaining;
  });
  document.getElementById('burndownViz').innerHTML = bars.map((val, i) => {
    const h = Math.round(val / total * 100);
    const isToday = i === 4;
    return `<div style="flex:1;background:${isToday?'var(--orange)':'#1f6feb'};height:${h}%;border-radius:3px 3px 0 0;transition:height .8s ease;opacity:${isToday?1:0.65};position:relative" title="Día ${i+1}: ${val} tareas"></div>`;
  }).join('');
}

function completeSprint() {
  showToast('🏆', '¡Sprint completado! Generando reporte...');
}

// =============================================
// PROJECTS
// =============================================
let projects = [
  { id:1, name:'DevHub API', desc:'API REST principal del sistema con autenticación JWT y RBAC', branch:'Backend', method:'Scrum', lang:'TypeScript', stars:24, tasks:8, progress:65, vis:'Público' },
  { id:2, name:'DevHub Frontend', desc:'Interfaz web principal con React 19 y sistema de diseño propio', branch:'Frontend', method:'Scrum', lang:'JavaScript', stars:31, tasks:12, progress:45, vis:'Público' },
  { id:3, name:'ML Recommender', desc:'Motor de recomendaciones con Random Forest y colaborative filtering', branch:'Data', method:'Kanban', lang:'Python', stars:12, tasks:5, progress:30, vis:'Privado' },
  { id:4, name:'DevHub Mobile', desc:'App móvil multiplataforma con Flutter para iOS y Android', branch:'Mobile', method:'Scrum', lang:'Dart', stars:18, tasks:9, progress:20, vis:'Privado' },
];

let projIdCounter = 5;

function openProjectModal() { document.getElementById('projectModal').classList.remove('hidden'); }

function saveProject() {
  const name = document.getElementById('projName').value.trim();
  const desc = document.getElementById('projDesc').value.trim();
  if (!name) { showToast('⚠️', 'El nombre es requerido'); return; }
  projects.push({
    id: projIdCounter++, name, desc: desc || 'Sin descripción', branch: document.getElementById('projBranch').value,
    method: document.getElementById('projMethod').value, lang: 'TypeScript', stars: 0, tasks: 0, progress: 0, vis: 'Privado'
  });
  document.getElementById('projectModal').classList.add('hidden');
  renderProjects();
  showToast('🚀', `Proyecto "${name}" creado!`);
  document.getElementById('projName').value = '';
  document.getElementById('projDesc').value = '';
}

const projColors = { Frontend:'#f97316', Backend:'#238636', Mobile:'#8b5cf6', Data:'#06b6d4', DevOps:'#eab308', Security:'#ef4444', 'Game Dev':'#ec4899', 'Full Stack':'#1f6feb' };

function renderProjects() {
  document.getElementById('projCount').textContent = projects.length;
  document.getElementById('projectsGrid').innerHTML = projects.map(p => {
    const color = projColors[p.branch] || '#8b949e';
    return `<div class="project-card" style="border-left:3px solid ${color}">
      <style>.project-card:hover{border-left-color:${color}!important}</style>
      <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,${color},${color}88)"></div>
      <div class="project-header">
        <div class="project-name">${escapeHTML(p.name)}</div>
        <span class="project-visibility">${p.vis === 'Privado' ? '🔒 Privado' : '🌐 Público'}</span>
      </div>
      <div class="project-desc">${escapeHTML(p.desc)}</div>
      <div class="progress-mini"><div class="progress-mini-fill" style="width:${escapeHTML(p.progress)}%;background:${color}"></div></div>
      <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:.72rem;color:var(--text-muted)"><span>${escapeHTML(p.progress)}% completado</span><span>${escapeHTML(p.tasks)} tareas</span></div>
      <div class="project-footer">
        <div class="project-meta-item"><span style="color:${color}">●</span>${escapeHTML(p.lang)}</div>
        <div class="project-meta-item">⭐ ${p.stars}</div>
        <div class="project-meta-item" style="background:rgba(35,134,54,.15);padding:2px 8px;border-radius:20px;border:1px solid rgba(35,134,54,.3);color:#2ea043;font-size:.68rem;font-family:'JetBrains Mono',monospace">${escapeHTML(p.method)}</div>
      </div>
    </div>`;
  }).join('');
}

// =============================================
// BRANCHES
// =============================================
const branchesData = [
  { key:'frontend', icon:'🎨', name:'Frontend Development', desc:'Creación de interfaces de usuario, UX, SPAs y aplicaciones web interactivas del lado del cliente.', color:'#f97316', langs:['HTML','CSS','JS','React','Vue'], stars:'9.8k' },
  { key:'backend', icon:'⚙️', name:'Backend Development', desc:'Lógica del servidor, APIs RESTful & GraphQL, autenticación, bases de datos y arquitectura escalable.', color:'#238636', langs:['Node.js','Python','Java','Go','Rust'], stars:'11.2k' },
  { key:'mobile', icon:'📱', name:'Mobile Development', desc:'Apps nativas e híbridas para iOS y Android, desde micro-apps hasta ecosistemas complejos con millones de usuarios.', color:'#8b5cf6', langs:['Swift','Kotlin','Flutter','RN'], stars:'7.4k' },
  { key:'data', icon:'🤖', name:'Inteligencia Artificial', desc:'Machine Learning, Deep Learning, NLP, LLMs y modelos de IA generativa aplicados a problemas reales.', color:'#06b6d4', langs:['Python','TensorFlow','PyTorch','HuggingFace'], stars:'18.5k' },
  { key:'data', icon:'📊', name:'Data Science', desc:'Análisis de datos, estadística avanzada, visualización, ETL y extracción de insights para decisiones.', color:'#0891b2', langs:['Python','R','SQL','Spark'], stars:'13.1k' },
  { key:'devops', icon:'☁️', name:'DevOps & Cloud', desc:'CI/CD, infraestructura como código, contenedores, orquestación y servicios cloud (AWS, GCP, Azure).', color:'#eab308', langs:['Docker','K8s','Terraform','AWS'], stars:'10.7k' },
  { key:'security', icon:'🔒', name:'Ciberseguridad', desc:'Seguridad ofensiva y defensiva, ethical hacking, análisis forense, OWASP y protección de sistemas críticos.', color:'#ef4444', langs:['Python','C','Bash','Go'], stars:'8.9k' },
  { key:'game', icon:'🎮', name:'Game Development', desc:'Videojuegos 2D/3D, física de juegos, shaders, IA en NPCs, motores gráficos y experiencias inmersivas.', color:'#ec4899', langs:['C#','Unity','Unreal','Godot'], stars:'12.3k' },
  { key:'blockchain', icon:'🔗', name:'Blockchain / Web3', desc:'Smart contracts, DeFi, NFTs, criptografía aplicada y desarrollo de aplicaciones descentralizadas (dApps).', color:'#1f6feb', langs:['Solidity','Rust','Web3.js','Ethers'], stars:'5.6k' },
  { key:'embedded', icon:'🖥️', name:'Sistemas Embebidos', desc:'Microcontroladores, IoT, firmware, RTOS y programación de sistemas con recursos extremadamente limitados.', color:'#64748b', langs:['C','C++','Assembly','MicroPython'], stars:'4.2k' },
  { key:'scientific', icon:'🧬', name:'Computación Científica', desc:'Simulaciones físicas, bioinformática, computación cuántica y análisis numérico de alto rendimiento.', color:'#0ea5e9', langs:['Python','Julia','MATLAB','Fortran'], stars:'3.8k' },
  { key:'qa', icon:'🤝', name:'QA & Testing', desc:'Aseguramiento de calidad, TDD, BDD, testing automatizado E2E, performance y metodologías de prueba.', color:'#10b981', langs:['Selenium','Jest','Cypress','Playwright'], stars:'6.1k' },
];

let currentBranchFilter = 'all';

function renderBranches() {
  const grid = document.getElementById('branchesGrid');
  if (!grid) return;
  const filtered = currentBranchFilter === 'all' ? branchesData : branchesData.filter(b => b.key === currentBranchFilter);
  grid.innerHTML = filtered.map((b, i) => `
    <div class="branch-card" style="animation-delay:${i*0.06}s;border-top:2px solid ${b.color}20">
      <div style="position:absolute;top:0;left:0;right:0;height:2px;background:${b.color};opacity:0;transition:.2s" class="bc-top"></div>
      <div class="branch-icon" style="background:${b.color}20">${b.icon}</div>
      <div class="branch-name">${b.name}</div>
      <div class="branch-desc">${b.desc}</div>
      <div class="branch-footer">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${b.langs.map(l=>`<span class="lang-pill">${l}</span>`).join('')}</div>
        <span class="branch-stars">⭐ ${b.stars}</span>
      </div>
    </div>`).join('');
}

function filterBranchPage(branch, el) {
  currentBranchFilter = branch;
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  if (el) el.classList.add('active');
  renderBranches();
}

// =============================================
// ROADMAP
// =============================================
const roadmapData = [
  { level:'Nivel 1 — Bases', levelColor:'#2ea043', skill:'Lógica & Algoritmia', sub:'Variables, loops, funciones', pct:100 },
  { level:'Nivel 1 — Bases', levelColor:'#2ea043', skill:'Estructuras de Datos', sub:'Arrays, listas, árboles', pct:90 },
  { level:'Nivel 1 — Bases', levelColor:'#2ea043', skill:'Git & Control de Versiones', sub:'Branches, merge, PR', pct:95 },
  { level:'Nivel 2 — Intermedio', levelColor:'#1f6feb', skill:'POO & Patrones', sub:'SOLID, Design Patterns', pct:75 },
  { level:'Nivel 2 — Intermedio', levelColor:'#1f6feb', skill:'Bases de Datos', sub:'SQL, NoSQL, ORM', pct:70 },
  { level:'Nivel 2 — Intermedio', levelColor:'#1f6feb', skill:'APIs REST & GraphQL', sub:'HTTP, autenticación, CRUD', pct:65 },
  { level:'Nivel 3 — Avanzado', levelColor:'#8b5cf6', skill:'Arquitectura de Software', sub:'Microservicios, DDD, CQRS', pct:45 },
  { level:'Nivel 3 — Avanzado', levelColor:'#8b5cf6', skill:'Sistemas Distribuidos', sub:'CAP theorem, consistencia', pct:40 },
  { level:'Nivel 4 — Senior', levelColor:'#f97316', skill:'Liderazgo Técnico', sub:'Code review, mentoring', pct:25 },
  { level:'Nivel 4 — Senior', levelColor:'#f97316', skill:'Cloud & Infraestructura', sub:'AWS/GCP, IaC, SRE', pct:35 },
  { level:'Nivel 5 — Expert', levelColor:'#ef4444', skill:'Investigación & Innovación', sub:'Papers, OSS, conferencias', pct:10 },
  { level:'Nivel 5 — Expert', levelColor:'#ef4444', skill:'Quantum Computing', sub:'Qubits, gates, algoritmos Q', pct:5 },
];

function renderRoadmap() {
  const grid = document.getElementById('roadmapGrid');
  if (!grid) return;
  grid.innerHTML = roadmapData.map((r, i) => `
    <div class="roadmap-item" style="animation:slideIn .4s ease ${i*0.05}s both">
      <div class="roadmap-level" style="color:${r.levelColor}">${r.level}</div>
      <div class="roadmap-skill">${r.skill}</div>
      <div class="roadmap-sub">${r.sub}</div>
      <div class="progress-bar"><div class="progress-fill" style="width:0;background:${r.levelColor}" data-width="${r.pct}%"></div></div>
    </div>`).join('');
  setTimeout(() => {
    document.querySelectorAll('.progress-fill').forEach(el => {
      el.style.width = el.getAttribute('data-width');
    });
  }, 200);
}

// =============================================
// ADMIN TABS
// =============================================
function switchAdminTab(tab, el) {
  ['board','backlog','metrics'].forEach(t => {
    document.getElementById('admin' + t.charAt(0).toUpperCase() + t.slice(1)).style.display = t === tab ? '' : 'none';
  });
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  if (el) el.classList.add('active');
  if (tab === 'backlog') renderBacklog();
  if (tab === 'metrics') renderMetrics();
}

// =============================================
// TOAST
// =============================================
function showToast(icon, msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastIcon').textContent = icon;
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.add('hidden'), 3000);
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  renderBranches();
  renderRoadmap();
  renderProjects();
  // Set default date for task
  const d = new Date(); d.setDate(d.getDate()+7);
  const el = document.getElementById('taskDate');
  if (el) el.value = d.toISOString().split('T')[0];
  // Observer for roadmap
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.progress-fill').forEach(b => {
          b.style.width = b.getAttribute('data-width') || b.style.width;
        });
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.roadmap-grid').forEach(el => obs.observe(el));
});