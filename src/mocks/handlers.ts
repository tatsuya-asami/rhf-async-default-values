import { http, HttpResponse, delay } from "msw";

export const handlers = [
  http.post("https://example.com/user", async () => {
    await delay(1500);
    return HttpResponse.json({
      user: {
        id: new Date(),
        firstName: "John",
        lastName: "Maverick",
      },
    });
  }),
];
