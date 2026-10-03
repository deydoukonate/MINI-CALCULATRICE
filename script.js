document.getElementById("calculer").addEventListener("click", function() {
    let chiffre1 = Number(document.getElementById("chiffre1").value);
    let chiffre2 = Number(document.getElementById("chiffre2").value);
    let operation = document.getElementById("operation").value;
    let resultat;
    if (operation === "+") {
        resultat = chiffre1 + chiffre2;
    } else if (operation === "-") {
        resultat = chiffre1 - chiffre2;
    } else if (operation === "*") {
        resultat = chiffre1 * chiffre2;
    } else if (operation === "/") {
        if (chiffre2 === 0) {
            resultat = "Impossible de diviser par zéro";
        } else {
            resultat = chiffre1 / chiffre2;
        }
    }
    document.getElementById("resultat").textContent = "Résultat : " + resultat;
});