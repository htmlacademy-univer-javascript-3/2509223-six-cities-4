import CitiesTabs from "../../components/cities_tabs";
import Header from "../../components/header";

type MainEmptyProps = {
    cities: string[];
    active_city_id: number;

    is_main: boolean;
    was_login: -1|0|1; //'-1' - не зашел, '0' - заходит, '1' - зашел 
    email?: string;
    favorite?: number;
}

function MainEmpty(mainEmptyProps:MainEmptyProps): JSX.Element {
    return (
        <div className="page page--gray page--main">
            <Header 
                is_main={mainEmptyProps.is_main} 
                was_login={mainEmptyProps.was_login} 
                email={mainEmptyProps.email}
                favorite={mainEmptyProps.favorite}
            />

            <main className="page__main page__main--index page__main--index-empty">
                <h1 className="visually-hidden">Cities</h1>
                <CitiesTabs cities={mainEmptyProps.cities} active_city_id={mainEmptyProps.active_city_id}/>
                <div className="cities">
                    <div className="cities__places-container cities__places-container--empty container">
                        <section className="cities__no-places">
                        <div className="cities__status-wrapper tabs__content">
                            <b className="cities__status">No places to stay available</b>
                            <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                        </div>
                        </section>
                        <div className="cities__right-section"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MainEmpty;