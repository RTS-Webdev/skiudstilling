import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    DATABASE_URL: z.string().url(),
})

export type Env = z.infer<typeof envSchema>

const env = envSchema.parse(process.env);


export default env;