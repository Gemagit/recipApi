

function pintarHome() {
  // Creo contenedor principal, dentro de éste irán sectionOne y sectionTwo
  let contenedor = document.createElement('div');
  contenedor.classList.add('contenedor');

  // Creo sección dos con el título, el menú y el formulario de búsqueda
  let sectionTwo = document.createElement('section');
  sectionTwo.classList.add('sectionTwo');
  let titulo = document.createElement('h1');
  titulo.textContent = 'recipApi';
  sectionTwo.appendChild(titulo);

  // Creo menú listado y enlaces
  let nav = document.createElement('nav');
  let ul = document.createElement('ul');
  let nombresEnlaces = ['Home', 'Recipes', 'About'];
  nombresEnlaces.forEach(nombre => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = '#';
    a.textContent = nombre;
    li.appendChild(a);
    ul.appendChild(li);
  });
  nav.appendChild(ul);
  sectionTwo.appendChild(nav);

  // Creo un contenedor para hacer el filtrado por categoría
  let div = document.createElement('div');
  div.classList.add('search-container');
  nav.appendChild(div);

  let input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Search your favourite food';
  div.appendChild(input);

  let ul2 = document.createElement('ul');
  ul2.classList.add('results-list');
  ul2.id = 'noResults';
  input.appendChild(ul2);


  let p = document.createElement('p');
  p.classList.add('no-results');
  p.textContent = ('No se encontraron resultados');
  ul2.appendChild(p);


  contenedor.appendChild(sectionTwo);


  // Creo sección uno con la imagen
  let sectionOne = document.createElement('section');
  sectionOne.classList.add('sectionOne');
  let imagen = document.createElement('img');
  imagen.src = 'assets/bentojapones.jpg';
  imagen.alt = 'Bento japones';
  sectionOne.appendChild(imagen);
  contenedor.appendChild(sectionOne);


  // Obtener el elemento main y agregar el contenedor a él
  let main = document.querySelector('main');
  main.appendChild(contenedor);
  filterCategory();
}

// Llamo a la función para que se ejecute y pinte la estructura en el DOM porque he llamado dentro también a la otra función.
//pintarHome();







async function pintarRecipes() {
  // Borro el contenido que tenía y pinto uno nuevo
  let main = document.querySelector('main');
  main.innerHTML = '';

  // Llamo a la función pintarHome para que me pinte el navegador y el titulo de mi web
  pintarHome();

  // Obtener la secciónOne
  let sectionOne = document.querySelector('.sectionOne');

  //Esto es solo para trabajar con un ejemplo de receta y no saturar la llamada a la API--> declaro el objeto que contiene el array de objetos meals. Después accederé a cada clave valor para pintar en el DOM
  let data = {
    "meals": [
      {
        "strMeal": "Squash linguine",
        "strCategory": "Vegetarian",
        "strInstructions": "Heat oven to 200C/180C fan/gas 6. Put the squash and garlic on a baking tray and drizzle with the olive oil. Roast for 35-40 mins until soft. Season.\r\nCook the pasta according to pack instructions. Drain, reserving the water. Use a stick blender to whizz the squash with 400ml cooking water. Heat some oil in a frying pan, fry the sage until crisp, then drain on kitchen paper. Tip the pasta and sauce into the pan and warm through. Scatter with sage.",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wxswxy1511452625.jpg",
        "strIngredient1": "Butternut Squash",
        "strIngredient2": "Garlic",
        "strIngredient3": "Olive Oil",
        "strIngredient4": "Linguine Pasta",
        "strIngredient5": "Sage",
        "strIngredient6": "",
        "strIngredient7": "",
        "strIngredient8": "",
        "strIngredient9": "",
        "strIngredient10": "",
        "strIngredient11": "",
        "strIngredient12": "",
        "strIngredient13": "",
        "strIngredient14": "",
        "strIngredient15": "",
        "strIngredient16": "",
        "strIngredient17": "",
        "strIngredient18": "",
        "strIngredient19": "",
        "strIngredient20": "",
        "strMeasure1": "350g",
        "strMeasure2": "3 parts ",
        "strMeasure3": "3 tbs",
        "strMeasure4": "350g",
        "strMeasure5": "Small bunch",
        "strMeasure6": "",
        "strMeasure7": "",
        "strMeasure8": "",
        "strMeasure9": "",
        "strMeasure10": "",
        "strMeasure11": "",
        "strMeasure12": "",
        "strMeasure13": "",
        "strMeasure14": "",
        "strMeasure15": "",
        "strMeasure16": "",
        "strMeasure17": "",
        "strMeasure18": "",
        "strMeasure19": "",
        "strMeasure20": "",
      }
    ]
  };

  /* let response = await fetch('http://www.themealdb.com/api/json/v1/1/random.php');
  let data = await response.json(); */

  // Obtener el array de recetas
  let meals = data.meals;

  // Tomar la primera receta (en este caso, solo hay una)
  let recipe = meals[0];

  // Creo un artículo con la información de la receta
  let article = document.createElement('article');

  // Creo elementos para la receta
  let h2 = document.createElement('h2');
  h2.textContent = recipe.strMeal;
  let h3 = document.createElement('h3');
  h3.textContent = recipe.strCategory;

  let img = document.createElement('img');
  img.src = recipe.strMealThumb;
  img.alt = recipe.strMeal;
  img.classList.add('recipe_img');

  let ul = document.createElement('ul');
  ul.classList.add('recipe_ul');
  for (let i = 1; i <= 20; i++) { // Itero sobre los ingredientes (del 1 al 20)
    let ingredient = recipe['strIngredient' + i];
    if (ingredient) { // Verificar si el ingrediente existe
      let li = document.createElement('li');
      li.textContent = `${ingredient} - ${recipe['strMeasure' + i]}`;
      ul.appendChild(li);
    } else {
      break; // Salir del bucle si no hay más ingredientes
    }
  }

  let ingredientsTitle = document.createElement('ul');
  ingredientsTitle.textContent = 'Ingredients:';

  let p = document.createElement('p');
  p.textContent = recipe.strInstructions;

  let instructionsTitle = document.createElement('p');
  instructionsTitle.textContent = 'Instructions:';

  // Creo botón para cargar la siguiente receta
  let button = document.createElement('button');
  button.textContent = 'Next recipe';
  button.classList.add('next');



  // Agregar las etiquetas al artícle
  article.appendChild(h2);
  article.appendChild(h3);
  article.appendChild(img);
  article.appendChild(ingredientsTitle);
  article.appendChild(ul);
  article.appendChild(instructionsTitle);
  article.appendChild(p);
  article.appendChild(button);

  // Reemplazar la imagen en la sectionOne con el nuevo artícle
  sectionOne.innerHTML = '';
  sectionOne.appendChild(article);


  button.addEventListener("click", function () {
    pintarRecipes();
  })

}

