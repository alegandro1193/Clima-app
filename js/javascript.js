
//https://api.openweathermap.org/data/2.5/weather?lat=42.88&lon=-8.54&appid=f649b9c0d1e36378b21ad6d58267c653&units=metric


function AnalisisClima(lat,lon){
    
    const apiKey = "f649b9c0d1e36378b21ad6d58267c653";
    
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f649b9c0d1e36378b21ad6d58267c653&units=metric`;
    
        
    fetch(apiURL)
    .then(response => response.json())
    
    .then(
        data =>{
            console.log(data);
            let name = data.name
            let clima=document.getElementById('clima')
            let datos=document.getElementById('datos')
            let Fecha_galicia =document.getElementById('Fecha_galicia')
            let weather = data.weather[0].icon
            let imgURL 
            let temperatura = data.main.temp
            let sensacionTermica =data.main.feels_like
            let humidity = data.main.humidity
            let temperaturaMax=data.main.temp_max
            let temperaturaMin=data.main.temp_min
            let vientos =data.wind.speed
            const timestamp = data.dt * 1000;

            const fecha = new Date(timestamp);

            const meses =['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'junio', 'julio', 'Agosto', 'Septiembre','Outubre','Noviembre','Diciembre']

            //Obtener día, mes e ano
            const dia = fecha.getDate();
            const mes = fecha.getMonth();
            const ano = fecha.getFullYear();

           const nomesMes = meses[mes];

           const fechaFormateada =  dia + " "+nomesMes+" "+ano ;
            





            
            
            switch (weather) {

                case '01d':
                    imgURL = 'iconos/01d.png';
                break;
    
                case '01n':
                    imgURL = 'iconos/01n.png';
                break;
    
                case '02d':
                    imgURL = 'iconos/02d.png';
                break;
    
                case '02n':
                    imgURL = 'iconos/02n.png';
                break;
    
                case '03d':
                    imgURL = 'iconos/03d.png';
                break;
    
                case '03n':
                    imgURL = 'iconos/03n.png';
                break;
    
                case '04d':
                    imgURL = 'iconos/04d.png';
                break;
    
                case '04n':
                    imgURL = 'iconos/04n.png';
                break;
    
                case '09d':
                    imgURL = 'iconos/09d.png';
                break;
    
                case '09n':
                    imgURL = 'iconos/09n.png';
                break;
    
                case '10d':
                    imgURL = 'iconos/10d.png';
                break;
    
                case '10n':
                    imgURL = 'iconos/10n.png';
                break;
    
                case '11d':
                    imgURL = 'iconos/11d.png';
                break;
    
                case '11n':
                    imgURL = 'iconos/11n.png';
                break;
    
                case '13d':
                    imgURL = 'iconos/13d.png';
                break;
    
                case '13n':
                    imgURL = 'iconos/13n.png';
                break;
    
                case '50d':
                    imgURL = 'iconos/50d.png';
                break;
    
                case '50n':
                    imgURL = 'iconos/50n.png';
                break;
    
            }

            Fecha_galicia.innerHTML= `<p> Temperaturas de Galicia hoy `+fechaFormateada+`</p>`
            
            clima.innerHTML=`<h2>`+name+ `</h2>
                            <p>`+ Math.round(temperatura)+` ºC</p>
                    <img src="`+imgURL+`" alt="">
                    `

            datos.innerHTML = `<p> sensacion Termica `+ Math.round(sensacionTermica)+` ºC</p> 
                                <p> humedad `+ Math.round(humidity)+`%</p>
                                <p> temperatura maxima `+ Math.round(temperaturaMax)+`</p>
                                <p> temperatura minima `+ Math.round(temperaturaMin)+`</p>
                                <p> Vientos `+vientos+` km/h </p>`
                    
    })
   
}