import React from 'react'

export const BoardNavBar = () => {
    return (
        <nav className="board__navbar">
            <h3 className="board__navbar-name">
                    <span> Daniel Umana M</span>
            </h3>

            <div className="board__navbar-buttons">
                <button><i className="fas fa-user-edit"></i></button>

                <button><i className="fas fa-sign-out-alt"></i></button>
            </div>
        </nav>
    )
}
