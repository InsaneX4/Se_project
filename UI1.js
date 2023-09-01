document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.loginbtn');
    const loginContainer = document.querySelector('.Pop-up');
    const background = document.querySelector('.left-content');
    const regis = document.querySelector('#signbtn');
    const regiscontainer = document.querySelector('.Pop-up-regis');
    const signin = document.querySelector('#signinbtn');
    const navregis = document.querySelector('#registernav');
    loginButton.addEventListener('click', () => {
      loginContainer.classList.add('active');
    });
    background.addEventListener('click', () => {
        console.log('Background clicked');
        loginContainer.classList.remove('active');
        regiscontainer.classList.remove('active');
      });

        regis.addEventListener('click', () => {
        console.log('Background clicked');
        loginContainer.classList.remove('active');
        regiscontainer.classList.add('active');

      });
      navregis.addEventListener('click', () => {
        console.log('Background clicked');
        loginContainer.classList.remove('active');
        regiscontainer.classList.add('active');

      });
        signin.addEventListener('click', () => {
            regiscontainer.classList.remove('active');
            loginContainer.classList.add('active');
        });
    
    
  });
  