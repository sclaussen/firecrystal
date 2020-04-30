'use strict';


main(process.argv);


function main(args) {
    fireCrystals();
}


function fireCrystals() {
    let wizards = [ 'Sumi', 'Rikku', 'Bella', 'Jonah' ];

    for (let wizard1 of wizards) {

        // Remove the wizard from the list
        let otherWizards = wizards.filter(function(value, index, arr) { return value !== wizard1 });

        let wizard2 = otherWizards[0];
        let wizard3 = otherWizards[1];
        let wizard4 = otherWizards[2];

        tryCombination(wizard1, wizard2, wizard3, wizard4);
        tryCombination(wizard1, wizard2, wizard4, wizard3);
        tryCombination(wizard1, wizard3, wizard2, wizard4);
        tryCombination(wizard1, wizard3, wizard4, wizard3);
        tryCombination(wizard1, wizard4, wizard2, wizard3);
        tryCombination(wizard1, wizard4, wizard3, wizard2);
    }
}


// Assumes earthWizard and waterWizard tell the truth
// Assumes fireWizard and airWizard are not telling the truth
//
// Sumi: Rikku -> Water
// Rikku: Bella -> Fire
// Bella: Jonah -> Air
// Jonah: Sumi != Earth
function tryCombination(earthWizard, waterWizard, fireWizard, airWizard) {

    if ((earthWizard === 'Sumi' || waterWizard === 'Sumi') && waterWizard !== 'Rikku') {
        return false;
    }

    if ((earthWizard === 'Rikku' || waterWizard === 'Rikku') && fireWizard !== 'Bella') {
        return false;
    }

    if ((earthWizard === 'Bella' || waterWizard === 'Bella') && airWizard !== 'Jonah') {
        return false;
    }

    if ((earthWizard === 'Jonah' || waterWizard === 'Jonah') && earthWizard === 'Sumi') {
        return false;
    }

    if ((fireWizard === 'Sumi' || airWizard === 'Sumi') && waterWizard === 'Rikku') {
        return false;
    }

    if ((fireWizard === 'Rikku' || airWizard === 'Rikku') && fireWizard === 'Bella') {
        return false;
    }

    if ((fireWizard === 'Bella' || airWizard === 'Bella') && airWizard === 'Jonah') {
        return false;
    }

    if ((fireWizard === 'Jonah' || airWizard === 'Jonah') && earthWizard === 'Sumi') {
        return false;
    }

    console.log('Solution: ' + earthWizard + ' ' + waterWizard + ' ' + fireWizard + ' ' + airWizard);
    process.exit(1);
}
