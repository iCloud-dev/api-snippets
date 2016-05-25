// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var authToken = "{{ auth_token }}";
var client = require('twilio')(accountSid, authToken);

client.transcriptions.list(function(err, data) {
    data.transcriptions.forEach(function(transcription) {
        console.log(transcription.TranscriptionText);
    });
});