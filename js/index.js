//Variables Fundamentales
const appNombre = "H-Task-AI";
const appCreator = "Jota Spector";
const appLogo = "logo.svg";
const appYear = "2023";

 
 
 
 
 
 
 
 //DOM
 const  title = document.querySelector('title');
const header = document.querySelector('.contenedor-header');
const contenedorApp = document.querySelector('.contenedor-app');
const bodyFooter = document.querySelector('aside');

 //Elementos javascript
const elementoHeader = document.createElement('header');


elementoHeader.innerHTML = `

<h1>${appNombre}</h1>
<img src="${appLogo}">


`;
let elementoIA = document.createElement('body')
elementoIA.classList.add('body-2');
elementoIA.innerHTML = `

 <iframe
        src="https://gptbeaver.com/chat/h-task-ai"
        width="100%"
        height="200%"
        style="border:0; border-radius: 4px"
    />

`;
elementoHeader.classList.add('elemento-header');
header.append(elementoHeader);
contenedorApp.append(elementoIA);
 //Declaraciones y funciones
 title.textContent = appNombre;
 let contenedorFooter = document.createElement('body');
 contenedorFooter.innerHTML = `
 <footer>
 <h1>${appCreator + " " + appYear}</h1>
 </footer>
 `;
 bodyFooter.append(contenedorFooter);