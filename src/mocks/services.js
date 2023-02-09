import { mockFeaturedScores, mockFeaturedPreviews } from './handlers';

export function mockFetchData(data) {
  return new Promise((thenCB, catchCB) => {
    setTimeout(() => {
      if (Math.random() < 0.99) thenCB(data);
      else catchCB('Error fetching data💥');
    }, 2000);
  });
}

export async function getFeaturedMockData() {
  return Promise.all([
    mockFetchData(mockFeaturedScores),
    mockFetchData(mockFeaturedPreviews),
  ])
    .then(([scores, previews]) => {
      console.log(scores, previews);
      setScoreData(scores);
      setPreviewData(previews);
      setState('fulfilled');
    })
    .catch((error) => {
      console.log(error);
      setState('rejected');
    });
}

export async function getMockData(scoreData, previewData) {
  return Promise.all([mockFetchData(scoreData), mockFetchData(previewData)]);
}
