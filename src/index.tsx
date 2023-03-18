import { render } from 'react-dom';
// COMPONENTS
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
// STYLES
import 'antd/dist/antd.min.css';
import './sassVariables/index.scss';

const root = document.getElementById('root');

render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN || 'dev-wf53ttsqsuq5jb6r.us.auth0.com'}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || '4zNgQagFYC4ft1uAYOqGbET1TgG31r5L'}
<<<<<<< HEAD
    redirectUri='https://localhost:3000/profile'
    // redirectUri='https://inviewer.azurewebsites.net/profile'
=======
    redirectUri={process.env.REACT_APP_INVIEW_REDIRCT_URL}
>>>>>>> cf4370bb86bb884aceb0c07578567e44470a85df
  >
    <App />
  </Auth0Provider>,
  root,
);
