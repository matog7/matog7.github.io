window.onload = function() {
    const infos = document.querySelector("#infos");
    const propo = document.querySelector("#propositions");
    const proj = document.querySelector("#projects")

    window.addEventListener('scroll', scrollInfos);
    window.addEventListener('scroll', scrollPropo);
    window.addEventListener('scroll', scrollProject);

    function scrollInfos() {
        console.log(window.scrollY);
        if(window.scrollY >= 300) {
            infos.style.opacity = '1';
            infos.style.transform = 'transformY(0px)'
            infos.style.transition = '400ms ease-out';
        } 
        else {
            infos.style.opacity = '0';
            infos.style.transform = 'transformY(-50px)';
        }
    }

    function scrollPropo() {
        if(window.scrollY >= 1000) {
            propo.style.opacity = '1';
            propo.style.transform = 'transformY(0px)'
            propo.style.transition = '400ms ease-out';
        } 
        else {
            propo.style.opacity = '0';
            propo.style.transform = 'transformY(-50px)';
        }
    }

    function scrollProject() {
        if(window.scrollY >= 1700) {
            proj.style.opacity = '1';
            proj.style.transform = 'transformY(0px)'
            proj.style.transition = '400ms ease-out';
        } 
        else {
            proj.style.opacity = '0';
            proj.style.transform = 'transformY(-50px)';
        }
    }

    scrollEffect();
}