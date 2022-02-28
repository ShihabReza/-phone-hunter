// add function
const searchBtn = ()=>{
    document.getElementById('main-content').innerHTML=''
   
    
    const inputType = document.getElementById('inputFild');
    const inputValue = inputType.value;
    inputType.value=""

    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
    .then(response => response.json())
    .then(data=>diplayInput(data.data))
}
// ul display
const diplayInput=(phones)=>{
    
    const container = document.getElementById('main-content')
    if(!phones){
        console.log("Hello! I am an alert box!!");
    }
    phones?.forEach((phone)=>{
        console.log(phone)
       const div = document.createElement('div')
       div.style.marginTop=('25px')
       div.className='col-12 col-xl-4'
       div.innerHTML=`
        <div class="card" style="width: 18rem ;">
          <img src="${phone.image}" class="card-img-top" alt="...">
             <div class="card-body">
             <h5 class="card-title">${phone.phone_name}</h5>
             <p>${phone.brand}</p>
         <button onclick='phoneDetls("${phone.slug}")' class="btn btn-primary">details</button>
        </div>
      </div>
       ` 
       container.appendChild(div)
    })
}
const phoneDetls=(id)=>{
    document.getElementById('detls-info').innerHTML='';
   
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
     fetch(url)
    .then(res=>res.json())
    .then(data=>setInfo(data.data))

}
const setInfo=(info)=>{
   console.log(info)
   const detalsInfo = document.getElementById('detls-info')
   const div = document.createElement('div')
   div.innerHTML=`
     <div class="card" style="width: 18rem;">
     <img src="${info.image}" class="card-img-top" alt="...">
       <div class="card-body">
       <h1>${info.mainFeatures.memory}</h1>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
 </div>
   `
   detalsInfo.appendChild(div)
}