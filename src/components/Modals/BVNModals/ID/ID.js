import classes from "./ID.module.css"
import arrowleft from "assets/Dashboard/Arrow - Left.svg";
import dragfile from "assets/Dashboard/dragfile.svg";
import Button from "components/UI/Button/button";
import Modal from 'react-modal';
import { useState} from "react";
import Address from "components/Modals/BVNModals/Address/Address";

Modal.setAppElement('#root');

const ID = ({onClick}) => {


    const [modalIsAddressOpen, setModalIsAddressOpen] = useState(false);
    
    const handleClick = () => setModalIsAddressOpen(false);

    const Years = [...Array(new Date().getFullYear() - 1899).keys()].map((e)=>e+1900)
    const Months = ['January','February','March', 'April', 'May','June', 'July', 'August','September','October','November','December'];
    const Days = [...Array.from({length: 31}, (_, i) => i + 1)]


  return (
    <div>
        <div className={classes.Verification}>
        <img  onClick={onClick}  src={arrowleft} alt="arrowleft"/> 
        <h2>ID Verification</h2>
        <p>Please provide us with the following informations</p>
        </div>
    <div className={classes.IDwith}>
        <h4>Means of ID</h4>
            <select >
                <option >NIN</option>
                <option >Driver's Licence</option>
                <option >International Passport</option>
            </select>
            <label className={classes.Idnumber}>
                <h4>ID Number</h4>
                <input placeholder='Type your identification number here'/>
            </label>
            <label className={classes.Idnumber}>
                <h4>Country</h4>
                <input placeholder='Type your country here'/>
            </label>
            <h4>Issued Date</h4>
                <label className={classes.labelselect}>
                    <select >
                    <option disabled selected hidden>Days</option>
                    {Days.map((item) => (<option>{item}</option>))}
                    </select>
                    <select >
                    <option disabled selected hidden>Month</option>
                    {Months.map((item) => (<option>{item}</option>))}
                    </select>
                    <select >
                    <option disabled selected hidden>Year</option>
                    {Years.map((item) => (<option>{item}</option>))}
                    </select>
                </label>
            <h4>Expiration Date</h4>
                <label className={classes.labelselect}>
                    <select >
                    <option disabled selected hidden>Days</option>
                    {Days.map((item) => (<option>{item}</option>))}
                    </select>
                    <select >
                    <option disabled selected hidden>Month</option>
                    {Months.map((item) => (<option>{item}</option>))}
                    </select>
                    <select >
                    <option disabled selected hidden>Year</option>
                    {Years.map((item) => (<option>{item}</option>))}
                    </select>
                </label>
            <h4>Upload File</h4>
                <form>
                    <div>
                        <img src={dragfile} alt =""/>
                    </div> 
                    <p>Drag and drop your file here</p>
                    <p>OR</p>
                    <label className={classes.file}>
                    <input type="file"/>
                    {/* Browse File */}
                    </label>
                </form>
                <Button  onClick={()=> setModalIsAddressOpen(true)} >Proceed</Button>
        </div>

        <Modal isOpen={modalIsAddressOpen}
         className={classes.Modal}
         overlayClassName={classes.Overlay}>
           <Address onClick={handleClick}/>
        </Modal>
    </div>
  )
}

export default ID