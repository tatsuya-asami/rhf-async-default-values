import { http, HttpResponse, delay } from "msw";

export const handlers = [
  http.get("https://example.com/user", async () => {
    await delay(1500);
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
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
