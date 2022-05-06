const lotteryPromise = new Promise(function (resolve, reject) {
    console.log("lottery draw is happening");
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve("You WIN");
        } else {
            reject(new Error("You LOSE"));
        }
    }, 2000);
});

lotteryPromise.then((res) => console.log(res)).catch((err) => console.error(err));

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(2)
    .then(() => {
        console.log("I waited for two seconds");
        return wait(1);
    })
    .then(() => console.log("I waited for 1 second"));

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("xyz")).catch((x) => console.log(x));
