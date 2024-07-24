let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let cursor1 = document.querySelector(".cursor-1");
let cursor2 = document.querySelector(".cursor-2");

window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + "px";
  cursor1.style.left = e.pageX + "px";

  cursor2.style.top = e.pageY + "px";
  cursor2.style.left = e.pageX + "px";
};

document.querySelector("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor1.classList.add("active");
    cursor1.classList.add("active");
  };

links.onmouseleave = () => {
    cursor2.classList.remove("active");
    cursor2.classList.remove("active");
  };

document.getElementsByClassName("resume-link").onclick =function (){
  window.location.href="https://app.luminpdf.com/viewer/669235389bcd0dd1363c0827"
}
document.addEventListener('DOMContentLoaded', function() {
  const skills = [
    { name: 'JavaScript', progress: 80 },
    { name: 'OOPs', progress: 75 },
    { name: 'Node.js', progress: 85 },
    { name: 'HTML', progress: 90 },
    { name: 'CSS', progress: 85 },
    { name: 'Bootstrap', progress: 80 },
    { name: 'C++', progress: 70 }
    // Add more skills as needed
  ];

  const skillsContainer = document.getElementById('skills-container');

  // Function to create a skill box
  function createSkillBox(skill) {
    const skillBox = document.createElement('div');
    skillBox.classList.add('box');
    skillBox.innerHTML = `
      <h3>${skill.name}</h3>
      <div class="progress">
        <div class="bar" style="width: ${skill.progress}%;"></div>
      </div>
    `;
    return skillBox;
  }

  // Populate skills
  skills.forEach(skill => {
    const skillElement = createSkillBox(skill);
    skillsContainer.appendChild(skillElement);
  });
});

  });
