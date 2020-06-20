function makeCoffee(sugar, milk) {
    var instructions = 'Boil Water,';

    instructions += " pour into a cup, "
    instructions += " add coffee granules, ";
    instructions += " add " + sugar + " spoons of sugar,";
    instructions += " add " + milk + " % of milk.";

    return instructions;
}

console.log(makeCoffee(0, 40));


