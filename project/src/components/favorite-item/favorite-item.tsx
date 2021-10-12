import Card from '../card/card';
import {City} from '../../types';
type FavoriteItemProps={
  name:string,
  cards:City[]
}

function FavoriteItem({name,cards}:FavoriteItemProps):JSX.Element{
  return(
    <li className="favorites__locations-items">

      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          cards.map((card)=>card.isFavorite?
            card:(<Card card={card}  key={card.id} />))
        }
      </div>
    </li>

  );
}
export default FavoriteItem;
