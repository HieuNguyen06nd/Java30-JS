const searchBtn = document.getElementById("searchBtn");
const randomBtn = document.getElementById("randomBtn");
const input = document.getElementById("searchInput");
const list = document.getElementById("meal-list");
const detail = document.getElementById("meal-detail");
const title = document.getElementById("search-title");

searchBtn.addEventListener("click", () => {
  const keyword = input.value.trim();
  if (keyword) {
    fetchMeals(keyword);
  }
});

randomBtn.addEventListener("click", getRandomMeal);

async function fetchMeals(keyword) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);
  const data = await res.json();

  title.textContent = `Kết quả tìm kiếm cho từ khóa '${keyword}':`;
  detail.innerHTML = "";
  list.innerHTML = "";

  if (data.meals) {
    data.meals.forEach(meal => {
      const div = document.createElement("div");
      div.className = "meal";
      div.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <span>${meal.strMeal}</span>
      `;
      div.addEventListener("click", () => fetchMealDetail(meal.idMeal));
      list.appendChild(div);
    });
  } else {
    list.innerHTML = "<p>Không tìm thấy kết quả nào.</p>";
  }
}

async function fetchMealDetail(id) {
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  const meal = data.meals[0];

  list.innerHTML = "";
  title.textContent = meal.strMeal;
  detail.innerHTML = `
    <img src="${meal.strMealThumb}" />
    <h3>${meal.strMeal}</h3>
    <p>${meal.strCategory ? meal.strCategory : ""}</p>
    <p>${meal.strArea ? meal.strArea : ""}</p>
    <p>${meal.strInstructions}</p>
    <h4>Ingredients</h4>
    <div class="tags">
      ${getIngredients(meal).map(ing => `<div class="tag">${ing}</div>`).join("")}
    </div>
  `;
}

function getIngredients(meal) {
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) {
      ingredients.push(`${ing.trim()} - ${measure ? measure.trim() : ""}`);
    }
  }
  return ingredients;
}

async function getRandomMeal() {
  input.value = "";
  title.textContent = "Món ăn ngẫu nhiên:";
  list.innerHTML = "";
  detail.innerHTML = "";

  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
  const data = await res.json();
  const meal = data.meals[0];
  fetchMealDetail(meal.idMeal);
}
