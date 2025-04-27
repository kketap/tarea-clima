window.addEventListener('load', () => {
    let lon
    let lat
    
    let tempeValor = document.getElementById('tempeValor')
    let temperDesc = document.getElementById('temperDesc')

    let ubi = document.getElementById('ubi')
    let iconoAnimado = document.getElementById('iconoAnimado')

    let velocidadTiempo = document.getElementById('velocidadTiempo')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ebea2750ff39da8b5642dc8e93e4a6ae`;
            const url = `https://api.openweathermap.org/data/2.5/weather?q=Santiago&lang=es&units=metric&appid=ebea2750ff39da8b5642dc8e93e4a6ae`;

            //console.log(url)

            fetch(url)
              .then( response => {return response.json()})
              .then( data => {
                let temp = Math.round(data.main.temp)
                tempeValor.textContent = `${temp} ° C`
                
                let desc = data.weather[0].description
                temperDesc.textContent = desc.toUpperCase()

                console.log(data.name)
                ubi.textContent = data.name

              })
              .catch( error =>{
                console.log(error)
              })
        })
    }
})