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
];
