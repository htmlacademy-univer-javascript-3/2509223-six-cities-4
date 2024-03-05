import PlaceCard from "../../components/place_card";
import FavoriteLocation from "../../components/favorite_location";

function Favorite(): JSX.Element {
    let favorites_locations = {
        'Amsterdam': [
            <PlaceCard 
                mark="Premium"
                src_img = "img/apartment-small-03.jpg"
                price_valuta = "&euro;"
                price_value = {180}
                is_active = {true}
                card_name = "Nice, cozy, warm big bed apartment"
                card_type = "Apartment"
            />,
            
            <PlaceCard 
                src_img = "img/room-small.jpg"
                price_valuta = "&euro;"
                price_value = {80}
                is_active = {true}
                card_name = "Wood and stone place"
                card_type = "Room"
            />,
        ],
        'Cologne': [
            <PlaceCard 
                src_img = "img/apartment-small-04.jpg"
                price_valuta = "&euro;"
                price_value = {180}
                is_active = {true}
                card_name = "White castle"
                card_type = "Apartment"
            />,
        ],
    };

    return (
        <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
                <section className="favorites">
                    <h1 className="favorites__title">Saved listing</h1>
                    <ul className="favorites__list">
                        {Object.entries(favorites_locations).map(([location, placeCards]) => (
                            <FavoriteLocation location={[location, placeCards]} />
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}

export default Favorite;