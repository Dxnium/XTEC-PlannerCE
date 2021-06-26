import moment from 'moment';
import React from 'react'


const taskDate = moment();

export const TaskCard = () => {
    return (
        <div className="taskBoard__task-card">
            <div className="taskBoard__card-title"> 
                <h4>Title</h4>
            </div>

            <div className="taskBoard__card-body">
                <div className="taskBoard__card-date">
                    <span>{taskDate.format('ddd')}</span>
                    <h4>{taskDate.format('Do')}</h4>
                </div>                
            </div>
        </div>
    )
}
