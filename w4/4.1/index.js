// Get DOM elements

const cateBtn = document.querySelector('#categories');
const sectionMealList$ = document.querySelector('#sectionMealList');
const homeMain = document.querySelector('#homeMain');

// ==========================
function fetchData(url){
  return rxjs.Observable.create(observer => {
    fetch(url) 
    .then(response => response.json()) // or text() or blob() etc.
    .then(data => {
      observer.next(data );
      observer.complete();
    })
    .catch(err => observer.error(err));
  })
}

const cateTitles$ = fetchData('https://www.themealdb.com/api/json/v1/1/categories.php')

cateTitles$.subscribe(data => 
  cateBtn.innerHTML += data.categories.map(cate => `<a href="#" onclick='${handleCLickCata(cate.idCategory)}' class="button is-success" data-id=${cate.idCategory}>
${cate.strCategory}</a>`).join('')
)
function handleCLickCata(cate){
  console.log(cate);
}
const homeMeal$ = fetchData('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')

homeMeal$.subscribe(data => 
  homeMain.innerHTML += data.meals.map(meal => `<div class="card">
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
</div>`).join(''))