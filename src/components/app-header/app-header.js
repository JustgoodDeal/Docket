import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, already_done}) => {
    return (
        <div className="app-header d-flex">
            <h1>Docket</h1>
            <h2>{toDo} more to do, {already_done} done</h2>
        </div>
    );
};

export default AppHeader
