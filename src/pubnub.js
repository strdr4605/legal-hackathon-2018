import PubNub from 'pubnub';
import mockingcase from 'mockingcase';

export default function publish(inputMessage, resCallback) {

  let pubnub = new PubNub({
    publishKey : 'pub-c-1a697ca1-a44c-4999-b61d-b77efa627ab4',
    subscribeKey : 'sub-c-e7aad000-fac1-11e8-80f1-b6259b5c8742'
  });

  function publishSampleMessage() {
    console.log(mockingcase('Since we\'re publishing on subscribe connectEvent, we\'re sure we\'ll receive the following publish.', {random: true}));
    let publishConfig = {
      channel : 'Judge',
      message: inputMessage
    };
    pubnub.publish(publishConfig, function(status, response) {
      console.log(status, response);
    });
  }

  pubnub.addListener({
    status: function(statusEvent) {
      if (statusEvent.category === 'PNConnectedCategory') {
        publishSampleMessage();
      }
    },
    message: function(msg) {
      console.log(msg.message.name);
      if(msg.message.name) resCallback(msg.message.name);
    },
    presence: function(presenceEvent) {
      // handle presence
    }
  });
  console.log(mockingcase('Subscribing..', {random: true}));
  pubnub.subscribe({
    channels: ['Judge', 'Attourney']
  });
}
