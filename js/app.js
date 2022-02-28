const searchBtn = ()=>{
    const inputType = document.getElementById('inputFild');
    const inputValue = inputType.value;
    inputType.value=""
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
    .then(response => response.json())
    .then(data=>diplayInput(data.data))
}
const diplayInput=(phones)=>{
    const container = document.getElementById('main-content')
    phones.forEach((phone)=>{
        console.log(phone)
       const div = document.createElement('div')
       div.style.marginTop=('25px')
       div.className='col-xl-4'
       div.innerHTML=`
        <div class="card" style="width: 18rem ;">
          <img src="${phone.image}" class="card-img-top" alt="...">
             <div class="card-body">
             <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
       ` 
       container.appendChild(div)
    })
}