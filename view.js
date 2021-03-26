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

Drawing.prototype.updateShapeList = function() {
  var ul = document.getElementById("shapeList");
  //ul.innerHTML = `<ul class="list-unstyled" id="shapeList"></ul>`;
  var li = document.createElement("li");

  if (this.getForms()[this.getForms().length - 1].getType() === "line") {
    li.innerHTML = `<div id="d${this.getForms()[
      this.getForms().length - 1
    ].getIndex()}">Line <button type="button" class="btn btn-default">
      <span class="glyphicon glyphicon-remove-sign"></span>
  </button></div>`;
  } else {
    li.innerHTML = `<div id="d${this.getForms()[
      this.getForms().length - 1
    ].getIndex()}">Rectangle <button type="button" class="btn btn-default">
      <span class="glyphicon glyphicon-remove-sign"></span>
  </button></div>`;
  }

  ul.appendChild(li);

  /*
  document
    .getElementById(`delete-btn${id}`)
    .addEventListener("click", function() {
      //this.removeForms()
      console.log(id);
    });*/
};
