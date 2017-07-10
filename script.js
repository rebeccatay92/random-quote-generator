
$(document).ready(function () {
  $randomize = $('.randomize')
  $randomize.on('click', function () {
    var unirest = require('unirest')
    unirest.get("https://andruxnet-random-famous-quotes.p.mashape.com/?count=1")
    .header("X-Mashape-Key", "owvMAyypLOmshrOID11n1DqVdCJop1HCxP8jsn1grirRBqFfZq")
    .header("Accept", "application/json")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
  })
}) // close doc.ready
