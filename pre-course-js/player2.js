// data 
const playlist = {
    title: "Hip-Hop Hits",
    coverImageUrl: "./media/PlaylistTitle.png",
    info: {
      totalTracksCount: 4,
      totalTracksDurationInSeconds: 733,
    },
    tracks: [
      {
        coverImageUrl: "./media/rapgodimage.jpg",
        artistName: "Eminem",
        title: "Rap God",
        fileUrl: "./media/Eminem_-_Rap_God_47964975.mp3",
        isHot: false,
      },
      {
        coverImageUrl: "./media/inDaClubImage.jpg",
        artistName: "50cent",
        title: "In da Club",
        fileUrl: "./media/50_Cent_-_In_Da_Club_47965582.mp3",
        isHot: true,
      },
    ],
  };
  
  // render
  renderPlaylist(playlist)
  function renderPlaylist(playlistForRendering) {    
     renderPlayListHeader(playlistForRendering);

   rendertrack(playlistForRendering.tracks[0]);
   rendertrack(playlistForRendering.tracks[1]);
  };
  function renderPlayListHeader(playlistForRendering) {
    let playlistTitleElement = document.createElement('h2');
playlistTitleElement.append(playlistForRendering.title)
document.body.append(playlistTitleElement)

    let playlistImageElement = document.createElement('img')
    playlistImageElement.src = playlistForRendering.coverImageUrl;
    document.body.append(playlistImageElement);
  }
  function rendertrack (inputTrackForRendering){
    let trackElement = document.createElement('div');
    trackElement.append(inputTrackForRendering.artistName + ' - ' +inputTrackForRendering.title)
    document.body.append(trackElement)

    let playerElement = document.createElement('audio');
    playerElement.src = inputTrackForRendering.fileUrl;
    playerElement.controls = true;
    trackElement.append(playerElement);
    document.body.append(trackElement)

  }