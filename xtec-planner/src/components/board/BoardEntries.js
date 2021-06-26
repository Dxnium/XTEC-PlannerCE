import React, { useState } from 'react'
import { BoardEntry } from './BoardEntry'

export const BoardEntries = () => {

    const [boards] = useState([0,1,2])
    return (
        <div className="sidebar__entries">

            <i className="far fa-clipboard clipboard">{"   "}</i>
            <h2>Lista de tableros</h2>
            <i className="fas fa-plus-circle"></i>
            {
                boards.map((board)=>(
                    <BoardEntry
                        key={`key__${board}`}

                    />
                ))
            }
        </div>
    )
}
