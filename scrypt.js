

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
    a.classList.add('nombreEnlace'); // Añadir la clase nombreEnlace
    a.setAttribute('data-funcion', nombre.toLowerCase()); // Establecer el nombre de la función a ejecutar
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

  let noResults = document.createElement('p');
  noResults.classList.add('no-results');
  noResults.textContent = ('No se encontraron resultados');
  noResults.style.display = 'none';
  div.appendChild(noResults);

  /* let searchInput = input;
 
let handleSearch = () => {
    let searchTerm = searchInput.value.toLowerCase();
    let filteredCategories = meals.filter((meal) => meal.strCategory.toLowerCase().startsWith(searchTerm));
 
    ul2.innerHTML = "";
 
    if (filteredCategories.length === 0) {
      noResults.style.display = "block";
    } else {
      filteredCategories.forEach((meal) => {
        const li = document.createElement("li");
        li.textContent = meal.strCategory;
        ul2.appendChild(li);
      });
      noResults.style.display = "none";
    }
  };
 
  sectionOne.innerHTML = '';
 
  searchInput.addEventListener("input", handleSearch);
*/
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

  linksNav();

}

pintarHome();


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

function linksNav() {
  //Accedo a todos los elementos con la clase nombreEnlace
  let enlaces = document.querySelectorAll('.nombreEnlace');

  // Iterar sobre cada enlace y agregar un event listener
  enlaces.forEach(enlace => {
    enlace.addEventListener('click', function (event) {
      event.preventDefault(); // Evitar que el enlace navegue a otra página

      // Obtener el nombre de la función a ejecutar desde el atributo data-funcion
      let nombreFuncion = this.getAttribute('data-funcion');

      // Ejecutar la función correspondiente según el nombre del enlace
      switch (nombreFuncion) {
        case 'home':
          // Borro el contenido que tenía y pinto uno nuevo
          let main = document.querySelector('main');
          main.innerHTML = '';
          pintarHome();
          break;
        case 'recipes':
          pintarRecipes();
          break;
        case 'about':
          pintarAbout();
          break;
        default:
          console.error('No funciona.');
      }
    });
  });
}


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
  let data = await response.json();  */

  let meals = data.meals;


  let recipe = meals[0];


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



  // Engancho las etiquetas al artícle
  article.appendChild(h2);
  article.appendChild(h3);
  article.appendChild(img);
  article.appendChild(ingredientsTitle);
  article.appendChild(ul);
  article.appendChild(instructionsTitle);
  article.appendChild(p);
  article.appendChild(button);

  // Reemplazola imagen en la sectionOne con el nuevo artícle
  sectionOne.innerHTML = '';
  sectionOne.appendChild(article);


  button.addEventListener("click", function () {
    pintarRecipes();
  })

}

//pintarRecipes();


/* async function filterCategory() {

  // Borro el contenido que tenía y pinto uno nuevo
  let main = document.querySelector('main');
  main.innerHTML = '';

  // Llamo a la función pintarHome para que me pinte el navegador y el titulo de mi web
  pintarHome();

  // Obtener la secciónOne
  let sectionOne = document.querySelector('.sectionOne');

  let response = await fetch('http://www.themealdb.com/api/json/v1/1/categories.php');
  let data = await response.json();

  let meals = data.categories;

  let div = document.createElement('div');
  div.classList.add('search-container');
  document.body.appendChild(div);

  let input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Search your favourite food';
  div.appendChild(input);

  let ul2 = document.createElement('ul');
  ul2.classList.add('results-list');
  ul2.id = 'resultsList';
  div.appendChild(ul2);

  let noResults = document.createElement('p');
  noResults.classList.add('no-results');
  noResults.textContent = ('No se encontraron resultados');
  noResults.style.display = 'none';
  div.appendChild(noResults);

  const searchInput = input;

  const handleSearch = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCategories = meals.filter((meal) => meal.strCategory.toLowerCase().startsWith(searchTerm));

    ul2.innerHTML = "";

    if (filteredCategories.length === 0) {
      noResults.style.display = "block";
    } else {
      filteredCategories.forEach((meal) => {
        const li = document.createElement("li");
        li.textContent = meal.strCategory;
        ul2.appendChild(li);
      });
      noResults.style.display = "none";
    }
  };

  sectionOne.innerHTML = '';

  searchInput.addEventListener("input", handleSearch);
} */

