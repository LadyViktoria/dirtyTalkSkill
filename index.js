var Alexa = require('alexa-sdk');

var reprompts = [
  "Möchtest du mehr",
  "Magst du mehr <phoneme alphabet='ipa' ph='\"d3`ti tOk'>Dirty Talk</phoneme>",
  "Willst du noch mehr Schweinereien",
  "Soll ich dich weiter bezirzen",
  "Wollen wir uns weiter amüsieren",
  "Erträgst du noch mehr",
  "Sollen wir fortfahren",
  "Haben wir Zeit für mehr",
  "Kannst du noch was aushalten",
  "Gefällt dir das",
  "Magst du das"
];

var dirtyMessages = [
  "Du bekommst gleich den Aal abgezogen,",
  "Ich versohl dir den Hintern,",
  "Du machst mich ganz <phoneme alphabet='ipa' ph='ˈvʊʃɪç'>wuschig</phoneme>,",
  "Ich schüttel dir die Palme,",
  "Ich butter dir dein Brötchen,",
  "Ich bin spitz wie Nachbars Lumpi,",
  "Butter mir mein Brötchen,",
  "Ich zieh dir gleich die Pfeife trocken,",
  "Hinten ist die Henne fett,",
  "Putz mir die Perle,",
  "Ich schnäuz dir den Kasper,",
  "Dein Lachs gehört gebuttert,",
  "Lass mich deine Lewinsky sein,",
  "Ich liebe es Eier auszublasen,",
  "Lass mich von deinem Nektar kosten,",
  "Komm mit mir in den braunen Salon,",
  "Ich möchte deinen Jürgen würgen,",
  "Vernasch mein Dörrobst,",
  "Gib mir Tiernamen,",
  "Ich möchte deinen Maiskolben grillen,",
  "Kratz' mich, beiss' mich, gib mir Tiernamen,",
  "Setz dich auf meinen Dorn,",
  "Lass uns dem Storch arbeit geben,",
  "Giess Sahne in meinen Kaffee,",
  "Giess mir Sahne in meinen Kaffee,",
  "Es ist mal wieder Zeit für ein Mokkastößchen,",
  "Wir müssen mal wieder horizontalen Tango tanzen,",
  "Ich will körperlich kollidieren,",
  "Ich schüttel dir gleich am Baum,",
  "Lass uns Rohre verlegen,",
  "Es ist Zeit für ein Flötenkonzert,",
  "Zieh mich über deinen Docht,",
  "Zieh mich über deinen Kolben,",
  "Fütter meine Schnecke,",
  "Ich will Flöte lernen,",
  "Bürste mir den Ofen aus,",
  "Ich hab Lust auf Herrensahne,",
  "Jetzt wird erst mal richtig abgesahnt,",
  "Ab in die Mokkabude,",
  "Leck mich am Zückerli,",
  "Wasch mir die Wanne aus,",
  "Streich mir die Kerze,",
  "Lass mich deine kleinen Schwimmer befreien,",
  "Ich hau dir auf den Spitz,",
  "Lass uns in den bewaldeten Süden vorstoßen,",
  "Wir müssen die Schlange verstecken,",
  "Ich hab lust auf Schiffe versenken,",
  "Ich möchte auf dem dritten Bein stehen,",
  "Es ist Zeit, dass du auf der G-Saite spielst,",
  "Du willst mich wohl aufs Kreuz legen,",
  "Ich will das Besteck in das Silberbad tunken,",
  "Such das Blümchen,",
  "Lade mich auf deinen Besen,",
  "Wo ist denn das Stehaufmännchen?",
  "Ich will den Aal zucken lassen,",
  "Der Acker muss mal wieder gepflügt werden,",
  "Steck den Kopf ins Loch,",
  "Ich putz dir den Lauf,",
  "Heiz meinen Ofen,",
  "Lass mal deinen Specht hacken,",
  "Lass deinen Vize singen,",
  "Schwenk die Fahne,",
  "Ich geige dir gleich was,",
  "Rühr mir im Fleischtopf,",
  "Wir sollten nach Öl bohren,",
  "Giess mir Öl in die Lampe,",
  "Rühr mich schaumig,",
  "Niess mir unters Kinn,"
];

