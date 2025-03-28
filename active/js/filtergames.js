function filterGames() {
      let input = document.getElementById('searchBar').value.toLowerCase();
      let buttons = document.querySelectorAll('.cloak-button');

      buttons.forEach(button => {
         let gameName = button.textContent.toLowerCase();
         let parentLink = button.parentElement; 

         if (gameName.includes(input)) {
            parentLink.style.display = 'block';
         } else {
            parentLink.style.display = 'none';
         }
      });
   }

