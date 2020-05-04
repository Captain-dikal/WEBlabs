function Song(Name, Duration) {
  this.songName = Name; // Название
  this.songDuration = Duration; // Длительность
}
function PlayerList(Songs) {
  this.currentIdTrack = 0;
  if(typeof(songsArray) != undefined){
	 this.songs = songsArray;
  }else{
    this.songs = [];
  }
  this.next = function() {
    if (this.songs.length > 0) {
      this.currentIdTrack++;
      if (this.currentIdTrack > this.songs.length - 1) {
        this.currentIdTrack = 0;
      }
    }
  };
  this.prev = function() {
    if (this.songs.length > 0) {
      this.currentIdTrack--;
      if (this.currentIdTrack < 0) {
        this.currentIdTrack = this.songs.length - 1;
      }
    }
  };
  this.getCurrentTrackName = function() {
    if (this.songs === 'object') {
      return this.songs[this.currentIdTrack].songName;
    } else {
      return 'Пусто';
    }
  };
}

function Player(playerList) {
  this.currentTrack = 'song.mp3';
  this.status = 'stop';
  this.playerList = playerList;

  this.display = function () {
    return 'Track: ' + this.currentTrack + ' Status: ' + this.status;
  };

  this.play = function () {
    this.status = 'play';
  };

  this.stop = function () {
    this.status = 'play';
  };

  this.pause = function () {
    this.status = 'pause';
  };

  this.next = function () {
    this.playerList.next();
  };

  this.prev = function () {
    this.playerList.prev();
}
