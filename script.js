function startTime() {
const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById('Clock').innerHTML =  h + ":" + m + ":" + s;
setTimeout(startTime, 1000);
}

function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}

function hourContent() {
    const today = new Date();
    let hourOfDay = today.getHours();
    switch(hourOfDay){
        case 1:
            var img = document.createElement("img");
            img.src = "https://rialto.ams3.cdn.digitaloceanspaces.com/uploads/619245eab025e4605b7fa2cd17671eae82097a71c453a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 2:
            var img = document.createElement("img");
            img.src = "https://cdn.nos.nl/image/2022/01/19/822290/1920x1440a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 3:
            var img = document.createElement("img");
            img.src = "https://vu-ondernemend.nl/wp-content/uploads/2022/10/VU-StartHub-scaled.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 4:
            var img = document.createElement("img");
            img.src = "https://www.karresenbrands.com/images/jcogs_img/cache/VU-Campus-01-new_-_39ada00_-_72c957c2d1569221ae23bb421ee0f62146db3778.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 5:
            var img = document.createElement("img");
            img.src = "https://www.vu-orkest.nl/wp-content/uploads/VU-Orkest-concertagenda-min.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 6:
            var img = document.createElement("img");
            img.src = "https://cdn.nos.nl/image/2022/01/19/822290/1920x1440a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 7:
            var img = document.createElement("img");
            img.src = "https://rialto.ams3.cdn.digitaloceanspaces.com/uploads/619245eab025e4605b7fa2cd17671eae82097a71c453a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 8:
            var img = document.createElement("img");
            img.src = "https://cdn.nos.nl/image/2022/01/19/822290/1920x1440a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 9:
            var img = document.createElement("img");
            img.src = "https://vu-ondernemend.nl/wp-content/uploads/2022/10/VU-StartHub-scaled.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 10:
            var img = document.createElement("img");
            img.src = "https://www.karresenbrands.com/images/jcogs_img/cache/VU-Campus-01-new_-_39ada00_-_72c957c2d1569221ae23bb421ee0f62146db3778.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 11:
            var img = document.createElement("img");
            img.src = "https://www.vu-orkest.nl/wp-content/uploads/VU-Orkest-concertagenda-min.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 12:
            var img = document.createElement("img");
            img.src = "https://cdn.nos.nl/image/2022/01/19/822290/1920x1440a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break; 
        case 13:
            var img = document.createElement("img");
            img.src = "https://www.vu-orkest.nl/wp-content/uploads/VU-Orkest-concertagenda-min.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 14:
            var img = document.createElement("img");
            img.src = "https://rialto.ams3.cdn.digitaloceanspaces.com/uploads/619245eab025e4605b7fa2cd17671eae82097a71c453a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 1:
            var img = document.createElement("img");
            img.src = "https://rialto.ams3.cdn.digitaloceanspaces.com/uploads/619245eab025e4605b7fa2cd17671eae82097a71c453a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 2:
            var img = document.createElement("img");
            img.src = "https://cdn.nos.nl/image/2022/01/19/822290/1920x1440a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 3:
            var img = document.createElement("img");
            img.src = "https://vu-ondernemend.nl/wp-content/uploads/2022/10/VU-StartHub-scaled.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 4:
            var img = document.createElement("img");
            img.src = "https://www.karresenbrands.com/images/jcogs_img/cache/VU-Campus-01-new_-_39ada00_-_72c957c2d1569221ae23bb421ee0f62146db3778.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 5:
            var img = document.createElement("img");
            img.src = "https://www.vu-orkest.nl/wp-content/uploads/VU-Orkest-concertagenda-min.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 6:
            var img = document.createElement("img");
            img.src = "https://cdn.nos.nl/image/2022/01/19/822290/1920x1440a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 7:
            var img = document.createElement("img");
            img.src = "https://rialto.ams3.cdn.digitaloceanspaces.com/uploads/619245eab025e4605b7fa2cd17671eae82097a71c453a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 8:
            var img = document.createElement("img");
            img.src = "https://cdn.nos.nl/image/2022/01/19/822290/1920x1440a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 9:
            var img = document.createElement("img");
            img.src = "https://vu-ondernemend.nl/wp-content/uploads/2022/10/VU-StartHub-scaled.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 10:
            var img = document.createElement("img");
            img.src = "https://www.karresenbrands.com/images/jcogs_img/cache/VU-Campus-01-new_-_39ada00_-_72c957c2d1569221ae23bb421ee0f62146db3778.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 11:
            var img = document.createElement("img");
            img.src = "https://www.vu-orkest.nl/wp-content/uploads/VU-Orkest-concertagenda-min.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 12:
            var img = document.createElement("img");
            img.src = "https://cdn.nos.nl/image/2022/01/19/822290/1920x1440a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break; 
        case 13:
            var img = document.createElement("img");
            img.src = "https://www.vu-orkest.nl/wp-content/uploads/VU-Orkest-concertagenda-min.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 14:
            var img = document.createElement("img");
            img.src = "https://rialto.ams3.cdn.digitaloceanspaces.com/uploads/619245eab025e4605b7fa2cd17671eae82097a71c453a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 15:
            var img = document.createElement("img");
            img.src = "https://rialto.ams3.cdn.digitaloceanspaces.com/uploads/619245eab025e4605b7fa2cd17671eae82097a71c453a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 16:
            var img = document.createElement("img");
            img.src = "https://cdn.nos.nl/image/2022/01/19/822290/1920x1440a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 17:
            var img = document.createElement("img");
            img.src = "https://vu-ondernemend.nl/wp-content/uploads/2022/10/VU-StartHub-scaled.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 18:
            var img = document.createElement("img");
            img.src = "https://www.karresenbrands.com/images/jcogs_img/cache/VU-Campus-01-new_-_39ada00_-_72c957c2d1569221ae23bb421ee0f62146db3778.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 19:
            var img = document.createElement("img");
            img.src = "https://www.vu-orkest.nl/wp-content/uploads/VU-Orkest-concertagenda-min.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 20:
            var img = document.createElement("img");
            img.src = "https://cdn.nos.nl/image/2022/01/19/822290/1920x1440a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 21:
            var img = document.createElement("img");
            img.src = "https://rialto.ams3.cdn.digitaloceanspaces.com/uploads/619245eab025e4605b7fa2cd17671eae82097a71c453a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 22:
            var img = document.createElement("img");
            img.src = "https://cdn.nos.nl/image/2022/01/19/822290/1920x1440a.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 23:
            var img = document.createElement("img");
            img.src = "https://vu-ondernemend.nl/wp-content/uploads/2022/10/VU-StartHub-scaled.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        case 24:
            var img = document.createElement("img");
            img.src = "https://www.karresenbrands.com/images/jcogs_img/cache/VU-Campus-01-new_-_39ada00_-_72c957c2d1569221ae23bb421ee0f62146db3778.jpg";
            var src = document.getElementById("HourContent");
            src.appendChild(img);
            break;
        default:
            break;
    }

}