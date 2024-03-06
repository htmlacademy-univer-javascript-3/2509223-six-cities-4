import MainEmpty from '../../pages/main/main_empty';
import Main from '../../pages/main/main';
import Header from '../header';
import Footer from '../footer';
import Favorite from '../../pages/favorites/favorites';
import FavoriteEmpty from '../../pages/favorites/favorites_empty';

type AppScreenProps = {
    count_places: number;

    cities: string[];
    active_city_id: number;

    current_page: string;
    is_needing_footer: boolean;

    is_main: boolean;
    was_login: -1|0|1; //'-1' - не зашел, '0' - заходит, '1' - зашел
    email?: string;
    favorite?: number;
}

function GetMain(appScreenProps: AppScreenProps): JSX.Element {
  if (appScreenProps.count_places > 0) {
    return (
      <Main
        count_places={appScreenProps.count_places}
        cities={appScreenProps.cities}
        active_city_id={appScreenProps.active_city_id}
      />);
  }

  return (
    <MainEmpty
      count_places={appScreenProps.count_places}
      cities={appScreenProps.cities}
      active_city_id={appScreenProps.active_city_id}
    />);
}

function GetFavorite(appScreenProps:AppScreenProps): JSX.Element {
  if (appScreenProps.favorite !== undefined){
    if (appScreenProps.favorite > 0) {
      return (<Favorite />);
    }

    return (<FavoriteEmpty />);
  }
  return <></>;
}

function App(appScreenProps: AppScreenProps): JSX.Element {
  return (
    <div>
      <Header
        is_main={appScreenProps.is_main}
        was_login={appScreenProps.was_login}
        email={appScreenProps.email}
        favorite={appScreenProps.favorite}
      />

      {appScreenProps.current_page === 'main' && GetMain(appScreenProps)}
      {appScreenProps.current_page === 'favorites' && GetFavorite(appScreenProps)}

      {appScreenProps.is_needing_footer && <Footer />}
    </div>
  );
}

export default App;
