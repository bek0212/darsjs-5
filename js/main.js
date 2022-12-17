var email = 'bekzodbek'
var password = 0000

function kirish(){
    var elInp1 = document.querySelector('.inp1').value
    var elInp2 = document.querySelector('.inp2').value
    var a = elInp1.toLowerCase()
    var b = elInp2

    if(a==email && b== password){
        alert('Siz registratsiyadan itdingiz')
    }
    else{
        alert('nostogri Emmail yoki Password kiritingiz')
    }

}

function javobi(){
   var elInput1 = document.querySelector('.input1').value
   var elInput2 = document.querySelector('.input2').value
    var elAmal = document.querySelector('.amal').value

    var koshish = Number(elInput1)+Number(elInput2)
    var bolish = Number(elInput1)/Number(elInput2)
    var minus = Number(elInput1)-Number(elInput2)
    var kopaytirish = Number(elInput1)*Number(elInput2)
   
    if (elAmal== '+' ){
        alert( 'sini javobingiz: ' + koshish)
    }
    else if (elAmal == '/'){
        alert( 'sini javobingiz: ' + bolish)
    }
    else if (elAmal == '-'){
        alert( 'sini javobingiz: ' + minus)
    }
    else if (elAmal == '*'){
        alert( 'sini javobingiz: ' + kopaytirish)
    }

    else{
        alert('siz notogri amal kiritingiz')
    }




}