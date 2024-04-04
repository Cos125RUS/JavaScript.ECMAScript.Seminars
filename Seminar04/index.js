const myPromis = new Promise((resolve, reject) => {
    
});
console.log(myPromis);
myPromis.then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(json => console.log(json))
    .catch(error => console.error(error, "Здесь ошибка"))


const getData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        return data
    } catch (error) {
        console.log(error.message);
    }
}

const fetchData = await getData();
console.log(fetchData);