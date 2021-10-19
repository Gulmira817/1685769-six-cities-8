import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { Offers } from '../../types';

type MainProps={
  offers:Offers,
}


function Main({offers}:MainProps): JSX.Element {

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {offers.map((offer)=> (
              <li className="locations__item"  key={offer.id}>
                <a className= {`locations__item-link tabs__item ${offer.isFavorite ? 'tabs__item--active' : ''}`}>
                  <span>{offer.city.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <OfferCardList  offers={offers}/>
    </main>
  );
}

export default Main;
