import { Outlet, Link } from "react-router-dom";
import './Layout.css'
export default function Layout(){
    return(
        <div className="layout">
            <Outlet />
        </div>
    )
}