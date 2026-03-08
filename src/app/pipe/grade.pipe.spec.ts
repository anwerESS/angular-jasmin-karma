import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {

  let pipe: GradePipe;

  beforeEach(() => {
    pipe = new GradePipe();
  });

  it('create an instance', () => {
    // const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

  it("should assign A grade when mark greater than 89", () => {
    // const pipe = new GradePipe();
    let grade = pipe.transform(93);
    expect(grade).toBe("A");
  });

  it("should assign B grade when mark between 80 and 89", () => {
    // const pipe = new GradePipe();
    let grade = pipe.transform(84);
    expect(grade).toBe("B");
  });

});
