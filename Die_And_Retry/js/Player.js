import ObjectGraphique from "./ObjectGraphique.js";
import { drawCircleImmediat } from "./utils.js";   

export default class Player extends ObjectGraphique {
    constructor(x, y) {
        super(x, y, 50, 50);
        this.vitesseX = 0;
        this.vitesseY = 0;
        this.couleur = "pink";
        this.angle = 0;
    }

    /* Monstre */
    draw(ctx) {
        ctx.save();

        // On dessine le joueur centré sur sa position
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h);
        
        ctx.restore();
    }

    move() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
    }
}