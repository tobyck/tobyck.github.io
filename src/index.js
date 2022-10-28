import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Section({ children }) {
  return (
    <div className="section">
      <div className="content">
        {children}
      </div>
    </div>
  );
}

function ScrollLink({ children, number }) {
  return (
    <span className="scroll-link" onClick={() => window.scrollTo(window.scrollX, number * window.innerHeight)}>
      {children}
    </span>
  );
}

function App() {
  return (
    <div>
      <Section>
        <h1 className="title">Kia ora!</h1>
      </Section>

      <ScrollLink number={1}>
        <img src="down.svg" id="arrow" alt="arrow pointing down" />
      </ScrollLink>

      <Section>
        <h1>I'm Toby!</h1>
        <p >
          I'm a year {new Date().getFullYear() - 2012} student at WHS interested in language and web development, cyber security, <a href="https://instagram.com/toby_ck">photography</a>, and Māori. You can see a few of my recent projects <ScrollLink number={2}>below</ScrollLink>, or if you'd like to see some others, click <a href="https://github.com/tobyck">here</a>.
        </p>
      </Section>

      <Section>
        <h1>Cubestack</h1>
        <p >
          Cubestack is a <a href="https://en.wikipedia.org/wiki/Stack-oriented_programming">stack-based</a> <a href="https://esolangs.org/wiki/Esoteric_programming_language">esolang</a> where the only commands are <a href="https://jperm.net/3x3/moves">moves on a 3x3 Rubiks Cube</a>. You can find more on this on <a href="https://github.com/tobyck/cubestack">the GitHub repository</a>, or see some examples on <a href="https://codegolf.stackexchange.com/">CGCC</a> <a href="https://codegolf.stackexchange.com/search?q=cubestack">here</a>.
        </p>
      </Section>

      <Section>
        <h1>Mini Quest</h1>
        <p>
          <a href="https://miniquest.surge.sh">Mini Quest</a> is a simple adventure game which involves walking around a small island collecting items and eventually discovering a valuable chest. This is the first game I've ever made in HTML/JS, so I didn't (and still don't) know how to optimise games. Play at your own risk — slower devices tend not to run it well at all.
        </p>
      </Section>

      <Section>
        <h1>RSA</h1>
        <p>
          <a href="https://en.wikipedia.org/wiki/RSA_(cryptosystem)">RSA encryption</a> is a widely used encryption algorithm that I implemented <a href="https://github.com/tobyck/rsa-encryption">here</a> in pure Python (it's probably not very secure for lots of reasons, one of which can be found <a href="https://fermatattack.secvuln.info/">here</a>).
        </p>
      </Section>

      <Section>
        <h1>Thank you!</h1>
        <p>
          Click <ScrollLink number={0}>here</ScrollLink> to go back to the top, or <a href="https://github.com/tobyck">here</a> to see some more projects.
        </p>
      </Section>
    </div >
  );
}

document.addEventListener("scroll", () => {
  const title = document.querySelector(".title");
  title.style.transform = `translateY(${parseInt(window.scrollY / 2)}px)`;

  const arrow = document.querySelector("#arrow").style;
  arrow.animation = window.scrollY ? "none" : "bounce 2s infinite";
  arrow.opacity = +!window.scrollY;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
