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
