import FavoriteItem from '../favorite-item/favorite-item';
import {City} from '../../types';


type FavoriteCitiesProps={
  cards:City[]
}
function FavoritеCities({cards}:FavoriteCitiesProps):JSX.Element{
  return(
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cards.map((card)=><FavoriteItem  name={card.cityName} key={card.cityName} cards={cards}/>)}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritеCities;


