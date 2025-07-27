// Toggle entre mode clair et sombre
   function toggleTheme() {
       const body = document.body;
       const currentTheme = body.getAttribute('data-theme');
       if (currentTheme === 'dark') {
           body.removeAttribute('data-theme');
           localStorage.setItem('theme', 'light');
           document.querySelector('.theme-toggle').textContent = 'Mode Sombre';
       } else {
           body.setAttribute('data-theme', 'dark');
           localStorage.setItem('theme', 'dark');
           document.querySelector('.theme-toggle').textContent = 'Mode Clair';
       }
   }

   // Charger le thème sauvegardé
   window.onload = () => {
       const savedTheme = localStorage.getItem('theme');
       if (savedTheme === 'dark') {
           document.body.setAttribute('data-theme', 'dark');
           document.querySelector('.theme-toggle').textContent = 'Mode Clair';
       }
   };