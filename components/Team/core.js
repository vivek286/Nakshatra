import classes from "./core.module.css"
import Info from "./info";

let mentors = [
  {
    image: "",
    name: "FULL NAME",
    designation: "Designation"
  },
  {
    image: "",
    name: "FULL NAME",
    designation: "Designation"
  }
  ,
  {
    image: "",
    name: "FULL NAME",
    designation: "Designation"
  }
  ,
  {
    image: "",
    name: "FULL NAME",
    designation: "Designation"
  },
  {
    image: "",
    name: "FULL NAME",
    designation: "Designation"
  }
]

export default function core() {
  return (
    <section>
      <div className={classes.section_h}>Core</div>
      <div className={classes.grid_container}>
        {
          mentors.map((e, index) => {
            return (
              <Info name={e.name} designation={e.designation} image={e.image} key={index} />
            );
          })
        }
      </div>


    </section>
  )
}