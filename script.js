// --- BASE DE DONNÉES ÉTENDUE DES NIVEAUX GIT / GITHUB ---
const levelDatabase = {
    1: {
        title: "Niveau 1: Configuration & Initialisation",
        category: "Setup & Init",
        questions: [
            {
                question: "Vous venez d'installer Git. Comment configurez-vous votre nom d'utilisateur global ?",
                options: ["git config --global user.name \"Mon Nom\"", "git set global user.name \"Mon Nom\"", "git user.name \"Mon Nom\"", "git config user.name \"Mon Nom\""],
                answerIndex: 0,
                cmdSuccess: "$ git config --global user.name \"Randriamananjara Herimino Hasinina\"\n[OK] Configuration globale enregistrée.",
                cmdError: "fatal: Syntaxe de configuration incorrecte. N'oubliez pas le drapeau --global."
            },
            {
                question: "Vous commencez un projet en local. Quelle commande crée un nouveau dépôt Git caché ?",
                options: ["git init", "git start", "git create repo", "git setup"],
                answerIndex: 0,
                cmdSuccess: "$ git init\nInitialized empty Git repository in /workspace/.git/",
                cmdError: "bash: commande manquante. Impossible d'initialiser sans instancier le projet local."
            },
            {
                question: "Comment inspecter l'état actuel de votre répertoire de travail (fichiers modifiés, non suivis ou indexés) ?",
                options: ["git status", "git log", "git check", "git diff"],
                answerIndex: 0,
                cmdSuccess: "$ git status\nOn branch main\nYour branch is up to date.\nChanges not staged for commit...",
                cmdError: "Erreur de syntaxe. Utilisez 'status' pour faire un état des lieux de l'index."
            }
        ]
    },
    2: {
        title: "Niveau 2: Indexation & Enregistrement (Commits)",
        category: "Staging & Commits",
        questions: [
            {
                question: "Quelle commande prépare l'intégralité des fichiers modifiés et nouveaux pour le prochain commit ?",
                options: ["git add .", "git stage all", "git commit --all", "git save"],
                answerIndex: 0,
                cmdSuccess: "$ git add .\nAll modified and untracked files added to staging area.",
                cmdError: "bash: Mauvaise commande. Rappel : le point '.' cible tout le dossier courant."
            },
            {
                question: "Quelle commande permet de valider définitivement les éléments indexés avec un message ?",
                options: ["git commit -m \"msg\"", "git commit \"msg\"", "git save -m \"msg\"", "git push -m \"msg\""],
                answerIndex: 0,
                cmdSuccess: "$ git commit -m \"Fix typo\"\n[main 4f1a92e] Fix typo\n 1 file changed, 1 insertion(+)",
                cmdError: "error: switch `m' requires a value. (Le drapeau de message -m est requis)."
            },
            {
                question: "Vous voulez sauter l'étape 'git add' pour tous les fichiers DÉJÀ suivis et modifiés lors du commit. Quelle est la commande ?",
                options: ["git commit -am \"message\"", "git commit -f \"message\"", "git commit --quick \"message\"", "git commit -all \"message\""],
                answerIndex: 0,
                cmdSuccess: "$ git commit -am \"Fast commit\"\n[main 8e3d2c1] Fast commit\n Modifications directes enregistrées.",
                cmdError: "error: Option invalide. Le raccourci combiné de l'indexation directe est '-am'."
            }
        ]
    },
    3: {
        title: "Niveau 3: Exploration de l'Historique & Annulations",
        category: "History & Reset",
        questions: [
            {
                question: "Quelle commande affiche la liste chronologique condensée de tous les commits sur une seule ligne chacun ?",
                options: ["git log --oneline", "git log --short", "git history --one", "git show --summary"],
                answerIndex: 0,
                cmdSuccess: "$ git log --oneline\n4f1a92e Fix typo\n8e3d2c1 Fast commit\n1a2b3c4 Initial commit",
                cmdError: "unknown option. Pour condenser l'affichage par commit, utilisez '--oneline'."
            },
            {
                question: "Comment annuler le tout dernier commit en local tout en gardant vos modifications intactes dans votre espace de travail ?",
                options: ["git reset --soft HEAD~1", "git reset --hard HEAD~1", "git revert HEAD", "git checkout HEAD~1"],
                answerIndex: 0,
                cmdSuccess: "$ git reset --soft HEAD~1\nCommit annulé. Les modifications sont retournées dans la staging area.",
                cmdError: "Attention ! Le drapeau choisi détruirait vos fichiers ou n'annulerait pas le commit correctement."
            },
            {
                question: "Quelle commande permet de visualiser précisément les modifications de lignes non encore indexées (Staged) ?",
                options: ["git diff", "git show", "git status --verbose", "git check --changes"],
                answerIndex: 0,
                cmdSuccess: "$ git diff\n--- a/script.js\n+++ b/script.js\n@@ -10,2 +10,3 @@",
                cmdError: "Erreur. 'git diff' est l'outil natif d'inspection des deltas de lignes textuelles."
            }
        ]
    },
    4: {
        title: "Niveau 4: Gestion des Branches & Conflits",
        category: "Branching & Merging",
        questions: [
            {
                question: "Comment créer une branche appelée 'feature-audio' et s'y déplacer immédiatement ?",
                options: ["git checkout -b feature-audio", "git branch feature-audio", "git switch feature-audio", "git checkout feature-audio"],
                answerIndex: 0,
                cmdSuccess: "$ git checkout -b feature-audio\nSwitched to a new branch 'feature-audio'",
                cmdError: "fatal: la branche n'existe pas encore ou l'instruction de bascule immédiate (-b) est absente."
            },
            {
                question: "Vous êtes sur 'main'. Comment fusionner proprement le code stable validé sur la branche 'feature-audio' ?",
                options: ["git merge feature-audio", "git join feature-audio", "git branch --merge feature-audio", "git checkout feature-audio --merge"],
                answerIndex: 0,
                cmdSuccess: "$ git merge feature-audio\nUpdating 7b2a1c9..9f8e7d6\nFast-forward",
                cmdError: "Syntaxe invalide pour déclencher une fusion (merge) ascendante."
            },
            {
                question: "Quelle commande supprime définitivement une branche locale nommée 'old-feature' qui a déjà été fusionnée ?",
                options: ["git branch -d old-feature", "git branch -rm old-feature", "git delete branch old-feature", "git checkout --delete old-feature"],
                answerIndex: 0,
                cmdSuccess: "$ git branch -d old-feature\nDeleted branch old-feature (was 9f8e7d6).",
                cmdError: "error: branch not deleted. Utilisez l'option '-d' (delete)."
            }
        ]
    },
    5: {
        title: "Niveau 5: Remisage temporaire (Stash) & Tags",
        category: "Advanced Local",
        questions: [
            {
                question: "Vous devez changer de branche d'urgence mais votre code actuel n'est pas prêt à être commité. Comment sauvegarder vos modifications de côté ?",
                options: ["git stash", "git save --temporary", "git hold --changes", "git backup"],
                answerIndex: 0,
                cmdSuccess: "$ git stash\nSaved working directory and index state WIP on main: 9f8e7d6",
                cmdError: "bash: Impossible. 'stash' (remisage) est la commande conçue pour mettre de côté le travail en cours."
            },
            {
                question: "Comment récupérer et réappliquer les modifications que vous aviez précédemment mises de côté avec un 'stash' ?",
                options: ["git stash pop", "git stash recover", "git stash load", "git stash apply --all"],
                answerIndex: 0,
                cmdSuccess: "$ git stash pop\nOn branch main\nChanges to be committed...\nDropped refs/stash@{0}",
                cmdError: "error: La pile de remisage n'a pas pu être vidée. Utilisez 'pop' pour appliquer et retirer de la pile."
            },
            {
                question: "Quelle commande permet de marquer un commit important (comme une version finale) avec le tag 'v1.0.0' ?",
                options: ["git tag v1.0.0", "git version v1.0.0", "git set --tag v1.0.0", "git commit --tag v1.0.0"],
                answerIndex: 0,
                cmdSuccess: "$ git tag v1.0.0\n[OK] Tag v1.0.0 assigné au commit HEAD actuel.",
                cmdError: "fatal: 'tag' est le mot-clé Git dédié à l'étiquetage des versions majeures."
            }
        ]
    },
    6: {
        title: "Niveau 6: Écosystème GitHub & Synchronisation Distante",
        category: "GitHub Ecosystem",
        questions: [
            {
                question: "Quelle commande télécharge localement un projet complet depuis une URL GitHub distante ?",
                options: ["git clone <url>", "git download <url>", "git pull <url>", "git get <url>"],
                answerIndex: 0,
                cmdSuccess: "$ git clone https://github.com/heihasiniaina3-dev/NMC.git\nCloning into 'NMC'...\nremote: Total 148 (delta 42)",
                cmdError: "fatal: Commande ou URL non valide pour la duplication à distance (clonage)."
            },
            {
                question: "Quelle commande envoie vos commits locaux vers le serveur distant 'origin' sur la branche 'main' ?",
                options: ["git push origin main", "git send origin main", "git push --all", "git remote upload"],
                answerIndex: 0,
                cmdSuccess: "$ git push origin main\nWriting objects: 100% (3/3), done.\nTo github.com:heihasiniaina3-dev/NMC.git",
                cmdError: "error: failed to push some refs to remote 'origin'. Synchro refusée."
            },
            {
                question: "Quelle commande récupère les changements du dépôt distant GitHub ET les fusionne directement sur votre branche locale ?",
                options: ["git pull", "git fetch", "git sync", "git merge --remote"],
                answerIndex: 0,
                cmdSuccess: "$ git pull\nUpdating 9f8e7d6..1b2c3d4\nFast-forward\n 1 file changed, 24 insertions(+)",
                cmdError: "error: 'fetch' télécharge mais ne fusionne pas. Vous devez utiliser 'pull' pour l'opération combinée."
            }
        ]
    }
};

