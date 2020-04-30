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

        // Try all the permutations using wizard1 as the earth wizard
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
function tryCombination(earthWizard, waterWizard, fireWizard, airWizard) {

    // Sumi says Riku is the water wizard
    // Sumi is telling the truth, verify it
    if ((earthWizard === 'Sumi' || waterWizard === 'Sumi') && waterWizard !== 'Rikku') {
        return false;
    }

    // Sumi is lying, verify what was said was not true
    if ((fireWizard === 'Sumi' || airWizard === 'Sumi') && waterWizard === 'Rikku') {
        return false;
    }


    // Rikku says Bella is the fire wizard
    // Rikku is telling the truth, verify it
    if ((earthWizard === 'Rikku' || waterWizard === 'Rikku') && fireWizard !== 'Bella') {
        return false;
    }

    // Rikku is lying, verify what was said was not true
    if ((fireWizard === 'Rikku' || airWizard === 'Rikku') && fireWizard === 'Bella') {
        return false;
    }


    // Bella says Jonah is the air wizard
    // Bella is telling the truth, verify it
    if ((earthWizard === 'Bella' || waterWizard === 'Bella') && airWizard !== 'Jonah') {
        return false;
    }

    // Bella is lying, verify what was said was not true
    if ((fireWizard === 'Bella' || airWizard === 'Bella') && airWizard === 'Jonah') {
        return false;
    }


    // Jonah says Sumi is not the earth wizard
    // Jonah is telling the truth, verify it
    if ((earthWizard === 'Jonah' || waterWizard === 'Jonah') && earthWizard === 'Sumi') {
        return false;
    }

    // Jonah is lying, verify what was said was not true
    if ((fireWizard === 'Jonah' || airWizard === 'Jonah') && earthWizard !== 'Sumi') {
        return false;
    }


    console.log('Solution: [Earth: ' + earthWizard + '] [Water: ' + waterWizard + '] [Fire: ' + fireWizard + '] [Air: ' + airWizard + ']');
    process.exit(1);
}
