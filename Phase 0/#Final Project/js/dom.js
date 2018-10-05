// Welcome Page
var hello = document.getElementById("hello").innerHTML = "Hi,my name is Radith";
var profile = document.getElementById("profile").innerHTML = "I am a Full-stack Developer with experience in User Interface Front-end Development and Back-end Web Development.";

// About Me
var me = document.getElementById("me").innerHTML = "Hello, I am Radith.";
var me1 = document.getElementById("me1").innerHTML = "I am a Full-stack Developer with experience in User Interface Front-end Development and Back-end Web Development with Codeigniter and Mysql. I have an interest to be a Front-end Engineer in using React & Redux technology. I am able to provide employers with administrative support and professional communication skills. I have a good teamwork and capable in uniting others to develop a product in long term. ";
var me2 = document.getElementById("me2").innerHTML = "My Specialities as a Full Stack Developer are Codeigniter,Mysql, React, Redux, Node JS";

//Service
var ser=['Web Development', 'App Development','Analytics & Visualization','UI / UX Design', 'Graphic Design','Project Management'];
var services=document.getElementsByClassName("services");
	for(var a=0; a<services.length; a++){
	services[a].innerHTML = ser[a];
	}

var det=['HTML, CSS, Javascript, SASS, NodeJS, PHP, Mysql, Oracle.','My Specialities as APP developer using Android, Macro Excell(Vba), VB.','Usually I am using TIBCO SPOTFIRE to analysis and make a Visualization of data','Usually I am using Zeplin to make UI / UX Design','Photoshop, Corel Draw, Adobe Premier','Ms. Visio and Ms. Project.'];
var detail=document.getElementsByClassName("detail");
	for(var ab=0; ab<detail.length; ab++){
	detail[ab].innerHTML = det[ab];
	}

// Skill
var i = document.getElementById("i").innerHTML = "Hello, I am Radith.";
var arr = ['I am able to work individually and team work.', 'Lead a team.', 'Problem Solving.', 'Teaching & Training.', 'Adaptable.', 'Analytics.', 'Negotiation.', 'Make a Strategic and Planning, etc.'];
var softskill = document.getElementsByClassName("softskill");
	for(var b=0; b<softskill.length; b++){
	softskill[b].innerHTML = arr[b];
	}

var arr2=['HTML, CSS & Javascript', 'PHP & Mysql', 'Graphic Design','Data Analytics & Data Visualization']
var hardskill = document.getElementsByClassName("hardskill");
	for(var c=0; c<hardskill.length; c++){
	hardskill[c].innerHTML = arr2[c];
	}

// Story
var arr3=['SMKN 4 Kota Bekasi','Teacher','Teach about : 1. Robotic  2. Network Security  3. Digital Simulation  4. Computer System  5. Operating System','Al’Alaq Elementary ( Billingual School)','Teacher','Teach about : 1. Science  2. English  3. Math  4. Computer','PT. Telekomunikasi Indonesia,Tbk','Support Channel & Businnes Model Innovation Management','My Job Desc. => 1. Make an innovation like concept or application for working efficiency. 2. Develop and upgrade application in CBM unit 3. Make a benefit cost ratio for new partner of TELKOM. 4. Make a memorandum of financial calculations 5. Make justification, TUP-4 and agreement or contract document for new partner.','PT. Telekomunikasi Indonesia,Tbk','Assistant Project Director','My Job Desc. => 1. Assist the Project Director in all phases and aspects of the project. 2. Provide support to Field Staff. 3. Make Report for Project Director and Vice President of Enterprise Service Division about Update Progress and List Of Bill Completed 4. etc..']
var experience = document.getElementsByClassName("experience");
	for(var d=0; d<experience.length; d++){
	experience[d].innerHTML = arr3[d];
	}

//Contact
var con =['If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below, you can contact me on..','+62 8989 276 121','Jati Asih, Kota Bekasi','franaditya@gmail.com','https://franaditya.github.io/'];
var cont = document.getElementsByClassName("cont");
for(var e=0; e<cont.length; e++){
cont[e].innerHTML = con[e];
}
