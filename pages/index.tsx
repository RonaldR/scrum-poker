import { NextPage } from 'next';
import withLayout from '../components/HigherOrderLayout';
import Card from '../components/Card';

const POKER_NUMBERS = [
  0, 1, 2, 3, 5, 8, 13, 20, 40, '❓', '♾️', '☕',
];
const FIBONACCI_NUMBERS = [
  0, 1, 2, 3, 5, 8, 13, 21, 34, '❓', '♾️', '☕',
];
const SHIRT_SIZES = [
  'XS', 'S', 'M', 'L', 'XL', '2XL', '❓', '♾️', '☕',
];


const getSelectedNumbers = (numberType?: string | string[]): (string | number)[] => {
  let numbers = [];
  switch (numberType) {
    case 'fibonacci':
      numbers = FIBONACCI_NUMBERS;
      break;
    case 'tshirt':
      numbers = SHIRT_SIZES;
      break;
    default:
      numbers = POKER_NUMBERS;
      break;
  }

  return numbers;
};

type Props = {
  numberType?: string | string[];
};

const Index: NextPage<Props> = ({ numberType }: Props) => (
  <section className="page">
    <div className="cards">
      {getSelectedNumbers(numberType).map((number) => <Card key={number} cardValue={number} />)}
    </div>
    <style jsx>
      {`
      .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        margin: 0;
        padding: 0;
      }
    `}
    </style>
  </section>
);

export { Index };

export default withLayout(Index);
