// The variable height gives the height of the user's browser
let height = window.innerHeight|| document.documentElement.clientHeight || document.body.clientHeight;
document.getElementById('containerOne').style.height = height + "px";
document.getElementById('parallaxThree').style.height = height + "px";

let parallaxHeight = height * 3 / 4;
const parallaxList = ["parallaxOne", "parallaxTwo"];
for (let i = 0; i < parallaxList.length; i++) {
    document.getElementById(parallaxList[i]).style.height = parallaxHeight + "px";
}

let containers = document.getElementsByClassName('containerGeneral');
let containerMargin = height / 16;
for (let i = 0; i < containers.length; i++) {
    containers[i].style.marginTop = containerMargin + "px";
    containers[i].style.marginBottom = containerMargin + "px";
}