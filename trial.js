const Roster = require("./roster.js");
const discord = require("discord.js");
function Trial(user) {

  let userID = user.id;
  let userName = "!username"
  let trialName = "!trialname";
  let trialTime = "!trialtime";
  let discordGuildDestination;
  let discordChannelDestination;
  let discordGroupsToPing = "!groupsToPing";
  let description = "!description";
  let roles = ["!roles", "MT", "OT", "H", "DPS"];
  let isCancelled = false;
  
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
  
    withTime : function(time) {
      trialTime = time;
      checkComplete();
      return this;
    },

    withDiscordChannelDestination: function(destinationChannel) {
      discordChannelDestination = destinationChannel;
      checkComplete();
      return this;
    },

    withDiscordGuildDestination: function(destinationGuild) {
      discordGuildDestination = destinationGuild;
      checkComplete();
      return this;
    },
  
    withGroupsToPing : function(groupsToPing) {
      discordGroupsToPing = groupsToPing;
      checkComplete();
      return this;
    },
  
    withRoles : function(roleArr) {
      roles = roleArr;
      checkComplete();
      return this;
    },

    withUsername: function(name) {
      userName = name;
      checkComplete();
      return this;
    },
  
    onComplete : function(onComplete) {
      onCompleteListener = onComplete;
      return this;
    },
  
    toRoster : function() {
      if(complete) {
        return new Roster(trialName, trialTime, description, userID, discordChannelDestination, discordGuildDestination, discordGroupsToPing, roles);
      }
      else {
        throw new Error("Roster not complete");
      }
    },

    getTitle: function() {
      return trialName + "-" + trialTime;
    },

    toString: function() {
      let roleString = "";
      roles.forEach(role => roleString += role + ":\n");
      return userName + "'s Trial: " + trialName + "\n"
        + discordGroupsToPing + "\n"
        + description + "\n\n" 
        + roleString;
     
    },

    toRichText: function() {
      let roleString = "";
      roles.forEach(role => roleString += role + ":\n");

      return [ discordGroupsToPing, "```css\n" +
      "[" + trialName + " by " + userName +"]\n" +
      description + "\n\n" +
      roleString + 
      "```"];
    },

    _getUserName: function() {
      return userName;
    },
    _getDescription: function() {
      return description;
    }
  }  
}

module.exports = Trial;