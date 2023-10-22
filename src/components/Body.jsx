import React from "react";
import "./styles/Body.css";
import Header from "./Header";
import { useDataLayerContext } from "../DataLayer";
import { Favorite, PlayCircleFilled, MoreHoriz } from "@mui/icons-material";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerContext();
  console.log( "DISCOVER_WEEKLY", discover_weekly);
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLISTS</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
      <div className="body_icons">
      <PlayCircleFilled className="body_shuffle" />
      <Favorite fontSize="large"/>
      <MoreHoriz />
      </div>
      {discover_weekly?.tracks?.items.map((item) => 
        (
          <SongRow track={item?.track}/>
        )
        )}
      </div>
    </div>
  );
};

export default Body;
