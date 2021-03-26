# TP1 Javascript

Ce projet Javascript est une implémentation d'un tableau pour dessiner des formes (lignes ou rectangles). Il nous permet de voir les bases du langage à travers le modèle MVC sans utiliser de Framework ou Bibliothèque particulière (Vue, React, ...).

## Lancer le projet

Il vous suffit simplement de cloner le projet dans le repertoire de votre choix :

```
git clone https://github.com/devreeda/tpWeb
```

Puis d'ouvrir le fichier `canvas.html` dans votre navigateur préféré.

## Description du projet

Le projet respecte une architecture de type MVC. Le modèle contient les différentes formes et la classe qui gère le dessin. Le controlleur définit les différentes méthodes d'intéractions qui permettent le dessin et qui seront utilisé dans le fichier `ìnteraction.js`. Enfin, la vue va s'occuper de tout ce qui sera visible à l'écran.

### Possibilités

Il est possible de dessiner des lignes ou des rectangles (au choix). Vous pourrez régler l'épaisseur du trait et sa couleur. De plus, à chaque ajout d'une forme, une liste des formes actuelles s'actualise et elle permet de supprimer la forme choisie.
