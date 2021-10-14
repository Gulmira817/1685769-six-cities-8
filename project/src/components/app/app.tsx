import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import FavoritеCities from '../../pages/favorite-cities/favorite-cities';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';
import {AppRoute,AuthStatus} from '../../constants/const';
import React, { Fragment } from 'react';
import PrivateRoute from '../../components/layout/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact  path={AppRoute.Root}>
          <Main  cities={cities}/>
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
          render={() =><FavoritеCities cards={cities}/>}
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

const cities=
[ {
  'id': 1,
  'cityName':'Paris',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': false,
  'isPremium': false,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
{
  'id': 2,
  'cityName':'Cologne',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': false,
  'isPremium': false,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 80,
  'rating': 4.8,
  'title': 'Wood and stone place',
  'type': 'Private room',
},
{
  'id': 3,
  'cityName':'Brussels',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': false,
  'isPremium': false,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 132,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
{
  'id': 4,
  'cityName':'Amsterdam',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': true,
  'isPremium': true,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 180,
  'rating': 4.8,
  'title': 'Nice, cozy, warm big bed apartment',
  'type': 'apartment',
},
{
  'id': 5,
  'cityName':'Hamburg',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': false,
  'isPremium': false,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
{
  'id': 6,
  'cityName':'Dusseldorf',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': false,
  'isPremium': false,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
}];

export default App;
