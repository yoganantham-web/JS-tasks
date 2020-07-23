var app=require("../src/binaryTree");
describe("Test Suite - find the height of the binary tree",() =>{
    it("expect sample output2", () =>{ 
        app.clearRoot();
        app.addNumNode(5);
        app.addNumNode(3);
        app.addNumNode(2);
        var value=app.findHeight(); 
        expect(value).toBe(2);
    }); 
    it("expect sample output1", () =>{
        app.clearRoot();
        app.addNumNode(12);
        app.addNumNode(5);
        app.addNumNode(8);
        app.addNumNode(22);
        app.addNumNode(18);
        app.addNumNode(19); 
        var value=app.findHeight(); 
        expect(value).toBe(3);
    });
   
});