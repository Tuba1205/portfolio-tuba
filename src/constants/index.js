import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Angular, as well as back-end technologies like Node.js, MySQL, Expressjs, laravel and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Angular, Node.js, MySQL, Laravel, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Feb,2024-Nov,2024 ",
    role: "Full Stack Developer",
    company: "Web educators",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Angular", "Laravel"],
  },
  {
    year: "Aug,2023-Dec,2023",
    role: "Wordpress Developer",
    company: "Allience Technology",
    description: `Designed and developed a web applications using wordpress, elementor.`,
    technologies: ["WordPress", "Elementor", "Custom PHP Plugins"],
  },
  {
    year: "Aug,2022-Dec,2022",
    role: "Internship as a Student Brand Ambassador",
    company: "State Bank of Pakistan",
    description: `Represented the State Bank of Pakistan in promoting financial literacy initiatives among university students.`,
    technologies: ["Microsoft Office Suite"],
  } 
];

export const PROJECTS = [
  {
    title: "Food-Delivery Application",
    image: project1,
    description:
      "A fully functional food delivery website with features like product listing, cart, and user authentication and admin panel.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB, Expressjs"],
  },
  {
    title: "Car Rent Application",
    image: project2,
    description:
      "An application for managing customers and staff and providing cars according to the customer needs with or without driver, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Laravel", "Bootstrap", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Chat Application",
    image: project4,
    description:
      "A platform for chatting and connecting with each other, with features like searching, connecting, chatting, and user profiles.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Rawalpindi, Pakistan",
  phoneNo: "03175412469",
  email: "mubariktuba@gmail.com",
};
