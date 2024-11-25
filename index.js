
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var side = document.getElementById("sidemenu");
var side = document.getElementById("sidemenu");



const openTab = (tabname) => {
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const openMenu = () => {
    side.style.right="0";
}
const closeMenu = () => { 
    side.style.right ="-200px";
}

// Google sheets

const scriptURL = 'https://script.google.com/macros/s/AKfycbx9x3ooFTetuDBmdZjSJzUGNVi9ae4ULxNGa8pq71OLGEsUfzSVzV_v3Bam4W0r48gIcw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML  = "Message Received, Thanks!"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})