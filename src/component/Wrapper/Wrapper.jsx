import Aside from "../Aside/Asidebar";
import Slider from "../Slider/Slider";
import "./Wrapper.style.css";

function Wrapper() {
  return (
    <div className="wrapper">
      <Aside />
        <Slider />
    </div>
  );
}

export default Wrapper;
