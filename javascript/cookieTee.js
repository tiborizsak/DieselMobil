function cookieContent(){
    var cookieText = "<div id='content'><p>Az oldalunk csak a minimális működéshez szükséges cookiekat alkalmazza.</p><div id='cookiebutton'><button onclick='cookieclick();'>Megértettem!</button></div></div>";
    var cookieStyle = `
        background-color:#fcd033;
        position:fixed;
        bottom:0;
        left:0;
        right:0;
        z-index:9999;
        `
    var cookieContentStyle = `
        margin:auto;
        display:flex;
        padding:10px;
        width:40%;
    `
    var cookieButtonStyle = `
        padding-left:10px;
    `

    document.getElementById("cookieconsent").innerHTML = cookieText;
    document.getElementById("cookieconsent").style = cookieStyle;
    document.getElementById("content").style = cookieContentStyle;
    document.getElementById("cookiebutton").style = cookieButtonStyle;
};

function cookieclick(){
    document.getElementById("cookieconsent").style.display = "none"; 
};
