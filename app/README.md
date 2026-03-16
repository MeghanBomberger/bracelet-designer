# Bracelet Designer

A tablet and web-friendly design tool for building custom metal stamped bracelets. Built for use at vending shows and for processing custom orders.

## Purpose

- **At shows** — Hand the tablet to customers at the table so they can design their own bracelet and see options visually
- **At the desk** — Use the web version when working through custom orders remotely
- All bracelet blank data is bundled statically so the app works fully offline — no signal required at shows

## Roadmap

- [ ] Save and share designs
- [ ] Live data sync with Airtable — when save functionality is added, static bracelet blank data will be replaced with live Airtable fetches so inventory can be updated from the source without a code change

## Tech Stack

- [Expo](https://expo.dev) (React Native + Web)
- [Expo Router](https://docs.expo.dev/router/introduction/) for file-based routing

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Install

```bash
npm install
```

### Run

| Platform | Command |
|----------|---------|
| Web | `npm run web` |
| Android | `npm run android` |
| iOS | `npm run ios` |
| All (choose in terminal) | `npm start` |

For web, open [http://localhost:8081](http://localhost:8081) in your browser after starting.

### Lint

```bash
npm run lint
```

