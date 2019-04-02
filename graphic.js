function draw() {
    let rectangle = document.getElementById('graphic-container');
    let canvas = rectangle.getContext('2d');
    canvas.rect(25, 10, 25, 10);
    canvas.stroke();
}