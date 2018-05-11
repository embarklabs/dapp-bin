import EmbarkJS from 'Embark/EmbarkJS';
import $ from 'jquery';
import Token from 'Embark/contracts/Token';

window.Token = Token;

$(document).ready(function() {

  web3.eth.getAccounts(function(err, accounts) {
    $('#queryBalance input').val(accounts[0]);
  });

  $('#queryBalance button').click(function() {
    var address = $('#queryBalance input').val();
    Token.methods.balanceOf(address).call().then(function(balance) {
      $('#queryBalance .result').html(balance);
    });
  });

  $('#transfer button').click(function() {
    var address = $('#transfer .address').val();
    var num = $('#transfer .num').val();

    Token.methods.transfer(address, num).send().then(function() {
      $('#transfer .result').html('Done!');
    });;
  });

});

