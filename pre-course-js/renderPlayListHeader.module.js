export function renderPlayListHeader(playlistForRendering) {
    let playlistTitleElement = document.createElement('h2');
    playlistTitleElement.append(playlistForRendering.title)
    document.body.append(playlistTitleElement);
    let playlistImageElement = document.createElement('img');
    playlistImageElement.src = playlistForRendering.coverImageUrl;
    document.body.append(playlistImageElement);
  }