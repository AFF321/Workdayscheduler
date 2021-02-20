var btn1 = $(".9b")
var nine = $(".9")
var ninet =$(".9t")
var btn2 = $(".10b")
var ten = $(".10")
var tent =$(".10t")
var btn3 = $(".11b")
var eleven = $(".11")
var elevent =$(".11t")
var btn4 = $(".12b")
var twelve = $(".12")
var twelvet =$(".12t")
var btn5 = $(".13b")
var thirteen = $(".13")
var thirteent =$(".13t")
var btn6 = $(".14b")
var fourteen = $(".14")
var fourteent =$(".14t")
var btn7 = $(".15b")
var fithteen = $(".15")
var fithteent =$(".15t")
var btn8 = $(".16b")
var sixteen= $(".16")
var sixteent =$(".16t")
var btn9 = $(".17b")
var seventeen = $(".17")
var seventeent =$(".17t")
var format = 'hh:mm:ss'
var time = moment(),format
before9 = moment('9:00:00', format),
after9 = moment('10:00:00', format);
before10 = moment('10:00:00', format),
after10 = moment('11:00:00', format);
before11 = moment('11:00:00', format),
after11 = moment('12:00:00', format);
if (time.isBefore(before9)){
    console.log('hello')
    $('#hour-9').addClass('future')
}
if (time.isBetween(before9, after9)){
    var div= $('#hour-9')
    $('#hour-9').addClass('Present')
    console.log("AAAAAAAAAAAAA")
    
} 
if (time.isAfter(after9)){
    console.log("ooooooooo")
    $('#hour-9').addClass('Past')
}


if (time.isBefore(before10)){
    console.log('hello')
    $('#hour-10').addClass('future')
}
if (time.isBetween(before10, after10)){
    var div= $('#hour-10')
    $('#hour-10').addClass('Present')
    console.log("AAAAAAAAAAAAA")
    
} 
if (time.isAfter(after10)){
    console.log("ooooooooo")
    $('#hour-10').addClass('Past')
}





var ninett = localStorage.getItem("h9")
ninet.val(ninett)
var tentt = localStorage.getItem("h10")
tent.val(tentt)
var eleventt = localStorage.getItem("h11")
elevent.val(eleventt)
var twelvett = localStorage.getItem("h12")
twelvet.val(twelvett)
var thirteentt = localStorage.getItem("h13")
thirteent.val(thirteentt)
var fourteentt = localStorage.getItem("h14")
fourteent.val(fourteentt)
var fithteentt = localStorage.getItem("h15")
fithteent.val(fithteentt)
var sixteentt = localStorage.getItem("h16")
sixteent.val(sixteentt)
var seventeentt = localStorage.getItem("h17")
seventeent.val(seventeentt)


function set9(){
    localStorage.setItem("h9", ninet.val())
    console.log(ninet.val())
}
function set10(){
    localStorage.setItem("h10", tent.val())
    console.log(tent.val())
}
function set11(){
    localStorage.setItem("h11", elevent.val())
    console.log(elevent.val())
}
function set12(){
    localStorage.setItem("h12", twelvet.val())
    console.log(twelvet.val())
}
function set13(){
    localStorage.setItem("h13", thirteent.val())
    console.log(thirteent.val())
}
function set14(){
    localStorage.setItem("h14", fourteent.val())
    console.log(fourteent.val())
}
function set15(){
    localStorage.setItem("h15", fithteent.val())
    console.log(fithteent.val())
}
function set16(){
    localStorage.setItem("h16", sixteent.val())
    console.log(sixteent.val())
}
function set17(){
    localStorage.setItem("h17", seventeent.val())
    console.log(seventeent.val())
}
moment()
console.log(moment())

btn1.on('click', set9)
btn2.on('click', set10)
btn3.on('click', set11)
btn4.on('click', set12)
btn5.on('click', set13)
btn6.on('click', set14)
btn7.on('click', set15)
btn8.on('click', set16)
btn9.on('click', set17)
$("#currentDay").text(moment().format("dddd, MMMM Do"))