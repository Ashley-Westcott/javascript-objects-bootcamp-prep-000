var playlist = {artistName: "songTitles"};

function updatePlaylist(playlist, artistName, songTitles) {
  return playlist{
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}