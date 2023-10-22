const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:5173/";
const clientId = "1f17319e2ebd4ef8b525d9ff95a3e075";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// Construct the authentication URL
const queryParameters = new URLSearchParams({
  client_id: clientId,
  redirect_uri: redirectUri,
  scope: scopes.join(" "),
  response_type: "token",
  show_dialog: true,
});

export function getTokenFromUrl(){
  return window.location.hash
  .substring(1)
  .split("&")
  .reduce((initial, item) => {
    let parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {})
} 

export const loginUrl = `${authEndpoint}?${queryParameters.toString()}`;
