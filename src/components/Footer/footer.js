import "./footer.css";
import img from "../../images/Capture3.PNG";
export default function Header() {
  return (
    <div className="footer-container">
      <div className="titleImage">
        <div className="footer-title">contact.</div>
        <div>
          <img src={img} />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
        tristique quam felis. Id phasellus dui orci vulputate consequat nulla
        proin. Id sit scelerisque neque, proin bibendum diam.
        {<br />}
        {<br />}
        johndoe@mail.com {<br />}
        twitter.com/johndoe {<br />}
        twitter.com/johndoe
      </p>
    </div>
  );
}
