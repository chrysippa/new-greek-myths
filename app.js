const heroes = ['Jason', 'Heracles', 'Perseus', 'Theseus', 'Achilles', 'Greg'];
const cities = ['Thebes', 'Ephesus', 'Sparta', 'Corinth', 'Argos', 'Los Angeles'];
const creatures = ['minotaur', 'hydra', 'poodle', 'chimera', 'pgymy goat', 'rabbit'];

const numGenerator = numOptions => Math.floor(Math.random() * numOptions);

const template = "The great hero HERO was traveling near the city of CITY when he heard \
that the city was being menaced by a vicious CREATURE. The CREATURE would lurk at the outskirts \
of the city and eat anyone who dared to come near. But HERO was not deterred and set out to \
confront the CREATURE. They fought a great battle! But through his strength and cunning HERO was \
able to slay the beast. The citizens of CITY were grateful and presented HERO with a cloak of the \
CREATURE's hide to wear. To this day the area around CITY is sometimes called the land of HERO.";