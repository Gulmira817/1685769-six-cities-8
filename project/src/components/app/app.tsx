import React, { Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/layout/private-route';
import { AppRoute, AuthStatus } from '../../constants/const';
import FavoritеCities from '../../pages/favorite-cities/favorite-cities';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Room from '../../pages/room/room';
import { AppProps } from './app-types';

function App(props:AppProps): JSX.Element {
  const offers=props.offers;
  // const review=props.reviews;
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
          <Room />
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

// const cities=
// [ {
//   'id': 1,
//   'cityName':'Paris',
//   'images': ['img/1.png', 'img/2.png'],
//   'isFavorite': false,
//   'isPremium': false,
//   'maxAdults': 4,
//   'previewImage': 'img/1.png',
//   'price': 120,
//   'rating': 4.8,
//   'title': 'Beautiful & luxurious studio at great location',
//   'type': 'apartment',
// },
// {
//   'id': 2,
//   'cityName':'Cologne',
//   'images': ['img/1.png', 'img/2.png'],
//   'isFavorite': false,
//   'isPremium': false,
//   'maxAdults': 4,
//   'previewImage': 'img/1.png',
//   'price': 80,
//   'rating': 4.8,
//   'title': 'Wood and stone place',
//   'type': 'Private room',
// },
// {
//   'id': 3,
//   'cityName':'Brussels',
//   'images': ['img/1.png', 'img/2.png'],
//   'isFavorite': false,
//   'isPremium': false,
//   'maxAdults': 4,
//   'previewImage': 'img/1.png',
//   'price': 132,
//   'rating': 4.8,
//   'title': 'Beautiful & luxurious studio at great location',
//   'type': 'apartment',
// },
// {
//   'id': 4,
//   'cityName':'Amsterdam',
//   'images': ['img/1.png', 'img/2.png'],
//   'isFavorite': true,
//   'isPremium': true,
//   'maxAdults': 4,
//   'previewImage': 'img/1.png',
//   'price': 180,
//   'rating': 4.8,
//   'title': 'Nice, cozy, warm big bed apartment',
//   'type': 'apartment',
// },
// {
//   'id': 5,
//   'cityName':'Hamburg',
//   'images': ['img/1.png', 'img/2.png'],
//   'isFavorite': false,
//   'isPremium': false,
//   'maxAdults': 4,
//   'previewImage': 'img/1.png',
//   'price': 120,
//   'rating': 4.8,
//   'title': 'Beautiful & luxurious studio at great location',
//   'type': 'apartment',
// },
// {
//   'id': 6,
//   'cityName':'Dusseldorf',
//   'images': ['img/1.png', 'img/2.png'],
//   'isFavorite': false,
//   'isPremium': false,
//   'maxAdults': 4,
//   'previewImage': 'img/1.png',
//   'price': 120,
//   'rating': 4.8,
//   'title': 'Beautiful & luxurious studio at great location',
//   'type': 'apartment',
// }];

export default App;
