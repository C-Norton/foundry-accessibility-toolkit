/* consts block */
const targetSizeMin = 10;
const targetSizeMax = 100;
const targetSizeStep = 10;
const defaultTargetSize = 20;


//todo: there's a lot of cleanup for legibility that can and should be done here. I should take another pass as I add
//more settings to figure out a more scaleable solution here.
class FoundryAccessibilityToolkitData {
    static SETTINGS = {
        INJECT_BUTTON: 'inject-button'
    }

    static initialize() {
        this.FoundryAccessibilityToolkitData = new FoundryAccessibilityToolkitData();
        game.settings.register(moduleSlug, targetSizeSlug, {
            name: targetSizeName,
            hint: targetSizeHint,
            scope: "client",
            config: true,
            type: Number,
            range: {
                min: targetSizeMin,
                max: targetSizeMax,
                step: targetSizeStep
            },
            default: defaultTargetSize,
            onChange: value => {
                console.log(value)
            }
        });
    }
}

Hooks.once('init', () => {
    FoundryAccessibilityToolkitData.initialize();
});