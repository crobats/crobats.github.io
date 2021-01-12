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

var FROG_CARDS = {
  /* COMMON FROG OBJECT */
  'common': {
    'frogband': {
      'name': 'Frog Band',
      'image': 'images/cards/frogband.png',
      'description': 'he doot the floot. +40 music, +70 hat',
      'artist': 'illufinch',
    },
    'frogtoast': {
      'name': 'Frog Toast',
      'image': 'images/cards/frogtoast.png',
      'description': 'sells well on ebay. + $500',
      'artist': 'illufinch',
    },

  },

  /* UNCOMMON FROG OBJECT */
  'uncommon': {
    'capyfam': {
      'name': 'Capy Family',
      'image': 'images/cards/capyfamily.png',
      'description': 'as advertised. +4 frog, +1 capybara',
      'artist': 'illufinch',
    },
  },

  /* RARE FROG OBJECT */
  'rare': {
    'rainday': {
      'name': 'Rain Day',
      'image': 'images/cards/rainday.png',
      'description': 'pattapattapatta. +4 mushroom, +12 stealth, +9 poison restiance',
      'artist': 'illufinch',
    },
    'galaxyfrog': {
      'name': 'Galaxy Frog',
      'image': 'images/cards/galaxyfrog.png',
      'description': 'spiraling through time and space... +100 star, +50 void',
      'artist': 'mattFdraws',
    },
    'stainedglass': {
      'name': 'Stained Window',
      'image': 'images/cards/stainedglass.png',
      'description': 'join the church of frog with 1 time entry fee. +60 piety',
      'artist': 'illufinch',
    },
    'hiddengarden': {
      'name': 'Hidden Garden',
      'image': 'images/cards/hiddengarden.png',
      'description': 'hidden garden, hidden frogs. +5 .... frog?',
      'artist': 'illufinch',
    },
  }
}