// --- CONFIGURATION DE L'ÉTAT DU JOUEUR ---
let player = {
    name: "Dev",
    score: 0,
    currentLevel: 1,
    questionIndex: 0,
    questionsInLevel: []
};

// --- RÉFÉRENCES ÉLÉMENTS DOM ---
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");
const usernameInput = document.getElementById("username");
const btnStart = document.getElementById("btn-start");
const btnRestart = document.getElementById("btn-restart");

const displayLevel = document.getElementById("display-level");
const playerName = document.getElementById("player-name");
const displayScore = document.getElementById("display-score");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-fill");

const questionCategory = document.getElementById("question-category");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const terminalBody = document.getElementById("terminal-body");

const endTitle = document.getElementById("end-title");
const rankName = document.getElementById("rank-name");
const finalStats = document.getElementById("final-stats");

// --- UTILS : MÉLANGE DE TABLEAU (Algorithme Fisher-Yates) ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// --- ÉVÉNEMENTS & GESTIONNAIRES ---
btnStart.addEventListener("click", () => {
    const enteredName = usernameInput.value.trim();
    if (enteredName === "") {
        usernameInput.focus();
        usernameInput.style.borderColor = "var(--accent-red)";
        return;
    }
    
    player.name = enteredName;
    playerName.textContent = player.name;
    player.score = 0;
    displayScore.textContent = "0";
    
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    
    terminalBody.innerHTML = "";
    logTerminal(`Système initialisé. Session de test Git/GitHub sécurisée lancée par heihasiniaina3-dev.`, "t-success", true);
    
    startLevel(1);
});

