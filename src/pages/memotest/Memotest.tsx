import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import guybrush from "../../assets/guybrush.png";
import lechuck from "../../assets/lechuck.png";
import tentacle from "../../assets/tentacle.png";
import indiana from "../../assets/indiana-jones.png";
import dr from "../../assets/dr.png";
import sam from "../../assets/sam.png";
import max from "../../assets/max.png";
import ben from "../../assets/ben.png";
import bobbin from "../../assets/bobbin.png";
import threeHead from "../../assets/three-head.png";

const IMAGES = [
  guybrush,
  tentacle,
  lechuck,
  indiana,
  dr,
  sam,
  max,
  ben,
  bobbin,
  threeHead,
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function Memotest() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => {
        setSelected([]);
      }, 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === IMAGES.length) {
      alert("Ganaste!");
      location.reload();
    }
  }, [guessed]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={8} sm={8} md={4} lg={4} padding="16px">
        <h1>Point 'n' Click - MEMOTEST</h1>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr)",
            gap: 24,
          }}
        >
          {IMAGES.map((image) => {
            const [, url] = image.split("|");

            return (
              <li
                onClick={() =>
                  selected.length < 2 &&
                  setSelected((selected) => selected.concat(image))
                }
                key={image}
                style={{
                  padding: 10,
                  border: "1px solid #f4f4f4",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  {/* <img alt="icon" src={url} /> */}
                  {selected.includes(image) || guessed.includes(image) ? (
                    <img alt="icon" src={url} />
                  ) : (
                    <img
                      alt="icon"
                      src="src/assets/search.png"
                      style={{ color: "#fff" }}
                    />
                  )}
                </Grid>
              </li>
            );
          })}
        </ul>
      </Grid>
    </Grid>
  );
}
