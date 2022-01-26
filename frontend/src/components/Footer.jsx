import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="p-2 text-lg">
      Designed with{" "}
      <span>
        <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by{" "}
        <a href="mailto:sajal.shres@gmail.com">sajal.shres@gmail.com</a>
      </span>
    </div>
  );
};

export default Footer;
