import "./sass/main.scss";
import axios from "axios";

const refs = {
  form: document.querySelector("#form"),
  input: document.querySelector("#search"),
  container: document.querySelector(".container"),
};

// const hendlerSubmit = (e) => {
//   clear();
//   e.preventDefault();
//   const value = refs.input.value;
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
//     .then((response) => response.json())
//     .then((coctails) => renderColection(coctails.drinks))
//     .catch((err) => console.log(err));
// };

// ===axios

const hendlerSubmit = (e) => {
  e.preventDefault();
  clear();

  const value = refs.input.value;
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
    .then((result) => renderCollection(result.data.drinks))
    .catch((err) => console.log(err));
};

// ===axios end

function createItem({ strDrinkThumb, strDrink }) {
  const article = `
<article>
<img src="${strDrinkThumb}" alt= "${strDrink} width='700" height='700'>
<p class="coctail-text">${strDrink}</p>
</article>
`;

  refs.container.insertAdjacentHTML("beforeend", article);
}

function renderCollection(arr) {
  arr.forEach((el) => createItem(el));
}

function clear() {
  refs.input.innerHTML = "";
  refs.container.innerHTML = "";
}

refs.form.addEventListener("submit", hendlerSubmit);
