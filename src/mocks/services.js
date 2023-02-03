export function mockFetchData(data) {
  return new Promise((thenCB, catchCB) => {
    setTimeout(() => {
      if (Math.random() < 0.99) thenCB(data);
      else catchCB('Error fetching data💥');
    }, 2000);
  });
}
