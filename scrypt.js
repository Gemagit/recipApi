/* URL API filtrado por categoría('http://www.themealdb.com/api/json/v1/1/categories.php')*/



/* async function solicitarApiRecipes() {
  try {
      const response = await fetch('http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
      if (!response.ok) {
          throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      console.log(data);
     
    
  } catch (error) {
      console.error('Error:', error);
  }
}

solicitarApiRecipes(); */





function pintarHome() {
  // Crear contenedor principal, dentro de éste irán sectionOne y sectionTwo
  let contenedor = document.createElement('div');
  contenedor.classList.add('contenedor');

  // Crear sección uno con la imagen
  let sectionOne = document.createElement('section');
  sectionOne.classList.add('sectionOne');
  let imagen = document.createElement('img');
  imagen.src = 'assets/bentojapones.jpg';
  imagen.alt = 'Bento japones';
  sectionOne.appendChild(imagen);
  contenedor.appendChild(sectionOne);


  // Crear sección dos con el título, el menú y el formulario de búsqueda
  let sectionTwo = document.createElement('section');
  sectionTwo.classList.add('sectionTwo');
  let titulo = document.createElement('h1');
  titulo.textContent = 'recipApi';
  sectionTwo.appendChild(titulo);

  // Crear menú listado y enlaces
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

  // Crear búsqueda por categoría
  let formulario = document.createElement('form');
  let inputBusqueda = document.createElement('input');
  inputBusqueda.type = 'text';
  inputBusqueda.placeholder = 'Your favourite food';
  let botonBusqueda = document.createElement('button');
  botonBusqueda.type = 'submit';
  botonBusqueda.textContent = 'Buscar';
  formulario.appendChild(inputBusqueda);
  formulario.appendChild(botonBusqueda);
  sectionTwo.appendChild(formulario);

  contenedor.appendChild(sectionTwo);


  // Obtener el elemento main y agregar el contenedor a él
  let main = document.querySelector('main');
  main.appendChild(contenedor);
}

// Llamar a la función para que se ejecute y pinte la estructura en el DOM
pintarHome();








/*  function pintarRecipes() {
 
      let borrarContenido= sectionOne.innerHTML = '';

      
}

pintarRecipes() */



