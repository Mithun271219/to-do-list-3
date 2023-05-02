import Image from "next/image"
import Table from "./Body/Table"
import Button from "./Head/Button"
import Sorting from "./Head/Sorting"
import Title from "./Head/Title"
import { useContext } from "react";
import Context from "@/Context/Context"
import AddTaskModal from "./Modal/Modal"

function List() {

    let { tasksList } = useContext(Context)
    return (
        <div className="container w-75">
            <div className='mycard '>
                <div className="card shadow-lg border-start">
                    <div className="card-header">
                        <div className="d-flex justify-content-around">
                            <div><Button /> <AddTaskModal /> </div>
                            <div className="card-title"><Title /></div>
                            <div><Sorting /></div>
                        </div>
                    </div>
                    <div className="card-body d-flex flex-column align-items-center">
                        {tasksList.length > 0 ? <Table /> : <h5>No Tasks Avaliable</h5>}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default List