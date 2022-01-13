import classes from "./core.module.css"
import Info from "./info";

let mentors = [
  {
    image: "/team/Atharva_Maheshwari.jpg",
    name: "Atharva Maheshwari",
    designation: "Operation Head"
  }, {
    image: "/team/khushang.jpg",
    name: "Khushang Dosi",
    designation: "Corporate & PR Head"
  }, {
    image: "",
    name: "Nandini Malviya",
    designation: "Content & Design Head"
  }, {
    image: "",
    name: "Ritik Tailor",
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