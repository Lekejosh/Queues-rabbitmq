import 'dotenv/config'

export const REDIS = process.env.REDIS_URL || "redis://localhost:6379"

export const PORT = process.env.PORT || '8888'

export const RABBITMQ = process.env.RABBITMQ;
