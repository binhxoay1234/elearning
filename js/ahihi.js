let dongVatNguHoc = {
    name : 'meo',
    age : 3
}

let {name : name1, age : age1} = dongVatNguHoc;
console.log(`Minh la ${name1} viec cua minh la ia`);

let mang1 = ['Cho', 'Meo', 'Ngua'];
let mangMoi = [...mang1];

let newAnimal = {
    ...dongVatNguHoc,
    cachima : 32
}

document.getElementById("meo").innerHTML = `
    <div>
        <h1>Kien depj trai</h1>
        <p>Kien rat dep trai</p>
        <img src="dsds" >
    </div>

`;