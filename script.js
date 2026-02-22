// Variables globales
let currentQuestion = 1;
const totalQuestions = 10;
let reponses = {};

// Gestion de la navigation
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
    setupNavigation();
    setupFormValidation();
});

function setupNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    nextBtn.addEventListener('click', nextQuestion);
    prevBtn.addEventListener('click', previousQuestion);
}

function setupFormValidation() {
    // Vérifier qu'une option est sélectionnée avant de passer à la question suivante
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
        input.addEventListener('change', function() {
            const nextBtn = document.getElementById('nextBtn');
            nextBtn.disabled = false;
        });
    });
}

function nextQuestion() {
    const currentQuestionEl = document.querySelector(`[data-question="${currentQuestion}"]`);
    const selectedOption = currentQuestionEl.querySelector('input[type="radio"]:checked');
    
    if (!selectedOption) {
        alert('Veuillez sélectionner une option avant de continuer.');
        return;
    }

    // Sauvegarder la réponse
    const questionName = selectedOption.name;
    reponses[questionName] = selectedOption.value;

    // Masquer la question actuelle
    currentQuestionEl.style.display = 'none';

    // Passer à la question suivante
    currentQuestion++;
    
    if (currentQuestion <= totalQuestions) {
        const nextQuestionEl = document.querySelector(`[data-question="${currentQuestion}"]`);
        nextQuestionEl.style.display = 'block';
        updateProgress();
        updateButtons();
    }

    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function previousQuestion() {
    // Masquer la question actuelle
    const currentQuestionEl = document.querySelector(`[data-question="${currentQuestion}"]`);
    currentQuestionEl.style.display = 'none';

    // Revenir à la question précédente
    currentQuestion--;
    
    const prevQuestionEl = document.querySelector(`[data-question="${currentQuestion}"]`);
    prevQuestionEl.style.display = 'block';
    
    updateProgress();
    updateButtons();

    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress() {
    const progressBar = document.getElementById('progressBar');
    const questionNumber = document.getElementById('questionNumber');
    
    const progress = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = progress + '%';
    questionNumber.textContent = currentQuestion;
}

function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    // Afficher/masquer le bouton précédent
    prevBtn.style.display = currentQuestion > 1 ? 'block' : 'none';

    // Afficher/masquer les boutons suivant et soumettre
    if (currentQuestion === totalQuestions) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// Gestion de la soumission du formulaire
document.getElementById('questionnaire').addEventListener('submit', function(e) {
    e.preventDefault();

    // Vérifier que toutes les questions ont été répondues
    if (Object.keys(reponses).length < totalQuestions) {
        alert('Veuillez répondre à toutes les questions.');
        return;
    }

    // Charger les données des partis et calculer les scores
    fetch('data/partis.json')
        .then(response => response.json())
        .then(data => {
            const partis = data.partis;
            
            // Calculer les scores de correspondance
            partis.forEach(parti => {
                let score = 0;
                let details = [];
                
                for (const theme in reponses) {
                    if (parti.positions[theme] === reponses[theme]) {
                        score += 1;
                        details.push(theme);
                    }
                }
                
                parti.score = score;
                parti.pourcentage = Math.round((score / totalQuestions) * 100);
                parti.themesAccord = details;
            });

            // Trier les partis par score décroissant
            partis.sort((a, b) => b.score - a.score);

            // Stocker les résultats dans le sessionStorage
            sessionStorage.setItem('resultats', JSON.stringify(partis));
            sessionStorage.setItem('reponses', JSON.stringify(reponses));

            // Rediriger vers la page des résultats
            window.location.href = 'results.html';
        })
        .catch(error => {
            console.error('Erreur lors du chargement des données:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        });
});

// Fonction pour obtenir le label d'un thème
function getThemeLabel(theme) {
    const labels = {
        'economie': '💼 Économie',
        'environnement': '🌍 Environnement',
        'sante': '🏥 Santé',
        'securite': '🚔 Sécurité',
        'europe': '🇪🇺 Europe',
        'immigration': '🌐 Immigration',
        'fiscalite': '💰 Fiscalité',
        'retraite': '👴 Retraite',
        'energie': '⚡ Énergie',
        'education': '📚 Éducation'
    };
    return labels[theme] || theme;
}