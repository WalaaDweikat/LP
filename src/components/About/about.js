import "./about.css";
export default function About(props) {
  return (
    <div className="about-container" id={props.id}>
      <div className="title-container">
        <span className="title">about.</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
          vulputate tristique quam felis. Id phasellus dui orci vulputate
          consequat nulla proin. Id sit scelerisque neque, proin bibendum diam.
        </p>
      </div>

      <ul>
        <li>
          2014-2018
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </p>
        </li>
        <li>
          2018-2020
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </p>
        </li>
        <li>
          2020-present
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            vulputate tristique quam felis. Id phasellus dui orci vulputate
            consequat nulla proin. Id sit scelerisque neque, proin bibendum
            diam.
          </p>
        </li>
      </ul>
    </div>
  );
}
