const insertion = document.querySelector('#new');

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.selectorDivP = function() {
    let newElement;
    if (this.selector[0] === ".") {
        newElement = document.createElement("div");
        newElement.innerHTML = "<h1>Я новый DIV</h1>";
        newElement.classList.add(String(this.selector).slice(1));
    }
    if (this.selector[0] === "#") {
        newElement = document.createElement("p");
        newElement.innerHTML = "Я новый параграф. Ураааааа! Жизнь прекрасна!";
        newElement.setAttribute("id", String(this.selector).slice(1));
    }
    insertion.appendChild(newElement);
    newElement.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
    `;
    return newElement;
}

const elem1 = new DomElement(".divo", 150, 500, "red", 25);
const elem2 = new DomElement("#pnm", 140, 500, "green", 40);
const elem3 = new DomElement("#kub", 100, 100, "blue");

elem1.selectorDivP();
elem2.selectorDivP();
const kubElement = elem3.selectorDivP();

document.addEventListener("DOMContentLoaded", () => {
    alert("DOM готов!");
  });

kubElement.style.position = 'absolute';
kubElement.style.color = '#fff';
kubElement.style.top = '400px'; 
kubElement.style.left = '10px';

document.addEventListener('keydown', (e) => {
    let n = 10;
    let top = parseInt(kubElement.style.top) || 0;
    let left = parseInt(kubElement.style.left) || 0;

    if (e.code === 'ArrowUp') {
        kubElement.style.top = (top - n) + 'px';
    }
    if (e.code === 'ArrowDown') {
        kubElement.style.top = (top + n) + 'px';
    }
    if (e.code === 'ArrowLeft') {
        kubElement.style.left = (left - n) + 'px';
    }
    if (e.code === 'ArrowRight') {
        kubElement.style.left = (left + n) + 'px';
    }
  });
