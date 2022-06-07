import classes from "./BeneficiaryPage.module.css";
import Button from 'components/UI/Button/button';
import addfund from 'assets/Dashboard/addfund.svg';
import NoBeneficiary from 'assets/Dashboard/NoBeneficiary.svg';
import Edit from 'assets/Dashboard/Edit.svg';
import beneficiary_fig from 'assets/Dashboard/beneficiary_fig.svg';
import search from "assets/Dashboard/search.svg";
import Pagination from 'components/UI/Pagination/Pagination';
import { MdNavigateNext } from 'react-icons/md';
import { BeneficiaryTable } from "../../../constants/TransactionTable";
import Modal from 'react-modal';
import { useState} from "react";
import NewBenModal from "components/Modals/BenModals/NewBenModal/NewBenModal";
import AddAcc from "components/Modals/BenModals/AccountModal/AddAcc";
import Change from "components/Modals/BenModals/ChangeModals/Change";


Modal.setAppElement('#root');

const BeneficiaryPage = () => {


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
    const [modalChangeIsOpen, setModalChangeIsOpen] = useState(false);



    const handleClick = () => setModalIsOpen(false);
    const handleAddClick = () => setModalAddIsOpen(false);
    const handleChangeClick = () => setModalChangeIsOpen(false);

  return (
    <div>
        <div className={classes.Personal}>
                    <div className={classes.account}>
                                                    <div className={classes.providus}>
                                                        <p>Saved Personal Account </p>
                                                        <p>Providus bank</p>
                                                        <h5>1009005438</h5>
                                                        <p>Johnson Goodwill</p>
                                                        <Button onClick={()=> setModalChangeIsOpen(true)}  >
                                                                    <img src={Edit} alt=""/>
                                                                    <span>Change Account</span>
                                                        </Button>
                                                    </div>
                                    <div className={classes.saved}>
                                    <p>Saved Personal Account </p>
                                    <h3>Add Personal Account</h3>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    <Button onClick={()=> setModalAddIsOpen(true)}  >
                                                <img src={addfund} alt=""/>
                                                <span>Add New</span>
                                    </Button>
                                    </div>
                        <div className={classes.fig}>
                            <img src={beneficiary_fig} alt=""/>
                        </div>
                    </div>
                    <div  className={classes.New}>
                        <div className={classes.createBen}>
                        <h3>Create New Beneficiary</h3>
                        <p>Enter receiver's bank account details to continue Enter receiver's bank account <br></br>details to continue</p>
                        <Button onClick={()=> setModalIsOpen(true)} >
                                    <img src={addfund} alt=""/>
                                    <span>Add New</span>
                        </Button>
                        </div>
                    </div>
          </div>
    
            <div className={classes.list} >
                    <div className={classes.trans}>    
                        <h2>Beneficiary List</h2>
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
                                        <th>Account Name </th>
                                        <th>Account Number</th>
                                        <th>Bank Name</th>
                                        <th>Date Created</th>
                                        <th>Action</th>
                                    </tr>
                                </thead> 

                                
                                {BeneficiaryTable.map((item, index) => {
                                    return(
                                        <tbody key={index}>
                                            <tr>
                                            <td >{item.Name}</td>
                                            <td>{item.Number}</td>
                                            <td>{item.Bank}</td>
                                            <td>{item.Date}</td>
                                            <td><img src={item.image} alt="" /></td>
                                            </tr>
                                        </tbody> 
                                    )
                                })}
                            </table>

                            <div className={classes.NoBeneficiary} >
                                <div>
                                    <img src={NoBeneficiary} alt='' />
                                </div>
                                <h5>No Beneficiaries saved</h5>
                                <p>you currently do not have any save beneficiary</p>
                                <Button onClick={()=> setModalIsOpen(true)} >
                                    <img src={addfund} alt=""/>
                                    <span>Add New</span>
                                </Button>
                            </div>


                         <div className={classes.page} >
                            <Pagination ><MdNavigateNext className={classes.prev}/></Pagination>
                            <Pagination ><p className={classes.num}>1</p></Pagination>
                            <Pagination ><p className={classes.num}>2</p></Pagination>
                            <Pagination ><p className={classes.num}>-</p></Pagination>
                            <Pagination ><p className={classes.num}>10</p></Pagination>
                            <Pagination ><MdNavigateNext className={classes.next}/></Pagination>
                            
                        </div>
             </div>

        <Modal isOpen={modalIsOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
          <NewBenModal onClick={handleClick}/>
        </Modal>

        <Modal isOpen={modalAddIsOpen}
         className={classes.ModalAdd}
         overlayClassName={classes.OverlayAdd}>
          <AddAcc onClick={handleAddClick}/>
        </Modal>

        <Modal isOpen={modalChangeIsOpen}
         className={classes.ModalChange}
         overlayClassName={classes.OverlayChange}>
          <Change onClick={handleChangeClick}/>
        </Modal>


    </div>
  )
}

export default BeneficiaryPage