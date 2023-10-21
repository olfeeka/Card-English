import { NavLink } from 'react-router-dom';
import logo from '../../images/header_logo.png';
import st from './header.module.scss';

export default function Header() {
    return (
    <header className={st.header}>
        <div className={st.logo}>
        <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
            <p className={st.title}>Card English</p>
        </div>
        <nav>
          <NavLink to='/' className={st.item}>Home</NavLink>
          <NavLink to='/study' className={st.item}>Study</NavLink>
          <NavLink to='/dictionary' className={st.item}>Dictionary</NavLink>
        </nav>
    </header>
    );
}