import React from "react";
import { Facebook, Instagram, Youtube, Twitch } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Navigation.css";

function Footer() {
  return (
    <footer className="page-footer font-small blue pt-5">
      <div className="container-fluid text-center text-md-left footer-content">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">The Children Cloud</h5>
            <p>Your Child Our Responsibility..</p>
            <span>
              <Facebook size={30} style={{ margin: "0.5rem" }} />
              <Instagram size={30} style={{ margin: "0.5rem" }} />
              <Youtube size={30} style={{ margin: "0.5rem" }} />
              <Twitch size={30} style={{ margin: "0.5rem" }} />
            </span>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3" style={{ textAlign: "left" }}>
            <h5 className="text-uppercase">Terms & Policies</h5>
            <ul className="list-unstyled">
              <li>Policies</li>
              <li>Terms of Use</li>
              <li>Code of Conduct</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3" style={{ textAlign: "left" }}>
            <h5 className="text-uppercase">Support</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Help</li>
              <li>Advisories</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2022 Copyright: children cloud team
      </div>
    </footer>
  );
}
export default Footer;
