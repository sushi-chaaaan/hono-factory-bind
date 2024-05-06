import { prettyJSON } from "hono/pretty-json";

import { createApp, createHandlers } from "./factory";

const app = createApp();

const indexHandlers = createHandlers(prettyJSON(), (c) => {
  return c.json({ message: "Hello, World!" });
});

app.get("/", ...indexHandlers);

export default app;
