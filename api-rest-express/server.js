const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware pour traiter le JSON

// Charger les données depuis les fichiers JSON
const loadData = (filename) => {
    if (fs.existsSync(filename)) {
        return JSON.parse(fs.readFileSync(filename, "utf-8"));
    }
    return [];
};

// Sauvegarder les données dans un fichier JSON
const saveData = (filename, data) => {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2), "utf-8");
};

// Définir les fichiers JSON
const productsFile = "products.json";
const ordersFile = "orders.json";

// Initialisation des fichiers s'ils n'existent pas
if (!fs.existsSync(productsFile)) saveData(productsFile, []);
if (!fs.existsSync(ordersFile)) saveData(ordersFile, []);
// GET - Récupérer tous les produits
app.get("/products", (req, res) => {
    const products = loadData(productsFile);
    res.json(products);
});

// POST - Ajouter un nouveau produit
app.post("/products", (req, res) => {
    const products = loadData(productsFile);
    const newProduct = req.body;
    newProduct.id = products.length + 1; // ID automatique
    products.push(newProduct);
    saveData(productsFile, products);
    res.status(201).json(newProduct);
});
// GET - Récupérer toutes les commandes
app.get("/orders", (req, res) => {
    const orders = loadData(ordersFile);
    res.json(orders);
});

// POST - Ajouter une nouvelle commande
app.post("/orders", (req, res) => {
    const orders = loadData(ordersFile);
    const newOrder = req.body;
    newOrder.id = orders.length + 1;
    orders.push(newOrder);
    saveData(ordersFile, orders);
    res.status(201).json(newOrder);
});
app.listen(PORT, () => {
    console.log(`🚀 Serveur en écoute sur http://localhost:${PORT}`);
});