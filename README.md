# Musicist

An simple app to practice musical scales -
[musicist.fglt.fr](https://musicist.fglt.fr/)

Musicist allows you to visualize and interact with musical scales
on various instruments.

Instruments can be played with a mouse, touch gestures, or via
plugged-in MIDI devices.

Selecting a scale will highlight relevant notes on your
instrument of choice, even suggesting fingerings for fretted
instruments!

## About

This project was made for
[SvelteHack](https://hack.sveltesociety.dev/).

I experimented with the concept a long time ago but did not get
very far, so I decided to take a fresh start for this hackathon.

I concentrated more on mobile usage, so it is best viewed as an
installed web app, but it is still usable on any other device.

## Kudos

-  [Svelte](https://svelte.dev/) &
   [SvelteKit](https://kit.svelte.dev/), obviously
-  [Tonal](https://github.com/tonaljs/tonal) for the music theory
-  [Tone](https://github.com/Tonejs/Tone.js) for the audio
   generation

## Roadmap

As this was put together in a short time for a hackathon, there
is still much room for improvement:

-  [ ] Improving accessibility
-  [ ] Improving fingering suggestion
   -  [ ] Allowing selection of a preferred fretboard zone
   -  [ ] Handling edge cases where the fingering could be more
          comfortable
-  [ ] Suggesting scales by analyzing played notes
-  [ ] Improving devices support (for now, the app is mostly
       optimized for small mobile devices in landscape
       orientation)
-  [ ] Improving in-app documentation/affordance
-  [ ] Adding translations
