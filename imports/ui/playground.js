//playground.js

import './playground.html';
import { Template } from 'meteor/templating';
import '../api/musicMachine.js';
import '../api/maxim.js';
import { _ } from 'meteor/underscore'

// it replaces
// Original line - pg_context = new webkitAudioContext() || new AudioContext;
// Replaced by below try except block

try {
    pg_context = new webkitAudioContext();
    } catch (e){
    if (e instanceof ReferenceError) {
      pg_context = new AudioContext;
    }
} // catch

//Now we can create an instance of our waveform generator and play it.

// waveform = new Synth(pg_context);

// Add songs
dance = new Maxim();
dreams = new Maxim();
dubstep = new Maxim();
endlessmotion = new Maxim();
erf = new Maxim();
house = new Maxim();
moose = new Maxim();
popdance = new Maxim();
scifi = new Maxim();
summer = new Maxim();
dark = new Maxim();
shiva = new Maxim();
tejaswi = new Maxim();
stringy = new Maxim();
quantity = new Maxim();
//failedExperiment = new Maxim();
evilEyes = new Maxim();
//mile = new Maxim();


// Load song files

//failedExperimentPlayer = failedExperiment.loadFile("/bensound-failedExperiment.mp3");
//failedExperimentPlayer.loop
evilEyesPlayer = evilEyes.loadFile("/bensound-evilEyes.mp3");
evilEyesPlayer.loop
//milePlayer = mile.loadFile("/bensound-mile.mp3");
//milePlayer.loop
quantityPlayer = quantity.loadFile("/bensound-quantity.mp3");
quantityPlayer.loop
stringyPlayer = stringy.loadFile("/bensound-stringy.mp3");
stringyPlayer.loop
tejaswiPlayer = tejaswi.loadFile("/bensound-tejaswi.mp3");
tejaswiPlayer.loop
shivaPlayer = shiva.loadFile("/bensound-shiva.mp3");
shivaPlayer.loop
darkPlayer = dark.loadFile("/bensound-dark.mp3");
darkPlayer.loop
dancePlayer = dance.loadFile("/bensound-dance.mp3");
dancePlayer.loop
dreamsPlayer = dreams.loadFile("/bensound-dreams.mp3");
dreamsPlayer.loop
dubstepPlayer = dubstep.loadFile("/bensound-dubstep.mp3");
dubstepPlayer.loop
endlessmotionPlayer = endlessmotion.loadFile("/bensound-endlessmotion.mp3");
endlessmotionPlayer.loop
erfPlayer = erf.loadFile("/bensound-erf.mp3");
erfPlayer.loop
housePlayer = house.loadFile("/bensound-house.mp3");
housePlayer.loop
moosePlayer = moose.loadFile("/bensound-moose.mp3");
moosePlayer.loop
popdancePlayer = popdance.loadFile("/bensound-popdance.mp3");
popdancePlayer.loop
scifiPlayer = scifi.loadFile("/bensound-scifi.mp3");
scifiPlayer.loop
summerPlayer = summer.loadFile("/bensound-summer.mp3");
summerPlayer.loop

// Play and stop functions

stopOrPlayDark = function(volume) {
  darkPlayer.volume(volume);
}

stopOrPlayShiva = function(volume) {
  shivaPlayer.volume(volume);
} 

stopOrPlayTejaswi = function(volume) {
  tejaswiPlayer.volume(volume);
}

stopOrPlayStringy = function(volume) {
  stringyPlayer.volume(volume);
}

stopOrPlayQuantity = function(volume) {
  quantityPlayer.volume(volume);
}

/*stopOrPlayMile = function(volume) {
  milePlayer.volume(volume);
}*/

stopOrPlayEvilEyes = function(volume) {
  evilEyesPlayer.volume(volume);
} 

/* stopOrPlayfailedExperiment = function(volume) {
  failedExperimentPlayer.volume(volume);
} */

stopOrPlayDance = function(volume) {
  dancePlayer.volume(volume);
} 

stopOrPlayDreams = function(volume) {
  dreamsPlayer.volume(volume)
}

stopOrPlayDubstep = function(volume) {
  dubstepPlayer.volume(volume)
}

stopOrPlayEndlessmotion = function(volume) {
  endlessmotionPlayer.volume(volume)
}

