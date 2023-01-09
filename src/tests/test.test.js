import fetchLeagueLastMatches from '../utils/services';

describe('test', () => {
  it('should work', async () => {
    // const result = await fetchLeagueLastMatches(94, 2022, 9);
    try {
      const result = await fetch('/crazy', { method: 'GET' });
      expect(result).toBe('directo');
    } catch (err) {
      console.error(err);
    }
  });
});
