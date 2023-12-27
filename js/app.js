const staff = [
    {
        name: 'Masud Rana',
        age: 42,
        position: 'Teacher Trainer'
    },
      {
        name: 'Intazul Kazol',
        age: 40,
        position: 'Record Keeper'
    },
      {
        name: 'Nazrul Islam',
        age: 35,
        position: 'Office Assistant'
    },
      {
        name: 'Nuruddin Abul Kalam',
        age: 56,
        position: 'Training Specialist'
    },
      {
        name: 'Mohammad Abdur Rahman',
        age: 48,
        position: 'Assistant Director'
    },
      {
        name: 'Roshana Bilkis',
        age: 54,
        position: 'Director'
    }
];
const test = ((t , i) => {
  console.log(i)
  console.log(t)
 return t.name
})
const designation = staff.map(p => `<h2>${p.name}`);

const names = document.querySelector('#name');
names.innerHTML= designation.join('');
