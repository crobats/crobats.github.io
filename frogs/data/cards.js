/* All frogs are safe in here.

Copy/Paste Frog object:

'NameOfFrog': {
  'id': 0, <- do we even need this?
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
      'id': 0,
      'name': 'Frog Band',
      'image': 'images/cards/common-frogband.png',
      'description': 'he doot the floot. +40 music, +70 hat',
      'acquired': false
    },
  },

  /* UNCOMMON FROG OBJECT */
  'uncommon': {
    'capyfam': {
      'id': 1,
      'name': 'Capy Family',
      'image': 'images/cards/rare-capyfamily.png',
      'description': 'as advertised. +4 frog, +1 capybara',
      'acquired': false
    },
  },

  /* RARE FROG OBJECT */
  'rare': {
    'rainday': {
      'id': 2,
      'name': 'Rain Day',
      'image': 'images/cards/ultrarare-rainday.png',
      'description': 'pattapattapatta. +4 mushroom, +12 stealth, +9 poison restiance',
      'acquired': false
    },
  }
}
