import fs from "fs";

const input = JSON.parse(fs.readFileSync("input.json"));
const splitRegex = /(?<=\@)/;

export default class Generator {

    generateIdea() {

        var result = "";

        //var template = input.templates[Math.floor(Math.random() * input.templates.length)];
        var template = this.getRandomElement(input.templates);
        var splitTemplate = template.split(splitRegex);

        console.log(`Template: ${template}`);

        if(splitTemplate.length > 1) {
            console.log("Tags detected");
            result = this.fillTemplate(splitTemplate);
        } else {
            result = splitStr[0];
        }

        return result;
    }

    fillTemplate(splitTemplate) {
        // drop the tag indicators from first tag
        splitTemplate[0] = splitTemplate[0].substring(0, splitTemplate[0].length - 1);
        splitTemplate[1] = splitTemplate[1].substring(0, splitTemplate[1].length - 1);
        
        console.log(splitTemplate);
        var firstTag = splitTemplate[1];
        console.log(`Processing tag: ${firstTag}`);

        var tagResult = this.getRandomElement(input[firstTag]);
        splitTemplate[1] = tagResult;
        var result = splitTemplate.join("");
        console.log(`Intermediate result: ${result}`);

        var splitResult = result.split(splitRegex);
        console.log(splitResult);
        if(splitResult.length > 1) {
            console.log("Tags detected");
            result = this.fillTemplate(splitResult);
        } 

        return result;
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
}
 