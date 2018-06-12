/*global contract, config, it*/
const assert = require('assert');
const Auction = require('Embark/contracts/auction');

config({
    contracts: {
        "auction": {
          args: [
            "0x4a17f35f0a9927fb4141aa91cbbc72c1b31598de",
            100,
            200
          ]
        }
    }
});

describe("Auction", function() {
  this.timeout(0);

  it("should deploy using the plugin", async function() {
    assert.ok(Auction.address);
  });

});
