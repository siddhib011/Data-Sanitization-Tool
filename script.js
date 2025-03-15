// Login Page Logic
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Dummy authentication
    if (username === 'admin' && password === 'password') {
      window.location.href = 'homepage.html';
    } else {
      document.getElementById('error-message').textContent = 'Invalid username or password';
    }
  });
  
  // Homepage Logic
  if (window.location.pathname.endsWith('homepage.html')) {
    document.getElementById('sanitizeButton').addEventListener('click', function () {
      const progressBar = document.getElementById('progress');
      const progressText = document.getElementById('progress-text');
      let width = 0;
  
      // Simulate progress
      const interval = setInterval(() => {
        if (width >= 100) {
          clearInterval(interval);
          alert('Data sanitization completed successfully!');
        } else {
          width++;
          progressBar.style.width = width + '%';
          progressText.textContent = width + '% Complete';
        }
      }, 30); // Adjust speed of progress bar
    });
  }