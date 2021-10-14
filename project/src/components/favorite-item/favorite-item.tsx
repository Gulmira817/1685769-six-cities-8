
import React from 'react';
type FavoriteItemProps={
  name:string,
  children?:React.ReactChild | React.ReactNode ,

}

function FavoriteItem({name,children}:FavoriteItemProps):JSX.Element{

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

        {children}

      </div>
    </li>

  );
}
export default FavoriteItem;
