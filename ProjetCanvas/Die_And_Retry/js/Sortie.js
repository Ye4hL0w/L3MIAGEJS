import ObjectGraphique from "./ObjectGraphique.js";

export default class Sortie extends ObjectGraphique {
    constructor(x, y, w, h) {
        super(x, y, w, h, "green");
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = this.couleur;
        ctx.beginPath();
        ctx.arc(this.x + this.w/2, this.y + this.h/2, this.w/2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}