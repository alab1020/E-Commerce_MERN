# E-Commerce MERN Stack

Ein modernes, vollständig funktionales E-Commerce-Projekt, das mit dem **MERN Stack** (MongoDB, Express, React, Node.js) entwickelt wurde. Das Projekt bietet eine sichere Benutzerauthentifizierung, Produktverwaltung und ein komplettes Warenkorb- und Checkout-System.

## 📋 Inhaltsverzeichnis

- [Features](#-features)
- [Tech-Stack](#-tech-stack)
- [Projektstruktur](#-projektstruktur)
- [Voraussetzungen](#-voraussetzungen)
- [Installation & Setup](#-installation--setup)
- [Konfiguration](#-konfiguration)
- [API-Dokumentation](#-api-dokumentation)
- [Frontend-Seiten](#-frontend-seiten)
- [Lizenz](#-lizenz)

## ✨ Features

### Authentifizierung & Benutzer
- ✅ Benutzerregistrierung mit verschlüsseltem Passwort (bcrypt)
- ✅ Benutzer-Login mit JWT-Token-Authentifizierung
- ✅ Sichere Token-basierte Sessions (1 Stunde Gültigkeitsdauer)
- ✅ Passwort-Hashing und Validierung

### Produkte
- ✅ Produktkatalog mit Bildern und Preisen
- ✅ Lagerverwaltung (Stock-System)
- ✅ Produkt-Seeding beim Start der Anwendung
- ✅ Produktfilterung und -durchsuche

### Warenkorb & Checkout
- ✅ Warenkorb-Management (Add, Update, Remove)
- ✅ Bestandsverwaltung während des Checkout
- ✅ Checkout-Prozess mit Bestellbestätigung
- ✅ Persistent Cart mit Context API

### Sicherheit
- ✅ JWT-basierte Authentifizierung
- ✅ Protected Routes für authentifizierte Benutzer
- ✅ CORS-Konfiguration für Frontend-Backend-Kommunikation
- ✅ Umgebungsvariablen für sensible Daten

## 🛠️ Tech-Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Datenbank**: MongoDB mit Mongoose 9.2.4
- **Authentifizierung**: JWT (jsonwebtoken 9.0.3)
- **Sicherheit**: bcrypt 6.0.0 für Passwort-Hashing
- **CORS**: cors 2.8.6
- **Sprache**: TypeScript 5.9.3
- **Entwicklung**: Nodemon 3.1.14, ts-node

### Frontend
- **Framework**: React 19.2.4 mit React DOM
- **Build Tool**: Vite 8.0.0
- **Routing**: React Router DOM 7.13.1
- **UI-Library**: Material-UI 7.3.9
- **Styling**: Emotion (Styled Components)
- **Sprache**: TypeScript 5.9.3
- **Entwicklung**: ESLint 9.39.4

## 📁 Projektstruktur

```
E-Commerce_MERN/
├── Backend/
│   ├── src/
│   │   ├── index.ts                 # Express Server & Konfiguration
│   │   ├── middlewares/
│   │   │   └── validateJWT.ts       # JWT-Validierungs-Middleware
│   │   ├── models/
│   │   │   ├── userModel.ts         # Benutzer-Schema
│   │   │   ├── productModel.ts      # Produkt-Schema
│   │   │   ├── cartModel.ts         # Warenkorb-Schema
│   │   │   └── orderModel.ts        # Bestellungs-Schema
│   │   ├── routes/
│   │   │   ├── userRoute.ts         # Authentifizierungs-Endpoints
│   │   │   ├── productRoute.ts      # Produkt-Endpoints
│   │   │   └── cartRoute.ts         # Warenkorb-Endpoints
│   │   └── services/
│   │       ├── userService.ts       # Benutzer-Logik & JWT-Generation
│   │       ├── productService.ts    # Produkt-Logik & Seeding
│   │       └── cartService.ts       # Warenkorb-Logik
│   ├── package.json
│   ├── tsconfig.json
│   ├── nodemon.json
│   └── .env
│
├── Frontend/
│   ├── src/
│   │   ├── App.tsx                  # Haupt-App-Komponente
│   │   ├── main.tsx                 # React Entry Point
│   │   ├── theme.ts                 # Material-UI Theme Konfiguration
│   │   ├── components/
│   │   │   ├── Navbar.tsx           # Navigationsbar
│   │   │   ├── ProductCard.tsx      # Produkt-Display-Komponente
│   │   │   └── ProtectedRoute.tsx   # Route-Schutz für authentifizierte Nutzer
│   │   ├── pages/
│   │   │   ├── HomePage.tsx         # Hauptseite mit Produktkatalog
│   │   │   ├── LoginPage.tsx        # Login-Seite
│   │   │   ├── registerPage.tsx     # Registrierungs-Seite
│   │   │   ├── CartPage.tsx         # Warenkorb-Übersicht
│   │   │   └── CheckoutPage.tsx     # Checkout-Prozess
│   │   ├── context/
│   │   │   ├── Auth/
│   │   │   │   ├── AuthContext.ts   # Auth-Context Definition
│   │   │   │   └── AuthProvider.tsx # Auth-Context Provider
│   │   │   └── Cart/
│   │   │       ├── CartContext.tsx  # Cart-Context Definition
│   │   │       └── CartProvider.tsx # Cart-Context Provider
│   │   ├── constants/
│   │   │   └── baseUrl.ts           # API Base URL
│   │   └── types/
│   │       ├── CartItem.tsx         # CartItem-Typ-Definition
│   │       └── Product.ts           # Product-Typ-Definition
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── index.html
│
└── README.md (dieses File)
```

## 📋 Voraussetzungen

Vor der Installation stelle sicher, dass folgende Software installiert ist:

- **Node.js** (Version 18 oder höher)
- **npm** oder **yarn** (Paketmanager)
- **MongoDB** (lokal oder Atlas Cloud)
- **Git**

## 🚀 Installation & Setup

### 1. Repository klonen

```bash
git clone https://github.com/dein-username/E-Commerce_MERN.git
cd E-Commerce_MERN
```

### 2. Backend Setup

```bash
# In das Backend-Verzeichnis wechseln
cd Backend

# Abhängigkeiten installieren
npm install

# .env Datei erstellen und konfigurieren (siehe nächster Abschnitt)
# Datei: Backend/.env
```

**Backend Abhängigkeiten installieren:**
```bash
npm install
```

**Backend im Entwicklungsmodus starten:**
```bash
npm run dev
```

Der Backend-Server läuft dann auf: `http://localhost:3001`

### 3. Frontend Setup

```bash
# In einem neuen Terminal zum Frontend-Verzeichnis wechseln
cd Frontend

# Abhängigkeiten installieren
npm install

# Frontend im Entwicklungsmodus starten
npm run dev
```

Das Frontend läuft dann typischerweise auf: `http://localhost:5173`

## ⚙️ Konfiguration

### Backend Umgebungsvariablen

Erstelle eine `.env` Datei im `Backend`-Verzeichnis:

```env
# MongoDB Verbindung
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# JWT Secret für Token-Signierung (verwende einen starken, zufälligen String)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Port (optional, Standard: 3001)
PORT=3001
```

**Sicherheitshinweis**: Der `JWT_SECRET` sollte in der Produktion ein starker, zufälliger String sein. Verwende niemals Standardwerte!

### Frontend Umgebungsvariablen

Die Backend-API-URL ist in der Datei [Frontend/src/constants/baseUrl.ts](Frontend/src/constants/baseUrl.ts) konfiguriert.

## 🔌 API-Dokumentation

### Basis-URL
```
http://localhost:3001
```

### Authentifizierung (User-Endpoints)
**Route**: `/user`

#### Registrierung
```
POST /user/register
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}

Antwort (201):
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": "1h"
}
```

#### Login
```
POST /user/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Antwort (200):
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": "1h"
}
```

### Produkte (Product-Endpoints)
**Route**: `/product`

#### Alle Produkte abrufen
```
GET /product

Antwort (200):
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Laptop Pro",
    "image": "https://example.com/laptop.jpg",
    "price": 999.99,
    "stock": 15
  },
  ...
]
```

#### Ein Produkt abrufen
```
GET /product/:id

Antwort (200):
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Laptop Pro",
  "image": "https://example.com/laptop.jpg",
  "price": 999.99,
  "stock": 15
}
```

### Warenkorb (Cart-Endpoints)
**Route**: `/cart`
**Authentifizierung**: Erforderlich (JWT-Token in Header)

#### Warenkorb abrufen
```
GET /cart
Headers: Authorization: Bearer <JWT-TOKEN>

Antwort (200):
{
  "items": [
    {
      "productId": "507f1f77bcf86cd799439011",
      "quantity": 2
    }
  ],
  "total": 1999.98
}
```

#### Artikel zum Warenkorb hinzufügen
```
POST /cart/add
Headers: Authorization: Bearer <JWT-TOKEN>
Content-Type: application/json

{
  "productId": "507f1f77bcf86cd799439011",
  "quantity": 1
}

Antwort (200 / 400):
{ "message": "Item added successfully" }
```

#### Artikel aus Warenkorb entfernen
```
DELETE /cart/remove/:productId
Headers: Authorization: Bearer <JWT-TOKEN>

Antwort (200):
{ "message": "Item removed successfully" }
```

#### Checkout
```
POST /cart/checkout
Headers: Authorization: Bearer <JWT-TOKEN>

Antwort (200):
{ "orderId": "507f1f77bcf86cd799439011" }
```

## 🎨 Frontend-Seiten

### **HomePage** (`/`)
- Zeigt den Produktkatalog
- Produkt-Cards mit Bild, Titel, Preis und Stock
- "Zum Warenkorb hinzufügen"-Button
- Responsive Design

### **RegisterPage** (`/register`)
- Registrierungsformular
- Validierung von Eingaben
- Passwort-Verschlüsselung
- Automatisches Login nach erfolgreicher Registrierung

### **LoginPage** (`/login`)
- Login-Formular mit Email und Passwort
- JWT-Token wird lokal gespeichert
- Umleitung zur HomePage nach erfolgreichem Login

### **CartPage** (`/cart`)
- Anzeige aller Artikel im Warenkorb
- Mengenänderung möglich
- Artikel können entfernt werden
- Gesamtpreis-Berechnung
- "Zur Kasse"-Button

### **CheckoutPage** (`/checkout`)
- Bestellübersicht
- Versand- und Zahlungsinformationen
- Bestellbestätigung
- Dankseite nach erfolgreichem Kauf

### **ProtectedRoute**
- Schützt Seiten, die Authentifizierung erfordern
- Leitet nicht authentifizierte Benutzer zur LoginPage weiter

## 🔐 Sicherheitsfeatures

- **JWT-Authentifizierung**: 1-stunden-Token mit HS256-Algorithmus
- **Passwort-Hashing**: bcrypt mit Salt-Rounds = 10
- **CORS**: Konfiguriert für Frontend-Backend-Kommunikation
- **Protected Routes**: Nur authentifizierte Benutzer haben Zugriff auf bestimmte Endpoints
- **Environment Variables**: Sensible Daten in `.env` Dateien ausgelagert

## 📦 Abhängigkeiten verwalten

### Backend - Abhängigkeiten aktualisieren
```bash
cd Backend
npm outdated          # Zeigt veraltete Pakete
npm update            # Aktualisiert Pakete
```

### Frontend - Abhängigkeiten aktualisieren
```bash
cd Frontend
npm outdated          # Zeigt veraltete Pakete
npm update            # Aktualisiert Pakete
```

## 🧪 Entwicklung

### Build Frontend
```bash
cd Frontend
npm run build
```

### Linting
```bash
cd Frontend
npm run lint
npm run lint -- --fix    # Automatisch Fehler beheben
```

### Preview des gebauten Frontend
```bash
cd Frontend
npm run preview
```

## 📝 Häufig gestellte Fragen

### Wie verbinde ich MongoDB Atlas?
1. Erstelle ein kostenloses Konto auf [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Erstelle einen Cluster
3. Kopiere die Connection-String in die `.env` Datei

### Wie ändere ich den JWT Secret in der Produktion?
Verwende einen starken, zufälligen String (mindestens 32 Zeichen) in der Umgebungsvariable `JWT_SECRET`.

### Warum funktioniert die Frontend-Backend-Kommunikation nicht?
- Stelle sicher, dass der Backend auf Port 3001 läuft
- Überprüfe die `baseUrl.ts` im Frontend
- Stelle sicher, dass CORS korrekt konfiguriert ist

### Wie kann ich Produkte hinzufügen?
Aktuell werden Produkte beim Backend-Start automatisch eingefügt (Seeding). Für weitere Produkte können Sie die Datenbank direkt über MongoDB Atlas oder ein Admin-Panel bearbeiten.

## 🚢 Deployment

### Backend (z.B. auf Heroku, Render, Railway)
1. Schiebe dein Repository zu GitHub
2. Verbinde dein Repo mit der Hosting-Platform
3. Stelle die Umgebungsvariablen in der Hosting-Platform ein
4. Der Server wird automatisch bereitgestellt

### Frontend (z.B. auf Vercel, Netlify)
1. Baue das Frontend: `npm run build`
2. Verbinde dein GitHub-Repo mit Vercel/Netlify
3. Stelle die Environment-Variablen ein
4. Das Frontend wird automatisch bereitgestellt

## 📄 Lizenz

Dieses Projekt ist unter der **ISC License** lizenziert. Siehe die [LICENSE](LICENSE) Datei für Details.

## 👨‍💻 Autor

Erstellt von [Dein Name]

## 🤝 Beitragen

Beiträge sind willkommen! Bitte erstelle einen Pull Request oder öffne ein Issue.

---

**Zuletzt aktualisiert**: 24. Juli 2026
