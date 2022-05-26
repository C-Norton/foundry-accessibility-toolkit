console.log("Foundry Accessibility Toolkit Is indeed loading settings.js")
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
    onChange: value => console.log(value)
};
game.settings.register(moduleName, settingsTargetSize, settingblock);