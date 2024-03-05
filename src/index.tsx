import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const cities:string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const Setting = {
  count_places: 5,    
  active_city_id: 3,

  current_page: 'main',

  is_main: true,
  was_login: 1, //'-1' - не зашел, '0' - заходит, '1' - зашел 
  email: 'Oliver.conner@gmail.com',
  favorite: 3,

  is_needing_footer: false,
}as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App 
      count_places={Setting.count_places}
      cities={cities}
      active_city_id={Setting.active_city_id}
      current_page={Setting.current_page}
      is_main={Setting.is_main}
      was_login={Setting.was_login}
      email={Setting.email}
      favorite={Setting.favorite}
      is_needing_footer={Setting.is_needing_footer}
      />
  </React.StrictMode>
);
