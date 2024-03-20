function sendWhatsapp() {
  if (verifyOptions()) {
    const phonenumber = "+5522997170950";
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const contact = parseInt(document.getElementById("contact").value);
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const year = parseInt(document.getElementById("year").value);
    const typeFuel = document.getElementById("typeFuel").value;
    const fuelValue = parseFloat(document.querySelector("#fuelValue").value);
    const standardGold = document.querySelector("#standard-gold").value;
    const date = document.querySelector('input[type="date"]').value;
    const hour = document.getElementById("selectHour").value;
    const flag = document.getElementById("flag").value;

    const dateParts = date.split("-");
    const invertedDate = dateParts.reverse().join("-");

    

    
    const url =
      "https://wa.me/" +
      phonenumber +
      "?text=" +
      "*Nome:* " +
      name +
      "%0a" +
      "*Sobrenome:* " +
      lastname +
      "%0a" +
      "*Contato:* " +
      contact +
      "%0a" +
      "*Marca:* " +
      brand +
      "%0a" +
      "*Modelo:* " +
      model +
      "%0a" +
      "*Ano:* " +
      year +
      "%0a" +
      "*Tipo:* " +
      standardGold +
      "%0a" +
      "*Bandeira:* " +
      flag +
      "%0a" +
      "*Tipo do combustível:* " +
      typeFuel +
      "%0a" +
      "*Combustível (R$):* " +
      fuelValue +
      "%0a" +
      "*Data:* " +
      invertedDate +
      "%0a" +
      "*Horário:* " +
      hour +
      "%0a";

    window.open(url, "_blank").focus();
  }
}

function verifyOptions() {
  const name = document.getElementById("name").value;
  const lastname = document.getElementById("lastname").value;
  const contact = document.getElementById("contact").value;
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const typeFuel = document.getElementById("typeFuel").value;
  const fuelValue = document.getElementById("fuelValue").value;
  const standardGold = document.getElementById("standard-gold").value;
  const date = document.querySelector('input[type="date"]').value;
  const hour = document.getElementById("selectHour").value;
  const flag = document.getElementById("flag").value;

  // Verifica se algum campo está vazio
  if (
    name == "" ||
    lastname == "" ||
    contact == "" ||
    brand == "" ||
    model == "" ||
    year == "" ||
    typeFuel == "" ||
    fuelValue == "" ||
    standardGold == "" ||
    date == "" ||
    hour == "" ||
    flag == ""
  ) {
    alert("Por favor, preencha todos os campos corretamente!");
    return false;
  }

  return true;
}
