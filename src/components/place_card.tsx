type PlaceCardProps = {
    key?: string;
    mark?: string;
    src_img: string;
    price_valuta: string;
    price_value: number;
    is_active: boolean;
    card_name: string;
    card_type: string;
}

function PlaceCard(placeCardProps: PlaceCardProps): JSX.Element {
  const mark = [];
  if (placeCardProps.mark !== undefined){
    mark.push(
      <div className="place-card__mark">
        <span>{placeCardProps.mark}</span>
      </div>
    );
  }

  const bookmarkButton = [];
  if (placeCardProps.is_active){
    bookmarkButton.push(
      <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">In bookmarks</span>
      </button>
    );
  } else {
    bookmarkButton.push(
      <button className="place-card__bookmark-button button" type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  }

  return (
    <article className="cities__card place-card">
      {mark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={placeCardProps.src_img} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{placeCardProps.price_valuta}{placeCardProps.price_value}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {bookmarkButton}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{placeCardProps.card_name}</a>
        </h2>
        <p className="place-card__type">{placeCardProps.card_type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
