import React from "react";
interface props {
    classes?: string,
    title: string
    handler?:any,
}
export const Button = ({ classes, title, handler }: props) => {
    return (
        <button onClick={handler} className={`w-full rounded px-3 py-2 text-white text-base drop-shadow-lg duration-300 hover:ease-in ${classes}`}>{title}</button>
    )
}