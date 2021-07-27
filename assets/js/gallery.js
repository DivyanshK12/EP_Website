let items = document.querySelectorAll('.sidebarli');

items.forEach(item => {
  item.addEventListener('click', () => {
     items.forEach(item => item.classList.remove('active'))
      item.classList.add('active')
  })
})

window.onload = () => {
  sessionStorage.setItem('prev', 1);
}
function change(id)
{
  let prev = sessionStorage.getItem('prev', 1);// integer like 1, 2
  if(id!=prev)
  {
      document.getElementById(id).classList.remove('d-none');
      document.getElementById(`gal-${id}`).classList.add('active');
      document.getElementById(prev).classList.add('d-none');
      document.getElementById(`gal-${prev}`).classList.remove('active');
      sessionStorage.setItem('prev', id);
  }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function zoom(p) {
 var x = document.getElementsByClassName("myImg");
 var i;
 for (i = 0; i < x.length; i++)
 {
    if(x[i] == p)
    {
      modal.style.display = "block";
      modalImg.src = x[i].src;
      captionText.innerHTML = x[i].alt;
    }
    
 }
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}