import { useContext } from 'react'
import { Schema } from "./Schema"
import { useFormik } from "formik"
import Context from "@/Context/Context"

function AddTaskModal() {

    let { tasksList, setTaskLists, tasks, settasks } = useContext(Context)

    let initialValues = {
        id: '',
        title: '',
        status: 'incomplete',
        time: ''
    }

    let { values, errors, touched, handleBlur, handleChange, handleSubmit, isValid } = useFormik({
        initialValues,
        validationSchema: Schema,
        onSubmit: (values, clr) => {
            values.id = Math.floor(Math.random() * 10000)
            values.time = new Date().toLocaleString()
            setTaskLists([...tasksList, values])
            settasks(tasksList)
            clr.resetForm();
        }
    })

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Task</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body row">
                            <div className="col">
                                <label className="form-label" htmlFor="title">
                                    Task Title
                                </label>
                                <input className="form-control" value={values.title} name='title' type="text" id="title" onChange={handleChange} onBlur={handleBlur} />
                                {errors.title && touched.title ? <p style={{ color: 'red' }}>&nbsp;* {errors.title}</p> : null}
                            </div><br />
                            <div className="col">
                                <label htmlFor="st" className="form-label">Task Status</label>
                                <select className="form-select" value={values.status} defaultChecked='incomplete' name="status" id="" onChange={handleChange} onBlur={handleBlur}>
                                    <option name='status' value="complete">Completed</option>
                                    <option name='status' value="incomplete">Incomplete</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" disabled={!isValid} data-bs-dismiss="modal">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal