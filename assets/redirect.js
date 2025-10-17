/**
 * @fileoverview This script handles URL redirection for multiple apps
 * based on the current URL path. It uses a scalable map to store
 * app-specific redirect URLs.
 */

window.onload = function() {
    // A map to store app paths and their corresponding redirect URLs.
    // Add new apps to this map to scale the project.
    const redirectsMap = new Map([
      ['thinkink', 'https://play.google.com/store/apps/details?id=com.wriink.thinkink'],
      ['gcam', 'https://play.google.com/store/apps/details?id=com.octocore.gcamconfig'],
      // Add more apps here.
      // ['app-name', 'https://your-app-store-url.com'],
    ]);
  
    // Get the last part of the URL path, which corresponds to the app's folder name.
    // Example: '/detekfit.com/thinkink' -> 'thinkink'
    const pathParts = window.location.pathname.toLowerCase().split('/').filter(Boolean);
    const appPath = pathParts[pathParts.length - 1];
  
    // Check if the app path exists in our redirects map.
    if (redirectsMap.has(appPath)) {
      const redirectUrl = redirectsMap.get(appPath);
  
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
  