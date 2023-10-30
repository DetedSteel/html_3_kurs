// fetch("https://cats.petiteweb.dev/api/single/DS/add", {
//   method: "post",
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//   id: 2,
//   name: "Второй кот",
//   image: "https://rabotatam.ru/uploads/monthly_2017_04/large.58f1bdeda1c5c_.jpg.91c33c120ad86a4dbf2c50dd44d00890.jpg",
//   age: 2,
//   rate: 5,
//   favorite: false,
//   description: "Это мой второй кот"
//   })
// })
// .then( (response) => {
//   console.log(response.status)
// });

fetch('https://cats.petiteweb.dev/api/single/DS/show/', {method: 'get'})
  .then(function(response) {
    if (response.ok) {
      response.json().then(data => console.log(data));
    } else {
      throw new Error('Ошибка при выполнении запроса');
    }
  })