import { v4 as uuidv4 } from "uuid";
function gothic() {
  return [
    {
      name: "Gothic Budzik",
      cover:
        "https://i1.sndcdn.com/artworks-zupyEQbDnbh1lyam-gPWpsA-t500x500.jpg",
      artist: "Wawrzyniec Rogalski YT",
      audio: require("./assets/songs/gothic_budzik.mp3"),
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "DŻIN Z KUFRA - GOTHIC REMIX",
      cover:
        "https://i.ytimg.com/vi/y_ifjEYEMuY/maxresdefault.jpg",
      artist: "Kistru, Kaktus",
      audio: require("./assets/songs/dzin_z_kufra.mp3"),
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "KUCHNIA SNAFA - GOTHIC REMIX",
      cover:
        "https://i.ytimg.com/vi/dLLRUtql_ys/maxresdefault.jpg",
      artist: "Kistru",
      audio: require("./assets/songs/kuchnia_snafa.mp3"),
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "SIEKAM CEBULKĘ - GOTHIC REMIX",
      cover:
        "https://i.ytimg.com/vi/TYjDhj86oUM/maxresdefault.jpg",
      artist: "Kistru",
      audio: require("./assets/songs/siekam_cebulke.mp3"),
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Revolution",
      cover:
        "https://media.rawg.io/media/resize/1280/-/games/2f7/2f79dd7183c535d5d37bbe9b7a69cb02.jpg",
      artist: "Kai Rosenkranz",
      audio: require("./assets/songs/o_bogowie_walka.mp3"),
      color: ["red"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default gothic;