stopOrPlayErf = function(volume) {
  erfPlayer.volume(volume)
}

stopOrPlayHouse = function(volume) {
  housePlayer.volume(volume)
}

stopOrPlayMoose = function(volume) {
  moosePlayer.volume(volume)
}

stopOrPlayPopdance = function(volume) {
  popdancePlayer.volume(volume)
}

stopOrPlayScifi = function(volume) {
  scifiPlayer.volume(volume)
}

stopOrPlaySummer = function(volume) {
  summerPlayer.volume(volume)
}


playAll = function() {
	dancePlayer.play();
	dreamsPlayer.play();
  dubstepPlayer.play();
  endlessmotionPlayer.play();
  erfPlayer.play();
  housePlayer.play();
  moosePlayer.play();
  popdancePlayer.play();
  scifiPlayer.play();
  summerPlayer.play();
  darkPlayer.play();
  shivaPlayer.play();
  //failedExperimentPlayer.play();
  evilEyesPlayer.play();
  //milePlayer.play();
  quantityPlayer.play();
  tejaswiPlayer.play();
  stringyPlayer.play();
}


stopAll = function() {
 evilEyesPlayer.stop();
  //milePlayer.stop();
  quantityPlayer.stop();
  tejaswiPlayer.stop();
  stringyPlayer.stop();
  //failedExperimentPlayer.stop();
  shivaPlayer.stop();
  dancePlayer.stop();
  darkPlayer.stop();
  dreamsPlayer.stop();
  dubstepPlayer.stop();
  endlessmotionPlayer.stop();
  erfPlayer.stop();
  housePlayer.stop();
  moosePlayer.stop();
  popdancePlayer.stop();
  scifiPlayer.stop();
  summerPlayer.stop();
}


setSpeed = function(speed) {
	dancePlayer.speed(speed);
	dreamsPlayer.speed(speed);
	dubstepPlayer.speed(speed);
	endlessmotionPlayer.speed(speed);
  erfPlayer.speed(speed);
  housePlayer.speed(speed);
  moosePlayer.speed(speed);
  popdancePlayer.speed(speed);
  scifiPlayer.speed(speed);
  summerPlayer.speed(speed);
  evilEyesPlayer.speed(speed);
  //milePlayer.speed(speed);
  quantityPlayer.speed(speed);
  tejaswiPlayer.speed(speed);
  stringyPlayer.speed(speed);
  //failedExperimentPlayer.Speed(speed);
  shivaPlayer.speed(speed);
  darkPlayer.speed(speed);
}


