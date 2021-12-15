'use strict';

window.addEventListener("load", () => {

    var form = document.querySelector('[customName="formOne"]');

    form.addEventListener("submit", () => {
    
        var userFilms = document.querySelector('[customName="inputText"]').value;
        localStorage.setItem("Films", userFilms);
    })
});

