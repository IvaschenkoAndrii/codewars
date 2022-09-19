function likes(names) {
    let str;
    if (names.length === 0) {
        str = "no one likes this";
    } else {
        for (let i = 0; i < names.length; i++) {
            if (names.length === 1) {
                str = `${names[i]} likes this`;
                break;
            } else if (names.length === 2) {
                str = `${names[i]} and ${names[i+1]} like this`;
                break;
            } else if (names.length === 3) {
                str = `${names[i]},${names[i + 1]} and ${names[i + 2]} like this`;
                break;
            } else if (names.length > 3) {
              str = `${names[i]},${names[i + 1]} and ${names.length - 2} others like this`;
                break;
            }
        }}

    return str;}

let a = ['Peter'];

console.log(likes(a));