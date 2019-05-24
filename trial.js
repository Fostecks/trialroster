const Roster = require("./roster.js");

function Trial(userID) {

  let userID = userID;
  let trialName;
  let trialTime;
  let discordChannelDestination;
  let discordGroupsToPing = [];
  let description;
  let roles = [];
  
  let complete = false;
  let onCompleteListener;

  let checkComplete = function() {
    complete =  userID && trialName && trialTime && description && !roles.length;

    if(complete) {
      onCompleteListener();
    }
  }

  return {
    withTrialName : function(name) {
      trialName = name;
      checkComplete();
      return this;
    },
  
    withDescription : function(desc) {
      description = desc;
      checkComplete();
      return this;
    },
  
    setTime : function(time) {
      trialTime = time;
      checkComplete();
      return this;
    },

    setDiscordChannelDestination: function(destinationChannel) {
      discordChannelDestination = destinationChannel;
      checkComplete();
      return this;
    },
  
    setGroupsToPing : function(groupsToPing) {
      discordGroupsToPing = groupsToPing;
      checkComplete();
      return this;
    },
  
    setRoles : function(roleArr) {
      roles = roleArr;
      checkComplete();
      return this;
    },
  
    onComplete : function(onComplete) {
      onCompleteListener = onComplete;
      return this;
    },
  
    toRoster : function() {
      if(complete) {
        return new Roster(trialName, trialTime, description, userID, discordGroupsToPing, roles);
      }
      else {
        throw new Error("Roster not complete");
      }
    }
  }  
}