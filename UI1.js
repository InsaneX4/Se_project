document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.loginbtn');
  const loginContainer = document.querySelector('.Pop-up');
  const background = document.querySelector('.left-content');
  const regis = document.querySelector('#signbtn');
  const regiscontainer = document.querySelector('.Pop-up-regis');
  const signin = document.querySelector('#signinbtn');
  const navregis = document.getElementById('registernav');
  const navlogin = document.getElementById('loginnav');
  const loginTextData = [
    { en: 'Login', hi: 'लॉग इन' },
];

const registerTextData = [
    { en: 'Register', hi: 'पंजीकरण' },
];

let loginIndex = 0;
let registerIndex = 0;

function toggleLanguage() {
    const currentLoginText = loginTextData[loginIndex];
    const currentRegisterText = registerTextData[registerIndex];

    navlogin.textContent = currentLoginText.en;
    navregis.textContent = currentRegisterText.en;

    setTimeout(() => {
        navlogin.textContent = currentLoginText.hi;
        navregis.textContent = currentRegisterText.hi;
    }, 1500); // Switch to Hindi after 1.5 seconds

    loginIndex = (loginIndex + 1) % loginTextData.length;
    registerIndex = (registerIndex + 1) % registerTextData.length;
}

// Toggle the language for Login and Register links every 3 seconds (3000 milliseconds)
setInterval(toggleLanguage, 3000);

// Toggle the language for Login and Register links separately every 3 seconds (3000 milliseconds)
setInterval(toggleLoginLanguage, 3000);
setInterval(toggleRegisterLanguage, 3000);


  
loginButton.addEventListener('click', () => {
  console.log('Login button clicked');
  loginContainer.classList.add('active');
});

background.addEventListener('click', () => {
  console.log('Background clicked');
  loginContainer.classList.remove('active');
  regiscontainer.classList.remove('active');
});

regis.addEventListener('click', () => {
  console.log('Register button clicked');
  loginContainer.classList.remove('active');
  regiscontainer.classList.add('active');
});

navregis.addEventListener('click', () => {
  console.log('Register link clicked');
  loginContainer.classList.remove('active');
  regiscontainer.classList.add('active');
});

navlogin.addEventListener('click', () => {
  console.log('Login link clicked');
  loginContainer.classList.add('active');
  regiscontainer.classList.remove('active');
});

signin.addEventListener('click', () => {
  regiscontainer.classList.remove('active');
  loginContainer.classList.add('active');
});

});
  