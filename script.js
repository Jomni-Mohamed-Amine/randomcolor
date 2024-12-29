var $btn = document.getElementById('btn');
var $bg = document.querySelector('.bgcolor');

function colors(){
    return Math.floor(Math.random()*255)
}
$btn.addEventListener('click',function(){
var red=colors();
var blue=colors();
var yellow=colors();
$bg.style.backgroundColor=`rgb(${red},${blue},${yellow})`

})