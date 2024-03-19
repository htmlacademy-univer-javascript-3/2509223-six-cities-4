import { Fragment } from 'react';

type HostProps = {
    user: {
        avatarImage: string;
        name: string;
        isPro: boolean;
    };

    textComment: string[];
}

function Host(hostProps:HostProps): JSX.Element{
  const offerText: JSX.Element[] = [];
  hostProps.textComment.forEach((str): void=>{
    offerText.push(
      <p key={'text'} className="offer__text">
        {str}
      </p>
    );
  });

  return (
    <Fragment>
      <div className="offer__host-user user">
        <div className={`offer__avatar-wrapper${ hostProps.user.isPro ? ' offer__avatar-wrapper--pro' : '' } user__avatar-wrapper`}>
          <img
            className="offer__avatar user__avatar"
            src={hostProps.user.avatarImage}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{hostProps.user.name}</span>
        {hostProps.user.isPro && <span className="offer__user-status">Pro</span>}
      </div>
      <div className="offer__description">
        {offerText}
      </div>
    </Fragment>
  );
}

export default Host;
