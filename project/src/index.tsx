import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { nearPlacesCards } from './mocks/near-places-cards';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';


ReactDOM.render(
  <React.StrictMode>
    <App
      offers={offers}
      nearPlacesCards={nearPlacesCards}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
