export const investmentListServices = (type: 'stock' | 'crypto' | 'commodities') => {

  // return fetch(`http://127.0.0.1:8000/${type}-list/`)
  return fetch(`https://inviewservice.azurewebsites.net/${type}-list/`)
    .then((res) => res.json());
};

export const stockListServices = () => {

  // return fetch('http://127.0.0.1:8000/stock-list/')
  return fetch('https://inviewservice.azurewebsites.net/stock-list/')
    .then((res) => res.json());
};