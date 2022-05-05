document.querySelector('#signup_sumbit').onclick = function (event) {
    event.preventDefault();
    window.location.href = "http://localhost:63342/Project/Registration%20employee/index.html?_ijt=6q7t8d93rqln3fsjb1abf4qllp&_ij_reload=RELOAD_ON_SAVE"
}

document.querySelector('#login-send').onclick = function (event) {
    event.preventDefault();
    let login = document.querySelector('#signup-name').value;
    let password = document.querySelector('#signup-password').value;


    if(login == "" && password == ""){
        alert("Заполните данные для входа");
    }
    else{
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"/>

        var success_login = new Boolean(false);
        // if((login.search(/[0-9]/) != -1 && (login.search(/[A-Z]/) != -1|| login.search(/[a-z]/) != -1)) && login.length >=7){
        //     success_login = true;
        // }else{
        //     alert("Логин указан неверно");
        //     success_login = false;
        // }


        var success_password = new Boolean(false);
        // if((password.search(/[0-9]/) != -1 && (password.search(/[A-Z]/) != -1|| password.search(/[a-z]/) != -1)) && password.length >=8){
        //     success_password = true;
        // }else{
        //     alert("Пароль указан неверно");
        //     success_password = false;
        // }
    }
}