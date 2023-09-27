import React from 'react'
import { Link } from "react-router-dom"
// import { useTranslation } from "react-i18next";
import i18n from '../i18n';
import Dropdown from "react-bootstrap/Dropdown";
function Navbar() {

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">OLECONS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item" style={{}}>
                            <Dropdown >
                                <Dropdown.Toggle variant="success" id="language-dropdown">
                                    Language
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => changeLanguage("en")}>English</Dropdown.Item>
                                    <Dropdown.Item onClick={() => changeLanguage("hi")}>हिन्दी</Dropdown.Item>
                                    <Dropdown.Item onClick={() => changeLanguage("ch")}>Chinese</Dropdown.Item>
                                    <Dropdown.Item onClick={() => changeLanguage("sp")}>Spanish</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
