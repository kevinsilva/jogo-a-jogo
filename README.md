# Jogo a Jogo

<p align="center"><img src="./src/assets/logo.jpg" width="300"></p>

<div align="center">

<a href="">[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-success?style=flat-square&logo=codesandbox)](https://codesandbox.io/p/github/kevinsilva/jogo-a-jogo/main?workspaceId=1f184592-fa38-402f-b23c-0307de96618d&file=%2FREADME.md)</a>

</div>

A responsive single-page [React](https://reactjs.org/) application that displays scores and previews information about world football matches.

## Implementation Details

This project allows users to view information about past and upcoming world football matches. It displays content in a left-to-right representation of time (from past to future) to provide a clear and concise user experience. The past matches show the final score whereas the future matches show the tv channel that will broadcast them.

### Features

- **User Account**: allows the user to select his favourite team, which will then display a section of past and future matches for that team.
- **Featured Matches**: displays matches of pre-determined teams. When a user hovers a card, it flips them, showing additional information for that match (the venue and how much time left for the game).
- **Competition Matches**: displays past and upcoming matches for various European competitions, grouped by round.

### User Account

The user account feature adds another row to the UI, showing matches of the selected user team at the time of registration. The Header component displays a button responsible for the handling of the sign-in/sign-out functionality. If there is a user signed in, a sign-out button is shown. If, on the other hand, there is no user signed in, a button that triggers a popup with a sign form is shown instead. The Form component holds the state for the sign mode and the form validation errors. The user session data is stored in localStorage.

This structure avoids prop drilling by resorting to the useContext hook. It reinforces the separation of concerns of the components by maintaining the user’s state on the main App component, passing functions like isUserSignedIn, addUser, SignUser and SignOut.

### Featured Matches

The featured section uses CSS animations with [SCSS](https://sass-lang.com/), to display a scrollable row of grouped UI cards for matches of pre-determined teams. The cards show additional information when flipped by a hover event.

The component uses an async/await function that iterates through an array of featured teams, fetching the most recent completed match, and the next scheduled match for each team. It returns up to four unique team matches from the RESTful [API-Football](https://www.api-football.com/documentation-v3#section/Authentication/RAPIDAPI-Account).

### Competition Matches

The competitions section show the past round of games and the next round for different competitions.

To improve usability, clickable arrows were added to all scrollable rows, allowing users to navigate matches if they do not have a mouse or trackpad with horizontal scrolling. This was achieved using the useRef hook to access the scrollable HTML div without triggering a component re-render.

### Final points

The project was built using [React](https://reactjs.org/), [SCSS](https://sass-lang.com/), and CSS animations under the development environment of [Vite](https://vitejs.dev/). [Prettier](https://prettier.io/) and [Eslint](https://eslint.org/) were used for code formatting and style consistency. Since this is my first [React](https://reactjs.org/) portfolio project, unit tests were not included.

I designed the UI on [Figma](https://www.figma.com/).

> **! Note:**
>
> Mocked data is used in case there are errors fetching data.
>
> The application is in Portuguese to be consistent and coherent with the available data.

## Usage

To change or add teams to the featured section, edit the FEATURED_TEAMS array on `./src/utils/utilities.js`, and add inherent ID from [API-Football Documentation](https://www.api-football.com/documentation-v3#section/Authentication/RAPIDAPI-Account).

```js
const FEATURED_TEAMS = [211, 40, 541, 496, 157, 85, 50, 529, 492, 165, 80];
```

To fetch other competition data, read [API-Football Documentation](https://www.api-football.com/documentation-v3#section/Authentication/RAPIDAPI-Account) to find other league names and IDs, and use them as arguments for the MatchRow component.

```js
<MatchesRow
  leagueName={'UEFA Champions League'}
  leagueID={2}
  totalMatches={LEAGUES['UEFA Champions League'].matchesByRound}
/>
```

> **! Note**
>
> Production build on the dist folder.

# Development

To install the component: clone repository, change into directory on the terminal and install with npm.

```bash
git clone https://github.com/kevinsilva/jogo-a-jogo
cd jogo-a-jogo
npm install
```

To run the application.

```bash
  npm run dev
```

## Credits

API data from [API-Football](https://www.api-football.com/documentation-v3#section/Authentication/RAPIDAPI-Account).

Flipping card animation inspired by Jonas Schmedtmann's [Advanced CSS & SASS course](https://www.udemy.com/course/advanced-css-and-sass/).

Special thanks to my mentor 🎓, [William R. J. Ribeiro](https://github.com/williamrjribeiro/).

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
