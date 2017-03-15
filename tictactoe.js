$(document).ready(function() {
  var turn = "X";

  var turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];

  var computersTurn="O";

  var gameOn = false;

  var count = 0;

  $('#turnX').click(function(){
    turn = "X";
    computersTurn = "O";
    $("#turnO").removeClass("btn-success");
    $("#turnX").removeClass("btn-danger")
    $("#turnX").addClass("btn-success");
    $("#turnO").addClass("btn-danger");
    reset();
  });

  $('#turnO').click(function(){
    turn = "O";
    computersTurn = "X";
    $("#turnX").removeClass("btn-success");
    $("#turnO").removeClass("btn-danger");
    $("#turnO").addClass("btn-success");
    $("#turnX").addClass("btn-danger");
    reset();
  });

    $('.tic').click(function(){
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
  });

  $('#resetBtn').click(function(){
    reset();
  });

  function playerTurn(turn, id) {
    var spotTaken = $("#"+id).text();
    if (spotTaken === "#") {
      count++;
      turns[id]= turn;
      $("#"+id).text(turn);
      winCondition(turns, turn);
      if(gameOn === false) {
        computerTurn();
        winCondition(turns, computersTurn);
      }

    }
  }

  function reset(){
    turns= ['#', '#', '#', '#', '#', '#', '#', '#', '#'];
    var count = 0;
    $('.tic').text("#");
    gameOn = true;

  }

  function computerTurn() {
    var taken= false;
    while (taken=== false && count !== 5) {
      var computersMove = (Math.random()*10).toFixed();
      var move= $("#" + computersMove).text();
      if (move === "#") {
        $("#" + computersMove).text(computersTurn);
        taken = true;
        turns[computersMove] = computersTurn;
      }
    }
  }

  function winCondition(turnArray, currentTurn) {
    if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
      gameOn = true;
      setTimeout(function() { reset(); }, 2000);
      alert ("Player " + currentTurn + " wins!");
    } else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      setTimeout(function() { reset(); }, 2000);
      alert ("Player " + currentTurn + " wins!");
    } else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      setTimeout(function() { reset(); }, 2000);
      alert ("Player " + currentTurn + " wins!");
    } else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
      gameOn = true;
      setTimeout(function() { reset(); }, 2000);
      alert ("Player " + currentTurn + " wins!");
    } else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      setTimeout(function() { reset(); }, 2000);
      alert ("Player " + currentTurn + " wins!");
    } else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
      gameOn = true;
      setTimeout(function() { reset(); }, 2000);
      alert ("Player " + currentTurn + " wins!");
    } else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      setTimeout(function() { reset(); }, 2000);
      alert ("Player " + currentTurn + " wins!");
    } else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      setTimeout(function() { reset(); }, 2000);
      alert ("Player " + currentTurn + " wins!");
    } else {
      gameOn = false;
    }
  }



});
