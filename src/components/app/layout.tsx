import { Fragment } from 'react';
import Header from '../header';
import Footer from '../footer';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
    isMain: boolean;
    wasLogin: boolean;
    email?: string;
    favorite?: number;
    isNeedingFooter: boolean;
}

function GetInside(layoutProps:LayoutProps): JSX.Element {
  return (
    <Fragment>
      <Header
        is_main={layoutProps.isMain}
        was_login={layoutProps.wasLogin}
        email={layoutProps.email}
        favorite={layoutProps.favorite}
      />
      <main>
        <Outlet />
      </main>
      {layoutProps.isNeedingFooter && <Footer />}
    </Fragment>
  );
}

function Layout(layoutProps:LayoutProps): JSX.Element {
  if (layoutProps.isMain){
    return GetInside(layoutProps);
  } else {
    return (
      <div className="page page--gray page--login">
        {GetInside(layoutProps)}
      </div>
    );
  }
}

export default Layout;
