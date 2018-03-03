let shapeColor = document.querySelector('#shape-color');
let shapeX = document.querySelector('#shape-x');
let shapeY = document.querySelector('#shape-y');
let shapeSave = document.querySelector('#shape-save');

let rectWidth = document.querySelector('#width');
let rectHeight = document.querySelector('#height');
let rectSave = document.querySelector('#rect-save');
let rectOut = document.querySelector('#rect-out');

let circRadius = document.querySelector('#radius');
let circleSave = document.querySelector('#circle-save');
let outCircle = document.querySelector('#circle-out');

class Shape {
    constructor(color, initX, initY){
        this.color = 'blue';
        this.initX = 10;
        this.initY = 20;
    }
    getColor() {
        console.log(`Новый цвет класса родителя: ${this.color}`);
    }
    setColor(val) {
        this.color = val;
        console.log(`Цвет класса родителя изменен`);
    }
    getCoords() {
        console.log(`Координата X: ${this.initX}, Координата Y: ${this.initY}`);
    }
    moveTo(newX, newY) {
        this.initX = newX;
        this.initY = newY;
        console.log(`Координаты заданы.`);
    }
}

let shape = new Shape(); 

  ShapeMethod = () => {
    shape.setColor(shapeColor.value);
    shape.moveTo(shapeX.value, shapeY.value);
    shape.getColor();
    shape.getCoords()
};

shapeSave.addEventListener("click", ShapeMethod);
class Rectangle extends Shape {
    constructor(){
        super();
        this.initX = 100;
        this.initY = 200;
        this.color = 'red';
    }
    setWidth(newWidth){
        this.initWidth = newWidth;
    }
    setHeight(newHeight) {
        this.initHeight = newHeight;
    }
    getDims(){
        console.log(`Высота прямоугольника: ${this.initWidth}, ширина: ${this.initHeight}`);
    }
    draw() {
        rectOut.innerText =
        `Drawing a Rectangle at:
        (x: ${this.initX}, y: ${this.initY})
        With dimentions:
        width: ${this.initWidth}
        height: ${this.initHeight}
        Filled with color: ${this.color}
        `;
    }
}

let rectangle = new Rectangle();
MethodRectangle = () =>{
    rectangle.setWidth(rectWidth.value);
    rectangle.setHeight(rectHeight.value);
    rectangle.getDims();
    rectangle.draw();
}

rectSave.addEventListener('click', MethodRectangle);
class Circle extends Shape {
    constructor(){
        super();
        this.initX = 50;
        this.initY = 50;
        this.color = 'green';
    }
    getRadius(){
        console.log(`Радиус круга установлен: ${this.initRadius}`);
    }
    setRadius(val){
        this.initRadius = val;
    }
    draw(){
        outCircle.innerText =
        `Drawing a Circle at:
        (x: ${this.initX}, y: ${this.initY})
        With dimentions:
        radius: ${this.initRadius}
        Filled with color: ${this.color}
        `;
    }
}

let circle = new Circle();
MethodCircle = () =>{
    circle.setRadius(circRadius.value);
    circle.draw();
    circle.getRadius();
}

circleSave.addEventListener('click', MethodCircle);

// export default 7;