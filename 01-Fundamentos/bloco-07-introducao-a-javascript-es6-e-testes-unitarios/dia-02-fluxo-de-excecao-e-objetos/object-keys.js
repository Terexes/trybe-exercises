/*

const coolestTvShow = {
  name: 'BoJack Horseman',
  genre: 'adult animation',
  createdBy: 'Raphael Bob-Waksberg',
  favoriteCharacter: 'Princess Carolyn',
  quote: 'Princess Carolyn always lands on her feet.',
  seasons: 6
};

// console.log(Object.keys(coolestTvShow));

for (const key in coolestTvShow) {
  console.log(key);
}

// for of não consegue iterar o objeto
for (const value of coolestTvShow) {
  console.log(value);
}
*/
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const skills = Object.keys(student);

  for (const value in skills) {
    console.log(`${skills[value]}: ${student[skills[value]]}`);
  }
};

listSkills(student1);
