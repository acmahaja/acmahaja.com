import type { ExperienceType } from '../types/Experience';

const Experience: ExperienceType[] = [
    {
        company: 'Sincidium',
        role: 'Intern Software Engineer',
        description:
            'I contributed to the development of the Sindy assessment platform, developing and maintaining frontend features that prioritized performance, responsiveness, and a enjoyable user experience for educators and students.  I collaborated closely with the backend team to integrate the front and back ends for the platform.  Through code reviews, troubleshooting, and participation in new feature development, to ensure an exceptional user experience for the Sindy AI platform.  Furthermore, I helped bridge the gap between frontend and UI/UX teams, ensuring consistency and ensuring requirements were perfectly aligned.',
        startDate: new Date('Apr 2024'),
        endDate: new Date('Jun 2024'),
        brandColour: '#00994c',
        technologies: ['nextjs', 'tailwindcss', 'python', 'fastapi', 'postgresql', 'chatgpt']
    },
    {
        company: 'Choppies Botswana',
        role: 'Intern Software Developer',
        description:
            'Developed a Rebate Management Application for Choppies Botswana, seamlessly integrating with their Microsoft SQL Server database systems. Conducted thorough requirement analysis and user acceptance testing, ensuring alignment with stakeholders. Designed a user-friendly interface and implemented a cohesive solution, streamlining rebate generation for suppliers by replacing disparate systems.',
        startDate: new Date('Dec 2021'),
        endDate: new Date('Feb 2022'),
        brandColour: '#00994c',
        technologies: ['djangorest', 'python', 'html5', 'css3', 'microsoftsqlserver']
    },
    {
        company: 'NC State Engineering Village',
        role: 'Engineering Mentor',
        description:
            'Led 50 First Year Students in the Engineering Village, fostering inclusivity and academic success through community-building events and collaborative activities. Demonstrated strong leadership and academic performance, offering relatable advice to support student development. Harmonized co-curricular and academic pursuits to create a holistic and enriching experience for students.',
        startDate: new Date('Aug 2017'),
        endDate: new Date('May 2018'),
        brandColour: '#cc0000',
        technologies: []
    }
];
export default Experience;
