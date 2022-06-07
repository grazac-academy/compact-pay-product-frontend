import classes from "./Profile.module.css";
import half from "assets/Dashboard/halfcircle.svg"
import big from "assets/Dashboard/bigcircle.svg"
import profile_edit from "assets/Dashboard/profile_edit.svg"
import nga from "assets/Dashboard/nga.svg"


const Profile = () => {
  return (
    <div>
    <div className={classes.profile}>

      <div className={classes.rect}>
        <img  className={classes.half}src={half} alt=''/>
        <img  className={classes.big}src={big} alt=''/>
      </div>

      <div className={classes.profileinfo}>
        <div  className={classes.circle}><img  className={classes.edit}src={profile_edit} alt=''/></div>
        <div className={classes.info}>
          <h2>James Joe. B</h2>
          <p>Phone Number: +234817853900</p>
          <p>Edit Profile Information</p>
        </div>
      </div>

      <div className={classes.details}>
        <div  className={classes.details_sub}>
        <div>
          <h5>Email:</h5>
          <p>JamesjoeB@gmail.com</p>
        </div>
        <div>
          <h5>Phone Number:</h5>
          <p>+234817853900</p>
        </div>
        <div>
          <h5>Account Type</h5>
          <p>Individual</p>
        </div>
        </div>
      </div>

      <div className={classes.address}>
        <div  className={classes.address_sub}>
        <div className={classes.address_road}>
          <h5>Address:</h5>
          <p>2972 Westheimer Rd, SantaAna, LLinois 85486</p>
        </div>
        <div className={classes.address_date}>
          <div>
            <h5>Date Joined:</h5>
            <p>16/05/22</p>
          </div>
          <div>
            <h5>Country</h5>
            <div className={classes.nga}><img src={nga} alt='nga'/> <p>Nigeria</p></div>
          </div>
        </div>
        </div>
      </div>

    </div>

    <div className={classes.profilebottom}>
        <div className={classes.profilepassword} >
          <p>Change Password</p>
        </div>
        <div className={classes.profilepassword} >
          <p>Change Password</p>
        </div>
    </div>    

    </div>
  )
}

export default Profile