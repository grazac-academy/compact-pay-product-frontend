import classes from './Card.module.css';

const Card = ({img, title, content}) => {
  return (
    <div className={classes.card}>
        <div className={classes.cardimage}>
            <img src={img} alt="img" />
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  );
};

export default Card