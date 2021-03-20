// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
  this.forms = [];
  this.getForms = () => this.forms;
  this.addForms = form => this.forms.push(form);
}

function MyForm(initialX, initialY, finalX, finalY, epaisseur, couleur) {
  this.initialX = initialX;
  this.initialY = initialY;
  this.finalX = finalX;
  this.finalY = finalY;
  this.epaisseur = epaisseur;
  this.couleur = couleur;

  this.getInitialX = () => this.initialX;
  this.getInitialY = () => this.initialY;
  this.getFinalX = () => this.finalX;
  this.getFinalY = () => this.finalY;
  this.getEpaisseur = () => this.epaisseur;
  this.getCouleur = () => this.couleur;
}

function Line(initialX, initialY, finalX, finalY, epaisseur, couleur) {
  MyForm.call(this, initialX, initialY, finalX, finalY, epaisseur, couleur);
}

function Rectangle(initialX, initialY, finalX, finalY, epaisseur, couleur) {
  MyForm.call(this, initialX, initialY, finalX, finalY, epaisseur, couleur);
}
