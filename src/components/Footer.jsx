import RandomQuote from "./RandomQuote";

function Footer() {

    return (
      <div id="footer">
        <hr></hr>
        <h4>Enjoy a byte of intergalactic food for tought: <RandomQuote /> </h4>
        <p>Made with love by Luis Emmanuel</p>
        <p>
          {" "}
          <a href="https://github.com/lerodriguezreyes/m1p-echoes.git">
            {" "}
            repository
          </a>{" "}
          -{" "}
          <a href="mailto:lerodriguezreyes@outlook.com?subject=About%20Your%20Kanban%20Board%20">
            reach out!
          </a>{" "}
        </p>
      </div>
    );
  }
  export default Footer
