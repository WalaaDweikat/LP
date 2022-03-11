import "./work.css";
import image1 from "../../images/Capture.PNG";
import image2 from "../../images/Capture2.PNG";

export default function Work(props) {
  return (
    <div className="work-container" id={props.id}>
      <div className="work-title-container">
        <span className="work-title">work.</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </p>
      </div>

      <div className="works">
        <div className="work-sample">
          <figure>
            <img src={image1} alt="img" width="300" height="300" />
            <figcaption>November 24, 2019</figcaption>
          </figure>
          <div className="description">
            <span>Some Case Study</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
              convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
            </p>
          </div>
        </div>
        <div className="work-sample">
          <figure>
            <img src={image2} alt="img" width="300" height="300" />
            <figcaption>November 24, 2019</figcaption>
          </figure>
          <div className="description">
            <span>Some Case Study</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
              aliquam sollicitudin rhoncus morbi. Tincidunt quam sem elit a
              convallis. Eget ipsum, velit vitae eu nunc, consequat, at.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
