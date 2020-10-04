import { Genres, IMovie } from '../../shared/interfaces/movies.model';

const movies: Array<IMovie> = [
  {
    title: 'alice in wonderland',
    genre: [Genres.Drama],
    releaseDate: '2010-09-17',
    imagePath: '../assets/images/alice in wonderland.jpg',
    url: 'aliceinwonderland.com',
    id: 1,
    duration: 108,
    rating: 6.4,
    description: 'Alice, now 19 years old, follows a rabbit in a blue coat to a magical wonderland from her dreams where she is reunited with her friends who make her realize her true destiny.',
  },
  {
    title: 'back to the future',
    genre: [Genres.Comedy],
    releaseDate: '1985-09-17',
    imagePath: '../assets/images/back to the future.jpg',
    url: 'backtothefuture.com',
    id: 2,
    duration: 116,
    rating: 8.5,
    description: 'Marty travels back in time using an eccentric scientist\'s time machine. However, he must make his high-school-aged parents fall in love in order to return to the present.',
  },
  {
    title: 'django unchained',
    genre: [Genres.Action, Genres.Comedy],
    releaseDate: '2012-09-17',
    imagePath: '../assets/images/django.jpg',
    url: 'djangounchained.com',
    id: 3,
    duration: 165,
    rating: 8.4,
    description: 'When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been captured by a hard-hearted plantation owner.',
  },
  {
    title: 'fight club',
    genre: [Genres.Action, Genres.Drama],
    releaseDate: '1999-09-17',
    imagePath: '../assets/images/fight club.jpg',
    url: 'fightclub.com',
    id: 4,
    duration: 151,
    rating: 8.8,
    description: 'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
  },
  {
    title: 'first blood',
    genre: [Genres.Action],
    releaseDate: '1982-09-17',
    imagePath: '../assets/images/first blood.jpg',
    url: 'firstblood.com',
    id: 5,
    duration: 93,
    rating: 7.7,
    description: 'John Rambo, a former US soldier traumatised by memories of the Vietnam War, gets into trouble when an incident with a small-town sheriff triggers his violent side.',
  },
  {
    title: 'harry potter',
    genre: [Genres.Action],
    releaseDate: '2001-09-17',
    imagePath: '../assets/images/harry potter.jpg',
    url: 'harrypotter.com',
    id: 6,
    duration: 159,
    rating: 7.6,
    description: 'Harry Potter, an eleven-year-old orphan, discovers that he is a wizard and is invited to study at Hogwarts. Even as he escapes a dreary life and enters a world of magic, he finds trouble awaiting him.',
  },
  {
    title: 'home alone',
    genre: [Genres.Comedy],
    releaseDate: '1990-09-17',
    imagePath: '../assets/images/home alone.jpg',
    url: 'homealone.com',
    id: 7,
    duration: 103,
    rating: 7.6,
    description: 'Eight-year-old Kevin is accidentally left behind when his family leaves for France. At first, he is happy to be in charge, but when thieves try to break into his home, he tries to put up a fight.',
  },
  {
    title: 'jurassic park',
    genre: [Genres.Action],
    releaseDate: '1993-09-17',
    imagePath: '../assets/images/jurassic park.jpg',
    url: 'jurassicpark.com',
    id: 8,
    duration: 127,
    rating: 8.1,
    description: 'John Hammond, an entrepreneur, opens a wildlife park containing cloned dinosaurs. However, a breakdown of the island\'s security system causes the creatures to escape and bring about chaos.',
  },
  {
    title: 'legally blonde',
    genre: [Genres.Comedy],
    releaseDate: '2001-09-17',
    imagePath: '../assets/images/legally blonde.jpg',
    url: 'legallyblonde.com',
    id: 9,
    duration: 97,
    rating: 6.3,
    description: 'Elle\'s boyfriend breaks up with her for a smarter girl as he plans to become a politician and joins Harward law school. Elle gets enrolled in the same school in an effort to teach him a lesson.',
  },
  {
    title: 'leon',
    genre: [Genres.Action, Genres.Drama],
    releaseDate: '1994-09-17',
    imagePath: '../assets/images/leon.jpg',
    url: 'leon.com',
    id: 10,
    duration: 110,
    rating: 8.5,
    description: 'When 12-year-old Mathilda\'s family is killed, her neighbour Leon, who is a professional assassin, reluctantly takes her under his wing and teaches her the secrets of his trade.',
  },
  {
    title: 'little women',
    genre: [Genres.Drama],
    releaseDate: '2019-09-17',
    imagePath: '../assets/images/little women.jpg',
    url: 'littlewomen.com',
    id: 11,
    duration: 135,
    rating: 7.8,
    description: 'In the years after the Civil War, Jo March lives in New York and makes her living as a writer, while her sister Amy studies painting in Paris. Amy has a chance encounter with Theodore, a childhood crush who proposed to Jo but was ultimately rejected. Their oldest sibling, Meg, is married to a schoolteacher, while shy sister Beth develops a devastating illness that brings the family back together.',
  },
  {
    title: 'once upon a time in hollywood',
    genre: [Genres.Comedy, Genres.Drama],
    releaseDate: '2019-09-17',
    imagePath: '../assets/images/once upon a time in hollywood.jpg',
    url: 'onceuponatimeinhollywood.com',
    id: 12,
    duration: 160,
    rating: 7.6,
    description: 'Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. Meanwhile, living next door to Rick is Sharon Tate and her husband Roman Polanski.',
  },
  {
    title: 'parasite',
    genre: [Genres.Comedy, Genres.Drama],
    releaseDate: '2019-09-17',
    imagePath: '../assets/images/parasite.jpg',
    url: 'parasite.com',
    id: 13,
    duration: 132,
    rating: 8.6,
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
  },
  {
    title: 'pennywise the dancing clown',
    genre: [Genres.Horror],
    releaseDate: '2017-09-17',
    imagePath: '../assets/images/pennywise the dancing clown.jpg',
    url: 'pennywisethedancingclown.com',
    id: 14,
    duration: 135,
    rating: 7.3,
    description: 'Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.',
  },
  {
    title: 'ratatouille',
    genre: [Genres.Comedy, Genres.Drama],
    releaseDate: '2007-09-17',
    imagePath: '../assets/images/ratatouille.jpg',
    url: 'ratatouille.com',
    id: 15,
    duration: 111,
    rating: 8,
    description: 'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
  },
  {
    title: 'shining',
    genre: [Genres.Horror],
    releaseDate: '1980-09-17',
    imagePath: '../assets/images/shining.jpg',
    url: 'shining.com',
    id: 16,
    duration: 146,
    rating: 8.4,
    description: 'Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.',
  },
  {
    title: 'star wars',
    genre: [Genres.Action],
    releaseDate: '1977-09-17',
    imagePath: '../assets/images/star wars.jpg',
    url: 'starwars.com',
    id: 17,
    duration: 125,
    rating: 8.6,
    description: 'After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.',
  },
  {
    title: 'the invisible man',
    genre: [Genres.Horror],
    releaseDate: '2020-09-17',
    imagePath: '../assets/images/the invisible man.jpg',
    url: 'theinvisibleman.com',
    id: 18,
    duration: 125,
    rating: 7.1,
    description: 'After staging his own suicide, a crazed scientist uses his power to become invisible to stalk and terrorize his ex-girlfriend. When the police refuse to believe her story, she decides to take matters into her own hands and fight back.',
  },
  {
    title: 'the matrix',
    genre: [Genres.Action],
    releaseDate: '1999-09-17',
    imagePath: '../assets/images/the matrix.jpg',
    url: 'thematrix.com',
    id: 19,
    duration: 150,
    rating: 8.7,
    description: 'Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.',
  },
  {
    title: 'willy wonka and the chocolate factory',
    genre: [Genres.Comedy],
    releaseDate: '1971-09-17',
    imagePath: '../assets/images/willy wonka and the chocolate factory.jpg',
    url: 'willywonkaandthechocolatefactory.com',
    id: 20,
    duration: 89,
    rating: 7.8,
    description: 'A factory owner gives 5 children a chance to win a lifetime supply of sweets. Charlie, along with four odious children enter the factory. Disasters befall each of the children. Will Charlie survive?',
  },
];

/*
  {
    title: '',
    genre: [],
    releaseDate: ''',-09-17'
    imagePath: '../assets/images/.jpg',
    url: '.com',
    id: ,
    duration: ,
    rating: ,
    description: '',
  },
*/

export default movies;
