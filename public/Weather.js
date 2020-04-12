const form = document.querySelector('form');
const messageOne = document.querySelector('#display-mssg')
form.addEventListener('submit',(e)=>{
    const address= document.querySelector('input');
    
    console.log(address.value)
    e.preventDefault();
    fetch('/Weather/Track?address='+address.value).then((res)=>{
       res.json().then((data)=>{
        messageOne.textContent=data.resp.forecast
       })
    })
})