import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today`s Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Wine & Bear</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={index + 1}
              price={wine.price}
              title={wine.title}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu-img" />
      </div>
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={index + 1}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div className="" style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;