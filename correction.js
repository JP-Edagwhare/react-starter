const url = 'https://randomuser.me/api/?results=20';
fetch(url).then((res) => res.json()).then((data) => {
    console.log(data);
});