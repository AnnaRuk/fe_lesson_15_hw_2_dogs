/*
Реализовать страницу, на которой будет 1 кнопка. Нажатие
 на кнопку должно вызывать появление каритинки, которую 
вы должны получить, используя fetch и API сервера https://dog.ceo/api/breeds/image/random
*/

const button = document.getElementById('button');
const container = document.getElementById('container');
const pictures = document.getElementById('pictures');

let url = "https://dog.ceo/api/breeds/image/random";

button.addEventListener('click', showPicturesRandomly);

function showPicturesRandomly(){
    let response = fetch(url);
    response.then((response)=>{
    promisePictures = response.json();
    promisePictures.then((res)=>{

        if(res.status == 'success'){
            pictures.src = res.message;
        }

        })

    })

    };

