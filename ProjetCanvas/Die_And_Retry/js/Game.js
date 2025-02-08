import Player from "./Player.js";
import Obstacle from "./Obstacle.js";
import ObjetSouris from "./ObjetSouris.js";
import Sortie from "./Sortie.js";
import { rectsOverlap } from "./collisions.js";
import { initListeners } from "./ecouteurs.js";
export default class Game {
    objetsGraphiques = [];

    constructor(canvas) {
        this.canvas = canvas;
        // etat du clavier
        this.inputStates = {
            mouseX: 0,
            mouseY: 0,
        };
        this.niveau = 1;
        this.sortie = null;
    }

    async init(canvas) {
        this.ctx = this.canvas.getContext("2d");

        this.player = new Player(100, 100);
        this.objetsGraphiques.push(this.player);

        // Un objet qui suit la souris, juste pour tester
        this.objetSouris = new ObjetSouris(200, 200, 25, 25, "orange");

        // On ajoute la sortie
        this.sortie = new Sortie(this.canvas.width - 100, this.canvas.height - 100, 50, 50);
        this.objetsGraphiques.push(this.sortie);

        // On initialise le niveau 1
        this.initNiveau(this.niveau);

        // On initialise les écouteurs de touches, souris, etc.
        initListeners(this.inputStates, this.canvas);

        console.log("Game initialisé");
    }

