window.addEventListener('scroll',function(){
    const navbar=document.queryselector('.navbar');
    navbar.classList.toggle("sticky",window.scorollY>50)
})


const togglebar=document.querySelector('.toggle');
const menu=document.querySelector('ol');

function navToggle()
{
    togglebar.classList.toggle("active");
    menu.classList.toggle("active");

}