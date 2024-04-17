import { createServer } from "miragejs";
import { BASE_URL } from "./service";

export const setupApiMockServer = () => {
  return createServer({
    routes() {
      this.urlPrefix = BASE_URL;
      this.get("/results", () => [
        { id: "1", name: "Luke" },
        { id: "2", name: "Leia" },
        { id: "3", name: "Anakin" },
      ]);
    },
  });
};
