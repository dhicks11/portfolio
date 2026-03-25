import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

let initialized = false;

export function initSentry() {
  if (initialized || !SENTRY_DSN) return;

  Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 0.1,
    environment: process.env.NODE_ENV,
  });

  initialized = true;
}

export function captureError(error: unknown, context?: Record<string, string>) {
  if (!SENTRY_DSN) {
    console.error("[Error]", error, context);
    return;
  }

  initSentry();
  Sentry.captureException(error, { extra: context });
}
