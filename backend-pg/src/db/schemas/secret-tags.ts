// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const SecretTagsSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  slug: z.string(),
  color: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  createdBy: z.string().uuid().nullable().optional(),
  projectId: z.string().uuid(),
});

export type TSecretTags = z.infer<typeof SecretTagsSchema>;
export type TSecretTagsInsert = Omit<TSecretTags, TImmutableDBKeys>;
export type TSecretTagsUpdate = Partial<Omit<TSecretTags, TImmutableDBKeys>>;
