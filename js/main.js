
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

// fucking carousel slider


// let car_inds = document.querySelector('.carousel-indicators').childNodes;

// function findActive(){
//     for(let i=0; i<car_inds.length; i++){
//         if(car_inds[i].classList.contains('activeColor')){
//             car_inds[i].classList.remove('activeColor');
//         }
//         if(car_inds[i].classList.contains('active')){
//             // x.classList.add('activeColor');
//             car_inds[i].style.backgroundColor="red";
//         }
//     }
// }
// car_inds.forEach(x => {
//     x.addEventListener('click', ()=>{
//         findActive();
//     })
// });

let indicators = document.querySelector('.carousel-indicators').childNodes;
function findActive(){
    for(let i=0; i<indicators.length; i++){
        if(indicators[i].classList.contains('activeColor')){
            indicators[i].classList.remove('activeColor');
        }
    }
}
indicators.forEach(element => {
    element.addEventListener('click', ()=>{
        findActive;
        element.classList.add('activeColor');
    })
});