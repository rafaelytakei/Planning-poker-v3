# Planning Poker v3

Rework of [v2](https://github.com/rafaelytakei/Planning-Poker-v2) with some notable changes on the code:

- Using Pinia for state management (still testing pros and cons over store-less)
- TS over JS
- WindiCSS (helpers) + NaiveUI (components) over PrimeVUE (+ PrimeFlex)
- Locale (en & pt-BR)
- Responsive (Maybe)

## TODO List

- Index
- Home
- Game creation
  - JIRA Integration
- Join game
  - List all games

### Definitions

- Game name should be on path (Need to attach a game name to each uuid)
- PWA?
- Admin panel
- Two main collections: users and games
- Games need an active key, which is true when there's at least an user in the room
- TBD what to do about rounds after JIRA integration - should they be named?
