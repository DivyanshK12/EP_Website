window.onload = () => {
    sessionStorage.setItem('prevProg', 2020);
}
function change(year)
{
    let prev = sessionStorage.getItem('prevProg', 2020);// integer like 2019, 2018
    if(year!=prev)
    {
        document.getElementById(year).classList.remove('d-none');
        document.getElementById(`nav-${year}`).classList.add('active');
        document.getElementById(prev).classList.add('d-none');
        document.getElementById(`nav-${prev}`).classList.remove('active');
        sessionStorage.setItem('prevProg', year);
    }
}