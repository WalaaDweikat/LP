import "./index.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../images/image.PNG";
const useStyles = makeStyles((theme) => ({
  Button: {
    marginTop: "20px",
    background: "#F5EE84",
    borderRadius: "6px",
    width: "110px",
    color: "#474306",
    fontFamily: "Poppins,sans-serif",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "30px",
  },
}));

export default function Component1(props) {
  const classes = useStyles();
  return (
    <div className="container" id={props.id}>
      <div className="job">
        <span className="span">Hello, Iam John,</span>
        <p>Product Designer</p>
        <span className="span">based in Neatherland</span>
        <Button className={classes.Button} variant="contained">
          Resume
        </Button>
      </div>
      <div className="photo">
        <img src={image} width="300px" height="300px" />
      </div>
    </div>
  );
}
