import classes from "./info.module.css"
import { Fade } from "react-reveal";

function Info(props) {
  return (
    <Fade bottom distance="10px" duration={500}>
      <div className={classes.member}>
        <div className={classes.card_img}>
          <img src={`/team/${props.image}.jpg`} alt={props.name} loading="lazy" />
        </div>
        <div className={classes.text}>
          <p className={classes.in_text}>{props.name}</p>
          <p className={classes.in_text}>{props.designation}</p>
        </div>
        {/* <div className={classes.links}>
          <a href="/a">
            <p>Connect on </p>
            <img src="/social/linkedin.png" alt="linkedIn" />
          </a>
        </div> */}
      </div>
    </Fade >

  )
}
export default Info;