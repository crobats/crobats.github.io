/** All the frog cardes. All frogs are safe in here.

Copy/Paste Frog object:

'NameOfFrog': {
  'name': 'Full Name of Frog'
  'image': 'images/url.png', <- image url, image must be in the images folder
  'description': 'desc',
  'acquired': false <- must remain false
},

Note if 'NameOfFrog' has a duplicate, it will go to the last duplicate

 */

var FROG_CARDS = {
  /* COMMON FROG OBJECT */
  'common': {
    'frogband': {
      'name': 'Frog Band',
      'image': 'images/cards/common-frogband.png',
      'description': 'he doot the floot. +40 music, +70 hat',
      'acquired': false
    },
  },

  /* UNCOMMON FROG OBJECT */
  'uncommon': {
    'capyfam': {
      'name': 'Capy Family',
      'image': 'images/cards/rare-capyfamily.png',
      'description': 'as advertised. +4 frog, +1 capybara',
      'acquired': false
    },
  },

  /* RARE FROG OBJECT */
  'rare': {
    'rainday': {
      'name': 'Rain Day',
      'image': 'images/cards/ultrarare-rainday.png',
      'description': 'pattapattapatta. +4 mushroom, +12 stealth, +9 poison restiance',
      'acquired': false
    },
  }
}
