import React, { FunctionComponent } from "react";
import { Button } from "./Button";
import { SignInInput } from "./FormInput";

export const CourseForm: FunctionComponent = () => {
    return (
        <form className=" mx-48 border rounded-xl shadow-lg w-[60%] min-w-[20rem] px-10 py-8">
            <h1 className=" text-lg self-center">Create a new course</h1>
            <SignInInput name="courseName" label="Name" type="placeholder" cssClasses="" />
            <div>Course image</div>
            <input type="file" name="img" />
            <div>
                <div>Description</div>
                <textarea className="border border-gray-500 px-1 w-full rounded" name="description" id="" cols={30} rows={10}></textarea>
            </div>
            <div className="mt-5 flex justify-center">
                <Button title="CREATE" classes=" bg-green-500 w-5/12"></Button>
            </div>
        </form>
    )
}