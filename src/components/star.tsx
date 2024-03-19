import { Fragment } from 'react';

type StarProps = {
    value : number;
}

function Star(starProps: StarProps): JSX.Element{
  const types: string[] = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

  return(
    <Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={starProps.value}
        id={`${starProps.value }-stars`}
        type="radio"
      />
      <label
        htmlFor={`${starProps.value }-stars`}
        className="reviews__rating-label form__rating-label"
        title={types[starProps.value - 1]}
      >
        <svg className="form__star-image" width="{37}" height="{33}">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </Fragment>
  );
}

export default Star;
