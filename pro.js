
toggle.addEventListener('click', function () {
   
    if(this.classList.toggle('bi-brightness-high')){
        body.style.background = "#080809";
        body.style.transition = "2s";     
        document.getElementById('user-detail-name').style.color = "orangered";
        document.getElementById('user-detail-name').style.transition = "1s";
        document.querySelector('#one>.text-1').style.color = "white";
        document.querySelector('#one>.text-1').style.transition = "2s";  
        document.querySelector('#one>.text-3>span').style.color = "white";
        document.querySelector('#one>.text-3>span').style.transition = "2s"; 
        document.querySelector('#resume-link-2').style.color = "white";
        document.querySelector('#resume-button-2').style.transition = "2s";
        document.querySelector('#resume-button-2').style.border = "1px solid orangered";
        document.querySelector('#about>h1').style.color = "white";
        document.querySelector('#one>.text-3>span').style.transition = "2s";
        document.querySelector('#user-detail-intro').style.color = "white";
        document.querySelector('#user-detail-intro').style.transition = "2s";
        document.querySelector('#skills>h1').style.color = "white";
        document.querySelector('#skills>h1').style.transition = "2s";
        document.querySelector('#projects>h1').style.color = "white";
        document.querySelector('#projects>h1').style.transition = "1s";
        document.querySelector('.github-activity-calendar h1').style.color = "white";
        document.querySelector('.github-activity-calendar h1').style.transition = "1s";
       
    }else{
        body.style.background = "white";
        body.style.transition = "2s";
        document.getElementById('user-detail-name').style.color = "RGB(35, 40, 62)";
        document.getElementById('user-detail-name').style.transition = "2s";
        document.querySelector('#one>.text-1').style.color = "#5566a1";
        document.querySelector('#one>.text-1').style.transition = "2s";
        document.querySelector('#one>.text-3>span').style.color = "#5566a1";
        document.querySelector('#one>.text-3>span').style.transition = "2s";
        document.querySelector('#resume-button-2>a').style.color = "RGB(35, 40, 62)";
        document.querySelector('#resume-button-2').style.transition = "2s";
        document.querySelector('#resume-button-2').style.border = "1px solid RGB(35, 40, 62)";
        document.querySelector('#about>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('#about>h1').style.transition = "2s";
        document.querySelector('#user-detail-intro').style.color = "#5566a1";
        document.querySelector('#user-detail-intro').style.transition = "2s";
        document.querySelector('#skills>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('#skills>h1').style.transition = "2s";
        document.querySelector('#projects>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('#projects>h1').style.transition = "2s";
        document.querySelector('.github-activity-calendar>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('.github-activity-calendar>h1').style.transition = "2s";
       
    }
})


let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
// typing text animation script
var typed = new Typed(".typing", {
    strings: [ "A Java Backend Developer"],
    typeSpeed: 80,
    backSpeed: 40,
    loop: true,
})




document.querySelector('#resume-link-1').addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1NtJQuIXxjiDBSTIraa_eUgJxS_b-0kSl/view?usp=drive_link", "_blank");
})

document.querySelector('#resume-link-2').addEventListener("click", () => {

    window.open("https://drive.google.com/file/d/1NtJQuIXxjiDBSTIraa_eUgJxS_b-0kSl/view?usp=drive_link", "_blank");

 })


const sr = ScrollReveal({
    origin: 'left',
    distance: '120px',
    duration: 2000,
    reset: true
})

sr.reveal('#about h1', { delay: 100})
sr.reveal('.home-img', { delay: 500 })
sr.reveal('#user-detail-intro', { delay: 500 })
sr.reveal('.skill', { delay: 100 })

sr.reveal('.project', {})
sr.reveal('.project-card img', { delay: 100 })
sr.reveal('.project-title', { delay: 100 })
sr.reveal('.project-description', { delay: 100 })
sr.reveal('.project-tech-stack', { delay: 100 })
sr.reveal('.repo-links', { delay: 100 })

sr.reveal('#github-streak-stats', { delay: 200 })
sr.reveal('#github-top-langs', { delay: 300 })
sr.reveal('#github-stats-card', { delay: 500 })

 sr.reveal('.calendar', { delay: 500 })
  
