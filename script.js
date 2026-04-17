// РОЛИ (16 шт)
const ROLES_LIST = [
    { name: "АДВОКАТ", desc: "Ты защищаешь тему, используя логику и давление." },
    { name: "ПРОВОКАТОР", desc: "Ты специально вызываешь эмоции, даже если согласен." },
    { name: "СОМНЕВАЮЩИЙСЯ", desc: "Ты колеблешься, но в итоге склоняешь других." },
    { name: "АГРЕССОР", desc: "Давишь оппонента напором и громкими фразами." },
    { name: "МАНИПУЛЯТОР", desc: "Используешь скрытые уловки, чтобы победить." },
    { name: "ЖЕРТВА", desc: "Вызываешь жалость, уходишь от прямых ответов." },
    { name: "РАЦИОНАЛ", desc: "Только факты, но можешь искажать цифры." },
    { name: "ЭМОЦИОНАЛ", desc: "Играешь на чувствах, а не на логике." },
    { name: "ЦИНИК", desc: "Обесцениваешь любые аргументы сарказмом." },
    { name: "МОРАЛИСТ", desc: "Апеллируешь к долгу, совести и стыду." },
    { name: "ТАКТИК", desc: "Переводишь стрелки и меняешь тему в нужный момент." },
    { name: "ДРУЖЕЛЮБНЫЙ", desc: "Завоевываешь доверие, чтобы управлять." },
    { name: "ЭКСПЕРТ", desc: "Ссылаешься на авторитеты и псевдоисследования." },
    { name: "ТОРОПЫГА", desc: "Давишь сроками: 'решай быстро'." },
    { name: "ИГНОРЩИК", desc: "Пропускаешь сильные аргументы мимо ушей." },
    { name: "ПЕРЕВОРАЧИВАТЕЛЬ", desc: "Обвиняешь другого в том, что делаешь сам." }
];

// МАНИПУЛЯЦИИ (20 шт) — ЭТОТ МАССИВ БЫЛ ПОТЕРЯН, ВОЗВРАЩАЮ!
const MANIPULATIONS_LIST = [
    { name: "ЛОЖНАЯ ДИЛЕММА", desc: "Либо ты согласен, либо ты против всех." },
    { name: "ДАВЛЕНИЕ БОЛЬШИНСТВА", desc: "Все нормальные люди уже выбрали это." },
    { name: "АПЕЛЛЯЦИЯ К АВТОРИТЕТУ", desc: "Это верно, потому что так сказал эксперт." },
    { name: "ПЕРЕХОД НА ЛИЧНОСТЬ", desc: "Твой аргумент слабый, потому что слабый ты." },
    { name: "ПУГАЮЩИЙ ПРОГНОЗ", desc: "Если мы это не примем, будет катастрофа." },
    { name: "ВЫДЕРГИВАНИЕ ИЗ КОНТЕКСТА", desc: "Я просто процитировал, а смысл уже не важен." },
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
    { name: "ИГРА В ЖЕРТВУ", desc: "После всего, что я сделал, меня еще и обвиняют." },
    { name: "ЛОВУШКА ПРИВЫЧКИ", desc: "Мы всегда так делали, значит, так и надо." }
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
        dropdown.appendChild(div);
    });
}

function toggleDropdown() {
    dropdown.classList.toggle('show');
}

function closeDropdown() {
    dropdown.classList.remove('show');
}

// ОБРАБОТЧИКИ
themeCardDiv.addEventListener('click', (e) => {
    if (e.target === themeArrow || themeArrow.contains(e.target) || dropdown.contains(e.target)) {
        return;
    }
    setRandomTheme();
});

themeArrow.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
});

document.addEventListener('click', (e) => {
    if (!themeCardDiv.contains(e.target)) {
        closeDropdown();
    }
});

roleCard.addEventListener('click', () => {
    const newRole = randomItem(ROLES_LIST);
    roleTitleEl.innerText = newRole.name;
    roleDescEl.innerText = newRole.desc;
});

manipCard.addEventListener('click', () => {
    const newManip = randomItem(MANIPULATIONS_LIST);
    manipTitleEl.innerText = newManip.name;
    manipDescEl.innerText = newManip.desc;
});

refreshBtn.addEventListener('click', () => {
    refreshRolesAndManips();
});

// ЭЛЕМЕНТЫ ДЛЯ ПРАВИЛ
const rulesOverlay = document.getElementById('rulesOverlay');
const rulesCloseBtn = document.getElementById('rulesCloseBtn');

// ФУНКЦИЯ ОТКРЫТИЯ ПРАВИЛ
function showRules() {
    rulesOverlay.classList.add('show');
}

function hideRules() {
    rulesOverlay.classList.remove('show');
}

// ЗАКРЫТИЕ ПО КРЕСТИКУ
if (rulesCloseBtn) {
    rulesCloseBtn.addEventListener('click', hideRules);
}

// ЗАКРЫТИЕ ПРИ КЛИКЕ НА ТЁМНУЮ ОБЛАСТЬ
if (rulesOverlay) {
    rulesOverlay.addEventListener('click', (e) => {
        if (e.target === rulesOverlay) {
            hideRules();
        }
    });
}

// ИНИЦИАЛИЗАЦИЯ
function init() {
    buildDropdown();
    updateThemeUI();
    refreshRolesAndManips();
}

// ПОКАЗАТЬ ПРАВИЛА ПРИ ЗАГРУЗКЕ
setTimeout(() => {
    showRules();
}, 200);

init();