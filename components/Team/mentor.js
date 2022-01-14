import React from 'react';
import classes from "./mentor.module.css"
import Info from "./info"
let mentors = [
    {
        image: "BilalMansuri",
        name: "Md Bilal Mansuri",
        designation: "Web Dev Mentor"
    },
    {
        image: "HarshitJain",
        name: "Harshit Jain",
        designation: "AI ML Mentor"
    }
    ,
    {
        image: "PrafullaParsai",
        name: "Prafulla parsai",
        designation: "Cloud Mentor"
    }
    ,
    {
        image: "KushagraRathore",
        name: "Kushagra Rathore",
        designation: "CP Mentor"
    }
    ,
    {
        image: "PrachiPathak",
        name: "Prachi Pathak ",
        designation: "CP Mentor"
    }
    ,
    {
        image: "HrithikNigam",
        name: "Hrithik Nigam",
        designation: "AI ML Mentor"
    }
    ,
    {
        image: "ShashwatMohite",
        name: "Shashwat Mohite",
        designation: "AI ML Mentor"
    }
    ,
    {
        image: "YashSehgal",
        name: "Yash Sehgal",
        designation: "Open Source Mentor"
    }
    ,
    {
        image: "MustafaDhar",
        name: "Mustafa Dhar",
        designation: "Open Source Mentor"
    }
    ,
    {
        image: "MohakJain",
        name: "Mohak Jain",
        designation: "Cloud Mentor"
    }
    ,
    {
        image: "MohammadAnasKhan",
        name: "Mohammad Anas Khan ",
        designation: "Android Mentor"
    },
    {
        image: "AyushSoni",
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

