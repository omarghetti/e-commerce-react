import React from "react";
import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory";

const HomePage = () => {
    return (
        <>
            <Outlet />
            <Directory />
        </>
    )
}

export default HomePage