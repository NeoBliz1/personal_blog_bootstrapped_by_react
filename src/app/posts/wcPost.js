import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { useImportScript, useImportStylesheet } from "../fucnForApp.js";

//app wrap
const WCPostFullArticle = () => {
  const outletContextProps = useOutletContext();
  //create ref for get codeBlock fo higlight by prism
  const codeBlock_1 = useRef();
  const codeBlock_2 = useRef();
  const initialCode = `
    const foo = 'foo'; 
    const bar = 'bar';
    console.log(foo + bar);
  `.trim();
  const [flaskAppCode, setFlaskAppCode] = useState(initialCode);
  const [wsgiAppCode, setWsgiAppCode] = useState(initialCode);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  //import pirsm CSS from CDN
  useImportStylesheet(
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-okaidia.min.css",
    "sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ==",
    "anonymous",
    "no-referrer"
  );
  //import pirsm-lineNumber-jsPlugin CSS from CDN
  useImportStylesheet(
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/plugins/line-numbers/prism-line-numbers.min.css",
    "sha512-cbQXwDFK7lj2Fqfkuxbo5iD1dSbLlJGXGpfTDqbggqjHJeyzx88I3rfwjS38WJag/ihH7lzuGlGHpDBymLirZQ==",
    "anonymous",
    "no-referrer"
  );

  const arrPrismJsSrc = [
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/components/prism-core.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/plugins/autoloader/prism-autoloader.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/plugins/line-numbers/prism-line-numbers.min.js"
  ];
  const arrSHA512Sums = [
    "sha512-LCKPTo0gtJ74zCNMbWw04ltmujpzSR4oW+fgN+Y1YclhM5ZrHCZQAJE4quEodcI/G122sRhSGU2BsSRUZ2Gu3w==",
    "sha512-GP4x8UWxWyh4BMbyJGOGneiTbkrWEF5izsVJByzVLodP8CuJH/n936+yQDMJJrOPUHLgyPbLiGw2rXmdvGdXHA==",
    "sha512-dubtf8xMHSQlExGRQ5R7toxHLgSDZ0K7AunqPWHXmJQ8XyVIG19S1T95gBxlAeGOK02P4Da2RTnQz0Za0H0ebQ=="
  ];

  //import pirsmJS from CDN
  useImportScript(arrPrismJsSrc, arrSHA512Sums, setScriptsLoaded);

  //fetch App.py code from git
  fetch("https://raw.githubusercontent.com/NeoBliz1/t-msg-bot/master/app.py")
    .then((response) => response.text())
    .then((data) => setFlaskAppCode(data));

  //fetch wsgi.py code from git
  fetch("https://raw.githubusercontent.com/NeoBliz1/t-msg-bot/master/wsgi.py")
    .then((response) => response.text())
    .then((data) => setWsgiAppCode(data));

  //if scriptsLoaded or flaskAppCode have changed useEffect executed
  useEffect(() => {
    //console.log(`scriptsLoaded is ${scriptsLoaded}`)
    if (scriptsLoaded) {
      //console.log(typeof window.Prism !== 'undefined')
      //console.log(typeof window.Prism.plugins.autoloader !== 'undefined')
      //console.log(typeof window.Prism.plugins.lineNumbers !== 'undefined')
      //console.log('highlight')
      window.Prism.highlightElement(codeBlock_1.current);
      window.Prism.highlightElement(codeBlock_2.current);
    }
    //console.log(window.Prism)
    //if prismjs core and plugin line numbers have executed then start code highlight
  }, [scriptsLoaded, flaskAppCode]);
  return (
    <Row className="justify-content-center">
      <Col className="text-justify" xs={12} sm={11} md={11} xxl={6}>
        <h4 className={outletContextProps.h4}>
          Website chat with messages via telegram, easy peasy. My minds before
          I've started dive into.
        </h4>
        <div
          className="overflow-hidden position-relative"
          style={{ height: "16rem" }}
        >
          {/************************************************************
            header image 
            ***************************************************************/}
          <img
            src="//live.staticflickr.com/6133/5940816324_14dc1e5197_b.jpg"
            className="w-100 position-absolute top-50 start-50 translate-middle"
            alt="The easy way is hard enough"
          />
        </div>
        <div
          className={
            "d-flex justify-content-center " + outletContextProps.linkToAuthor
          }
        >
          <a
            href="https://flic.kr/p/a3YeHE"
            target="_blank"
            rel="noreferrer"
            className="me-1 text-secondary"
          >
            Photo: Nicolás Boullosa
          </a>
          <a
            href="https://creativecommons.org/licenses/by/2.0/"
            target="_blank"
            rel="noreferrer"
            className="text-secondary"
          >
            (CC BY 2.0)
          </a>
        </div>
        <div className={outletContextProps.p} style={{ textAlign: "justify" }}>
          <p>
            First of all I've researched some telegram chat apps which already
            existed. Those either demanded payment either was not suitable
            format for my website. So I've thought: "It will be easy to create
            app like this, also it will be useful experience".
            <a
              className={"mx-1 " + outletContextProps.p}
              target="_blank"
              rel="noreferrer"
              href="https://neobliz1.github.io/"
            >
              Front-end
            </a>
            part written on
            <a
              className={"mx-1 " + outletContextProps.p}
              target="_blank"
              rel="noreferrer"
              href="https://jqueryui.com/dialog/"
            >
              Jquery UI
            </a>
            framework and
            <a
              className={"mx-1 " + outletContextProps.p}
              target="_blank"
              rel="noreferrer"
              href="https://jquery.com/"
            >
              Jquery
            </a>
            Library. It has simple logic, while chat is open every 5 second it
            sends request for getting messages from the server.
          </p>
          <p>
            Instruction about server side based on the
            <a
              className={"mx-1 " + outletContextProps.p}
              target="_blank"
              rel="noreferrer"
              href="https://aliabdelaal.medium.com/telegram-bot-tutoria-using-python-and-flask-1fc634da9522"
            >
              Ali's article.
            </a>{" "}
            According to the article I implemented that logic to my
            <a
              className={"mx-1 " + outletContextProps.p}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/NeoBliz1/t-msg-bot/blob/master/app.py"
            >
              program.
            </a>
            Code written in python with Flask framework. Firstly I've started to
            analyze how flask is working. I've read about
            <a
              className={"mx-1 " + outletContextProps.p}
              target="_blank"
              rel="noreferrer"
              href="https://flask.palletsprojects.com/en/2.0.x/quickstart/#routing"
            >
              flask
            </a>
            routes and
            <a
              className={"mx-1 " + outletContextProps.p}
              target="_blank"
              rel="noreferrer"
              href="https://docs.python-requests.org/en/latest/user/quickstart/#make-a-request"
            >
              requests
            </a>
            library, it seemed to be enough.
          </p>
          <pre className="line-numbers" style={{ maxHeight: "800px" }}>
            <code ref={codeBlock_1} className="language-python">
              {flaskAppCode}
            </code>
          </pre>
          <p>
            Insofar as I was creating an app on the local machine, it was
            rejecting every request that I was trying to send from local server
            to another port. So because of that I made a decision deploy app on
            <a
              className={"mx-1 " + outletContextProps.p}
              target="_blank"
              rel="noreferrer"
              href="https://www.heroku.com/"
            >
              Heroky Cloud service.
            </a>
            Considering Ali's article it seemed to be a good idea. Heroku is
            quite convenient and simple for newbies, in additional it's free for
            pet projects. So I've read the
            <a
              className={"mx-1 " + outletContextProps.p}
              target="_blank"
              rel="noreferrer"
              href="https://devcenter.heroku.com/articles/getting-started-with-python"
            >
              manual
            </a>
            how deployed the app, then I installed a Heroku local app on my PC
            via Ubuntu terminal.
          </p>
          <p>
            After deploying, it still was an error like 'Cross-Origin Request
            Blocked'. I read around some articles about CORS errors and I found
            <a
              className={"mx-1 " + outletContextProps.p}
              target="_blank"
              rel="noreferrer"
              href="https://flask-cors.readthedocs.io/en/latest/"
            >
              Flask extension
            </a>
            for handling Cross Origin Resource Sharing (CORS). Flask_cors made
            cross-origin AJAX possible. So I added Flask-CORS to my app, after
            that requests finally reached the server. Heroku is convenient
            service for pet projects, but it doesn't have possibility to set
            free SSL certificate (I've tried sertificate from Cloudflare).
          </p>
          <p>
            Telegram
            <a
              className={"mx-1 " + outletContextProps.p}
              href="https://core.telegram.org/bots/webhooks#the-short-version"
              target="_blank"
              rel="noreferrer"
            >
              webhook
            </a>
            it's a useful feature which allows to get a response message from
            telegram server in the same moment as it sends to telegram bot from
            definite user. But it demands
            <a
              className={"mx-1 " + outletContextProps.p}
              href="https://core.telegram.org/bots/webhooks#ssl-needs-a-certificate"
              target="_blank"
              rel="noreferrer"
            >
              SSL
            </a>
            . Spent some time reading about SSL certificates, I've found
            possibility to get a free SSL certificate from Cloudflare. So I made
            the decision to rent a cheap Ubuntu server and set up my new
            application there. For server tuning I used
            <a
              className={"mx-1 " + outletContextProps.p}
              href="https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-gunicorn-and-nginx-on-ubuntu-20-04"
              target="_blank"
              rel="noreferrer"
            >
              Digitalocean guide
            </a>
            .
          </p>
          <pre className="line-numbers" style={{ maxHeight: "800px" }}>
            <code ref={codeBlock_2} className="language-python">
              {wsgiAppCode}
            </code>
          </pre>
        </div>
      </Col>
    </Row>
  );
};

export default WCPostFullArticle;
