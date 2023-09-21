import logo from '../../images/header_logo.png';
import st from './header.module.scss';

export default function Header() {
    return (
    <header className={st.header}>
        <div className={st.logo}>
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
            <p className={st.title}>Card English</p>
        </div>
        <nav>
            <ul className={st.list}>
                <li className={st.item}><a href="#">Home</a></li>
                <li className={st.item}><a href="#">Study</a></li>
                <li className={st.item}><a href="#">Dictionary</a></li>
            </ul>
        </nav>
    </header>
    );
}
