import { defineCollection, z } from "astro:content";

const recetas = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    type: z.enum(["cena", "almuerzo", "desayuno"]),
    destacada: z.boolean(),
  })
})

export const collections = {
  recetas
}