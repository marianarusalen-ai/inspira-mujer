import type { TeamMember } from '@/types';

export const TEAM: TeamMember[] = [
  {
    name: 'Mariana Rusalen',
    role: 'Fundadora',
    bio: 'Fundadora de Inspira Mujer, apasionada por crear comunidad y espacios de crecimiento para mujeres.',
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
