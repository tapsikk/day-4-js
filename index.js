const form = document.querySelector(".form");
const submitBtn = document.querySelector(".submit-btn");
const modalSuccess = document.querySelector("#modal-success");
const modalFailure = document.querySelector("#modal-failure");
const successMessage = document.querySelector("#success-message");
const closeButtons = document.querySelectorAll(".close-modal");

const showModal = (modal) => {
  modal.style.display = "flex";
};

const hideModal = (modal) => {
  modal.style.display = "none";
};


const showMessageSuccess = (formData) => {
  successMessage.innerHTML = `Your Name: ${formData.name} <br> Your Gender: ${formData.gender} <br> Your Country: ${formData.country}`;
  showModal(modalSuccess);
};


const showMessageFailure = () => {
  showModal(modalFailure);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formElements = form.elements;
  const formData = {
    name: null,
    gender: null,
    country: null,
  };
  const nameValue = formElements.name.value;
  const genderValue = formElements.gender.value;
  const countryValue = formElements.country.value;

  if (nameValue.length === 0) {
    showMessageFailure();
    return;
  }
  formData.name = nameValue;
  formData.gender = genderValue;
  formData.country = countryValue;
  console.log(formData);

  showMessageSuccess(formData);
};

closeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const modalId = e.target.getAttribute("data-modal");
    const modal = document.querySelector(`#${modalId}`);
    hideModal(modal);
  });
});

submitBtn.addEventListener("click", handleSubmit);
