import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/retention/PushWelcome_LPHero.png"
          alt=""
        />
        <div className="home_row_row">
          <div className="home_row">
            <Product
              id="1234"
              title="V-neck Tshirt"
              price={29.99}
              image="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/b1/6e/b16e4c7d672dc9ae8503cb0a88713a0aeca57ab1.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/fullscreen]"
              rating={5}
            />
            <Product
              id="1234"
              title="W-neck Tshirt"
              price={39.99}
              image="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/b1/6e/b16e4c7d672dc9ae8503cb0a88713a0aeca57ab1.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/fullscreen]"
              rating={4}
            />
            <Product
              id="1234"
              title="X-neck Tshirt"
              price={9.99}
              image="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/b1/6e/b16e4c7d672dc9ae8503cb0a88713a0aeca57ab1.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/fullscreen]"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="1234"
              title="Y-neck Tshirt"
              price={19.99}
              image="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/b1/6e/b16e4c7d672dc9ae8503cb0a88713a0aeca57ab1.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/fullscreen]"
              rating={3}
            />
            <Product
              id="1234"
              title="Z-neck Tshirt"
              price={129.99}
              image="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/b1/6e/b16e4c7d672dc9ae8503cb0a88713a0aeca57ab1.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/fullscreen]"
              rating={3}
            />
            <Product
              id="1234"
              title="V-neck Tshirt"
              price={29.99}
              image="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/b1/6e/b16e4c7d672dc9ae8503cb0a88713a0aeca57ab1.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/fullscreen]"
              rating={5}
            />
            <Product
              id="1234"
              title="V-neck Tshirt"
              price={29.99}
              image="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/b1/6e/b16e4c7d672dc9ae8503cb0a88713a0aeca57ab1.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/fullscreen]"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id="1234"
              title="V-neck Tshirt"
              price={29.99}
              image="https://lp2.hm.com/hmgoepprod?set=quality[79],source[/b1/6e/b16e4c7d672dc9ae8503cb0a88713a0aeca57ab1.jpg],origin[dam],category[men_tshirtstanks_bestbasics],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/fullscreen]"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
