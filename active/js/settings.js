 
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
    }
}

    

