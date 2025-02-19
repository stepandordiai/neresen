import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__custom-divider"></div>
            <div className="footer__bottom">
                <div className="copyright">&copy; 2025 Neresen</div>
                <div className="creator">
                    Designed and developed by{" "}
                    <a
                        className="creator__link"
                        href="https://heeeyooo-studio.netlify.app"
                        target="_blank"
                    >
                        heeeyooo.studio
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
