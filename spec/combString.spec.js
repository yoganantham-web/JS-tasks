var app=require("../src/combString");
describe("Test Suite - combinations of a given string",() =>{
    it("combStrings() should return an error if the input is not a string.", function() {
        var value=app.combStrings(123); 
        expect(value).toBe("input is not a string");
    });
    it("expect sample output1", () =>{
        var value=app.combStrings("abc"); 
        expect(value).toBe(",a,b,ab,c,ac,bc,abc");
    });
    it("expect sample output2", () =>{
        var value=app.combStrings("test"); 
        expect(value).toBe(",t,e,te,s,ts,es,tes,t,tt,et,tet,st,tst,est,test");
    });
});