import type { ProjectType } from "../types/Project";
import { cssTech, figmaTech, htmlTech, mongodbTech, nodejsTech, svelteTech, tailwindCssTech, typescriptTech, viteTech, expressjsTech, javaVertxTech, reactTech } from "./Technologies";
export const ProjectsList: ProjectType[] = [
    {
        owner: "acmahaja",
        name: "acmahaja.com",
        image: "https://res.cloudinary.com/www-acmahaja-com/image/upload/v1708337945/acmahaja.com/syhwjaweeswwfubd3dq1.png",
        description: "acmahaja.com is a personal portfolio website that showcases my web development projects, skills, and achievements. The website has been developed and maintained for the past three years.",
        technologies: [svelteTech, tailwindCssTech, typescriptTech, viteTech],
        githubLink: 'https://www.github.com/acmahaja/acmahaja.com',
        date: new Date("Feb 2024"),
    },
    {
        owner: "acmahaja",
        name: "Diabetes @ Home",
        image: "https://res.cloudinary.com/www-acmahaja-com/image/upload/v1708338366/acmahaja.com/mfvkvk4rf9ys5pfok5os.png",
        description: "Diabetes @ Home is a full-stack health application designed to help doctors and patients manage diabetes in the convenience of their own home. The application allows patients to record data that can be remotely monitored by their clinician.",
        technologies: [nodejsTech, mongodbTech, htmlTech, cssTech, figmaTech, expressjsTech],
        githubLink: 'https://github.com/acmahaja/INFO30005_DIABETES_AT_HOME',
        date: new Date("2022-05-25")
    },
    {
        owner: "yingmao-cyber",
        name: "Airbiz Gating Tool",
        image: "https://res.cloudinary.com/www-acmahaja-com/image/upload/ar_1:1,c_crop,g_west,h_2384/acmahaja.com/uxtwzsnkygxkageqq5x1.jpg",
        description: "Airbiz is an Australian global aviation consultancy specializing in international projects. They offer solutions for current and future airport projects globally. Airbiz is proposing an upgrade to their existing excel-based gating tool. The new tool should be easily deployable and offer comprehensive gating and visualization features. Customizability, like color-coded flights and adjustable Gantt bar labels, is essential.",
        technologies: [javaVertxTech, reactTech, mongodbTech, figmaTech],
        githubLink: "https://github.com/yingmao-cyber/swen13-g-boarding-brainiacs-frontend/",
        date: new Date("2023-10-18"),

    }
]
