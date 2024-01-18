export function renderPlayListHeader(anyPlayListInfo){
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