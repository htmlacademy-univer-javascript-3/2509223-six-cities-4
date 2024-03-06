type FavoriteLocationProps = {
    location: [string, JSX.Element[]];
}

function FavoriteLocation(favoriteLocationProps: FavoriteLocationProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favoriteLocationProps.location[0]}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoriteLocationProps.location[1]}
      </div>
    </li>
  );
}

export default FavoriteLocation;
