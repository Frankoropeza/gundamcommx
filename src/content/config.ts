import { defineCollection, z } from 'astro:content';

const productos = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    grade: z.enum(['HG', 'MG', 'RG', 'PG', 'SD', 'Accesorios']),
    series: z.string(),
    scale: z.string(),
    price: z.number(),
    salePrice: z.number().optional(),
    stock: z.number().min(0),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const categorias = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Gundam Com MX'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { productos, categorias, blog };
