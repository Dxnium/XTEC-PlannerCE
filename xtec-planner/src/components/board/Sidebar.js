import React from 'react'
import {BoardEntries} from './BoardEntries'

export const Sidebar = () => {
    return (
        <div className="sidebar__main">
            <div className="sidebar__title">
                <h1>
                    TaskPlannerCE
                </h1>
            </div>
            <div className='sidebar__search-box'>
                <input type='text' name='search' placeholder='Buscar estudiante'/>
            </div>

            <div className="sidebar__buttons">
                <button>Dashboard</button>
                <button>Solicitudes</button>
            </div>

            <div className="sidebar__entries">
                <BoardEntries/>
            </div>
        </div>
    )
}
