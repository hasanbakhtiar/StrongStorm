const multiLangSelector = document.querySelectorAll('.multilang');
const langAz = document.querySelector('.langAz');
const langEn = document.querySelector('.langEn');



const doLangAz =()=>{
    multiLangSelector[0].innerHTML = 'Ana Səhifə';
    multiLangSelector[1].innerHTML = 'Haqqımızda';
    multiLangSelector[2].innerHTML = 'Xidmətlərimiz';
    multiLangSelector[3].innerHTML = 'Məqalə';
    multiLangSelector[4].innerHTML = 'Əlaqə';
}

const doLangEn =()=>{
    multiLangSelector[0].innerHTML = 'Home';
    multiLangSelector[1].innerHTML = 'About';
    multiLangSelector[2].innerHTML = 'Services';
    multiLangSelector[3].innerHTML = 'Blog';
    multiLangSelector[4].innerHTML = 'Contact';
}

// langAz.addEventListener('mouseover',doLangAz);
// langAz.addEventListener('mouseout',doLangEn);
// langEn.addEventListener('mousedown',doLangEn);
// langEn.addEventListener('mouseup',doLangAz  );

langAz.addEventListener('click',doLangAz);
langEn.addEventListener('click',doLangEn);



// console.log(new Array());


// Light Dark
const darkLight = document.querySelector('.darkLight');
const box = document.querySelector('#box');
const nav = document.querySelector('nav');

const light = ()=>{
    // document.querySelector('nav').attributes[0].value.substring(24,35) = 'navbar-light';
    // document.querySelector('.box').style.background = '#fff';
    box.attributes[1].value = 'boxlight';
    nav.attributes[0].value = "navbar navbar-expand-lg navbar-light bg-light"

}      
const dark = ()=>{
    // document.querySelector('nav').attributes[0].value.   = 'navbar-light';
    // document.querySelector('.box').style.background = '#000';
    box.attributes[1].value = 'boxdark';
    nav.attributes[0].value = "navbar navbar-expand-lg navbar-dark bg-dark"
}

darkLight.addEventListener('click', light);
darkLight.addEventListener('dblclick', dark);