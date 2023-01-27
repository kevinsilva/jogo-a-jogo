### Problems:

- variability of rounds on Elimination Competitions (CL, EL)
- variability of tv channels (BTV, CL, EL)
- finding PNG club logos
- ordering matches

_problem 1_
defining what games are important

- because of clubs dimension (titles, number of supporters, uefa ranking)
- because of clubs current form (position on table, last games won)
  - API gives me form, but what if we are at the start of season?

_solution 1_
1 - get the 3 top clubs, by each league, at the UEFA 10 year ranking
2 - get the current form from the API for each club and give points
3 - get the top 4 best preview and top 4 score games and show on feature row - if these teams play agains each other, they will repeat, so get next top team game.

## User Authentication

- user registration
  - username/email, password, favorite team (optional), signup button, cancel button error msg (username already exists/ password must have 5 char.)
- login screen
  - username/email, password, login button, error msg (username or password is wrong/ does not match)
- app header: logo, user login icon or login button
- when user clicks on login button a pop up appears with the login form and a registration link.
- when user clicks on registration link, it uses same inputs as user login, but adds the favorite team dropdown and shows registration instead of login. The validation rules change accordingly
- when user clicks cancel registration it goes back to login form.

- Favorite Team games row
- when the user chooses his favorite team, it adds a favorite team games row on under the featured games row. It will show all score and preview games available.

- persist users in browser local storage.

## Card Click & Hover Events

- click event on matchcards triggers a popup with either two h2h results (if results), or a coutdown timer (if preview).
- hover on featurecards triggers a rotation animation with same data as on matchcards.

requirements

- popup (done)
- hover animation
- h2h data
- coutdown timer

PROBLEM: with h2h data. maybe change to other match info?

### future feature:

- click triggers popup that gives match stats on both types of cards.
- matchcard click with countdown and h2h data gets replaced by hover animation (instead of rotating card, it rolls data downwards).
