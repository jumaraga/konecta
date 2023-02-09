import React from "react";

export const CourseCard = ({ name, author, description, img_url }: { name: string, author?: string, description: string, img_url: string }) => {
    return (
        <div className="bg-orange-300 rounded-xl ">
            <div className="w-full">
                <img className="w-full max-h-72 object-fill rounded" crossOrigin="anonymous" src={`http://${img_url}`} alt="" />
            </div>
            <div className="p-2">
                <h3 className="text-xl">{name}</h3>
                <div>{description}</div>
            </div>
        </div>
    )
}