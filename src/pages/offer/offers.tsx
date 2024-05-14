import Review from '../../components/review';
import Host from '../../components/offer_host';
import Offer from './offer';
import { CityName, InsideObject } from '../../const';
import { useParams } from 'react-router-dom';
import { placeCards } from '../../components/place_card/place_cards';

export const offers = { // eslint-disable-line 
  [CityName.Amsterdam]: [
    <Offer
      key="amsterdam-1"
      city={CityName.Amsterdam}
      index={1}
      paths_gallery={['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg']}
      isPremium
      name='Beautiful &amp; luxurious studio at great location'
      isFavorite
      rating={4.8}
      features={{entire:'Apartment', bedrooms:'3 Bedrooms', adults:'Max 4 adults'}}
      price = {180}
      inside={[
        InsideObject.WiFi,
        InsideObject.WashingMachine,
        InsideObject.Towels,
        InsideObject.Heating,
        InsideObject.CoffeeMachine,
        InsideObject.BabySeat,
        InsideObject.Kitchen,
        InsideObject.Dishwasher,
        InsideObject.CabelTV,
        InsideObject.Fridge
      ]}
      host={[
        <Host
          key="host-1"
          user={{
            avatarImage: 'img/avatar-angelina.jpg',
            name: 'Angelina',
            isPro: true,
          }}
          textComment={[
            'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
          ]}
        />]}
      reviews={[
        [
          <Review
            key='review-1'
            user={{
              avatarImage: 'img/avatar-max.jpg',
              name: 'Max'
            }}
            textComment="A quiet cozy and picturesque that hides behind a a river
            by the unique lightness of Amsterdam. The building is
            green and from 18th century."
            time="April 2019"
            rating={5}
          />
        ],
      ]}
      otherCards={[
        placeCards[CityName.Amsterdam][0],
        placeCards[CityName.Amsterdam][1],
        placeCards[CityName.Amsterdam][2],
      ]}
    />,

    <Offer
      key="amsterdam-2"
      city={CityName.Amsterdam}
      index={2}
      paths_gallery={['img/room-small.jpg', 'img/apartment-02.jpg', 'img/room.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg']}
      isPremium={false}
      name='Wood and stone place'
      isFavorite
      rating={4.2}
      features={{entire:'Room', bedrooms:'1 Bedroom', adults:'Max 2 adults'}}
      price = {80}
      inside={[
        InsideObject.WiFi,
        InsideObject.Towels,
        InsideObject.Heating,
        InsideObject.CoffeeMachine,
        InsideObject.Kitchen,
        InsideObject.CabelTV,
        InsideObject.Fridge
      ]}
      host={[
        <Host
          key="host-2"
          user={{
            avatarImage: 'img/avatar-max.jpg',
            name: 'Max',
            isPro: true,
          }}
          textComment={[
            'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
          ]}
        />]}
      reviews={[
        [
          <Review
            key='review-2'
            user={{
              avatarImage: 'img/avatar-angelina.jpg',
              name: 'Angelina'
            }}
            textComment="A quiet cozy and picturesque that hides behind a a river
            by the unique lightness of Amsterdam. The building is
            green and from 18th century."
            time="April 2020"
            rating={5}
          />
        ],
      ]}
      otherCards={[
        placeCards[CityName.Amsterdam][0],
        placeCards[CityName.Amsterdam][1],
        placeCards[CityName.Amsterdam][2],
      ]}
    />,

    <Offer
      key="amsterdam-3"
      city={CityName.Amsterdam}
      index={3}
      paths_gallery={['img/room.jpg', 'img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg']}
      isPremium={false}
      name='Wood and stone place'
      isFavorite
      rating={4.5}
      features={{entire:'Room', bedrooms:'1 Bedroom', adults:'Max 2 adults'}}
      price = {100}
      inside={[
        InsideObject.WiFi,
        InsideObject.Towels,
        InsideObject.Heating,
        InsideObject.CoffeeMachine,
        InsideObject.Kitchen,
        InsideObject.CabelTV,
        InsideObject.Fridge,
        InsideObject.Dishwasher,
        InsideObject.Parking
      ]}
      host={[
        <Host
          key="host-3"
          user={{
            avatarImage: 'img/avatar-max.jpg',
            name: 'Max',
            isPro: true,
          }}
          textComment={[
            'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
          ]}
        />]}
      reviews={[
      ]}
      otherCards={[
        placeCards[CityName.Amsterdam][0],
        placeCards[CityName.Amsterdam][1],
        placeCards[CityName.Amsterdam][2],
      ]}
    />,
  ],
  [CityName.Cologne]: [
    <Offer
      key="cologne-1"
      city={CityName.Cologne}
      index={1}
      paths_gallery={['img/apartment-02.jpg', 'img/room.jpg', 'img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg']}
      isPremium
      name='White castle'
      isFavorite
      rating={4.7}
      features={{entire:'Apartment', bedrooms:'2 Bedrooms', adults:'Max 3 adults'}}
      price = {180}
      inside={[
        InsideObject.WiFi,
        InsideObject.Towels,
        InsideObject.Heating,
        InsideObject.CoffeeMachine,
        InsideObject.Kitchen,
        InsideObject.CabelTV,
        InsideObject.Fridge,
        InsideObject.Dishwasher,
        InsideObject.Parking
      ]}
      host={[
        <Host
          key="host-1"
          user={{
            avatarImage: 'img/avatar-max.jpg',
            name: 'Max',
            isPro: true,
          }}
          textComment={[
            'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
            'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
          ]}
        />]}
      reviews={[
        [
          <Review
            key='review-1'
            user={{
              avatarImage: 'img/avatar-angelina.jpg',
              name: 'Angelina'
            }}
            textComment="A quiet cozy and picturesque that hides behind a a river
            by the unique lightness of Amsterdam. The building is
            green and from 18th century."
            time="April 2020"
            rating={5}
          />],
        [
          <Review
            key='review-2'
            user={{
              avatarImage: 'img/avatar-max.jpg',
              name: 'Max',
            }}
            textComment="A quiet cozy and picturesque that hides behind a a river
            by the unique lightness of Amsterdam. The building is
            green and from 18th century."
            time="April 2022"
            rating={5}
          />
        ],
      ]}
      otherCards={[
        placeCards[CityName.Amsterdam][0],
        placeCards[CityName.Amsterdam][1],
        placeCards[CityName.Amsterdam][2],
      ]}
    />,
  ],
  [CityName.Dusseldorf]: [
  ],
  [CityName.Brussels]: [
  ],
  [CityName.Hamburg]: [
  ],
  [CityName.Paris]: [
  ]
};

function Offers(): JSX.Element {
  const { cardKey } = useParams<{ cardKey: string }>();
  if (cardKey === undefined) {
    return offers[CityName.Amsterdam][0];
  }

  const [cityString, indexString] = cardKey.split('_');
  const city: CityName = CityName[cityString as keyof typeof CityName];
  const index: number = parseInt(indexString, 10);

  return offers[city][index - 1];
}

export default Offers;
