import logo from '../../images/footer_logo.png';

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="logo" />
            <span className="footer__text">&copy; All rights reserved</span>
        </footer>
    );
}

export default Footer;


