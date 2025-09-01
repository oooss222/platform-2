// Функция: Остановка GIF-анимации логотипа после одного цикла
function stopLogoAnimation() {
  const logo = document.getElementById('logo-image');
  if (logo) {
    // Ждем 5 секунд (длительность GIF-анимации, замените на точное значение, если известно)
    setTimeout(() => {
      logo.src = 'E:/platform/Logo/Logo-static.jpg'; // Заменяем GIF на статичное изображение
    }, 5000);
  }
}

// Функция: Заполнение сетки категорий на главной странице
function populateCategoriesGrid() {
  const grid = document.getElementById('categories-grid');
  grid.innerHTML = categories.map(cat => `
    <a href="${cat.slug}.html" class="category-card">
      <i class="${cat.icon} category-icon"></i>
      <img src="${cat.image}" alt="${cat.name}">
      <span>${cat.name}</span>
    </a>
  `).join('');
}

// Функция: Заполнение сетки подкатегорий на странице категории
function populateSubcategoriesGrid(categorySlug) {
  const grid = document.getElementById('subcategories-grid');
  const category = categories.find(cat => cat.slug === categorySlug);
  if (grid && category) {
    grid.innerHTML = category.subcategories.map(sub => `
      <div class="subcategory-card">
        <i class="${sub.icon} subcategory-icon"></i>
        <img src="${sub.image}" alt="${sub.name}">
        <span>${sub.name}</span>
      </div>
    `).join('');
  }
}

// Функция: Заполнение сетки объявлений
function populateListingsGrid(categorySlug = null) {
  const grid = document.getElementById('listings-grid');
  const filteredListings = categorySlug 
    ? listingsData.filter(item => item.categorySlug === categorySlug)
    : listingsData;
  
  grid.innerHTML = filteredListings.length > 0 ? filteredListings.map(item => `
    <a href="listing.html?id=${item.id}" class="listing-card">
      <div class="listing-image">
        <i class="bi bi-image"></i>
      </div>
      <div class="listing-body">
        <h5>${item.title}</h5>
        <p class="price">${item.price}</p>
        <p class="location">${item.location}</p>
        ${item.isNew ? '<span class="badge">Новое</span>' : ''}
      </div>
    </a>
  `).join('') : '<p class="text-muted">Нет объявлений в этой категории.</p>';
}

// Функция: Заполнение страницы объявления
function populateListingDetails() {
  const params = new URLSearchParams(window.location.search);
  const listingId = parseInt(params.get('id'));
  const listing = listingsData.find(item => item.id === listingId);
  const details = document.getElementById('listing-details');
  
  if (listing && details) {
    details.innerHTML = `
      <h2>${listing.title}</h2>
      <div class="listing-details">
        <div class="listing-details-image">
          <i class="bi bi-image"></i>
        </div>
        <div class="listing-details-content">
          <p class="price">${listing.price}</p>
          <p class="location">${listing.location}</p>
          ${listing.isNew ? '<span class="badge">Новое</span>' : ''}
          <p class="text-muted">Описание: ${listing.title} в отличном состоянии.</p>
          <button class="btn primary-btn">Связаться с продавцом</button>
        </div>
      </div>
    `;
  } else {
    details.innerHTML = '<h2>Объявление не найдено</h2>';
  }
}