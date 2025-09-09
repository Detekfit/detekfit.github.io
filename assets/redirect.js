/**
 * @fileoverview This script handles URL redirection based on the current full URL.
 * It checks if the URL matches a specific path and redirects the user to a new URL.
 */

window.onload = function() {
    // Define the target full URL string. This is more robust than just checking the pathname.
    // We use .includes() to handle both with and without trailing slash cases.
    const targetUrlPart = 'detekfit.com/app-download:thinkink';
    const redirectUrl = 'https://play.google.com/store/apps/details?id=com.wriink.thinkink';
    
    // Get the current full URL.
    const currentUrl = window.location.href.toLowerCase();
  
    // Check if the current URL includes the target string.
    if (currentUrl.includes(targetUrlPart)) {
      // Show the redirection overlay
      const overlay = document.getElementById('redirect-overlay');
      if (overlay) {
        overlay.style.display = 'flex';
        
        // Redirect after a 3-second delay to allow the animation to play.
        setTimeout(() => {
          window.location.replace(redirectUrl);
        }, 3000);
      } else {
        // Fallback: If the overlay element is not found, redirect immediately.
        window.location.replace(redirectUrl);
      }
    }
  };
  