    initNiveau(niveau) {
        // Supprimer tous les obstacles existants
        this.objetsGraphiques = this.objetsGraphiques.filter(obj => !(obj instanceof Obstacle));

        // Réinitialiser la position du joueur
        this.player.x = 100;
        this.player.y = 100;
        
        // Réajouter le player et la sortie
        this.objetsGraphiques.push(this.player);
        this.objetsGraphiques.push(this.sortie);

        switch(niveau) {
            case 1:
                this.objetsGraphiques.push(new Obstacle(800, 100, 1000, 300, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(500, 650, 1000, 350, "#722F37"));
                break;
            case 2:
                this.objetsGraphiques.push(new Obstacle(170, 200, 40, 500, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(300, 470, 300, 40, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(320, 320, 100, 100, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(320, 120, 100, 100, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(460, 240, 40, 500, "#722F37"));

                this.objetsGraphiques.push(new Obstacle(580, 650, 870, 40, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(1000, 600, 40, 1040, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(600, 420, 40, 450, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(680, 100, 450, 40, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(870, 320, 80, 80, "#722F37"));    
                this.objetsGraphiques.push(new Obstacle(720, 320, 80, 80, "#722F37"));  
                this.objetsGraphiques.push(new Obstacle(870, 510, 80, 80, "#722F37"));         
                this.objetsGraphiques.push(new Obstacle(720, 510, 80, 80, "#722F37"));           
                break;
            case 3:
                this.objetsGraphiques.push(new Obstacle(300, 100, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(500, 100, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(700, 100, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(900, 100, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(1100, 100, 120, 120, "#722F37"));

                this.objetsGraphiques.push(new Obstacle(400, 200, 10, 10, "#722F37"));

                this.objetsGraphiques.push(new Obstacle(100, 300, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(300, 300, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(500, 300, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(700, 300, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(900, 300, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(1100, 300, 120, 120, "#722F37"));
                
                this.objetsGraphiques.push(new Obstacle(800, 400, 10, 10, "#722F37"));

                this.objetsGraphiques.push(new Obstacle(100, 500, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(300, 500, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(500, 500, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(700, 500, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(900, 500, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(1100, 500, 120, 120, "#722F37"));

                this.objetsGraphiques.push(new Obstacle(600, 600, 10, 10, "#722F37"));

                this.objetsGraphiques.push(new Obstacle(100, 700, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(300, 700, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(500, 700, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(700, 700, 120, 120, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(900, 700, 120, 120, "#722F37"));
                break;
            case 4:
                this.objetsGraphiques.push(new Obstacle(270, 350, 40, 200, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(320, 250, 120, 40, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(320, 350, 120, 40, "#722F37")); 
                this.objetsGraphiques.push(new Obstacle(320, 450, 120, 40, "#722F37"));

                this.objetsGraphiques.push(new Obstacle(520, 350, 40, 240, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(640, 350, 40, 240, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(550, 250, 160, 40, "#722F37"));

                this.objetsGraphiques.push(new Obstacle(780, 350, 40, 200, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(820, 250, 120, 40, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(820, 450, 120, 40, "#722F37"));
                this.objetsGraphiques.push(new Obstacle(890, 350, 40, 160, "#722F37"));
                
        }

        // S'assurer que le player et la sortie sont toujours présents
        if (!this.objetsGraphiques.includes(this.player)) {
            this.objetsGraphiques.push(this.player);
        }
        if (!this.objetsGraphiques.includes(this.sortie)) {
            this.objetsGraphiques.push(this.sortie);
        }
    }

    start() {
        console.log("Game démarré");

        // On démarre une animation à 60 images par seconde
        requestAnimationFrame(this.mainAnimationLoop.bind(this));
    }

    mainAnimationLoop() {
        // 1 - on efface le canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 2 - on dessine les objets à animer dans le jeu
        // ici on dessine le monstre
        this.drawAllObjects();

        // 3 - On regarde l'état du clavier, manette, souris et on met à jour
        // l'état des objets du jeu en conséquence
        this.update();

        // 4 - on demande au navigateur d'appeler la fonction mainAnimationLoop
        // à nouveau dans 1/60 de seconde
        requestAnimationFrame(this.mainAnimationLoop.bind(this));
    }

    drawAllObjects() {
        // Dessine tous les objets du jeu
        this.objetsGraphiques.forEach(obj => {
            obj.draw(this.ctx);
        });
    }

    update() {
        // Appelée par mainAnimationLoop
        // donc tous les 1/60 de seconde
        
        // Déplacement du joueur. 
        this.movePlayer();

        // on met à jouer la position de objetSouris avec la position de la souris
        // Pour un objet qui "suit" la souris mais avec un temps de retard, voir l'exemple
        // du projet "charQuiTire" dans le dossier COURS
        this.objetSouris.x = this.inputStates.mouseX;
        this.objetSouris.y = this.inputStates.mouseY;

        // On teste si le joueur a atteint la sortie
        this.testCollisionAvecSortie();
    }

    testCollisionAvecSortie() {
        if(rectsOverlap(
            this.player.x - this.player.w/2, 
            this.player.y - this.player.h/2, 
            this.player.w, 
            this.player.h,
            this.sortie.x,
            this.sortie.y,
            this.sortie.w,
            this.sortie.h
        )) {
            console.log("Niveau " + this.niveau + " terminé !");
            this.niveau++;
            this.initNiveau(this.niveau);
        }
    }

    movePlayer() {
        this.player.vitesseX = 0;
        this.player.vitesseY = 0;
        
        if(this.inputStates.ArrowRight) {
            this.player.vitesseX = 3;
        } 
        if(this.inputStates.ArrowLeft) {
            this.player.vitesseX = -3;
        } 

        if(this.inputStates.ArrowUp) {
            this.player.vitesseY = -3;
        } 

        if(this.inputStates.ArrowDown) {
            this.player.vitesseY = 3;
        } 

        this.player.move();

        this.testCollisionsPlayer();
    }

    testCollisionsPlayer() {
        // Teste collision avec les bords du canvas
        this.testCollisionPlayerBordsEcran();

        // Teste collision avec les obstacles
        this.testCollisionPlayerObstacles();
       
    }

    testCollisionPlayerBordsEcran() {
        // Raoppel : le x, y du joueur est en son centre, pas dans le coin en haut à gauche!
        if(this.player.x - this.player.w/2 < 0) {
            // On stoppe le joueur
            this.player.vitesseX = 0;
            // on le remet au point de contaxct
            this.player.x = this.player.w/2;
        }
        if(this.player.x + this.player.w/2 > this.canvas.width) {
            // On stoppe le joueur
            this.player.vitesseX = 0;
            // on le remet au point de contact
            this.player.x = this.canvas.width - this.player.w/2;
        }

        if(this.player.y - this.player.h/2 < 0) {
            this.player.y = this.player.h/2;
            this.player.vitesseY = 0;

        }
       
        if(this.player.y + this.player.h/2 > this.canvas.height) {
            this.player.vitesseY = 0;
            this.player.y = this.canvas.height - this.player.h/2;
        }
    }

    testCollisionPlayerObstacles() {
        this.objetsGraphiques.forEach(obj => {
            if(obj instanceof Obstacle) {
                if(rectsOverlap(
                    this.player.x - this.player.w/2,
                    this.player.y - this.player.h/2,
                    this.player.w,
                    this.player.h,
                    obj.x - obj.w/2,
                    obj.y - obj.h/2,
                    obj.w,
                    obj.h
                )) {
                    // Replace le joueur à sa position initiale en cas de collision
                    this.player.x = 100;
                    this.player.y = 100;
                    this.player.vitesseX = 0;
                    this.player.vitesseY = 0;
                }
            }
        });
    }

}