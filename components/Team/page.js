import classes from "./page.module.css"
export default function page() {
    
  
  
    return (
      <section>
        <div>
         <div className={classes.heading}>Meet The Team</div>
         <div></div>
         <div className={classes.member}>
           <div className={classes.circle}></div>
           <br/>
           <div className={classes.in_text}>FULL NAME</div>
           <br/>
           <div className={classes.in_text}>Designation</div>
           <br/>
           <div className={classes.rec_box}>
           <div className={classes.rectangle}></div>
           </div>
           
         </div>
      </div>

      </section>
      
      
    )
  }