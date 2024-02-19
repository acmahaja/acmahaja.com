import type { ProjectType } from "../types/Project";
import { svelteTech } from "./Technologies";
export const ProjectsList: ProjectType[] = [
    {
        owner: "acmahaja",
        name: "acmahaja.com",
        image: 'https://res.cloudinary.com/www-acmahaja-com/image/upload/v1657613135/cld-sample.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iure reiciendis maxime facere officia architecto expedita illum ipsa tenetur? Debitis laborum sapiente id atque pariatur unde culpa quas voluptas eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui asperiores, quod totam suscipit temporibus tenetur quas mollitia voluptatum maiores architecto, id adipisci aut. Blanditiis corporis culpa delectus repellendus molestias!",
        technologies: [svelteTech],
        githubLink: 'https://www.github.com/acmahaja/acmahaja.com',
        date: new Date("Feb 2024"),
    },
]
