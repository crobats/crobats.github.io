/** All the frog cardes. All frogs are safe in here.

Copy/Paste Frog object:

'NameOfFrog': {
  'name': 'Full Name of Frog'
  'image': 'images/url.png', <- image url, image must be in the images folder
  'description': 'desc',
  'artist': 'name'
},

Note if 'NameOfFrog' has a duplicate, it will go to the last duplicate

 */

 var artists = {
   'finch': 'illufinch',
   'matt': 'mattFdraws',
   'slide': 'came2slide',
   'elena': 'ElenaNazaire',
   'frogapples': 'frogapples',
   'funnyunfunny': 'funnily_unfunny',
   'imaginarymon': 'imaginarymon',
   'instantonion': 'instantonion',

 }

var FROG_CARDS = {
  /* -------------------------- COMMON FROG OBJECT ------------------------ */
  'common': {
    'frogband-trumpet': {
      'name': 'Frog Band',
      'image': 'images/cards/frogband-trumpet.png',
      'description': 'he doot the floot. +40 music, +70 hat',
      'artist': artists.finch,
    },
    'frogband-drums': {
      'name': 'Frog Band',
      'image': 'images/cards/frogband-drums.png',
      'description': 'tapataptap. +40 music +6 drum solos',
      'artist': artists.finch,
    },
    'frogband-sax': {
      'name': 'Frog Band',
      'image': 'images/cards/frogband-sax.png',
      'description': 'ran out of breath fast. +40 music, +2 toot toot',
      'artist': artists.finch,
    },
    'frogtoast': {
      'name': 'Frog Toast',
      'image': 'images/cards/frogtoast.png',
      'description': 'sells well on ebay. + $500',
      'artist': artists.finch,
    },
    'candyfrog': {
      'name': 'Candy Frog',
      'image': 'images/cards/candy.png',
      'description': 'mystery flavor. +1 candy',
      'artist': artists.finch,
    },
    'thecroak': {
      'name': 'The Croak',
      'image': 'images/cards/croak.png',
      'description': 'pog flyin. +20 poggies',
      'artist': artists.slide
    },
    'longfrog': {
      'name': 'Frooooog',
      'image': 'images/cards/longfrog.png',
      'description': 'long frog. +3 length',
      'artist': artists.frogapples
    },
    'homelessfrog': {
      'name': 'Homeless Frog',
      'image': 'images/cards/homeless.png',
      'description': 'home is where the frog is. -1 home',
      'artist': artists.frogapples
    },
    'frogprince': {
      'name': 'Frog Prince',
      'image': 'images/cards/frogprince.png',
      'description': 'a little sleepy. +1 crown +3 hour nap',
      'artist': artists.finch,
    },
    'frogbrella': {
      'name': 'Frogbrella',
      'image': 'images/cards/frogbrella.png',
      'description': 'mystically enchanted to be water proof. +1 enchantment +0 water',
      'artist': artists.finch,
    },
    'skater': {
      'name': 'Sk8r Frog',
      'image': 'images/cards/skater.png',
      'description': 'sick flip bro! +1 flip +3 woha +7 rad',
      'artist': artists.finch,
    },
    'slime': {
      'name': 'Slime Frog',
      'image': 'images/cards/slime.png',
      'description': 'jiggle physics. +3 jiggle +3 wiggle',
      'artist': artists.finch,
    },
  },

  /* -------------------------- RARE FROG OBJECT ------------------------ */
  'uncommon': {
    'capyfam': {
      'name': 'Capy Family',
      'image': 'images/cards/capyfamily.png',
      'description': 'as advertised. +4 frog, +1 capybara',
      'artist': artists.finch,
    },
    'chomper': {
      'name': 'Chomper',
      'image': 'images/cards/chomper.png',
      'description': 'he never stops. +20 horror, +50 suffering',
      'artist': artists.slide
    },
    'sleepingfrog': {
      'name': 'Sleeping Frog',
      'image': 'images/cards/sleepingfrog.png',
      'description': 'just kiss her. +50 nobility +12 caprice +10 sleep',
      'artist': artists.elena
    },
    'froggod': {
      'name': 'Frog God',
      'image': 'images/cards/froggod.png',
      'description': 'big ol space hug. +30 luve, +5 space tech',
      'artist': artists.funnyunfunny
    },
    'alienfrog': {
      'name': 'Alien Frog',
      'image': 'images/cards/alienfrog.png',
      'description': 'he costs $15.72 at home depot. +15.72 unholy energy',
      'artist': artists.finch,
    },
    'frogdoll': {
      'name': 'Frog Doll',
      'image': 'images/cards/frogdoll.png',
      'description': 'press it for a random phrase. +5 accurately predicts deaths +2 *squeak*',
      'artist': artists.finch,
    },
    'luckyfrog': {
      'name': 'Lucky Frog',
      'image': 'images/cards/luckyfrog.png',
      'description': 'brings fortune and slime. +$50 +32 slimes',
      'artist': artists.finch,
    },


  },

  /* -------------------------- ULTRA RARE FROG OBJECT ------------------------ */
  'rare': {
    'rainday': {
      'name': 'Rain Day',
      'image': 'images/cards/rainday.png',
      'description': 'pattapattapatta. +4 mushroom, +12 stealth, +9 poison restiance',
      'artist': artists.finch,
    },
    'galaxyfrog': {
      'name': 'Galaxy Frog',
      'image': 'images/cards/galaxyfrog.png',
      'description': 'spiraling through time and space... +100 star, +50 void',
      'artist': artists.matt,
    },
    'stainedglass': {
      'name': 'Stained Window',
      'image': 'images/cards/stainedglass.png',
      'description': 'join the church of frog with 1 time entry fee. +60 piety',
      'artist': artists.finch,
    },
    'hiddengarden': {
      'name': 'Hidden Garden',
      'image': 'images/cards/hiddengarden.png',
      'description': 'hidden garden, hidden frogs. +5 .... frog?',
      'artist': artists.finch,
    },
    'cutefrogstack': {
      'name': 'Ultimate Frogstack',
      'image': 'images/cards/frogstack.png',
      'description': 'no joke. +999 domination',
      'artist': artists.elena
    },
    'dreaming': {
      'name': 'Dreaming Frog',
      'image': 'images/cards/dreaming.png',
      'description': 'he dream of the beyond. +1 aspiration',
      'artist': artists.frogapples
    },
    'froget': {
      'name': 'Froget Me Not',
      'image': 'images/cards/frogetmenot.png',
      'description': 'always remember. +100 memories',
      'artist': artists.frogapples
    },
    'frogchurch': {
      'name': 'Church of The Frog',
      'image': 'images/cards/frogchurch.png',
      'description': 'join now with a one time membership fee. +10% tithe',
      'artist': artists.finch,
    },
    'piouswindow': {
      'name': 'Pious Window',
      'image': 'images/cards/piouswindow.png',
      'description': 'the good word is ribbit. +1 ribbit +6 piety',
      'artist': artists.finch,
    },
    'divineretribution': {
      'name': 'Divine Retribution',
      'image': 'images/cards/divineretribution.png',
      'description': 'bad children get sent to frog hell. +80 punishment',
      'artist': artists.finch,
    },
    'frogbarian': {
      'name': 'Frogbarian',
      'image': 'images/cards/frogbarian.png',
      'description': 'feel the sweet, moist taste of victory. +50 moist +1 victory',
      'artist': artists.imaginarymon,
    },
    'lofifrog': {
      'name': 'Lofi Frog',
      'image': 'images/cards/lofifrog.png',
      'description': 'he study to some jams. +20 intelligence +10 relaxation + 100 vibe',
      'artist': artists.instantonion,
    },



  }
}
