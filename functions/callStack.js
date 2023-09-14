

const a =function () {
    console.log("Функція a");
    b();
    console.log("Завершення a");
}



a();

function b() {
    console.log("Функція b");
}