
import fs from 'fs';

export const getslog = (texte) => {
    const stream = fs.createWriteStream("./logs/gets.log", {flags:'a'});
    stream.write("[" + (new Date).toLocaleString() + "] " + texte + "\n");
    stream.end();
}