var pronomen = ["du", "mein", "mein"];
var Anrede = [
  "Strolch",
  "Jeck",
  "Schwerenöter",
  "Doktor",
  "Meister",
  "Chef",
  "Liebling",
  "Honey",
  "Baby",
  "Darling",
  "Cheri",
  "Süßer",
  "Seestern",
  "Katerchen",
  "Prinz",
  "Boss",
  "König",
  "Sklave",
  "starker Mann",
  "Schwächling",
  "Delfin",
  "böser Delfin",
  "Kasper",
  "kleiner Wicht",
  "Sweetheart",
  "Sugar",
  "Frechdachs",
  "Adonis",
  "Amor",
  "Captain",
  "Casanova",
  "Champ",
  "Cheffkoch",
  "Dreamboy",
  "Flußpferd",
  "Goldstück",
  "Gott",
  "Göttergatte",
  "Großer",
  "Hero",
  "König",
  "Lover",
  "Moppelchen",
  "Ömmelchen",
  "Polarstern",
  "Prinz",
  "Purzel",
  "Puschelchen",
  "Pusteblume",
  "Quarktörtchen",
  "Rackerchen",
  "Schäfchen",
  "Schaumprinz",
  "Schöner",
  "Sexy",
  "Sternenstaub",
  "Strahlemann",
  "Sunny",
  "Sunnyboy",
  "Sunshine",
  "Teufelchen",
  "Tiger",
  "Träumer",
  "Traumprinz",
  "Undercoverengel",
  "Urmel",
  "Veilchen",
  "Vulkan",
  "Waffeleisenprinz",
  "wilder Tiger",
  "Yuppie",
  "Zauberer",
  "Zauberwesen",
  "Zeus",
  "Zimttiger",
  "Zorro",
  "Zottel",
  "Otto",
  "Zwergbüffel"
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getAnsprache() {
  var AnspracheOptions = ["", " " + pronomen[getRandomInt(0, pronomen.length)] + " " + Anrede[getRandomInt(0, Anrede.length)], " " + pronomen[getRandomInt(0, pronomen.length)] + " " + Anrede[getRandomInt(0, Anrede.length)]]
  return AnspracheOptions[getRandomInt(0, 3)];
}

function getReprompt() {
  return reprompts[getRandomInt(0, reprompts.length)] + getAnsprache() + "?";
}

function getDirtyTalkMessage() {
  return dirtyMessages[getRandomInt(0, dirtyMessages.length)] + getAnsprache() + "!";
}

function doDirtyTalk(message) {
  this.emit(':ask', message + "<break time=\"1s\"/>" + getReprompt(), getReprompt());
}

function startDirtyTalk() {
  this.emit(':ask', "Wer war böse?", getReprompt());
}

var handlers = {
    'LaunchRequest': function () {
        startDirtyTalk.call(this);
    },
    'Unhandled': function() {
      this.emit("AMAZON.HelpIntent");
    },
    'AMAZON.NoIntent': function() {
      this.emit("CloseSession");
    },
    'AMAZON.YesIntent': function() {
      doDirtyTalk.call(this, getDirtyTalkMessage());
    },
    'TalkDirtyIntent': function () {
      doDirtyTalk.call(this, getDirtyTalkMessage());
    },
    'CloseSession': function() {
      this.emit(':tell', "Bis zum nächsten mal. Du kleiner Schmutzfink");
    },
    'AMAZON.CancelIntent': function() {
      this.emit("CloseSession");
    },
    'AMAZON.StopIntent': function() {
      this.emit("CloseSession");
    },
    'AMAZON.HelpIntent': function() {
      this.emit(":ask", "Starte den Skill mit dem Kommando 'Starte Dirty Talk'. Zwischen den Ansagen kannst du mit beliebigen Ansagen wie zum Beispiel 'Mehr' oder 'Weiter' nach weiteren Sprüchen verlangen. Möchtest du jetzt etwas Dirty Talk, du kleiner Schwerenöter?");
    }
 };

 exports.handler = function(event, context, callback) {
      var alexa = Alexa.handler(event, context);
      alexa.registerHandlers(handlers);
      alexa.execute();
  };