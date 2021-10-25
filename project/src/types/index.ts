export type Location= {
latitude:number
longitude:number,
zoom: number
}

export  type City = {
  name:string,
  location:Location,
};

export type Review = {
comment:string,
rating:number
}

export type Host = {
avatarUrl:string,
name:string,
id:number,
isPro:boolean,
}


export type Offer = {
  city:City,
  bedrooms:number,
  description:string,
  goods:string[],
  host:Host,
  maxAdults: number,
  previewImage: string,
  images:string[],
  location:Location,
  id: number,
  price: number,
  type: string,
  rating: number,
  title: string,
  isPremium?: boolean,
  isFavorite?: boolean,
}

export type Point = {
  title: string;
  latitude: number;
  longitude: number;
};

export type Points = Point[];
export type Offers=Offer[]

export type MainProps={
  offers:Offers,

}
export type AppProps = {
  offers: Offers;
  reviews: Review[];
}
