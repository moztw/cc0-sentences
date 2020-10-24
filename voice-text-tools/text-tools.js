const fs = require('fs'),
    path = require('path');

// command arguments
let feature = process.argv[2] || null;
let fnOne = process.argv[3] || null;
let fnTwo = process.argv[4] || null;
let args = process.argv || null;

let helpMsg = `
please select feature:
\t-a folders - combine all txt files inside folder into all.txt
\t-u txtfile - unique sentences by lines
\t-f txtfile - shuffle lines of input file
\t-s txtfile - sort file content by lines
\t-c txtfile input_method.cin - use input method table to calculate pronunciation coverage rate of txtfile
\t-o txtfile txtref.txt - calculate how many chars from char_list.txt appearing in txtfile
`;

const errMsg = {
    noFeature: new Error(``),
    noFileOne: new Error(`Missing file/directory as first argument`),
    noFileTwo: new Error(`Missing second file`)
};

if (!feature || !['-a', '-s', '-u', '-f', '-c', '-o'].includes(feature)) {
    console.error(errMsg.noFeature);
    return;
}
// console.log('feature, fnOne, fnTwo:', feature, fnOne, fnTwo);

// https://stackoverflow.com/a/28289589
function getFilesInPathSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile())
            callback(filePath, stat);
        else if (stat.isDirectory())
            getFilesInPathSync(filePath, callback);
    });
}

let txtOne = '';
try {
    if (fs.statSync(fnOne).isDirectory()) {
        let filesPath = [];
        getFilesInPathSync(fnOne, function(filePath, stat) {
            if (filePath.endsWith('.txt')) filesPath.push(filePath);
        });
        filesPath.forEach(function(fileName){
            txtOne = txtOne + fs.readFileSync(fileName, 'utf-8');
            txtOne = txtOne + '\n';
        });
    }
    else {
        if (fnOne) txtOne = fs.readFileSync(fnOne, 'utf-8');
        if (fnTwo) txtTwo = fs.readFileSync(fnTwo, 'utf-8');    
    }
}
catch (error) {
    console.error(error);
    return;
}

