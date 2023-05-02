import * as yup from "yup";

export const Schema = yup.object(
    { title: yup.string().min(3).required('task title is required') }
)