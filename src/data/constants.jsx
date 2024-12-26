import clglogo from '../assets/clglogo.jpg';
import schllogo from '../assets/schllogo.jpg';
import ahmedsphotography from '../assets/ahmeds-photography.png';
import gadgetTradeHub from '../assets/gadget-trade-hub.png';
import taskManager from '../assets/task-manager.png';


export const Bio = {
    name: "Ahmed Ullah",
    roles: [
      "Front End Developer",
      "Mern Stack Developer",
    ],
    description:
      "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    github: "https://github.com/rishavchanda",
    resume:
      "https://drive.google.com/file/d/1ffZrcMcn8UatXGIaautbbqpV7ADNaETA/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
    twitter: "https://twitter.com/RishavChanda",
    insta: "https://www.instagram.com/rishav_chanda/",
    facebook: "https://www.facebook.com/rishav.chanda.165/",
  };
  
  export const education = [
    {
      id: 0,
      img: clglogo,
      school: "Dhaka Polytechnic Institute, Dhaka",
      date: "Aug 2019 - Feb 2024",
      grade: "3.50 CGPA",
      desc: "I have completed my Diploma in Computer Science and Technology at Dhaka Polytechnic Institute.",
      degree: "Computer Science and Technology",
    },
    {
      id: 1,
      img: schllogo,
      school: "Sherpur Govt. Victoria Academy, Sherpur",
      date: "Jan 2014 - Feb 2019",
      grade: "5.00 GPA",
      desc: "I completed my 10th-grade education in Science at Sherpur Govt. Victoria Academy in Sherpur. ",
      degree: "Science Technology",
    },
    
  ];
  
  export const projects = [  

    {
      id: 1,
      title: "Task Manager",
      date: "Jan 2024",
      description:
        "Task Manager, a dynamic web application crafted with React, Redux, and Redux Toolkit, offers users a seamless task management experience. Featuring a secure login system through Google authentication, users can effortlessly create, update, delete, and mark tasks as complete.",
      image: taskManager,
      tags: ["React Js", "React-Redux", "Redux-Toolkit", "Firebase", "Node JS", "MongoDB"],
      category: "web app",
      github: "https://github.com/ahmedullah12/task-manager-redux",
      webapp: "https://task-manager-ahmed.netlify.app/",
    },
    {
      id: 2,
      title: "GadgetTradeHub",
      date: "Jan 2024",
      description:
        "",
      image: gadgetTradeHub,
      tags: ["React Js", "Firebase", "React-Tabs", "Node JS", "MongoDB", "JWT"],
      category: "web app",
      github: "https://github.com/ahmedullah12/gadget-trade-hub-client",
      webapp: "https://gadget-trade-hub-ahmed.netlify.app/",
    },
    
    {
      id: 3,
      title: "Ahmed's Photography",
      date: "Dec 2023",
      description:
        "Ahmed's Photography, a captivating React web app with integrated Node.js server, brings the art of photography to life. Seamlessly blending Firebase authentication and Stripe.js payment processing, users can effortlessly explore and book photography services.",
      image: ahmedsphotography,
      tags: ["React Js", "API", "Firebase", "Node JS", "MongoDB"],
      category: "web app",
      github: "https://github.com/ahmedullah12/ahmeds-photography",
      webapp: "https://ahmeds-photography.netlify.app/",
    },
    
  ];
  
