import "./assets/sass/styles.scss";
import "normalize.css/normalize.css";

var Name;

start();

function start() {
    var lang;
    lang = window.prompt("Do You Want English page Yes OR No?");
    if (lang == "yes" || lang == "YES" || lang == "Yes") {
        Name = window.prompt("what is your name?");
        setTimeout(function() { alert("hello " + Name) }, 2000);
        document.getElementById("name").innerHTML = "Hello, " + Name;
    } else if (lang == "no" || lang == "NO" || lang == "No") {
        Name = window.prompt("ما أسمك؟");
        setTimeout(function() { alert("مرحبا يا " + Name) }, 3000);
        document.getElementById("name").innerHTML = "مرحبا, " + Name;
    } else {
        alert("Error | خطأ");
        start();

    }



}