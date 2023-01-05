import { mockMatches } from './handlers';

export function mockFetchMatches() {
  return new Promise((thenCB, catchCB) => {
    setTimeout(() => {
      if (Math.random() < 0.9) thenCB(mockMatches);
      else catchCB('Error fetching data💥');
    }, 2000);
  });
}
