document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
  
    // Create header
    const header = document.createElement('header');
    header.innerHTML = `
      <h1>Our Landing Page</h1>
      <p>Discover amazing products and services.</p>
    `;
    app.appendChild(header);
  
    // Create form
    const form = document.createElement('form');
    form.classList.add('container');
    form.innerHTML = `
      <h2>Sign Up</h2>
      <div class="form-group">
        <input type="text" id="name" placeholder="Name" required>
      </div>
      <div class="form-group">
        <input type="email" id="email" placeholder="Email" required>
      </div>
      <button type="submit" class="btn">Sign Up Now</button>
    `;
    app.appendChild(form);
  
    // Add event listener to the form
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      alert(`Thank you, ${name}, for signing up with email: ${email}!`);
    });
  
    // Create footer
    const footer = document.createElement('footer');
    footer.textContent = 'Copyright © 2024 Your Company';
    app.appendChild(footer);
  });
  