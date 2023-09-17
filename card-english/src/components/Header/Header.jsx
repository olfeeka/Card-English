import logo from '../../images/header_logo.png';

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="logo" />
                <p className="header__title">Card English</p>
            </div>
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item">Home</li>
                    <li className="header__item">Study</li>
                    <li className="header__item">Dictionary</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

