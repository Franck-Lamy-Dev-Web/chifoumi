let scoreJoueur = 0;
let scoreOrdi = 0;
let round = 5;
const Chifoumi = ['Pierre', 'Feuille', 'Ciseaux'];

function OrdiPlay() {
    if (round > 0) {
        let choiceOrdi = Chifoumi[Math.floor(Math.random() * 3)];
        round -= 1;
        return choiceOrdi;
    } else {
        return null;
    }
}

function playGame(choiceJoueur) {
    let choiceOrdi = OrdiPlay();
    let result = '';
    let resultFin ='';

    if (choiceOrdi === null) {
        resultFin = `Le jeu est terminé ! Score final - Joueur: ${scoreJoueur}, Ordinateur: ${scoreOrdi}`;
    } else {
        if (choiceJoueur === choiceOrdi) {
            result = `Égalité ! Vous avez tous les deux choisi ${choiceJoueur}.`;
        } else if (
            (choiceJoueur === 'Pierre' && choiceOrdi === 'Ciseaux') ||
            (choiceJoueur === 'Ciseaux' && choiceOrdi === 'Feuille') ||
            (choiceJoueur === 'Feuille' && choiceOrdi === 'Pierre')
        ) {
            result = `Vous gagnez ! ${choiceJoueur} bat ${choiceOrdi}.`;
            scoreJoueur++;
        } else {
            result = `Vous perdez ! ${choiceOrdi} bat ${choiceJoueur}.`;
            scoreOrdi++;
        }
    }

    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = `Score - Joueur: ${scoreJoueur}, Ordinateur: ${scoreOrdi}`;
    document.getElementById('resultFin').textContent = resultFin;

}

function reset() {
    scoreJoueur = 0;
    scoreOrdi = 0;
    round = 5;
    resultFin = '';
    document.getElementById('result').textContent = '';
    document.getElementById('score').textContent = `Score - Joueur: ${scoreJoueur}, Ordinateur: ${scoreOrdi}`;
    document.getElementById('resultFin').textContent = resultFin;

}
