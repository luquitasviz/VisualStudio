// Reemplaza "tu_numero_de_telefono" con tu número de teléfono de WhatsApp, incluyendo el código de país y sin ningún símbolo ni espacios.
var phoneNumber = "tu_numero_de_telefono";

document.getElementById("whatsapp-btn").addEventListener("click", function() {
  // Reemplaza "mensaje_personalizado" con el mensaje que deseas enviar por defecto.
  var message = encodeURIComponent("mensaje_personalizado");
  window.open("https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + message, "_blank");
});