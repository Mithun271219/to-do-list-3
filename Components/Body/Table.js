
import Context from '@/Context/Context';
import { useContext } from 'react';
import { MdDelete } from 'react-icons/md'

export default function Table() {
    let { tasksList, setTaskLists, tasks, settasks } = useContext(Context)

    function handelStatus(index) {
        let changeTaskStatus = tasksList[index]
        changeTaskStatus.status === 'complete' ? changeTaskStatus.status = 'incomplete' : changeTaskStatus.status = 'complete';
        setTaskLists([...tasksList])
        settasks(tasksList)
    }

    function handelDelete(index) {
        tasksList.splice(index, 1);
        setTaskLists([...tasksList])
        settasks(tasksList)
    }

    return (
        <>
            <table className='table'>
                <thead className='table-dark'>
                    <tr>
                        <th>Edit</th>
                        <th>task</th>
                        <th>Status</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasksList.map((task, index) => {
                            return (
                                <tr key={task.id}>
                                    <td><input type="checkbox" checked={task.status === 'complete' ? true : false} onChange={() => handelStatus(index)} index={index} /></td>
                                    <td>
                                        {task.status === 'complete' ? <h6><s>{task.title}</s></h6> : <h6>{task.title}</h6>}
                                        <div style={{ fontSize: 'small' }}>{task.time}</div>
                                    </td>
                                    <td>{task.status}</td>
                                    <td><button type='button' className='btn' onClick={() => handelDelete(index)}><MdDelete /> </button></td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}