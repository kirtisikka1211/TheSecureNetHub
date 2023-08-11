function myFunction() {
    var x = document.getElementById("myTopnav");
    var sidebar = document.getElementById("slidingSidebar");
    
    if (x.className === "topnav") {
        x.className += " responsive";
        sidebar.style.right = "0"; // Slide in the sidebar
    } else {
        x.className = "topnav";
        sidebar.style.right = "-250px"; // Slide out the sidebar
    }
    
}
function closeSidebar() {
    document.getElementById("slidingSidebar").style.right = "-250px";
}