# API REST avec Express.js et Client Dart

## Description

Ce projet consiste en la création d'une API REST avec *Express.js* et d'un client développé en *Dart* pour interagir avec cette API. L'API permet de gérer des produits et des commandes, avec des données stockées en fichiers JSON.

### Fonctionnalités de l'API REST
- *Produits* :
  - Récupérer tous les produits
  - Ajouter un nouveau produit
- *Commandes* :
  - Récupérer toutes les commandes
  - Ajouter une nouvelle commande

### Fonctionnalités du client Dart
- *Produits* :
  - Récupérer la liste des produits
  - Ajouter un nouveau produit
- *Commandes* :
  - Récupérer la liste des commandes
  - Ajouter une nouvelle commande

## Prérequis

### Backend - API REST (Node.js avec Express.js)
- *Node.js* installé sur ta machine
- *npm* pour gérer les dépendances

### Frontend - Client Dart
- *Dart SDK* installé
- *http package* pour les requêtes HTTP

## Installation

### 1. Mise en place du backend (API REST avec Express.js)

1. Créer un dossier pour le projet et initialiser un projet Node.js :

    bash
    mkdir api-rest-express
    cd api-rest-express
    npm init -y
    

2. Installer les dépendances nécessaires :

    bash
    npm install express fs
    

3. Créer un fichier server.js avec le code de l'API REST.

4. Lancer le serveur :

    bash
    node server.js
    

### 2. Mise en place du frontend (Client Dart)

1. Créer un dossier pour le projet Dart et initialiser le projet :

    bash
    mkdir client-dart
    cd client-dart
    dart create .
    

2. Installer le package http :

    bash
    dart pub add http
    

3. Créer un fichier bin/client_dart.dart et ajouter le code Dart pour interagir avec l'API.

4. Lancer le client Dart :

    bash
    dart run bin/client_dart.dart
    

### 3. Partager le projet sur GitHub

1. Initialiser un dépôt Git dans ton projet :

    bash
    git init
    git add .
    git commit -m "🚀 API REST + Client Dart"
    

2. Créer un dépôt sur GitHub, puis lier ton projet local au dépôt distant :

    bash
    git remote add origin https://github.com/ton-user/nom-du-repo.git
    git branch -M main
    git push -u origin main
    

## Utilisation

1. Assure-toi que le serveur Node.js est en cours d'exécution (en lançant node server.js).
2. Exécute le client Dart avec dart run bin/client_dart.dart pour tester les fonctionnalités.
3. Tu devrais voir s'afficher la liste des produits et des commandes dans la console du client Dart.
