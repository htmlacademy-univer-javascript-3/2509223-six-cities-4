type HeaderProps = {
    is_main: boolean;
    was_login: -1|0|1; //'-1' - не зашел, '0' - заходит, '1' - зашел
    email?: string;
    favorite?: number;
}

function Header(headerProps: HeaderProps): JSX.Element {
  const nav = [];
  if (headerProps.was_login < 0){
    nav.push(
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  if (headerProps.was_login > 0){
    nav.push(
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{headerProps.email}</span>
              <span className="header__favorite-count">{headerProps.favorite}</span>
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {!headerProps.is_main &&
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>}
            {headerProps.is_main &&
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>}
          </div>
          {nav}
        </div>
      </div>
    </header>
  );
}

export default Header;
