//TODO: as a reminder of things found tonight, 38233 is the line of code in foundryjs used to draw the target pipsD

/* consts block */

// TARGET SIZE DATA
import foundryAccessibilityToolkitToken from "./targeting";

const targetSizeMin = 1;
const targetSizeMax = 20;
const targetSizeStep = 1;
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
        libWrapper.register(moduleSlug, "Token._refreshTarget", foundryAccessibilityToolkitToken._refreshTarget, "OVERRIDE")
    }
}

Hooks.once('init', () => {
    FoundryAccessibilityToolkitData.initialize();
});