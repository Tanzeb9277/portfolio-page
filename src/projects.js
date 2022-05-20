import './style.css';

function eyeSpy(){
    const eyeSpy = document.createElement('div');
    eyeSpy.classList.add('project');

    eyeSpy.innerHTML=`  <div class="project-img">
    <div class="img-container">
      <img src="https://preview.redd.it/6qkok2ya9n091.png?width=960&crop=smart&auto=webp&s=1f9965d274243a5bf73e6aa49c72117ce5e2d72f" alt="">
    </div>
  </div>
  <div class="details">
    <h1 class='project-title'>Eye Spy</h1>
    <div class="icon-container">
      
    </div>
    <p>Hello</p>
  </div>`

  return eyeSpy;
}

export {eyeSpy}