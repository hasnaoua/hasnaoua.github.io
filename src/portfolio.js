/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "Abdelhay's Portfolio",
  description:
    "Passionate about artificial intelligence and data analysis, I am driven by the desire to solve complex problems and contribute to innovative projects",
  og: {
    title: "Abdelhay Hasnaoui Portfolio",
    type: "website",
    url: "http://abdelhayhasnaoui.com/",
  },
};

// Home Page
const greeting = {
  title: "Abdelhay Hasnaoui",
  logo_name: "Abdelhay",
  nickname: "Abdel",
  subTitle:
    "A passionate individual who always thrives to work on end-to-end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/14Jvg4JVdG3rBQfityFP8MtLfygxZQhQL/view?usp=drive_link",
  githubProfile: "https://github.com/hasnaoua/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/hasnaoua/",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
    type: "brands",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdelhay-hasnaoui-081309226/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
    type: "brands",
  },
  {
    name: "Gmail",
    link: "mailto:abdelhayhasnaoui@gmail.com",
    fontAwesomeIcon: "fa-envelope",
    backgroundColor: "#D14836",
    type: "solid",
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modeling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deep Learning",
          imageSrc: "deeplearning_ai_logo.png",
          alt: "Deep Learning AI Logo",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Azure cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "INP ENSIMAG",
      subtitle:
        "Engineering Degree in Computer Science and Applied Mathematics",
      logo_path: "ensimag_logo.svg",
      alt_name:
        "École Nationale Supérieure d'Informatique et de Mathématiques Appliquées",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Acquired a solid foundation in computer science, including algorithms, data structures, and software development.",
        "⚡ Worked on projects involving optimization, mathematical modeling, and distributed systems.",
        "⚡ Participated in programming competitions and hackathons, showcasing innovative problem-solving abilities.",
      ],
      website_link: "https://ensimag.grenoble-inp.fr",
    },
    {
      title: "Grenoble Alpes University",
      subtitle: "M.S. in Computer Science Data/AI",
      logo_path: "alpes_logo.png",
      alt_name: "Université Grenoble Alpes",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ Completed advanced courses in Artificial Intelligence, including Explainable AI, Graph Machine Learning, and Computer Vision.",
        "⚡ Contributed to research as an assistant, developing new algorithms in Graph ML and Network Science.",
        "⚡ Worked on real-world datasets to apply AI techniques and solve complex problems effectively.",
      ],
      website_link: "https://www.univ-grenoble-alpes.fr",
    },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Projects",
  description:
    "I have worked on various cutting-edge projects in software engineering, machine learning, and deep learning during internships and academic collaborations.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Engineer Intern",
          company: "STMicroelectronics",
          company_url: "https://www.st.com/",
          duration: "March 2024 - August 2024",
          location: "Crolles, Auvergne-Rhône-Alpes, France (On-site)",
          description:
            "Developed fabrication masks for electronic chips using Optical Proximity Correction (OPC) with deep learning techniques. Designed a Graph Neural Network (GNN) for node-level predictions.",
          color: "#ff6600",
          logo_path: "STMicroelectronics_Logo.png",
        },
        {
          title: "Software Engineer Intern",
          company: "INRAE Occitanie-Toulouse",
          company_url: "https://www.inrae.fr/",
          duration: "July 2023 - September 2023",
          location: "Toulouse, Occitanie, France (On-site)",
          description:
            "Developed a cost function modeling pipeline for protein and calcium-protein side chains. Automated report generation and improved molecule manipulation via API management.",
          color: "#34a853",
          logo_path: "INRAE_LOGO.jpg",
        },
      ],
    },
  ],
};

const projectsHeader = {
  title: "Projects",
  description:
    "My projects utilize a variety of cutting-edge technologies, focusing on Data Science and AI.",
  avatar_image_path: "projects_image.svg",
};

const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "I am available on Email/LinkedIn. You can message me; I will reply within 24 hours.",
  },
};

export const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/username",
    },
  ],
};

export const publicationsHeader = {
  title: "Publications",
  description: "Here are some of my selected publications.",
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
