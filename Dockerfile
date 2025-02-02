FROM denoland/deno:alpine

WORKDIR /app

USER deno

COPY deno.json .
COPY deno.lock .

RUN deno install

COPY server.ts .

RUN deno cache server.ts

CMD ["deno", "--allow-net", "--unstable-otel", "server.ts"]
