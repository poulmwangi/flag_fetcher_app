
const btn = document.querySelector('#getText');
const input = document.querySelector('#country');
const div = document.querySelector('#myDiv');

btn.addEventListener('click',function(e){
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',(e)=>{
        if(e.target.readyState===4 && e.target.status ===200){
        const data = JSON.parse(e.target.responseText)
        data.forEach(function(country){
            if(country.alpha2Code === input.value.toUpperCase() || country.alpha3Code === input.value.toUpperCase()){
                const p = document.createElement('p');
                const p3 = document.createElement('p');
                const p4 = document.createElement('p');
                const p5 = document.createElement('p')
                p5.textContent = `Time Zone: ${country.timezones}`

                p4.textContent = `${country.name} Borders :${country.borders}`
                p3.textContent = `${country.name} calling Code: ${country.callingCodes}`
                p.textContent = country.flag
                const p2 = document.createElement('p')
                p2.textContent = `Country:${country.name}`
                div.textContent = ''
                div.appendChild(p2)
                div.appendChild(p4)
                div.appendChild(p5)
                div.appendChild(p3)
                const img = document.createElement('img');
                img.style = 'width:300px;height:250px'
                img.setAttribute('src',p.textContent)
                div.appendChild(img)
                
            }
        })
    
        }
        else if(e.target.readyState === 4){
            const p  = document.createElement('p')
             p.textContent = `Unable to fetch data`
             div.appendChild(p)
         }
      
    })
    
    request.open('GET','https://restcountries.eu/rest/v2/all')
    request.send()
})

