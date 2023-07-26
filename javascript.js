const phoneNumberElement = document.getElementById("phoneNumber");

phoneNumberElement.addEventListener("click", () => {
  // Get the phone number text
  const phoneNumber = phoneNumberElement.textContent.trim();

  // Create a temporary input element to copy the phone number to the clipboard
  const tempInput = document.createElement("input");
  tempInput.setAttribute("value", phoneNumber);
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Create the alert message span
  const alertMessage = document.createElement("span");
  alertMessage.textContent = "Phone number copied to clipboard!";
  alertMessage.style.backgroundColor = "black";
  alertMessage.style.color = "yellow";
  alertMessage.style.padding = "4px 8px";
  alertMessage.style.borderRadius = "4px";
  phoneNumberElement.appendChild(alertMessage);

  // Hide the alert message after a few seconds
  setTimeout(() => {
    phoneNumberElement.removeChild(alertMessage);
  }, 2000);
});
