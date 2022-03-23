document.querySelector('#Cancel_button').onclick = function(event) {
    event.preventDefault();
    const result = confirm("Вы хотите отменить регистрацию?");
    if(result){
        window.location.href = "http://localhost:63342/Project/Authorization/index.html?_ijt=raei2i2uejlai0ohe1o3ev4aic&_ij_reload=RELOAD_ON_SAVE"
    }

}