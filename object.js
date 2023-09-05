//En JavaScript, un objet est une structure de données utilisée pour stocker et organiser des valeurs associées. 
//Les objets en JavaScript sont des collections de paires clé-valeur, où chaque clé (également appelée propriété)
// est associée à une valeur. Les objets sont un élément fondamental de JavaScript et sont utilisés pour représenter 
//et manipuler des données de diverses manières.

//Un objet en JavaScript est défini en utilisant des accolades {} et des propriétés et des méthodes peuvent être ajoutées
// à l'intérieur de ces accolades. Voici un exemple simple d'un objet JavaScript :

const personne = {
    nom: "Jean",
    âge: 30,
    profession: "Développeur",
    saluer: function() {
      console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.âge} ans.`);
    }
  };
  