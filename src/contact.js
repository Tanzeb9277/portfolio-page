import './style.css'

function contact(){

    const contactForm = document.createElement('div');
    contactForm.classList.add('contact');

    contactForm.innerHTML = `<h2>Get In Touch With Me</h2>
    <div class="contact-form-container">
      <div class="contact-form">
        <form action="https://formspree.io/f/xknkeqzz" method="POST">
          <div class="form-control">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="sender-name"
              placeholder="Enter Your Name"
              class="input-field"
              required
            />
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="sender-email"
              placeholder="Enter Your Email"
              class="input-field"
              required
            />
          </div>
          <div class="form-control">
            <label for="message">Message</label>
            <textarea
              id="message"
              cols="60"
              rows="10"
              placeholder="Enter Your Message"
              name="message"
              class="input-field"
              required
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            id="submit-btn"
            class="submit-btn"
          />
        </form>
      </div>
    </div>`;

    return contactForm;


}

function footer(){
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div class="icon-container">
  <div class="icon">
  <a href="https://github.com/Tanzeb9277" target='_blank'>
    <img src="https://img.icons8.com/ios-filled/344/ffffff/github.png" alt="Github">
  </a>
    </div>
      <div class="icon">
      <a href="https://www.linkedin.com/in/tanzeb-choudhury-722902140/" target='_blank'>
        <img src="https://img.icons8.com/ios-filled/344/ffffff/linkedin.png" alt="LinkedIn">
      </a>
      </div>
    </div>
  <p>Designed and Developed by Tanzeem Xhidori &copy; Copyright 2022</p>
  `;
   return footer;
}

export  {contact, footer};