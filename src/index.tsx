import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {MAIN_PAGE_DATA} from './mocks/mocks.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App data={MAIN_PAGE_DATA}/>
  </React.StrictMode>
);
