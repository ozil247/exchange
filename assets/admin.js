 window.onload = function () {
   const adminBtn = document.querySelector('#admin-btn');
   adminBtn.addEventListener('click', function () {
     const adminSection = document.getElementById('admin-section-flex');
     const sideBar = document.getElementById('side-bar');
     adminSection.classList.toggle('active');
     sideBar.classList.toggle('active');
     console.log(adminSection);
   });

   
 }

