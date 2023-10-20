import { Grid, Typography } from "@mui/material";
import img from "../../images/catalog/Ellipse 18.png";
export default function Catalog() {
  const Bestller = [
    {
      img: img,
      text: "Polo Nam Thêu",
    },
    {
      img: img,
      text: "Polo Nam Thêu",
    },
    {
      img: img,
      text: "Polo Nam Thêu",
    },
    {
      img: img,
      text: "Polo Nam Thêu",
    },
  ];
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Grid>
            <Typography>Bestller</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {Bestller.map((item) => (
              <Grid item xs={3} textAlign="center">
                <Grid>
                  <img src={item.img} style={{ width: "100%" }} />
                </Grid>
                <Grid>
                  <Typography>{item.text}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
