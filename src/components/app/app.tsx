import MainEmpty from '../../pages/main/main_empty';
import Main from '../../pages/main/main';
import Header from '../header';
import Footer from '../footer';
import Favorite from '../../pages/favorites/favorites';
import FavoriteEmpty from '../../pages/favorites/favorites_empty';
import Offer from '../../pages/offer/offer';

type AppScreenProps = {
    count_places: number;

    cities: string[];
    activeCityId: number;

    currentPage: string;
    isNeedingFooter: boolean;

    isMain: boolean;
    wasLogin: -1|0|1; //'-1' - не зашел, '0' - заходит, '1' - зашел
    email?: string;
    favorite?: number;
}

function GetMain(appScreenProps: AppScreenProps): JSX.Element {
  if (appScreenProps.count_places > 0) {
    return (
      <Main
        count_places={appScreenProps.count_places}
        cities={appScreenProps.cities}
        active_city_id={appScreenProps.activeCityId}
      />);
  }

  return (
    <MainEmpty
      count_places={appScreenProps.count_places}
      cities={appScreenProps.cities}
      active_city_id={appScreenProps.activeCityId}
    />);
}

function GetFavorite(appScreenProps: AppScreenProps): JSX.Element | null {
  if (appScreenProps.favorite !== undefined) {
    if (appScreenProps.favorite > 0) {
      return <Favorite />;
    }
    return <FavoriteEmpty />;
  }
  return null;
}


function App(appScreenProps: AppScreenProps): JSX.Element {
  return (
    <div>
      <Header
        is_main={appScreenProps.isMain}
        was_login={appScreenProps.wasLogin}
        email={appScreenProps.email}
        favorite={appScreenProps.favorite}
      />

      {appScreenProps.currentPage === 'main' && GetMain(appScreenProps)}
      {appScreenProps.currentPage === 'favorites' && GetFavorite(appScreenProps)}
      {appScreenProps.currentPage === 'offer' && <Offer wasLogin={appScreenProps.wasLogin >= 0}/>}
      
      {appScreenProps.isNeedingFooter && <Footer />}
    </div>
  );
}

export default App;
