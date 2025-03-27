function tabCloak() {
            var newTitle = localStorage.getItem('cloakedTitle');
            var newIcon = localStorage.getItem('cloakedIcon');

            if (newTitle === null || newTitle === '') {
               alert('No Cloak Detected. Please select one in settings.');
            } else {
               localStorage.setItem('tabTitle', newTitle);
               localStorage.setItem('tabIcon', newIcon);
               document.title = newTitle;
               var icon = document.querySelector('link[rel="icon"]');
               icon.setAttribute('href', newIcon);
            }
         }

         


// Call tabCloak() to set the title and icon on page load
tabCloak(); 
