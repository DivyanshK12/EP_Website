window.onload = () => {
  sessionStorage.setItem("prev", 1);
};
function change(id) {
  let prev = sessionStorage.getItem("prev", 1); // integer like 1, 2
  if (id != prev) {
    document.getElementById(id).classList.remove("d-none");
    document.getElementById(`gal-${id}`).classList.add("active");
    document.getElementById(prev).classList.add("d-none");
    document.getElementById(`gal-${prev}`).classList.remove("active");
    sessionStorage.setItem("prev", id);
  }
}

document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
    
    element.addEventListener('click', function (e) {

      let nextEl = element.nextElementSibling;
      let parentEl  = element.parentElement;	

        if(nextEl) {
            e.preventDefault();	
            let mycollapse = new bootstrap.Collapse(nextEl);
            
            if(nextEl.classList.contains('show')){
              mycollapse.hide();
            } else {
                mycollapse.show();
                // find other submenus with class=show
                var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                // if it exists, then close all of them
                if(opened_submenu){
                  new bootstrap.Collapse(opened_submenu);
                }
            }
        }
    }); // addEventListener
  }) // forEach
}); 
// DOMContentLoaded  end