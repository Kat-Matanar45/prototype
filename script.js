const insertion = document.querySelector('#new');

console.log(insertion);

const DomElement = function(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.selectorDivP = function() {
    if (this.selector[0] === ".") {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = "<h1>Я новый DIV</h1>";
        newDiv.classList.add(String(this.selector).slice(1));
        insertion.appendChild(newDiv);
        newDiv.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
    `;
    }
    if (this.selector[0] === "#") {
        const newP = document.createElement("p");
        newP.innerHTML = "Я новый параграф. Ураааааа! Жизнь прекрасна!";
        newP.setAttribute( "id", String(this.selector).slice(1));
        insertion.appendChild(newP);
        newP.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background: ${this.bg};
            font-size: ${this.fontSize}px;
        `;
    }
}

const elem1 = new DomElement(".divo", 150, 500, "red", 25);
const elem2 = new DomElement("#pnm", 140, 500, "green", 40);

elem1.selectorDivP();
elem2.selectorDivP();

console.log(elem1);
console.log(elem2);
