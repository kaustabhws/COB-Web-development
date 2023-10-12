document.addEventListener("DOMContentLoaded", (event) => {

    const len = document.querySelector('.len')
    const temp = document.querySelector('.tem')
    const area = document.querySelector('.are')
    const lencon = document.querySelector('.length-container')
    const tempcon = document.querySelector('.temp-container')
    const areacon = document.querySelector('.area-container')

    len.addEventListener('click', () => {
        lencon.classList.toggle('hidden');
        tempcon.classList.add('hidden');
        areacon.classList.add('hidden');
    });

    temp.addEventListener('click', () => {
        lencon.classList.add('hidden');
        tempcon.classList.toggle('hidden');
        areacon.classList.add('hidden');
    });

    area.addEventListener('click', () => {
        lencon.classList.add('hidden');
        tempcon.classList.add('hidden');
        areacon.classList.toggle('hidden');
    });


    const lencalculate = document.querySelector('.len-calculate');

    lencalculate.addEventListener('click', () => {
        let from = document.getElementById('from-len').value;
        let to = document.getElementById('to-len')
        let fromunit = document.getElementById('from-leng').value;
        let tounit = document.getElementById('to-leng').value;
        let res = document.querySelector('.len-res');

        if (!from) {
            res.innerHTML = `Enter value to start convertion`
            return;
        }

        if(fromunit == 'Meter') {
            if(tounit == 'Meter') {
                to.value = from
                res.innerHTML = `${from} ${fromunit} is equal to ${from} ${tounit}`
            }
            if(tounit == 'Centimeter') {
                let result = from*100;
                to.value = result
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Kilometer') {
                let result = from/1000;
                to.value = result;
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Millimeter') {
                let result = from*1000;
                to.value = result;
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
        }
        else if(fromunit == 'Centimeter') {
            if(tounit == 'Meter') {
                let result = from/100
                to.value = result
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Centimeter') {
                to.value = from
                res.innerHTML = `${from} ${fromunit} is equal to ${from} ${tounit}`
            }
            if(tounit == 'Kilometer') {
                let result = from/100000;
                to.value = result;
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Millimeter') {
                let result = from*10;
                to.value = result;
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
        }
        else if(fromunit == 'Kilometer') {
            if(tounit == 'Meter') {
                let result = from*1000
                to.value = result
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Centimeter') {
                let result = from*100000;
                to.value = result
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Kilometer') {
                to.value = from;
                res.innerHTML = `${from} ${fromunit} is equal to ${from} ${tounit}`
            }
            if(tounit == 'Millimeter') {
                let result = from*1000000 ;
                to.value = result;
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
        }
        else if(fromunit == 'Millimeter') {
            if(tounit == 'Meter') {
                let result = from/1000
                to.value = result
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Centimeter') {
                let result = from/10;
                to.value = result
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Kilometer') {
                let result = from/1000000;
                to.value = result;
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Millimeter') {
                to.value = from;
                res.innerHTML = `${from} ${fromunit} is equal to ${from} ${tounit}`
            }
        }

    })


    const tempcalculate = document.querySelector('.temp-calculate');

    tempcalculate.addEventListener('click', () => {
        let from = parseFloat(document.getElementById('from-tem').value);
        let to = document.getElementById('to-tem')
        let fromunit = document.getElementById('from-temp').value;
        let tounit = document.getElementById('to-temp').value;
        let res = document.querySelector('.temp-res');

        if (!from) {
            res.innerHTML = `Enter value to start convertion`
            return;
        }

        if(fromunit == 'Celsius') {
            if(tounit == 'Celsius') {
                to.value = from;
                res.innerHTML  = `${from} ${fromunit} is equal to ${from} ${tounit}`
            }
            if(tounit == 'Kelvin') {
                let result = from+273.15;
                to.value = result;
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`;
            }
            if(tounit == 'Fahrenheit') {
                let result = (from* (9/5)) + 32;
                to.value = result;
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`;
            }
        }
        else if(fromunit == 'Kelvin') {
            if(tounit == 'Celsius') {
                let result = from - 273.15
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Kelvin') {
                to.value = from;
                res.innerHTML  = `${from} ${fromunit} is equal to ${from} ${tounit}`
            }
            if(tounit == 'Fahrenheit') {
                let result = (from - 273.15) * 9/5 + 32;
                to.value = result;
                res.innerHTML = `${from} ${fromunit} is equal to ${result} ${tounit}`;
            }
        }
        else if(fromunit == 'Fahrenheit') {
            if(tounit == 'Celsius') {
                let result = (from - 32) * 5/9
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Kelvin') {
                let result = (from - 32) * 5/9 + 273.15
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Fahrenheit') {
                to.value = from;
                res.innerHTML  = `${from} ${fromunit} is equal to ${from} ${tounit}`
            }
        }
    })


    const areacalculate = document.querySelector('.area-calculate')

    areacalculate.addEventListener('click', () => {
        let from = parseFloat(document.getElementById('from-are').value);
        let to = document.getElementById('to-are')
        let fromunit = document.getElementById('from-area').value;
        let tounit = document.getElementById('to-area').value;
        let res = document.querySelector('.area-res');

        if (!from) {
            res.innerHTML = `Enter value to start convertion`
            return;
        }

        if(fromunit == 'Square Meter') {
            if(tounit == 'Square Meter') {
                to.value = from;
                res.innerHTML  = `${from} ${fromunit} is equal to ${from} ${tounit}`
            }
            if(tounit == 'Square Kilometer') {
                let result = from / 1000000;
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Square Centimeter') {
                let result = from * 10000
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Square Millimeter') {
                let result = from * 1000000;
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
        }
        else if(fromunit == 'Square Kilometer') {
            if(tounit == 'Square Meter') {
                let result = from * 1000000;
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Square Kilometer') {
                to.value = from;
                res.innerHTML  = `${from} ${fromunit} is equal to ${from} ${tounit}`
            }
            if(tounit == 'Square Centimeter') {
                let result = from * 10000000
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Square Millimeter') {
                let result = from * 1000000000;
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
        }
        else if(fromunit == 'Square Centimeter') {
            if(tounit == 'Square Meter') {
                let result = from / 10000;
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Square Kilometer') {
                let result = from / 10000000;
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Square Centimeter') {
                to.value = from;
                res.innerHTML  = `${from} ${fromunit} is equal to ${from} ${tounit}`
            }
            if(tounit == 'Square Millimeter') {
                let result = from * 100;
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
        }
        else if(tounit == 'Square Millimeter') {
            if(tounit == 'Square Meter') {
                let result = from  / 1000000;
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Square Kilometer') {
                let result = from / 1000000000;
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Square Centimeter') {
                let result = from / 100;
                to.value = result;
                res.innerHTML  = `${from} ${fromunit} is equal to ${result} ${tounit}`
            }
            if(tounit == 'Square Millimeter') {
                to.value = from;
                res.innerHTML  = `${from} ${fromunit} is equal to ${from} ${tounit}`
            }
        }
    })

});
