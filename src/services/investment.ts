
export const investmentListServices = (type: 'stock' | 'crypto' | 'commodities') => {

  const url = urlJoin(`${process.env.REACT_APP_INVIEW_SERVICE_URL}`,`/${type}-list/`);

  return fetch(url)
    .then((res) => res.json());
};

export const stockListServices = () => {

  const url = urlJoin(`${process.env.REACT_APP_INVIEW_SERVICE_URL}`,'/stock-list/');

  return fetch(url)
    .then((res) => res.json());
};

const urlJoin = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/') /* eslint-disable-line */
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');