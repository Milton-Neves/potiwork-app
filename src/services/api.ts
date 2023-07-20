import axios from 'axios';
import { parseCookies } from 'nookies';

import { TOKEN_VARIABLE } from '../constants/cookies.variables';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const Api = (ctx = undefined) => {
  let cookies = parseCookies(ctx);

  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${cookies[TOKEN_VARIABLE]}`,
    },
  });
}