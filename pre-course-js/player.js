let playlist = {
    title: 'Hip-Hop Hits',
    coverImageUrl: './media/PlaylistTitle.png',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds : 733
    },
    tracks: [
        { coverImageUrl: '/media/rapgodimage.jpg',
            artistName: 'Eminem',
         title: 'Rap_God',
         fileUrl: './media/Eminem_-_Rap_God_47964975.mp3',
         isHot: false},
        {coverImageUrl: './media/inDaClubImage.jpg',
            artistName: '50cent',
        title: 'inDaClub',
        fileUrl: './media/50_Cent_-_In_Da_Club_47965582.mp3',
        isHot: true}
    ]
}
let playlist2 = {
    title: 'Hip-Hop Hits',
    coverImageUrl: './media/PlaylistTitle.png',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds : 733
    },
    tracks: [
        { coverImageUrl: '/media/rapgodimage.jpg',
            artistName: 'Eminem',
         title: 'Rap_God',
         fileUrl: './media/Eminem_-_Rap_God_47964975.mp3',
         isHot: false},
        {coverImageUrl: './media/inDaClubImage.jpg',
            artistName: '50cent',
        title: 'inDaClub',
        fileUrl: './media/50_Cent_-_In_Da_Club_47965582.mp3',
        isHot: true}
    ]
}
renderPlayList(playlist)
renderPlayList(playlist2)
//render
function renderPlayList(playlistForRendering){
    renderPlayListHeader(playlistForRendering)

    renderTrack(playlistForRendering.tracks[0]);
    renderTrack(playlistForRendering.tracks[1]);

}

function renderPlayListHeader(playlistForRendering) {
    let playlistTitleElement = document.createElement('h2');
playlistTitleElement.append(playlistForRendering.title);
document.body.append(playlistTitleElement);

let playlistImageElement = document.createElement('img');
playlistImageElement.src = playlistForRendering.coverImageUrl;
document.body.append(playlistImageElement);
}
function renderTrack(inputTrackForRendering){
const track1Element = document.createElement('div')
    let trackTitleElement = document.createElement('div');
    trackTitleElement.append(inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title);
document.body.append(trackTitleElement);
let playerElement = document.createElement('audio');
playerElement.src = inputTrackForRendering.fileUrl;
playerElement.controls = true;
track1Element.append(playerElement);
document.body.append(track1Element);
}
