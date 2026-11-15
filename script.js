const card = document.getElementById("otpCard");
const form = document.getElementById("otpForm");
const control = document.getElementById("otpControl");
const inputs = [...document.querySelectorAll(".otp-input")];
const feedback = document.getElementById("feedback");
const button = document.getElementById("confirmButton");
const resetButton = document.getElementById("resetButton");

const DEMO_CODE = "123456";
let busy = false;
let transitionTimer = null;

function codeValue() {
  return inputs.map(input => input.value).join("");
}

function updateLiquidState() {
  const filled = inputs.filter(input => input.value).length;
  control.classList.toggle("has-value", filled > 0);
  inputs.forEach((input, index) => {
    input.parentElement?.classList.toggle("filled", Boolean(input.value));
    const blob = document.querySelectorAll(".blob")[index];
    blob.style.transform = input.value ? "scale(1.04)" : "";
  });
}

function clearFeedback() {
  feedback.textContent = "";
  feedback.classList.remove("visible");
  card.classList.remove("error-state", "success-state");
  control.classList.remove("error", "success", "processing");
}

function setMessage(message) {
  feedback.textContent = message;
  feedback.classList.add("visible");
}

function showError() {
  card.classList.add("error-state");
  control.classList.add("error");
  setMessage("Incorrect Code. Please try again.");
  button.textContent = "Verification Failed";
  button.disabled = false;
  resetButton.textContent = "Try again";
  busy = false;
}

function showSuccess() {
  card.classList.add("success-state");
  control.classList.add("success");
  setMessage("Verified Successfully");
  button.textContent = "Verified Successfully";
  button.disabled = true;
  resetButton.textContent = "Verify another code";
  busy = false;
}

function verify() {
  if (busy) return;
  const code = codeValue();
  if (code.length !== 6) {
    setMessage("Please enter all 6 digits.");
    return;
  }

  busy = true;
  clearFeedback();
  control.classList.add("processing");
  button.textContent = "Processing...";
  button.disabled = true;

  transitionTimer = window.setTimeout(() => {
    if (code === DEMO_CODE) showSuccess();
    else showError();
  }, 1300);
}

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (busy || card.classList.contains("success-state")) return;
    clearFeedback();
    const digits = input.value.replace(/\D/g, "");
    input.value = digits.slice(-1);
    updateLiquidState();

    if (input.value && index < inputs.length - 1) inputs[index + 1].focus();
    if (inputs.every(item => item.value)) {
      // Match the liquid fill state shown in the clip; user confirms explicitly.
      button.focus({ preventScroll: true });
    }
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].value = "";
      inputs[index - 1].focus();
      updateLiquidState();
    } else if (event.key === "ArrowLeft" && index > 0) {
      inputs[index - 1].focus();
    } else if (event.key === "ArrowRight" && index < 5) {
      inputs[index + 1].focus();
    } else if (event.key === "Enter") {
      event.preventDefault();
      verify();
    }
  });

  input.addEventListener("paste", event => {
    event.preventDefault();
    const pasted = (event.clipboardData || window.clipboardData)
      .getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    inputs.forEach((item, i) => item.value = pasted[i] || "");
    updateLiquidState();
    const nextEmpty = inputs.find(item => !item.value);
    if (nextEmpty) nextEmpty.focus();
    else button.focus();
  });
});

form.addEventListener("submit", event => {
  event.preventDefault();
  verify();
});

function reset() {
  window.clearTimeout(transitionTimer);
  busy = false;
  inputs.forEach(input => input.value = "");
  clearFeedback();
  updateLiquidState();
  button.disabled = false;
  button.textContent = "Confirm Identity";
  inputs[0].focus();
}

resetButton.addEventListener("click", reset);
window.addEventListener("load", () => inputs[0].focus());
