import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";

import { checkImgsRender, wordSplit, useCurrentWidth } from "../fucnForApp.js";
import {
  imgsRenderedSetState,
  spinnerIsShowingSetState,
  childRootIsShowingSetState,
  selectImgsRendered,
  selectChildRootIsShowing
} from "../../features/imgStateSlice";

//first blogpost about website chat via telegramm (cpmponent)
const RandomQuoteMachine = () => {
  const [cardImgSrc] = useState(require("../../imgs/today_was_a_good_day.jpg")); //setImg src

  return (
    <Link to="/random_quote_machine" className="text-dark text-decoration-none">
      <Card className="cardContainer h-100">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            className="cardImg"
            id="simpleImg1"
            src={cardImgSrc}
          />
        </div>
        <Card.Body>
          <Card.Title>Some quotes can save lives.</Card.Title>
          <Card.Text>
            FreeCodeCamp Learning Project "Build a Random Quote Machine" on
            React.
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

//first blogpost about website chat via telegramm (cpmponent)
const WCPost = () => {
  const [cardImgSrc] = useState(require("../../imgs/simple.jpg")); //setImg src

  return (
    <Link to="/blogPostAboutWebchat" className="text-dark text-decoration-none">
      <Card className="cardContainer">
        <div className="overflow-hidden">
          <Card.Img
            variant="top"
            className="cardImg"
            id="simpleImg1"
            src={cardImgSrc}
          />
        </div>
        <Card.Body>
          <Card.Title>
            Website chat with messages via telegram, easy peasy.
          </Card.Title>
          <Card.Text>My minds before I'd started dive into.</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

//create merry crhrystmass post component
const MerryChristmasPost = () => {
  const [cardImgSrc] = useState(require("../../imgs/2554.jpg"));

  return (
    <Card className="cardContainer h-100">
      <Card.Img
        variant="top"
        src={cardImgSrc}
        className="cardImg"
        id="christmasImg"
      />
      <Card.Body>
        <Card.Title>Merry Christmas</Card.Title>
        <Card.Text>and happy new</Card.Text>
      </Card.Body>
    </Card>
  );
};

//create header component
const HeaderComponent = () => {
  const [headerSrc] = useState(require("../../imgs/17545.png"));
  return <Image src={headerSrc} className="p-0 headerImg" id="headersImg" />;
};

//create recent posts component
export const RecentPosts = () => {
  return (
    <Row className="justify-content-center">
      <Col className="mt-1" xs={12} sm={10} lg={8} xxl={6}>
        <RandomQuoteMachine />
      </Col>
      <Col className="mt-1" xs={12} sm={6} lg={4} xxl={4}>
        <WCPost />
      </Col>
      <Col className="mt-1" xs={12} sm={6} lg={4} xxl={4}>
        <MerryChristmasPost />
      </Col>
      <Col className="mt-1" xs={12} sm={6} lg={4} xxl={4}>
        <MerryChristmasPost />
      </Col>
    </Row>
  );
};

//create recent posts component
export const AllPosts = () => {
  return (
    <Row className="justify-content-center">
      <Col className="mt-1" xs={12} sm={10} lg={8} xxl={6}>
        <RandomQuoteMachine />
      </Col>
      <Col className="mt-1" xs={12} sm={6} lg={4} xxl={4}>
        <WCPost />
      </Col>
      <Col className="mt-1" xs={12} sm={6} lg={4} xxl={4}>
        <MerryChristmasPost />
      </Col>
      <Col className="mt-1" xs={12} sm={6} lg={4} xxl={4}>
        <MerryChristmasPost />
      </Col>
    </Row>
  );
};
const ShareBar = () => {
  const twitLink =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freeCodeCamp&text=";
  const tumblrLink =
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=";
  const tumblrShareSourceLink = "&canonicalUrl=" + window.location.href;

  const [twitterShareLink, setTwitterShareLink] = useState(
    twitLink +
      encodeURIComponent(
        wordSplit(useLocation().pathname) +
          " by @Bliz174" +
          window.location.href +
          " #freeCodeCamp"
      )
  );
  // const [tumblrShareLink, setTumblrShareLink] = useState(
  //   tumblrLink +
  //     encodeURIComponent(author) +
  //     "&content=" +
  //     encodeURIComponent(quotation) +
  //     tumblrShareSourceLink
  // );
  return (
    <div>
      <Button
        className="mr-2"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://neobliz1.github.io/", "_blank");
        }}
      >
        <i className="fa-regular fa-user"></i>
      </Button>
      <Button
        className="mr-2"
        onClick={(e) => {
          e.preventDefault();
          window.open(twitterShareLink, "_blank");
        }}
      >
        <i className="fa-brands fa-twitter"></i>
      </Button>
    </div>
  );
};
//main container component
export const MainContainer = () => {
  //imgs rendered handler
  let location = useLocation().pathname;
  const imgsRendered = useSelector(selectImgsRendered);
  const dispatch = useDispatch();
  //img check handler
  useEffect(() => {
    console.log("img checked");
    //disable scrolling while content is loading
    document.body.style.overflow = "hidden";
    //get img collection from current page
    const imgArr = document.getElementsByTagName("img");
    //if imgRender have already checked, and location changed
    //then toggle img and loader states
    if (imgsRendered) {
      dispatch(imgsRenderedSetState());
      dispatch(spinnerIsShowingSetState());
      dispatch(childRootIsShowingSetState());
    }
    //execute promise for each img on the page, check if imgs rendered
    checkImgsRender(imgArr).then((value) => {
      value && dispatch(imgsRenderedSetState());
    });
  }, [location]);

  //window width handler
  let getWindowWidth = useCurrentWidth(); //set window width getter
  const [fontSizes, setFontSizes] = useState({
    p: "fs-5", //set <p> tag font size
    h2: "h2", //set <h2> tag font size
    h3: "h3", //set <h3> tag font size
    h4: "h4", //set <h4> tag font size
    h6: "h6", //set <h6> tag font size
    linkToAuthor: "fs-7" //set font size for source link
  });

  //responsive fonts handler
  useEffect(() => {
    if (getWindowWidth > 768) {
      setFontSizes({
        p: "fs-5", //set <p> tag font size
        h2: "h2", //set <h2> tag font size
        h3: "h3", //set <h3> tag font size
        h4: "h4", //set <h4> tag font size
        h6: "h6", //set <h6> tag font size
        linkToAuthor: "fs-7" //set font size for source link
      });
    } else {
      setFontSizes({
        p: "fs-6", //set <p> tag font size
        h2: "h3", //set <h2> tag font size
        h3: "h4", //set <h3> tag font size
        h4: "h5", //set <h4> tag font size
        h6: "h7", //set <h6> tag font size
        linkToAuthor: "fs-8" //set font size for source link
      });
    }
    //console.log(getWindowWidth);
  }, [getWindowWidth]);

  return (
    <div>
      <Container fluid>
        <Row
          className="justify-content-center header"
          style={{ minHeight: "100px" }}
        >
          <HeaderComponent />
          <div
            className="position-absolute header headerOverlay p-0 d-flex align-items-center"
            style={{ minHeight: "100px" }}
          >
            <h2 className={"ms-4 mt-1 star-robot-font mw-100 " + fontSizes.h2}>
              Reminder about code discoveries
            </h2>
          </div>
        </Row>
        <Row className="justify-content-between mx-1 p-0">
          <Col>
            <h3 className={"mb-0 " + fontSizes.h3}>{wordSplit(location)}</h3>
          </Col>
          <Col className="d-flex align-items-end justify-content-end">
            {
              //conditional rendering
              location !== "/" && location !== "/personal_blog_on_react" && (
                <Link to="personal_blog_on_react">
                  <h6 className={"me-4 link-primary " + fontSizes.h6}>
                    {"<- Recent posts"}
                  </h6>
                </Link>
              )
            }
            <Link to="allPosts">
              <h6 className={"link-primary " + fontSizes.h6}>
                View all posts -{">"}
              </h6>
            </Link>
          </Col>
          <hr />
          <ShareBar />
        </Row>
        <Container
          fluid
          className="justify-content-center row m-0 p-0"
          id="postContainer"
        >
          <Outlet context={fontSizes} />
          {/*pass context props to outlet*/}
        </Container>
      </Container>
    </div>
  );
};

//create spinner loader component
export const SpinnerLoader = () => {
  const dispatch = useDispatch();
  const spinnerLoaderStyle = {
    width: "6vh",
    height: "6vh"
  };
  const childRootIsShowing = useSelector(selectChildRootIsShowing);
  const spinnerClass =
    "d-flex align-items-center justify-content-center vw-100 vh-100 position-absolute top-0 start-0 bg-light";
  const toggleSpinnerClass = () => {
    if (childRootIsShowing) {
      document.body.style.overflow = "auto";
      return spinnerClass + " animate__animated animate__fadeOut fast";
    } else {
      return spinnerClass;
    }
  };
  return (
    <div
      className={toggleSpinnerClass()}
      id="spinnerLoader"
      onAnimationEnd={() => {
        dispatch(spinnerIsShowingSetState());
      }}
    >
      <div
        className="spinner-grow text-primary"
        role="status"
        style={spinnerLoaderStyle}
      />
      <span className="ms-3 sr-only text-dark position-relative w-auto h-auto">
        Loading...
      </span>
    </div>
  );
};

//create spinner loader component
export const NotFound = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <h2>
        <Link to="/">Go to the home page</Link>
      </h2>
    </div>
  );
};
