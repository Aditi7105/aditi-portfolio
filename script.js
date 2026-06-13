document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       PROJECT MODAL
    ========================== */

    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    const closeModal = document.querySelector(".close-modal");

    document.querySelectorAll(".view-btn").forEach(button => {

        button.addEventListener("click", () => {

            const project = button.dataset.project;

           if (project === "rakshak") {

    modalBody.innerHTML = `

    <h2>🏆 RAKSHAK</h2>

    <div class="modal-gallery">
        <img src="assets/rakshak.png" alt="Rakshak Rover">
        <img src="assets/rakshak_water.png" alt="Rakshak Water Test">
    </div>
    <div class="winner-badge">
    🏆 IEEE R10 Robotics Competition 2025 Winner
    </div>
    <h3>Project Overview</h3>

    <p>
    RAKSHAK is an IEEE R10 Robotics Competition 2025
    winning multi-terrain amphibious surveillance rover
    developed for military assistance, disaster management,
    and remote monitoring applications.
    </p>

    <h3>Key Features</h3>

    <ul>
        <li>Amphibious operation on land and water</li>
        <li>Real-time video surveillance</li>
        <li>GPS based location tracking</li>
        <li>ESP32-CAM live streaming</li>
        <li>Remote control operation</li>
        <li>AI-assisted object detection</li>
    </ul>

    <h3>Technologies Used</h3>

    <ul>
        <li>ESP32</li>
        <li>ESP32-CAM</li>
        <li>OpenCV</li>
        <li>Python</li>
        <li>GPS Module</li>
        <li>Motor Drivers</li>
    </ul>

    <h3>My Contribution</h3>

    <p>
    I designed and integrated the embedded hardware,
    camera streaming system, GPS tracking module,
    and computer vision pipeline. I also worked on
    communication between sensors and controllers
    for reliable field operation.
    </p>

    <h3>Achievement</h3>

    <p>
    🏆 Winner of IEEE Region 10 Robotics Competition 2025
    among teams from multiple institutions.
    </p>

    `;
}

          else if (project === "sarthi") {

    modalBody.innerHTML = `

    <h2>🌾 SARTHI</h2>

    <p><strong>Status:</strong> 🚧 Ongoing Project</p>

    <h3>Project Overview</h3>

    <p>
    SARTHI is an AI-powered smart agriculture rover
    being developed to assist farmers through crop
    monitoring, disease detection, and autonomous
    field navigation.
    </p>

    <h3>Planned Features</h3>

    <ul>
        <li>Autonomous navigation</li>
        <li>Plant health monitoring</li>
        <li>AI-based disease detection</li>
        <li>ROS2 integration</li>
        <li>Raspberry Pi processing</li>
        <li>Computer vision analytics</li>
    </ul>

    <h3>Technologies Used</h3>

    <ul>
        <li>Raspberry Pi</li>
        <li>ROS2</li>
        <li>OpenCV</li>
        <li>Python</li>
        <li>AI Camera</li>
    </ul>

    `;
}

  else if (project === "leaf") {

    modalBody.innerHTML = `

    <h2>🌱 Leaf Disease Detection Using CNN</h2>

    <div class="modal-gallery">
        <img src="assets/leaf_disease_detection.png" alt="Crop Disease Detection">
    </div>

    <h3>Project Overview</h3>

    <p>
    This project focuses on early detection of leaf diseases
    using Deep Learning and Computer Vision techniques.
    A Convolutional Neural Network (CNN) model was trained
    on plant leaf datasets to identify diseases from images,
    enabling farmers to take preventive measures before
    significant crop damage occurs.
    </p>

    <h3>Problem Statement</h3>

    <p>
    Traditional disease identification requires expert
    inspection and is often time-consuming. The objective
    was to develop an automated system capable of detecting
    leaf diseases accurately from leaf images.
    </p>

    <h3>Key Features</h3>

    <ul>
        <li>Automatic leaf disease identification</li>
        <li>Image preprocessing using OpenCV</li>
        <li>CNN-based classification model</li>
        <li>High accuracy disease prediction</li>
        <li>Scalable for multiple crop types</li>
    </ul>

    <h3>Technologies Used</h3>

    <ul>
        <li>Python</li>
        <li>TensorFlow</li>
        <li>OpenCV</li>
        <li>CNN</li>
        <li>Machine Learning</li>
    </ul>

    <h3>My Contribution</h3>

    <p>
    I worked on dataset preparation, image preprocessing,
    model training, evaluation, and integration of computer
    vision techniques for disease detection.
    </p>

    `;
}

else if (project === "npk") {

    modalBody.innerHTML = `

    <h2>📊 Soil NPK Monitoring System</h2>

    <div class="modal-gallery">
        <img src="assets/soil_npk_monitoring.png" alt="Soil NPK Monitoring">
    </div>

    <h3>Project Overview</h3>

    <p>
    An IoT-based smart agriculture system designed to monitor
    essential soil nutrients including Nitrogen (N),
    Phosphorus (P), and Potassium (K). The system provides
    real-time information about soil health to assist
    farmers in making informed fertilizer and crop
    management decisions.
    </p>

    <h3>Problem Statement</h3>

    <p>
    Farmers often apply fertilizers without accurate
    knowledge of nutrient levels in the soil, leading
    to reduced productivity and unnecessary expenses.
    This project aims to provide real-time nutrient
    monitoring for precision agriculture.
    </p>

    <h3>Key Features</h3>

    <ul>
        <li>Real-time NPK measurement</li>
        <li>IoT-based monitoring system</li>
        <li>Sensor integration and data acquisition</li>
        <li>Agricultural decision support</li>
        <li>Precision farming applications</li>
    </ul>

    <h3>Technologies Used</h3>

    <ul>
        <li>ESP32</li>
        <li>Embedded Systems</li>
        <li>IoT</li>
        <li>Sensors</li>
        <li>Wireless Communication</li>
    </ul>

    <h3>My Contribution</h3>

    <p>
    I worked on sensor interfacing, embedded system
    programming, data acquisition, and implementation
    of wireless communication for monitoring soil
    nutrient levels.
    </p>

    `;
}

 else if (project === "dustbin") {

    modalBody.innerHTML = `

    <h2>♻ Smart Dustbin with IoT Dashboard</h2>

    <div class="modal-gallery">
        <img src="assets/smart_dustbin.png" alt="Smart Dustbin">
        <img src="assets/smart_dustbin_web.png" alt="IoT Dashboard">
    </div>

    <h3>Project Overview</h3>

    <p>
    A smart waste management system designed to improve
    cleanliness and waste collection efficiency through
    automation and IoT-based monitoring. The system
    automatically detects users, opens the lid, and
    provides real-time status monitoring through a web
    dashboard.
    </p>

    <h3>Problem Statement</h3>

    <p>
    Conventional waste bins require manual monitoring
    and often overflow before collection. The objective
    was to create an intelligent waste management system
    capable of monitoring fill levels and providing
    real-time information remotely.
    </p>

    <h3>Key Features</h3>

    <ul>
        <li>Automatic lid opening mechanism</li>
        <li>Ultrasonic sensor-based detection</li>
        <li>Real-time waste level monitoring</li>
        <li>IoT-enabled web dashboard</li>
        <li>Remote status tracking</li>
    </ul>

    <h3>Technologies Used</h3>

    <ul>
        <li>ESP32</li>
        <li>IoT</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Embedded Systems</li>
    </ul>

    <h3>My Contribution</h3>

    <p>
    I developed the embedded hardware system,
    implemented sensor integration, programmed the
    controller logic, and designed the web-based
    dashboard for real-time monitoring and visualization.
    </p>

    `;
}

            modal.style.display = "flex";

        });

    });

    if (closeModal) {

        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

    }

    window.addEventListener("click", (e) => {

        if (e.target === modal) {
            modal.style.display = "none";
        }

    });

});

particlesJS("particles-js", {
particles:{
number:{value:60},
size:{value:3},
move:{speed:1},
line_linked:{
enable:true,
opacity:0.1
}
}
});

const text =
"Robotics & Automation Engineer";

let i = 0;

function type(){

if(i < text.length){

document.getElementById("typing")
.innerHTML += text.charAt(i);

i++;

setTimeout(type,70);

}

}

type();

window.addEventListener("scroll",()=>{

const winScroll =
document.body.scrollTop ||
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const scrolled =
(winScroll / height) * 100;

document.getElementById("progress-bar")
.style.width = scrolled + "%";

});

/* =====================================
   MOBILE HAMBURGER MENU
===================================== */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}

/* Auto Close After Clicking */

document
.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});