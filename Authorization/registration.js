document.querySelector('#signup_sumbit').onclick = function (event) {
    window.open("../Authorization/index.html","Авторизация");
}

document.querySelector('#login-send').onclick = function (event) {
    event.preventDefault();
    let division = document.querySelector('#signup-division').value;
    let surname = document.querySelector('#signup-surname').value;
    let name = document.querySelector('#signup-name').value;
    let patr = document.querySelector('#signup-patronymic').value;
    let email = document.querySelector('#signup-email').value;
    let password = document.querySelector('#signup-password').value;

    if(division == "Выберите направление" || surname == "" || name == "" || patr == "" || email == "" || password == ""){
        alert("Пожалуйста, заполните все поля");
    }
    else{
        var success_login = new Boolean(false);
        if (email.length < 7 ||  /[a-zA-Z]/.test(email) == false || /[0-9]/.test(email) == false
            ||  /[@]/.test(email) == false) {
            alert ( "Логин должен быть не менее 7 символов и содержать в себе буквы, цифры и @" );
            success_login = false;
        }


        var success_password = new Boolean(false);
        if (password.length < 7 ||  /[a-zA-Z]/.test(password) == false || /[0-9]/.test(password) == false) {
            alert ( "Пароль должен быть не менее 8 символов и содержать в себе буквы и цифры" );
            success_password = false;
        }

        if(success_login && success_password){
            alert ( "Регистрация прошла успешно" );
        }
    }
}