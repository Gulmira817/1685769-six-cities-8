import Card from '../../components/card/card';
import FavoriteItem from '../../components/favorite-item/favorite-item';
import { Offers } from '../../types';

type FavoriteCitiesProps={
  offers:Offers,
}
function FavoritеCities({offers}:FavoriteCitiesProps):JSX.Element{
  return(
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {offers.map((offer)=>(
              <FavoriteItem key={offer.id} name={offer.city.name}>
                {offer.isFavorite && <Card offer={offer}  key={offer.id}   onMouseEnter={()=>false}/>}
              </FavoriteItem>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritеCities;


