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

        // on déplace le systeme de coordonnées pour placer
        // le monstre en x, y. Tous les ordres de dessin
        // dans cette fonction seront par rapport à ce repère
        // translaté
        ctx.translate(this.x, this.y);
        //ctx.rotate(0.3);
        ctx.scale(0.5, 0.5);

        // tete du monstre
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 100, 100);

        /* Les yeux */
        drawCircleImmediat(ctx, 30, 30, 10, "red");
        drawCircleImmediat(ctx, 70, 30, 10, "red");
        drawCircleImmediat(ctx, 30, 30, 4, "black");
        drawCircleImmediat(ctx, 70, 30, 4, "black");

        /* La bouche */
        ctx.fillStyle = "red";
        ctx.fillRect(30, 60, 40, 5);
        ctx.fillStyle = "red";
        ctx.fillRect(30, 65, 28, 5);

        /* Les cornes */
        this.drawCorneGauche(ctx);
        this.drawCorneDroite(ctx);

        /* Les jambes */
        this.drawJambes(ctx);

        /* Les bras */
        this.drawBras(ctx);

        /* La queue */
        this.drawQueue(ctx);

        // restore
        ctx.restore();
    }

    /* Les bras */
    drawBras(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(100, 50, 15, 10);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 50, -15, 10);
    }

    /* Les jambes */
    drawJambes(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(30, 100, 10, 90);
        ctx.fillStyle = "black";
        ctx.fillRect(60, 100, 10, 90);
    }

    /* La corne gauche */
    drawCorneGauche(ctx) {
        ctx.save();

        ctx.translate(0, 0);

        ctx.fillStyle = "red";
        ctx.fillRect(0, -10, 10, 20);

        ctx.restore();
    }

    /* La corne droite */
    drawCorneDroite(ctx) {
        ctx.save();

        ctx.translate(0, 0);

        ctx.fillStyle = "red";
        ctx.fillRect(90, -10, 10, 20);

        ctx.restore();
    }

    /* La queue */
    drawQueue(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(100, 100, 10, 20);
        ctx.fillStyle = "black";
        ctx.fillRect(100, 110, 20, 10);
        ctx.fillStyle = "black";
        ctx.fillRect(120, 110, 10, 20);
    }

    move() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
    }
}