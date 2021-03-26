var editingMode = { rect: 0, line: 1 };
let id = 0;

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
        document.getElementById("colour").value,
        id
      );
    } else {
      this.currentShape = new Line(
        dnd.initialX,
        dnd.initialY,
        dnd.finalX,
        dnd.finalY,
        document.getElementById("spinnerWidth").value,
        document.getElementById("colour").value,
        id
      );
    }
    id++;
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
    drawing.paint(this.ctx, this.canvas);
    /*
    drawing.updateShapeList();
    for (let i = 0; i < drawing.getForms().length; i++) {
      document
        .getElementById(`delete-btn${i}`)
        .addEventListener("click", () => {
          drawing.removeForm(i);
        });
    }*/

    //REMOVE ELEMENT
    lastIndex = drawing.getForms()[drawing.getForms().length - 1].getIndex();

    drawing.updateShapeList();
    document.getElementById(`d${lastIndex}`).onclick = event => {
      currentIndex = event.currentTarget.id.substring(1);
      drawing.removeForm(parseInt(currentIndex));
      document.getElementById(`d${parseInt(currentIndex)}`).remove();
      drawing.paint(this.ctx, this.canvas);
    };
  };
}