pintarRecipes();







function pintarAbout() {
  // Borro el contenido que tenía y pinto uno nuevo
  let main = document.querySelector('main');
  main.innerHTML = '';

  // Llamo a la función pintarHome para que me pinte el navegador y el titulo de mi web
  pintarHome();

  // Obtener la secciónOne
  let sectionOne = document.querySelector('.sectionOne');

  // Creo un artícle con la info de mi about
  let article = document.createElement('article');

  let h2 = document.createElement('h2');
  h2.textContent = 'About me';
  h2.classList.add('about_h2');


  let img = document.createElement('img');
  img.src = 'assets/chicagusanitos.jpg';
  img.alt = 'Foto de chica comiendo gusanitos';
  img.classList.add('about_img');

  let p = document.createElement('p');
  p.textContent = ('Mi nombre es Gema, y es un placer poder compartir estas recetas con vosotros. He de reconocer que me gusta más comer que cocinar. Pero aún así,cocinar es una de mis grandes pasiones, y si es en buena compañía y con un buen vino, pues mucho mejor. Desde pequeña la cocina ha estado muy presente en mi vida. Mi padre ha tenido varios restaurantes y ha sido un gran cocinero, muy minucioso y siempre creando platos y sabores nuevos. Por otro lado, toda mi familia proviene de Andalucía. Allí hay mucha tradición gastronómica y en los eventos familiares el arroz, un puchero o un buen pescado no podían faltar en el menú. Espero que disfrutéis tanto como yo de esta magnífica colección de recetas.');
  p.classList.add('about_p');

  // Agrego las etiquetas al artícle
  article.appendChild(h2);
  article.appendChild(img);
  article.appendChild(p);

  // Reemplazo la imagen en la sectionOne con el nuevo artícle
  sectionOne.innerHTML = '';
  sectionOne.appendChild(article);

}

//pintarAbout();


//BUSCADOR FILTRADO : strCategory: /posición 0 ->'Beef' 'Chicken' 'Dessert' 'Lamb' 'Miscellaneous' 'Pasta' 'Pork' 'Seafood' 'Side' 'Starter' 'Vegan' 'Vegetarian' 'Breakfast' 'Goat'



//Comprobar lógica que no lo estoy haciendo bien
function filterCategory() {
  const categories = [
    { strCategory: 'Beef' },
    { strCategory: 'Chicken' },
    { strCategory: 'Dessert' },
    { strCategory: 'Lamb' },
    { strCategory: 'Miscellaneous' },
    { strCategory: 'Pasta' },
    { strCategory: 'Pork' },
    { strCategory: 'Seafood' },
    { strCategory: 'Side' },
    { strCategory: 'Starter' },
    { strCategory: 'Vegan' },
    { strCategory: 'Vegetarian' },
    { strCategory: 'Breakfast' },
    { strCategory: 'Goat' },
  ];

  const searchInput = document.getElementById("searchInput");
  const resultList = document.getElementById("resultsList");
  const noResults = document.getElementById("noResults");

  const handleSearch = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCategories = categories.filter((categories) => categories.strCategory.toLowerCase().startsWith(searchTerm));

    resultList.innerHTML = "";

    if (filteredCategories.length === 0) {
      noResults.style.display = "block";
    } else {
      filteredCategories.forEach((category) => {
        const li = document.createElement("li");
        li.textContent = category.strCategory;
        resultList.appendChild(li);
      });
      noResults.style.display = "none";
    }

    if (searchInput.value === "") {
      resultList.innerHTML = "";
    }
  };

  searchInput.addEventListener("input", handleSearch);
}
