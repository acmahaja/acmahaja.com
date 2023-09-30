import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoReact } from "react-icons/bi";


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
      date: new Date(1231),
    },
  ],
  notableProjects: [
    {
      id: "ae360f0a",
      name: "acmahaja.com",
      link: "https://github.com/acmahaja/acmahaja.com",
      description:
        "Cumque ex exercitationem. Atque quis alias natus et illum unde soluta. Neque rem quia distinctio.",
      technologies: [
        { name: "Next.JS", component: <TbBrandNextjs /> },
        { name: "React", component: <BiLogoReact /> },
      ],
      date: new Date(4567),
    },
  ],
};

export default projectsList;
