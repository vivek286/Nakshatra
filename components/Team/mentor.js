import React from 'react';
import classes from "./mentor.module.css"
import Info from "./info"
let mentors = [
    {
        image: "",
        name: "Md Bilal Mansuri",
        designation: "Web Dev Mentor"
    },
    {
        image: "",
        name: "Harshit Jain",
        designation: "AI ML Mentor"
    }
    ,
    {
        image: "",
        name: "Prafulla parsai",
        designation: "Cloud Mentor"
    }
    ,
    {
        image: "",
        name: "Kushagra Rathore",
        designation: "CP Mentor"
    }
    ,
    {
        image: "",
        name: "Prachi Pathak ",
        designation: "CP Mentor"
    }
    ,
    {
        image: "",
        name: "Hrithik Nigam",
        designation: "AI ML Mentor"
    }
    ,
    {
        image: "",
        name: "Shashwat Mohite",
        designation: "AI ML Mentor"
    }
    ,
    {
        image: "",
        name: "Yash Sehgal",
        designation: "Open Source Mentor"
    }
    ,
    {
        image: "",
        name: "Mustafa Dhar",
        designation: "Open Source Mentor"
    }
    ,
    {
        image: "",
        name: "Mohak Jain",
        designation: "Cloud Mentor"
    }
    ,
    {
        image: "",
        name: "Mohammad Anas Khan ",
        designation: "Android Mentor"
    },
    {
        image: "",
        name: "Ayush Soni ",
        designation: "Web Dev Mentor"
    }
]
export default function mentor() {
    return (
        <section>
            <div className={classes.section_h}>Mentors</div>
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

