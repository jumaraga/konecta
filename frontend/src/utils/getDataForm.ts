import { HtmlHTMLAttributes, useEffect, useRef } from "react"

export const getFormFields = (ref:HTMLFormElement,...fields: string[]):{} => {
    const formData = new FormData(ref);
    const data = {};
    fields.forEach((item) => {
        Object.assign(data,{[item]:formData.get(item)})
    })
    return  data
}