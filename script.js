function getComputerChoice() {
    let rps = Math.floor(Math.random() * 3);
    switch (rps) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}
