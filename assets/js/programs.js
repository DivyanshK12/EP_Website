window.onload = () => {
    sessionStorage.setItem('prevProg', 'about');
}
function change(field)
{
    let prev = sessionStorage.getItem('prevProg', 'about');// integer like 2019, 2018
    if(field!=prev)
    {
        document.getElementById(field).classList.remove('d-none');
        document.getElementById(`nav-${field}`).classList.add('active');
        document.getElementById(prev).classList.add('d-none');
        document.getElementById(`nav-${prev}`).classList.remove('active');
        sessionStorage.setItem('prevProg', field);
    }
}