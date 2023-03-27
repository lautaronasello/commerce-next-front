import axios from 'axios';

export function axiosRequest(url, option) {
  return axios({
    url: url,
    method: option.method,
    headers: option.headers,
    data: option.body,
  });
}