btnRestart.addEventListener("click", () => {
    endScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
    usernameInput.value = "";
    usernameInput.style.borderColor = "var(--border-color)";
});

function startLevel(levelNum) {
    player.currentLevel = levelNum;
    player.questionIndex = 0;
    
    const maxLevels = Object.keys(levelDatabase).length;
    displayLevel.textContent = `NIVEAU ${levelNum} / ${maxLevels} : ${levelDatabase[levelNum].title}`;
    
    const originalQuestions = levelDatabase[levelNum].questions;
    player.questionsInLevel = shuffleArray([...originalQuestions]); // Mélange des questions du niveau actuel
    
    logTerminal(`Initialisation du module : ${levelDatabase[levelNum].title}...`, "t-success", true);
    loadQuestion();
}

function loadQuestion() {
    const currentLevelData = levelDatabase[player.currentLevel];
    const currentQuestion = player.questionsInLevel[player.questionIndex];
    
    updateProgress();

    questionCategory.textContent = currentLevelData.category;
    questionText.textContent = `Mission #${player.questionIndex + 1} : ${currentQuestion.question}`;
    
    optionsContainer.innerHTML = "";

    // Mapping pour lier l'état de justesse textuelle avant mélange
    const answerMap = currentQuestion.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === currentQuestion.answerIndex
    }));
    
    const shuffledOptions = shuffleArray([...answerMap]); // Mélange dynamique des boutons options

    shuffledOptions.forEach((option) => {
        const btn = document.createElement("button");
        btn.classList.add("btn-option");
        btn.innerHTML = `<span>${option.text}</span>`;
        btn.addEventListener("click", () => handleAnswerClick(option.isCorrect, btn, currentQuestion));
        optionsContainer.appendChild(btn);
    });
}

