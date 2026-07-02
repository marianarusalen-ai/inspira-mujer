import type { TeamMember } from '@/types';

export const TEAM: TeamMember[] = [
  {
    name: 'Mariana Rusalen',
    role: 'Fundadora',
    bio: 'Fundadora de Inspira Mujer, apasionada por crear comunidad y espacios de crecimiento para mujeres.',
    avatar: '/images/team/mariana.jpg',
    featured: true,
  },
  {
    name: 'Irene',
    role: 'Co-conductora',
    featured: true,
  },
  {
    name: 'Eli',
    role: 'Co-conductora',
    featured: true,
  },
];

export const FEATURED_TEAM: TeamMember[] = TEAM.filter((m) => m.featured);

export const QUIENES_SOMOS_TEAM: TeamMember[] = TEAM.filter(
  (m) => m.name === 'Mariana Rusalen'
);
