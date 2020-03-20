const indexExports = require("../index.js");
const Trial = require("../trial.js");

module.exports = {
	name: 'preset',
	description: 'Set current roster to a preconfigured trial. Format: (n/v)trial[+1/+2/hm]',
	execute(message, args) {
        let bot = indexExports.bot;
        let trial = bot.trialMap[message.author.id];
        let rosterMessage = trial.rosterMessage;

        let preset = message.content.split(" ").slice(1);

        let roleString = "";

        switch(preset) {
            case "aa":
            case "naa":
            case "vaa":
            case "vaahm":
                roleString = "1 Tank, 2 Healer, 9 DPS";
                break;

            case "hrc":
            case "nhrc":
            case "vhrc":
            case "vhrchm":
                roleString = "1 Main Tank, 1 Off Tank, 2 Healer, 8 DPS";
                break;
           
            case "nso":
                roleString = "1 Tank, 1 Healer, 10 DPS";
                break;
            case "so":
            case "vso":
            case "vsohm":
                roleString = "1 Main Tank, 1 Off Tank, 2 Healer, 8 DPS";
                break;

            case "mol":
            case "nmol":
            case "vmol":
            case "vmolhm":
                roleString = "1 Main Tank, 1 Off Tank, 2 Healer, 8 DPS";
                break;

            case "hof":
            case "nhof":
            case "vhof":
            case "vhofhm":
                roleString = "1 Main Tank, 1 Off Tank, 2 Healer, 8 DPS";
                break;

            case "nas+0":
            case "vas":
            case "vas+0":
            case "as":
                roleString = "1 Tank, 1 Tank Healer, 1 Group Healer, 1DPS, 2DPS, 3DPS, 4DPS, 5DPS, 6DPS, 7DPS, 8DPS, 9DPS";
                break;
            case "nas+1":
            case "nas+felms":
            case "nas+lothis":
            case "vas+1":
            case "vas+felms":
            case "vas+lothis":
            case "nas+2":
            case "vas+2":
            case "vashm":
                roleString = "1 Main Tank, 1 Off Tank, 1 Tank Healer, 1 Group Healer, 1DPS, 2DPS, 3DPS, 4DPS, 5DPS, 6DPS, 7DPS, 8DPS";
                break;

            case "ncr":
            case "ncr+0":
                roleString = "1 Tank, 1 Healer, 10 DPS";
                break;
            case "cr":
            case "vcr":
            case "vcr+0":
                roleString = "Mini Tank, Group Healer, Kite Healer, Orb DPS, , Portal 1 Tank, 2 Portal 1 DPS, Backup Portal 1 DPS, , Portal 2 Tank, 2 Portal 2 DPS, Backup Portal 2 DPS";
                break;
            case "vcr+1":
            case "vcr+rele":
            case "vcr+relequen":
            case "vcr+lightning":
            case "vcr+galenwe":
            case "vcr+2":
                roleString = "Mini Tank, Group Healer, Kite Healer, Orb DPS, , Portal 1 Tank, 2 Portal 1 DPS, Portal 1 Backup DPS, , Portal 2 Tank, 2 Portal 2 DPS, Portal 2 Backup DPS";
                break;
            case "vcr+fire":
            case "vcr+fire/ice":
            case "vcr+fire/lightning":
            case "vcr+3":
            case "vcrhm":
                roleString = "Mini Tank, L GH, R KH, R Orb DPS, , R Portal 1 Tank, 2 L Portal 1 DPS, R Portal 1 Backup DPS, , R Portal 2 Tank, 2 L Portal 2 DPS, R Portal 2 Backup DPS";
                break;

            case "nss":
                roleString = "1 Tank, 1 Healer, 10 DPS";
                break;
            case "ss":
            case "vss":
            case "vss+firehm":
                    roleString = "Main Tank, Off Tank, 2 Healer, 4 HDPS, WDPS, WDPS (Cage 1)(Left Portal), WDPS (Cage 2)(Middle Portal), WDPS (Cage 3)(Right Portal)";
                break;
            case "vss+icehm":
            case "vsshm": 
                roleString = "Main Tank, Off Tank, 2 Healer, HDPS, HDPS (Cage 1.1), HPDS (Cage 2.1), HDPS (Cage 3.1) WDPS, WDPS (Cage 1.2)(Left Portal), WDPS (Cage 2.2)(Middle Portal), WDPS (Cage 3.2)(Right Portal)";
                break;
        }



        rosterMessage.edit(trial.withRole(roleString).toRichText()[1]);
    },
};