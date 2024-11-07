function openpop(){
    let overlay = document.getElementById("modaloverlay");
    overlay.style.display = "flex";
}
 function closepop(){
    let overlay = document.getElementById("modaloverlay");
    overlay.style.display = "none";
 }

 window.onclick = function(event){
    let overlay = document.getElementById("modaloverlay")
    if(event.target === overlay){
        closepop();
    }
    
 }