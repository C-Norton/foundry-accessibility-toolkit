class FoundryAccessibilityToolkitData {
    static SETTINGS = {
        INJECT_BUTTON: 'inject-button'
    }

    static initialize() {
        this.FoundryAccessibilityToolkitData = new FoundryAccessibilityToolkitData();
        game.settings.register("foundryaccessibilitytoolkit", "targetsize", {
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
            onChange: value => {
                console.log(value)
            }
        });
    }
}

Hooks.once('init', () => {
    FoundryAccessibilityToolkitData.initialize();
});