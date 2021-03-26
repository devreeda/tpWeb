// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
  this.forms = [];
  this.getForms = () => this.forms;
  this.addForms = form => this.forms.push(form);
  this.removeForm = id => {
    arr = [];
    this.forms.map(e => {
      if (e.getIndex() !== id) {
        arr.push(e);
      }
    });
    this.forms = arr;
  };
}

function MyForm(initialX, initialY, finalX, finalY, epaisseur, couleur, index) {
  this.initialX = initialX;
  this.initialY = initialY;
  this.finalX = finalX;
  this.finalY = finalY;
  this.epaisseur = epaisseur;
  this.couleur = couleur;
  this.index = index;

  this.getInitialX = () => this.initialX;
  this.getInitialY = () => this.initialY;
  this.getFinalX = () => this.finalX;
  this.getFinalY = () => this.finalY;
  this.getEpaisseur = () => this.epaisseur;
  this.getCouleur = () => this.couleur;
  this.getIndex = () => this.index;
}

function Line(initialX, initialY, finalX, finalY, epaisseur, couleur, index) {
  MyForm.call(
    this,
    initialX,
    initialY,
    finalX,
    finalY,
    epaisseur,
    couleur,
    index
  );
  this.type = "line";
  this.getType = () => this.type;
}

function Rectangle(
  initialX,
  initialY,
  finalX,
  finalY,
  epaisseur,
  couleur,
  index
) {
  MyForm.call(
    this,
    initialX,
    initialY,
    finalX,
    finalY,
    epaisseur,
    couleur,
    index
  );
  this.type = "rectangle";
  this.getType = () => this.type;
}
