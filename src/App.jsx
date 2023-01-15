import "./App.css";
import randomcolor from "randomcolor";
import { useState } from "react";

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
  return (
    <div className="App" style={{ backgroundColor: Color, height: "100vh" }}>
      <div className="nav">
        <div className="title">Color Generator</div>
        <div className="desc">Generate attractive random colors!</div>
      </div>
      <div className="container">
        <div className="colorcode">{Color}</div>
        <div className="options">
          <form onSubmit={handleSubmit}>
            <div className="hue option">
              <div className="optionTitle">Hue</div>
              <div className="optionSelector">
                {hueArray.map((hueMap) => (
                  <div
                    className="circle"
                    style={{
                      background:
                        hueMap === "Monochrome"
                          ? "rgb(155, 155, 155)"
                          : hueMap === "Random"
                          ? "conic-gradient(red, yellow, green, blue, red)"
                          : hueMap,
                      border: "1px solid",
                    }}
                    onClick={() => setHue(hueMap.toLowerCase())}
                  ></div>
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
                      background:
                        luminosityMap === "Light"
                          ? "white"
                          : luminosityMap === "Dark"
                          ? "black"
                          : "linear-gradient(135deg, white 0 50%, black 50% 100%)",
                      border: "1px solid",
                    }}
                    onClick={() => setLuminosity(luminosityMap.toLowerCase())}
                  ></div>
                ))}
              </div>
            </div>
            <div className="format">
              {/* <FormControl>
                <FormLabel>Format</FormLabel>
                <RadioGroup
                  row
                  className="formatRadio"
                  name="radio-buttons-group"
                  value={Format}
                  onChange={handleFormat}
                >
                  {formatArray.map((formatMap) => (
                    <Radio
                      style={{
                        alignItems: "center",
                      }}
                      value={formatMap.toLowerCase()}
                      label={formatMap}
                    />
                  ))}
                </RadioGroup>
              </FormControl> */}
            </div>
            <div className="count"></div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
