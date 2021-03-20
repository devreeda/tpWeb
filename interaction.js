// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.initialX = 0;
  this.initialY = 0;
  this.finalX = 0;
  this.finalY = 0;
  this.isDragging = false;

  this.getInitialX = function() {
    return this.initialX;
  }.bind(this);

  this.getInitialY = function() {
    return this.initialY;
  }.bind(this);
  this.getFinalX = function() {
    return this.finalX;
  }.bind(this);
  this.getFinalY = function() {
    return this.finalY;
  }.bind(this);
  // Developper les 3 fonctions gérant les événements

  this.drag = function(evt) {
    const mousePosition = getMousePosition(canvas, evt);
    this.initialX = mousePosition.x;
    this.initialY = mousePosition.y;
    this.isDragging = true;
    interactor.onInteractionStart(this);
    /*
    console.log("drag : ");
    console.log("initialX : " + this.initialX);
    console.log("initialY : " + this.initialY);
    console.log("finalX : " + this.finalX);
    console.log("finalY : " + this.finalY);
    */
  }.bind(this);

  this.move = function(evt) {
    const mousePosition = getMousePosition(canvas, evt);
    if (this.isDragging) {
      this.finalX = mousePosition.x;
      this.finalY = mousePosition.y;
      interactor.onInteractionUpdate(this);
      /*
      console.log("move : ");
      console.log("initialX : " + this.initialX);
      console.log("initialY : " + this.initialY);
      console.log("finalX : " + this.finalX);
      console.log("finalY : " + this.finalY);
      */
    }
  }.bind(this);

  this.drop = function(evt) {
    if (this.isDragging) {
      const mousePosition = getMousePosition(canvas, evt);
      this.finalX = mousePosition.x;
      this.finalY = mousePosition.y;
      this.isDragging = false;
      interactor.onInteractionEnd(this);
      /*
      console.log("drop : ");
      console.log("initialX : " + this.initialX);
      console.log("initialY : " + this.initialY);
      console.log("finalX : " + this.finalX);
      console.log("finalY : " + this.finalY);
      */
    }
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener("mousedown", this.drag, false);
  canvas.addEventListener("mousemove", this.move, false);
  canvas.addEventListener("mouseup", this.drop, false);
}

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}