//filterCategory();



function oneRecipeCategory() {
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
        "strMeal": "Spicy Arrabiata Penne",
        "strCategory": "Vegetarian",
        "strInstructions": "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
        "strIngredient1": "penne rigate",
        "strIngredient2": "olive oil",
        "strIngredient3": "garlic",
        "strIngredient4": "chopped tomatoes",
        "strIngredient5": "red chile flakes",
        "strIngredient6": "italian seasoning",
        "strIngredient7": "basil",
        "strIngredient8": "Parmigiano-Reggiano",
        "strIngredient9": "",
        "strIngredient10": "",
        "strIngredient11": "",
        "strIngredient12": "",
        "strIngredient13": "",
        "strIngredient14": "",
        "strIngredient15": "",
        "strIngredient16": null,
        "strIngredient17": null,
        "strIngredient18": null,
        "strIngredient19": null,
        "strIngredient20": null,
        "strMeasure1": "1 pound",
        "strMeasure2": "1/4 cup",
        "strMeasure3": "3 cloves",
        "strMeasure4": "1 tin ",
        "strMeasure5": "1/2 teaspoon",
        "strMeasure6": "1/2 teaspoon",
        "strMeasure7": "6 leaves",
        "strMeasure8": "spinkling",
        "strMeasure9": "",
        "strMeasure10": "",
        "strMeasure11": "",
        "strMeasure12": "",
        "strMeasure13": "",
        "strMeasure14": "",
        "strMeasure15": "",
        "strMeasure16": null,
        "strMeasure17": null,
        "strMeasure18": null,
        "strMeasure19": null,
        "strMeasure20": null,
      }
    ]
  };

  /* let response = await fetch('http://www.themealdb.com/api/json/v1/1/random.php');
  let data = await response.json(); */

  let meals = data.meals;

  // Tomar la primera receta (en este caso, solo hay una)
  let recipe = meals[0];


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



  // Agrego las etiquetas al artícle
  article.appendChild(h2);
  article.appendChild(h3);
  article.appendChild(img);
  article.appendChild(ingredientsTitle);
  article.appendChild(ul);
  article.appendChild(instructionsTitle);
  article.appendChild(p);
  article.appendChild(button);

  // Reemplo la imagen en la sectionOne con el nuevo artícle
  sectionOne.innerHTML = '';
  sectionOne.appendChild(article);


  button.addEventListener("click", function () {
    oneRecipeCategory();
  })

}



async function pintarRecipesByCategory(category) {
  // Borro el contenido que tenía y pinto uno nuevo
  let main = document.querySelector('main');
  main.innerHTML = '';

  pintarHome();
  // Obtener la secciónOne
  let sectionOne = document.querySelector('.sectionOne');
  sectionOne.classList.add('category_section');
  sectionOne.innerHTML= '';

  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  let data = await response.json();


  let meals = data.meals;

  let recipesToShow = meals.slice(0, 6);

  recipesToShow.forEach(recipe => {
      let article = document.createElement('article');
      article.classList.add('category_article');

      // Creo un div para agrupar el h2, h3 y la imagen
      let recipeInfo = document.createElement('div');
      recipeInfo.classList.add('category_div');

      // Creo elementos para la receta
      let h2 = document.createElement('h2');
      h2.textContent = recipe.strMeal;
      h2.classList.add('category_h2');
      let h3 = document.createElement('h3');
      h3.textContent = recipe.strCategory;
      h3.classList.add('category_h3');

      let img = document.createElement('img');
      img.src = recipe.strMealThumb;
      img.alt = recipe.strMeal;
      img.classList.add('category_img');

  

      // Engancho las etiquetas al article
      article.appendChild(h2);
      article.appendChild(h3);
      article.appendChild(img);
      

      // Engancho el div de información de receta al article
      article.appendChild(recipeInfo);


      // Engancho el artícle al contenedor de resultados
      sectionOne.appendChild(article);

  
  });
}
//pintarRecipesByCategory('Vegetarian');
//pintarRecipesByCategory('Pasta');
//pintarRecipesByCategory('Beef');
//pintarRecipesByCategory('Chicken');
pintarRecipesByCategory('Dessert');





