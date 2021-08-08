let items = document.querySelectorAll(".sidebarli");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

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
