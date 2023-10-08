import React from "react";

import "./Chef.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id="chef">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="chef" />
      <h1 className="headtext__cormorant">What We Belive In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            debitis tenetur voluptas ad, vitae iure, deleniti et, sed animi
            dolor necessitatibus est. Ad voluptatibus vitae ea, repudiandae
            alias excepturi placeat?
          </p>
        </div>
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
