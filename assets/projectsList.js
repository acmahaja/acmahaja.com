import { BiLogoReact } from "react-icons/bi";
import { CgCloud } from "react-icons/cg";
import {
  SiChartdotjs,
  SiEclipsevertdotx,
  SiExpress,
  SiFirebase,
  SiGoogledrive,
  SiGooglemaps,
  SiHandlebarsdotjs,
  SiMongodb,
  SiNodedotjs,
  SiRaspberrypi,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiTensorflow,
  SiVercel,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GiTexas } from "react-icons/gi";
import { FiFigma } from "react-icons/fi";

const projectsList = {
  featuredProjects: [
    {
      id: "52751d51",
      name: "acmahaja.com",
      link: "https://github.com/acmahaja/acmahaja.com",
      description:
        "acmahaja.com is a personal portfolio website that showcases my web development projects, skills, and achievements. The website has been developed and maintained for the past three years.",
      technologies: [
        { name: "Next.JS", component: <TbBrandNextjs /> },
        { name: "React", component: <SiReact /> },
        { name: "Vercel", component: <SiVercel /> },
      ],
      date: new Date("2020-03-11"),
    },
    {
      id: "48a12925",
      name: "Diabetes @ Home",
      link: "https://github.com/acmahaja/INFO30005_DIABETES_AT_HOME",
      description:
        "Diabetes @ Home is a full-stack health application designed to help doctors and patients manage diabetes in the convenience of their own home. The application allows patients to record data that can be remotely monitored by their clinician.",
      technologies: [
        { name: "MongoDB", component: <SiMongodb /> },
        { name: "Node.js", component: <SiNodedotjs /> },
        { name: "Chart.js", component: <SiChartdotjs /> },
        { name: "Handlebars.js", component: <SiHandlebarsdotjs /> },
        { name: "Figma", component: <FiFigma /> },
      ],
      date: new Date("2022-05-25"),
    },
    {
      id: "5c1f9ef7",
      name: "Airbiz Gating Tool",
      link: "https://github.com/yingmao-cyber/swen13-g-boarding-brainiacs-frontend/",
      description:
        "Airbiz is an Australian global aviation consultancy specializing in international projects. They offer solutions for current and future airport projects globally. Airbiz is proposing an upgrade to their existing excel-based gating tool. The new tool should be easily deployable and offer comprehensive gating and visualization features. Customizability, like color-coded flights and adjustable Gantt bar labels, is essential.",
      technologies: [
        { name: "Java Vert.x", component: <SiEclipsevertdotx /> },
        { name: "React", component: <SiReact /> },
        { name: "MongoDB", component: <SiMongodb /> },
        { name: "Figma", component: <FiFigma /> },
      ],
      date: new Date("2023-10-18"),
    },
  ],
  notableProjects: [
    {
      id: "82038e57",
      name: "Sea Turtle Nestling Alerting System",
      link: "https://github.com/acmahaja/senior_design",
      description:
        "The Sea Turtle Nestling Alerting System (STNAS) revolutionizes the monitoring of sea turtle nests, offering 24/7 observation and reducing the manual effort required by volunteers. Leveraging advanced technologies like TensorFlow for video analytics and Google Cloud for seamless data integration, our solution ensures efficient turtle detection both day and night. Key features include wireless data transmission, GPS tracking, remote nest monitoring via mobile devices, and solar-powered operations. STNAS is the future of wildlife conservation, ensuring that these magnificent creatures receive the care and attention they deserve. ",
      technologies: [
        { name: "Google Cloud Platform", component: <CgCloud /> },
        { name: "TensorFlow", component: <SiTensorflow /> },
        { name: "Firebase", component: <SiFirebase /> },
        { name: "Google Maps", component: <SiGooglemaps /> },
        { name: "Google Drive", component: <SiGoogledrive /> },
        { name: "Raspberry Pi", component: <SiRaspberrypi /> },
        { name: "Texas Instruments", component: <GiTexas /> },
      ],
      date: new Date("2020-04-27"),
    },
    {
      id: "431532b3",
      name: "Reach",
      link: "https://github.com/acmahaja/Reach",
      description:
        "Reach is a website focused on mental health, which provides services such as allowing users to create personalised accounts, write & save journal entries, as well as plan and undertake meditation sessions.",
      technologies: [
        { name: "MongoDB", component: <SiMongodb /> },
        { name: "Node.js", component: <SiNodedotjs /> },
        { name: "Express", component: <SiExpress /> },
        { name: "Figma", component: <FiFigma /> },
      ],
      date: new Date("2021-04-25"),
    },
    {
      id: "f0719061",
      name: "Expertiza",
      link: "https://github.com/acmahaja/expertiza",
      description:
        "Expertiza is a web application where students can submit and peer-review learning objects (articles, code, web sites, etc). It is used in select courses at NC State and by professors at several other colleges and universities.",
      technologies: [
        { name: "Ruby", component: <SiRuby /> },
        { name: "Ruby on Rails", component: <SiRubyonrails /> },
      ],
      date: new Date("2020-04-27"),
    },
  ],
};

export default projectsList;
