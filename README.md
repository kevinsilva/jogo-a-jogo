# Jogo a Jogo

A single-page [React](https://reactjs.org/) application that displays the results of past world football matches and the preview information of upcoming matches.

## Implementation Details

definição do projecto: scores e preview - ui em scroll
descrição das features: login, featured, match
tradução dos componentes: como estão organizados, context, estado, responsabilidades, use effect, local storage.

The project started by defining how to visually represent both the results and the preview info of the matches with a different approach. The solution was to resort to the left to right representation of time: a row of grouped cards ordered from left to right in time, so the results are left of the previews.

The page has three main features: a login/user registration, a featured section at the top, and various championship sections at the bottom.

This project started by determining the rules for this game, naming the constituent elements and defining the separation of concerns. After designing the interface, the game was developed with both a functional approach, and a object oriented (oop) class approach.

Since the main concept takes inspiration from guitar colors, the monochromatic interface was designed on [Figma](https://www.figma.com/) with the clear intention as to make the guitar color pop. I resorted to HTML and [Tailwind](https://tailwindcss.com/) to program the interface with static elements, making the usability as simple as possible.

Both programming paradigms used, support a clear distinction between the rendering of the dynamic elements of the page, and the business logic of the game. The development environment of [Vite](https://vitejs.dev/), allowed me to easily add [jQuery](https://jquery.com/) in modules, testing the units with [Vitest](https://vitest.dev/). By taking the random generator of the guitar colors as the most basic functionality, it allowed for the formation of questions and the establishment of the color to be displayed. Essentially, there are four different screens: the start screen, the ask screen, the answer screen, and the end screen. Each screen renders the state to the elements. The click events update the state and compute the logic.

## Usage

# Development

To install the component: clone repository, change into directory on the terminal and install with npm.

```bash
git clone https://github.com/kevinsilva/jogo-a-jogo
cd jogo-a-jogo
npm install
```

To run the application.

```bash
  npm run start
```

## Credits

Big thanks to my mentor 🎓, [William R. J. Ribeiro](https://github.com/williamrjribeiro/).

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
