# ByteBites – Bestell-App

Eine Bestelloberfläche mit HTML, CSS und JavaScript für das fiktive Restaurant ByteBites.

## Starten

Das Repository herunterladen oder klonen und `index.html` in einem aktuellen Browser öffnen. Alternativ über einen lokalen Webserver bereitstellen. Es gibt keinen Installations- oder Build-Schritt und keine Paketabhängigkeiten.

## Funktionen und aktueller Stand

- Speisekarte mit Kategorien und lokal hinterlegten Produkten.
- Produkte zum Warenkorb hinzufügen und Mengen ändern.
- Anzeige von Artikelanzahl, Zwischensumme und Gesamtpreis inklusive 2,90 € Liefergebühr.
- Warenkorb und Bestätigungsdialog für die Bestellung.
- Der Bestellvorgang ist eine lokale Demo: Es werden keine Bestellung, Zahlung oder Lieferung an einen Server übermittelt. Der Warenkorb wird nicht dauerhaft gespeichert.

## Projektstruktur

- `index.html`: Speisekarte, Warenkorb und Dialoge
- `script.js`: Warenkorb, Preisberechnung und Bestellsimulation
- `scripts/db.js`: Produktdaten und Warenkorb
- `scripts/template.js`: HTML-Vorlagen
- `style.css`: Hauptgestaltung
- `styles/`: Weitere CSS-Dateien
- `assets/`: Bilder, Icons und Schriftarten
