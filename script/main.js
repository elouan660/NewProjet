function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

// Toggle dropdowns on click (for mobile/touch)
document.addEventListener('DOMContentLoaded', function () {
  var dropButtons = document.querySelectorAll('.dropbtn');
  dropButtons.forEach(function(btn){
    btn.addEventListener('click', function(e){
      var parent = btn.closest('.dropdown');
      if (!parent) return;
      parent.classList.toggle('open');
      e.stopPropagation();
    });
  });

  // Close open dropdowns when clicking outside
  document.addEventListener('click', function(){
    document.querySelectorAll('.dropdown.open').forEach(function(d){ d.classList.remove('open'); });
  });
});