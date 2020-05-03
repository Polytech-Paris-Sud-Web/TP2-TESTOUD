# TP2-Romain TESTOUD -- Article Application

## Getting Started
Design uses sweetalert2 and ClarityDesign.
The installation of these libraries is essential because my application uses components specific to these libraries.

### To install 

Clarity Design : 

`npm install @clr/ui --save`
`ng add @clr/angular`

SweetAlert 2 : 

`npm install sweetalert2`

Then, you have to import Swal :

`import Swal from 'sweetalert2'`

## QUESTIONS

### Pourquoi les migrations sont-elles intéressantes ?

1 - Permet de corriger les vulnérabilités des versions précédentes
2 - Permet d'obtenir des nouvelles fonctionnalités

L'objectif principal d'une migration est d'aller vers une "meilleure" application, pour généralement évoluer sur un technologie plus récente.

#### Remarque sur le TP

Je trouve qu'il aurait été intéressant d'ajouter un componenent ArticleDetails afin de pouvoir faire (comme j'ai fais pour la liste d'articles) une vérification sur "Est ce que la requete est chargée ? Si oui on affiche le résultat, sinon on attend qu'elle se termine".



