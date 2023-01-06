import { mockScores } from './handlers';
import { mockPreviews } from './handlers';

export function mockFetchScores() {
  return new Promise((thenCB, catchCB) => {
    setTimeout(() => {
      if (Math.random() < 0.9) thenCB(mockScores);
      else catchCB('Error fetching data💥');
    }, 2000);
  });
}

export function mockFetchPreviews() {
  return new Promise((thenCB, catchCB) => {
    setTimeout(() => {
      if (Math.random() < 0.9) thenCB(mockPreviews);
      else catchCB('Error fetching data💥');
    }, 2000);
  });
}
