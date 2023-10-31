import img2 from "../assets/images/img2.jpg";
import MenuCard from "../components/Cards/MenuCard";
import menuData from "../data/menuData";
import expartData from "../data/expartData";
import ExpartCard from "../components/Cards/ExpartCard";
import aboutUsData from "../data/aboutUsData";
import AboutUsCard from "../components/Cards/AboutUsCard";
import TopBar from "../components/NavBar/TopBar";
import Footer from "../components/Footer";
const Home = () => {
  
  return (
    <div>
      <TopBar/>
      <section className="banner" id="banner">
        <div className="content">
          <h2>Always Choose Good</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            dignissimos deleniti rem temporibus quo modi natus
          </p>
          <a href="#" className="btn">
            Our Menu
          </a>
        </div>
      </section>
      <section className="about" id="about">
        <div className="row">
          <div className="col50">
            <h2 className="titleText">
              <span>A</span>bout Us
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
              cupiditate quod quam nesciunt aliquam doloremque cum maxime vero.
              Maiores accusantium vero quae neque repudiandae? Vero quisquam
              dolore ipsam, itaque dolor hic numquam. Recusandae nam commodi
              omnis. Porro non architecto vitae consectetur repellendus
              provident perferendis delectus reprehenderit magnam. Vero, vitae
              aspernatur voluptatem corrupti neque debitis itaque ullam, sed rem
              reiciendis culpa aperiam quo libero. Impedit, corrupti saepe
              voluptatibus distinctio quibusdam et, quaerat maxime quam
              voluptatum voluptas, illo eius nisi autem labore! Totam laboriosam
              aliquid fugit necessitatibus unde nostrum! Unde maxime deleniti
              asperiores. Perferendis, exercitationem! Ea rerum laudantium,
              tenetur reiciendis quo nesciunt. <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              ducimus id, tempore eos voluptas nobis fugiat amet quis atque
              eligendi ipsa dolores velit debitis eaque quia, provident odit
              corrupti exercitationem, rerum soluta? Nihil perferendis
              consectetur eos dicta nesciunt cupiditate. Consectetur ex
              cupiditate, tenetur blanditiis sequi repudiandae architecto.
            </p>
          </div>
          <div className="col50">
            <div className="imgBx">
              <img src={img2} alt />
            </div>
          </div>
        </div>
      </section>
      <section className="menu" id="menu">
        <div className="title">
          <h2 className="titleText">
            Our <span>M</span>enu
          </h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        <div className="content">
          {menuData.map((data, i) => (
            <div key={i} className="menu-item">
              <MenuCard cardData={data} />
            </div>
          ))}
        </div>
        <div className="title">
          <a href="#menu" className="btn">
            View All
          </a>
        </div>
      </section>
      <section className="expert" id="expart">
        <div className="title">
          <h2 className="titleText">
            Our Kitchen <span>E</span>xpert
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="content">
          {expartData.map((data, i) => (
            <div key={i}>
              <ExpartCard expartData={data} />
            </div>
          ))}
        </div>
      </section>
      <section className="testimonials" id="testimonials">
        <div className="title white">
          <h2 className="titleText">
            They <span>S</span>aid About Us
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="content">
          {aboutUsData?.map((data, i) => (
            <div key={i}>
              <AboutUsCard aboutUsData={data}/>
            </div>
          ))}
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="title">
          <h2 className="titleText">
            <span>C</span>ontact Us
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="contactForm">
          <h3>Send Message</h3>
          <div className="inputBox">
            <input type="text" placeholder="name" />
          </div>
          <div className="inputBox">
            <input type="text" placeholder="email" />
          </div>
          <div className="inputBox">
            <input type="text" />
          </div>
          <div className="inputBox">
            <input type="submit" defaultValue="Send" />
          </div>
        </div>
      </section>
      <Footer/>
      {/* <div className="copyright">
        <p>
          Copyright 2022 by <span>Tanvir Mahtab</span>
        </p>
      </div> */}
    </div>
  );
};

export default Home;
