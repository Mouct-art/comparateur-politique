# 🗳️ Comparateur Politique 2022

Un outil gratuit, neutre et interactif pour aider les citoyens à identifier quel candidat à l'élection présidentielle française de 2022 correspond le mieux à leurs convictions.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## ✨ Fonctionnalités

- ✅ **10 questions sur les enjeux majeurs** : économie, environnement, santé, sécurité, Europe, immigration, fiscalité, retraite, énergie, éducation
- ✅ **12 candidats analysés** : tous les candidats ayant obtenu les 500 parrainages
- ✅ **Résultats instantanés** : pourcentage de correspondance avec chaque parti
- ✅ **Basé sur les programmes officiels** : données vérifiées et sourcées
- ✅ **100% gratuit et sans publicité**
- ✅ **Responsive** : fonctionne sur mobile, tablette et desktop
- ✅ **Aucune collecte de données personnelles** : vie privée respectée

---

## 🚀 Démarrage rapide

### Option 1 : Test en local (2 minutes)

1. **Téléchargez le projet**
   ```bash
   git clone https://github.com/VOTRE_USERNAME/comparateur-politique.git
   cd comparateur-politique
   ```

2. **Ouvrez `index.html` dans votre navigateur**
   - Double-cliquez sur le fichier `index.html`
   - Ou faites un clic droit → "Ouvrir avec" → votre navigateur

3. **C'est prêt !** 🎉

### Option 2 : Déploiement sur Vercel (5 minutes)

