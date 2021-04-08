const naruto = {
  manga: "Naruto",
  anime: "Naruto",
  episodes: 750,
  sales: "2m copy",
};
const attackOnTitans = {
  manga: "Attack on titans",
  anime: "Attack on titans",
  episodes: 270,
  sales: "1m copy",
};
const deathNote = {
  manga: "Death Note",
  anime: "Death Note",
  episodes: 37,
  sales: "1m copy",
};

//  bad code
console.log(naruto);
console.log(attackOnTitans);

// good code

console.log({ naruto, attackOnTitans, deathNote });
console.table([naruto, attackOnTitans, deathNote]);

//  destructurization

// good code

function anime(deathNote) {
  const { manga, anime, episodes } = deathNote;
  console.log(`manga name ${manga} of ${anime} . episodes- ${episodes}`);
}

// OR

function animedes({ manga, anime, episodes }) {
  console.log(`manga name ${manga} of ${anime} . episodes- ${episodes}`);
}

animedes(attackOnTitans);
anime(deathNote);

// good object code

const newMan = { attackOnTitans, naruto };
console.log("newMan", newMan);
