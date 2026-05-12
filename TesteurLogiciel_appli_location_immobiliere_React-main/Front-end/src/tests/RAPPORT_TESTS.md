# Rapport des tests — Banner & Collapse

**Date :** 2026-05-12  
**Framework :** Vitest + React Testing Library  
**Résultat global : 12/12 tests passés**

---

## Banner — 5 tests

| # | Description | Résultat |
|---|-------------|----------|
| 1 | Affiche l'image avec le bon attribut `alt="Banner"` | ✅ Passé |
| 2 | Affiche le label quand il est fourni en prop | ✅ Passé |
| 3 | N'affiche pas de balise `<p>` quand le label est absent | ✅ Passé |
| 4 | Ajoute la classe `Banner--dark` quand un label est fourni | ✅ Passé |
| 5 | N'a pas la classe `Banner--dark` sans label | ✅ Passé |

---

## Collapse — 7 tests

| # | Description | Résultat |
|---|-------------|----------|
| 1 | Affiche le titre passé en prop | ✅ Passé |
| 2 | Est fermé par défaut (pas de classe `open` sur le contenu) | ✅ Passé |
| 3 | S'ouvre au clic sur le bouton header | ✅ Passé |
| 4 | Se referme au deuxième clic (toggle) | ✅ Passé |
| 5 | Le contenu est présent dans le DOM même quand fermé | ✅ Passé |
| 6 | S'ouvre directement si la prop `isOpen={true}` est passée | ✅ Passé |
| 7 | L'icône `›` reçoit la classe `open` quand le collapse est ouvert | ✅ Passé |

---

## Fichiers de test

- `Banner.test.jsx` — tests du composant Banner
- `Collapse.test.jsx` — tests du composant Collapse
- `setup.js` — configuration jest-dom pour les matchers DOM

## Lancer les tests

```bash
npm test
```
