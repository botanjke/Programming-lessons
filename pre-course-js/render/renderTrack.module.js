export function renderTrack(anyTrack){
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