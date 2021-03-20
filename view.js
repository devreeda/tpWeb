// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx, canvas) {
  ctx.lineWidth = this.getEpaisseur();
  ctx.strokeStyle = this.getCouleur();
  ctx.beginPath();
  //console.log(`initialX : ${this.getInitialX()}`);
  //console.log(`initialY : ${this.getInitialY()}`);
  //console.log(`finalX : ${this.getFinalX()}`);
  //console.log(`finalY : ${this.getFinalY()}`);
  ctx.rect(
    this.getInitialX(),
    this.getInitialY(),
    this.getFinalX() - this.getInitialX(),
    this.getFinalY() - this.getInitialY()
  );
  ctx.stroke();
};

Line.prototype.paint = function(ctx, canvas) {
  ctx.lineWidth = this.getEpaisseur();
  ctx.strokeStyle = this.getCouleur();
  ctx.beginPath();
  ctx.moveTo(this.getInitialX(), this.getInitialY());
  ctx.lineTo(this.getFinalX(), this.getFinalY());
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx, canvas) {
  //console.log(this.getForms())
  ctx.fillStyle = "#F0F0F0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getForms().forEach(eltDuTableau => {
    //now fill the canvas
    eltDuTableau.paint(ctx);
  });
};

MyForm.prototype.clear = function(ctx, canvas) {
  canvas.getContext("2d").fillStyle = "#F0F0F0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

Rectangle.prototype.clear = function(ctx, canvas) {
  canvas.getContext("2d").fillStyle = "#F0F0F0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

Line.prototype.clear = function(ctx, canvas) {
  canvas.getContext("2d").fillStyle = "#F0F0F0";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

Drawing.prototype.updateShapeList = function(shape) {
  this.addForms(shape);
};
