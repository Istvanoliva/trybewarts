const loginButton = document.getElementById('buttonLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

loginButton.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function habilitaBtn() {
    if (agreement.checked === true) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  }
agreement.addEventListener('change', habilitaBtn);

