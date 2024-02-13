function konversiSuhu(){
  var inputSuhu = parseFloat(document.getElementById("inputSuhu").value);
  var jenisSatuanAwal = document.getElementById ("jenisSatuanAwal").value;
  var jenisSatuanAkhir = document.getElementById ("jenisSatuanAkhir").value;
  var hasilKonversi;
  var rumusKonversi;

  if (jenisSatuanAwal === "celcius" && jenisSatuanAkhir === "reamur") {
    hasilKonversi = inputSuhu * 4/5;
    rumusKonversi = inputSuhu + " * 4/5 = " + hasilKonversi.toFixed(2) + " °R ";
  } else if (jenisSatuanAwal === "celcius" && jenisSatuanAkhir === "fahrenheit") {
    hasilKonversi = (inputSuhu * 9/5) + 32;
    rumusKonversi = "(" + inputSuhu + " * 9/5) + 32 = " + hasilKonversi.toFixed(2) + " °F ";
  } else if ( jenisSatuanAwal === "celcius" && jenisSatuanAkhir === "kelvin") {
    hasilKonversi = inputSuhu + 273.15;
    rumusKonversi = inputSuhu + " + 273.15 = " + hasilKonversi.toFixed(2) + " K ";
  } else if ( jenisSatuanAwal === "reamur" && jenisSatuanAkhir === "celcius") {
    hasilKonversi = inputSuhu * 5/4;
    rumusKonversi = inputSuhu + " * 5/4 = " + hasilKonversi.toFixed(2) + " °C ";
  } else if (jenisSatuanAwal === "reamur" && jenisSatuanAkhir === "fahrenheit") {
    hasilKonversi = (inputSuhu * 9/4) + 32;
    rumusKonversi = "(" + inputSuhu + " * 9/4) + 32 = " + hasilKonversi.toFixed(2) + " °F ";
  } else if (jenisSatuanAwal === "reamur" && jenisSatuanAkhir === "kelvin") {
    hasilKonversi = (inputSuhu * 5/4) + 273.15;
    rumusKonversi = "(" + inputSuhu + " * 5/4) + 273.15 = " + hasilKonversi.toFixed(2) + " K ";
  } else if (jenisSatuanAwal === "fahrenheit" && jenisSatuanAkhir === "celcius") {
    hasilKonversi = (inputSuhu - 32) * 5/9;
    rumusKonversi = "(" + inputSuhu + "- 32) * 5/9 = " + hasilKonversi.toFixed(2) + " °C ";
  } else if (jenisSatuanAwal === "fahrenheit" && jenisSatuanAkhir === "reamur") {
    hasilKonversi = (inputSuhu - 32) * 4/9;
    rumusKonversi = "(" + inputSuhu + "- 32) * 4/9 = " + hasilKonversi.toFixed(2) + " °R ";
  } else if (jenisSatuanAwal === "fahrenheit" && jenisSatuanAkhir === "kelvin") {
    hasilKonversi = (inputSuhu - 32) * 5/9 + 273.15;
    rumusKonversi = "(" + inputSuhu + " - 32) * 5/9 + 273.15 = " + hasilKonversi.toFixed(2) + " K ";
  } else if (jenisSatuanAwal === "kelvin" && jenisSatuanAkhir === "celcius") {
    hasilKonversi = inputSuhu - 273.15;
    rumusKonversi = inputSuhu + " - 273.15 = " + hasilKonversi.toFixed(2) + " °C ";
  } else if (jenisSatuanAwal === "kelvin" && jenisSatuanAkhir === "reamur") {
    hasilKonversi = (inputSuhu - 273.15) * 4/5;
    rumusKonversi = "(" + inputSuhu + " - 273.15) * 4/5 = " + hasilKonversi.toFixed(2) + " °R ";
  } else if (jenisSatuanAwal === "kelvin" && jenisSatuanAkhir === "fahrenheit") {
    hasilKonversi = ((inputSuhu - 273.15)) * 9/5 + 32;
    rumusKonversi = "(" + inputSuhu + " - 273.15) * 9/5 + 32 = " + hasilKonversi.toFixed(2) + " °F ";
  } else {
    document.getElementById("hasilKonversi").value = "";
    document.getElementById("rumusKonversi").innerText = "Satuan Awal dan Akhir yang dimasukkan sama sehingga hasilnya akan tetap sama, tidak berubah";
    return;
  }

  document.getElementById("hasilKonversi").value = + hasilKonversi.toFixed(2);
  document.getElementById("rumusKonversi").innerText = " Cara menghitung: " + rumusKonversi;
  }

  function hapusHasil() {
    document.getElementById("inputSuhu").value= "";
    document.getElementById("jenisSatuanAwal").selectedIndex = 0;
    document.getElementById("jenisSatuanAkhir").selectedIndex = 0;
    document.getElementById("hasilKonversi").value = "";
    document.getElementById("rumusKonversi").innerText = "";
  }