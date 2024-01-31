import type { ExperienceType } from "../types/Experience";

const Experience:ExperienceType[] = [
    {
        company: 'Choppies Botswana',
        role: 'Intern Software Developer',
        description: "Independently developed a Rebate Management Application for Choppies Botswana's Accounting, which integrated with their existing Microsoft SQL Server database systems. Conducted thorough requirement analysis and user acceptance testing with key stakeholders. Designed a user-friendly interface prioritizing ease-of-use and efficiency for accountants. Implemented a cohesive solution that replaced multiple disparate systems, streamlining the process of generating rebates for the company's suppliers.",
        startDate: new Date("Dec 2021"),
        endDate: new Date("Feb 2022"),
        brandColour: "#00994c",
        technologies: ["django", "python", "html", "css", "microsoftsqlserver"]
    },
    {
        company: 'NC State Engineering Village',
        role: 'Engineering Mentor',
        description: "Facilitated a holistic experience for 50 First Year Students, harmonizing co-curricular and academic endeavors. Exemplified strong leadership and academic performance, fostering inclusivity and diversity within the Engineering Village. Orchestrated community-building events and team activities to cultivate collaboration among first-year students. Delivered relatable advice and strategies for success, drawing from personal academic journey to support student growth and development.",
        startDate: new Date("Aug 2017"),
        endDate: new Date("May 2018"),
        brandColour: "#cc0000",
        technologies: []
    }
]
  export default Experience;