1. **Créez un compte sur [Vercel](https://vercel.com/)**

2. **Importez ce repository**
   - Cliquez sur "New Project"
   - Sélectionnez votre repo GitHub
   - Cliquez sur "Deploy"

3. **Votre site est en ligne !**
   - URL : `https://comparateur-politique.vercel.app`

---

## 📁 Structure du projet

```
comparateur-politique/
│
├── index.html              # Page principale avec le questionnaire
├── results.html            # Page d'affichage des résultats
├── style.css               # Styles CSS (design responsive)
├── script.js               # Logique JavaScript (navigation, calcul)
│
├── data/
│   └── partis.json        # Base de données des candidats et programmes
│
├── PLAN_DEPLOIEMENT.md    # Guide complet de déploiement
├── STRATEGIE_MARKETING.md # Stratégie marketing détaillée
└── README.md              # Ce fichier
```

---

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec Flexbox/Grid
- **JavaScript Vanilla** : Aucune dépendance externe
- **JSON** : Base de données des programmes

**Aucune installation requise !** Tout fonctionne directement dans le navigateur.

---

## 📊 Méthodologie

### Comment ça marche ?

1. **Collecte des données** : Programmes officiels récupérés sur :
   - programme-candidats.interieur.gouv.fr
   - Sites officiels des candidats
   - Professions de foi

2. **Catégorisation** : Chaque position est classée selon 10 thèmes

3. **Algorithme de matching** :
   ```javascript
   Pour chaque candidat :
     score = 0
     Pour chaque question :
       Si réponse_utilisateur == position_candidat :
         score += 1
     pourcentage = (score / total_questions) × 100
   ```

4. **Résultats** : Candidats classés par ordre décroissant de correspondance

### Garanties de neutralité

- ✅ Tous les candidats affichés de manière égale
- ✅ Algorithme transparent et vérifiable
- ✅ Sources citées pour chaque programme
- ✅ Aucun biais dans les questions

---

## 🎨 Personnalisation

### Modifier les questions

Éditez `index.html` et modifiez les sections `<div class="question">`.

### Ajouter/modifier des candidats

Éditez `data/partis.json` :

```json
{
  "nom": "Nouveau Candidat",
  "parti": "Nom du parti",
  "positions": {
    "economie": "liberal",
    "environnement": "modere",
    ...
  },
  "mesures_phares": [
    "Mesure 1",
    "Mesure 2"
  ],
  "lien_programme": "https://..."
}
```

### Changer les couleurs

Dans `style.css`, modifiez les variables CSS :

```css
:root {
    --primary-color: #2563eb;    /* Couleur principale */
    --secondary-color: #1e40af;  /* Couleur secondaire */
    ...
}
```

---

## 📈 Statistiques (à mettre à jour régulièrement)

- 👥 **Visiteurs** : X utilisateurs
- ✅ **Taux de complétion** : X%
- 📱 **Partages** : X partages
- 🏆 **Candidat le plus populaire** : X (X% des résultats)

---

## 🤝 Contribution

Les contributions sont les bienvenues !

### Comment contribuer ?

1. **Forkez le projet**
2. **Créez une branche** : `git checkout -b feature/amelioration`
3. **Committez** : `git commit -m 'Ajout de fonctionnalité'`
4. **Pushez** : `git push origin feature/amelioration`
5. **Ouvrez une Pull Request**

### Idées de contributions

- 🌍 Traduction en d'autres langues
- ♿ Amélioration de l'accessibilité (ARIA)
- 📊 Ajout de graphiques pour les résultats
- 🎨 Nouveaux thèmes visuels
- 📝 Correction de fautes/erreurs dans les programmes

---

## 🐛 Signaler un bug

Vous avez trouvé un bug ? Créez une [issue](https://github.com/VOTRE_USERNAME/comparateur-politique/issues) avec :

1. **Description** du problème
2. **Étapes pour reproduire**
3. **Comportement attendu** vs **comportement actuel**
4. **Navigateur et version**
5. **Capture d'écran** (si pertinent)

---

## 📜 Licence

Ce projet est sous licence **MIT**. Vous êtes libre de :

- ✅ Utiliser ce code pour vos propres projets
- ✅ Modifier et adapter le code
- ✅ Distribuer des copies
- ✅ Utiliser commercialement (avec attribution)

Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Crédits

### Sources des données
- [Ministère de l'Intérieur](https://programme-candidats.interieur.gouv.fr/)
- [Conseil Constitutionnel](https://presidentielle2022.conseil-constitutionnel.fr/)
- Sites officiels des candidats

### Inspirations
- [Vote & Vous](https://www.vote-et-vous.fr/) (France)
- [I Side With](https://www.isidewith.com/) (États-Unis)
- [VoteSwipe](https://www.voteswipe.org/) (Europe)

---

## 📞 Contact

- **Email** : votre.email@example.com
- **Twitter** : [@votre_compte](https://twitter.com/votre_compte)
- **Website** : [votre-site.com](https://votre-site.com)

---

## 🗺️ Roadmap

### Version 1.0 (Actuelle)
- [x] Questionnaire 10 questions
- [x] 12 candidats présidentielle 2022
- [x] Calcul de correspondance
- [x] Page de résultats

### Version 1.1 (Prochaine)
- [ ] Ajout de questions bonus
- [ ] Graphique radar de positionnement politique
- [ ] Export PDF des résultats
- [ ] Comparaison 2 candidats côte à côte

### Version 2.0 (Future)
- [ ] Extension municipales/législatives
- [ ] Mode "débat" avec famille/amis
- [ ] Application mobile (PWA)
- [ ] Traduction multilingue

---

## ⭐ Soutenir le projet

Si ce projet vous a aidé, vous pouvez :

1. ⭐ **Star le repo** sur GitHub
2. 🔄 **Partager** avec vos proches
3. 💬 **Laisser un avis** ou témoignage
4. ☕ **Offrir un café** : [Ko-fi](https://ko-fi.com/votrecompte)
5. 🐛 **Signaler des bugs** pour améliorer l'outil

---

## ❓ FAQ

### Le comparateur est-il vraiment neutre ?

Oui ! Nous nous basons uniquement sur les programmes officiels. L'algorithme ne favorise aucun candidat. Vous pouvez vérifier le code source vous-même.

### Mes données sont-elles collectées ?

Non. Aucune donnée personnelle n'est collectée. Tout se passe dans votre navigateur. Aucun serveur n'enregistre vos réponses.

### Puis-je utiliser ce code pour d'autres élections ?

Absolument ! Le code est open source (MIT). Vous pouvez l'adapter pour n'importe quelle élection en modifiant le fichier `partis.json`.

### Comment sont calculés les pourcentages ?

Simplement : `(nombre de réponses correspondantes / nombre total de questions) × 100`

Si vous êtes d'accord avec un candidat sur 7 questions sur 10, vous avez 70% de correspondance.

### Un candidat manque ou une info est fausse ?

Ouvrez une [issue](https://github.com/VOTRE_USERNAME/comparateur-politique/issues) avec :
- Le nom du candidat
- L'erreur constatée
- La source correcte du programme

### Puis-je intégrer ce comparateur sur mon site ?

Oui, avec attribution. Utilisez une iframe :
```html
<iframe src="https://votre-site.vercel.app" width="100%" height="800px"></iframe>
```

---

## 📚 Documentation complète

- 📖 [Guide de déploiement](PLAN_DEPLOIEMENT.md)
- 📢 [Stratégie marketing](STRATEGIE_MARKETING.md)
- 🛠️ [Documentation technique](#) (à venir)

---

## 🎉 Remerciements

Merci à tous ceux qui ont contribué à ce projet :

- 👨‍💻 Développeurs qui ont testé le code
- 📝 Relecteurs des programmes politiques
- 🎨 Designers qui ont donné des retours sur l'UX
- 📢 Ceux qui ont partagé l'outil

**Ensemble, construisons une démocratie plus éclairée ! 🗳️✨**

---

*Dernière mise à jour : [Date]*
*Version 1.0.0*