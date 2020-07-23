var app=require("../src/rotateRightArr");
describe("Test Suite - rotate the array to the right by k steps",() =>{
    it("rotateRight() should return an error if the steps(k) argument is not a positive number.", function() {
        var value=app.rotateRight([1,2,7,8,9],-4); 
        expect(value).toBe("Steps argument must be positive number");
    });
    it("expect sample output1", () =>{
        var value=app.rotateRight([1,2,7,8,9],3);  
        expect(value).toEqual([7,8,9,1,2]);
    });
    it("expect sample output2", () =>{
        var value=app.rotateRight([1,2,7,8,9],2); 
        expect(value).toEqual([8,9,1,2,7]);
    });
});