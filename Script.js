function getStringValueTekstBox(textbox) {
    // Zorgt ervoor dat ik getstringvaluetekstbox kan gebruiken inplaats van document.getelementbyid(textbox).value
    var myValue = document.getElementById(textbox).value;
    return myValue;
}

function setResult(result, textbox) {
    document.getElementById(textbox).value = result;
}

function getValueTekstBox(textbox) {
    var myValue = document.getElementById(textbox).value;
    if (!isNaN(myValue)) {
        return myValue;
    }
    else {
        alert("The value inserted is not a valud value, use only numbers and one .");
    }
}

function LogIn() {
    // Haalt de gebruikersnaam en wachtwoord op
    var Gebruikersnaam = getStringValueTekstBox("Gebruikersnaam");
    var Wachtwoord = getStringValueTekstBox("Wachtwoord");

    // Kijkt of de gebruikersnaam en wachtwoord correct is
    if (Gebruikersnaam == "Admin" && Wachtwoord == "Admin") {
        // Als het correct is gaat hij naar de personeelspagina
        window.location.replace("Personeelspagina.html");
    } else {
        // Als het niet correct is geef hij een melding de de gegevens incorrect zijn
        alert("De ingevoerde gegevens zijn incorrect");
    }
}

function Bereken_click() {

    try {
    //Haalt de gekozen ingredienten op
    var VarIngredient1 = getStringValueTekstBox("Ingredient1");
    var VarIngredient2 = getStringValueTekstBox("Ingredient2");
    var VarIngredient3 = getStringValueTekstBox("Ingredient3");
    var VarIngredient4 = getStringValueTekstBox("Ingredient4");
    var VarIngredient5 = getStringValueTekstBox("Ingredient5");
    var VarIngredient6 = getStringValueTekstBox("Ingredient6");
    var VarIngredient7 = getStringValueTekstBox("Ingredient7");
    var VarIngredient8 = getStringValueTekstBox("Ingredient8");

    //Haalt de gekozen nodig op
    var VarNodig1 = getStringValueTekstBox("Nodig1");
    var VarNodig2 = getStringValueTekstBox("Nodig2");
    var VarNodig3 = getStringValueTekstBox("Nodig3");
    var VarNodig4 = getStringValueTekstBox("Nodig4");
    var VarNodig5 = getStringValueTekstBox("Nodig5");
    var VarNodig6 = getStringValueTekstBox("Nodig6");
    var VarNodig7 = getStringValueTekstBox("Nodig7");
    var VarNodig8 = getStringValueTekstBox("Nodig8");

    //Haalt de gekozen prijs per kilo op
    var VarPerKilo1 = getStringValueTekstBox("PrijsPerKilo1");
    var VarPerKilo2 = getStringValueTekstBox("PrijsPerKilo2");
    var VarPerKilo3 = getStringValueTekstBox("PrijsPerKilo3");
    var VarPerKilo4 = getStringValueTekstBox("PrijsPerKilo4");
    var VarPerKilo5 = getStringValueTekstBox("PrijsPerKilo5");
    var VarPerKilo6 = getStringValueTekstBox("PrijsPerKilo6");
    var VarPerKilo7 = getStringValueTekstBox("PrijsPerKilo7");
    var VarPerKilo8 = getStringValueTekstBox("PrijsPerKilo8");

    //Haalt de gekozen pizza 25cm op
    var VarPizza251 = getStringValueTekstBox("Pizza251");
    var VarPizza252 = getStringValueTekstBox("Pizza252");
    var VarPizza253 = getStringValueTekstBox("Pizza253");
    var VarPizza254 = getStringValueTekstBox("Pizza254");
    var VarPizza255 = getStringValueTekstBox("Pizza255");
    var VarPizza256 = getStringValueTekstBox("Pizza256");
    var VarPizza257 = getStringValueTekstBox("Pizza257");
    var VarPizza258 = getStringValueTekstBox("Pizza258");

    //Haalt de gekozen pizza 35cm op
    var VarPizza351 = getStringValueTekstBox("Pizza351");
    var VarPizza352 = getStringValueTekstBox("Pizza352");
    var VarPizza353 = getStringValueTekstBox("Pizza353");
    var VarPizza354 = getStringValueTekstBox("Pizza354");
    var VarPizza355 = getStringValueTekstBox("Pizza355");
    var VarPizza356 = getStringValueTekstBox("Pizza356");
    var VarPizza357 = getStringValueTekstBox("Pizza357");
    var VarPizza358 = getStringValueTekstBox("Pizza358");
    
    //Kijkt welk ingredient er is gekozen en rekent de kostprijs uit
    switch (VarIngredient1) {
        case "Pizzadeeg":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            var Kostprijs135cm = Kostprijs125cm * 1.96;
            setResult(Kostprijs135cm, "Pizza351");
            break;
        case "Mozzarella":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            var Kostprijs135cm = Kostprijs125cm * 1.96;
            setResult(Kostprijs135cm, "Pizza351");
            break;
        case "Geraspte kaas":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            var Kostprijs135cm = Kostprijs125cm * 1.96;
            setResult(Kostprijs135cm, "Pizza351");
            break;
        case "Basilicum":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            var Kostprijs135cm = Kostprijs125cm * 1.96;
            setResult(Kostprijs135cm, "Pizza351");
            break;
        case "Tomaten":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            var Kostprijs135cm = Kostprijs125cm * 1.96;
            setResult(Kostprijs135cm, "Pizza351");
            break;
        case "Zout":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            var Kostprijs135cm = Kostprijs125cm * 1.96;
            setResult(Kostprijs135cm, "Pizza351");
            break;
        case "Zwarte olijven":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            var Kostprijs135cm = Kostprijs125cm * 1.96;
            setResult(Kostprijs135cm, "Pizza351");
            break;
        case "Ansjovis":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            var Kostprijs135cm = Kostprijs125cm * 1.96;
            setResult(Kostprijs135cm, "Pizza351");
            break;
        case "Kappertjes":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            var Kostprijs135cm = Kostprijs125cm * 1.96;
            setResult(Kostprijs135cm, "Pizza351");
            break;
        case "Ham":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            var Kostprijs135cm = Kostprijs125cm * 1.96;
            setResult(Kostprijs135cm, "Pizza351");
            break;
        case "Ananas":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            var Kostprijs135cm = Kostprijs125cm * 1.96;
            setResult(Kostprijs135cm, "Pizza351");
            break;
        case "Knoflook":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rode peper":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Spaghetti":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kersttomaatjes":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Vongole":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pesto":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pasta":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kipfilet":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Room":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pijnboompitten":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Gorgonzola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rucola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "":
            break;
        default:
            alert("Dat is geen geldig Ingrediënt");
            break;
    }
    switch (VarIngredient2) {
        case "Pizzadeeg":
            var PerKiloGram2 = VarPerKilo2 * 100;
            var Kostprijs225cm = PerKiloGram2 / VarNodig2;
            setResult(Kostprijs225cm, "Pizza252");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs235cm, "Pizza352");
            break;
        case "Mozzarella":
            var PerKiloGram2 = VarPerKilo2 * 100;
            var Kostprijs225cm = PerKiloGram2 / VarNodig2;
            setResult(Kostprijs225cm, "Pizza252");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs235cm, "Pizza352");
            break;
        case "Geraspte kaas":
            var PerKiloGram2 = VarPerKilo2 * 100;
            var Kostprijs225cm = PerKiloGram2 / VarNodig2;
            setResult(Kostprijs225cm, "Pizza252");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs235cm, "Pizza352");
            break;
        case "Basilicum":
            var PerKiloGram2 = VarPerKilo2 * 100;
            var Kostprijs225cm = PerKiloGram2 / VarNodig2;
            setResult(Kostprijs225cm, "Pizza252");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs235cm, "Pizza352");
            break;
        case "Tomaten":
            var PerKiloGram2 = VarPerKilo2 * 100;
            var Kostprijs225cm = PerKiloGram2 / VarNodig2;
            setResult(Kostprijs225cm, "Pizza252");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs235cm, "Pizza352");
            break;
        case "Zout":
            var PerKiloGram2 = VarPerKilo2 * 100;
            var Kostprijs225cm = PerKiloGram2 / VarNodig2;
            setResult(Kostprijs225cm, "Pizza252");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs235cm, "Pizza352");
            break;
        case "Zwarte olijven":
            var PerKiloGram2 = VarPerKilo2 * 100;
            var Kostprijs225cm = PerKiloGram2 / VarNodig2;
            setResult(Kostprijs225cm, "Pizza252");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs235cm, "Pizza352");
            break;
        case "Ansjovis":
            var PerKiloGram2 = VarPerKilo2 * 100;
            var Kostprijs225cm = PerKiloGram2 / VarNodig2;
            setResult(Kostprijs225cm, "Pizza252");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs235cm, "Pizza352");
            break;
        case "Kappertjes":
            var PerKiloGram2 = VarPerKilo2 * 100;
            var Kostprijs225cm = PerKiloGram2 / VarNodig2;
            setResult(Kostprijs225cm, "Pizza252");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs235cm, "Pizza352");
            break;
        case "Ham":
            var PerKiloGram2 = VarPerKilo2 * 100;
            var Kostprijs225cm = PerKiloGram2 / VarNodig2;
            setResult(Kostprijs225cm, "Pizza252");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs235cm, "Pizza352");
            break;
        case "Ananas":
            var PerKiloGram2 = VarPerKilo2 * 100;
            var Kostprijs225cm = PerKiloGram2 / VarNodig2;
            setResult(Kostprijs225cm, "Pizza252");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs235cm, "Pizza352");
            break;
        case "Knoflook":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rode peper":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Spaghetti":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kersttomaatjes":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Vongole":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pesto":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pasta":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kipfilet":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Room":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pijnboompitten":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Gorgonzola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rucola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "":
            break;
        default:
            alert("Dat is geen geldig Ingrediënt");
            break;
    }
    switch (VarIngredient3) {
        case "Pizzadeeg":
            var PerKiloGram3 = VarPerKilo3 * 100;
            var Kostprijs325cm = PerKiloGram3 / VarNodig3;
            setResult(Kostprijs325cm, "Pizza253");
            var Kostprijs325cm = Kostprijs325cm * 1.96;
            setResult(Kostprijs335cm, "Pizza353");
            break;
        case "Mozzarella":
            var PerKiloGram3 = VarPerKilo3 * 100;
            var Kostprijs325cm = PerKiloGram3 / VarNodig3;
            setResult(Kostprijs325cm, "Pizza253");
            var Kostprijs335cm = Kostprijs325cm * 1.96;
            setResult(Kostprijs335cm, "Pizza353");
            break;
        case "Geraspte kaas":
            var PerKiloGram3 = VarPerKilo3 * 100;
            var Kostprijs325cm = PerKiloGram3 / VarNodig3;
            setResult(Kostprijs325cm, "Pizza253");
            var Kostprijs335cm = Kostprijs325cm * 1.96;
            setResult(Kostprijs335cm, "Pizza353");
            break;
        case "Basilicum":
            var PerKiloGram3 = VarPerKilo3 * 100;
            var Kostprijs325cm = PerKiloGram3 / VarNodig3;
            setResult(Kostprijs325cm, "Pizza253");
            var Kostprijs335cm = Kostprijs325cm * 1.96;
            setResult(Kostprijs335cm, "Pizza353");
            break;
        case "Tomaten":
            var PerKiloGram3 = VarPerKilo3 * 100;
            var Kostprijs325cm = PerKiloGram3 / VarNodig3;
            setResult(Kostprijs325cm, "Pizza253");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs335cm, "Pizza352");
            break;
        case "Zout":
            var PerKiloGram3 = VarPerKilo3 * 100;
            var Kostprijs325cm = PerKiloGram3 / VarNodig3;
            setResult(Kostprijs325cm, "Pizza253");
            var Kostprijs335cm = Kostprijs325cm * 1.96;
            setResult(Kostprijs335cm, "Pizza353");
            break;
        case "Zwarte olijven":
            var PerKiloGram3 = VarPerKilo3 * 100;
            var Kostprijs325cm = PerKiloGram3 / VarNodig3;
            setResult(Kostprijs325cm, "Pizza253");
            var Kostprijs235cm = Kostprijs225cm * 1.96;
            setResult(Kostprijs335cm, "Pizza353");
            break;
        case "Ansjovis":
            var PerKiloGram3 = VarPerKilo3 * 100;
            var Kostprijs325cm = PerKiloGram3 / VarNodig3;
            setResult(Kostprijs325cm, "Pizza253");
            var Kostprijs235cm = Kostprijs325cm * 1.96;
            setResult(Kostprijs335cm, "Pizza353");
            break;
        case "Kappertjes":
            var PerKiloGram3 = VarPerKilo3 * 100;
            var Kostprijs325cm = PerKiloGram3 / VarNodig3;
            setResult(Kostprijs325cm, "Pizza253");
            var Kostprijs335cm = Kostprijs325cm * 1.96;
            setResult(Kostprijs335cm, "Pizza353");
            break;
        case "Ham":
            var PerKiloGram3 = VarPerKilo3 * 100;
            var Kostprijs325cm = PerKiloGram3 / VarNodig3;
            setResult(Kostprijs325cm, "Pizza253");
            var Kostprijs335cm = Kostprijs325cm * 1.96;
            setResult(Kostprijs335cm, "Pizza353");
            break;
        case "Ananas":
            var PerKiloGram3 = VarPerKilo3 * 100;
            var Kostprijs325cm = PerKiloGram3 / VarNodig3;
            setResult(Kostprijs325cm, "Pizza253");
            var Kostprijs335cm = Kostprijs325cm * 1.96;
            setResult(Kostprijs335cm, "Pizza353");
            break;
        case "Knoflook":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rode peper":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Spaghetti":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kersttomaatjes":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Vongole":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pesto":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pasta":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kipfilet":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Room":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pijnboompitten":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Gorgonzola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rucola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "":
            break;
        default:
            alert("Dat is geen geldig Ingrediënt");
            break;
    }
    switch (VarIngredient4) {
        case "Pizzadeeg":
            var PerKiloGram4 = VarPerKilo4 * 100;
            var Kostprijs425cm = PerKiloGram4 / VarNodig4;
            setResult(Kostprijs425cm, "Pizza254");
            var Kostprijs435cm = Kostprijs425cm * 1.96;
            setResult(Kostprijs435cm, "Pizza354");
            break;
        case "Mozzarella":
            var PerKiloGram4 = VarPerKilo4 * 100;
            var Kostprijs425cm = PerKiloGram4 / VarNodig4;
            setResult(Kostprijs425cm, "Pizza254");
            var Kostprijs435cm = Kostprijs425cm * 1.96;
            setResult(Kostprijs435cm, "Pizza354");
            break;
        case "Geraspte kaas":
            var PerKiloGram4 = VarPerKilo4 * 100;
            var Kostprijs425cm = PerKiloGram4 / VarNodig4;
            setResult(Kostprijs425cm, "Pizza254");
            var Kostprijs435cm = Kostprijs425cm * 1.96;
            setResult(Kostprijs435cm, "Pizza354");
            break;
        case "Basilicum":
            var PerKiloGram4 = VarPerKilo4 * 100;
            var Kostprijs425cm = PerKiloGram4 / VarNodig4;
            setResult(Kostprijs425cm, "Pizza254");
            var Kostprijs435cm = Kostprijs425cm * 1.96;
            setResult(Kostprijs435cm, "Pizza354");
            break;
        case "Tomaten":
            var PerKiloGram4 = VarPerKilo4 * 100;
            var Kostprijs425cm = PerKiloGram4 / VarNodig4;
            setResult(Kostprijs425cm, "Pizza254");
            var Kostprijs435cm = Kostprijs425cm * 1.96;
            setResult(Kostprijs435cm, "Pizza354");
            break;
        case "Zout":
            var PerKiloGram4 = VarPerKilo4 * 100;
            var Kostprijs425cm = PerKiloGram4 / VarNodig4;
            setResult(Kostprijs425cm, "Pizza254");
            var Kostprijs435cm = Kostprijs425cm * 1.96;
            setResult(Kostprijs435cm, "Pizza354");
            break;
        case "Zwarte olijven":
            var PerKiloGram4 = VarPerKilo4 * 100;
            var Kostprijs425cm = PerKiloGram4 / VarNodig4;
            setResult(Kostprijs425cm, "Pizza254");
            var Kostprijs435cm = Kostprijs425cm * 1.96;
            setResult(Kostprijs435cm, "Pizza354");
            break;
        case "Ansjovis":
            var PerKiloGram4 = VarPerKilo4 * 100;
            var Kostprijs425cm = PerKiloGram4 / VarNodig4;
            setResult(Kostprijs425cm, "Pizza254");
            var Kostprijs435cm = Kostprijs425cm * 1.96;
            setResult(Kostprijs435cm, "Pizza354");
            break;
        case "Kappertjes":
            var PerKiloGram4 = VarPerKilo4 * 100;
            var Kostprijs425cm = PerKiloGram4 / VarNodig4;
            setResult(Kostprijs425cm, "Pizza254");
            var Kostprijs435cm = Kostprijs425cm * 1.96;
            setResult(Kostprijs435cm, "Pizza354");
            break;
        case "Ham":
            var PerKiloGram4 = VarPerKilo4 * 100;
            var Kostprijs425cm = PerKiloGram4 / VarNodig4;
            setResult(Kostprijs425cm, "Pizza254");
            var Kostprijs435cm = Kostprijs425cm * 1.96;
            setResult(Kostprijs435cm, "Pizza354");
            break;
        case "Ananas":
            var PerKiloGram4 = VarPerKilo4 * 100;
            var Kostprijs425cm = PerKiloGram4 / VarNodig4;
            setResult(Kostprijs425cm, "Pizza254");
            var Kostprijs435cm = Kostprijs425cm * 1.96;
            setResult(Kostprijs435cm, "Pizza354");
            break;
        case "Knoflook":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rode peper":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Spaghetti":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kersttomaatjes":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Vongole":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pesto":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pasta":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kipfilet":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Room":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pijnboompitten":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Gorgonzola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rucola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "":
            break;
        default:
            alert("Dat is geen geldig Ingrediënt");
            break;
    }
    switch (VarIngredient5) {
        case "Pizzadeeg":
            var PerKiloGram5 = VarPerKilo5 * 100;
            var Kostprijs525cm = PerKiloGram5 / VarNodig5;
            setResult(Kostprijs525cm, "Pizza255");
            var Kostprijs535cm = Kostprijs525cm * 1.96;
            setResult(Kostprijs535cm, "Pizza355");
            break;
        case "Mozzarella":
            var PerKiloGram5 = VarPerKilo5 * 100;
            var Kostprijs525cm = PerKiloGram5 / VarNodig5;
            setResult(Kostprijs525cm, "Pizza255");
            var Kostprijs535cm = Kostprijs525cm * 1.96;
            setResult(Kostprijs535cm, "Pizza355");
            break;
        case "Geraspte kaas":
            var PerKiloGram5 = VarPerKilo5 * 100;
            var Kostprijs525cm = PerKiloGram5 / VarNodig5;
            setResult(Kostprijs525cm, "Pizza255");
            var Kostprijs535cm = Kostprijs525cm * 1.96;
            setResult(Kostprijs535cm, "Pizza355");
            break;
        case "Basilicum":
            var PerKiloGram5 = VarPerKilo5 * 100;
            var Kostprijs525cm = PerKiloGram5 / VarNodig5;
            setResult(Kostprijs525cm, "Pizza255");
            var Kostprijs535cm = Kostprijs525cm * 1.96;
            setResult(Kostprijs535cm, "Pizza355");
            break;
        case "Tomaten":
            var PerKiloGram5 = VarPerKilo5 * 100;
            var Kostprijs525cm = PerKiloGram5 / VarNodig5;
            setResult(Kostprijs425cm, "Pizza255");
            var Kostprijs535cm = Kostprijs525cm * 1.96;
            setResult(Kostprijs535cm, "Pizza355");
            break;
        case "Zout":
            var PerKiloGram5 = VarPerKilo5 * 100;
            var Kostprijs525cm = PerKiloGram5 / VarNodig5;
            setResult(Kostprijs525cm, "Pizza255");
            var Kostprijs535cm = Kostprijs525cm * 1.96;
            setResult(Kostprijs535cm, "Pizza355");
            break;
        case "Zwarte olijven":
            var PerKiloGram5 = VarPerKilo5 * 100;
            var Kostprijs525cm = PerKiloGram5 / VarNodig5;
            setResult(Kostprijs525cm, "Pizza255");
            var Kostprijs535cm = Kostprijs525cm * 1.96;
            setResult(Kostprijs535cm, "Pizza355");
            break;
        case "Ansjovis":
            var PerKiloGram5 = VarPerKilo5 * 100;
            var Kostprijs525cm = PerKiloGram5 / VarNodig5;
            setResult(Kostprijs525cm, "Pizza255");
            var Kostprijs535cm = Kostprijs525cm * 1.96;
            setResult(Kostprijs535cm, "Pizza355");
            break;
        case "Kappertjes":
            var PerKiloGram5 = VarPerKilo5 * 100;
            var Kostprijs525cm = PerKiloGram5 / VarNodig5;
            setResult(Kostprijs525cm, "Pizza255");
            var Kostprijs535cm = Kostprijs525cm * 1.96;
            setResult(Kostprijs535cm, "Pizza355");
            break;
        case "Ham":
            var PerKiloGram5 = VarPerKilo5 * 100;
            var Kostprijs525cm = PerKiloGram5 / VarNodig5;
            setResult(Kostprijs525cm, "Pizza255");
            var Kostprijs535cm = Kostprijs525cm * 1.96;
            setResult(Kostprijs535cm, "Pizza355");
            break;
        case "Ananas":
            var PerKiloGram5 = VarPerKilo5 * 100;
            var Kostprijs525cm = PerKiloGram5 / VarNodig5;
            setResult(Kostprijs525cm, "Pizza255");
            var Kostprijs535cm = Kostprijs525cm * 1.96;
            setResult(Kostprijs535cm, "Pizza355");
            break;
        case "Knoflook":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rode peper":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Spaghetti":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kersttomaatjes":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Vongole":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pesto":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pasta":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kipfilet":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Room":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pijnboompitten":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Gorgonzola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rucola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "":
            break;
        default:
            alert("Dat is geen geldig Ingrediënt");
            break;
    }
    switch (VarIngredient6) {
        case "Pizzadeeg":
            var PerKiloGram6 = VarPerKilo6 * 100;
            var Kostprijs625cm = PerKiloGram6 / VarNodig6;
            setResult(Kostprijs625cm, "Pizza256");
            var Kostprijs635cm = Kostprijs625cm * 1.96;
            setResult(Kostprijs635cm, "Pizza356");
            break;
        case "Mozzarella":
            var PerKiloGram6 = VarPerKilo6 * 100;
            var Kostprijs625cm = PerKiloGram6 / VarNodig6;
            setResult(Kostprijs625cm, "Pizza256");
            var Kostprijs635cm = Kostprijs625cm * 1.96;
            setResult(Kostprijs635cm, "Pizza356");
            break;
        case "Geraspte kaas":
            var PerKiloGram6 = VarPerKilo6 * 100;
            var Kostprijs625cm = PerKiloGram6 / VarNodig6;
            setResult(Kostprijs625cm, "Pizza256");
            var Kostprijs635cm = Kostprijs625cm * 1.96;
            setResult(Kostprijs635cm, "Pizza356");
            break;
        case "Basilicum":
            var PerKiloGram6 = VarPerKilo6 * 100;
            var Kostprijs625cm = PerKiloGram6 / VarNodig6;
            setResult(Kostprijs625cm, "Pizza256");
            var Kostprijs635cm = Kostprijs625cm * 1.96;
            setResult(Kostprijs635cm, "Pizza356");
            break;
        case "Tomaten":
            var PerKiloGram6 = VarPerKilo6 * 100;
            var Kostprijs625cm = PerKiloGram6 / VarNodig6;
            setResult(Kostprijs625cm, "Pizza256");
            var Kostprijs635cm = Kostprijs625cm * 1.96;
            setResult(Kostprijs635cm, "Pizza356");
            break;
        case "Zout":
            var PerKiloGram6 = VarPerKilo6 * 100;
            var Kostprijs625cm = PerKiloGram6 / VarNodig6;
            setResult(Kostprijs625cm, "Pizza256");
            var Kostprijs635cm = Kostprijs625cm * 1.96;
            setResult(Kostprijs635cm, "Pizza356");
            break;
        case "Zwarte olijven":
            var PerKiloGram6 = VarPerKilo6 * 100;
            var Kostprijs625cm = PerKiloGram6 / VarNodig6;
            setResult(Kostprijs625cm, "Pizza256");
            var Kostprijs635cm = Kostprijs625cm * 1.96;
            setResult(Kostprijs635cm, "Pizza356");
            break;
        case "Ansjovis":
            var PerKiloGram6 = VarPerKilo6 * 100;
            var Kostprijs625cm = PerKiloGram6 / VarNodig6;
            setResult(Kostprijs625cm, "Pizza256");
            var Kostprijs635cm = Kostprijs625cm * 1.96;
            setResult(Kostprijs635cm, "Pizza356");
            break;
        case "Kappertjes":
            var PerKiloGram6 = VarPerKilo6 * 100;
            var Kostprijs625cm = PerKiloGram6 / VarNodig6;
            setResult(Kostprijs625cm, "Pizza256");
            var Kostprijs635cm = Kostprijs625cm * 1.96;
            setResult(Kostprijs635cm, "Pizza356");
            break;
        case "Ham":
            var PerKiloGram6 = VarPerKilo6 * 100;
            var Kostprijs625cm = PerKiloGram6 / VarNodig6;
            setResult(Kostprijs625cm, "Pizza256");
            var Kostprijs635cm = Kostprijs625cm * 1.96;
            setResult(Kostprijs635cm, "Pizza356");
            break;
        case "Ananas":
            var PerKiloGram6 = VarPerKilo6 * 100;
            var Kostprijs625cm = PerKiloGram6 / VarNodig6;
            setResult(Kostprijs625cm, "Pizza256");
            var Kostprijs635cm = Kostprijs625cm * 1.96;
            setResult(Kostprijs635cm, "Pizza356");
            break;
        case "Knoflook":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rode peper":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Spaghetti":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kersttomaatjes":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Vongole":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pesto":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pasta":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kipfilet":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Room":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pijnboompitten":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Gorgonzola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rucola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "":
            break;
        default:
            alert("Dat is geen geldig Ingrediënt");
            break;
    }
    switch (VarIngredient7) {
        case "Pizzadeeg":
            var PerKiloGram7 = VarPerKilo7 * 100;
            var Kostprijs725cm = PerKiloGram7 / VarNodig7;
            setResult(Kostprijs725cm, "Pizza257");
            var Kostprijs735cm = Kostprijs725cm * 1.96;
            setResult(Kostprijs735cm, "Pizza357");
            break;
        case "Mozzarella":
            var PerKiloGram7 = VarPerKilo7 * 100;
            var Kostprijs725cm = PerKiloGram7 / VarNodig7;
            setResult(Kostprijs725cm, "Pizza257");
            var Kostprijs735cm = Kostprijs725cm * 1.96;
            setResult(Kostprijs735cm, "Pizza357");
            break;
        case "Geraspte kaas":
            var PerKiloGram7 = VarPerKilo7 * 100;
            var Kostprijs725cm = PerKiloGram7 / VarNodig7;
            setResult(Kostprijs725cm, "Pizza257");
            var Kostprijs735cm = Kostprijs725cm * 1.96;
            setResult(Kostprijs735cm, "Pizza357");
            break;
        case "Basilicum":
            var PerKiloGram7 = VarPerKilo7 * 100;
            var Kostprijs725cm = PerKiloGram7 / VarNodig7;
            setResult(Kostprijs725cm, "Pizza257");
            var Kostprijs735cm = Kostprijs725cm * 1.96;
            setResult(Kostprijs735cm, "Pizza357");
            break;
        case "Tomaten":
            var PerKiloGram7 = VarPerKilo7 * 100;
            var Kostprijs725cm = PerKiloGram7 / VarNodig7;
            setResult(Kostprijs725cm, "Pizza257");
            var Kostprijs735cm = Kostprijs725cm * 1.96;
            setResult(Kostprijs735cm, "Pizza357");
            break;
        case "Zout":
            var PerKiloGram7 = VarPerKilo7 * 100;
            var Kostprijs725cm = PerKiloGram7 / VarNodig7;
            setResult(Kostprijs725cm, "Pizza257");
            var Kostprijs735cm = Kostprijs725cm * 1.96;
            setResult(Kostprijs735cm, "Pizza357");
            break;
        case "Zwarte olijven":
            var PerKiloGram7 = VarPerKilo7 * 100;
            var Kostprijs725cm = PerKiloGram7 / VarNodig7;
            setResult(Kostprijs725cm, "Pizza257");
            var Kostprijs735cm = Kostprijs725cm * 1.96;
            setResult(Kostprijs735cm, "Pizza357");
            break;
        case "Ansjovis":
            var PerKiloGram7 = VarPerKilo7 * 100;
            var Kostprijs725cm = PerKiloGram7 / VarNodig7;
            setResult(Kostprijs725cm, "Pizza257");
            var Kostprijs735cm = Kostprijs725cm * 1.96;
            setResult(Kostprijs735cm, "Pizza357");
            break;
        case "Kappertjes":
            var PerKiloGram7 = VarPerKilo7 * 100;
            var Kostprijs725cm = PerKiloGram7 / VarNodig7;
            setResult(Kostprijs725cm, "Pizza257");
            var Kostprijs735cm = Kostprijs725cm * 1.96;
            setResult(Kostprijs735cm, "Pizza357");
            break;
        case "Ham":
            var PerKiloGram7 = VarPerKilo7 * 100;
            var Kostprijs725cm = PerKiloGram7 / VarNodig7;
            setResult(Kostprijs725cm, "Pizza257");
            var Kostprijs735cm = Kostprijs725cm * 1.96;
            setResult(Kostprijs735cm, "Pizza357");
            break;
        case "Ananas":
            var PerKiloGram7 = VarPerKilo7 * 100;
            var Kostprijs725cm = PerKiloGram7 / VarNodig7;
            setResult(Kostprijs725cm, "Pizza257");
            var Kostprijs735cm = Kostprijs725cm * 1.96;
            setResult(Kostprijs735cm, "Pizza357");
            break;
        case "Knoflook":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rode peper":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Spaghetti":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kersttomaatjes":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Vongole":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pesto":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pasta":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kipfilet":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Room":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pijnboompitten":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Gorgonzola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rucola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "":
            break;
        default:
            alert("Dat is geen geldig Ingrediënt");
            break;
    }
    switch (VarIngredient8) {
        case "Pizzadeeg":
            var PerKiloGram8 = VarPerKilo8 * 100;
            var Kostprijs825cm = PerKiloGram8 / VarNodig8;
            setResult(Kostprijs825cm, "Pizza258");
            var Kostprijs835cm = Kostprijs825cm * 1.96;
            setResult(Kostprijs835cm, "Pizza358");
            break;
        case "Mozzarella":
            var PerKiloGram8 = VarPerKilo8 * 100;
            var Kostprijs825cm = PerKiloGram8 / VarNodig8;
            setResult(Kostprijs825cm, "Pizza258");
            var Kostprijs835cm = Kostprijs825cm * 1.96;
            setResult(Kostprijs835cm, "Pizza358");
            break;
        case "Geraspte kaas":
            var PerKiloGram8 = VarPerKilo8 * 100;
            var Kostprijs825cm = PerKiloGram8 / VarNodig8;
            setResult(Kostprijs825cm, "Pizza258");
            var Kostprijs835cm = Kostprijs825cm * 1.96;
            setResult(Kostprijs835cm, "Pizza358");
            break;
        case "Basilicum":
            var PerKiloGram8 = VarPerKilo8 * 100;
            var Kostprijs825cm = PerKiloGram8 / VarNodig8;
            setResult(Kostprijs825cm, "Pizza258");
            var Kostprijs835cm = Kostprijs825cm * 1.96;
            setResult(Kostprijs835cm, "Pizza358");
            break;
        case "Tomaten":
            var PerKiloGram8 = VarPerKilo8 * 100;
            var Kostprijs825cm = PerKiloGram8 / VarNodig8;
            setResult(Kostprijs825cm, "Pizza258");
            var Kostprijs835cm = Kostprijs825cm * 1.96;
            setResult(Kostprijs835cm, "Pizza358");
            break;
        case "Zout":
            var PerKiloGram8 = VarPerKilo8 * 100;
            var Kostprijs825cm = PerKiloGram8 / VarNodig8;
            setResult(Kostprijs825cm, "Pizza258");
            var Kostprijs835cm = Kostprijs825cm * 1.96;
            setResult(Kostprijs835cm, "Pizza358");
            break;
        case "Zwarte olijven":
            var PerKiloGram8 = VarPerKilo8 * 100;
            var Kostprijs825cm = PerKiloGram8 / VarNodig8;
            setResult(Kostprijs825cm, "Pizza258");
            var Kostprijs835cm = Kostprijs825cm * 1.96;
            setResult(Kostprijs835cm, "Pizza358");
            break;
        case "Ansjovis":
            var PerKiloGram8 = VarPerKilo8 * 100;
            var Kostprijs825cm = PerKiloGram8 / VarNodig8;
            setResult(Kostprijs825cm, "Pizza258");
            var Kostprijs835cm = Kostprijs825cm * 1.96;
            setResult(Kostprijs835cm, "Pizza358");
            break;
        case "Kappertjes":
            var PerKiloGram8 = VarPerKilo8 * 100;
            var Kostprijs825cm = PerKiloGram8 / VarNodig8;
            setResult(Kostprijs825cm, "Pizza258");
            var Kostprijs835cm = Kostprijs825cm * 1.96;
            setResult(Kostprijs835cm, "Pizza358");
            break;
        case "Ham":
            var PerKiloGram8 = VarPerKilo8 * 100;
            var Kostprijs825cm = PerKiloGram8 / VarNodig8;
            setResult(Kostprijs825cm, "Pizza258");
            var Kostprijs835cm = Kostprijs825cm * 1.96;
            setResult(Kostprijs835cm, "Pizza358");
            break;
        case "Ananas":
            var PerKiloGram8 = VarPerKilo8 * 100;
            var Kostprijs825cm = PerKiloGram8 / VarNodig8;
            setResult(Kostprijs825cm, "Pizza258");
            var Kostprijs835cm = Kostprijs825cm * 1.96;
            setResult(Kostprijs835cm, "Pizza358");
            break;
        case "Knoflook":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rode peper":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Spaghetti":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kersttomaatjes":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Vongole":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pesto":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pasta":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Kipfilet":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Room":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Pijnboompitten":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Gorgonzola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "Rucola":
            var PerKiloGram1 = VarPerKilo1 * 100;
            var Kostprijs125cm = PerKiloGram1 / VarNodig1;
            setResult(Kostprijs125cm, "Pizza251");
            break;
        case "":
            break;
        default:
            alert("Dat is geen geldig Ingrediënt");
            break;
    }

    //Haalt de variable op uit de inputs
    var newVarPizza251 = getStringValueTekstBox("Pizza251");
    var newVarPizza252 = getStringValueTekstBox("Pizza252");
    var newVarPizza253 = getStringValueTekstBox("Pizza253");
    var newVarPizza254 = getStringValueTekstBox("Pizza254");
    var newVarPizza255 = getStringValueTekstBox("Pizza255");
    var newVarPizza256 = getStringValueTekstBox("Pizza256");
    var newVarPizza257 = getStringValueTekstBox("Pizza257");
    var newVarPizza258 = getStringValueTekstBox("Pizza258");

    //maakt van de string variable een nummer variable
    var floatnewvarpizza251 = parseFloat(newVarPizza251);
    var floatnewvarpizza252 = parseFloat(newVarPizza252);
    var floatnewvarpizza253 = parseFloat(newVarPizza253);
    var floatnewvarpizza254 = parseFloat(newVarPizza254);
    var floatnewvarpizza255 = parseFloat(newVarPizza255);
    var floatnewvarpizza256 = parseFloat(newVarPizza256);
    var floatnewvarpizza257 = parseFloat(newVarPizza257);
    var floatnewvarpizza258 = parseFloat(newVarPizza258);

    //berekening van de eindprijs en de eindprijs in een input zetten
    var EindprijsPizza25 = floatnewvarpizza251 + floatnewvarpizza252 + floatnewvarpizza253 + floatnewvarpizza254 + floatnewvarpizza255 + floatnewvarpizza256 + floatnewvarpizza257 + floatnewvarpizza258;
    var FixedEindPrijs25 = EindprijsPizza25.toFixed(2);
    setResult("€ " + FixedEindPrijs25, "Kostprijs25cm");

    //Haalt de variable op uit de inputs
    var newVarPizza351 = getStringValueTekstBox("Pizza351");
    var newVarPizza352 = getStringValueTekstBox("Pizza352");
    var newVarPizza353 = getStringValueTekstBox("Pizza353");
    var newVarPizza354 = getStringValueTekstBox("Pizza354");
    var newVarPizza355 = getStringValueTekstBox("Pizza355");
    var newVarPizza356 = getStringValueTekstBox("Pizza356");
    var newVarPizza357 = getStringValueTekstBox("Pizza357");
    var newVarPizza358 = getStringValueTekstBox("Pizza358");

    //maakt van de string variable een nummer variable
    var floatnewvarpizza351 = parseFloat(newVarPizza351);
    var floatnewvarpizza352 = parseFloat(newVarPizza352);
    var floatnewvarpizza353 = parseFloat(newVarPizza353);
    var floatnewvarpizza354 = parseFloat(newVarPizza354);
    var floatnewvarpizza355 = parseFloat(newVarPizza355);
    var floatnewvarpizza356 = parseFloat(newVarPizza356);
    var floatnewvarpizza357 = parseFloat(newVarPizza357);
    var floatnewvarpizza358 = parseFloat(newVarPizza358);

    //berekening van de eindprijs en de eindprijs in een input zetten
    var EindprijsPizza35 = floatnewvarpizza351 + floatnewvarpizza352 + floatnewvarpizza353 + floatnewvarpizza354 + floatnewvarpizza355 + floatnewvarpizza356 + floatnewvarpizza357 + floatnewvarpizza358;
    var FixedEindPrijs35 = EindprijsPizza35.toFixed(2);
    setResult("€ " + FixedEindPrijs35, "Kostprijs35cm");
    } catch (error) {
        //als er iets fout gaat komt er een foutmelding
       alert("fout");
    } 
    if (VarIngredient1 != "" && VarNodig1 == "") {
        alert("Je hebt nodig nog niet ingevuld!");
    }
    if (VarIngredient2 != "" && VarNodig2 == "") {
        alert("Je hebt nodig nog niet ingevuld!");
    }
    if (VarIngredient3 != "" && VarNodig3 == "") {
        alert("Je hebt nodig nog niet ingevuld!");
    }
    if (VarIngredient4 != "" && VarNodig4 == "") {
        alert("Je hebt nodig nog niet ingevuld!");
    }
    if (VarIngredient5 != "" && VarNodig5 == "") {
        alert("Je hebt nodig nog niet ingevuld!");
    }
    if (VarIngredient6 != "" && VarNodig6 == "") {
        alert("Je hebt nodig nog niet ingevuld!");
    }
    if (VarIngredient7 != "" && VarNodig7 == "") {
        alert("Je hebt nodig nog niet ingevuld!");
    }
    if (VarIngredient8 != "" && VarNodig8 == "") {
        alert("Je hebt nodig nog niet ingevuld!");
    }

    if (VarIngredient1 != "" && VarPerKilo1 == "") {
        alert("Je hebt prijs per kilo nog niet ingevuld!")
    }
    if (VarIngredient2 != "" && VarPerKilo2 == "") {
        alert("Je hebt prijs per kilo nog niet ingevuld!")
    }
    if (VarIngredient3 != "" && VarPerKilo3 == "") {
        alert("Je hebt prijs per kilo nog niet ingevuld!")
    }
    if (VarIngredient4 != "" && VarPerKilo4 == "") {
        alert("Je hebt prijs per kilo nog niet ingevuld!")
    }
    if (VarIngredient5 != "" && VarPerKilo5 == "") {
        alert("Je hebt prijs per kilo nog niet ingevuld!")
    }
    if (VarIngredient6 != "" && VarPerKilo6 == "") {
        alert("Je hebt prijs per kilo nog niet ingevuld!")
    }
    if (VarIngredient7 != "" && VarPerKilo7 == "") {
        alert("Je hebt prijs per kilo nog niet ingevuld!")
    }
    if (VarIngredient8 != "" && VarPerKilo8 == "") {
        alert("Je hebt prijs per kilo nog niet ingevuld!")
    }
}