import React from "react";
interface props {
    classes?: string,
    title: string
    handler?:any,
    type?: 'button'| 'submit' | 'reset'
}
export const Button = ({ classes, title='button', handler,type }: props) => {
    return (
        <button type={type} onClick={handler} className={`w-full rounded px-3 py-2 text-white text-base drop-shadow-lg duration-300 hover:ease-in ${classes}`}>{title}</button>
    )
}