import React, { useContext } from 'react';
import Context from '@/Context/Context';

function Sorting() {

    let { tasksList, setTaskLists, tasks, settasks } = useContext(Context)

    let handelChange = ({ target }) => {
        if (target.value === 'all') {
            setTaskLists(tasks)
        } else {
            let res = tasks.filter(task => task.status === target.value)
            setTaskLists(res)
        }

    }
    return (
        <div>
            <select className='form-select' defaultValue='all' onChange={handelChange}>
                <option className='form-control' value="all">All</option>
                <option className='form-control' value="complete">completed</option>
                <option className='form-control' value="incomplete">incomplete</option>
            </select>
        </div>
    )
}

export default Sorting