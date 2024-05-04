import "dotenv/config";

export const PORT = process.env.PORT || "8888";

export const RABBITMQ = process.env.RABBITMQ;

export const MAILER = {
  USER: process.env.MAILER_USER,
  PORT: process.env.MAILER_PORT,
  SECURE: process.env.MAILER_SECURE,
  PASSWORD: process.env.MAILER_PASSWORD,
  HOST: process.env.MAILER_HOST,
};

export const APP_NAME = "mail_service";