

const path_len =document.querySelectorAll('#name-logo path');

console.log(path_len);

for(let i =0;i<path_len.length;i++){
    console.log(`letter is ${i} ${path_len[i].getTotalLength()}`);
}