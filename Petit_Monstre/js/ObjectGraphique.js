export default class ObjectGraphique {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = 0;
        this.y = 0;
        this.vitesseX = 0;
        this.vitesseY = 0;
    }

    draw(ctx) {
        // Méthode à surcharger par les classes filles
    }

    move() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
    }
} 