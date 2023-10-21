import { Grid } from "@mui/material";
import { ContentInformation, TitleInformation } from "./style";

export default function Information({ product }: any) {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TitleInformation>Hello</TitleInformation>
          <ContentInformation>
            {product?.describe.replaceAll("\n", "<br/>")}
          </ContentInformation>
        </Grid>
        <Grid item xs={12}>
          <TitleInformation>Hello</TitleInformation>
          <ContentInformation>
            {product?.describe.replaceAll("\n", "<br/>")}
          </ContentInformation>
        </Grid>
        <Grid item xs={12}>
          <TitleInformation>Hello</TitleInformation>
          <ContentInformation>
            {product?.describe.replaceAll("\n", "<br/>")}
          </ContentInformation>
        </Grid>
      </Grid>
    </>
  );
}
