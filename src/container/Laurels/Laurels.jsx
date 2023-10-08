import React from "react";

import "./Laurels.css";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="award-img" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#BCCA7" }}>
          {title}
        </p>
        <p className="p__cormorant">{subtitle}</p>
      </div>
    </div>
  );
};

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard key={award.title} award={award} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
