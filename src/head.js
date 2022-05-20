import './style.css';

function header() {
    const element = document.createElement('div');
    element.classList.add('hero');

    element.innerHTML = `
    <div class="text-container">
        <div class="text" id="intro">Hi I'm</div>
        <div class="text" id="fullName">Tanzeem Xhidori</div>
    </div>`;

    var intro =  document.getElementById('intro');
    var fullName =  document.getElementById('fullName');
    var floatIntro = setTimeout(function(){
        intro.classList.add('floating');
    }, 1000);
    
    var floatName = setTimeout(function(){
        fullName.classList.add('floating')
         console.log('djfldksj')
    }, 1900);

    return element;

}

function addAnimation(){
    let intro =  document.getElementById('intro');
    let fullName =  document.getElementById('fullName');
    let floatIntro = setTimeout(function(){
        intro.classList.add('floating');
    }, 1000);
    
    let floatName = setTimeout(function(){
        fullName.classList.add('floating')
         console.log('djfldksj')
    }, 1900);
}

export  {header, addAnimation}