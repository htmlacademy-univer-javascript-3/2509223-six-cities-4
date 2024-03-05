import CitiesTabs from "../../components/cities_tabs";
import PlaceCard from "../../components/place_card";

type MainProps = {
    count_places: number;

    cities: string[];
    active_city_id: number;
}

function Main(mainProps:MainProps): JSX.Element {
    return (
        <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <CitiesTabs cities={mainProps.cities} active_city_id={mainProps.active_city_id}/>

            <div className="cities">
                <div className="cities__places-container container">
                    <section className="cities__places places">
                        <h2 className="visually-hidden">Places</h2>
                        <b className="places__found">{mainProps.count_places} places to stay in Amsterdam</b>
                        <form className="places__sorting" action="#" method="get">
                            <span className="places__sorting-caption">Sort by</span>
                            <span className="places__sorting-type" tabIndex={0}>
                                Popular
                                <svg className="places__sorting-arrow" width="7" height="4">
                                    <use xlinkHref="#icon-arrow-select"></use>
                                </svg>
                            </span>
                            <ul className="places__options places__options--custom places__options--opened">
                                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                                <li className="places__option" tabIndex={0}>Price: low to high</li>
                                <li className="places__option" tabIndex={0}>Price: high to low</li>
                                <li className="places__option" tabIndex={0}>Top rated first</li>
                            </ul>
                        </form>
                        <div className="cities__places-list places__list tabs__content">
                            <PlaceCard 
                                mark="Premium"
                                src_img = "img/apartment-01.jpg"
                                price_valuta = "&euro;"
                                price_value = {120}
                                is_active = {false}
                                card_name = "Beautiful &amp; luxurious apartment at great location"
                                card_type = "Apartment"
                            />
                            
                            <PlaceCard 
                                src_img = "img/room.jpg"
                                price_valuta = "&euro;"
                                price_value = {80}
                                is_active = {true}
                                card_name = "Wood and stone place"
                                card_type = "Room"
                            />

                            <PlaceCard 
                                src_img = "img/apartment-02.jpg"
                                price_valuta = "&euro;"
                                price_value = {132}
                                is_active = {false}
                                card_name = "Canal Viw Prinsengracht"
                                card_type = "Apartment"
                            />

                            <PlaceCard 
                                mark="Premium"
                                src_img = "img/apartment-03.jpg"
                                price_valuta = "&euro;"
                                price_value = {180}
                                is_active = {false}
                                card_name = "Nice, cozy, warm big bed apartment"
                                card_type = "Apartment"
                            />

                            <PlaceCard 
                                src_img = "img/room.jpg"
                                price_valuta = "&euro;"
                                price_value = {80}
                                is_active = {true}
                                card_name = "Wood and stone place"
                                card_type = "Room"
                            />
                        </div>
                    </section>
                    <div className="cities__right-section">
                        <section className="cities__map map"></section>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;