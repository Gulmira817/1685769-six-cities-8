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
    <ul className="list">
      {offers.map((offer, index) => {
        const keyValue = `${index}-${offer.city.name}`;
        return (
          <li
            className="list__item"
            key={keyValue}
            onMouseEnter={listItemHoverHandler}
          >
            {offer.city.name}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
