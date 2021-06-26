import React, { useState } from 'react'

import { TaskCard } from './TaskCard'

export const TaskBoard = () => {

    const [tasks] = useState([0,1,2,3]);

    return (
        <div className="taskBoard__main-board">
            <div className="taskBoard__title-wrapper">
                <h3 className="taskboar__board-title">title</h3>
                <i className="fas fa-plus-circle"></i>
            </div>
            
            
            {/* CARDS  */}
            <div className="taskBoard__task-card-wrapper">

                {tasks.map(task=>(
                    <TaskCard key={`key_${task}`}/>
                ))}

            </div>
        </div>
    )
}
