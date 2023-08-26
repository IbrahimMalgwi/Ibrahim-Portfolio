import React from 'react'
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>GRAPHC DESIGN</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo Designs</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Branding</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social Media Banners</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Complementary Cards</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Identity Cards</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Letter Heads / Envelops/ Folders</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Banners & Flyers </p>
            </li>
          </ul>
        </article>
        {/* ========== GRAPHIC DESIGN ========== */}
        <article className="service">
          <div className="service__head">
            <h3>OTHER SERVICES</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>System Administration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Smart Home </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Solar PV Installation | Maintainance | Repairs </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CCTV Installation | Maintainance </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>IOT</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social Media Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Multimedia </p>
            </li>
          </ul>
        </article>
        {/* ========== END OF OTHER SERVICES  ========== */}
        <article className="service">
          <div className="service__head">
            <h3>SOFTWARE ENGINEERING</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing Pages </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Portfolios</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Appliaction</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API's</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Plugins</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desktop Application</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile Application</p>
            </li>
          </ul>
        </article>
        {/* ========== END OF SOFTWARE ENGENEERING ========== */}

      </div>
    </section>
  )
}

export default Services