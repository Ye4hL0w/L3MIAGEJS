import ObjectGraphique from "./ObjectGraphique.js";

export default class Obstacle extends ObjectGraphique {
    constructor(x, y, w, h, couleur) {
        super(x, y, w, h, couleur);
    }

    draw(ctx) {
        ctx.save();
        
        // Draw the main obstacle
        ctx.fillStyle = this.couleur;
        ctx.fillRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h);

        ctx.restore();
    }
}