// РОЛИ (16 шт)
const ROLES_LIST = [
    { name: "АДВОКАТ", desc: "Вы защищаете тему, используя логику и давление." },
    { name: "ЗА", desc: "Вы должны поддержать даже если в жизни Вы против этой темы." }, 
    { name: "ПРОТИВ", desc: "Вы должны выступить против темы, если даже в жизни Вы её поддерживаете." }, 
    { name: "ИГНОРЩИК", desc: "Вы должны игнорировать сильные аргументы и выступать против темы." },
    { name: "ПРОВОКАТОР", desc: "Ваша задача заставить людей спорить еще ожесточеннее." }, 
    { name: "ПРИНИМАЕТ РЕШЕНИЕ", desc: "После обсуждения Вы решите чья позиция была убедительнее." }, 
    { name: "ЛЖЕЦ", desc: "Вы обязаны врать в дискуссии, искажая факты, вводя игроков в заблуждение." }, 
    { name: "САБОТАЖНИК", desc: "Ваша задача вносить хаос и делать спор максимально запутанным." }, 
    { name: "ЭМОЦИОНАЛ", desc: "Вы должны всех склонять опираться на чувства, а не на логику." },
    { name: "СОМНЕВАЮЩИЙСЯ", desc: "Ваша задача - нервничать, ошибаться и метаться между позициями." }
];

// МАНИПУЛЯЦИИ (29 шт)
const MANIPULATIONS_LIST = [
    { name: "ЛОЖНАЯ ДИЛЕММА", desc: "Либо ты согласен, либо ты против всех." },
    { name: "ДАВЛЕНИЕ БОЛЬШИНСТВА", desc: "Все нормальные люди уже выбрали это." },
    { name: "АПЕЛЛЯЦИЯ К АВТОРИТЕТУ", desc: "Это верно, потому что так говорят ученные." },
    { name: "ПЕРЕХОД НА ЛИЧНОСТЬ", desc: "Твой аргумент слабый, потому что слабый ты." },
    { name: "ПУГАЮЩИЙ ПРОГНОЗ", desc: "Если мы это не примем, это плохо закончится." },
    { name: "ПОДДЕЛЬНАЯ ЗАБОТА", desc: "Мне кажется ты нервничаешь, потому что понимаешь, что ты не прав." },
    { name: "ЭМОЦИОНАЛЬНЫЙ ШАНТАЖ", desc: "Если ты не согласен, тебе, видимо, все равно." },
    { name: "ПОДМЕНА ТЕМЫ", desc: "Это не главное. Давай лучше обсудим другое." },
    { name: "ЛОЖНАЯ УВЕРЕННОСТЬ", desc: "Звучит убедительно, значит, это правда." },
    { name: "ДАВЛЕНИЕ ВРЕМЕНЕМ", desc: "Решай сейчас, потом будет поздно." },
    { name: "СТЫД И ВИНА", desc: "Ты бы так не говорил, если бы был порядочным." },
    { name: "ОБЕСЦЕНИВАНИЕ", desc: "Это слишком мелко, чтобы вообще обсуждать." },
    { name: "ПРЕУВЕЛИЧЕНИЕ ПОСЛЕДСТВИЙ", desc: "Одна ошибка — и всё развалится." },
    { name: "ИЛЛЮЗИЯ ВЫБОРА", desc: "Ты сам решай: хороший вариант или очень хороший." },
    { name: "ПРЕДВАРИТЕЛЬНАЯ ВИНА", desc: "Мы же заранее знали, что ты снова ошибешься." },
    { name: "СОЦИАЛЬНОЕ ДОКАЗАТЕЛЬСТВО", desc: "Все уже поняли, только ты еще сомневаешься." },
    { name: "ПОДМЕНА ПОНЯТИЙ", desc: "Ты против идеи, значит, ты против людей." },
    { name: "ПОЛОВИНЧАТАЯ ПРАВДА", desc: "Я сказал правду, просто не всю." },
    { name: "ИГРА В ЖЕРТВУ", desc: "После всех моих аргументов, меня еще и обвиняют." },
    { name: "ЛОВУШКА ПРИВЫЧКИ", desc: "Мы всегда так делали, значит, так и надо." },
    { name: "ГАЗЛАЙТИНГ", desc: "Этого не было. Ты всё выдумываешь." },
    { name: "ОСКВЕРНЕНИЕ СОБЕСЕДНИКА", desc: "С тобой вообще бесполезно говорить, ты неадекватен." },
    { name: "ЛОЖНАЯ ЗАБОТА", desc: "Я беспокоюсь об этой теме, поэтому ты должен послушать меня." },
    { name: "МИЛЫЙ ШАНТАЖ", desc: "Мы же друзья, послушай меня." },
    { name: "ОБВИНЕНИЕ В НАВЯЗЧИВОСТИ", desc: "Хватит уже спорить, ты просто достал всех своей темой." },
    { name: "ЛОЖНОЕ УТЕШЕНИЕ", desc: "Не переживай, ты просто недостаточно умён, чтобы это понять." },
    { name: "ПЕРЕКЛЮЧЕНИЕ НА ЭМОЦИИ", desc: "Почему ты так агрессивно реагируешь? Ты что, обиделся?" },
    { name: "ЛОВУШКА ПРОТИВОРЕЧИЯ", desc: "Сначала ты сказал одно, теперь другое — тебе нельзя верить." },
    { name: "КЛЕЙМЕНИЕ", desc: "Ты расист/сексист/фашист, если так считаешь." }
];

