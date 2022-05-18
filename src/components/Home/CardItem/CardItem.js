import classes from './CardItem.module.css';

const CardItem = ({ img, title, content }) => {
  return (
    <div className={classes.CardItem}>
      <div className={classes.cardimage}>
        <img src={img} alt="img" />
      </div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default CardItem;
