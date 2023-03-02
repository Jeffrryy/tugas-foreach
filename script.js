let ulangi= confirm("apakah anda ingin mengulang");
let counter= 0;

while(ulangi){
counter++;
let bintang= "*" .repeat(counter) + "<br>";
document.write(counter + " :" + bintang );
ulangi = (confirm("apakah ingin mengulang?"));
}