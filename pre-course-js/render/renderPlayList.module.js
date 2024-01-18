import { renderPlayListHeader } from "./renderPlayListHeader.module.js";
import { renderTrack } from "./renderTrack.module.js";
export function renderPlaylist(anyPlaylist){
    renderPlayListHeader(anyPlaylist.playListInfo)
    for (let i = 0; i < anyPlaylist.tracks.length ; i++) {
      renderTrack(anyPlaylist.tracks[i]);
      }
    };