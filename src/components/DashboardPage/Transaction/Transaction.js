import classes from './Transaction.module.css';
import rightarrow from 'assets/Dashboard/Arrow - Right.svg';
import greaterthan from 'assets/Dashboard/greater_than.svg';
import Pagination from 'components/UI/Pagination/Pagination';
import { MdNavigateNext } from 'react-icons/md';


const Transaction = () => {
    return (
        <div>
            <div className={classes.trans}>    
                <h2>Transaction History</h2>
                <div className={classes.View}>
                     <span>View All</span>
                     <img src={rightarrow} alt="" />
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
            <tbody>
                <tr>
                    <td>100006758983</td>
                    <td>10 May 2022, 8:45PM</td>
                    <td>₦ 2,400</td>
                    <td>450.70</td>
                    <td>Fund Transfer</td>
                    <td className={classes.pend}><p>Pending</p></td>
                    <td><img src={greaterthan} alt="" /></td>
                </tr>
                <tr>
                    <td>100006758983</td>
                    <td>10 May 2022, 8:45PM</td>
                    <td>₦ 2,400</td>
                    <td>--</td>
                    <td>Wallet Top-Up</td>
                    <td className={classes.success}><p>Successful</p></td>
                    <td><img src={greaterthan} alt="" /></td>
                </tr>
                <tr>
                    <td>100006758983</td>
                    <td>10 May 2022, 8:45PM</td>
                    <td>₦ 2,400</td>
                    <td>--</td>
                    <td>Wallet Top-Up</td>
                    <td className={classes.success}><p>Successful</p></td>
                    <td><img src={greaterthan} alt="" /></td>
                </tr>
                <tr>
                    <td>100006758983</td>
                    <td>10 May 2022, 8:45PM</td>
                    <td>₦ 2,400</td>
                    <td>--</td>
                    <td>Wallet Top-Up</td>
                    <td className={classes.pend}><p>Pending</p></td>
                    <td><img src={greaterthan} alt="" /></td>
                </tr>
                <tr>
                    <td>100006758983</td>
                    <td>10 May 2022, 8:45PM</td>
                    <td>₦ 2,400</td>
                    <td>450.70</td>
                    <td>Fund Transfer</td>
                    <td className={classes.fail}><p>Failed</p></td>
                    <td><img src={greaterthan} alt="" /></td>
                </tr>
                <tr>
                    <td>100006758983</td>
                    <td>10 May 2022, 8:45PM</td>
                    <td>₦ 2,400</td>
                    <td>--</td>
                    <td>Wallet Top-Up</td>
                    <td className={classes.success}><p>Successful</p></td>
                    <td><img src={greaterthan} alt="" /></td>
                </tr>
                <tr>
                    <td>100006758983</td>
                    <td>10 May 2022, 8:45PM</td>
                    <td>₦ 2,400</td>
                    <td>450.70</td>
                    <td>Fund Transfer</td>
                    <td className={classes.fail}><p>Failed</p></td>
                    <td><img src={greaterthan} alt="" /></td>
                </tr>
                <tr>
                    <td>100006758983</td>
                    <td>10 May 2022, 8:45PM</td>
                    <td>₦ 2,400</td>
                    <td>450.70</td>
                    <td>Fund Transfer</td>
                    <td className={classes.pend}><p>Pending</p></td>
                    <td><img src={greaterthan} alt="" /></td>
                </tr>
            </tbody> 
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