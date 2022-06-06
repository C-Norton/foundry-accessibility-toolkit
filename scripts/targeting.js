export default class foundryAccessibilityToolkitToken extends Token {
    return

    _refreshTarget() {
        //var wrappedResults = wrappped()
        const pipSize = game.settings.get(moduleSlug, targetSizeSlug)
        if (!this.targeted.size) {
            return;
        }

        // Determine whether the current user has target and any other users
        const [others, user] = Array.from(this.targeted).partition(u => u === game.user);

        for (let [i, u] of others.entries()) {
            let color = foundry.utils.colorStringToHex(u.data.color);
            this.hud.target.beginFill(color, 1.0).lineStyle(2, 0x0000000).drawCircle(2 + (i * pipSize + 2), 0, pipSize);
        }
    };

}