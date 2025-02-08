import ObjectGraphique from "./ObjectGraphique.js";
import { drawCircleImmediat } from "./utils.js";   

class PetitMonstre extends ObjectGraphique {
    constructor(canvas) {
        super(canvas);
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = 100;
        this.y = 100;
        this.vitesseX = 0;
        this.vitesseY = 0;
        
        // Initialisation des touches
        this.inputStates = {
            ArrowLeft: false,
            ArrowRight: false,
            ArrowUp: false,
            ArrowDown: false
        };
        
        // Ajout des écouteurs d'événements
        this.initListeners();
    }

    initListeners() {
        window.addEventListener('keydown', (e) => {
            if (this.inputStates.hasOwnProperty(e.key)) {
                this.inputStates[e.key] = true;
            }
        });

        window.addEventListener('keyup', (e) => {
            if (this.inputStates.hasOwnProperty(e.key)) {
                this.inputStates[e.key] = false;
            }
        });
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        // ctx.scale(0.5, 0.5);

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

        ctx.restore();
    }

    move() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
    }

    drawBras(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(100, 50, 15, 10);
        ctx.fillRect(-15, 50, 15, 10);
    }

    drawJambes(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(30, 100, 10, 90);
        ctx.fillRect(60, 100, 10, 90);
    }

    drawCorneGauche(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(0, -10, 10, 20);
    }

    drawCorneDroite(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(90, -10, 10, 20);
    }

    drawQueue(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(100, 100, 10, 20);
        ctx.fillRect(100, 110, 20, 10);
        ctx.fillRect(120, 110, 10, 20);
    }
}

window.onload = () => {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const monstre = new PetitMonstre(canvas);
    monstre.draw(ctx);
};
