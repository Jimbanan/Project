document.querySelector('#signup_sumbit').onclick = function (event) {
    event.preventDefault();
    window.location.href = "http://localhost:63342/Project/Registration%20employee/index.html?_ijt=jgivq0kh7kq3hq0ccvvlh7kpfu&_ij_reload=RELOAD_ON_SAVE"
}

document.querySelector('#login-send').onclick = function (event) {
    event.preventDefault();
    let login = document.querySelector('#signup-name').value;
    let password = document.querySelector('#signup-password').value;

    if(login == "" && password == ""){
        alert("��������� ������ ��� �����");
    }
    else{
        var success_login = new Boolean(false);
        // if((login.search(/[0-9]/) != -1 && (login.search(/[A-Z]/) != -1|| login.search(/[a-z]/) != -1)) && login.length >=7){
        //     success_login = true;
        // }else{
        //     alert("����� ������ �������");
        //     success_login = false;
        // }


        var success_password = new Boolean(false);
        // if((password.search(/[0-9]/) != -1 && (password.search(/[A-Z]/) != -1|| password.search(/[a-z]/) != -1)) && password.length >=8){
        //     success_password = true;
        // }else{
        //     alert("������ ������ �������");
        //     success_password = false;
        // }
    }
}