import e from 'express';
import sum from './sum.js';
test("adds 2+2 to equal 4", () => {
    expect(sum(2,2)).toBe(4);
    expect(sum(-1,1)).toBe(0);
    expect(sum(0,0)).toBe(0);   
    expect(sum(2.5,2.5)).toBe(5);
});
test("test negitive number ",()=>{
    expect(sum(-5,-5)).toBe(-10);
})