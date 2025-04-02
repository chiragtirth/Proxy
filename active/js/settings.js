 
         function driveCloak() {
            localStorage.setItem('cloakedTitle', 'My Drive - Google Drive');
            localStorage.setItem('cloakedIcon', 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png');
            tabCloak();
         }

         function docsCloak() {
            localStorage.setItem('cloakedTitle', 'Google Docs');
            localStorage.setItem('cloakedIcon', 'https://ssl.gstatic.com/images/branding/product/1x/docs_2020q4_32dp.png');
            tabCloak();
         }

         function canvasCloak() {
            localStorage.setItem('cloakedTitle', 'Home');
            localStorage.setItem('cloakedIcon', 'https://example.instructure.com/favicon.ico');
            tabCloak();
         }


          function ciscoCloak() {
            localStorage.setItem('cloakedTitle', 'Site Blocked');
            localStorage.setItem('cloakedIcon', 'https://cdn.umbrella.marketops.umbrella.com/wp-content/uploads/2020/03/25162453/cropped-cisco-favicon-32x32.png');
            tabCloak();
         }

         
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

         function openCloaker() {
    try {
        var win = window.open('about:blank', '_blank');
        if (!win) {
            throw new Error("Popup blocked");
        }

        var url = window.location.hostname;
        var iframe = win.document.createElement('iframe');
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.src = 'https://' + url;

        win.document.body.style.margin = "0";
        win.document.body.style.height = "100vh";
        win.document.body.appendChild(iframe);

        // Set the title to a zero-width whitespace
        win.document.title = '\u200B';

        // Set the favicon
        var link = win.document.createElement('link');
        link.rel = 'icon';
        link.href = 'blankfavicon.ico';
        win.document.head.appendChild(link);

        window.location.replace("https://kahoot.it");

    } catch (e) {
        alert("Please allow popups and redirects for this site for the about:blank to open.");
    }
}

         tabCloak();


// IGNORE THIS I CANT USE IMPORTS 
   function applyTheme(theme) {
      const themes = {
         dark: {
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0x0,
            baseColor: 0x4a4a4a
         },
         light: {
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0x0,
            baseColor: 0xffffff
         },
         sunset: {
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0x0,
            baseColor: 0xfd5e53
         },
         hacker: {
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0x0,
            baseColor: 0x61CF5A
         },
         lava: {
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0x0,
            baseColor: 0xE42217
         },
           shock: {
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0x0,
            baseColor: 0xcde746
         },
          deepsea: {
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0x0,
            baseColor: 0x0000FF
         },
          nautical: {
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0x0,
            baseColor: 0x00FFFF
         },
         barney: {
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0x0,
            baseColor: 0x7d37af
         }
               
      };

      // Apply the selected theme to Vanta fog
      vantaEffect.setOptions(themes[theme]);

      // Save the theme to localStorage
      localStorage.setItem('theme', theme);
   }

   // Theme Button Functions
   function themeDark() {
      applyTheme('dark');
   }

   function themeLight() {
      applyTheme('light');
   }

   function themeSunset() {
      applyTheme('sunset');
   }

   function themeHacker() {
      applyTheme('hacker');
   }
          function themeLava() {
      applyTheme('lava');
   }
         function themeShock() {
      applyTheme('shock');
   }
         function themeDeepsea() {
      applyTheme('deepsea');
   }
         function themeNautical() {
      applyTheme('nautical');
   }

         function themeBarney() {
      applyTheme('barney');
   }



   // Check for stored theme in localStorage on page load
   window.onload = function() {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
         applyTheme(savedTheme);
      }
   };

// IGNORE THIS I CANT USE IMPORTS 

function vantaOff() {
    if (window.VANTA) {
        if (window.VANTA.current) {
            window.VANTA.current.destroy(); // Remove the Vanta background
        }
    }
    document.body.style.backgroundColor = "black"; // Set background to black
}

function vantaOn() {
    if (window.VANTA) {
        window.VANTA.FOG({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0x0,
            midtoneColor: 0x0,
            lowlightColor: 0x0,
            baseColor: 0x4a4a4a
        });
     applyTheme();
    }
}

    

