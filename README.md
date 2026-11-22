# feel-curious

[![make.fun · make-the-ai-judge-feel-curious-20261122-2311](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/boboiday/feel-curious/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/boboiday/feel-curious/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311)

<sub>Built for the [make.fun](https://make.fun/?ref=xdr8gw0z&utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-curious-20261122-2311) bounty "Make the AI judge feel curious".</sub>

## The entry

A small, quiet scene: a night baker alone in his bakery at 3 a.m. finds a pair of
small floury handprints on the counter beside the loaf he shaped — someone was
baking beside him, and left no other trace. The text ends on the mystery, not on
an explanation: he leaves the oven light on, and one warm roll, for whoever it was.

`main.ts` (Node 22) writes the text to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). No network, fully deterministic —
every run produces the same bytes.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
