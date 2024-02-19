import type { TechnologyType } from "../types/Technologies";

// TODO:  COMPLETE
export const reactTech: TechnologyType = {
  name: 'react',
  iconifyLogo: 'react',
  color: '#61dafb',
  hoverColor: '#000'
}

export const svelteTech: TechnologyType = {
  name: 'svelte',
  iconifyLogo: 'svelte',
  color: '#ff4000',
  hoverColor: '#fff'
}

const Technologies = [reactTech, svelteTech]

export default Technologies;
