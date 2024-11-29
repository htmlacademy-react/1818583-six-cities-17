import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {MAIN_PAGE_DATA} from './mocks/mocks.ts';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App data={MAIN_PAGE_DATA}/>
    </BrowserRouter>
  </React.StrictMode>
);
