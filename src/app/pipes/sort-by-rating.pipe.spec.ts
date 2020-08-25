import { SortByRatingPipe } from './sort-by-rating.pipe';

describe('SortByRatingPipe', () => {
  let sortPipe = new SortByRatingPipe()
  it('create an instance', () => {
    const pipe = new SortByRatingPipe();
    expect(pipe).toBeTruthy();
  });

  it('should sort shows based on rating', () => {
    let data = [{ "rating": { "average": 7 } }, { "rating": { "average": 8 } }, { "rating": { "average": 4 } }]
    let result = [{ "rating": { "average": 8 } }, { "rating": { "average": 7 } }, { "rating": { "average": 4 } }]
    expect(sortPipe.transform(data, "rating.average")).toEqual(result)
  });

  it('should assign value to [] if array is undefined', () => {
    let value = null
    expect(sortPipe.transform(value, "")).toEqual([])
  })
});
