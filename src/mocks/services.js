export function mockFetchData(data) {
  return new Promise((thenCB, catchCB) => {
    setTimeout(() => {
      if (Math.random() < 99.9) thenCB(data);
      else catchCB('Error fetching data💥');
    }, 2000);
  });
}

export async function getMockData(scoreData, previewData) {
  return Promise.all([mockFetchData(scoreData), mockFetchData(previewData)]);
}
