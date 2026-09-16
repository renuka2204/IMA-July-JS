// const loadData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data loaded successfully");
//     }, 2000);
// });

// async function display() {
//     const result = await loadData;
//     console.log(result);
// }
// display();


//using try...catch

const loadData = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Data Loaded failed");
    }, 2000);
});

async function Display() {
    try {
        const result = await loadData;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
Display()


