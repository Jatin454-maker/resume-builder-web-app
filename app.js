// PERSONAL DETAILS
let addPersonalBtn=document.getElementById("add_personal_btn");

addPersonalBtn.addEventListener("click",function(){
    let fullName=document.getElementById("full_name").value;
    if(fullName===""){
alert("Please enter your name");
return;
}
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let address=document.getElementById("address").value;
let summary=document.getElementById("summary").value;
let personalPreview=document.getElementById("personal_preview");
personalPreview.innerHTML=`
<h2>${fullName}</h2>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Address:</strong> ${address}</p>
<p><strong>Summary:</strong> ${summary}</p>
<button id="edit_personal_btn" class="all-btn">Edit</button>
`;

addPersonalEditFunction();
document.getElementById("personal_form").style.display="none";
document.getElementById("education_form").style.display="block";
});

// EDIT PERSONAL DETAILS
function addPersonalEditFunction(){
let editBtn=document.getElementById("edit_personal_btn");
editBtn.addEventListener("click",function(){
document.getElementById("personal_form").style.display="block";
document.getElementById("education_form").style.display="none";
document.getElementById("experience_form").style.display="none";
document.getElementById("skills_form").style.display="none";
document.getElementById("projects_form").style.display="none";
});
}

// EDUCATION DETAILS
let addEducationBtn=document.getElementById("add_education_btn");
addEducationBtn.addEventListener("click",function(){
let degree=document.getElementById("degree").value;
let college=document.getElementById("college").value;
let year=document.getElementById("year").value;
let cgpa=document.getElementById("cgpa").value;
let educationPreview=document.getElementById("education_preview");
educationPreview.innerHTML=`
<h3>Education</h3>
<p><strong>Degree:</strong> ${degree}</p>
<p><strong>College:</strong> ${college}</p>
<p><strong>Year:</strong> ${year}</p>
<p><strong>CGPA:</strong> ${cgpa}</p>
<button id="edit_education_btn" class="all-btn">Edit</button>
`;

document.getElementById("education_form").style.display="none";
document.getElementById("experience_form").style.display="block";
addEducationEditFunction()
});

// EDIT EDUCATION

function addEducationEditFunction(){
let editBtn=document.getElementById("edit_education_btn");
editBtn.addEventListener("click",function(){
document.getElementById("education_form").style.display="block";
document.getElementById("experience_form").style.display="none";
document.getElementById("skills_form").style.display="none";
document.getElementById("projects_form").style.display="none";
});
}

// EXPERIENCE DETAILS

let addExperienceBtn=document.getElementById("add_experience_btn");
addExperienceBtn.addEventListener("click",function(){
let company=document.getElementById("company").value;
let role=document.getElementById("role").value;
let duration=document.getElementById("duration").value;
let experienceDesc=document.getElementById("experience_desc").value;
let experiencePreview=document.getElementById("experience_preview");
experiencePreview.innerHTML=`
<h3>Experience</h3>
<p><strong>Company:</strong> ${company}</p>
<p><strong>Role:</strong> ${role}</p>
<p><strong>Duration:</strong> ${duration}</p>
<p><strong>Description:</strong> ${experienceDesc}</p>
<button id="edit_experience_btn" class="all-btn">Edit</button>
`;

document.getElementById("experience_form").style.display="none";
document.getElementById("skills_form").style.display="block";
addExperienceEditFunction();
});

// EDIT EXPERIENCE

function addExperienceEditFunction(){
let editBtn=document.getElementById("edit_experience_btn");
editBtn.addEventListener("click",function(){
document.getElementById("experience_form").style.display="block";
document.getElementById("skills_form").style.display="none";
document.getElementById("projects_form").style.display="none";
});

}

// SKILLS
let addSkillsBtn=document.getElementById("add_skills_btn");
addSkillsBtn.addEventListener("click",function(){
let skills=document.getElementById("skills").value;
let skillItems=skills
.split(",")
.map(skill=>skill.trim())
.filter(skill=>skill!=="");

let skillsHTML="<ul>";
skillItems.forEach(function(skill){
skillsHTML+=`<li>${skill}</li>`;
});

skillsHTML+="</ul>";
let skillsPreview=document.getElementById("skills_preview");
skillsPreview.innerHTML=`
<h3>Skills</h3>
${skillsHTML}
<button id="edit_skills_btn" class="all-btn">Edit</button>
`;
document.getElementById("skills_form").style.display="none";
document.getElementById("projects_form").style.display="block";
addSkillsEditFunction();
});

// EDIT SKILLS
function addSkillsEditFunction(){
let editBtn=document.getElementById("edit_skills_btn");
editBtn.addEventListener("click",function(){
document.getElementById("skills_form").style.display="block";
document.getElementById("projects_form").style.display="none";
});

}

// PROJECT DETAILS

let addProjectBtn=document.getElementById("add_project_btn");
addProjectBtn.addEventListener("click",function(){
let projectTitle=document.getElementById("project_title").value;
let projectDesc=document.getElementById("project_desc").value;
let technologies=document.getElementById("technologies").value;
let projectsPreview=document.getElementById("projects_preview");

projectsPreview.innerHTML=`
<h3>Projects</h3>
<p><strong>Project:</strong> ${projectTitle}</p>
<p><strong>Description:</strong> ${projectDesc}</p>
<p><strong>Technologies:</strong> ${technologies}</p>
<button id="edit_project_btn" class="all-btn">Edit</button>
`;

document.getElementById("projects_form").style.display="none";
document.getElementById("final_save_btn").style.display="block";
addProjectEditFunction();
});

// EDIT PROJECTS

function addProjectEditFunction(){
let editBtn=document.getElementById("edit_project_btn");
editBtn.addEventListener("click",function(){
document.getElementById("projects_form").style.display="block";
});

}

// FINAL SAVE BUTTON

let finalSaveBtn=document.getElementById("final_save_btn");
finalSaveBtn.addEventListener("click",function(){
document.querySelector(".input_area").style.display="none";

let previewArea=document.querySelector(".preview_area");
previewArea.style.width="100%";
previewArea.style.margin="auto";
previewArea.style.maxWidth="900px";
previewArea.classList.add("saved-resume");

document.querySelector(".container").style.justifyContent="center";

let editButtons=document.querySelectorAll("[id^='edit_']");
editButtons.forEach(function(button){
button.remove();

});

finalSaveBtn.style.display="none";
let successMessage=document.createElement("h2");
successMessage.innerText="Resume Saved Successfully!";
successMessage.style.color="#03045e";
successMessage.style.marginBottom="20px";
successMessage.style.textAlign="center";
previewArea.prepend(successMessage);
});