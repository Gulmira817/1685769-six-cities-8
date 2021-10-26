import React, { Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/layout/private-route';
import { AppRoute, AuthStatus } from '../../constants/const';
import FavoritеCities from '../../pages/favorite-cities/favorite-cities';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Room from '../../pages/room/room';
import { AppProps } from '../../types';


function App(props:AppProps): JSX.Element {
  const {offers,nearPlacesCards} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact  path={AppRoute.Root}>
          <Main  offers={offers}/>
        </Route>
        <Route exact  path={AppRoute.Login}>
          <Login/>
        </Route>
        <Route exact  path={AppRoute.Room}>
          <Room  cards={nearPlacesCards}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() =><FavoritеCities offers={offers}/>}
          authorizationStatus={AuthStatus.NoAuth}
        >
        </PrivateRoute>
        <Route
          render={() => (
            <Fragment>
              <NotFoundPage/>
              <Link to="/">Go to main page</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}


export default App;
