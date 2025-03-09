const form = document.getElementById("registrationForm");
const submitButton = document.getElementById("submitButton");

// Функция проверки валидности формы
function validateForm() {
  let isValid = true;

  // Проверка имени
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (!nameInput.checkValidity()) {
    nameError.style.display = "block";
    nameInput.classList.add("invalid");
    isValid = false;
  } else {
    nameError.style.display = "none";
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
  }

  // Проверка электронной почты
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  if (!emailInput.checkValidity()) {
    emailError.style.display = "block";
    emailInput.classList.add("invalid");
    isValid = false;
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
  }

  // Проверка возраста
  const ageInput = document.getElementById("age");
  const ageError = document.getElementById("ageError");
  if (!ageInput.checkValidity()) {
    ageError.style.display = "block";
    ageInput.classList.add("invalid");
    isValid = false;
  } else {
    ageError.style.display = "none";
    ageInput.classList.remove("invalid");
    ageInput.classList.add("valid");
  }

  // Проверка профессии
  const professionSelect = document.getElementById("profession");
  const professionError = document.getElementById("professionError");
  if (!professionSelect.checkValidity()) {
    professionError.style.display = "block";
    professionSelect.classList.add("invalid");
    isValid = false;
  } else {
    professionError.style.display = "none";
    professionSelect.classList.remove("invalid");
    professionSelect.classList.add("valid");
  }

  // Проверка пароля
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  if (!passwordInput.checkValidity()) {
    passwordError.style.display = "block";
    passwordInput.classList.add("invalid");
    isValid = false;
  } else {
    passwordError.style.display = "none";
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");
  }

  // Проверка согласия
  const consentCheckbox = document.getElementById("consent");
  if (!consentCheckbox.checked) {
    isValid = false;
    consentCheckbox.classList.add("invalid");
  } else {
    consentCheckbox.classList.remove("invalid");
  }

  // Обновляем состояние кнопки отправки
  submitButton.disabled = !isValid;
  return isValid;
}

// Обработчик события отправки формы
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Отменяем действие по умолчанию

  if (validateForm()) {
    // Если форма валидна, выводим значения в консоль и очищаем форму
    console.log({
      name: form.name.value,
      email: form.email.value,
      age: form.age.value,
      gender: form.gender.value,
      profession: form.profession.value,
      password: form.password.value,
    });
    form.reset();
    submitButton.disabled = true; // Отключаем кнопку после отправки
  }
});

// Обработчики событий focus и blur для каждого поля
const inputs = form.querySelectorAll("input, select");

inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.classList.remove("invalid"); // Убираем класс при фокусе
  });

  input.addEventListener("blur", function () {
    validateForm(); // Проверяем валидность при потере фокуса
  });
});

// Переключение видимости пароля
const togglePassword = document.getElementById("togglePassword");
togglePassword.addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;

  this.setAttribute(
    "src",
    type === "password"
      ? "assets/icons8-глаз-94.png"
      : "assets/icons8-глаз-48.png"
  );
  this.setAttribute(
    "alt",
    type === "password" ? "Показать пароль" : "Скрыть пароль"
  );
});

// Изначально отключаем кнопку отправки
submitButton.disabled = true;

// Добавляем обработчик для проверки валидности при изменении любого поля
inputs.forEach((input) => {
  input.addEventListener("input", validateForm);
});
