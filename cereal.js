var suggestions = process.argv[2];
var flavor = ["Apple", "Cap'n", "Cinammon", "Cocoa", "Frosted", "Fruit", "Honey Bunches of", "Raisin", "Shredded", "Toasted"];
var texture = ["Bran", "Crunch", "Crisp", "Flakes", "Jacks", "Krispies", "Loops", "Pebbles", "Pops", "Puffs"];

for (i=0; i<= suggestions; i ++){
  var flavor_random = Math.floor(flavor.length*Math.random());
  var texture_random = Math.floor(texture.length*Math.random());
  console.log(flavor[flavor_random] + " " + texture[texture_random]);
};
