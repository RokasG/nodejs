const fs = require('fs');

//writefile
fs.writeFile('textfile.txt', 'Word1', function(err){
    if(err){
        throw err;
    }

});
console.log('File saved!');


//appendfile
fs.appendFile("textfile.txt", 'new data', function(err){
    if(err) throw  err;
});



//readfile
 fs.readFile('textfile.txt', function(err, data){
 if(err){
 throw err;
 }
 console.log(data.toString());

 });



