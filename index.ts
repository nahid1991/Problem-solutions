// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Ignore this. This is just a problem solution collection.</h1>`;

const enum Shape {
  Circle,
  Square,
}

console.log(Shape['1']);
