import React from "react";
import "./styles/Footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Usher_Cannes_2016_%28retouched%29.jpg/640px-Usher_Cannes_2016_%28retouched%29.jpg"
          alt=""
          className="footer_albumLogo"
        />
        <div className="footer_songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer_center">
        <Shuffle className="footer_green" />
        <SkipPrevious className="footer_icon" />
        <PlayCircleOutline fontSize="large" className="footer_icon" />
        <SkipNext className="footer_icon" />
        <Repeat className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
          <Slider />
          </Grid>
          </Grid>
      </div>
    </div>
  );
};

export default Footer;
