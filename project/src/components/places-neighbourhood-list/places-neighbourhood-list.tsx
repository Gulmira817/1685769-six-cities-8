import PlacesNeighbourhoodItem from '../../components/places-neighbourhood-item/places-neighbourhood-item';
import { Offer, PlacesNeighbourhoodListProps } from '../../types';

function PlacesNeighbourhoodList(props:PlacesNeighbourhoodListProps):JSX.Element{
  const{cards,onListItemHover}=props;

  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {cards.map((card:Offer)=>
          <PlacesNeighbourhoodItem card={card} key={card.id} onListItemHover={onListItemHover} />,
        )}

      </div>
    </section>
  );
}

export default PlacesNeighbourhoodList;
