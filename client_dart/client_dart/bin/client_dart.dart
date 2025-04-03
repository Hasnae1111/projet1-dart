import 'dart:convert';
import 'package:http/http.dart' as http;

const String apiUrl = "http://localhost:3000";

// Fonction pour récupérer les produits
Future<void> getProducts() async {
  final response = await http.get(Uri.parse('$apiUrl/products'));
  if (response.statusCode == 200) {
    List<dynamic> products = jsonDecode(response.body);
    print("📦 Produits : $products");
  } else {
    print("Erreur lors de la récupération des produits.");
  }
}

// Fonction pour ajouter un produit
Future<void> addProduct(String name, double price) async {
  final response = await http.post(
    Uri.parse('$apiUrl/products'),
    headers: {"Content-Type": "application/json"},
    body: jsonEncode({"name": name, "price": price}),
  );

  if (response.statusCode == 201) {
    print("✅ Produit ajouté !");
  } else {
    print("❌ Erreur lors de l'ajout du produit.");
  }
}

// Fonction pour récupérer les commandes
Future<void> getOrders() async {
  final response = await http.get(Uri.parse('$apiUrl/orders'));
  if (response.statusCode == 200) {
    List<dynamic> orders = jsonDecode(response.body);
    print("📜 Commandes : $orders");
  } else {
    print("Erreur lors de la récupération des commandes.");
  }
}

// Fonction pour ajouter une commande
Future<void> addOrder(int productId, int quantity) async {
  final response = await http.post(
    Uri.parse('$apiUrl/orders'),
    headers: {"Content-Type": "application/json"},
    body: jsonEncode({"productId": productId, "quantity": quantity}),
  );

  if (response.statusCode == 201) {
    print("✅ Commande ajoutée !");
  } else {
    print("❌ Erreur lors de l'ajout de la commande.");
  }
}

void main() async {
  await getProducts();
  await addProduct("Laptop", 999.99);
  await getOrders();
  await addOrder(1, 2);
}