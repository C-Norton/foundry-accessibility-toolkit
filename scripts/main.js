console.log('foundry-accessibility-toolkit | Hello World!');
export const registerSettings = () =>{
    game.settings.registerMenu("foundry-accessibility-toolkit", "Target Indicator Size", {
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
    });

};