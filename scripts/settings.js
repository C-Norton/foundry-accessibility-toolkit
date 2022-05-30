console.log("Foundry Accessibility Toolkit Is indeed loading settings.js again")
const settingsTargetSize = "Target Indicator Size";
const settingblock = {
    name: "Targeting Indicator Size",
    hint: "Adjusts the size of the dot applied to tokens when OTHER players target them",
    scope: "client",
    config: true,
    type: Number,
    range: {
        min: 10,
        max: 100,
        step: 10
    },
    default: 20,
    onChange: value => {console.log(value)}
};
game.settings = new ClientSettings();
game.settings.registerMenu("foundryaccessibilitytoolkit", "targetsize", {
    name: "Register a Module Setting with a Range slider",
    hint: "A description of the registered setting and its behavior.",
    scope: "world",      // This specifies a world-level setting
    config: true,        // This specifies that the setting appears in the configuration view
    type: Number,
    range: {             // If range is specified, the resulting setting will be a range slider
        min: 0,
        max: 100,
        step: 10
    },
    default: 50,         // The default value for the setting
    onChange: value => { // A callback function which triggers when the setting is changed
        console.log(value)
    }
});