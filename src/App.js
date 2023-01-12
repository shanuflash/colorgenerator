import "./App.css";
import randomcolor from "randomcolor";
import { Radio, RadioGroup, FormControl, FormLabel } from "@mui/joy/";
import { useState } from "react";
// import RadioGroup from "@mui/joy/RadioGroup";

function App() {
  const luminosityArray = ["Random", "Light", "Dark"];
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
  const [Hue, setHue] = useState("Red");
  let a = "pink";
  const [Luminosity, setLuminosity] = useState("Dark");
  const handleHue = (event) => {
    setHue(event.target.value);
  };
  const handleLuminosity = (event) => {
    setLuminosity(event.target.value);
  };
  var color = randomcolor({
    hue: a,
    luminosity: Luminosity,
    format: "hex",
  });
  console.log(Hue);
  return (
    <div className="App">
      {/* //hue: red, orange, yellow, green, blue, purple, pink and monochrome
      //luminosity: light or dark 
      //count: number 
      //format: rgb, rgba, hsl, hsla and hex 
      //https://www.npmjs.com/package/randomcolor */}
      <div className="title">Color Generator</div>
      <div className="desc">Generate attractive random colors!</div>
      <div className="colorcode">{color}</div>
      <div className="options">
        <div className="hue">
          <FormControl>
            <FormLabel>Hue</FormLabel>
            <RadioGroup
              row
              className="hueRadio"
              name="radio-buttons-group"
              value={Hue}
              onChange={handleHue}
            >
              {hueArray.map((hueMap) => (
                <Radio value={hueMap} label={hueMap} />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
        <div className="luminosity"></div>
        <FormControl>
          <FormLabel>Luminosity</FormLabel>
          <RadioGroup
            row
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
                value={luminosityMap}
                label={luminosityMap}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <div className="format"></div>
        <div className="count"></div>
      </div>
    </div>
  );
}

export default App;
