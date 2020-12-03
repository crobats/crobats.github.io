/* All frogs are safe in here.

Copy/Paste Frog object:

'NameOfFrog-NoDuplicates': {
  'id': 0, <- do we even need this?
  'name': 'Full Name of Frog'
  'image': 'images/url.png', <- image url, image must be in the images folder
  'acquired': false <- must remain false
},

 */

var FROG_CARDS = {
  /* COMMON FROG OBJECT */
  'common': {
    'frog': {
      'id': 0,
      'name': 'Froggo',
      'image': 'images/cards/temp-frog.png',
      'acquired': false
    },
    'frogger': {
      'id': 0,
      'name': 'froggy',
      'image': 'images/cards/temp-frog.png',
      'acquired': false
    },
    'heck': {
      'id': 0,
      'name': 'heck frog',
      'image': 'images/cards/temp-frog.png',
      'acquired': false
    },
  },

  /* UNCOMMON FROG OBJECT */
  'uncommon': {
    'deepthink frog': {
      'id': 1,
      'name': 'thinking boi',
      'image': 'images/cards/temp-frog.png',
      'acquired': false
    },
  },

  /* RARE FROG OBJECT */
  'rare': {
    'midna frog': {
      'id': 2,
      'name': 'midna frog refuses to hush',
      'image': 'images/cards/rainydayfrog.png',
      'acquired': false
    },
  }
}