function handleAnswerClick(isCorrect, element, questionData) {
    const buttons = optionsContainer.querySelectorAll(".btn-option");
    buttons.forEach(btn => btn.disabled = true); 

    if (isCorrect) {
        element.classList.add("correct");
        player.score += 25;
        displayScore.textContent = player.score;
        
        logTerminal(questionData.cmdSuccess, "t-success", true);
        player.questionIndex++;
        
        setTimeout(() => {
            checkProgression();
        }, 1500);
    } else {
        element.classList.add("wrong");
        logTerminal(questionData.cmdError, "t-error", true);

        setTimeout(() => {
            element.classList.remove("wrong");
            buttons.forEach(btn => btn.disabled = false); // Réactive les choix en cas d'erreur
        }, 1200);
    }
}

function checkProgression() {
    const maxLevels = Object.keys(levelDatabase).length;
    if (player.questionIndex >= player.questionsInLevel.length) {
        // Niveau terminé, passage au suivant ou fin
        if (player.currentLevel < maxLevels) {
            startLevel(player.currentLevel + 1);
        } else {
            endGame();
        }
    } else {
        loadQuestion();
    }
}

function updateProgress() {
    const totalLevels = Object.keys(levelDatabase).length;
    
    let completed = 0;
    for(let i = 1; i < player.currentLevel; i++) {
        completed += levelDatabase[i].questions.length;
    }
    completed += player.questionIndex;
    
    let totalRealQuestions = 0;
    for(let i = 1; i <= totalLevels; i++) {
        totalRealQuestions += levelDatabase[i].questions.length;
    }

    const percent = Math.round((completed / totalRealQuestions) * 100);
    progressPercent.textContent = `${percent}%`;
    progressFill.style.width = `${percent}%`;
}

function logTerminal(message, className, showPrompt = false) {
    const line = document.createElement("div");
    line.classList.add("t-line");
    
    let htmlContent = "";
    if (showPrompt) {
        htmlContent += `<span class="t-prompt">heihasiniaina3-dev@github:~$</span>`;
    }
    
    const textFormatted = message.replace(/\n/g, "<br>");
    htmlContent += `<span class="t-content ${className}">${textFormatted}</span>`;
    
    line.innerHTML = htmlContent;
    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight; 
}

function endGame() {
    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");

    let grade = "";
    if (player.score >= 400) grade = " ARCHITECTE DE PRODUCTION INFRA-GIT";
    else if (player.score >= 300) grade = "GUST DE BRANCHES AVANCÉ";
    else grade = "COLLABORATEUR SÉCURISÉ";

    endTitle.textContent = `Félicitations, ${player.name} !`;
    rankName.textContent = grade;
    
    finalStats.innerHTML = `Score final : ${player.score} XP / 450 XP | Émulation terminée.<br><br>` +
                           `<span style="color: var(--accent-blue); font-weight: 600;">Signature de l'Auteur de l'Application :</span><br>` +
                           `<strong style="color: #fff; font-size: 1.1rem;">Randriamananjara Herimino Hasinina</strong><br>` +
                           `<span style="font-family: var(--font-code); color: var(--accent-purple);">GitHub Key: @heihasiniaina3-dev</span>`;
}