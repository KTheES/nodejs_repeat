var fs = require('fs');

var data = "data write \n is complete?";

fs.writeFile('fileAsync.txt', data , 'utf-8', function(err) {
    if(err) {
        console.log(err);
    }else{
        console.log('Async write task finished');
    }
});

try{
    fs.writeFileSync('fileSync.txt',data, 'utf-8',);
    console.log('Sync write task done!');
}catch(err) {
    console.log(err);
}