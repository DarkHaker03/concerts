import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import { Provider } from 'react-redux';
import App from 'app/ui';
import { setupStore } from 'store';
import reportWebVitals from 'reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

const BASE_NAME =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_GITHUB_URL : '';

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={BASE_NAME}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
