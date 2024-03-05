type CitiesTabsProps = {
    cities: string[];
    active_city_id: number;
}

function CitiesTabs({cities, active_city_id}: CitiesTabsProps): JSX.Element {
    let locations = [];
    for (let i = 0; i < cities.length; i++) {
        locations.push(<li className="locations__item">
            {i !== active_city_id && (
                <a className="locations__item-link tabs__item" href="#"><span>{cities[i]}</span></a>
            )}
            {i === active_city_id && (
                <a className="locations__item-link tabs__item tabs__item--active" href="#"><span>{cities[i]}</span></a>
            )}            
            </li>);
    }

    return (
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
                {locations}
            </ul>
          </section>
        </div>
    );
}

export default CitiesTabs;