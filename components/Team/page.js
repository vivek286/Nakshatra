import Info from "./info"
import classes from "./page.module.css"
export default function page() {

  const style = {
    display: 'flex',
    gap: '2rem'
  }

  return (
    <section>
      <div>
        <div className={classes.heading}>Meet The Team</div>
        <div style={{ ...style, marginTop: '10rem' }} className={classes.container}>
          <Info name="Kishan Sir" image="Kishan" designation="Faculty Advisor" />
          <Info name="Nitika Ma'am" image="Nitika" designation="Lead" />
        </div>
        <div style={{ ...style, marginTop: '-5rem' }} className={classes.container}>
          <Info name="Tanishqa Porwal" image="tanishqa" designation="Lead" />
          <Info name="Yashaswi Tirole" image="YashaswiTirole_" designation="Lead" />
        </div>

      </div>

    </section>


  )
}