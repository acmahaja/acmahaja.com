import type { EducationType } from "../types/Education";

const Education:EducationType[] = [
    {
        name: 'The University of Melbourne',
        logoImg: 'https://d2glwx35mhbfwf.cloudfront.net/v14.4.2/logo.svg',
        degree: 'M.Eng. in Software Engineering with Business',
        startDate: new Date("Feb 2021"),
        endDate: new Date("Dec 2023"),
        brandColour: "#000F46"
    },
    {
        name: 'North Carolina State University',
        logoImg: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/North_Carolina_State_University_Athletic_logo.svg',
        degree: 'B.S. in Computer Engineering',
        startDate: new Date("Aug 2016"),
        endDate: new Date("May 2020"),
        brandColour: "#CC0000"
    },
]
  export default Education;