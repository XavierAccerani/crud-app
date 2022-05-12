une app simple qui utilise redux et qui a pour but de permettre de creer afficher modifier et supprimer des elements

pour la partie redux voir app-redux-test

l'app appelle 2 components: Header et ProductList

Header s'occupe de creer les nouveau element qui seront afficher,
il utilise un useState pour stocker les valeur des propriete de l'objet que l'on veut creer. On utilise les Box material UI pour centrer les champs du Header lors de l'affichage

    les champs textfield servent a remplir les données du nouvel element, ils on une propriete "name" qui sert car lors du onChange on recupere l'evenement et on en extrait la target (ici le champs en qustion ) et target.name est le name du champ  ainsi que target.value pour avoir les données remplies dans le champs. la fonction handleCHange met a jour le state newProduct. et sur le onBLur(quand on sort du champs en cliquant a coté par exemple) on attribue un id au nouvel element avec la fonction putId qui change la propriete id du nouvel element s'il est vide (s'il n'en a pas deja un)

    ensuite on clique sur le bouton add product qui trigger la fonction handleSubmit ou on fait un dispatch de addProduct avec comme payload newProduct(le nouvel element que l'on veut créer) pour ajouter l'elemnt a la liste dans le redux  puis on remet les valeurs du nouvel elemnt a des chaine vide pour vider les champs dans l'affichage

ProductList accede au state redux avec useSelector pour recuperer la liste des elements dans le redux. La box sert ici a afficher les card en ligne et a aller a la ligne quand une card va etre afficher hors ecran. dans la Box on fait un map sur la liste des elements du redux en utilisant comme key pour chaque element de la liste l'id de chaque element

ProductCard represente 1 element de la liste il y en a donc autant que d'elements. il y a un useState editProduct qui sert a alterner entre le mode normal ou edition de la carte pour affficher ou modiifer des données. dans la card il y a les champs concernant les informations de l'elemnt de la liste aisin que 2 boutons un pour passer entre le mode edition et normal avec le toggleEdit qui est une fonction qui fait passer le state editProduct entre true et false. si on est en mode edition le bouton save product remplace Edit Product et sur son click on fait repasser le editProduct a false. Le bouton Delete Product sert a effacer la card et retirer l'element du redux avec la fonction handleDelete qui fait le dispatch.

le component ShowOrEditProductInfo sert a afficher des champs typography ou des inputs textfield en fonction de si editProduct (edit ici) est true ou false. sur les textfield le onChange recupere l'event e et le passe a handleChange qui extrait le nom du champs et sa valeur et fait un setEditedProduct (un useState de la product card) pour modifier les valeur de l'element qui est afficher
