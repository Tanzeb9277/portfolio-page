import './style.css';
import AettidImg from './aettid.png'
import BlogImg from './blog.png'
import EtchaSketchImg from './etcha-sketch.png'
import EyeSpyImg from './eyespy.png'
import MaedittImg from './maeditt.png'

function projectHeader(){
  const header = document.createElement('div');
  header.classList.add('project-header');

  header.innerHTML = `<h1>Projects</h1>`;

  return header;
}

function etchaSketch(){
  const eyeSpy = document.createElement('div');
  eyeSpy.classList.add('project', 'dark');

  eyeSpy.innerHTML=`  
  <div class="details">
  <h1 class='project-title'>Etch-a-sketch</h1>
  <div class="icon-container">
  <div class="icon">
  <a href="https://github.com/Tanzeb9277/etch-a-sketch" target='_blank'>
    <img src="https://img.icons8.com/ios-filled/344/ffffff/github.png" alt="Github">
  </a>
    </div>
      <div class="icon">
      <a href="https://tanzeb9277.github.io/etch-a-sketch/"  target='_blank'>
        <img src="https://img.icons8.com/ios/344/ffffff/domain.png" alt="Website">
      </a>
      </div>
    </div>
      <p class="desc">Description:A browser version of something between a sketchpad and an Etch-A-Sketch.</p>
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
    </div>
  </div>
  <div class="project-img">
    <div class="img-container">
      <img src="${EtchaSketchImg}" alt="">
    </div>
  </div>
`

return eyeSpy;
}



function eyeSpy(){
    const eyeSpy = document.createElement('div');
    eyeSpy.classList.add('project');

    eyeSpy.innerHTML=`  <div class="project-img">
    <div class="img-container">
      <img src="${EyeSpyImg}" alt="">
    </div>
  </div>
  <div class="details">
    <h1 class='project-title'>Eye Spy</h1>
    <div class="icon-container">
    <div class="icon">
    <a href="https://github.com/Tanzeb9277/eye-spy" target='_blank'>
      <img src="https://img.icons8.com/ios-filled/344/github.png" alt="Github">
    </a>
  </div>
  <div class="icon">
    <a href="https://tanzeb9277.github.io/eye-spy/" target='_blank'>
      <img src="https://img.icons8.com/ios/344/domain.png" alt="Website">
    </a>
  </div>
    </div>
    <p class="desc">Description: Photo tagging game featuring the final image from <a href="https://www.reddit.com/r/place/comments/twft1q/full_screenshot_of_rplace_2022/">r/Place</a></p>
    <p class="tools">Tools Used:</p>
    <div class="tool-container">
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

function aettid(){
  const eyeSpy = document.createElement('div');
  eyeSpy.classList.add('project', 'dark');

  eyeSpy.innerHTML=`  
  <div class="details">
  <h1 class='project-title'>Aettid</h1>
  <div class="icon-container">
  <div class="icon">
  <a href="https://github.com/Tanzeb9277/aettid-website" target='_blank'>
    <img src="https://img.icons8.com/ios-filled/344/ffffff/github.png" alt="Github">
  </a>
    </div>
      <div class="icon">
      <a href="https://tanzeb9277.github.io/aettid-website/" target='_blank'>
        <img src="https://img.icons8.com/ios/344/ffffff/domain.png" alt="Website">
      </a>
      </div>
    </div>
      <p class="desc">Description: Social Media site for photos of food, dishes, and recipes</p>
      <p class="tools">Tools Used:</p>
      <div class="tool-container">
    <div class="icon">
        <img src="https://img.icons8.com/color/344/css3.png" alt="CSS">
    </div>
    <div class="icon">
        <img src="https://img.icons8.com/color/344/javascript--v1.png" alt="JavaScript">
    </div>
    <div class="icon">
        <img src="https://img.icons8.com/office/344/react.png" alt="React">
    </div>
    <div class="icon">
        <img src="https://img.icons8.com/color/344/google-firebase-console.png" alt="Firebase">
    </div>
    </div>
  </div>
  <div class="project-img">
    <div class="img-container">
      <img src="${AettidImg}" alt="">
    </div>
  </div>
`

return eyeSpy;
}


function blog(){
  const eyeSpy = document.createElement('div');
  eyeSpy.classList.add('project');

  eyeSpy.innerHTML=`  <div class="project-img">
  <div class="img-container">
    <img src="${BlogImg}" alt="">
  </div>
</div>
<div class="details">
  <h1 class='project-title'>Blog App</h1>
  <div class="icon-container">
  <div class="icon">
  <a href="https://github.com/Tanzeb9277/blog-app" target='_blank'>
    <img src="https://img.icons8.com/ios-filled/344/github.png" alt="Github">
  </a>
</div>
<div class="icon">
  <a href="https://tanzeb9277.github.io/blog-app/" target='_blank'>
    <img src="https://img.icons8.com/ios/344/domain.png" alt="Website">
  </a>
</div>
  </div>
  <p class="desc">Description: The Blog app is a visual representation of the blog api working as intended, allowing users to view and comment on published posts.</p>
  <p class="tools">Tools Used:</p>
  <div class="tool-container">
<div class="icon">
    <img src="https://img.icons8.com/color/344/css3.png" alt="CSS">
</div>
<div class="icon">
    <img src="https://img.icons8.com/color/344/javascript--v1.png" alt="JavaScript">
</div>
<div class="icon">
        <img src="https://img.icons8.com/office/344/react.png" alt="React">
</div>
<div class="icon">
    <img src="https://img.icons8.com/color/256/django.png" alt="Node">
</div>
<div class="icon">
    <img src="https://img.icons8.com/color/256/postgreesql.png" alt="Mongo">
</div>
</div>`

return eyeSpy;
}
function maeditt(){
  const eyeSpy = document.createElement('div');
  eyeSpy.classList.add('project', 'dark');

  eyeSpy.innerHTML=`  
  <div class="details">
  <h1 class='project-title'>Maeditt</h1>
  <div class="icon-container">
  <div class="icon">
  <a href="https://github.com/Tanzeb9277/maeditt-app" target='_blank'>
    <img src="https://img.icons8.com/ios-filled/344/ffffff/github.png" alt="Github">
  </a>
    </div>
      <div class="icon">
      <a href="https://tanzeb9277.github.io/maeditt-app/" target='_blank'>
        <img src="https://img.icons8.com/ios/344/ffffff/domain.png" alt="Website">
      </a>
      </div>
    </div>
      <p class="desc">Description: Social Media site that allows users to sign up, sign in, submit posts, like posts, comment on posts, and add friends</p>
      <p class="tools">Tools Used:</p>
      <div class="tool-container">
      <div class="icon">
      <img src="https://img.icons8.com/color/344/css3.png" alt="CSS">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/javascript--v1.png" alt="JavaScript">
  </div>
  <div class="icon">
          <img src="https://img.icons8.com/office/344/react.png" alt="React">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/nodejs.png" alt="Node">
  </div>
  <div class="icon">
      <img src="https://img.icons8.com/color/344/mongodb.png" alt="Mongo">
  </div>
    </div>
  </div>
  <div class="project-img">
    <div class="img-container">
      <img src="${MaedittImg}" alt="">
    </div>
  </div>
`

return eyeSpy;
}

export {eyeSpy, aettid, projectHeader, etchaSketch, blog, maeditt}