// ДАННЫЕ: Список категорий с подкатегориями, slug, иконками и изображениями
const categories = [
  { 
    id: 1, 
    name: "Транспорт", 
    slug: "transport",
    icon: "bi bi-car-front-fill",
    image: "E:/platform/images/transport.png",
    subcategories: [
      { name: "Легковые авто", image: "E:/platform/images/cars.png", icon: "bi bi-car-front" },
      { name: "Мототранспорт", image: "E:/platform/images/motorcycles.jpg", icon: "bi bi-bicycle" },
      { name: "Коммерческий транспорт", image: "E:/platform/images/commercial.jpg", icon: "bi bi-truck" },
      { name: "Прицепы и контейнеры", image: "E:/platform/images/trailers.jpg", icon: "bi bi-box" },
      { name: "Запчасти", image: "E:/platform/images/parts.jpg", icon: "bi bi-gear" },
      { name: "Услуги", image: "E:/platform/images/transport-services.jpg", icon: "bi bi-wrench" }
    ]
  },
  { 
    id: 2, 
    name: "Недвижимость", 
    slug: "real-estate",
    icon: "bi bi-house-fill",
    image: "E:/platform/images/estate.jpeg",
    subcategories: [
      { name: "Продажа", image: "E:/platform/images/sale.jpg", icon: "bi bi-shop" },
      { name: "Аренда (долгосрочная)", image: "E:/platform/images/long-term-rental.jpg", icon: "bi bi-house-door" },
      { name: "Аренда (посуточная)", image: "E:/platform/images/short-term-rental.jpg", icon: "bi bi-calendar-day" }
    ]
  },
  { 
    id: 3, 
    name: "Услуги", 
    slug: "services",
    icon: "bi bi-tools",
    image: "E:/platform/images/services.png",
    subcategories: [
      { name: "Услуги сантехника", image: "E:/platform/images/plumbing.jpg", icon: "bi bi-droplet" },
      { name: "Услуги электрика", image: "E:/platform/images/electrician.jpg", icon: "bi bi-lightning" },
      { name: "Услуги ремонта бытовой техники и электроники", image: "E:/platform/images/repair.jpg", icon: "bi bi-tools" },
      { name: "Курсы обучения", image: "E:/platform/images/courses.jpg", icon: "bi bi-book" },
      { name: "Дизайнеры, реклама, полиграфия", image: "E:/platform/images/design.jpg", icon: "bi bi-brush" },
      { name: "Перевозки и аренда транспорта", image: "E:/platform/images/transport-rental.jpg", icon: "bi bi-truck" }
    ]
  },
  { 
    id: 4, 
    name: "Бытовая техника и электроника", 
    slug: "electronics",
    icon: "bi bi-laptop",
    image: "E:/platform/images/electronics.jpg",
    subcategories: [
      { name: "TV", image: "E:/platform/images/tv.jpg", icon: "bi bi-tv" },
      { name: "Техника для дома и кухни", image: "E:/platform/images/appliances.jpg", icon: "bi bi-house-gear" },
      { name: "Видеонаблюдение и камеры", image: "E:/platform/images/cctv.jpg", icon: "bi bi-camera" },
      { name: "Климатическая техника", image: "E:/platform/images/climate.jpg", icon: "bi bi-fan" },
      { name: "Обогреватели", image: "E:/platform/images/heaters.jpg", icon: "bi bi-fire" }
    ]
  },
  { 
    id: 5, 
    name: "Телефоны и связь", 
    slug: "phones",
    icon: "bi bi-phone",
    image: "E:/platform/images/phones.png",
    subcategories: [
      { name: "Мобильные телефоны", image: "E:/platform/images/mobile-phones.jpg", icon: "bi bi-phone" },
      { name: "Аксессуары", image: "E:/platform/images/accessories.jpg", icon: "bi bi-headphones" },
      { name: "Ремонт и сервис телефонов", image: "E:/platform/images/phone-repair.jpg", icon: "bi bi-tools" }
    ]
  },
  { 
    id: 6, 
    name: "Компьютеры и оргтехника", 
    slug: "computers",
    icon: "bi bi-display",
    image: "E:/platform/images/computers.png",
    subcategories: [
      { name: "Ноутбуки", image: "E:/platform/images/laptops.jpg", icon: "bi bi-laptop" },
      { name: "ПК", image: "E:/platform/images/pcs.jpg", icon: "bi bi-cpu" },
      { name: "Приставки", image: "E:/platform/images/consoles.jpg", icon: "bi bi-controller" },
      { name: "Планшеты и букридеры", image: "E:/platform/images/tablets.jpg", icon: "bi bi-tablet" },
      { name: "Принтеры и сканеры", image: "E:/platform/images/printers.jpg", icon: "bi bi-printer" },
      { name: "Мониторы и проекторы", image: "E:/platform/images/monitors.jpg", icon: "bi bi-display" },
      { name: "Информационное и сетевое оборудование", image: "E:/platform/images/network.jpg", icon: "bi bi-router" }
    ]
  },
  { 
    id: 7, 
    name: "Вакансии", 
    slug: "jobs",
    icon: "bi bi-briefcase-fill",
    image: "E:/platform/images/jobs.png",
    subcategories: [
      { name: "Административный персонал", image: "E:/platform/images/admin.jpg", icon: "bi bi-person-workspace" },
      { name: "HR и кадры", image: "E:/platform/images/hr.jpg", icon: "bi bi-person-lines-fill" },
      { name: "IT, телеком, компьютеры", image: "E:/platform/images/it.jpg", icon: "bi bi-code-slash" },
      { name: "Банки, страхование, лизинг", image: "E:/platform/images/banking.jpg", icon: "bi bi-bank" },
      { name: "Бухгалтерия и финансы", image: "E:/platform/images/finance.jpg", icon: "bi bi-calculator" },
      { name: "Домашний персонал и обслуживание", image: "E:/platform/images/household.jpg", icon: "bi bi-house-check" }
    ]
  },
  { 
    id: 8, 
    name: "Мебель", 
    slug: "furniture",
    icon: "bi bi-chair",
    image: "E:/platform/images/furniture.png",
    subcategories: [
      { name: "Мебель для спальни", image: "E:/platform/images/bedroom.jpg", icon: "bi bi-bed" },
      { name: "Офисная мебель", image: "E:/platform/images/office-furniture.jpg", icon: "bi bi-briefcase" },
      { name: "Мебель для гостиной", image: "E:/platform/images/living-room.jpg", icon: "bi bi-sofa" },
      { name: "Мебель для прихожей", image: "E:/platform/images/hallway.jpg", icon: "bi bi-door-open" },
      { name: "Мебель на заказ", image: "E:/platform/images/custom-furniture.jpg", icon: "bi bi-hammer" }
    ]
  }
];

