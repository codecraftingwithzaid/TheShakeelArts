document.addEventListener('DOMContentLoaded', function() {
    debugger;
    const redirectText = document.getElementById('redirectText');
    const pageTitle = document.querySelector('.page-title');
  
    redirectText.addEventListener('click', function() {
      //pageTitle.style.display = 'block'; // Show the .page-title content
      window.scrollTo({ top: pageTitle.offsetTop, behavior: 'smooth' }); // Scroll to .page-title
    });
  });