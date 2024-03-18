import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const cities:string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const Setting = {
  countPlaces: 5,
  activeCityId: 3,

  currentPage: 'main',
  isNeedingFooter: false,

  isMain: true,
  wasLogin: 1, //'-1' - не зашел, '0' - заходит, '1' - зашел
  email: 'Oliver.conner@gmail.com',
  favorite: 3,
}as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      count_places={Setting.countPlaces}
      cities={cities}
      activeCityId={Setting.activeCityId}
      currentPage={Setting.currentPage}
      isMain={Setting.isMain}
      wasLogin={Setting.wasLogin}
      email={Setting.email}
      favorite={Setting.favorite}
      isNeedingFooter={Setting.isNeedingFooter}
    />
  </React.StrictMode>
);
