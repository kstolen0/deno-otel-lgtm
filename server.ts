import { Application } from "@oak/oak";
import { Router } from "@oak/oak";

const router = new Router();

router.get("/", (ctx) => {
  console.log("called base route");
  ctx.response.body = "hello world";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8000 });
