import fs from "fs"

export default function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return  'data:image/png;base64,' + new Buffer(bitmap).toString('base64');
}
