// data 
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
]

// render
// track2
function renderPlaylist(anyPlaylist){
  renderPlayListHeader(anyPlaylist.playListInfo)
  for (let i = 0; i < anyPlaylist.tracks.length ; i++) {
    renderTrack(anyPlaylist.tracks[i]);
    }
  };
function renderPlayListHeader(anyPlayListInfo){
  const playListTitle = document.createElement('h1');
  playListTitle.append(anyPlayListInfo.title);
  document.body.append(playListTitle);

  const playListCoverEl = document.createElement('img')
  playListCoverEl.src = anyPlayListInfo.coverImageUrl;
  playListCoverEl.style.width = "150px";
  playListCoverEl.style.height = "150px";
  document.body.append(playListCoverEl)

  const playlistTotalTrackCount = document.createElement('span')
  playlistTotalTrackCount.append("Tracks Count : " + anyPlayListInfo.TotalInfo.totalTracksCount)
  document.body.append(playlistTotalTrackCount)
};

function renderTrack(anyTrack){
const trackEl = document.createElement('div')

const cover = document.createElement('img');
cover.src = anyTrack.TrackCoverImageUrl;
cover.style.width = "50px";
trackEl.append(cover)
document.body.append(trackEl)

const audio = document.createElement('audio')
audio.src = anyTrack.fileUrl;
audio.controls = true;
trackEl.append(audio)
trackEl.append(anyTrack.artistName + " - " + anyTrack.TrackTitle)
};
for (let i = 0; i < playLists.length; i++) {
  renderPlaylist(playLists[i]);  
}