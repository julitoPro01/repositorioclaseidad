//asignar unvento a un elemento
window.onload=function(){
var buttons = document.querySelectorAll('button');
buttons.forEach(function(button){});
button=addEventListener('click',function (event){
    var button = event.target;
    var note = button.dataset.note;
    //console.log(note);
    var audio = document.getElementById('audio' + note);
   audio=pause();
    audio.currentTime = 0; // reproducir en el tiempo cero 0
    audio.play();
})
}
