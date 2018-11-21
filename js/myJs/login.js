/*This file contains all styles for JobMii Website

By Bertrand Mounodunga 27.08.2018 12:14*/



function showPwd() {
    var x = document.getElementById("ShowPwdField");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}