function MainLobby() {

  this.update = function(data) {
    var gameListDiv = $('#gameListBody').empty();

    var self = this;

    if(!data || data.length === 0) {
      $('<tr/>', {
        id: 'noGamesRow'
      }).appendTo($('#gameListBody'));

      $('<td/>', {
        id: 'noGamesCol'
      }).appendTo($('#noGamesRow'));

      $('<h3/>', {
        text: 'There are no games. Please create a game!'
      }).appendTo($('#noGamesCol'));
    }

    $.each(data, function(i, game) {
      self.createLobbyRow(game);
    });
  };

  /* creates a lobby row */
  //id    Name    4x4    2/6 players
  this.createLobbyRow = function(game) {
    $('<tr/>', {
      id: game.id,
      class: 'gameLobbyRow'
    }).appendTo($('#gameListBody'));

    var thisGame = $('#'+game.id);

    $('<button/>',{
      text: 'Join',
      class: 'btn btn-primary',
      onclick: 'joinGame(\''+game.id+'\', '+game.password+');'
    }).appendTo(thisGame);

    $('<td/>',{
      text: game.name,
      class: 'gameName'
    }).appendTo(thisGame);
    $('<td/>', {
      text: game.gridSize +'x'+game.gridSize,
      class: 'gameGridSize',
    }).appendTo(thisGame);
    $('<td/>', {
      text: game.currentPlayers + '/'+game.maxPlayers + ' Players',
      class: 'gamePlayers',
    }).appendTo(thisGame);
  };
}