// ТЕМЫ (47 шт)
const THEMES_LIST = [
    "Аборт — это убийство",
    "Родители не должны запрещать подросткам играть в жестокие видеоигры",
    "Социальные сети не способствуют самоубийствам среди подростков",
    "Частные школы лучше государственных",
    "Учителям нужно позволить носить оружие",
    "Клонирование противоречит этическим нормам",
    "Людям с генетическими заболеваниями нужно запретить рожать детей",
    "Запрет пластиковых пакетов поможет экологии",
    "Все люди должны стать вегетарианцами",
    "Дети не должны пользоваться телефоном",
    "Гей-парам нужно разрешить усыновлять детей",
    "Искусственный интеллект опасен",
    "Эвтаназия должна быть разрешена для всех желающих",
    "Родители не должны иметь право решать судьбу ребёнка",
    "Смертная казнь — эффективное наказание",
    "Людей с тяжёлыми заболеваниями не нужно лечить за счёт государства",
    "Конфиденциальность в интернете должна быть отменена ради безопасности",
    "Бедность — это личный выбор человека",
    "Измена может быть оправдана",
    "Детей нужно оценивать и сравнивать с раннего возраста",
    "Если ты не успешен — значит, ты недостаточно старался",
    "Генетический отбор детей — это норма будущего",
    "Ради большинства можно жертвовать меньшинством",
    "Любовь не нужна для создания семьи",
    "Люди с зависимостями не должны получать помощь бесплатно",
    "Свобода слова должна иметь жёсткие ограничения",
    "Контроль над рождаемостью должен быть обязательным",
    "Мужчина должен оплачивать все расходы на первом свидании",
    "Работа важнее личной жизни",
    "Дружба между бывшими невозможна",
    "Карьера важнее семьи",
    "Человек обязан помогать своим родителям",
    "Соцсети приносят больше вреда, чем пользы",
    "Брак — устаревший институт",
    "Деньги делают человека счастливым",
    "Честность всегда лучше лжи",
    "Репутация важнее правды",
    "Лучше быть умным, чем счастливым",
    "Риск — необходимое условие успеха",
    "Люди не меняются",
    "Первое впечатление всегда верное",
    "Случайностей не бывает",
    "Интуиция важнее логики",
    "Всегда нужно говорить то, что думаешь",
    "Запретить называть детей странными именами",
    "Деструктивные отношения полезны для личного роста",
    "Микрозаймы с высокой процентной ставкой должны быть запрещены"
];

// СОРТИРОВКА ТЕМ ПО АЛФАВИТУ
const SORTED_THEMES = [...THEMES_LIST].sort((a, b) => a.localeCompare(b, 'ru'));

// DOM ЭЛЕМЕНТЫ
const themeTextEl = document.getElementById('currentThemeText');
const themeCardDiv = document.getElementById('themeCard');
const themeArrow = document.getElementById('themeArrow');
const dropdown = document.getElementById('dropdownList');
const roleTitleEl = document.getElementById('roleTitle');
const roleDescEl = document.getElementById('roleDesc');
const manipTitleEl = document.getElementById('manipTitle');
const manipDescEl = document.getElementById('manipDesc');
const refreshBtn = document.getElementById('refreshCardsBtn');
const roleCard = document.getElementById('roleCard');
const manipCard = document.getElementById('manipCard');

let currentTheme = THEMES_LIST[2];
let isDropdownOpen = false;

// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

function updateThemeUI() {
    themeTextEl.innerText = currentTheme;
}

function setRandomTheme() {
    currentTheme = randomItem(THEMES_LIST);
    updateThemeUI();
    closeDropdown();
}

function setExactTheme(themeStr) {
    if (THEMES_LIST.includes(themeStr)) {
        currentTheme = themeStr;
        updateThemeUI();
        closeDropdown();
    }
}

function refreshRolesAndManips() {
    const randomRole = randomItem(ROLES_LIST);
    const randomManip = randomItem(MANIPULATIONS_LIST);
    roleTitleEl.innerText = randomRole.name;
    roleDescEl.innerText = randomRole.desc;
    manipTitleEl.innerText = randomManip.name;
    manipDescEl.innerText = randomManip.desc;
}

