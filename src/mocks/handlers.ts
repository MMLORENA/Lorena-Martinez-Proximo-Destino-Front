import { rest } from "msw";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}user/register`,
    async (req, res, ctx) => {
      const { userName } = await req.json();
      const status = userName === "" ? 400 : 201;

      return res(ctx.status(status));
    }
  ),
];
