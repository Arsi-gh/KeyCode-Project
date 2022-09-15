const $ = document;
const programBody = $.body;
const keyCode = $.querySelector(".keyCode");
const infos = $.getElementsByClassName("event-disc-paragraph");
const sections = $.getElementsByTagName("section");
programBody.addEventListener("keydown", function (event) {
  event.preventDefault();
  keyCode.style.display = "block";
  sections[0].style.display = "block";
  sections[1].style.display = "block";
  sections[2].style.display = "block";
  sections[3].style.display = "block";
  keyCode.innerHTML = event.keyCode;
  infos[0].innerHTML = event.key;
  infos[1].innerHTML = event.location;
  infos[2].innerHTML = event.which;
  infos[3].innerHTML = event.code;
});
