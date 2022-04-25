import * as Styles from './Styles';
import { card } from '../../constants/index';

const Home = () => {
  return (
    <Styles.Container>
      {card.map((item) => (
        <Card {...item} />
      ))}
      <h2></h2>
      <p></p>
    </Styles.Container>
  );
};
