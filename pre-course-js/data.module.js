import { renderPlaylist } from "./render/renderPlayList.module.js";
const playLists = [
    {
      playListId: "1",
      playListInfo : {
        title: "Hip-Hop Hits",
      coverImageUrl: "./media/PlaylistTitle.png",
      TotalInfo: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
      }
    },
      tracks: [
        {
          trackId: "1",
          TrackCoverImageUrl: "./media/rapgodimage.jpg",
          artistName: "Eminem",
          TrackTitle: "Rap God",
          fileUrl: "./media/Eminem_-_Rap_God_47964975.mp3",
          trackDurationInSec: 1,
          isHot: false,
        },
        {
          trackId : "2",
          TrackCoverImageUrl: "./media/inDaClubImage.jpg",
          artistName: "50cent",
          TrackTitle: "In da Club",
          fileUrl: "./media/50_Cent_-_In_Da_Club_47965582.mp3",
          trackDurationInSec: 1,
          isHot: true,
        },
      ],
    },
    {
      playListId: "2",
      playListInfo : {
        title: "Hip-Hop Hits",
      coverImageUrl: "./media/PlaylistTitle.png",
      TotalInfo: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733,
      }
    },
      tracks: [
        {
          trackId: "1",
          TrackCoverImageUrl: "./media/rapgodimage.jpg",
          artistName: "Eminem",
          TrackTitle: "Rap God",
          fileUrl: "./media/Eminem_-_Rap_God_47964975.mp3",
          trackDurationInSec: 1,
          isHot: false,
        },
        {
          trackId : "2",
          TrackCoverImageUrl: "./media/inDaClubImage.jpg",
          artistName: "50cent",
          TrackTitle: "In da Club",
          fileUrl: "./media/50_Cent_-_In_Da_Club_47965582.mp3",
          trackDurationInSec: 1,
          isHot: true,
        },
      ],
    }  
  ];
  for (let i = 0; i < playLists.length; i++) {
    renderPlaylist(playLists[i]);  
  }