var classRegister = ["Lawrence", "John", "Jeff"];

for (var i = 0; i < classRegister.length; i++) {
    console.log(classRegister[i]);
}
//

for (var i = classRegister.length - 1; i >= 0; i--) {
    console.log(classRegister[i]);
}
//

for (var index in classRegister) {
    console.log(classRegister[index]);
}