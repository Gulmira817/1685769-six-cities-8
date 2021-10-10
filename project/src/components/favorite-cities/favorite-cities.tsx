import FavoritesItem from '../favorite-item/favoriteItem';
import {City} from '../../types';


type FavorityCityiesProps={
  names:string[],
  cards:City[]
}
function FavoritеCityies({names,cards}:FavorityCityiesProps){
  return(
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {names.map((item)=><FavoritesItem  name={item} key={names.indexOf(item)} cards={cards}/>)}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritеCityies;


