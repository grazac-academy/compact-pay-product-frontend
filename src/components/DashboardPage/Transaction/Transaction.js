import classes from './Transaction.module.css';
import rightarrow from 'assets/Dashboard/Arrow - Right.svg';
// import greaterthan from 'assets/Dashboard/greater_than.svg';
import Pagination from 'components/UI/Pagination/Pagination';
import { MdNavigateNext } from 'react-icons/md';
import { TransactionTable } from "../../../constants/TransactionTable";



const Transaction = () => {

    return (
        <div>
            <div className={classes.trans}>    
                <h2>Transaction History</h2>
                <div className={classes.View}>
                     <span>View All</span>
                      <img src={rightarrow} alt="icon" />
                </div> 
            </div>
        <table className={classes.transaction}>
            <thead>
                <tr>
                    <th>Referal ID</th>
                    <th>Date and Time</th>
                    <th>Amount</th>
                    <th>Rate</th>
                    <th>Transaction Type</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>  

            {TransactionTable.map((item, index) => {
                    return(
                        <tbody key={index}>
                            <tr>
                            <td >{item.text1}</td>
                            <td>{item.text2}</td>
                            <td>{item.text3}</td>
                            <td>{item.text4}</td>
                            <td>{item.text5}</td>
                            <td className={classes[item.css]}><p>{item.text6}</p></td>
                            <td><img src={item.image} alt="" /></td>
                            </tr>
                        </tbody> 
                    )
                })}

        
        </table>
            <div className={classes.page} >
                <Pagination ><MdNavigateNext className={classes.prev}/></Pagination>
                <Pagination ><p className={classes.num}>1</p></Pagination>
                <Pagination ><p className={classes.num}>2</p></Pagination>
                <Pagination ><p className={classes.num}>-</p></Pagination>
                <Pagination ><p className={classes.num}>10</p></Pagination>
                <Pagination ><MdNavigateNext className={classes.next}/></Pagination>
                
            </div>
    </div>

    )
}

export default Transaction;