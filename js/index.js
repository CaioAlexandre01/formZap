function sendWhatsapp() {
  if (verifyOptions()) {
    var phonenumber = "+5522997170950";
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var contact = parseInt(document.getElementById("contact").value);
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var year = parseInt(document.getElementById("year").value);
    var typeFuel = document.getElementById("typeFuel").value;
    var fuelValue = parseFloat(document.querySelector("#fuelValue").value);
    var standardGold = document.querySelector("#standard-gold").value;
    var date = document.querySelector('input[type="date"]').value;
    var hour = document.getElementById("selectHour").value;
    var flag = document.getElementById("flag").value;

    var dateParts = date.split("-");
    var invertedDate = dateParts.reverse().join("-");

    var url =
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
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var contact = document.getElementById("contact").value;
  var brand = document.getElementById("brand").value;
  var model = document.getElementById("model").value;
  var year = document.getElementById("year").value;
  var typeFuel = document.getElementById("typeFuel").value;
  var fuelValue = document.getElementById("fuelValue").value;
  var standardGold = document.getElementById("standard-gold").value;
  var date = document.querySelector('input[type="date"]').value;
  var hour = document.getElementById("selectHour").value;
  var flag = document.getElementById("flag").value;

  // Verifica se algum campo está vazio
  if (
    name === "" ||
    lastname === "" ||
    contact === "" ||
    brand === "" ||
    model === "" ||
    year === "" ||
    typeFuel === "" ||
    fuelValue === "" ||
    standardGold === "" ||
    date === "" ||
    hour === "" ||
    flag === ""
  ) {
    alert("Por favor, preencha todos os campos corretamente!");
    return false;
  }

  return true;
}

