import type { TechnologyType } from "./Technologies";

export type ProjectType = {
    owner: string,
    name: string,
    image: string,
    description: string,
    githubLink: string,
    liveLink?: string,
    date: Date,
    technologies: TechnologyType[]
};
