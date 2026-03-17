# SPOI VT — Package de déploiement SharePoint
## ONCF · CSP Phase 1 · Signalisation Casablanca

---

## CONTENU DU PACKAGE

| Fichier | Description | Déploiement |
|---------|-------------|-------------|
| `portail.html` | Page d'accueil unifiée — 6 modules + KPIs | Renommer en `index.html` à la racine |
| `module01.html` | Collecte terrain PWA — fiches VT hors-ligne | Dossier SPOI-VT/modules/ |
| `module02.html` | Reporting & Archives — 6 documents MOA | Dossier SPOI-VT/modules/ |
| `module03.html` | NCR / Réserves — délais 5j | Dossier SPOI-VT/modules/ |
| `module04.html` | Master Planning — Gantt Zone→Gare→Phase | Dossier SPOI-VT/modules/ |
| `module05.html` | Ops Planning — charge agents | Dossier SPOI-VT/modules/ |
| `module06.html` | Dashboard — KPIs interactifs | Dossier SPOI-VT/modules/ |
| `sw.js` | Service Worker — mode hors-ligne | Même dossier que portail |
| `manifest.json` | Configuration PWA | Même dossier que portail |
| `icon-192.png` | Icône application 192x192 | Même dossier que portail |
| `icon-512.png` | Icône application 512x512 | Même dossier que portail |

---

## INFRASTRUCTURE SHAREPOINT

### Listes créées
- `FichesVT` — Fiches de vérifications techniques
- `NCR_Reserves` — Non-conformités et réserves
- `Planning_Phases` — Planning contractuel phases et tâches
- `Absences_Equipe` — Absences et congés agents

### Power Automate Flows
- `SPOI_VT_Enregistrer_Fiche` — Alerte email si fiche Non-Conforme

---

## DÉPLOIEMENT

1. Uploadez tous les fichiers dans SharePoint → Documents → SPOI-VT
2. Ouvrez portail.html comme page d'accueil
3. Partagez le lien avec votre équipe

URL d'accès :
https://alstomgroup.sharepoint.com/sites/SiteOperationsManagementSIGMorocco/Documents/SPOI-VT/portail.html

---

ONCF · Alstom / Ineo · CSP Phase 1 · Mars 2026
