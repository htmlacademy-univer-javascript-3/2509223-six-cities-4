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
      active_city_id={Setting.activeCityId}
      current_page={Setting.currentPage}
      is_main={Setting.isMain}
      was_login={Setting.wasLogin}
      email={Setting.email}
      favorite={Setting.favorite}
      is_needing_footer={Setting.isNeedingFooter}
    />
  </React.StrictMode>
);
