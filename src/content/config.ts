import { defineCollection, z } from 'astro:content';

const careers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
    type: z.string().default('Full Time'),
    mode: z.string().default('Hybrid'),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    applyUrl: z.string().default('/careers'),
    featured: z.boolean().default(false),
  }),
});

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    author: z.string().default('Lingaasys Editorial'),
    tags: z.array(z.string()).default([]),
    image: z.string().default('/images/photography/insight-default.svg'),
  }),
});

export const collections = {
  careers,
  insights,
};
