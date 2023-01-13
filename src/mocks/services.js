import { mockScores, mockPreviews, mockStatistics } from './handlers';

export function mockFetchData(data) {
  return new Promise((thenCB, catchCB) => {
    setTimeout(() => {
      if (Math.random() < 0.99) thenCB(data);
      else catchCB('Error fetching data💥');
    }, 2000);
  });
}

export function mockFetchScores() {
  return new Promise((thenCB, catchCB) => {
    setTimeout(() => {
      if (Math.random() < 0.99) thenCB(mockScores);
      else catchCB('Error fetching data💥');
    }, 2000);
  });
}

export function mockFetchPreviews() {
  return new Promise((thenCB, catchCB) => {
    setTimeout(() => {
      if (Math.random() < 0.99) thenCB(mockPreviews);
      else catchCB('Error fetching data💥');
    }, 2000);
  });
}

export function mockFetchStatistics() {
  return new Promise((thenCB, catchCB) => {
    setTimeout(() => {
      if (Math.random() < 0.99) thenCB(mockStatistics);
      else catchCB('Error fetching data💥');
    }, 2000);
  });
}
