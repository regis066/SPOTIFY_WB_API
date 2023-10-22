import React, { useState, useEffect } from "react";
import Login from "./pages/Login/Login";
import { getTokenFromUrl } from "./config/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./pages/Player/Player";
import { useDataLayerContext } from "./DataLayer";

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState();
  const [{ user}, dispatch] = useDataLayerContext();

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);

        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        })
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        });
      }); 
    }
  }, []);
  console.log("token", token);
  console.log(user);
  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
};

export default App;
 