Template.playground.helpers({

    "startdac": function () {
      var starter = MusicMachine.findOne();

      if (starter) {
        Session.set('startdac', starter.start)
        if (starter.start==1) {
          playAll();
        }
        else if (starter.start==0){
          stopAll();
        }
      }
      return Session.get('startdac');
    },

   "dance": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('dance', starter.dance)
        stopOrPlayDance(starter.dance)
      }
      return Session.get('dance');
    },

    "dreams": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('dreams', starter.dreams)
        stopOrPlayDreams(starter.dreams)
      }
      return Session.get('dreams');
    },

    "dubstep": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('dubstep', starter.dubstep)
        stopOrPlayDubstep(starter.dubstep)
      }
      return Session.get('dubstep');
	},

    "endlessmotion": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('endlessmotion', starter.endlessmotion)
        stopOrPlayEndlessmotion(starter.endlessmotion)
      }
      return Session.get('endlessmotion');
    },
    
    "erf" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('erf', starter.erf)
        stopOrPlayErf(starter.erf)
      }
      return Session.get('erf')
    },

    "house" : function() {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('house', starter.house)
        stopOrPlayHouse(starter.house)
      }
      return Session.get('house')
    },

    "moose": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('moose', starter.moose)
        stopOrPlayMoose(starter.moose)
      }
      return Session.get('moose');
    },

    "popdance": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('popdance', starter.popdance)
        stopOrPlayPopdance(starter.popdance)
      }
      return Session.get('popdance');
    },

    "scifi": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('scifi', starter.scifi)
        stopOrPlayScifi(starter.scifi)
      }
      return Session.get('scifi');
    },

    "summer": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('summer', starter.summer)
        stopOrPlaySummer(starter.summer)
      }
      return Session.get('summer');
    },

    "evilEyes": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        Session.set('evilEyes', starter.evilEyes)
        stopOrPlayEvilEyes(starter.evilEyes)
      }
      return Session.get('evilEyes');
    },

    "dark" : function() {
     var starter =MusicMachine.findOne();
     if(starter) {
       Session.set('dark' ,starter.dark)
       stopOrPlayDark(starter.dark)
     }
     return Session.get('dark'); 
    },
    
    "shiva" : function() {
      var starter =MusicMachine.findOne();
      if(starter) {
        Session.set('shiva' ,starter.shiva)
        stopOrPlayShiva(starter.shiva)
      }
      return Session.get('shiva'); 
     },
     
     "tejaswi" : function() {
      var starter =MusicMachine.findOne();
      if(starter) {
        Session.set('tejaswi' ,starter.tejaswi)
        stopOrPlayTejaswi(starter.tejaswi)
      }
      return Session.get('tejaswi'); 
     }, 

     "stringy" : function() {
      var starter =MusicMachine.findOne();
      if(starter) {
        Session.set('stringy' ,starter.stringy)
        stopOrPlayStringy(starter.stringy)
      }
      return Session.get('stringy'); 
     }, 

     "quantity" : function() {
      var starter =MusicMachine.findOne();
      if(starter) {
        Session.set('quantity' ,starter.quantity)
        stopOrPlayQuantity(starter.quantity)
      }
      return Session.get('quantity'); 
     }, 

    "sliderValue":  function() { 
      var slider = MusicMachine.findOne();
      if (slider) { 
        Template.instance().$('#slider').data('uiSlider').value(slider.slide);
        setSpeed(slider.slide/50);
        return slider.slide;
        }
    }
});

