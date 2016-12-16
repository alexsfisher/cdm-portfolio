function transition(show, hide1, hide2){
    // display new page
    document.getElementById(show).style.visibility = "visible";
    //fade in/out
    document.getElementById(show).style.opacity = "1";
    document.getElementById(hide1).style.opacity = "0";
    document.getElementById(hide2).style.opacity = "0";
    //hide other pages
    document.getElementById(hide1).style.visibility = "hidden";
    document.getElementById(hide2).style.visibility = "hidden";
}
