import classes from "./info.module.css"

function Info(props) {
  return (
    <>
      <div className={classes.member}>
        <div className={classes.card_img}>
          <img src={`/team/${props.image}.jpg`} alt={props.name} loading="lazy" />
        </div>
        <div className={classes.text}>
          <p className={classes.in_text}>{props.name}</p>
          <p className={classes.in_text}>{props.designation}</p>
        </div>
      </div>
    </>

  )
}
export default Info;