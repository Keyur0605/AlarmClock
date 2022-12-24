let bgmusic = new Audio("music.mp3");

const update=()=>{
let date = new Date;

  america.innerHTML= date.toLocaleString
  ("en-US", {timeZone: 'America/Chicago',}).split(",")[1];
  india.innerHTML= date.toLocaleString
  ("en-US", {timeZone: 'Asia/Kolkata',}).split(",")[1];
  china.innerHTML= date.toLocaleString
  ("en-US", {timeZone: 'Asia/Shanghai',}).split(",")[1];

  var alarmhour=alarm.value.split(":")[0]
  var alarmmin=alarm.value.split(":")[1]
  

  if(date.getHours()==alarmhour && date.getMinutes()==alarmmin)
  {
    console.log("alarm play");
    bgmusic.play()
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
    
  }

  let ring=((alarmhour)-(date.getHours())) 
  console.log(typeof(ring));
  let ring1= ((alarmmin)-(date.getMinutes()))
  
let print=document.querySelector("#print");

  if(alarmhour==0 || alarmmin==undefined){
    print.innerHTML="0  :  0   time left"
  }
  else{
    print.innerHTML=`${ring}  :  ${ring1}   time left`
  }

}
setInterval(update,1000)


let stop=document.getElementById("stop")
  stop.addEventListener("click",(e)=>{
    window.location.reload();
    e.preventDefault()
   console.log("hjv");
    bgmusic.pause()
    print.innerHTML=" ";
   
  })
