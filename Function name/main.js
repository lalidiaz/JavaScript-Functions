function name() {
    var fullname = "Laura Diaz";

    function concat(name) {
        return "Miss." + name;

    }
    return concat(fullname);
}

function name(fullname) {
    return fullname.fistname + fullname.lastname;
}
console.log(name({ firstname: "Laura", lastname: "Diaz" }));