fetch('/components/sidebar.html')
          .then(response => response.text())
          .then(html => {
            document.querySelector('#sidebar-container').innerHTML = html;
          })
          .catch(error => {
            console.error('Error loading sidebar:', error);
});