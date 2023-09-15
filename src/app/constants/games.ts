/**
 * EXPLANATION OF GAME REQUIRED FIELDS
 *
 * {
 *    name: '',           // The name of the game
 *    textEN: '',         // The description of the game in English
 *    textES: '',         // The description of the game in Spanish
 *    folder: '',         // The folder name with the game info on assets folder. The files must be named the same as in the rest of the game folders.
 *    website: '',        // The link to the game website
 *    gameLink: '',       // The link to the game/downloader...
 *    gameLinkType: '',   // To show the text button. Options: download, preAlpha, techDemo, beta, wishlist
 *    video: '',          // The link to the trailer video (preferably youtube link)
 *    email: ''           // The email to contact with game company
 *    social: {           // Game social media links (if new media is added, logo will be needed)
 *      facebook: '',
 *      instagram: '',
 *      twitter: '',
 *      youtube: '',
 *      discord: ''
 *    }
 * }
 *
 */
export const games = [
  {
    name: 'Outer Ring',
    textEN: 'Outer Ring MMO is a free-to-play 3rd person sci-fi action RPG spanning an entire universe. You will enter a unique metaverse and embark on an epic journey across galaxies to discover new worlds, unravel ancient mysteries, and face the dangers of deep space. Captain your trusty spaceship and become a legend of the stars!',
    textES: 'Outer Ring MMO es un videojuego de rol gratuito y  acción en 3ª persona que acontece en un universo de ciencia ficción. Embárcate en un viaje épico para descubrir galaxias y mundos increíbles en los que desentrañar misterios ancestrales, además de enfrentarte a los peligros y desafíos propios del espacio profundo. Todo ello en un metaverso innovador y en constante evolución. ¡Pon a punto tu nave y conviértete en un capitán legendario!',
    folder: 'outer_ring',
    website: 'https://outerringmmo.com/',
    gameLinkEN: 'https://www.blinkgalaxy.com/en/mmo/outer-ring',
    gameLinkES: 'https://www.blinkgalaxy.com/es/mmo/outer-ring',
    gameLinkType: 'preAlpha',
    video: 'https://www.youtube.com/watch?v=KAD7akWJ0Ns',
    email: 'info@outerringmmo.com',
    social: {
      facebook: 'https://www.facebook.com/Outer-Ring-MMO-111124460754710',
      instagram: 'https://www.instagram.com/outerringmmo',
      twitter: 'https://twitter.com/OuterRingMMO',
      youtube: 'https://www.youtube.com/OuterRingMMO',
      discord: 'https://discord.com/invite/outerringmmo'
    }
  },

  {
    name: 'Racerloop',
    textEN: 'Racerloop is a zero-gravity arcade racing game based on the Outer Ring universe where you take on a new challenge to be the fastest in the universe. In Racerloop, you will be able to customize and upgrade their ships, trading and exchanging parts and vehicles in a blockchain-based economy and marketplace.',
    textES: 'Racerloop es un videojuego de carreras arcade de gravedad cero basado en el universo Outer Ring donde competirás por convertirte en el piloto más rápido de la galaxia. En Racerloop podrás personalizar y mejorar tus naves, así como comerciar e intercambiar piezas y vehículos gracias a una economía y un mercado basados en la tecnología blockchain.',
    folder: 'racerloop',
    website: 'https://www.racerloop.com/',
    gameLinkEN: 'https://blinkgalaxy.com/en/racing/racerloop',
    gameLinkES: 'https://blinkgalaxy.com/es/carreras/racerloop',
    gameLinkType: 'beta',
    video: 'https://www.youtube.com/watch?v=dT9_qcXfnZw',
    email: 'info@racerloop.com',
    social: {
      facebook: 'https://www.facebook.com/Racerloop',
      instagram: 'https://www.instagram.com/racerloopgame/',
      twitter: 'https://twitter.com/Racerloop',
      youtube: 'https://www.youtube.com/@racerloop'
    }
  },

  {
    name: 'One Last Breath',
    textEN: 'One Last Breath is a 2.5D atmospheric adventure and puzzle game in which you will incarnate Gaia, the last will of nature, and as such you\'ll have to face a bleak world making use of the last remnants of life left in order to decide the face of all existence and escape from lethal creatures.',
    textES: 'One Last Breath es un juego atmosférico de aventuras y puzles en 2.5D en el que encarnarás a Gaia, la última voluntad de la naturaleza, para enfrentarte a un mundo devastado y desolador. Haz uso de tus últimos resquicios de vida y derrota a criaturas letales. ¡El destino de la Tierra está en tus manos!',
    folder: 'one_last_breath',
    website: 'https://store.steampowered.com/app/1835190/One_Last_Breath/',
    gameLinkEN: 'https://store.steampowered.com/app/1835190/One_Last_Breath/',
    gameLinkES: 'https://store.steampowered.com/app/1835190/One_Last_Breath/',
    gameLinkType: 'wishlist',
    video: 'https://www.youtube.com/watch?v=0oxJIVnyurw',
    email: 'info@onelastbreath.com',
    social: {
      instagram: 'https://www.instagram.com/onelastbreathgame',
      twitter: 'https://twitter.com/OLBGame',
      youtube: 'https://www.youtube.com/channel/UCjHdiFlDKDv_LHDsuX8x68w'
    }
  }
];
