
import classes from "./info.module.css"
function Info(props) {
  console.log(props.image)
  return (
    <div>
      <div className={classes.member}>
        <div className={classes.card_img}>
          <img src={props.image} alt={props.name} loading="lazy" />
        </div>
        <div className={classes.text}>
          <p className={classes.in_text}>{props.name}</p>
          <p className={classes.in_text}>{props.designation}</p>
        </div>
        <div className={classes.links}>
          <a href="/a">
            <p>Connect on </p>
            <img src="/social/linkedin.png" alt="linkedIn" />
          </a>
        </div>
      </div>
    </div >

  )
}
export default Info;