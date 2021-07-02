import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Home 
            </NavLink>
            <NavLink exact to="/drapeauetmeteo" activeClassName="nav-active">
                Drapeaux + Météo 
            </NavLink>
            <NavLink exact to="/meteo" activeClassName="nav-active">
                Météo
            </NavLink>
            <NavLink exact to="/drapeaux" activeClassName="nav-active">
                Drapeaux
            </NavLink>
        </div>
    );
};

export default Navigation;