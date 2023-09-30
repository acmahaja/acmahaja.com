import { BiLogoReact } from "react-icons/bi";
import { CgCloud } from "react-icons/cg";
import {
  SiFirebase,
  SiGoogledrive,
  SiGooglemaps,
  SiRaspberrypi,
  SiRuby,
  SiRubyonrails,
  SiTensorflow,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GiTexas } from "react-icons/gi";

const projectsList = {
  featuredProjects: [
    {
      id: "52751d51",
      name: "acmahaja.com",
      link: "https://github.com/acmahaja/acmahaja.com",
      description:
        "Cumque ex exercitationem. Atque quis alias natus et illum unde soluta. Neque rem quia distinctio.",
      technologies: [
        { name: "Next.JS", component: <TbBrandNextjs /> },
        { name: "React", component: <BiLogoReact /> },
      ],
      date: new Date(123),
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
    {
      id: "70896fee",
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
