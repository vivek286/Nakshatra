import React from 'react';
import classes from "./executive.module.css"
import Info from "./info"
let mentors = [

    {
        image: "",
        name: "Anshul Soni",
        designation: "Operations Team"
    }
    ,
    {
        image: "",
        name: "Purvi Mishra",
        designation: "Operations Team"
    }
    ,
    {
        image: "",
        name: "Aditi Mandlik",
        designation: "Operations Team"
    }
    ,
    {
        image: "",
        name: "Atharv Vani",
        designation: "Corporate & PR Team"
    }
    ,
    {
        image: "",
        name: "Aditi Modi",
        designation: "Corporate & PR Team"
    }
    ,
    {
        image: "",
        name: "Shivendra Pratap Patel",
        designation: "Corporate & PR Team"
    }
    ,
    {
        image: "",
        name: "Vanshita Mathur",
        designation: "Corporate & PR Team"
    }
    ,
    {
        image: "",
        name: "Sandali Maheshwari",
        designation: "Content Team"
    }
    ,
    {
        image: "",
        name: "Vedika Hirpathak",
        designation: "Content Team"
    }
    ,
    {
        image: "",
        name: "Muskan Sogani",
        designation: "Content Team"
    }
    ,
    {
        image: "",
        name: "Tanya Singh",
        designation: "Design Team"
    }
    ,
    {
        image: "",
        name: "Priyanshi Agrawal",
        designation: "Design Team"
    }
    ,
    {
        image: "",
        name: "Monesh Goyal",
        designation: "Technical Team"
    }
]
export default function mentor() {
    return (
        <section>
            <div className={classes.section_h}>Executive Members</div>
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

