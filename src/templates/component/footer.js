import React from "react";
const Footer =()=>{
    return(
      <footer className = "bg-dark py-5">
      <div className = "container">
          <div className = "row text-white g-4">
              <div className = "col-md-6 col-lg-3">
                  <a className = "text-uppercase text-decoration-none brand text-white" href = "index.html">kshop</a>
                  <p className = "text-white text-muted mt-3">Kshop is the ecommerce website developed and designed by the students of the kankali secondary school under the supervision of Er.Ankit Dawadi</p>
              </div>

              <div className = "col-md-6 col-lg-3">
                  <h5 className = "fw-light">Links</h5>
                  <ul className = "list-unstyled">
                      <li className = "my-3">
                          <a href = "#" className = "text-white text-decoration-none text-muted">
                              <i className = "fas fa-chevron-right me-1"></i> Home
                          </a>
                      </li>
                      <li className = "my-3">
                          <a href = "#" className = "text-white text-decoration-none text-muted">
                              <i className = "fas fa-chevron-right me-1"></i> Collection
                          </a>
                      </li>
                      <li className = "my-3">
                          <a href = "#" className = "text-white text-decoration-none text-muted">
                              <i className = "fas fa-chevron-right me-1"></i> Contact Us
                          </a>
                      </li>
                      <li className = "my-3">
                          <a href = "#" className = "text-white text-decoration-none text-muted">
                              <i className = "fas fa-chevron-right me-1"></i> About Us
                          </a>
                      </li>
                  </ul>
              </div>

              <div className = "col-md-6 col-lg-3">
                  <h5 className = "fw-light mb-3">Contact Us</h5>
                  <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                      <span className = "me-3">
                          <i className = "fas fa-map-marked-alt"></i>
                      </span>
                      <span className = "fw-light">
                          MakaluChowkw, Kalanki,  Kathmandu , Nepal
                      </span>
                  </div>
                  <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                      <span className = "me-3">
                          <i className = "fas fa-envelope"></i>
                      </span>
                      <span className = "fw-light">
                          kshop.support@gmail.com
                      </span>
                  </div>
                  <div className = "d-flex justify-content-start align-items-start my-2 text-muted">
                      <span className = "me-3">
                          <i className = "fas fa-phone-alt"></i>
                      </span>
                      <span className = "fw-light">
                          +9800-000-000-00
                      </span>
                  </div>
              </div>

              <div className = "col-md-6 col-lg-3">
                  <h5 className = "fw-light mb-3">Follow Us</h5>
                  <div>
                      <ul className = "list-unstyled d-flex">
                          <li>
                              <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                  <i className = "fab fa-facebook-f"></i>
                              </a>
                          </li>
                          <li>
                              <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                  <i className = "fab fa-twitter"></i>
                              </a>
                          </li>
                          <li>
                              <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                  <i className = "fab fa-instagram"></i>
                              </a>
                          </li>
                          <li>
                              <a href = "#" className = "text-white text-decoration-none text-muted fs-4 me-4">
                                  <i className = "fab fa-whatsapp"></i>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </footer>
    )
};
export default Footer;