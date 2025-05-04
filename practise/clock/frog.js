function showTime(){
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let session = 'AM'
    
    if(hours == 0){
        hours = 12
    }
    
    if(hours > 12){
        hours -= 12
        session = 'PM'
    }
    
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds
    
    let time = hours + ':' + minutes + ':' + seconds + " " + session
    document.getElementById('displayClock').innerText = time
    document.getElementById('displayClock').textContent = time
    
    setTimeout(showTime, 1000)
}

showTime()

const body = document.querySelector('body')

function randomColor(){
    const letters = '0123456789ABCDEF'
    let color = '#'
    
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * letters.length)]
    }
    
    return color
}

for(let child of body.children){
    child.style.color = randomColor()
}