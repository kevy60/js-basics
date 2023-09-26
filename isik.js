function analüüsiIsikukood(isikukood) {
  // Kontrollib  pikkust
  if (isikukood.length !== 11) {
    return "Vigane isikukood. Isikukood peab olema 11 numbrit pikk.";
  } 

  //  vajalikud  osad isikukoodist
  const sugu = parseInt(isikukood[0]) % 2 === 0 ? "naine" : "mees";
  const sünnikuupäev = isikukood.slice(5, 7) + "." + isikukood.slice(3, 5) + "." + isikukood.slice(1, 3);
  const sünniaasta = isikukood.slice(1, 7);
  const asutuseKood = isikukood.slice(7, 9);
  const järjekorraNumber = isikukood[9];

  // Saan vastuse
  const vastus = `Isik isikukoodiga ${isikukood} on ${sugu} (${isikukood[0]}...), kes on sündinud ${sünnikuupäev} aastal (${sünniaasta}...). Tema isikukood registreeriti ${asutuseKood} osakonnas (...${asutuseKood}...), ja sel päeval oli ta esimene ${sugu === "mees" ? "meessoost" : "naissoost"} isik (...${järjekorraNumber}). Isikukoodi kontrollnumbriks on ${isikukood[10]} (...${isikukood[10]}).`;

  return vastus;
}


const isikukoodNäide = "34501234216"
const tulemus = analüüsiIsikukood(isikukoodNäide);

// Saan tulemuse 
console.log(tulemus);