function buildDropdown() {
    dropdown.innerHTML = '';
    SORTED_THEMES.forEach(theme => {
        const div = document.createElement('div');
        div.textContent = theme;
        div.addEventListener('click', (e) => {
            e.stopPropagation();
            setExactTheme(theme);
        });
        // Добавляем touch-обработчик для мобилок
        div.addEventListener('touchstart', (e) => {
            e.stopPropagation();
        }, { passive: false });
        dropdown.appendChild(div);
    });
}

function openDropdown() {
    dropdown.classList.add('show');
    isDropdownOpen = true;
}

function closeDropdown() {
    dropdown.classList.remove('show');
    isDropdownOpen = false;
}

function toggleDropdown() {
    if (isDropdownOpen) {
        closeDropdown();
    } else {
        openDropdown();
    }
}

// ========== ОБРАБОТЧИКИ ==========

// Стрелка — открыть/закрыть список
themeArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    toggleDropdown();
});

// Для мобилок — отдельный touch-обработчик на стрелку
themeArrow.addEventListener('touchstart', (e) => {
    e.stopPropagation();
    e.preventDefault();
    toggleDropdown();
}, { passive: false });

// Клик по карте темы (не по стрелке) — случайная тема
themeCardDiv.addEventListener('click', (e) => {
    if (e.target === themeArrow || themeArrow.contains(e.target)) {
        return;
    }
    if (dropdown.contains(e.target)) {
        return;
    }
    setRandomTheme();
});

// Для мобилок — touch-обработчик карты темы
themeCardDiv.addEventListener('touchstart', (e) => {
    if (e.target === themeArrow || themeArrow.contains(e.target)) {
        return;
    }
    if (dropdown.contains(e.target)) {
        return;
    }
    setRandomTheme();
}, { passive: false });

// Закрытие списка при клике вне карточки
document.addEventListener('click', (e) => {
    if (!themeCardDiv.contains(e.target)) {
        closeDropdown();
    }
});

// Для мобилок — закрытие по touch вне карточки
document.addEventListener('touchstart', (e) => {
    if (!themeCardDiv.contains(e.target)) {
        closeDropdown();
    }
}, { passive: false });

// Закрытие по кнопке Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeDropdown();
    }
});

// Разрешаем скролл внутри выпадающего списка — НЕ закрываем его
dropdown.addEventListener('touchstart', (e) => {
    e.stopPropagation();
}, { passive: false });

dropdown.addEventListener('scroll', (e) => {
    e.stopPropagation();
});

// Клик по карте роли
roleCard.addEventListener('click', () => {
    const newRole = randomItem(ROLES_LIST);
    roleTitleEl.innerText = newRole.name;
    roleDescEl.innerText = newRole.desc;
});

// Touch для роли
roleCard.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const newRole = randomItem(ROLES_LIST);
    roleTitleEl.innerText = newRole.name;
    roleDescEl.innerText = newRole.desc;
}, { passive: false });

// Клик по карте манипуляции
manipCard.addEventListener('click', () => {
    const newManip = randomItem(MANIPULATIONS_LIST);
    manipTitleEl.innerText = newManip.name;
    manipDescEl.innerText = newManip.desc;
});

// Touch для манипуляции
manipCard.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const newManip = randomItem(MANIPULATIONS_LIST);
    manipTitleEl.innerText = newManip.name;
    manipDescEl.innerText = newManip.desc;
}, { passive: false });

// Кнопка обновления
refreshBtn.addEventListener('click', () => {
    refreshRolesAndManips();
});

refreshBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    refreshRolesAndManips();
}, { passive: false });

// ========== ПРАВИЛА ==========
const rulesOverlay = document.getElementById('rulesOverlay');
const rulesCloseBtn = document.getElementById('rulesCloseBtn');

function showRules() {
    rulesOverlay.classList.add('show');
}

function hideRules() {
    rulesOverlay.classList.remove('show');
}

if (rulesCloseBtn) {
    rulesCloseBtn.addEventListener('click', hideRules);
    rulesCloseBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        hideRules();
    }, { passive: false });
}

if (rulesOverlay) {
    rulesOverlay.addEventListener('click', (e) => {
        if (e.target === rulesOverlay) {
            hideRules();
        }
    });
    rulesOverlay.addEventListener('touchstart', (e) => {
        if (e.target === rulesOverlay) {
            hideRules();
        }
    }, { passive: false });
}

// ========== ИНИЦИАЛИЗАЦИЯ ==========
function init() {
    buildDropdown();
    updateThemeUI();
    refreshRolesAndManips();
}

setTimeout(() => {
    showRules();
}, 200);

init();
