import { useState } from "react";

import Context from "./Context";

function ContextState(props) {

    let [tasksList, setTaskLists] = useState([
        // { id: 1, title: 'reading', time: 'times', status: 'complete' },
        // { id: 2, title: 'sports', time: 'times', status: 'complete' },
        // { id: 3, title: 'playing', time: 'times', status: 'incomplete' },
    ])

    const [tasks, settasks] = useState(tasksList)

    return (
        <Context.Provider value={{ tasksList, setTaskLists, tasks, settasks }} >
            {props.children}
        </Context.Provider>
    )
}

export default ContextState;