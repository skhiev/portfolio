import "./style.css";

import vk from "./../../img/icons/vk.svg";
import twitter from "./../../img/icons/twitter.svg";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <ul className="social">
            <li className="social_item">
              <a href="https://vk.com/skhiev">
                <img src={vk} alt="vk" />
              </a>
            </li>
            <li className="social_item">
              <a href="#!">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li className="social_item">
              <a href="#!">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li className="social_item">
              <a href="https://github.com/skhiev">
                <img src={gitHub} alt="gitHub" />
              </a>
            </li>
            <li className="social_item">
              <a href="#!">
                <img src={linkedIn} alt="linkedIn" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© Skhiev | 2023 | khiev@mail.ru</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
