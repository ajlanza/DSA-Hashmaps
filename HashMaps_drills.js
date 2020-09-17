const HashMap = require('./HashMap');

//HashMap.SIZE_RATIO = .5;
//HashMap.MAX_LOAD_RATIO = 3;

function main() {
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = .5;
  lotr.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Human", "Adam");
  lotr.set("Human", "Andy");
  lotr.set("Human", "Katy");
  lotr.set("Cat", "Dimmy");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen")
  lotr.set("Ent", "Treebeard")
  console.log('Maiar key:', lotr.get('Maiar'))
  console.log('Hobbit key:', lotr.get('Hobbit'))
  console.log(lotr._capacity);

  return lotr;
}

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

function removeDuplicates(string) {
  const duplicates = new HashMap();
  let newString = '';
  for(let i = 0; i < string.length; i++) {
    // if(duplicates.get(string[i]) === null){
    //   console.log('null');
    // }
    if(duplicates.get(string[i]) === 'error'){
      newString += string[i];
    };
    duplicates.set(string[i], string[i]);
    
  }
  console.log(newString);
}

console.log(main());
//WhatDoesThisDo();
removeDuplicates('google');