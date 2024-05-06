import { cors } from "hono/cors";
import { createFactory } from "hono/factory";

// https://typescript-eslint.io/rules/unbound-method/
// unbound-method occurs at createHandlers
const { createApp, createHandlers, createMiddleware } = createFactory({
  initApp: (app) => {
    app.use(cors());
  },
});

export { createApp, createHandlers, createMiddleware };
