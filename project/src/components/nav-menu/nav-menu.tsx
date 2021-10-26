import { MouseEvent } from 'react';
import { Offers } from '../../types';

type ListProps = {
  offers: Offers;
  onListItemHover: (listItemName: string) => void;
};

function List(props: ListProps): JSX.Element {
  const {offers, onListItemHover} = props;

  const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.innerText);
  };

  return (
    <ul className="locations__list tabs__list">
      {offers.map((offer) => (
        <li
          className="locations__item"
          key={offer.id}
          onMouseEnter={listItemHoverHandler}
        >
          <a className= {`locations__item-link tabs__item ${offer.isFavorite ? 'tabs__item--active' : ''}`}>
            <span>{offer.city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default List;
