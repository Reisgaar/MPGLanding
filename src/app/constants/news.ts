/**
 * EXPLANATION OF NEW REQUIRED FIELDS
 *
 * {
 *    id: 1           // All news must have an increasing identificator number (same id for english and spanish)
 *    title: '',      // Title of the new
 *    subtitle: '',   // Subtitle
 *    textResume: '', // Short resume of the new
 *    text: '',       // Full text of the new
 *                    // Has to be html code, it's added as innerHTML, so it's possible to add links, images, videos...
 *                       - Paragraphs are <p> elements
 *                       - To add sub section title, use <h2>
 *                       - To add a link, put link text inside <a> element with this pattern: <a href="***" target="_blank"></a>
 *                         change *** for the url
 *                       - To add an image add this pattern: <img src="assets/images/news/###/***" alt="..." />
 *                         change ### for the id of the new, *** for the image name with the extension, and ... for the alt of the image
 *                       - To add a video use this pattern changing *** for the url with the embed option:
 *                                  <div class="video">
 *                                    <iframe
 *                                      src="***"
 *                                      frameborder="0"
 *                                      allowfullscreen="allowfullscreen">
 *                                    </iframe>
 *                                  </div>
 *
video: '',
*    date: '',       // The date when was written
 * }
 *
 * All news must be duplicated, in english and spanish, and have the same id
 * A folder named with the id of the new must be created on assets/images/news
 * main image must be added to this folder named as "main.png"
 *
 */

