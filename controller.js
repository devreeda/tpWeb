var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
  this.ctx = ctx;
  this.drawing = drawing;
  this.canvas = canvas;
  this.currEditingMode = editingMode.line;
  this.currLineWidth = 5;
  this.currColour = "#000000";
  this.currentShape = 0;

  // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

  new DnD(canvas, this);

  // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
  this.onInteractionStart = dnd => {
    if (document.getElementById("butRect").checked) {
      this.currentShape = new Rectangle(
        dnd.initialX,
        dnd.initialY,
        dnd.finalX,
        dnd.finalY,
        document.getElementById("spinnerWidth").value,
        document.getElementById("colour").value
      );
    } else {
      this.currentShape = new Line(
        dnd.initialX,
        dnd.initialY,
        dnd.finalX,
        dnd.finalY,
        document.getElementById("spinnerWidth").value,
        document.getElementById("colour").value
      );
    }
  };

  this.onInteractionUpdate = dnd => {
    if (this.currentShape !== 0) {
      this.currentShape.clear(this.ctx, this.canvas);
      this.currentShape.finalX = dnd.finalX;
      this.currentShape.finalY = dnd.finalY;
      drawing.paint(this.ctx, this.canvas);
      this.currentShape.paint(this.ctx, this.canvas);
    }
  };

  this.onInteractionEnd = dnd => {
    this.currentShape.finalX = dnd.finalX;
    this.currentShape.finalY = dnd.finalY;
    this.currentShape.paint(this.ctx);
    drawing.addForms(this.currentShape);
    console.log(drawing.getForms());
    drawing.paint(this.ctx, this.canvas);
  };
}
