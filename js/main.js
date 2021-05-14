//add display class
window.onload = ()=>{
    setTimeout(()=>{
        document.querySelector('body').classList.add('display');
    }, 4000);
}
// sidebar moving

let span = document.getElementById('btnHover');
document.getElementById('sidebarBtn').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('show-sidebar');
    document.querySelector('.cover-box').classList.toggle('get-covered');
    function fillWidth(x){
        if(!x.classList.contains('fill')){
            x.style.width="100%";
            if(x.classList.contains('line1')){
                x.style.marginLeft="0";
                x.style.transform="rotate(45deg)";
                x.style.marginTop="1.2rem";
            }else if(x.classList.contains('line3')){
                x.style.transform="rotate(-45deg)";
                x.style.marginBottom="0.65rem";
            }
            if(x.classList.contains('line2')){
                x.style.opacity="0";
                x.style.visibility="hidden";
                x.style.display="none";
            };
            x.classList.add('fill');
            document.querySelector('.sidebar-click').style.justifyContent="center";
            span.innerHTML="CLOSE";
        }else{
            x.style.width="50%";
            x.style.marginTop="0";
            x.style.transform="rotate(0)";
            x.classList.remove('fill');
            document.querySelector('.sidebar-click').style.justifyContent="space-between";
            span.innerHTML="MENU";
            if(x.classList.contains('line1')){
                x.style.marginLeft="100%";
                x.style.transform="translate(-100%)";
            };
            if(x.classList.contains('line2')){
                x.style.opacity="1";
                x.style.visibility="visible";
                x.style.width="100%";
                x.style.display="block";
            };
            if(x.classList.contains('line3')){
                x.style.marginBottom="0";
            }
        }
    }
    fillWidth(document.querySelector('.line1'));
    fillWidth(document.querySelector('.line2'));
    fillWidth(document.querySelector('.line3'));
})
//header changing
$(document).ready(()=>{
    $(window).scroll(()=>{
        if($(window).scrollTop()>0){
            $('header').addClass('change-header');
        } else{
            $('header').removeClass('change-header');
        }
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>1080){
            $('header').addClass('header-color');
        }else{
            $('header').removeClass('header-color');
        }
    })
});


let mobScreen =window.matchMedia('(max-width:461px)');
mobScreen.addListener(()=>{
    if(mobScreen.matches){
        document.querySelector('header').style.height="70px";
        document.querySelector('header').style.backgroundColor="#1C1E25";
    }else{
        document.querySelector('header').style.backgroundColor="rgba(175, 175, 175, 0.493)";
    }
});


// sec3 boxes scroller

let sec3Boxes = document.querySelectorAll('.sec3-box');
let sec3BoxesWrapper = document.querySelector('.sec3-boxes-wrapper');
let sec3BoxesNames = document.querySelector('.sec3-nav-ul').children; 
let arrows = document.querySelector('.sec3-slide-arrows');
let bef = arrows.firstElementChild;
let aft = arrows.lastElementChild;
let numbering2 = document.getElementById('sec3-counter');
var n=0;

function findActiveBox(){
    for(let i=0; i<sec3Boxes.length; i++){
        if(sec3Boxes[i].classList.contains('active-box')){
            sec3Boxes[i].classList.remove('active-box');
            sec3BoxesNames[i].classList.remove('active-nav-li');
            n=i;
        }
    }
}

sec3Boxes.forEach((x, index) => {
    x.addEventListener('click', ()=>{
        findActiveBox();
        x.classList.add('active-box');
        sec3BoxesNames[index].classList.add('active-nav-li');
        sec3BoxesWrapper.style.transform="translateX(-" + 10* index + "%)";
        numbering2.innerHTML = '0 '+ Number(index+1) +" / 0 6";
    })
});

for(let i=0; i<sec3BoxesNames.length; i++){
    sec3BoxesNames[i].addEventListener('click', ()=>{
        findActiveBox();
        sec3Boxes[i].classList.add('active-box');
        sec3BoxesNames[i].classList.add('active-nav-li');
        sec3BoxesWrapper.style.transform="translateX(-" + 10* i + "%)";
        numbering2.innerHTML = '0 '+ Number(i+1) +" / 0 6";
    })
};

bef.addEventListener('click', ()=>{
    findActiveBox();
    let k = n-1;
    if(k<0) k=5;
    else if(k>5) k=0;
    sec3Boxes[k].classList.add('active-box');
    sec3BoxesNames[k].classList.add('active-nav-li');
    sec3BoxesWrapper.style.transform="translateX(-" + 10* k + "%)";
    numbering2.innerHTML = '0 '+ Number(k+1) +"/ 0 6";
});

aft.addEventListener('click', ()=>{
    findActiveBox();
    let k = n+1;
    if(k<0) k=5;
    else if(k>5) k=0;
    sec3Boxes[k].classList.add('active-box');
    sec3BoxesNames[k].classList.add('active-nav-li');
    sec3BoxesWrapper.style.transform="translateX(-" + 10* k + "%)";
    numbering2.innerHTML = '0 '+ Number(k+1) +" / 0 6";
});
