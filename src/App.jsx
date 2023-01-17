import "./App.css";
import randomcolor from "randomcolor";
import { useState, useEffect } from "react";

function App() {
  const luminosityArray = ["Random", "Light", "Dark"];
  const formatArray = ["HEX", "RGB", "HSL"];
  const hueArray = [
    "Random",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Pink",
    "Monochrome",
  ];
  const [Color, setColor] = useState("#ffffff");
  const [Hue, setHue] = useState("random");
  const [Luminosity, setLuminosity] = useState("random");
  const [Format, setFormat] = useState("hex");
  const handleSubmit = (event) => {
    const color = randomcolor({
      hue: Hue,
      luminosity: Luminosity,
      format: Format,
    });
    setColor(color);
    event.preventDefault();
  };
  useEffect(() => {
    const color = randomcolor({
      hue: Hue,
      luminosity: Luminosity,
      format: Format,
    });
    setColor(color);
  }, []);
  return (
    <div
      className="App"
      style={{ backgroundColor: Color, height: "100vh" }}
      data-joy-color-scheme="dark"
    >
      <div className="nav-container">
        <div className="nav">
          <div className="title">Color Generator</div>
          <div className="desc">Generate attractive random colors!</div>
        </div>
      </div>
      <div className="container">
        <div
          title="Click to Copy"
          className="colorcode"
          onClick={() => navigator.clipboard.writeText(Color)}
        >
          {Color}
          <div className="tooltip">Click to Copy</div>
        </div>
        <div className="options">
          <form onSubmit={handleSubmit}>
            <div className="hue option">
              <div className="optionTitle">Hue</div>
              <div className="optionSelector">
                {hueArray.map((hueMap) => (
                  <div
                    className="circle"
                    style={{
                      textShadow: "0 0 5px #000000, 0 0 5px #000000",
                      background:
                        hueMap === "Monochrome"
                          ? "rgb(155, 155, 155)"
                          : hueMap === "Random"
                          ? "conic-gradient(red, yellow, green, blue, red)"
                          : hueMap,
                    }}
                    onClick={() => setHue(hueMap.toLowerCase())}
                  >
                    {hueMap.toLowerCase() === Hue ? <>✓</> : null}
                  </div>
                ))}
              </div>
            </div>
            <div className="luminosity option">
              <div className="optionTitle">Luminosity</div>
              <div className="optionSelector">
                {luminosityArray.map((luminosityMap) => (
                  <div
                    className="circle"
                    style={{
                      color: luminosityMap === "Light" ? "black" : "white",
                      textShadow:
                        luminosityMap === "Light"
                          ? "0"
                          : "0 0 5px #000000, 0 0 5px #000000",
                      background:
                        luminosityMap === "Light"
                          ? "white"
                          : luminosityMap === "Dark"
                          ? "black"
                          : "linear-gradient(135deg, white 0 50%, black 50% 100%)",
                    }}
                    onClick={() => setLuminosity(luminosityMap.toLowerCase())}
                  >
                    {luminosityMap.toLowerCase() === Luminosity ? <>✓</> : null}
                  </div>
                ))}
              </div>
            </div>
            <div className="format option">
              <div className="optionTitle">Format</div>
              <div className="optionSelector">
                {formatArray.map((formatMap) => (
                  <div
                    className={
                      formatMap.toLowerCase() === Format
                        ? "squircleSelected"
                        : "squircle"
                    }
                    onClick={() => setFormat(formatMap.toLowerCase())}
                    // style={{ color: "white", background: "black" }}
                  >
                    {formatMap}
                  </div>
                ))}
              </div>
            </div>
            {/* WIP */}
            <div className="count"></div>
          </form>
        </div>
        <div className="button">
          <button className="generate" onClick={handleSubmit}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
