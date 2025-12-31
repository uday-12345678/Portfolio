import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <p>© 2025 Uday • Built with React</p>

            <div className="footer-icons">
                <a href="https://github.com/uday-12345678" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/gemini-uday-a93b5a275/" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                </a>

                <a href="https://www.instagram.com/udaynani19?igsh=MXdhNDIzNWZ5Y3k0Mg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>

                <a href="mailto:gemeniuday@gmail.com">
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
}

