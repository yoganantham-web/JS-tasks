function combStrings(str1){ 
    if(typeof(str1)=="string") {
        var array1 = [];
        for (var x = 0, y=1; x < str1.length; x++,y++) {
            array1[x]=str1.substring(x, y);
        }
        var combi = [""];
        var temp= "";
        var slent = Math.pow(2, array1.length);

        for (var i = 0; i < slent ; i++)
        {
            temp= "";
            for (var j=0;j<array1.length;j++) {
                if ((i & Math.pow(2,j))){ 
                    temp += array1[j];
                }
            }
            if (temp !== "")
            {
                combi.push(temp);
            }
        }
        return combi.join(",");
    } else {
        return "input is not a string";
    }
}
input="abc"; // Input here
console.log(`combinations of string '${input}' is - ` + combStrings(input));

module.exports = {
    combStrings: combStrings 
};

