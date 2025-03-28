 function filterApps() {
      let input = document.getElementById('searchBar').value.toLowerCase();
      let buttons = document.querySelectorAll('.cloak-button');

      buttons.forEach(button => {
         let gameName = button.textContent.toLowerCase();
         let parentLink = button.parentElement; // Get the parent <a> element

         if (gameName.includes(input)) {
            parentLink.style.display = 'block';
         } else {
            parentLink.style.display = 'none';
         }
      });
   }

