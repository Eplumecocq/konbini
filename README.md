Petit test pour konbini

Simple barre de recherche pour retrouver des articles sur konbini.

### Partie réflexion

1. Pour permettre à un utilisateur de choisir directement un article depuis la barre de recherche, j'ai implémenté un autosuggestion; une requête est envoyée dès que la valeur de l'input est modifiée.

2. Afin d'éviter de marteler l'API, j'ai utilisé une fonction de debounce sur la value de l'input; cette valeur n'est modifiée qu'après un certains delay écoulé, et la requête n'est envoyée qu'après enregistrement de la nouvelle valeur.
