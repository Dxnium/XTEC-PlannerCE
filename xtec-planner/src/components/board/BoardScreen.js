import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import { BoardNavBar } from './BoardNavBar'
import { TaskBoard } from './TaskBoard'
export const BoardScreen = () => {

    const [taskBoards] = useState([0,1])
    return (
        <div className="board__main">   

            <Sidebar/>

            <main className="board__main-task">
                <BoardNavBar/>
                
                {/* Tableros */}

                <div className='taskBoard__main'>
                    {taskBoards.map(board=>(
                        <TaskBoard key={`key_${board}`}/>
                    ))}
                </div>
            </main>
        </div>
    )
}
