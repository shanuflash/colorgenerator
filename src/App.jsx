import "./App.css";
import randomcolor from "randomcolor";
import { Button, Radio, RadioGroup, FormControl, FormLabel } from "@mui/joy/";
import { useState } from "react";
// import RadioGroup from "@mui/joy/RadioGroup";

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
  const [Color, setColor] = useState("random");
  const [Hue, setHue] = useState("random");
  const [Luminosity, setLuminosity] = useState("random");
  const [Format, setFormat] = useState("hex");
  const handleHue = (event) => {
    setHue(event.target.value);
  };
  const handleLuminosity = (event) => {
    setLuminosity(event.target.value);
  };
  const handleFormat = (event) => {
    setFormat(event.target.value);
  };
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
      <div className="title">Color Generator</div>
      <div className="desc">Generate attractive random colors!</div>
      <div className="colorcode">{Color}</div>
      <div className="options">
        <form onSubmit={handleSubmit}>
          <div className="hue">
            <FormControl>
              <FormLabel>Hue</FormLabel>
              <RadioGroup
                row
                sx={{ flexWrap: "wrap" }}
                className="hueRadio"
                name="radio-buttons-group"
                value={Hue}
                onChange={handleHue}
              >
                {hueArray.map((hueMap) => (
                  <Radio value={hueMap.toLowerCase()} label={hueMap} />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <div className="luminosity"></div>
          <FormControl>
            <FormLabel>Luminosity</FormLabel>
            <RadioGroup
              row
              style={{ flexWrap: "wrap" }}
              className="luminosityRadio"
              name="radio-buttons-group"
              value={Luminosity}
              onChange={handleLuminosity}
            >
              {luminosityArray.map((luminosityMap) => (
                <Radio
                  style={{
                    alignItems: "center",
                  }}
                  value={luminosityMap.toLowerCase()}
                  label={luminosityMap}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <div className="format">
            <FormControl>
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
            </FormControl>
          </div>
          <div className="count"></div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
