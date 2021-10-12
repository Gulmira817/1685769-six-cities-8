import Main from '../main/main';

function App(): JSX.Element {
  return <Main  cities={cities}/>;
}


const cities=
[ {
  'id': 1,
  'cityName':'Paris',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': false,
  'isPremium': false,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
{
  'id': 2,
  'cityName':'Cologne',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': false,
  'isPremium': false,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 80,
  'rating': 4.8,
  'title': 'Wood and stone place',
  'type': 'Private room',
},
{
  'id': 3,
  'cityName':'Brussels',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': false,
  'isPremium': false,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 132,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
{
  'id': 4,
  'cityName':'Amsterdam',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': true,
  'isPremium': true,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 180,
  'rating': 4.8,
  'title': 'Nice, cozy, warm big bed apartment',
  'type': 'apartment',
},
{
  'id': 5,
  'cityName':'Hamburg',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': false,
  'isPremium': false,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
{
  'id': 6,
  'cityName':'Dusseldorf',
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': false,
  'isPremium': false,
  'maxAdults': 4,
  'previewImage': 'img/1.png',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
}];

export default App;
