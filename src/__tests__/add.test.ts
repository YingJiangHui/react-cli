import {calc} from 'src/add';

describe('add',() => {
  it('can add',() => {
    expect(calc('plus',1,2)).toBe(3);
  });
});