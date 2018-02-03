var playlist = {playlist}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName1]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName1]
  return playlist
}