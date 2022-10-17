/* "Need Help?" Button*/

document.querySelectorAll('[data-toggle-sidebar]').forEach(toggle => {
   toggle.addEventListener('click', e => {
     const sidebarID = toggle.dataset.toggleSidebar;
     const sidebarElement = sidebarID ? document.getElementById(sidebarID) : undefined;
     if (sidebarElement) {
        let sidebarState = sidebarElement.getAttribute('aria-hidden');
        sidebarElement.setAttribute('aria-hidden', sidebarState == 'true' ? false : true); 
     }
   });
});

/* "X" to cancel out of sidebar*/

document.getElementsByClassName('CloseBTN')[0].addEventListener("click", myFunction);
function myFunction() {
   document.getElementById("sidebar1").style.display = "none";
 }


/* toggle button for current state in general questions */ 
$(function() {
   $("#toggle").click(function() {
     if ($(this).is(":checked")) {
       $("#menu1").show();
       $("#menu2").hide();
     } else {
       $("#menu1").hide();
       $("#menu2").show();
     }
   });
 });









/* 
 $(document).ready(function(){       
   $('select').hide();
   $('input').on('change', function(){
        $('select').show();
   })
});
*/ 