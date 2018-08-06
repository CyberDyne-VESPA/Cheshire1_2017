var assert = require('assert');
var fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

//tests for Cheshire bot
describe('Cheshire', function() {
  it('is ready for tests', function() {
    assert.equal(1+1,2);
  });

  it('is grabbing token successfully from discord_token', function() {
    fs.readFile('./discord_token', 'utf8', function(error, data) {
        if (error) {
            //if there's an error here, test failed
            assert(false);
        }
        //no errors, file was read, test passed
        assert(true);
    });
  });

  it('is logging into Discord client', function() {
    fs.readFile('./discord_token', 'utf8', function(error, data) {
        if (error) {
            //if there's an error here, test failed
            assert(false);
        }
        //no errors, file was read, try logging in
        client.on('ready', () => {
          assert(true);
          //close connections and logout
          client.logout();
        });

        //login with discord token with newlines and spaces stripped
        client.login(data.replace(/\s/g, ''));
    });
  });
});
