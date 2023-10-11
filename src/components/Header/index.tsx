import { NavLink } from "react-router-dom";

interface HeaderProps{
    titulo: string;
}
export function Header({titulo}: HeaderProps){
    return (
         <div className="header">
             <header>{titulo}</header>

        <nav>
            <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/tasks'>Tasks</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>

         </div>

    )
}