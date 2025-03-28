// Default fog settings
         var vantaEffect = VANTA.FOG({
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

       // Function to apply theme to Vanta fog and save it in localStorage
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
            baseColor: 0x301934
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


