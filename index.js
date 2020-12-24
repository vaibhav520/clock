setInterval(() => {
     d=new Date()
     h = d.getHours();
     m = d.getMinutes();
     s = d.getSeconds();
    hRotation=30*h+m/2;
    mRotation=6*m;
    sRotation=6*s;
    hour.style.transform=`rotate(${hRotation}deg)`
    minute.style.transform=`rotate(${mRotation}deg)`
    second.style.transform=`rotate(${sRotation}deg)`
},1000);