export const news = [
  {
    en: {
      id: 0,
      title: 'Maniac Panda Announces Outer Ring Expansion',
      subtitle: 'New Adventures Await in the Cosmos',
      textResume: 'Discover what\'s next in the Outer Ring universe.',
      text: `<p>Maniac Panda is thrilled to unveil the latest expansion for Outer Ring. Prepare for an epic journey through the cosmos with new planets to explore, challenges to conquer, and mysteries to unravel.</p>
      <p>In this expansive update, players will discover a richly detailed universe filled with wonders beyond imagination. Traverse uncharted territories, encounter strange civilizations, and uncover the secrets of the outer rim. Whether you're a seasoned explorer or a newcomer to the game, Outer Ring's new expansion promises endless hours of adventure and excitement.</p>
      <p>The development team at Maniac Panda has poured their heart and soul into creating this expansion, and it shows in every pixel. From breathtaking visuals to intricate gameplay mechanics, Outer Ring's latest addition is a testament to the studio's dedication to delivering top-notch gaming experiences.</p>
      <p>But it's not just about the new content; it's also about the community. Outer Ring has always been a game that brings players together, and this expansion is no different. Join forces with fellow adventurers, form alliances, and embark on quests that will challenge your skills and teamwork. It's a universe where friendships are forged in the heat of battle and alliances are tested against the backdrop of the cosmos.</p>
      <p>So, what are you waiting for? Strap in, pilot your spacecraft, and get ready to explore the vastness of Outer Ring's latest expansion. The stars await, and your destiny is among them.</p>
      <p>Outer Ring is more than a game; it's an odyssey into the unknown. As you journey deeper into the cosmos, you'll encounter enigmatic alien races with their own histories and agendas. Form alliances or forge rivalries, but choose your path wisely, for the fate of the universe hangs in the balance.</p>
      <p>This expansion introduces a dynamic living world where your choices matter. Your decisions will shape the course of events, and the consequences will ripple throughout the galaxy. Will you be a beacon of hope, a cunning diplomat, or a ruthless conqueror? The choice is yours, and the possibilities are endless.</p>
      <p>Beyond the thrilling space battles and epic quests, Outer Ring's new expansion offers a deep and immersive narrative experience. Dive into the lore of the cosmos, uncover hidden artifacts, and decipher cryptic messages left by ancient civilizations. The mysteries of the universe are yours to unravel.</p>
      <p>But beware, for the cosmos is not without its dangers. From cosmic storms that can tear your ship apart to ancient guardians protecting long-forgotten treasures, Outer Ring's expansion will test your skills and courage at every turn. Only the bravest and most resourceful explorers will triumph.</p>
      <p>In addition to the main storyline, Outer Ring's expansion brings a wealth of side quests and activities. Join a trading caravan, become a bounty hunter, or establish your own colony on a distant planet. The choices you make outside the main narrative can have a profound impact on your journey.</p>
      <p>And if you're looking for a challenge, Outer Ring's new expansion offers high-stakes multiplayer modes. Engage in intense space battles, compete in galactic races, and test your strategic prowess against other players from around the world. Glory and rewards await those who dare to enter the competitive arena.</p>
      <p>Maniac Panda invites you to embark on a grand adventure that will redefine your perception of space exploration. Outer Ring's latest expansion is a testament to the boundless creativity and dedication of the team. We can't wait to see you among the stars, forging your legend in the cosmos.</p>`,
      video: '',
      date: 'September 25, 2022'
    },
    es: {
      id: 0,
      title: 'Maniac Panda Anuncia la Expansión de Outer Ring',
      subtitle: 'Nuevas Aventuras Esperan en el Cosmos',
      textResume: 'Descubre qué depara el futuro en el universo de Outer Ring.',
      text: `<p>Maniac Panda se complace en revelar la última expansión de Outer Ring. Prepárate para un viaje épico a través del cosmos con nuevos planetas por explorar, desafíos por conquistar y misterios por desentrañar.</p>
      <p>En esta expansión, los jugadores descubrirán un universo detallado y rico lleno de maravillas más allá de la imaginación. Atraviesa territorios inexplorados, encuentra civilizaciones extrañas y descubre los secretos del borde exterior. Ya seas un explorador experimentado o un recién llegado al juego, la nueva expansión de Outer Ring promete horas interminables de aventura y emoción.</p>
      <p>El equipo de desarrollo de Maniac Panda ha volcado su corazón y alma en la creación de esta expansión, y se nota en cada píxel. Desde impresionantes visuales hasta intrincadas mecánicas de juego, la última incorporación de Outer Ring es un testimonio de la dedicación del estudio para ofrecer experiencias de juego de primera calidad.</p>
      <p>Pero no se trata solo del nuevo contenido; también se trata de la comunidad. Outer Ring siempre ha sido un juego que reúne a los jugadores, y esta expansión no es diferente. Únete a otros aventureros, forma alianzas y emprende misiones que desafiarán tus habilidades y trabajo en equipo. Es un universo donde las amistades se forjan en la calor de la batalla y las alianzas se ponen a prueba en el telón de fondo del cosmos.</p>
      <p>Entonces, ¿a qué estás esperando? Asegúrate, pilotea tu nave espacial y prepárate para explorar la vastedad de la última expansión de Outer Ring. Las estrellas te esperan y tu destino está entre ellas.</p>
      <p>Outer Ring es más que un juego; es una odisea hacia lo desconocido. A medida que te adentras más en el cosmos, te encontrarás con enigmáticas razas alienígenas con sus propias historias y agendas. Forma alianzas o forja rivalidades, pero elige tu camino sabiamente, porque el destino del universo está en juego.</p>
      <p>Esta expansión introduce un mundo vivo y dinámico donde tus elecciones importan. Tus decisiones darán forma al curso de los eventos y las consecuencias se extenderán por toda la galaxia. ¿Serás un faro de esperanza, un diplomático astuto o un conquistador despiadado? La elección es tuya y las posibilidades son infinitas.</p>
      <p>Más allá de las emocionantes batallas espaciales y las misiones épicas, la nueva expansión de Outer Ring ofrece una experiencia narrativa profunda e inmersiva. Sumérgete en la historia del cosmos, descubre artefactos ocultos y descifra mensajes crípticos dejados por civilizaciones antiguas. Los misterios del universo están a tu alcance.</p>
      <p>Pero cuidado, porque el cosmos no está libre de peligros. Desde tormentas cósmicas que pueden destrozar tu nave hasta guardianes antiguos que protegen tesoros olvidados, la expansión de Outer Ring pondrá a prueba tus habilidades y coraje en cada giro. Solo los exploradores más valientes y ingeniosos triunfarán.</p>
      <p>Además de la historia principal, la expansión de Outer Ring trae consigo una gran cantidad de misiones secundarias y actividades. Únete a una caravana de comercio, conviértete en un cazador de recompensas o establece tu propia colonia en un planeta distante. Las elecciones que hagas fuera de la narrativa principal pueden tener un impacto profundo en tu viaje.</p>
      <p>Y si buscas un desafío, la nueva expansión de Outer Ring ofrece modos multijugador de alto riesgo. Participa en intensas batallas espaciales, compite en carreras galácticas y pon a prueba tu astucia estratégica contra otros jugadores de todo el mundo. La gloria y las recompensas esperan a aquellos que se atrevan a ingresar a la arena competitiva.</p>
      <p>Maniac Panda te invita a embarcarte en una gran aventura que redefinirá tu percepción de la exploración espacial. La última expansión de Outer Ring es un testimonio de la creatividad y dedicación sin límites del equipo. No podemos esperar a verte entre las estrellas, forjando tu leyenda en el cosmos.</p>`,
      video: '',
      date: '25 de Septiembre de 2022'
    }
  },
  {
    en: {
      id: 1,
      title: 'Maniac Panda\'s New Game: One Last Breath',
      subtitle: 'Embark on a Nature-Respecting Adventure',
      textResume: 'Experience the beauty and challenges of the natural world.',
      text: `<p>Get ready to immerse yourself in the breathtaking world of 'One Last Breath.' Join the protagonist in a quest to protect and preserve nature's wonders in this stunning adventure game.</p>
      <p>In 'One Last Breath,' players will embark on an awe-inspiring journey through lush forests, towering mountains, and serene meadows. The game's stunning visuals and immersive soundscapes transport players to a world teeming with life and beauty.</p>
      <p>But it's not just about the visuals; the gameplay in 'One Last Breath' is equally captivating. Solve intricate puzzles, uncover hidden secrets, and engage in heart-pounding encounters with the creatures of the wild. Your choices will shape the fate of the natural world, and every decision you make carries consequences.</p>
      <p>The narrative of 'One Last Breath' is a poetic exploration of the delicate balance between humans and nature. As you progress through the game, you'll encounter characters who share their wisdom and stories, shedding light on the importance of respecting and preserving the environment.</p>
      <p>Whether you're an avid gamer or someone looking for a meaningful gaming experience, 'One Last Breath' promises to be an unforgettable adventure that will leave you with a profound appreciation for the world around us.</p>`,
      video: '',
      date: 'October 12, 2022'
    },
    es: {
      id: 1,
      title: 'Nuevo Juego de Maniac Panda: One Last Breath',
      subtitle: 'Embárcate en una Aventura de Respeto por la Naturaleza',
      textResume: 'Experimenta la belleza y los desafíos del mundo natural.',
      text: `<p>Prepárate para sumergirte en el impresionante mundo de 'One Last Breath'. Únete al protagonista en una misión para proteger y preservar las maravillas de la naturaleza en este impresionante juego de aventuras.</p>
      <p>En 'One Last Breath', los jugadores emprenderán un viaje impresionante a través de exuberantes bosques, montañas imponentes, y prados serenos. Los impresionantes gráficos y los paisajes sonoros inmersivos transportan a los jugadores a un mundo lleno de vida y belleza.</p>
      <p>Pero no se trata solo de los gráficos; la jugabilidad en 'One Last Breath' es igualmente cautivadora. Resuelve intrincados rompecabezas, descubre secretos ocultos, y participa en encuentros emocionantes con las criaturas de la naturaleza. Tus elecciones darán forma al destino del mundo natural, y cada decisión que tomes tendrá consecuencias.</p>
      <p>La narrativa de 'One Last Breath' es una exploración poética del delicado equilibrio entre los humanos y la naturaleza. A medida que avanzas en el juego, te encontrarás con personajes que comparten su sabiduría e historias, arrojando luz sobre la importancia de respetar y preservar el medio ambiente.</p>
      <p>Ya seas un jugador ávido o alguien en busca de una experiencia de juego significativa, 'One Last Breath' promete ser una aventura inolvidable que te dejará con un profundo aprecio por el mundo que nos rodea.</p>`,
      video: '',
      date: '12 de Octubre de 2022'
    }
  },
  {
    en: {
      id: 2,
      title: 'Maniac Panda\'s Hashapon: A World of Animal Companions',
      subtitle: 'Raise, Train, and Compete with Adorable Creatures',
      textResume: 'Enter the charming universe of Hashapon.',
      text: `<p>Explore the delightful world of Hashapon, where you can raise and train a variety of adorable creatures. Compete in exciting challenges and build a bond with your animal companions like never before.</p>
      <p>In Hashapon, players will step into a charming world filled with cute critters and vibrant landscapes. The game's enchanting art style and endearing characters make it a joy to play for gamers of all ages.</p>
      <p>Your journey in Hashapon begins with the selection of your first creature companion. As you nurture and train your critter, you'll unlock new abilities and skills, preparing it for thrilling challenges and competitions. From high-speed races to intricate obstacle courses, Hashapon offers a wide range of activities to test your critter's abilities.</p>
      <p>But it's not just about competition; it's also about friendship. Form bonds with your critters, learn about their unique personalities, and embark on heartwarming adventures together. Hashapon is more than just a game; it's a world where your critters become your lifelong companions.</p>
      <p>Whether you're a seasoned gamer or new to the world of gaming, Hashapon offers an irresistible blend of fun, challenge, and heartwarming moments. Get ready to embark on an unforgettable journey in the world of Hashapon.</p>
      <p>In Hashapon, the adventure is boundless. Each critter you encounter has its own captivating backstory, and as you explore the world, you'll uncover the secrets of their origins. From mystical forests to bustling cities, the landscapes are teeming with life, and every corner holds a new surprise.</p>
      <p>The heart of Hashapon lies in the sense of discovery. As you delve deeper into the game, you'll stumble upon hidden treasures, encounter rare critters, and forge friendships with fellow players. The community-driven aspect of Hashapon adds a layer of social interaction that enhances the overall experience.</p>
      <p>Prepare to be enchanted by the seasons of Hashapon. The world undergoes dynamic changes, from the lush greens of spring to the snowy landscapes of winter. Each season brings its own set of challenges and opportunities, ensuring that your journey remains fresh and exciting.</p>
      <p>Hashapon is not just a game; it's a world waiting to be explored. Immerse yourself in the enchanting universe of Hashapon, where adventure, friendship, and discovery await at every turn.</p>`,
      video: '',
      date: 'November 8, 2022'
    },
    es: {
      id: 2,
      title: 'Hashapon de Maniac Panda: Un Mundo de Compañeros Animales',
      subtitle: 'Cría, Entrena y Compite con Criaturas Adorables',
      textResume: 'Entra en el encantador universo de Hashapon.',
      text: `<p>Explora el encantador mundo de Hashapon, donde puedes criar y entrenar a una variedad de criaturas adorables. Compite en emocionantes desafíos y crea un vínculo con tus compañeros animales como nunca antes.</p>
      <p>En Hashapon, los jugadores ingresarán a un mundo encantador lleno de criaturas lindas y paisajes vibrantes. El estilo artístico encantador y los personajes entrañables del juego lo hacen divertido para jugadores de todas las edades.</p>
      <p>Tu viaje en Hashapon comienza con la selección de tu primera compañera criatura. A medida que cuidas y entrenas a tu criatura, desbloquearás nuevas habilidades y destrezas, preparándola para emocionantes desafíos y competencias. Desde carreras de alta velocidad hasta intrincados cursos de obstáculos, Hashapon ofrece una amplia variedad de actividades para poner a prueba las habilidades de tu criatura.</p>
      <p>Pero no se trata solo de competencia; también se trata de amistad. Forma lazos con tus criaturas, conoce sus personalidades únicas y emprende aventuras conmovedoras juntos. Hashapon es más que un juego; es un mundo donde tus criaturas se convierten en tus compañeras de toda la vida.</p>
      <p>Ya seas un jugador experimentado o nuevo en el mundo de los videojuegos, Hashapon ofrece una irresistible mezcla de diversión, desafío y momentos conmovedores. Prepárate para embarcarte en un viaje inolvidable en el mundo de Hashapon.</p>
      <p>En Hashapon, la aventura es infinita. Cada criatura que encuentres tiene su propia cautivadora historia, y a medida que exploras el mundo, descubrirás los secretos de sus orígenes. Desde bosques místicos hasta bulliciosas ciudades, los paisajes rebosan de vida, y cada rincón guarda una nueva sorpresa.</p>
      <p>El corazón de Hashapon radica en la sensación de descubrimiento. A medida que te sumerges más en el juego, tropezarás con tesoros ocultos, encontrarás criaturas raras y forjarás amistades con otros jugadores. El aspecto impulsado por la comunidad de Hashapon agrega una capa de interacción social que mejora la experiencia general.</p>
      <p>Prepárate para ser encantado por las estaciones de Hashapon. El mundo experimenta cambios dinámicos, desde el verde exuberante de la primavera hasta los paisajes nevados del invierno. Cada estación trae su propio conjunto de desafíos y oportunidades, asegurando que tu viaje siga siendo fresco y emocionante.</p>
      <p>Hashapon no es solo un juego; es un mundo esperando ser explorado. Sumérgete en el universo encantador de Hashapon, donde la aventura, la amistad y el descubrimiento te esperan en cada esquina.</p>`,
      video: '',
      date: '8 de Noviembre de 2022'
    }
  },
  {
    en: {
      id: 3,
      title: 'Maniac Panda\'s Racerloop: Fast-Paced Space Racing',
      subtitle: 'Compete for Glory in the Stars',
      textResume: 'Experience high-speed space thrills in Racerloop.',
      text: `<p>Prepare for heart-pounding action in Racerloop, where you can pilot high-speed spacecraft through challenging tracks in the depths of space. Compete against friends and rivals for galactic glory.</p>
      <p>Racerloop, the adrenaline-fueled racing game from Maniac Panda, is back with a bang. Get ready to experience the thrill of high-speed space racing like never before.</p>
      <p>In Racerloop, you'll take on the role of an ace pilot, navigating your sleek spacecraft through twisting tracks, treacherous obstacles, and breathtaking vistas. The controls are intuitive, but mastering them will take skill and precision.</p>
      <p>Challenge your friends to epic races or go head-to-head with rival pilots from around the galaxy. The competition is fierce, and victory comes to those who can push their spacecraft to the limits.</p>
      <p>But it's not all about winning; it's about the journey. Explore the far reaches of the cosmos, discover hidden shortcuts, and unlock powerful upgrades for your spacecraft. Racerloop offers a deep and rewarding experience for players of all skill levels.</p>
      <p>So, gear up, pilot, and get ready to race your way to the top in Racerloop. The stars are your playground, and the galaxy awaits your domination.</p>`,
      video: '',
      date: 'December 15, 2022'
    },
    es: {
      id: 3,
      title: 'Racerloop de Maniac Panda: Carreras Espaciales de Alta Velocidad',
      subtitle: 'Compite por la Gloria en las Estrellas',
      textResume: 'Experimenta emociones de alta velocidad en el espacio con Racerloop.',
      text: `<p>Prepárate para una acción emocionante en Racerloop, donde puedes pilotar naves espaciales de alta velocidad a través de pistas desafiantes en las profundidades del espacio. Compite contra amigos y rivales por la gloria galáctica.</p>
      <p>Racerloop, el juego de carreras lleno de adrenalina de Maniac Panda, está de vuelta con fuerza. Prepárate para experimentar la emoción de las carreras espaciales de alta velocidad como nunca antes.</p>
      <p>En Racerloop, asumirás el papel de un piloto experto, navegando tu elegante nave espacial por pistas retorcidas, obstáculos traicioneros y vistas impresionantes. Los controles son intuitivos, pero dominarlos requerirá habilidad y precisión.</p>
      <p>Desafía a tus amigos a carreras épicas o enfréntate cara a cara con pilotos rivales de toda la galaxia. La competencia es feroz, y la victoria llega a aquellos que pueden llevar su nave espacial al límite.</p>
      <p>Pero no se trata solo de ganar; se trata del viaje. Explora los confines del cosmos, descubre atajos ocultos y desbloquea mejoras poderosas para tu nave espacial. Racerloop ofrece una experiencia profunda y gratificante para jugadores de todos los niveles de habilidad.</p>
      <p>Entonces, prepárate, pilotea y prepárate para correr hasta la cima en Racerloop. Las estrellas son tu patio de juegos, y la galaxia espera tu dominio.</p>`,
      video: '',
      date: '15 de Diciembre de 2022'
    }
  },
  {
    en: {
      id: 4,
      title: 'Maniac Panda Launches Blink Galaxy Platform',
      subtitle: 'Your Gateway to Gaming Paradise',
      textResume: 'Explore the ultimate gaming platform.',
      text: `<p>Maniac Panda proudly introduces Blink Galaxy, the one-stop destination for gamers. Discover a vast library of games, connect with fellow gamers, and immerse yourself in a world of gaming like never before.</p>
      <p>Blink Galaxy is the ultimate gaming platform, designed by gamers for gamers. With a user-friendly interface and a vast catalog of titles, it's the perfect place to explore new worlds and connect with friends, old and new.</p>
      <p>Discover a library of games that spans genres and generations. From epic RPGs to fast-paced shooters, Blink Galaxy has something for everyone. And with regular updates and new releases, the adventure never ends.</p>
      <p>But Blink Galaxy is more than just games; it's a community. Join forums, chat with fellow gamers, and form clans to take on the toughest challenges. It's a place where friendships are forged in the heat of battle and where every victory is sweeter when shared.</p>
      <p>Whether you're a casual gamer or a hardcore enthusiast, Blink Galaxy welcomes you to a new era of gaming. Get ready to play, connect, and explore in ways you've never imagined.</p>
      <p>At the heart of Blink Galaxy is a commitment to delivering the best gaming experience. The platform's intuitive design makes it easy to browse the extensive game library and discover new titles that pique your interest. With a single click, you can embark on epic adventures, engage in fierce competition, or embark on immersive storytelling journeys.</p>
      <p>One of the standout features of Blink Galaxy is its robust social integration. Connect with friends, form gaming groups, and communicate seamlessly with voice chat and messaging. Share your gaming achievements, collaborate on quests, and make lasting memories with players from around the world.</p>
      <p>But the community aspect goes beyond gaming. Blink Galaxy hosts events, tournaments, and live streams where you can interact with your favorite content creators and developers. Stay up to date with the latest gaming news, reviews, and industry insights through the platform's curated content.</p>
      <p>Blink Galaxy is also a hub for creativity. Discover user-generated content, mods, and custom game modes that add new dimensions to your favorite titles. If you're a content creator, share your creations with the world and build a dedicated fan base.</p>
      <p>Security and fairness are paramount at Blink Galaxy. Robust anti-cheat measures ensure a level playing field, and your data privacy is protected. Enjoy a worry-free gaming experience where your focus can remain solely on the excitement of the game.</p>
      <p>Blink Galaxy is constantly evolving and expanding. Expect regular updates that enhance performance, introduce new features, and bring even more exciting games to the platform. Your feedback matters, and the Blink Galaxy team is dedicated to delivering on the desires of the gaming community.</p>
      <p>In summary, Blink Galaxy is more than a gaming platform; it's a vibrant ecosystem where players come together to explore, compete, and create. Join the millions of gamers who have already made Blink Galaxy their home, and let the adventure begin.</p>`,
      video: '',
      date: 'January 20, 2023'
    },
    es: {
      id: 4,
      title: 'Maniac Panda Lanza la Plataforma Blink Galaxy',
      subtitle: 'Tu Puerta de Acceso al Paraíso de los Videojuegos',
      textResume: 'Explora la plataforma de videojuegos definitiva.',
      text: `<p>Maniac Panda presenta con orgullo Blink Galaxy, el destino único para los jugadores. Descubre una amplia biblioteca de juegos, conecta con otros jugadores y sumérgete en un mundo de videojuegos como nunca antes.</p>
      <p>Blink Galaxy es la plataforma definitiva de juegos, diseñada por jugadores para jugadores. Con una interfaz fácil de usar y un extenso catálogo de títulos, es el lugar perfecto para explorar nuevos mundos y conectarte con amigos, antiguos y nuevos.</p>
      <p>Descubre una biblioteca de juegos que abarca géneros y generaciones. Desde épicas aventuras de rol hasta trepidantes juegos de disparos, Blink Galaxy tiene algo para todos. Y con actualizaciones regulares y nuevos lanzamientos, la aventura nunca termina.</p>
      <p>Pero Blink Galaxy es más que solo juegos; es una comunidad. Únete a foros, charla con otros jugadores y forma clanes para enfrentar los desafíos más difíciles. Es un lugar donde las amistades se forjan en el fragor de la batalla y donde cada victoria es más dulce cuando se comparte.</p>
      <p>Así que, ya seas un jugador casual o un entusiasta hardcore, Blink Galaxy te da la bienvenida a una nueva era de juegos. Prepárate para jugar, conectarte y explorar de formas que nunca imaginaste.</p>
      <p>En el corazón de Blink Galaxy hay un compromiso de ofrecer la mejor experiencia de juego. El diseño intuitivo de la plataforma facilita la navegación por la extensa biblioteca de juegos y descubrir nuevos títulos que despiertan tu interés. Con un solo clic, puedes embarcarte en aventuras épicas, participar en competencias feroces o embarcarte en viajes inmersivos de narración.</p>
      <p>Una de las características destacadas de Blink Galaxy es su sólida integración social. Conéctate con amigos, forma grupos de juego y comunícate sin problemas con chat de voz y mensajería. Comparte tus logros en el juego, colabora en misiones y crea recuerdos duraderos con jugadores de todo el mundo.</p>
      <p>Pero el aspecto comunitario va más allá de los juegos. Blink Galaxy organiza eventos, torneos y transmisiones en vivo donde puedes interactuar con tus creadores de contenido y desarrolladores favoritos. Mantente al día con las últimas noticias de juegos, reseñas e información de la industria a través del contenido curado de la plataforma.</p>
      <p>Blink Galaxy también es un centro de creatividad. Descubre contenido generado por usuarios, mods y modos de juego personalizados que añaden nuevas dimensiones a tus títulos favoritos. Si eres un creador de contenido, comparte tus creaciones con el mundo y construye una base de fans dedicada.</p>
      <p>La seguridad y la equidad son fundamentales en Blink Galaxy. Robustas medidas contra trampas garantizan un campo de juego nivelado, y tu privacidad de datos está protegida. Disfruta de una experiencia de juego sin preocupaciones, donde tu enfoque puede centrarse únicamente en la emoción del juego.</p>
      <p>Blink Galaxy está en constante evolución y expansión. Espera actualizaciones regulares que mejoren el rendimiento, introduzcan nuevas características y traigan aún más juegos emocionantes a la plataforma. Tu opinión importa, y el equipo de Blink Galaxy está dedicado a satisfacer los deseos de la comunidad de jugadores.</p>
      <p>En resumen, Blink Galaxy es más que una plataforma de juegos; es un ecosistema vibrante donde los jugadores se unen para explorar, competir y crear. Únete a los millones de jugadores que ya han hecho de Blink Galaxy su hogar, y que comience la aventura.</p>`,
      video: '',
      date: '20 de Enero de 2023'
    }
  },
  {
    en: {
      id: 5,
      title: 'Maniac Panda Releases Outer Ring Documentary',
      subtitle: 'Behind the Scenes of a Space Odyssey',
      textResume: 'Explore the making of the epic space adventure.',
      text: `<p>Get ready to embark on a behind-the-scenes journey with Maniac Panda's latest documentary. 'Exploring Outer Ring' takes you on a fascinating tour of the development process, the creative minds behind the game, and the challenges of creating a vast virtual universe.</p>
      <p>In this exclusive documentary, you'll get unprecedented access to the Maniac Panda studios. Meet the passionate developers, artists, and visionaries who brought Outer Ring to life. Learn about the inspirations, the breakthroughs, and the moments of doubt that shaped the game's evolution.</p>
      <p>'Exploring Outer Ring' is more than a documentary; it's a testament to the artistry and dedication that go into making a world-class video game. From concept art to character design, from coding to testing, you'll witness every step of the journey.</p>
      <p>But it's not just about the technical side; it's also about the human side. Discover the stories of the people who pour their hearts into creating virtual worlds. Their passion and commitment are what make Outer Ring a truly immersive experience.</p>
      <p>So, get ready to dive into the world of game development and see Outer Ring from a whole new perspective. The documentary awaits, and the adventure begins.</p>`,
      video: '',
      date: 'February 20, 2023'
    },
    es: {
      id: 5,
      title: 'Maniac Panda Lanza Documental de Outer Ring',
      subtitle: 'Detrás de Escena de una Odisea Espacial',
      textResume: 'Explora la creación de la épica aventura espacial.',
      text: `<p>Prepárate para embarcarte en un viaje detrás de escena con el último documental de Maniac Panda. 'Explorando Outer Ring' te lleva en un fascinante recorrido por el proceso de desarrollo, las mentes creativas detrás del juego y los desafíos de crear un vasto universo virtual.</p>
      <p>En este documental exclusivo, obtendrás un acceso sin precedentes a los estudios de Maniac Panda. Conoce a los apasionados desarrolladores, artistas y visionarios que dieron vida a Outer Ring. Aprende sobre las inspiraciones, los avances y los momentos de duda que moldearon la evolución del juego.</p>
      <p>'Explorando Outer Ring' es más que un documental; es un testimonio del arte y la dedicación que se requieren para crear un videojuego de clase mundial. Desde el arte conceptual hasta el diseño de personajes, desde la codificación hasta las pruebas, presenciarás cada paso del viaje.</p>
      <p>Pero no se trata solo del lado técnico; también se trata del lado humano. Descubre las historias de las personas que entregan sus corazones para crear mundos virtuales. Su pasión y compromiso son lo que hacen de Outer Ring una experiencia verdaderamente inmersiva.</p>
      <p>Entonces, prepárate para sumergirte en el mundo del desarrollo de videojuegos y ver Outer Ring desde una perspectiva completamente nueva. El documental espera y la aventura comienza.</p>`,
      video: '',
      date: '20 de Febrero de 2023'
    }
  },
  {
    en: {
      id: 6,
      title: 'Maniac Panda\'s Hashapon Championship Finals',
      subtitle: 'Who Will Be the Ultimate Hashapon Master?',
      textResume: 'Witness the thrilling conclusion of the Hashapon Championship.',
      text: `<p>Join us for the grand finale of the Hashapon's competitive season. Watch as the top Hashers with their trained creatures compete for the coveted title of Ultimate Hashapon Master.</p>
      <p>Hashapon has been a thrilling journey, and it all comes down to this moment. The finalists have battled through intense competitions, showcasing their critters' skills and strategies. Now, they face off in a showdown that will determine the ultimate Hashapon champion.</p>
      <p>The competition is fierce, and the stakes are high. Only the most skilled Hashers will emerge victorious. Will it be a clash of speed and agility, or will strategy and teamwork prevail? The answers await as the final battles unfold.</p>
      <p>But it's not just about the competition; it's also a celebration of Hashapon's vibrant community. Join fellow fans in cheering for your favorite Hasher, discover new strategies, and witness the heart-pounding excitement of the grand finale.</p>
      <p>So, mark your calendars and be part of the Hashapon history. The Ultimate Hashapon Master will be crowned, and you won't want to miss this epic conclusion to an unforgettable season.</p>`,
      video: '',
      date: 'March 5, 2023'
    },
    es: {
      id: 6,
      title: 'Finales del Campeonato Hashapon de Maniac Panda',
      subtitle: '¿Quién Será el Maestro Hashapon Definitivo?',
      textResume: 'Sé testigo de la emocionante conclusión del Campeonato Hashapon.',
      text: `<p>Únete a nosotros para la gran final de la temporada competitiva de Hashapon. Observa cómo los mejores Hashers con sus criaturas entrenadas compiten por el codiciado título de Maestro Hashapon Definitivo.</p>
      <p>Hashapon ha sido un emocionante viaje, y todo se reduce a este momento. Los finalistas han luchado en competencias intensas, mostrando las habilidades y estrategias de sus criaturas. Ahora, se enfrentan en un enfrentamiento que determinará al campeón definitivo de Hashapon.</p>
      <p>La competencia es feroz y las apuestas son altas. Solo los Hashers más hábiles saldrán victoriosos. ¿Será un choque de velocidad y agilidad, o prevalecerán la estrategia y el trabajo en equipo? Las respuestas esperan mientras se desarrollan las batallas finales.</p>
      <p>Pero no se trata solo de la competencia; también es una celebración de la vibrante comunidad de Hashapon. Únete a otros fanáticos para animar a tu Hasher favorito, descubrir nuevas estrategias y presenciar la emoción palpable de la gran final.</p>
      <p>Entonces, marca tus calendarios y sé parte de la historia de Hashapon. El Maestro Hashapon Definitivo será coronado, y no querrás perderte esta épica conclusión de una temporada inolvidable.</p>`,
      video: '',
      date: '5 de Marzo de 2023'
    }
  },
  {
    en: {
      id: 7,
      title: 'Maniac Panda\'s Racerloop Championship Series',
      subtitle: 'Race to Victory in Intergalactic Tournaments',
      textResume: 'Compete in the biggest Racerloop event of the year.',
      text: `<p>Gear up for the most exciting Racerloop Championship Series yet. Compete in high-stakes intergalactic races, customize your spacecraft, and strive for victory in this thrilling tournament.</p>
      <p>The Racerloop Championship Series is the pinnacle of high-speed space racing, and it's back with a bang. Racers from across the galaxy will converge to test their skills in intense interstellar competitions.</p>
      <p>Choose your spacecraft, fine-tune its performance, and customize its appearance to stand out on the tracks. Each race is a test of skill and strategy, with twists and turns that will keep you on the edge of your seat.</p>
      <p>Compete against friends and rivals, and prove that you have what it takes to be the champion of the galaxy. The rewards are substantial, and the glory is unmatched.</p>
      <p>But it's not just about the competition; it's also about the camaraderie. Join fellow racers in the pits, share tips and tricks, form alliances to dominate the tournament, and immerse yourself in the vibrant Racerloop community.</p>
      <p>The Championship Series features a wide array of tracks, each with its own unique challenges and surprises. From asteroid-filled circuits to gravity-defying loops, you'll need lightning-fast reflexes and precision control to conquer them all.</p>
      <p>As the tension builds and the engines roar, experience the thrill of high-speed racing like never before. Watch as competitors jockey for position, execute daring overtakes, and push the limits of their spacecraft to claim victory.</p>
      <p>Stay tuned for live broadcasts of the races, complete with expert commentary and in-depth analysis. It's not just a tournament; it's a spectacle that captivates millions of fans across the galaxy.</p>
      <p>Racerloop is more than a race; it's a way of life for adrenaline junkies and thrill-seekers. Join the ranks of elite racers who live for the rush of high-speed competition and the pursuit of championship glory.</p>
      <p>So, gear up, rev your engines, and get ready to race for supremacy in the Racerloop Championship Series. The tracks are waiting, and victory is within your reach.</p>`,
      video: '',
      date: 'April 10, 2023'
    },
    es: {
      id: 7,
      title: 'Serie de Campeonatos Racerloop de Maniac Panda',
      subtitle: 'Corre hacia la Victoria en Torneos Intergalácticos',
      textResume: 'Compite en el evento más grande de Racerloop del año.',
      text: `<p>Prepárate para la serie de campeonatos Racerloop más emocionante hasta el momento. Compite en carreras intergalácticas de alto riesgo, personaliza tu nave espacial y lucha por la victoria en este emocionante torneo.</p>
      <p>La Serie de Campeonatos Racerloop es la cúspide de las carreras espaciales de alta velocidad, y vuelve con fuerza. Pilotos de toda la galaxia se unirán para poner a prueba sus habilidades en competencias interestelares intensas.</p>
      <p>Elige tu nave espacial, ajusta su rendimiento y personaliza su apariencia para destacar en las pistas. Cada carrera es una prueba de habilidad y estrategia, con giros y vueltas que te mantendrán en vilo.</p>
      <p>Compite contra amigos y rivales, y demuestra que tienes lo necesario para ser el campeón de la galaxia. Las recompensas son sustanciales, y la gloria es incomparable.</p>
      <p>Pero no se trata solo de la competencia; también se trata de la camaradería. Únete a otros pilotos en los boxes, comparte consejos y trucos, forma alianzas para dominar el torneo y sumérgete en la vibrante comunidad de Racerloop.</p>
      <p>La Serie de Campeonatos presenta una amplia variedad de pistas, cada una con sus propios desafíos y sorpresas únicas. Desde circuitos llenos de asteroides hasta bucles desafiantes a la gravedad, necesitarás reflejos ultrarrápidos y un control preciso para conquistarlos a todos.</p>
      <p>A medida que la tensión aumenta y los motores rugen, experimenta la emoción de las carreras de alta velocidad como nunca antes. Observa cómo los competidores luchan por la posición, ejecutan adelantamientos audaces y empujan los límites de sus naves espaciales para reclamar la victoria.</p>
      <p>Mantente atento a las transmisiones en vivo de las carreras, completas con comentarios expertos y análisis en profundidad. No es solo un torneo; es un espectáculo que cautiva a millones de fanáticos en toda la galaxia.</p>
      <p>Racerloop es más que una carrera; es un estilo de vida para los amantes de la adrenalina y los buscadores de emociones. Únete a las filas de los pilotos de élite que viven por la emoción de la competencia de alta velocidad y la búsqueda de la gloria del campeonato.</p>
      <p>Así que, prepárate, acelera tus motores y prepárate para competir por la supremacía en la Serie de Campeonatos Racerloop. Las pistas te esperan, y la victoria está a tu alcance.</p>`,
      video: '',
      date: '10 de Abril de 2023'
    }
  },
  {
    en: {
      id: 8,
      title: 'Maniac Panda Partners with Environmental Organizations',
      subtitle: 'Preserving Nature for Future Generations',
      textResume: 'Learn about our commitment to the environment.',
      text: `<p>Maniac Panda is proud to announce partnerships with leading environmental organizations. Together, we will work towards preserving our planet's natural beauty and ensuring a sustainable future.</p>
      <p>At Maniac Panda, we believe in the importance of protecting the environment for future generations. Our partnership with renowned environmental organizations is a step towards making a positive impact.</p>
      <p>Through these partnerships, we will support initiatives aimed at conservation, reforestation, and sustainable practices. We are committed to reducing our carbon footprint and promoting eco-friendly solutions.</p>
      <p>But it's not just about corporate responsibility; it's about collective action. We invite our players and the gaming community to join us in this endeavor. Together, we can make a difference and create a greener, cleaner planet for all.</p>
      <p>Stay tuned for updates on our environmental initiatives and how you can get involved. The future of our planet is in our hands, and together, we can make a lasting impact.</p>`,
      video: '',
      date: 'May 22, 2023'
    },
    es: {
      id: 8,
      title: 'Maniac Panda se Asocia con Organizaciones Ambientales',
      subtitle: 'Preservando la Naturaleza para las Generaciones Futuras',
      textResume: 'Conoce nuestro compromiso con el medio ambiente.',
      text: `<p>Maniac Panda se enorgullece en anunciar colaboraciones con destacadas organizaciones ambientales. Juntos, trabajaremos en la preservación de la belleza natural de nuestro planeta y garantizaremos un futuro sostenible.</p>
      <p>En Maniac Panda, creemos en la importancia de proteger el medio ambiente para las generaciones futuras. Nuestra colaboración con organizaciones ambientales de renombre es un paso hacia la creación de un impacto positivo.</p>
      <p>A través de estas colaboraciones, respaldaremos iniciativas dirigidas a la conservación, la reforestación y las prácticas sostenibles. Estamos comprometidos en reducir nuestra huella de carbono y promover soluciones respetuosas con el medio ambiente.</p>
      <p>Pero no se trata solo de responsabilidad corporativa; se trata de acción colectiva. Invitamos a nuestros jugadores y a la comunidad de jugadores a unirse a nosotros en este esfuerzo. Juntos, podemos marcar la diferencia y crear un planeta más verde y limpio para todos.</p>
      <p>Mantente atento a las actualizaciones sobre nuestras iniciativas ambientales y cómo puedes participar. El futuro de nuestro planeta está en nuestras manos y, juntos, podemos crear un impacto duradero.</p>`,
      video: '',
      date: '22 de Mayo de 2023'
    }
  },
  {
    en: {
      id: 9,
      title: 'Maniac Panda\'s Exclusive Outer Ring Merchandise',
      subtitle: 'Show Your Love for the Cosmos',
      textResume: 'Explore a range of Outer Ring-themed products.',
      text: `<p>Calling all Outer Ring fans! Maniac Panda has unveiled a stunning line of merchandise featuring your favorite space-themed game.</p>
      <p>The Outer Ring merchandise collection is a tribute to the game's vibrant community. Choose from a range of t-shirts, hoodies, and accessories that celebrate Outer Ring's iconic characterss. Whether you're exploring the cosmos or relaxing at home, these items are the perfect way to show your love for the game.</p>
      <p>The adventure continues, and now, you can be a part of it in style.</p>`,
      video: '',
      date: 'June 14, 2023'
    },
    es: {
      id: 9,
      title: 'Maniac Panda Lanza Línea de Merchandising de Outer Ring',
      subtitle: 'Muestra tu Amor por el Cosmos',
      textResume: 'Explora una gama de productos temáticos de Outer Ring.',
      text: `<p>¡Atención a todos los fanáticos de Outer Ring! Maniac Panda ha presentado una impresionante línea de productos con tu juego espacial favorito.</p>
      <p>La colección de mercancía de Outer Ring es un tributo a la vibrante comunidad del juego. Elige entre una variedad de camisetas, sudaderas y accesorios que celebran a los icónicos personajes de Outer Ring. Ya sea que estés explorando el cosmos o relajándote en casa, estos artículos son la forma perfecta de mostrar tu amor por el juego.</p>
      <p>La aventura continúa, y ahora puedes ser parte de ella con estilo.</p>`,
      video: '',
      date: '14 de Junio de 2023'
    }
  },
  {
    en: {
      id: 10,
      title: 'Maniac Panda Announces One Last Breath Sequel',
      subtitle: 'Return to Nature\'s Embrace',
      textResume: 'Prepare for a new chapter in the adventure.',
      text: `<p>Get ready to dive back into the world of 'One Last Breath' with the highly anticipated sequel. Embark on a fresh journey to protect nature and its wonders. The sequel promises even more breathtaking landscapes and challenges.</p>
      <p>'One Last Breath 2' is here, and it's everything fans have been waiting for. Join the protagonist on a new adventure to preserve the beauty of the natural world. From lush forests to tranquil lakes, you'll explore stunning environments like never before.</p>
      <p>The sequel introduces new gameplay mechanics, intriguing puzzles, and a cast of memorable characters. Your choices will shape the course of the story, and the fate of the world's wonders hangs in the balance.</p>
      <p>But it's not just about the game; it's about the message. 'One Last Breath 2' is a reminder of the importance of environmental conservation. Immerse yourself in a world teeming with life, and discover the magic of nature.</p>
      <p>So, gear up for another unforgettable journey and experience the wonder of 'One Last Breath 2.' Nature is calling, and it's time to answer.</p>`,
      video: '',
      date: 'July 10, 2023'
    },
    es: {
      id: 10,
      title: 'Maniac Panda Anuncia la Secuela de One Last Breath',
      subtitle: 'Regresa al Abrazo de la Naturaleza',
      textResume: 'Prepárate para un nuevo capítulo en la aventura.',
      text: `<p>Prepárate para sumergirte nuevamente en el mundo de 'One Last Breath' con la muy esperada secuela. Emprende un nuevo viaje para proteger la naturaleza y sus maravillas. La secuela promete paisajes y desafíos aún más impresionantes.</p>
      <p>'One Last Breath 2' ha llegado, y es todo lo que los fanáticos han estado esperando. Únete al protagonista en una nueva aventura para preservar la belleza del mundo natural. Desde frondosos bosques hasta lagos tranquilos, explorarás entornos impresionantes como nunca antes.</p>
      <p>La secuela presenta nuevas mecánicas de juego, intrincados rompecabezas y un elenco de personajes memorables. Tus elecciones darán forma al curso de la historia, y el destino de las maravillas del mundo está en juego.</p>
      <p>Pero no se trata solo del juego; se trata del mensaje. 'One Last Breath 2' es un recordatorio de la importancia de la conservación del medio ambiente. Sumérgete en un mundo rebosante de vida y descubre la magia de la naturaleza.</p>
      <p>Entonces, prepárate para otro viaje inolvidable y experimenta la maravilla de 'One Last Breath 2'. La naturaleza te llama, y es hora de responder.</p>`,
      video: '',
      date: '10 de Julio de 2023'
    }
  },
  {
    en: {
      id: 11,
      title: 'Blink Galaxy Exclusive: Maniac Panda\'s New VR Experience',
      subtitle: 'Immerse Yourself in Virtual Worlds',
      textResume: 'Step into a new dimension of gaming with VR.',
      text: `<p>Blink Galaxy users are in for a treat! Maniac Panda is launching an exclusive VR experience that will transport you to exciting virtual worlds. Get ready to explore, interact, and game like never before.</p>
      <p>Step into a new dimension with Blink Galaxy VR. Whether you're a seasoned gamer or new to virtual reality, this immersive experience will blow you away.</p>
      <p>Explore distant galaxies, battle fierce monsters, solve intricate puzzles, and engage in epic quests, all from the comfort of your VR headset. The graphics are stunning, the gameplay is smooth, and the adventures are endless.</p>
      <p>But it's not just about gaming; it's about exploration. Blink Galaxy VR lets you visit fantastical realms, walk among mythical creatures, uncover hidden treasures, and immerse yourself in captivating narratives. It's a journey of discovery like no other.</p>
      <p>Experience the thrill of soaring through the skies on the back of a dragon, engage in intense sword battles with otherworldly foes, and unravel the mysteries of ancient civilizations. With Blink Galaxy VR, every adventure is a breathtaking spectacle.</p>
      <p>Delve into a vast library of VR games and experiences, each offering a unique and mesmerizing world to explore. Whether you're seeking heart-pounding action, mind-bending puzzles, tranquil landscapes, or immersive storytelling, Blink Galaxy VR has something for everyone.</p>
      <p>So, gear up for the VR adventure of a lifetime. Blink Galaxy awaits, and the virtual world is yours to conquer. Embark on a journey beyond imagination and redefine your perception of gaming.</p>
      <p>Don't miss the chance to be among the first to experience Blink Galaxy VR. Maniac Panda is offering an exclusive pre-launch access period where you can explore a selection of VR worlds before the official release. This limited-time opportunity allows you to provide valuable feedback and shape the future of virtual reality gaming.</p>`,
      video: '',
      date: 'August 18, 2023'
    },
    es: {
      id: 11,
      title: 'Exclusiva de Blink Galaxy: Nueva Experiencia de Realidad Virtual de Maniac Panda',
      subtitle: 'Sumérgete en Mundos Virtuales',
      textResume: 'Adéntrate en una nueva dimensión de los videojuegos con la RV.',
      text: `<p>¡Los usuarios de Blink Galaxy están de enhorabuena! Maniac Panda está lanzando una experiencia de realidad virtual exclusiva que te transportará a emocionantes mundos virtuales. Prepárate para explorar, interactuar y jugar como nunca antes.</p>
      <p>Adéntrate en una nueva dimensión con Blink Galaxy VR. Ya seas un jugador experimentado o nuevo en la realidad virtual, esta experiencia inmersiva te dejará sin palabras.</p>
      <p>Explora galaxias distantes, combate contra feroces monstruos, resuelve intrincados acertijos y participa en épicas misiones, todo desde la comodidad de tu visor de realidad virtual. Los gráficos son impresionantes, la jugabilidad es fluida y las aventuras son interminables.</p>
      <p>Pero no se trata solo de juegos; se trata de exploración. Blink Galaxy VR te permite visitar reinos fantásticos, caminar entre criaturas míticas, descubrir tesoros ocultos y sumergirte en narrativas cautivadoras. Es un viaje de descubrimiento como ningún otro.</p>
      <p>Experimenta la emoción de surcar los cielos montado en un dragón, enfréntate en intensas batallas de espadas contra enemigos de otro mundo y descubre los misterios de civilizaciones antiguas. Con Blink Galaxy VR, cada aventura es un espectáculo impresionante.</p>
      <p>Sumérgete en una vasta biblioteca de juegos y experiencias de realidad virtual, cada uno ofreciendo un mundo único y fascinante para explorar. Ya busques acción trepidante, rompecabezas desafiantes, paisajes tranquilos o narrativa inmersiva, Blink Galaxy VR tiene algo para todos.</p>
      <p>Así que, prepárate para la aventura de realidad virtual de tu vida. Blink Galaxy te espera, y el mundo virtual es tuyo para conquistar. Embárcate en un viaje más allá de la imaginación y redefine tu percepción de los videojuegos.</p>
      <p>No te pierdas la oportunidad de ser uno de los primeros en experimentar Blink Galaxy VR. Maniac Panda ofrece un período de acceso previo al lanzamiento exclusivo donde podrás explorar una selección de mundos de realidad virtual antes del lanzamiento oficial. Esta oportunidad limitada te permite brindar comentarios valiosos y dar forma al futuro de los videojuegos de realidad virtual.</p>`,
      video: '',
      date: '18 de Agosto de 2023'
    }
  },
  {
    en: {
      id: 12,
      title: 'Maniac Panda\'s Racerloop Update: Galactic Grand Prix',
      subtitle: 'Join the Ultimate Space Race',
      textResume: 'Compete in the biggest Racerloop event of the year.',
      text: `<p>Racerloop fans, get ready for the Galactic Grand Prix! Maniac Panda is rolling out a massive update that introduces the most intense space races yet. Will you emerge as the ultimate champion of the galaxy?</p>
      <p>The Galactic Grand Prix is the event of the year, and it's open to racers of all skill levels. Whether you're a seasoned pro or a rookie pilot, this is your chance to prove your skills on the interstellar stage.</p>
      <p>Join fellow racers in the pits, rev your engines and get ready to race for glory in the Galactic Grand Prix. The stars are your arena, and victory is within your reach.</p>`,
      video: '',
      date: 'September 30, 2023'
    },
    es: {
      id: 12,
      title: 'Actualización de Racerloop de Maniac Panda: Gran Premio Galáctico',
      subtitle: 'Únete a la Carrera Espacial Definitiva',
      textResume: 'Compite en el evento más grande de Racerloop del año.',
      text: `<p>¡Fans de Racerloop, prepárense para el Gran Premio Galáctico! Maniac Panda está lanzando una actualización masiva que introduce las carreras espaciales más intensas hasta la fecha. ¿Te convertirás en el campeón supremo de la galaxia?</p>
      <p>El Gran Premio Galáctico es el evento del año y está abierto a pilotos de todos los niveles de habilidad. Ya seas un profesional experimentado o un piloto novato, esta es tu oportunidad para demostrar tus habilidades en el escenario interestelar.</p>
      <p>Únete a otros corredores en los boxes, acelera tus motores y prepárate para correr por la gloria en el Gran Premio Galáctico. Las estrellas son tu arena y la victoria está a tu alcance.</p>`,
      video: '',
      date: '30 de Septiembre de 2023'
    }
  },
  {
    en: {
      id: 13,
      title: 'Maniac Panda Celebrates Earth Day',
      subtitle: 'Join Us in Preserving Our Planet',
      textResume: 'Discover our Earth Day initiatives.',
      text: `<p>At Maniac Panda, we believe in the importance of preserving our planet. Join us in celebrating Earth Day and learn about our environmental initiatives aimed at creating a more sustainable future.</p>
      <p>Earth Day is a reminder that we all share a responsibility to protect our planet. At Maniac Panda, we are committed to making a positive impact on the environment.</p>
      <p>Join us in a series of Earth Day events, from tree-planting drives to eco-friendly workshops. Together, we can raise awareness, promote sustainability, and make a difference.</p>
      <p>Discover how you can reduce your carbon footprint, support conservation efforts, and embrace a greener lifestyle. Every small action counts, and together, we can create a better future for our planet.</p>
      <p>Stay tuned for updates on our Earth Day events and initiatives. Let's work together to make Earth Day not just a day of celebration, but a day of meaningful action.</p>`,
      video: '',
      date: 'October 22, 2023'
    },
    es: {
      id: 13,
      title: 'Maniac Panda Celebra el Día de la Tierra',
      subtitle: 'Únete a Nosotros en la Preservación de Nuestro Planeta',
      textResume: 'Descubre nuestras iniciativas para el Día de la Tierra.',
      text: `<p>En Maniac Panda, creemos en la importancia de preservar nuestro planeta. Únete a nosotros en la celebración del Día de la Tierra y conoce nuestras iniciativas ambientales destinadas a crear un futuro más sostenible.</p>
      <p>El Día de la Tierra es un recordatorio de que todos compartimos la responsabilidad de proteger nuestro planeta. En Maniac Panda, estamos comprometidos en crear un impacto positivo en el medio ambiente.</p>
      <p>Únete a nosotros en una serie de eventos del Día de la Tierra, desde campañas de plantación de árboles hasta talleres ecológicos. Juntos, podemos crear conciencia, promover la sostenibilidad y marcar la diferencia.</p>
      <p>Descubre cómo puedes reducir tu huella de carbono, apoyar los esfuerzos de conservación y adoptar un estilo de vida más verde. Cada pequeña acción cuenta y, juntos, podemos crear un futuro mejor para nuestro planeta.</p>
      <p>Mantente atento a las actualizaciones sobre nuestros eventos e iniciativas del Día de la Tierra. Trabajemos juntos para hacer que el Día de la Tierra no sea solo un día de celebración, sino también un día de acción significativa.</p>`,
      video: '',
      date: '22 de Octubre de 2023'
    }
  },
  {
    en: {
      id: 14,
      title: 'Maniac Panda\'s New Project Teaser',
      subtitle: 'Unlocking New Horizons in Gaming',
      textResume: 'Stay tuned for an exciting announcement.',
      text: `<p>Maniac Panda is gearing up to unveil a mysterious new project that promises to push the boundaries of gaming. Get ready for a thrilling adventure as we embark on this groundbreaking journey.</p>
      <p>The world of gaming is about to change forever, and Maniac Panda is at the forefront of innovation. Our upcoming project is shrouded in secrecy, but we can promise you this: it will redefine what's possible in gaming.</p>
      <p>Prepare to be amazed, excited, and challenged like never before. The boundaries between reality and the virtual world will blur, and you'll be at the center of the action.</p>
      <p>Stay tuned for the big reveal, as we lift the curtain on a project that will leave a lasting impact on the gaming industry. The future is here, and it's brought to you by Maniac Panda.</p>
      <p>As we embark on this thrilling journey, we can't help but reflect on our history. Maniac Panda has a legacy of delivering groundbreaking gaming experiences. From the launch of Outer Ring that took players on an unforgettable cosmic adventure to the heartwarming storytelling of One Last Breath, we've always pushed the envelope.</p>
      <p>Our team of passionate game developers, designers, and visionaries has come together once again to craft a project that defies expectations. We've poured countless hours into research, development, and innovation to ensure that this project will be nothing short of extraordinary.</p>
      <h2>Community</h2>
      <p>But this isn't just about us; it's about you, the gaming community. We're excited to share this journey with you, to invite you into a world where the limits of imagination are stretched beyond recognition. Your feedback and enthusiasm have driven us, and we can't wait to see how you'll experience our latest creation.</p>
      <p>The gaming world is about to change, and Maniac Panda is leading the way. Together, we'll redefine the future of gaming, one pixel at a time. The countdown begins, and the adventure of a lifetime awaits.</p>
      <p>With Maniac Panda's track record of innovation, there's no telling what kind of revolution this new project will bring to the gaming industry. From cutting-edge graphics to immersive gameplay, we've always pushed the boundaries of what's possible.</p>
      <p>As we venture into this uncharted territory, we're reminded of the incredible support we've received from our dedicated community. Your passion for gaming drives us to reach new heights, and we're grateful for the trust you've placed in us.</p>
      <p>While we can't reveal all the details just yet, we can promise that this project will be worth the wait. It's a culmination of our team's creativity and a testament to our commitment to delivering top-notch gaming experiences.</p>
      <img src="assets/images/news/14/maniacGames.png" alt="Mania Panda games">
      <p>Stay connected with us through our social media channels and website for the latest updates and teasers. We'll be dropping hints and exclusive sneak peeks leading up to the big reveal, so you won't want to miss out.</p>
      <p>In the world of gaming, change is constant, and innovation is key. Maniac Panda's new project is poised to shake up the industry, and we invite you to be part of this exciting journey.</p>
      <p>The countdown to the big reveal has begun, and the gaming world will never be the same again. Get ready to be amazed, thrilled, and captivated as we unveil the future of gaming.</p>
      <h2>Project</h2>
      <p>This project is a labor of love for our team, and we can't wait to share it with you. From stunning visuals to immersive gameplay, it's a testament to our dedication to delivering exceptional gaming experiences.</p>
      <p>We'll be keeping you updated every step of the way, so be sure to stay tuned to our website and social media channels for the latest news and sneak peeks.</p>
      <p>In the world of gaming, there are moments that define eras, and this project is poised to be one of them. It's a game-changer in every sense of the word, and we can't wait to see your reactions when we finally unveil it.</p>
      <p>Maniac Panda has always been about pushing the boundaries of what's possible in gaming, and this project is no exception. It's a bold step into the future, and we're thrilled to have you along for the ride.</p>
      <p>Get ready to be part of gaming history as we unveil a project that will redefine the industry. The countdown has begun, and the future of gaming is within reach.</p>
      <p>With Maniac Panda's reputation for excellence in the gaming industry, expectations are high for this new project. We're committed to not only meeting but exceeding those expectations.</p>
      <p>The gaming world is on the brink of a revolution, and Maniac Panda is leading the charge. Get ready for a gaming experience like no other, because the future is about to become a reality.</p>
      <p>We understand that anticipation is building, and we want to assure you that this project is worth every moment of the wait. The gaming world is about to be forever changed, and you're invited to be part of the journey.</p>`,
      video: 'https://www.youtube.com/embed/51xgJy0MIAI',
      date: 'November 5, 2023'
    },
    es: {
      id: 14,
      title: 'Avance del Nuevo Proyecto de Maniac Panda',
      subtitle: 'Abriendo Nuevos Horizontes en los Videojuegos',
      textResume: 'Mantente atento a un emocionante anuncio.',
      text: `<p>Maniac Panda se está preparando para desvelar un misterioso nuevo proyecto que promete llevar los límites de los videojuegos. Prepárate para una emocionante aventura mientras emprendemos este viaje innovador.</p>
      <p>El mundo de los videojuegos está a punto de cambiar para siempre, y Maniac Panda está a la vanguardia de la innovación. Nuestro próximo proyecto está envuelto en secreto, pero podemos prometerte esto: redefinirá lo que es posible en los videojuegos.</p>
      <p>Prepárate para asombrarte, emocionarte y enfrentarte a desafíos como nunca antes. Los límites entre la realidad y el mundo virtual se difuminarán, y estarás en el centro de la acción.</p>
      <p>Mantente atento al gran revelo, mientras levantamos el telón de un proyecto que dejará una huella duradera en la industria de los videojuegos. El futuro está aquí, y te lo trae Maniac Panda.</p>
      <p>A medida que nos embarcamos en este emocionante viaje, no podemos evitar reflexionar sobre nuestra historia. Maniac Panda tiene una historia de entregar experiencias de juego revolucionarias. Desde el lanzamiento de Outer Ring, que llevó a los jugadores en una inolvidable aventura cósmica, hasta la conmovedora narración de One Last Breath, siempre hemos empujado los límites.</p>
      <p>Nuestro equipo de apasionados desarrolladores de juegos, diseñadores y visionarios se ha unido una vez más para crear un proyecto que desafía las expectativas. Hemos invertido innumerables horas en investigación, desarrollo e innovación para asegurarnos de que este proyecto sea extraordinario.</p>
      <h2>Comunidad</h2>
      <p>Pero esto no se trata solo de nosotros, se trata de ti, la comunidad de jugadores. Estamos emocionados de compartir este viaje contigo, de invitarte a un mundo donde los límites de la imaginación se estiran más allá del reconocimiento. Tus comentarios y entusiasmo nos han impulsado, y no podemos esperar para ver cómo experimentarás nuestra última creación.</p>
      <p>El mundo de los videojuegos está a punto de cambiar, y Maniac Panda lidera el camino. Juntos, redefiniremos el futuro de los videojuegos, píxel a píxel. La cuenta atrás ha comenzado, y la aventura de tu vida te espera.</p>
      <p>Con el historial de Maniac Panda en innovación, no hay forma de predecir qué tipo de revolución traerá este nuevo proyecto a la industria de los videojuegos. Desde gráficos de última generación hasta jugabilidad inmersiva, siempre hemos empujado los límites de lo posible.</p>
      <p>A medida que nos aventuramos en este territorio inexplorado, recordamos el increíble apoyo que hemos recibido de nuestra dedicada comunidad. Tu pasión por los videojuegos nos impulsa a alcanzar nuevas alturas, y estamos agradecidos por la confianza que has depositado en nosotros.</p>
      <p>Aunque no podemos revelar todos los detalles aún, podemos prometer que este proyecto valdrá la pena la espera. Es la culminación de la creatividad de nuestro equipo y un testimonio de nuestro compromiso de entregar experiencias de juego excepcionales.</p>
      <img src="assets/images/news/14/maniacGames.png" alt="Mania Panda games">
      <p>Mantente conectado con nosotros a través de nuestros canales de redes sociales y sitio web para obtener las últimas actualizaciones y adelantos. Estaremos soltando pistas y avances exclusivos en los días previos al gran revelo, así que no querrás perdértelo.</p>
      <p>En el mundo de los videojuegos, el cambio es constante y la innovación es clave. El nuevo proyecto de Maniac Panda está listo para sacudir la industria, y te invitamos a ser parte de este emocionante viaje.</p>
      <p>La cuenta regresiva para el gran revelo ha comenzado, y el mundo de los videojuegos nunca volverá a ser el mismo. Prepárate para asombrarte, emocionarte y cautivarte mientras desvelamos el futuro de los videojuegos.</p>
      <h2>Proyecto</h2>
      <p>Este proyecto es un trabajo de amor para nuestro equipo, y no podemos esperar para compartirlo contigo. Desde gráficos impresionantes hasta una jugabilidad envolvente, es un testimonio de nuestra dedicación para entregar experiencias de juego excepcionales.</p>
      <p>Te mantendremos actualizado en cada paso del camino, así que asegúrate de estar atento a nuestro sitio web y canales de redes sociales para las últimas noticias y adelantos.</p>
      <p>En el mundo de los videojuegos, hay momentos que definen épocas, y este proyecto está listo para ser uno de ellos. Es un cambio de juego en todos los sentidos de la palabra, y no podemos esperar para ver tus reacciones cuando finalmente lo revelemos.</p>
      <p>Maniac Panda siempre ha tratado de empujar los límites de lo que es posible en los videojuegos, y este proyecto no es una excepción. Es un paso audaz hacia el futuro, y estamos emocionados de tenerte en este viaje.</p>
      <p>Prepárate para ser parte de la historia de los videojuegos mientras desvelamos un proyecto que redefinirá la industria. La cuenta regresiva ha comenzado, y el futuro de los videojuegos está al alcance de la mano.</p>
      <p>Con la reputación de Maniac Panda por la excelencia en la industria de los videojuegos, las expectativas son altas para este nuevo proyecto. Estamos comprometidos no solo a cumplir, sino a superar esas expectativas.</p>
      <p>El mundo de los videojuegos está al borde de una revolución, y Maniac Panda está liderando el camino. Prepárate para una experiencia de juego como ninguna otra, porque el futuro está a punto de convertirse en realidad.</p>
      <p>Entendemos que la anticipación está creciendo, y queremos asegurarte que este proyecto valdrá la pena cada momento de la espera. El mundo de los videojuegos está a punto de cambiar para siempre, y estás invitado a ser parte del viaje.</p>`,
      video: 'https://www.youtube.com/embed/51xgJy0MIAI',
      date: '5 de Noviembre de 2023'
    }
  }
];
