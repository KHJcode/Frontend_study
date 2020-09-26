const people = ['Jhon', 'Amy', 'Anna', 'Tom', 'KHJcode',];

let i = 0;

console.group('Array loop');

while (i < people.length) {
  console.log(i, people[i]);
  i++;
}

console.groupEnd('Array loop');

const file = {
  video: 'mp4',
  music: 'mp3',
  photo: 'jpg',
  picture: 'png',
  web_img: 'svg',
};

console.group('Object loop');

let ext;

for (ext in file) {
  console.log(ext+':', file[ext]);
}

console.groupEnd('Object loop');
