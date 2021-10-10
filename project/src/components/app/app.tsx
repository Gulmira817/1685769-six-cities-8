import Main from '../main/main';

function App(): JSX.Element {
  return <Main  cards={cards}/>;
}


const cards=
[ {
  'id': 1,
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
  'images': ['img/1.png', 'img/2.png'],
  'isFavorite': false,
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

];
export default App;
