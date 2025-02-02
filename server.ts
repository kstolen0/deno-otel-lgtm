import { Application } from "@oak/oak";
import { Router } from "@oak/oak";
import { routeCounter } from "./metrics.ts";

const router = new Router();

router.get("/hello", (ctx) => {
  routeCounter.add(1, {
    route: "/hello",
  });
  ctx.response.body = "hello world";
});

router.get("/bye", (ctx) => {
  ctx.response.body = "bye!";
});

const app = new Application();

app.use((ctx, next) => {
  const route = ctx.request.url.pathname;
  console.log(`requested ${route}`);
  routeCounter.add(1, {
    route,
  });

  next();
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
