// const spclPara = document.getElementById('spclPara')

// console.log(spclPara);

const spclPara = document.querySelector('#spclPara');

spclPara.style.color="red";
spclPara.style.backgroundColor = "blue";
spclPara.style.padding="20px";
spclPara.style.width="50px";

const para = document.querySelectorAll('.para');

for(let x of para){
    x.style.border = "2px solid red"
}

const img = document.querySelector('img');

img.style.width = "300px";


// setAttribute  removeAttribute getAttribute
img.setAttribute('src','https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain');

img.removeAttribute('src');

img.setAttribute('src','https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0');

var x = img.getAttribute('src');

console.log(x);
