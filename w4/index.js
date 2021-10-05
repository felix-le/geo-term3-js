// Fetch Data
const cateArr = [];
const cateList = document.querySelector('#categories');
const main = document.querySelector('#main');
const sectionMealList = document.querySelector('#sectionMealList');
const body = document.querySelector('body');
setTimeout(() => {
  renderCateList();
}, 1000);

// Fetch Categories
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
  .then((res) => res.json())
  .then((category) => cateArr.push(...category.categories));

// Fetch meal of category

async function fetchMeal(cate) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`
    );
    const data = await res.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}
async function fetchMealDetail(mealId) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await res.json();

    return data.meals;
  } catch (err) {
    console.log(err);
  }
}

// Render a category
function renderCate(cate) {
  return `<a class="button is-primary" data-category=${cate.strCategory} data-id=${cate.idCategory}> ${cate.strCategory} </a>`;
}

// Render a category list
function renderCateList(catelogies = cateArr) {
  cateList.innerHTML += `${catelogies.map(renderCate).join('')}`;
}

// Render meal of category

function renderMeal(meal) {
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

async function renderMealDetailPage(mealId) {
  sectionMealList.remove();

  const meal = await fetchMealDetail(mealId);

  body.innerHTML = `<section><div class="container">
    <h1 class="title is-1">${meal[0].strMeal}</h1>
    <div class="content">
      <div class="tags">
        <span class="tag">Dutch</span><span class="tag">Snack</span>
      </div>
    </div>
    <main class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <img
            src=${meal[0].strMealThumb}
            alt="${meal[0].strMeal}"
          />
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <div class="content">
          <h2 class="title is-2">Ingredients</h2>
          <ul>
            <li>250 Grams Fries</li>
            <li>500 Grams Doner Meat</li>
            <li>Topping Garlic sauce</li>
            <li>Topping Hotsauce</li>
            <li>1 Bulb Lettuce</li>
            <li>1 Tomato</li>
            <li>3rd Cucumber</li>
            <li>100 Grams Gouda cheese</li>
          </ul>
          <br />
          <a
            class="button is-large is-fullwidth is-primary"
            href="https://www.youtube.com/watch?v=UIcuiU1kV8I"
            >View Youtube Video</a
          >
        </div>
      </div>
    </main>

    <div class="content">
      <h2 class="title is-2">Directions</h2>
      <div class="block">
        <p>
          Cut the meat into strips. Heat oil in a pan and fry the
          strips for 6 minutes until it's ready.
          <br /><br />Bake the fries until golden brown in a deep
          fryrer. When ready transfer to a backing dish. Make sure the
          fries are spread over the whole dish. <br /><br />Cover the
          fries with a new layer of meat and spread evenly.
          <br /><br />Add a layer of cheese over the meat. You can
          also use grated cheese. When done put in the oven for a few
          minutes until the cheese is melted. <br /><br />Chop the
          lettuce, tomato and cucumber in small pieces and mix
          together. for a basic salad. As extra you can add olives
          jalapenos and a red union. <br /><br />Dived the salad over
          the dish and Serve with garlicsauce and hot sauce
        </p>
      </div>
    </div>
  </div>
  </div></section>`;
}

// Listen to click event on a category
cateList.addEventListener('click', async (e) => {
  if (!e.target.matches('a')) return;

  const cate = e.target.dataset.category;

  // Filter by Category
  const meals = await fetchMeal(cate);

  // Render meals
  main.innerHTML = `${meals.map(renderMeal).join('')}`;

  // Listen to click event on a meal
  main.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;

    const mealId = e.target.dataset.id;
    // // Render meal
    renderMealDetailPage(mealId);
  });
});

// ========================================================
/* // template for view recipe page that you can use to .innerHTML into main tag
            <div class="container">
              <h1 class="title is-1">Kapsalon</h1>
              <div class="content">
                <div class="tags">
                  <span class="tag">Dutch</span><span class="tag">Snack</span>
                </div>
              </div>
              <main class="level">
                <!-- Left side -->
                <div class="level-left">
                  <div class="level-item">
                    <img
                      src="https://www.themealdb.com/images/media/meals/sxysrt1468240488.jpg"
                      alt="Kapsalon"
                    />
                  </div>
                </div>

                <!-- Right side -->
                <div class="level-right">
                  <div class="content">
                    <h2 class="title is-2">Ingredients</h2>
                    <ul>
                      <li>250 Grams Fries</li>
                      <li>500 Grams Doner Meat</li>
                      <li>Topping Garlic sauce</li>
                      <li>Topping Hotsauce</li>
                      <li>1 Bulb Lettuce</li>
                      <li>1 Tomato</li>
                      <li>3rd Cucumber</li>
                      <li>100 Grams Gouda cheese</li>
                    </ul>
                    <br />
                    <a
                      class="button is-large is-fullwidth is-primary"
                      href="https://www.youtube.com/watch?v=UIcuiU1kV8I"
                      >View Youtube Video</a
                    >
                  </div>
                </div>
              </main>

              <div class="content">
                <h2 class="title is-2">Directions</h2>
                <div class="block">
                  <p>
                    Cut the meat into strips. Heat oil in a pan and fry the
                    strips for 6 minutes until it's ready.
                    <br /><br />Bake the fries until golden brown in a deep
                    fryrer. When ready transfer to a backing dish. Make sure the
                    fries are spread over the whole dish. <br /><br />Cover the
                    fries with a new layer of meat and spread evenly.
                    <br /><br />Add a layer of cheese over the meat. You can
                    also use grated cheese. When done put in the oven for a few
                    minutes until the cheese is melted. <br /><br />Chop the
                    lettuce, tomato and cucumber in small pieces and mix
                    together. for a basic salad. As extra you can add olives
                    jalapenos and a red union. <br /><br />Dived the salad over
                    the dish and Serve with garlicsauce and hot sauce
                  </p>
                </div>
              </div>
            </div>
          </div>

*/
