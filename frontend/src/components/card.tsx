import React from "react";

export const CourseCard=({name,author,description,img_url}:{name:string,author?:string,description:string,img_url:string})=>{
    return (
        <div className="bg-orange-300 rounded-xl ">
            <img src={img_url} alt="" />
            <h3>{name}</h3>
            <div>{description}</div>
        </div>
    )
}