function arrayShuffle(a) {  // https://stackoverflow.com/a/6274381
    let b = a.slice();
    for (let i = b.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
}

switch (feature) {
    case '-o': {
        if (!txtOne) {
            console.error(errMsg.noFileOne);
            return;
        }
        if (!txtTwo) {
            console.error(errMsg.noFileTwo);
            return;
        }

        var convertToNonRepeatCharArray = function(txtFile) {
            let txtAryOne = txtFile.split('\n');
            let allCharObj = {};
            txtAryOne.forEach(line => {
                for (i=0; i<line.length; i++) allCharObj[line[i]] = 1;
            });
            return Object.keys(allCharObj);   // all non-repeat chars
        };
        let charsOne = convertToNonRepeatCharArray(txtOne);
        let charsTwo = convertToNonRepeatCharArray(txtTwo);

        // check how many chars from charsTwo appear in charsOne 
        // compare both arry to each other
        let charsTwoCoverStat = function(allChars, commonChars) {
            return charsTwo.map(function(char) {
                return charsOne.includes(char);
            });
        }(charsOne, charsTwo);

        // list chars in charTwo which is not available in charOne
        let missingChars = [];
        let availChars = [];
        
        for (const index in charsTwo) {
            // console.log(`${index}: ${charsTwo[index]}: ${charsTwoCoverStat[index]}`);
            if (charsTwoCoverStat[index]) 
                availChars.push(charsTwo[index]);
            else
                missingChars.push(charsTwo[index]);
        }

        let coverRate = Math.round(availChars.length/charsTwo.length*1000)/10;
        let missRate = Math.round(missingChars.length/charsTwo.length*1000)/10;

        console.log(`Numbers of chars in ${fnOne} are ${charsOne.length}`);
        console.log(`Numbers of chars in ${fnTwo} are ${charsTwo.length}`);
        console.log(`--------------------`);
        // console.log(`${fnOne} includes ${availChars.length} chars from ${fnTwo} (${coverRate}%): [${availChars}]`);
        console.log(`${fnOne} includes ${availChars.length} chars from ${fnTwo} (${coverRate}%)`);
        console.log(`${fnOne} missing ${missingChars.length} chars from ${fnTwo} (${missRate}%):`);
        console.log(`[${missingChars}]`);
    } break;

    case '-c': {
        if (!txtOne) {
            console.error(errMsg.noFileOne);
            return;
        }
        if (!txtTwo) {
            console.error(errMsg.noFileTwo);
            return;
        }

        // read cin table and convert to obj map of char to phonetic
        let [cinObj, phoneticNum] = function(cinFile){
            let cinTable = cinFile.split('\r\n');
            cinTable = cinTable.filter(line => { return !['#', '%'].includes(line[0]); }); 
            cinTable = cinTable.filter(line => { return (line.length > 0); }); 
            let cinObj = {};
            let allPhonetic = {};
            let ignore = [];
            let ignoreRegex = null;

            // ignore specific tones in .cin, eg. "3,4,6,7" in Chinese Zhuyin
            if (args[5] == '-i' && args[6]) {
                ignore = args[6].split(',');
                ignoreRegex = new RegExp(ignore.join('|'));
            }

            cinTable.forEach(line => {
                let [phe, char] = line.split(/\s|\t/);
                let pheStr = phe.toString();
                if (ignoreRegex) pheStr = pheStr.replace(ignoreRegex, '');
                cinObj[char] = pheStr;
                allPhonetic[pheStr] = 1;
            });
            return [cinObj, Object.keys(allPhonetic).length];
        }(txtTwo);

        // read sentences file and convert to non-repeat chars array
        let txtAryOne = txtOne.split('\n');
        let allCharObj = {};
        txtAryOne.forEach(line => {
            for (i=0; i<line.length; i++) allCharObj[line[i]] = 1;
        });
        let allCharAry = Object.keys(allCharObj);   // all non-repeat chars

        let allPhoneObj = {};
        allCharAry.forEach(cha => { allPhoneObj[cinObj[cha]] = 1; });
        let allPhoneLen = Object.keys(allPhoneObj).length;   // all non-repeat phonetic

        console.log(`Total numbers of phonetic in ${fnTwo} are ${phoneticNum}`);
        console.log(`Numbers of phonetic from ${allCharAry.length} characters in ${fnOne} are ${allPhoneLen}`);
        console.log(`We have cover ${Math.round(allPhoneLen/phoneticNum*10000)/100}% of the pronunciations.`);
    } break;

    case '-a': {
         if (!txtOne) {
            console.error(errMsg.noFileOne);
            return;
        }

        let txtAryOne = txtOne.split('\n');
        txtAryOne = txtAryOne.map(sentence => sentence.trim());
        txtAryOne = txtAryOne.filter(sentence => sentence);     // trim empty lines

        let fn = 'all.txt';
        let err = fs.writeFileSync(fn, txtAryOne.join('\n'));
        if (err)
            console.log(err);
        else
            console.log("file saved as " + fn);
    } break;

    case '-u': {
        if (!txtOne) {
            console.error(errMsg.noFileOne);
            return;
        }

        let txtAryOne = txtOne.split('\n');
        txtAryOne = txtAryOne.filter(sentence => sentence);     // trim empty lines
        txtAryOne = txtAryOne.map(sentence => sentence.trim());
        txtAryOne = [...new Set(txtAryOne)];    // array unique, https://stackoverflow.com/a/14438954

        let filenameSplit = fnOne.split('.');
        let fn = filenameSplit[0] + '_unique.' + filenameSplit[1];

        let err = fs.writeFileSync(fn, txtAryOne.join('\n'));
        if (err)
            console.log(err);
        else
            console.log("file saved as " + fn);
    } break;

    case '-s': {
        // sort
        if (!txtOne) {
            console.error(errMsg.noFileOne);
            return;
        }

        let txtAryOne = txtOne.split('\n');
        txtAryOne = txtAryOne.filter(sentence => sentence);     // trim empty lines
        txtAryOne = txtAryOne.map(sentence => sentence.trim());
        txtAryOne = [...new Set(txtAryOne)];    // array unique, https://stackoverflow.com/a/14438954

        let txtAryShuffle = txtAryOne.sort();

        let filenameSplit = fnOne.split('.');
        let fn = filenameSplit[0] + '_sort.' + filenameSplit[1];

        let err = fs.writeFileSync(fn, txtAryShuffle.join('\n'));
        if (err)
            console.log(err);
        else
            console.log("file saved as " + fn);
    } break;

    case '-f': {
        // shuffle
        if (!txtOne) {
            console.error(errMsg.noFileOne);
            return;
        }

        let txtAryOne = txtOne.split('\n');
        txtAryOne = txtAryOne.filter(sentence => sentence);     // trim empty lines
        txtAryOne = txtAryOne.map(sentence => sentence.trim());
        txtAryOne = [...new Set(txtAryOne)];    // array unique, https://stackoverflow.com/a/14438954

        let txtAryShuffle = arrayShuffle(txtAryOne);

        let filenameSplit = fnOne.split('.');
        let fn = filenameSplit[0] + '_shuffle.' + filenameSplit[1];

        let err = fs.writeFileSync(fn, txtAryShuffle.join('\n'));
        if (err)
            console.log(err);
        else
            console.log("file saved as " + fn); 
    } break;
}

return;
