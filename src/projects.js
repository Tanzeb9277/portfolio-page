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
    <div class="icon">
    <a href="">
      <img src="https://img.icons8.com/ios-filled/344/github.png" alt="Github">
    </a>
  </div>
  <div class="icon">
    <a href="">
      <img src="https://img.icons8.com/ios/344/domain.png" alt="Github">
    </a>
  </div>
    </div>
    <p class="tools">Tools Used:</p>
    <div class="tool-container">
    <div class="icon">
      <img src="https://img.icons8.com/color/344/html-5--v1.png" alt="HTML"> 
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/css3.png" alt="CSS">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/javascript--v1.png" alt="JavaScript">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/webpack.png" alt="Webpack">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/google-firebase-console.png" alt="Firebase">
  </div>
  </div>`

  return eyeSpy;
}

export {eyeSpy}