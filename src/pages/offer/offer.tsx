import ReviewNew from '../../components/review_new';
import PlaceCard from '../../components/place_card';
import Review from '../../components/review';
import Host from '../../components/offer_host';

type OfferProps = { wasLogin: boolean};

function Offer(offerProps:OfferProps): JSX.Element {
  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            <div className="offer__image-wrapper">
              <img
                className="offer__image"
                src="img/room.jpg"
                alt="Photo studio"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                className="offer__image"
                src="img/apartment-01.jpg"
                alt="Photo studio"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                className="offer__image"
                src="img/apartment-02.jpg"
                alt="Photo studio"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                className="offer__image"
                src="img/apartment-03.jpg"
                alt="Photo studio"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                className="offer__image"
                src="img/studio-01.jpg"
                alt="Photo studio"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                className="offer__image"
                src="img/apartment-01.jpg"
                alt="Photo studio"
              />
            </div>
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                Beautiful &amp; luxurious studio at great location
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: "80%" }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">4.8</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                Apartment
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">€120</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What's inside</h2>
              <ul className="offer__inside-list">
                <li className="offer__inside-item">Wi-Fi</li>
                <li className="offer__inside-item">Washing machine</li>
                <li className="offer__inside-item">Towels</li>
                <li className="offer__inside-item">Heating</li>
                <li className="offer__inside-item">Coffee machine</li>
                <li className="offer__inside-item">Baby seat</li>
                <li className="offer__inside-item">Kitchen</li>
                <li className="offer__inside-item">Dishwasher</li>
                <li className="offer__inside-item">Cabel TV</li>
                <li className="offer__inside-item">Fridge</li>
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <Host 
                user={{
                    avatarImage: "img/avatar-angelina.jpg",
                    name: "Angelina",
                    isPro: true,
                }}
                textComment={[
                    "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.",
                    "An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful."
                ]}
              />              
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">1</span>
              </h2>
              <ul className="reviews__list">
                <li className="reviews__item">
                  <Review 
                    user={{
                        avatarImage: "img/avatar-max.jpg",
                        name: "Max"
                    }}
                    textComment="A quiet cozy and picturesque that hides behind a a river
                    by the unique lightness of Amsterdam. The building is
                    green and from 18th century."
                    time="April 2019"
                  />  
                </li>
              </ul>
              {offerProps.wasLogin && <ReviewNew />}
            </section>
          </div>
        </div>
        <section className="offer__map map" />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            <PlaceCard 
              isPremium = {false}
              images='img/room.jpg'
              price={80}
              isFavorite = {true}
              title = "Wood and stone place"
              type = "Room"
            />
            <PlaceCard 
              isPremium= {false}
              images='img/apartment-02.jpg'
              price = {132}
              isFavorite = {false}
              title = "Canal View Prinsengracht"
              type = "Apartment"
            /> 
            <PlaceCard 
              isPremium
              images = 'img/apartment-03.jpg'
              price = {180}
              isFavorite = {false}
              title = "Nice, cozy, warm big bed apartment"
              type = "Apartment"
            />            
          </div>
        </section>
      </div>
    </main>
  );
}

export default Offer;