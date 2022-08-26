import "../css/App.css";
import Router from "./routes";
import { useSelector, useDispatch } from "react-redux";
import { SpinnerLoader } from "./layouts/mainContainer";
import {
  childRootIsShowingSetState,
  selectImgsRendered,
  selectSpinnerIsShowing
} from "../features/imgStateSlice";

//app wrap
const BlogApp = () => {
  //state from Redux
  const imgsRendered = useSelector(selectImgsRendered); //get imgsRendered state from redux
  const spinnerIsShowing = useSelector(selectSpinnerIsShowing); //get spinnerIsShowing state from redux
  const dispatch = useDispatch();

  return (
    <div
      id="childRoot"
      onAnimationEnd={() => {
        dispatch(childRootIsShowingSetState());
      }}
      style={{ opacity: 0 }}
      className={imgsRendered ? "animate__animated animate__fadeIn fast" : null}
    >
      <Router />
      {
        //if imgsIsRendered false then showSpinnerLoader,
        //shows spinner while imgs are rendering
        spinnerIsShowing && <SpinnerLoader />
      }
    </div>
  );
};

export default BlogApp;
