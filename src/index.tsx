import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CityName } from './const';
import { offers } from './pages/offer/offers';
import { placeCards } from './components/place_card/place_cards';

const cities:string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const Setting = {
  countPlaces: 5,
  activeCityId: 3,

  currentPage: 'main',
  currentCity: CityName.Amsterdam,
  isNeedingFooter: false,

  isMain: true,
  wasLogin: true, //'-1' - не зашел, '0' - заходит, '1' - зашел
  email: 'Oliver.conner@gmail.com',
  favotiteCards: {
    [CityName.Amsterdam]: [placeCards[CityName.Amsterdam][0], placeCards[CityName.Amsterdam][1]],
    [CityName.Cologne]: [placeCards[CityName.Cologne][0]],
    [CityName.Brussels]: [],
    [CityName.Hamburg]: [],
    [CityName.Dusseldorf]: [],
    [CityName.Paris]: [],
  },
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      count_places={Setting.countPlaces}
      offers={offers}
      place_cards={placeCards}
      cities={cities}
      activeCityId={Setting.activeCityId}
      currentPage={Setting.currentPage}
      active_city={Setting.currentCity}
      isMain={Setting.isMain}
      wasLogin={Setting.wasLogin}
      email={Setting.email}
      favorite_cards={Setting.favotiteCards}
      isNeedingFooter={Setting.isNeedingFooter}
    />
  </React.StrictMode>
);
