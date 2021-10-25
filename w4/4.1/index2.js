// Fetch Data
const cateArr = [];
const cateList = document.querySelector('#categories');
const main = document.querySelector('#main');
const sectionMealList = document.querySelector('#sectionMealList');
const body = document.querySelector('body');
let isDetailPage = false;
let targetCategory = '';

// function fectch data
const fetchData = async (url, cb) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    setTimeout(() => {
      cb(data);
    }, 1000);
  } catch (error) {
    console.log('🚀 error', error);
  }
};

// Render Categories
function renderCategories(data) {
  cateList.innerHTML += `${data.categories
    .map(
      (cate) =>
        `<a class="button is-primary" data-category=${cate.strCategory} data-id=${cate.idCategory}> ${cate.strCategory} </a>`
    )
    .join('')}`;
}

// Fetch and Render Categories
fetchData(
  'https://www.themealdb.com/api/json/v1/1/categories.php',
  renderCategories
);

// Render Meal Item

function renderMealCard(meal) {
  return `<div class="card">
  <div class="card-image">
    <figure class="image">
      <img
        src=${meal.strMealThumb}
        alt=${meal.strMeal}
      />
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-5">${meal.strMeal}</p>
      </div>
    </div>

    <div class="content">
      <button class="button is-fullwidth" data-id=${meal.idMeal}>
        View Recipe
      </button>
    </div>
  </div>
</div>`;
}

// Render Meal List
function renderMealList(data) {
  if (isDetailPage) {
    return;
  }
  main.innerHTML = `${data.meals.map((meal) => renderMealCard(meal)).join('')}`;
}

// Listen to click event on a category
cateList.addEventListener('click', async (e) => {
  e.preventDefault();
  if (!e.target.matches('a')) return;

  const cate = e.target.dataset.category;
  if (cate === 'home') {
    isDetailPage = false;
    fetchData(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
      renderMealList
    );
  } else {
    isDetailPage = false;
    fetchData(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`,
      renderMealList
    );
  }
});

// Fetch and Render Meal List
if (!isDetailPage) {
  fetchData(
    'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    renderMealList
  );
}
// ==========================================================
async function renderMealDetailPage(meal) {
  const mealDetail = meal.meals[0];

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = mealDetail[`strIngredient${i}`];

    if (ingredient && ingredient !== '') {
      ingredients.push(ingredient);
    } else {
      break;
    }
  }
  console.log('🚀 ~ f ', ingredients);

  main.innerHTML = `<section><div class="container">
    <h1 class="title is-1">${mealDetail.strMeal}</h1>
    <div class="content">
      <div class="tags">
        ${mealDetail.strTags
          .split(',')
          .map((tag) => `<span class="tag">${tag}</span>`)
          .join('')}
      </div>
    </div>
    <main class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <img
            src=${mealDetail.strMealThumb}
            alt="${mealDetail.strMeal}"
          />
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <div class="content">
          <h2 class="title is-2">Ingredients</h2>
          <ul>
          ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
            
          </ul>
          <br />
          <a
            class="button is-large is-fullwidth is-primary"
            href="${mealDetail.strYoutube}"
            >View Youtube Video</a
          >
        </div>
      </div>
    </main>

    <div class="content">
      <h2 class="title is-2">Directions</h2>
      <div class="block">
        <p>
          ${mealDetail.strInstructions}
        </p>
      </div>
    </div>
  </div>
  </div></section>`;
}
main.addEventListener('click', (e) => {
  if (!e.target.matches('button')) return;

  let mealId = e.target.dataset.id;
  // // Render meal
  renderMealDetail(mealId);
});

// Render Meal Detail
function renderMealDetail(mealId) {
  isDetailPage = true;

  // Fetch meal detail and render
  fetchData(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
    renderMealDetailPage
  );
}
