import type { LinkType } from "../types/Link";

const Links:LinkType[] = [
    {
        name: 'email',
        URL: 'mailto: acmahaja@gmail.com',
        icon: 'ic:round-email',
        socialColor : '#dc3636',
    },
    {
        name: 'linkedin',
        URL: 'https://www.linkedin.com/in/acmahaja/',
        icon: 'bi:linkedin',
        socialColor : '#0a66c2',
    },
    {
        name: 'github',
        URL: 'https://github.com/acmahaja',
        icon: 'mdi:github',
        socialColor : '#24292f',
    },
    {
        name: 'instagram',
        URL: 'https://instagram.com/acmahaja',
        icon: 'mdi:instagram',
        socialColor : 'radial-gradient(circle at 30% 107%,#fdf497 0,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)',
    },
    {
        name: 'discord',
        URL: 'https://discord.com/users/349311189454553092',
        icon: 'ic:baseline-discord',
        socialColor : '#5661f5',
    }
]

export default Links;