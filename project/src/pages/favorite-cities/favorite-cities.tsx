import FavoriteItem from '../../components/favorite-item/favorite-item';
import {City} from '../../types';
import Card from '../../components/card/card';

type FavoriteCitiesProps={
  cards:City[],

}
function FavoritеCities({cards}:FavoriteCitiesProps):JSX.Element{
  return(
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cards.map((card)=>(
              <FavoriteItem key={card.id} name={card.cityName}>
                {card.isFavorite && <Card card={card}  key={card.id}/>}
              </FavoriteItem>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritеCities;