Template.playground.events({

     "click .js-masterButton": function () {
       var c = Session.get('startdac')
       var mach = MusicMachine.findOne({});
      if (c === 0) {
        Session.set('startdac', 1)
        MusicMachine.update({ _id: mach._id }, {$set: {start: 1}});
      } else {
        Session.set('startdac', 0)
        MusicMachine.update({ _id: mach._id }, {$set: {start: 0}});
      }
     },

     "click .js-controlStringy": function () {
        var c = Session.get('stringy')
        var mach = MusicMachine.findOne({});
        if (c === 0) {
            Session.set('stringy', 1)
            MusicMachine.update({ _id: mach._id }, {$set: {stringy: 1}});
        } else {
            Session.set('stringy', 0)
            MusicMachine.update({ _id: mach._id }, {$set: {stringy: 0}});
        }
      },

      "click .js-controlQuantity": function () {
        var c = Session.get('quantity')
        var mach = MusicMachine.findOne({});
        if (c === 0) {
            Session.set('quantity', 1)
            MusicMachine.update({ _id: mach._id }, {$set: {quantity: 1}});
        } else {
            Session.set('quantity', 0)
            MusicMachine.update({ _id: mach._id }, {$set: {quantity: 0}});
        }
      },

     "click .js-controlShiva": function () {
        var c = Session.get('shiva')
        var mach = MusicMachine.findOne({});
        if (c === 0) {
            Session.set('shiva', 1)
            MusicMachine.update({ _id: mach._id }, {$set: {shiva: 1}});
        } else {
            Session.set('shiva', 0)
            MusicMachine.update({ _id: mach._id }, {$set: {shiva: 0}});
        }
      },

      "click .js-controlTejaswi": function () {
        var c = Session.get('tejaswi')
        var mach = MusicMachine.findOne({});
        if (c === 0) {
            Session.set('tejaswi', 1)
            MusicMachine.update({ _id: mach._id }, {$set: {tejaswi: 1}});
        } else {
            Session.set('tejaswi', 0)
            MusicMachine.update({ _id: mach._id }, {$set: {tejaswi: 0}});
        }
      },

    "click .js-controlDark": function () {
        var c = Session.get('dark')
        var mach = MusicMachine.findOne({});
        if (c === 0) {
            Session.set('dark', 1)
            MusicMachine.update({ _id: mach._id }, {$set: {dark: 1}});
        } else {
            Session.set('dark', 0)
            MusicMachine.update({ _id: mach._id }, {$set: {dark: 0}});
        }
    },

     "click .js-controlevilEyes": function () {
        var c = Session.get('evilEyes')
        var mach = MusicMachine.findOne({});
        if (c === 0) {
          Session.set('evilEyes', 1)
          MusicMachine.update({ _id: mach._id }, {$set: {evilEyes: 1}});
        } else {
          Session.set('evilEyes', 0)
          MusicMachine.update({ _id: mach._id }, {$set: {evilEyes: 0}});
      }
    },

    "click .js-controlDance": function () {
        var c = Session.get('dance');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('dance', 1);
            MusicMachine.update({_id:mach._id}, {$set: {dance: 1}});
        } else {
            Session.set('dance', 0);
            MusicMachine.update({_id:mach._id}, {$set: {dance: 0}});
        }
    },

    "click .js-controlDreams": function () {
        var c = Session.get('dreams');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('dreams', 1);
            MusicMachine.update({_id:mach._id}, {$set: {dreams: 1}});
        } else {
            Session.set('dreams', 0);
            MusicMachine.update({_id:mach._id}, {$set: {dreams: 0}});
        }
    },

    "click .js-controlDubstep": function () {
        var c = Session.get('dubstep');
        var mach = MusicMachine.findOne({});

        if (c === 0){
          Session.set('dubstep', 1);
          MusicMachine.update({_id:mach._id}, {$set: {dubstep: 1}});
        } else {
          Session.set('arp', 0);
          MusicMachine.update({_id:mach._id}, {$set: {dubstep: 0}});
        }
    },

    "click .js-controlEndlessmotion": function () {
        var c = Session.get('endlessmotion');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('endlessmotion', 1);
            MusicMachine.update({_id:mach._id}, {$set: {endlessmotion: 1}});
        } else {
            Session.set('endlessmotion', 0);
            MusicMachine.update({_id:mach._id}, {$set: {endlessmotion: 0}});
        }
    },

    "click .js-controlErf": function () {
        var c = Session.get('erf');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('erf', 1);
            MusicMachine.update({_id:mach._id}, {$set: {erf: 1}});
        } else {
            Session.set('erf', 0);
            MusicMachine.update({_id:mach._id}, {$set: {erf: 0}});
        }
    },

    "click .js-controlHouse": function () {
        var c = Session.get('house');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('house', 1);
            MusicMachine.update({_id:mach._id}, {$set: {house: 1}});
        } else {
            Session.set('house', 0);
            MusicMachine.update({_id:mach._id}, {$set: {house: 0}});
        }
    },

    "click .js-controlMoose": function () {
        var c = Session.get('moose');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('moose', 1);
            MusicMachine.update({_id:mach._id}, {$set: {moose: 1}});
        } else {
            Session.set('moose', 0);
            MusicMachine.update({_id:mach._id}, {$set: {moose: 0}});
        }
    },

    "click .js-controlPopdance": function () {
        var c = Session.get('popdance');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('popdance', 1);
            MusicMachine.update({_id:mach._id}, {$set: {popdance: 1}});
        } else {
            Session.set('popdance', 0);
            MusicMachine.update({_id:mach._id}, {$set: {popdance: 0}});
        }
    },

    "click .js-controlScifi": function () {
        var c = Session.get('scifi');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('scifi', 1);
            MusicMachine.update({_id:mach._id}, {$set: {scifi: 1}});
        } else {
            Session.set('scifi', 0);
            MusicMachine.update({_id:mach._id}, {$set: {scifi: 0}});
        }
    },

    "click .js-controlSummer": function () {
        var c = Session.get('summer');
        var mach = MusicMachine.findOne({});

        if (c === 0){
            Session.set('summer', 1);
            MusicMachine.update({_id:mach._id}, {$set: {summer: 1}});
        } else {
            Session.set('summer', 0);
            MusicMachine.update({_id:mach._id}, {$set: {summer: 0}});
        }
    },

 });

 Template.playground.onRendered(function() {
	$('h2').hide();
    var handler = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide: ui.value}});
	}, 50, { leading: false });
	
    
    if (!this.$('#slider').data('uiSlider')) {
        $("#slider").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
});
