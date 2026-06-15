// Script du quiz directement dans le HTML
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('marioQuiz').addEventListener('submit', function(e) {
                e.preventDefault();

                // Réponses correctes
                const correct = {
                    q1: '1996',
                    q2: 'n64',
                    q3: 'nintendo',
                    q4: 'miyamoto',
                    q5: 'plateforme'
                };

                // Récupérer les réponses
                const form = e.target;
                let score = 0;

                // Vérifier chaque question
                for (const [question, correctAnswer] of Object.entries(correct)) {
                    if (form[question].value === correctAnswer) {
                        score++;
                    }
                }

                // Afficher le résultat
                const resultDiv = document.getElementById('quiz-result');
                const resultText = document.getElementById('result-text');

                resultText.textContent = `Score: ${score}/5 - ${score === 5 ? 'Parfait !' : 'À améliorer !'}`;
                resultDiv.style.display = 'block';

                // Scroll vers le résultat
                resultDiv.scrollIntoView({ behavior: 'smooth' });
            });
        });