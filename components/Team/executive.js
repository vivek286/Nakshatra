import React from 'react';
import classes from "./executive.module.css"
import Info from "./info"
let mentors = [

    {
        image: "AnshulSoni",
        name: "Anshul Soni",
        designation: "Operations Team"
    }
    ,
    {
        image: "PurviMishra_",
        name: "Purvi Mishra",
        designation: "Operations Team"
    }
    ,
    {
        image: "AditiMandlik",
        name: "Aditi Mandlik",
        designation: "Operations Team"
    }
    ,
    {
        image: "AtharvVani",
        name: "Atharv Vani",
        designation: "Corporate & PR Team"
    }
    ,
    {
        image: "AditiModi",
        name: "Aditi Modi",
        designation: "Corporate & PR Team"
    }
    ,
    {
        image: "ShivendraPratapSinghPatel",
        name: "Shivendra Pratap Patel",
        designation: "Corporate & PR Team"
    }
    ,
    {
        image: "VanshitaMathur",
        name: "Vanshita Mathur",
        designation: "Corporate & PR Team"
    }
    ,
    {
        image: "SandaliMaheshwari",
        name: "Sandali Maheshwari",
        designation: "Content Team"
    }
    ,
    {
        image: "VedikaHirpathak",
        name: "Vedika Hirpathak",
        designation: "Content Team"
    }
    ,
    {
        image: "MuskanSogani",
        name: "Muskan Sogani",
        designation: "Content Team"
    }
    ,
    {
        image: "TanyaSingh",
        name: "Tanya Singh",
        designation: "Design Team"
    }
    ,
    {
        image: "PriyanshiAgrawal",
        name: "Priyanshi Agrawal",
        designation: "Design Team"
    }
    ,
    {
        image: "MoneshGoyal_",
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

