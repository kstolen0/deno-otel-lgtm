import { metrics } from "@opentelemetry/api";

const meter = metrics.getMeter("deno-api", "1.0.0");

export const routeCounter = meter.createCounter("router-counter", {
  description: "counts times routes are called",
  unit: "1",
});
