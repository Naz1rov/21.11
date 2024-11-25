// let container = document.querySelector(".container");

// function getArray() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     }, 500);
//   });
// }

// function getString() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
//     }, 500);
//   });
// }

// function getImg() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s",
//         "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_640.jpg",
//         "https://st2.depositphotos.com/1010215/10170/i/380/depositphotos_101705116-stock-photo-tropical-sunset-palms-over-sea.jpg",
//         "https://st3.depositphotos.com/14390742/17957/i/450/depositphotos_179577274-stock-photo-sunset-beach-khao-lak-thailand.jpg",
//         "https://st2.depositphotos.com/2171343/6054/i/450/depositphotos_60543285-stock-photo-coconut-trees-and-paddy-fields.jpg",
//         "https://st.depositphotos.com/27472836/55828/i/450/depositphotos_558284902-stock-photo-landscape-photo-sunset-view-silhouette.jpg",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXT9ug2_nHGvm9VUAeC3np2XdISPT-cZmIwl21u1DqGLtZHNZ91a5OKdcGTv94I2hYl8&usqp=CAU",
//         "https://st4.depositphotos.com/40075174/41714/i/450/depositphotos_417149468-stock-photo-sunrise-fog-landscape.jpg",
//         "https://st3.depositphotos.com/34475046/36654/i/450/depositphotos_366541732-stock-photo-evening-sunset-sky-scene-bright.jpg",
//         "https://www.shutterstock.com/shutterstock/videos/6935344/thumb/2.jpg?ip=x480",
//       ]);
//     }, 500);
//   });
// }


//ALL DA QILINGAN


// Promise.all([getImg(), getArray(), getString()]).then((array) => {
//   console.log(array);

//   let creatediv = document.createElement("div");

//   creatediv.innerHTML += "<br>Array of numbers: " + array[1].join(", ");
//   creatediv.innerHTML += "<br>Array of strings: " + array[2].join(", ");

//   array[0].forEach((imageUrl) => {
//     let imgElement = document.createElement("img");
//     imgElement.src = imageUrl; 
//     imgElement.style.width = "100%"; 
//     imgElement.style.marginBottom = "10px"; 
//     creatediv.append(imgElement); 
//   });

//   container.append(creatediv);
// });


// ANY DA QLINGAN

// Promise.any([getArray(), getString(),getImg()]).then((array) => {
//   console.log(array);
//   let creatediv = document.createElement("div");
//   creatediv.innerHTML = array.join("<br>");

//   container.append(creatediv);})


//ALLSETTLED DA QLINGAN

// Promise.allSettled([getImg(), getArray(), getString()]).then((array) => {
//   console.log(array);
//   let creatediv = document.createElement("div");
//   creatediv.innerHTML += array[0].value.join("<br>");
//   creatediv.innerHTML += array[1].value.join("<br>");
//   creatediv.innerHTML += array[2].value.join("<br>");

  

//   container.append(creatediv);}) 








// comment malumot  

document.addEventListener("DOMContentLoaded", () => {
  let main = document.querySelector(".main");
  fetch("https://jsonplaceholder.typicode.com/comments").then((response) => {
    return response.json();
  })
  .then((response) => {
    console.log(response);
    
  }) 
})