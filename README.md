# kbsb-tempo-tapper

The Kaboom BPM calculator. An application to calculate the tempo of a song.

Instructions: tap in the rhythm to find the tempo of a piece of music.

Stack:
- Javascript/Typescript
- React
- Parcel

## Figma project

Designed in Figma: https://www.figma.com/file/2ZJYn0AqhrgN4zt11xqAET/kbsb.app_bpm-tempo-tapper?node-id=0%3A1

## Notes

```sh
# start development server
yarn start

# build for production
yarn build
```

## TODOs

- [X] Fine-tune tempo calculation
- [ ] Experiment with two more calculations:
    - [ ] Measure from start tapping until last tap (A-Z / T)
    - [ ] Measure taps intervals and analyze the BPM based on a mean frequence. (Based on a standard deviation?)
        - [Function std](https://mathjs.org/docs/reference/functions/std.html)
- [ ] Add an accuracy bar. Bottom window. From L->R >> from Red to Green. From about 50 taps is Green-isch, which means pretty accurate.
- [ ] Add Typescript types
