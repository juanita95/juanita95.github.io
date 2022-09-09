import { CustomSplitPipe } from '../../../src/app/shared/pipes/custom-split.pipe';

describe('CustomSplitPipe', () => {

  it('should be return first word', () => {
    const pipe = new CustomSplitPipe();
    expect(pipe.transform('Juanita Aranzazu', ' ')).toBe('Juanita');
  });
});
