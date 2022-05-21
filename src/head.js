import './style.css';

function header() {
    const element = document.createElement('div');
    element.classList.add('hero');

    element.innerHTML = `
    <div class="shape first"></div>
    <div class="shape second"></div>
    <div class="shape third"></div>
    <div class="shape fourth"></div>
    <div class="text-container">
        <div class="text" id="intro">Hi I'm</div>
        <div class="text" id="fullName">Tanzeem Xhidori</div>
        <div class="text" id="title">Web Developer</div>
    </div>`;

    

    return element;

}

function addAnimation(){
    let intro =  document.getElementById('intro');
    let fullName =  document.getElementById('fullName');
    let title =  document.getElementById('title');
    let floatIntro = setTimeout(function(){
        intro.classList.add('floating');
    }, 1000);
    
    let floatName = setTimeout(function(){
        fullName.classList.add('floating')
    }, 1900);
    let floatTitle = setTimeout(function(){
        title.classList.add('floating')
         
    }, 2800);
}

export  {header, addAnimation}