import { rest } from "msw";

const apiUrl = process.env.REACT_APP_API_URL as string;
export const handlers = [
  rest.post(`${apiUrl}user/register`, async (req, res, ctx) => {
    const { userName } = await req.json();
    const status = userName === "" ? 400 : 201;

    return res(ctx.status(status));
  }),

  rest.post(`${apiUrl}user/login`, async (req, res, ctx) => {
    const { userName } = await req.json();

    const status = userName === "" ? 403 : 200;

    return res(
      ctx.status(status),
      ctx.json({
        user: { token: "#" },
      })
    );
  }),

  rest.get(`${apiUrl}destinations`, async (req, res, ctx) => {
    return res.once(
      ctx.status(200),
      ctx.json({
        destinations: [
          {
            destination: "Nepal",
            image:
              "https://elviajerofeliz.com/wp-content/uploads/2019/12/Que-ver-en-Nepal-_-10-Lugares-Imprescindibles.jpg",
            latitude: 200,
            longitude: 1000,
            category: "adventure",
            firstPlan: "Himalaya",
            descriptionFirstPlan: "trekking",
            id: "63175bcd3349cd8da4ca9dbd",
          },
        ],
      })
    );
  }),

  rest.get(`${apiUrl}destinations`, async (req, res, ctx) => {
    return res.once(ctx.status(400));
  }),

  rest.delete(`${apiUrl}destinations/delete/1`, async (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.delete(`${apiUrl}destinations/delete/2`, async (req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
