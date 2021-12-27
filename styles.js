'use strict';

window.addEventListener("load", () =>{

    var form = document.querySelector('[customName="formOne"]');

    var userFilm = document.querySelector("#films").value;


    form.addEventListener("submit", ()=>{

        localStorage.setItem(userFilm, userFilm);
        console.log(userFilm);
    })
     
});
    


