import classes from "../styles/Account.module.css";
import logo from "../images/logo.jpg";
function Account() {
  return (
    <>
      {/* <!-- account box  --> */}
      <div className={classes.account_box}>
        <div className={classes.top_account}>
          <div className={classes.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={classes.account_title}>
            <h3>Do-it</h3>
            <h3 className={classes.use_name}>Mostakim Billah</h3>
          </div>
        </div>
        {/* <!-- line  --> */}
        <div className={classes.dashline}></div>
      </div>
    </>
  );
}

export default Account;
