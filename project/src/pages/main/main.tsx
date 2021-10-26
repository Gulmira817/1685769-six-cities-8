import { useState } from 'react';
import Map from '../../components/map/map';
import List from '../../components/nav-menu/nav-menu';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { MainProps, Offer } from '../../types';


function Main(props:MainProps): JSX.Element {
  const {offers}=props;
  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(
    undefined,
  );

  const onListItemHover = (listItemName: string) => {
    const currentPoint = offers.find((offer) => offer.city.name === listItemName);

    setSelectedPoint(currentPoint);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <List offers={offers} onListItemHover={onListItemHover}/>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <OfferCardList  offers={offers}/>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map  offers={offers} selectedPoint={selectedPoint} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
