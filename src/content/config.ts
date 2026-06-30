import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const eventos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    address: z.string().optional(),
    isOnline: z.boolean().default(false),
    streamUrl: z.string().url().optional(),
    registrationUrl: z.string().url().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    price: z.number().nonnegative().optional(),
    currency: z.enum(['ARS', 'USD']).default('ARS'),
    capacity: z.number().positive().optional(),
    isFeatured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const podcast = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    episode: z.number().positive().optional(),
    season: z.number().positive().optional(),
    publishedAt: z.coerce.date(),
    duration: z.string().optional(),
    youtubeId: z.string().optional(),
    spotifyUrl: z.string().url().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const streaming = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    scheduledAt: z.coerce.date(),
    streamUrl: z.string().url().optional(),
    youtubeId: z.string().optional(),
    isLive: z.boolean().default(false),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const sponsors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    logoAlt: z.string().optional(),
    url: z.string().url().optional(),
    tier: z.enum(['platinum', 'gold', 'silver', 'bronze', 'media']),
    featured: z.boolean().default(false),
    active: z.boolean().default(true),
  }),
});

export const collections = { blog, eventos, podcast, streaming, sponsors };
