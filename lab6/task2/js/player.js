function Song(name, time) {
  this.name = name;
  this.time = time;
}

function PlayerList() {
  this.list = [];
  this.addSong = function(song) {
  this.list.push(song);
  };
  this.getList = function () {
  return this.list;
  };
}

function Player(playerList) {
  this.playerList = playerList;
  this.currentTrack = this.playerList[0];
  this.status = 'stop';
  this.currentTrackIndex = 0;

  this.display = function () {
  return 'Track: ' + this.currentTrack.name + ' | Time: ' + this.currentTrack.time + ' | Status: ' + this.status;
  };

  this.play = function () {
  this.status = 'play';
  };

  this.stop = function () {
  this.status = 'stop';
  };

  this.pause = function () {
  this.status = 'pause';
  };

  this.next = function () {
  if(this.currentTrackIndex === this.playerList.length - 1) {
    this.currentTrackIndex = 0;
  } else {
    this.currentTrackIndex++;
  }
  this.currentTrack = this.playerList[this.currentTrackIndex];
  };

  this.prev = function () {
  if(this.currentTrackIndex === 0) {
    this.currentTrackIndex = this.playerList.length - 1;
  } else {
    this.currentTrackIndex--;
  }
  this.currentTrack = this.playerList[this.currentTrackIndex];
  };
}

let song1 = new Song('Frank Sinatra - That is life', '03:22'),
  song2 = new Song('Franz Ferdinand - Come on Home', '03:46'),
  song3 = new Song('Moby - Natural Blues', '04:13');

let myPlayList = new PlayerList();
myPlayList.addSong(song1);
myPlayList.addSong(song2);
myPlayList.addSong(song3);

let myPlayer = new Player(myPlayList.getList());
console.log(myPlayer.display());
myPlayer.prev();
console.log(myPlayer.display());
myPlayer.next();
console.log(myPlayer.display());

