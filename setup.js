const fs = require('fs');
fs.createReadStream('.project_env')
    .pipe(fs.createWriteStream('.env'));
