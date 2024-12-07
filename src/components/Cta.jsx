import React from "react";
import { Link } from 'react-router-dom';

const Cta = () => {
  return <section className="cta">
    <p className="cta-text">Have any opportunities in mind? <br className="sm:block hidden"/> Let's connect</p>
    <Link to="/contact" className="btn">Contact</Link>
  </section>;
};

export default Cta;
