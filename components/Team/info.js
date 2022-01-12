import classes from "./info.module.css"
function Info (props){
    return (
      <div>
            <div className={classes.member}>
                    <div className={classes.circle}>{props.image}</div>
                    <br/>
                    <div className={classes.in_text}>{props.name}</div>
                    <br/>
                    <div className={classes.in_text}>{props.designation}</div>
                    <br/>
                    <div className={classes.rec_box}>
                    <div className={classes.rectangle}></div>
                    </div>
                    </div>
      </div>
   
    )
  }
  export default Info;