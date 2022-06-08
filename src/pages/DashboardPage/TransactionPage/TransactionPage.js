import classes from "./TransactionPage.module.css";
import Pagination from 'components/UI/Pagination/Pagination';
import { MdNavigateNext } from 'react-icons/md';
import search from "assets/Dashboard/Search.svg";
import Modal from 'react-modal';
import { useState} from "react";
import TransactModals from "components/Modals/TransactModals/TransactModals";
import FundTransferModal from "components/Modals/TransactModals/FundTransferModal";
import FundP2P from "components/Modals/TransactModals/FundP2P";
import { TransactionTable } from "../../../constants/TransactionTable";


Modal.setAppElement('#root');

const TransactionPage = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsTransferOpen, setModalIsTransferOpen] = useState(false);
    const [modalIsP2POpen, setModalIsP2POpen] = useState(false);



    const handleClick = () => setModalIsOpen(false);
    const handleClickTransfer = () => setModalIsTransferOpen(false);
    const handleClickP2P = () => setModalIsP2POpen(false);

  return (
    <div className={classes.transpage}>
        <div className={classes.trans}>    
            <h2>Transaction History</h2>
            <div className={classes.leftview}>

              <label className={classes.View}>
                  <input type='text' placeholder='search'/>
                    <img src={search} alt="icon" />
              </label>
            
              <label className={classes.filterselect}>
              <select>
                  <option>filter by type</option>
                  <option>filter by name</option>
                  <option>filter by date</option>
              </select>
              </label>  

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
                            <tr onClick={()=> setModalIsTransferOpen(true)}>
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



        <Modal isOpen={modalIsOpen} onRequestClose={()=> {setModalIsOpen(false)}}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
          <TransactModals onClick={handleClick} />
        </Modal>

        <Modal isOpen={modalIsTransferOpen} onRequestClose={()=> {setModalIsTransferOpen(false)}}
         className={classes.ModalTransfer}
         overlayClassName={classes.OverlayTransfer}>
        <FundTransferModal onClick={handleClickTransfer}/>
        </Modal>

        <Modal isOpen={modalIsP2POpen} onRequestClose={()=> {setModalIsP2POpen(false)}}
         className={classes.ModalP2P}
         overlayClassName={classes.OverlayP2P}>
        <FundP2P onClick={handleClickP2P} />
        </Modal>
</div>

)
}

export default TransactionPage