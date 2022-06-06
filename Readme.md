# What is this?
Foundry Accessibility Toolkit is a module for Foundry Virtual Tabletop that adds settings to improve quality of life for the visually impaired. Eventually, I want to expand this to allow Foundry VTT to be usable by those who struggle with a variety of disorders, conditions, and disabilities that may make normal usage paradigms overly difficult.

This module is dedicated to my wonderful wife Sarah. I have loved having you in my campaign. I wish for your sake that you never need these features, and hope that you can rest a little easier knowing that they are available should such a time come that you do.
___
# Features
- Target size adapter
    - The colored dot on tokens to represent that other players have selected them as a target will be resizable to be much larger than present. By means of a slider setting, users will be able to adjust it from slightly smaller than the present scale to taking up 1/4th of the token's rendered size. I am concerned about the engineering required to reposition the dot's center accounting for its change in size. I am also concerned about the adjusted dot size "leaking" to other players who have not adjusted it/ have adjusted it differently.
- UI bar Scaling
    - The left, top, and bottom sidebars, along with the playerlist panel will all be able to be individually scaled. As a bonus feature, if we could do collision avoidance with other UI elements, that'd be nice.
- High Contrast Text
  - Players will have the option to enable high contrast text. Much like the closed captioning on a TV, any text, regardless of context, will be solid white, on a solid black background, and a minimum font weight enforced. As a bonus feature the text/bg colors should be adjustable, and certain contexts should be enableable disableable (Chatbubbles vs sidebar vs menus, for instance)
- Right Sidebar scale and expand (need to look at viability)
  - So this feature is potentially not viable, _ESPECIALLY_ with the fact that a lot of the features recently added, and remaining on the roadmap will add additional document types to the right sidebar, as such, this may not be viable as a short term goal.
- Magnifier
  - At a keypress (rebindable), zoom the canvas in for the duration of held, to within a configurable radius of the cursor
- Token border
  - have a small square ring/ bounding box around tokens to make them "pop" more
- Localizations
  - Italian
  - Danish
  - Chinese (seeking translator)
  - Spanish (seeking translator)
___
# Tasks
- [x] Set up module, license, change control, and understand the module manifest system
- [x] Ensure effective debugging workflows and intellisense
- [x] Create client side settings
- [x] Seperate out localizable strings, ensure an easily localizable project structure
- [ ] (in progress) Familiarize self with foundry.js and most hooks. Considering the focus of this module, an emphasis on the rendering and handlebars workflows is prudent.
- [ ] (in progress) Identify hooks related to the rendering of token decorations
- [x] Determine a methodology for properly unit testing in this environment
- [ ] Write code that allows for mathematical manipulation of targeting dot size and position prior to rendering.
- [ ] Write helper code for scaling up generic foundry UI element and reinjecting it back into the canvas
- [ ] Work to understand Handlebars
- [ ] implement core functionality of target resize
- [ ] Test in multi-user, multi-setting conditions
- [ ] see if I can write an alignment test (not sure if possible depending on limitations of handlebars templating)
- [ ] ensure target indicators remain properly aligned, and do not overflow the token bounds
- [ ] Submit package to foundryvtt.com and other liisting sites
- [ ] Identify hooks responsible for triggering redraw of each sidebar
- [ ] work on each of the ancillery sidebars scaling
- [ ] Ensure that these sidebars cannot overflow even with varied contents (e.g. the double macro bar plugin, add an arbitrary number of left sidebar buttons from other modules, and an arbitrary number of navigable scenes with arbitrary namelength)
- [ ] Identify hooks involved in rendering text
- [ ] Perform initial localization trials with fake text translations
- [ ] Identify viability, or lack thereof, of right sidebar expansion.
- [ ] Reread the foundry.js sections on keybindings and rebindings
- [ ] implement adjustable keybinding
- [ ] implement adjustable zoom distance bar in settings, connect to binding
- [ ] performance profile to ensure responsive magnifier adjustment
- [ ] Create token border code stubs
- [ ] Finalize all text needing to be translated, send to translation volunteers
- [ ] Localization
- [ ] Finish token border (I should consider doing this before quite a few other things)
- [ ] Add optional subfeatures
- [ ] Update to ensure compatibility with version 10, and (potentially by then) version 11.
- [ ] Place project into maintenance mode. Update it when foundry gets updated, or to add feature requests.