// const get_dog = document.getElementById("btn_users");
// const result = document.getElementById("result");
// const url = "https://random.dg/woof.json";

// async function getRandomDog() {
//   try {
//     const respone = await fetch(url);
//     const json = await respone.json();
//     result.innerHTML = `<img src="${json.url}" width=500px height=350px/>`;
//   } catch (e) {
//     console.log(e);
//   }
// }

// get_dog.addEventListener("click", getRandomDog);

const btn_get_users = document.getElementById("btn_users");
const table_body = document.getElementById("table_body");
const url = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.map((user) => {
      const details = [user.name, user.email, user.phone, user.address.city];
      console.log(details);
      const tr = document.createElement("tr");
      for (let i = 0; i < details.length; i++) {
        const td = document.createElement("td");
        td.innerText = details[i];
        tr.appendChild(td);
        table_body.appendChild(tr);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

btn_get_users.addEventListener("click", getUsers);
