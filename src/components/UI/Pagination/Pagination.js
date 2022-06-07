
import classes from './Pagination.module.css';

const Pagination = ({children}) => {
  return (
    <div className={classes.Next}>
        {children}
    </div>
  )
}

export default Pagination