// ДАННЫЕ: Список объявлений с привязкой к категориям через slug
const listingsData = [
  { id: 1, title: "Смартфон Samsung Galaxy S23", price: "1500 сом", location: "Душанбе", isNew: true, categorySlug: "phones" },
  { id: 2, title: "Ноутбук Dell XPS 13", price: "2000 сом", location: "Худжанд", isNew: false, categorySlug: "computers" },
  { id: 3, title: "Диван угловой", price: "800 сом", location: "Бохтар", isNew: false, categorySlug: "furniture" },
  { id: 4, title: "Toyota Camry 2020", price: "25000 сом", location: "Душанбе", isNew: false, categorySlug: "transport" },
  { id: 5, title: "Квартира в новостройке на продажу", price: "50000 сом", location: "Куляб", isNew: true, categorySlug: "real-estate" },
  { id: 6, title: "Услуги электрика", price: "100 сом/час", location: "Душанбе", isNew: false, categorySlug: "services" },
  { id: 7, title: "Телевизор LG 55 дюймов", price: "1200 сом", location: "Худжанд", isNew: true, categorySlug: "electronics" },
  { id: 8, title: "Вакансия: Программист", price: "3000 сом/мес", location: "Душанбе", isNew: true, categorySlug: "jobs" },
  { id: 9, title: "Квартира в аренду (долгосрочная)", price: "500 сом/мес", location: "Душанбе", isNew: false, categorySlug: "real-estate" },
  { id: 10, title: "Квартира в аренду (посуточная)", price: "50 сом/день", location: "Худжанд", isNew: true, categorySlug: "real-estate" }
];