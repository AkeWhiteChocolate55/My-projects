// Removing quantity elements

function remColvo() {
    localStorage.removeItem('colvo')
}

// Removing elements from local storage

function remCart() {
    localStorage.removeItem('cart')
}

// Creating elements in Local Storage

function createCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
};

// Creating elements in Local Storage

function createCart2() {
    localStorage.setItem('cart', JSON.stringify(cart2));
};

// Loading your number basket elements

function loadColvo() {
    if(localStorage.getItem('colvo')) {
        colvo = JSON.parse(localStorage.getItem('colvo'));
        $('.colvo-dig').html(colvo);
    }
}

// Loading dates in cart

function loadCart() {
    if(localStorage.getItem('cart'))
    cart = JSON.parse(localStorage.getItem('cart'));
}

var cart = {};
var cart2 = {};

// Writing col-vo elements to basket

var colvo = localStorage.getItem('colvo');
var col = '';
col += '<p id = "col" class = "col">0 goods</p>';

if(colvo == 0 ){
    col.appendTo('.basket')
    $('.col').text('0 goods')
}
else {
    $(col).appendTo('.basket')
    $('.col').text(colvo + ' goods')
}

// Writing order price and quantity goods into order

var colvo = localStorage.getItem('colvo');
var col = '';
col += '<p id = "gpc" class = "gp-col">0 goods</p>';

if(colvo == 0 ){
    col.appendTo('.gds-prc')
    $('.gp-col').text('0 goods')
}
else {
    $(col).appendTo('.gds-prc')
    $('.gp-col').text(colvo + ' goods')
}

// Adding price to total1 

var total = 0;

// Checking local storage on id

var s = JSON.parse(localStorage.getItem('sok'))
var a = localStorage.getItem('cart')
var b = JSON.parse(a)

var bk = Object.keys(b)

console.log(colvo)
console.log(a)

chekCart1();
chekCart2();
chekCart3();
chekCart4();
chekCart5();
chekCart6();
chekCart7();
chekCart8();
chekCart9();
chekCart10();
chekCart11();
chekCart12();
chekCart13();
chekCart14();
chekCart15();
chekCart16();
chekCart17();
chekCart18();
chekCart19();
chekCart20();
chekCart21();
chekCart22();
chekCart23();
chekCart24();
chekCart25();
chekCart26();
chekCart27();
chekCart28();
chekCart29();
chekCart30();

// Adding price to total2
$('.tot').text(total + ' ₽')


// Checking cart func
function chekCart1() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 1) {
        var out1 = '';
        out1 += '<div class = "div1">';
        out1 += '<h4 class = "t1">Язык с грибным соусом</h4>';
        out1 += '<p id = "x1" class = "x">x:</p>';
        out1 += '<p class = "colvo1"></p>';
        out1 += '<button id = "+1" class = "but1">+</button>';
        out1 += '<button id = "-1" class = "but2">-</button>';
        out1 += '<h4 class = "itog">Итого:</h4>';
        out1 += '<p class = "c1">230</p>'
        out1 += '<span class = s>₽</span>'
        out1 += '<button id = "cl1" class = "close">x</button>'
        out1 += '</div>'
        $(out1).appendTo('.elements');
        $('#x1').css('margin-left','160px')
        
        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if( (a[i-2] == 1) && (a[i-3] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo1').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo1').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo1').text()
        var cost = $('.c1').text()
        var resct = cost * x
        $('.c1').text(resct)

        $('#cl1').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1]
            }
        }
            loadColvo()
            loadCart()
            colvo = colvo - $('.colvo1').text();
            saveColvo()
            delete cart[id]
            createCart()
            loadCart()
            location.reload();
        })

        total += Number($('.c1').text())
    }    
}

function chekCart2() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 2) {
        var out2 = '';
        out2 += '<div class = "div2">';
        out2 += '<h4 class = "t2">Говядина со сливочно перечным соусом</h4>';
        out2 += '<p id = "x2" class = "x">x:</p>';
        out2 += '<p class = "colvo2"></p>';
        out2 += '<button id = "+2" class = "but1">+</button>';
        out2 += '<button id = "-2" class = "but2">-</button>';
        out2 += '<h4 class = "itog">Итого:</h4>';
        out2 += '<p class = "c2">240</p>'
        out2 += '<span class = s>₽</span>'
        out2 += '<button id = "cl2" class = "close">x</button>'
        out2 += '</div>'
        $(out2).appendTo('.elements');
        $('#x2').css('margin-left','50px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if( (a[i-2] == 2) && (a[i-3] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo2').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo2').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo2').text()
        var cost = $('.c2').text()
        var resct = cost * x
        $('.c2').text(resct)

        $('#cl2').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1]
            }
        }
            loadColvo()
            loadCart()
            colvo = colvo - $('.colvo2').text();
            saveColvo()
            delete cart[id]
            createCart()
            loadCart()
            location.reload();
        })

        total += Number($('.c2').text())
    }    
}

function chekCart3() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 3) {
        var out3 = '';
        out3 += '<div class = "div3">';
        out3 += '<h4 class = "t3">Свинина Неаполитано</h4>';
        out3 += '<p id = "x3" class = "x">x:</p>';
        out3 += '<p class = "colvo3"></p>';
        out3 += '<button id = "+3" class = "but1">+</button>';
        out3 += '<button id = "-3" class = "but2">-</button>';
        out3 += '<h4 class = "itog">Итого:</h4>';
        out3 += '<p class = "c3">220</p>'
        out3 += '<span class = s>₽</span>'
        out3 += '<button id = "cl3" class = "close">x</button>'
        out3 += '</div>'
        $(out3).appendTo('.elements');

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if( (a[i-2] == 3) && (a[i-3] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo3').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo3').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo3').text()
        var cost = $('.c3').text()
        var resct = cost * x
        $('.c3').text(resct)

        $('#cl3').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1]
            }
        }
            loadColvo()
            loadCart()
            colvo = colvo - $('.colvo3').text();
            saveColvo()
            delete cart[id]
            createCart()
            loadCart()
            location.reload();
        })

        total += Number($('.c3').text())
    }    
}

function chekCart4() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 4) {
        var out4 = '';
        out4 += '<div class = "div4">';
        out4 += '<h4 class = "t4">Курица терияки</h4>';
        out4 += '<p id = "x4" class = "x">x:</p>';
        out4 += '<p class = "colvo4"></p>';
        out4 += '<button id = "+4" class = "but1">+</button>';
        out4 += '<button id = "-4" class = "but2">-</button>';
        out4 += '<h4 class = "itog">Итого:</h4>';
        out4 += '<p class = "c4">250</p>'
        out4 += '<span class = s>₽</span>'
        out4 += '<button id = "cl4" class = "close">x</button>'
        out4 += '</div>'
        $(out4).appendTo('.elements');
        $('#x4').css('margin-left','240px')
        
        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if( (a[i-2] == 4) && (a[i-3] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo4').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo4').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo4').text()
        var cost = $('.c4').text()
        var resct = cost * x
        $('.c4').text(resct)

        $('#cl4').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1]
            }
        }
            loadColvo()
            loadCart()
            colvo = colvo - $('.colvo4').text();
            saveColvo()
            delete cart[id]
            createCart()
            loadCart()
            location.reload();
        })

        total += Number($('.c4').text())
    }    
}

function chekCart5() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 5) {
        var out5 = '';
        out5 += '<div class = "div5">';
        out5 += '<h4 class = "t5">Жаровня с говядиной</h4>';
        out5 += '<p id = "x5" class = "x">x:</p>';
        out5 += '<p class = "colvo5"></p>';
        out5 += '<button id = "+5" class = "but1">+</button>';
        out5 += '<button id = "-5" class = "but2">-</button>';
        out5 += '<h4 class = "itog">Итого:</h4>';
        out5 += '<p class = "c5">350</p>'
        out5 += '<span class = s>₽</span>'
        out5 += '<button id = "cl5" class = "close">x</button>'
        out5 += '</div>'
        $(out5).appendTo('.elements');

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if( (a[i-2] == 5) && (a[i-3] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo5').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo5').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo5').text()
        var cost = $('.c5').text()
        var resct = cost * x
        $('.c5').text(resct)

        $('#cl5').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo5').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c5').text())
    }    
}

function chekCart6() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 6) {
        var out6 = '';
        out6 += '<div class = "div6">';
        out6 += '<h4 class = "t6">Шашлык куриный</h4>';
        out6 += '<p id = "x6" class = "x">x:</p>';
        out6 += '<p class = "colvo6"></p>';
        out6 += '<button id = "+6" class = "but1">+</button>';
        out6 += '<button id = "-6" class = "but2">-</button>';
        out6 += '<h4 class = "itog">Итого:</h4>';
        out6 += '<p class = "c6">300</p>'
        out6 += '<span class = s>₽</span>'
        out6 += '<button id = "cl6" class = "close">x</button>'
        out6 += '</div>'
        $(out6).appendTo('.elements');
        $('#x6').css('margin-left','200px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if( (a[i-2] == 6) && (a[i-3] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo6').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo6').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo6').text()
        var cost = $('.c6').text()
        var resct = cost * x
        $('.c6').text(resct)

        $('#cl6').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo6').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c6').text())
    }    
}

function chekCart7() {
    for(var i = 0 ; i < bk.length ; i++)
    for(var i = 0 ; i < a.length ; i++)
    if( bk[i] == 7 )  {
        var out7 = '';
        out7 += '<div class = "div7">';
        out7 += '<h4 class = "t7">Шашлык из свинины</h4>';
        out7 += '<p id = "x7" class = "x">x:</p>';
        out7 += '<p class = "colvo7"></p>';
        out7 += '<button id = "+7" class = "but1">+</button>';
        out7 += '<button id = "-7" class = "but2">-</button>';
        out7 += '<h4 class = "itog">Итого:</h4>';
        out7 += '<p class = "c7">350</p>'
        out7 += '<span class = s>₽</span>'
        out7 += '<button id = "cl7" class = "close">x</button>'
        out7 += '</div>'
        $(out7).appendTo('.elements');

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if( (a[i-2] == 7) && (a[i-3] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo7').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo7').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo7').text()
        var cost = $('.c7').text()
        var resct = cost * x
        $('.c7').text(resct)

        $('#cl7').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo7').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c7').text())
    }   
}

function chekCart8() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 8) {
        var out8 = '';
        out8 += '<div class = "div8">';
        out8 += '<h4 class = "t8">Шашлык из индейки</h4>';
        out8 += '<p id = "x8" class = "x">x:</p>';
        out8 += '<p class = "colvo8"></p>';
        out8 += '<button id = "+8" class = "but1">+</button>';
        out8 += '<button id = "-8" class = "but2">-</button>';
        out8 += '<h4 class = "itog">Итого:</h4>';
        out8 += '<p class = "c8">320</p>'
        out8 += '<span class = s>₽</span>'
        out8 += '<button id = "cl8" class = "close">x</button>'
        out8 += '</div>'
        $(out8).appendTo('.elements');

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if( (a[i-2] == 8) && (a[i-3] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo8').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo8').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo8').text()
        var cost = $('.c8').text()
        var resct = cost * x
        $('.c8').text(resct)

        $('#cl8').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo8').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c8').text())
    }    
}

function chekCart9() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 9) {
        var out9 = '';
        out9 += '<div class = "div9">';
        out9 += '<h4 class = "t9">Борщ</h4>';
        out9 += '<p id ="x9" class = "x">x:</p>';
        out9 += '<p class = "colvo9"></p>';
        out9 += '<button id = "+9" class = "but1">+</button>';
        out9 += '<button id = "-9" class = "but2">-</button>';
        out9 += '<h4 class = "itog">Итого:</h4>';
        out9 += '<p class = "c9">170</p>'
        out9 += '<span class = s>₽</span>'
        out9 += '<button id = "cl9" class = "close">x</button>'
        out9 += '</div>'
        $(out9).appendTo('.elements');
        $('#x9').css('margin-left','300px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if( (a[i-2] == 9) && (a[i-3] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo9').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo9').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo9').text()
        var cost = $('.c9').text()
        var resct = cost * x
        $('.c9').text(resct)

        $('#cl9').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo9').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c9').text())
    }    
}

function chekCart10() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 10) {
        var out10 = '';
        out10 += '<div class = "div10">';
        out10 += '<h4 class = "t10">Харчо</h4>';
        out10 += '<p id = "x10" class = "x">x:</p>';
        out10 += '<p class = "colvo10"></p>';
        out10 += '<button id = "+10" class = "but1">+</button>';
        out10 += '<button id = "-10" class = "but2">-</button>';
        out10 += '<h4 class = "itog">Итого:</h4>';
        out10 += '<p class = "c10">180</p>'
        out10 += '<span class = s>₽</span>'
        out10 += '<button id = "cl10" class = "close">x</button>'
        out10 += '</div>'
        $(out10).appendTo('.elements');
        $('#x10').css('margin-left','300px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 0) && (a[i-3] == 1) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo10').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo10').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo10').text()
        var cost = $('.c10').text()
        var resct = cost * x
        $('.c10').text(resct)

        $('#cl10').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo10').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c10').text())
    }    
}

function chekCart11() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 11) {
        var out11 = '';
        out11 += '<div class = "div11">';
        out11 += '<h4 class = "t11">Грибной крем-суп</h4>';
        out11 += '<p id = "x11" class = "x">x:</p>';
        out11 += '<p class = "colvo11"></p>';
        out11 += '<button id = "+11" class = "but1">+</button>';
        out11 += '<button id = "-11" class = "but2">-</button>';
        out11 += '<h4 class = "itog">Итого:</h4>';
        out11 += '<p class = "c11">190</p>'
        out11 += '<span class = s>₽</span>'
        out11 += '<button id = "cl11" class = "close">x</button>'
        out11 += '</div>'
        $(out11).appendTo('.elements');
        $('#x11').css('margin-left','200px')
        
        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 1) && (a[i-3] == 1) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo11').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo11').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo11').text()
        var cost = $('.c11').text()
        var resct = cost * x
        $('.c11').text(resct)

        $('#cl11').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo11').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c11').text())
    }    
}

function chekCart12() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 12) {
        var out12 = '';
        out12 += '<div class = "div12">';
        out12 += '<h4 class = "t12">Том ям с креветками</h4>';
        out12 += '<p id = "x12" class = "x">x:</p>';
        out12 += '<p class = "colvo12"></p>';
        out12 += '<button id = "+12" class = "but1">+</button>';
        out12 += '<button id = "-12" class = "but2">-</button>';
        out12 += '<h4 class = "itog">Итого:</h4>';
        out12 += '<p class = "c12">250</p>'
        out12 += '<span class = s>₽</span>'
        out12 += '<button id = "cl12" class = "close">x</button>'
        out12 += '</div>'
        $(out12).appendTo('.elements');

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 2) && (a[i-3] == 1) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo12').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo12').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo12').text()
        var cost = $('.c12').text()
        var resct = cost * x
        $('.c12').text(resct)

        $('#cl12').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo12').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c12').text())
    }    
}

function chekCart13() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 13) {
        var out13 = '';
        out13 += '<div class = "div13">';
        out13 += '<h4 class = "t13">Том ям с морепродуктами</h4>';
        out13 += '<p id = "x13" class = "x">x:</p>';
        out13 += '<p class = "colvo13"></p>';
        out13 += '<button id = "+13" class = "but1">+</button>';
        out13 += '<button id = "-13" class = "but2">-</button>';
        out13 += '<h4 class = "itog">Итого:</h4>';
        out13 += '<p class = "c13">260</p>'
        out13 += '<span class = s>₽</span>'
        out13 += '<button id = "cl13" class = "close">x</button>'
        out13 += '</div>'
        $(out13).appendTo('.elements');
        $('#x13').css('margin-left','140px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 3) && (a[i-3] == 1) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo13').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo13').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo13').text()
        var cost = $('.c13').text()
        var resct = cost * x
        $('.c13').text(resct)

        $('#cl13').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo13').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c13').text())
    }    
}

function chekCart14() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 14) {
        var out14 = '';
        out14 += '<div class = "div14">';
        out14 += '<h4 class = "t14">Рамен 2.0</h4>';
        out14 += '<p id = "x14" class = "x">x:</p>';
        out14 += '<p class = "colvo14"></p>';
        out14 += '<button id = "+14" class = "but1">+</button>';
        out14 += '<button id = "-14" class = "but2">-</button>';
        out14 += '<h4 class = "itog">Итого:</h4>';
        out14 += '<p class = "c14">250</p>'
        out14 += '<span class = s>₽</span>'
        out14 += '<button id = "cl14" class = "close">x</button>'
        out14 += '</div>'
        $(out14).appendTo('.elements');
        $('#x14').css('margin-left','270px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 4) && (a[i-3] == 1) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo14').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo14').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo14').text()
        var cost = $('.c14').text()
        var resct = cost * x
        $('.c14').text(resct)

        $('#cl14').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo14').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c14').text())
    }   
}

function chekCart15() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 15) {
        var out15 = '';
        out15 += '<div class = "div15">';
        out15 += '<h4 class = "t15">Мисо широ</h4>';
        out15 += '<p id = "x15" class = "x">x:</p>';
        out15 += '<p class = "colvo15"></p>';
        out15 += '<button id = "+15" class = "but1">+</button>';
        out15 += '<button id = "-15" class = "but2">-</button>';
        out15 += '<h4 class = "itog">Итого:</h4>';
        out15 += '<p class = "c15">150</p>'
        out15 += '<span class = s>₽</span>'
        out15 += '<button id = "cl15" class = "close">x</button>'
        out15 += '</div>'
        $(out15).appendTo('.elements');
        $('#x15').css('margin-left','250px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 5) && (a[i-3] == 1) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo15').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo15').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo15').text()
        var cost = $('.c15').text()
        var resct = cost * x
        $('.c15').text(resct)

        $('#cl15').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo15').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c15').text())
    }    
}

function chekCart16() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 16) {
        var out16 = '';
        out16 += '<div class = "div16">';
        out16 += '<h4 class = "t16">Венгерский суп-гуляш</h4>';
        out16 += '<p id = "x16" class = "x">x:</p>';
        out16 += '<p class = "colvo16"></p>';
        out16 += '<button id = "+16" class = "but1">+</button>';
        out16 += '<button id = "-16" class = "but2">-</button>';
        out16 += '<h4 class = "itog">Итого:</h4>';
        out16 += '<p class = "c16">200</p>'
        out16 += '<span class = s>₽</span>'
        out16 += '<button id = "cl16" class = "close">x</button>'
        out16 += '</div>'
        $(out16).appendTo('.elements');

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 6) && (a[i-3] == 1) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo16').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo16').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo16').text()
        var cost = $('.c16').text()
        var resct = cost * x
        $('.c16').text(resct)

        $('#cl16').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo16').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c16').text())
    }    
}

function chekCart17() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 17) {
        var out17 = '';
        out17 += '<div class = "div17">';
        out17 += '<h4 class = "t17">Салат Тбилиси</h4>';
        out17 += '<p id = "x17" class = "x">x:</p>';
        out17 += '<p class = "colvo17"></p>';
        out17 += '<button id = "+17" class = "but1">+</button>';
        out17 += '<button id = "-17" class = "but2">-</button>';
        out17 += '<h4 class = "itog">Итого:</h4>';
        out17 += '<p class = "c17">200</p>'
        out17 += '<span class = s>₽</span>'
        out17 += '<button id = "cl17" class = "close">x</button>'
        out17 += '</div>'
        $(out17).appendTo('.elements');
        $('#x17').css('margin-left','230px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 7) && (a[i-3] == 1) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo17').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo17').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo17').text()
        var cost = $('.c17').text()
        var resct = cost * x
        $('.c17').text(resct)

        $('#cl17').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo17').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c17').text())
    }    
}

function chekCart18() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 18) {
        var out18 = '';
        out18 += '<div class = "div18">';
        out18 += '<h4 class = "t18">Зеленый салат с авокадо и креветками</h4>';
        out18 += '<p id = "x18" class = "x">x:</p>';
        out18 += '<p class = "colvo18"></p>';
        out18 += '<button id = "+18" class = "but1">+</button>';
        out18 += '<button id = "-18" class = "but2">-</button>';
        out18 += '<h4 class = "itog">Итого:</h4>';
        out18 += '<p class = "c18">270</p>'
        out18 += '<span class = s>₽</span>'
        out18 += '<button id = "cl18" class = "close">x</button>'
        out18 += '</div>'
        $(out18).appendTo('.elements');
        $('#x18').css('margin-left','50px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 8) && (a[i-3] == 1) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo18').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo18').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo18').text()
        var cost = $('.c18').text()
        var resct = cost * x
        $('.c18').text(resct)

        $('#cl18').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo18').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c18').text())
    }    
}

function chekCart19() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 19) {
        var out19 = '';
        out19 += '<div class = "div19">';
        out19 += '<h4 class = "t19">Салат с Креветками, Грушей и сыром Дор Блю</h4>';
        out19 += '<p id = "x19" class = "x">x:</p>';
        out19 += '<p class = "colvo19"></p>';
        out19 += '<button id = "+19" class = "but1">+</button>';
        out19 += '<button id = "-19" class = "but2">-</button>';
        out19 += '<h4 id = "it19" class = "itog">Итого:</h4>';
        out19 += '<p class = "c19">280</p>'
        out19 += '<span class = s>₽</span>'
        out19 += '<button id = "cl19" class = "close">x</button>'
        out19 += '</div>'
        $(out19).appendTo('.elements');
        $('#x19').css('margin-left','50px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 9) && (a[i-3] == 1) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo19').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo19').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo19').text()
        var cost = $('.c19').text()
        var resct = cost * x
        $('.c19').text(resct)

        $('#cl19').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo19').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c19').text())
    }    
}

function chekCart20() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 20) {
        var out20 = '';
        out20 += '<div class = "div20">';
        out20 += '<h4 class = "t20">Теплый салат с курицей</h4>';
        out20 += '<p id = "x20" class = "x">x:</p>';
        out20 += '<p class = "colvo20"></p>';
        out20 += '<button id = "+20" class = "but1">+</button>';
        out20 += '<button id = "-20" class = "but2">-</button>';
        out20 += '<h4 class = "itog">Итого:</h4>';
        out20 += '<p class = "c20">190</p>'
        out20 += '<span class = s>₽</span>'
        out20 += '<button id = "cl20" class = "close">x</button>'
        out20 += '</div>'
        $(out20).appendTo('.elements');

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 0) && (a[i-3] == 2) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo20').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo20').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo20').text()
        var cost = $('.c20').text()
        var resct = cost * x
        $('.c20').text(resct)

        $('#cl20').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo20').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c20').text())
    }    
}

function chekCart21() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 21) {
        var out21 = '';
        out21 += '<div class = "div21">';
        out21 += '<h4 class = "t21">Салат Греческий</h4>';
        out21 += '<p id = "x21" class = "x">x:</p>';
        out21 += '<p class = "colvo21"></p>';
        out21 += '<button id = "+21" class = "but1">+</button>';
        out21 += '<button id = "-21" class = "but2">-</button>';
        out21 += '<h4 class = "itog">Итого:</h4>';
        out21 += '<p class = "c21">160</p>'
        out21 += '<span class = s>₽</span>'
        out21 += '<button id = "cl21" class = "close">x</button>'
        out21 += '</div>'
        $(out21).appendTo('.elements');
        $('#x21').css('margin-left','220px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 1) && (a[i-3] == 2) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo21').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo21').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo21').text()
        var cost = $('.c21').text()
        var resct = cost * x
        $('.c21').text(resct)

        $('#cl21').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo21').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c21').text())
    }   
}

function chekCart22() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 22) {
        var out22 = '';
        out22 += '<div class = "div22">';
        out22 += '<h4 class = "t22">Цезарь с курицей</h4>';
        out22 += '<p id = "x22" class = "x">x:</p>';
        out22 += '<p class = "colvo22"></p>';
        out22 += '<button id = "+22" class = "but1">+</button>';
        out22 += '<button id = "-22" class = "but2">-</button>';
        out22 += '<h4 class = "itog">Итого:</h4>';
        out22 += '<p class = "c22">210</p>'
        out22 += '<span class = s>₽</span>'
        out22 += '<button id = "cl22" class = "close">x</button>'
        out22 += '</div>'
        $(out22).appendTo('.elements');
        $('#x22').css('margin-left','210px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 2) && (a[i-3] == 2) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo22').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo22').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo22').text()
        var cost = $('.c22').text()
        var resct = cost * x
        $('.c22').text(resct)

        $('#cl22').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo22').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c22').text())
    }    
}

function chekCart23() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 23) {
        var out23 = '';
        out23 += '<div class = "div23">';
        out23 += '<h4 class = "t23">Цезарь с креветками</h4>';
        out23 += '<p id = "x23" class = "x">x:</p>';
        out23 += '<p class = "colvo23"></p>';
        out23 += '<button id = "+23" class = "but1">+</button>';
        out23 += '<button id = "-23" class = "but2">-</button>';
        out23 += '<h4 class = "itog">Итого:</h4>';
        out23 += '<p class = "c23">260</p>'
        out23 += '<span class = s>₽</span>'
        out23 += '<button id = "cl23" class = "close">x</button>'
        out23 += '</div>'
        $(out23).appendTo('.elements');

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 3) && (a[i-3] == 2) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo23').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo23').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo23').text()
        var cost = $('.c23').text()
        var resct = cost * x
        $('.c23').text(resct)
        
        $('#cl23').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo23').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c23').text())
    }   
}

function chekCart24() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 24) {
        var out24 = '';
        out24 += '<div class = "div24">';
        out24 += '<h4 class = "t24">Гриль салат</h4>';
        out24 += '<p id = "x24" class = "x">x:</p>';
        out24 += '<p class = "colvo24"></p>';
        out24 += '<button id = "+24" class = "but1">+</button>';
        out24 += '<button id = "-24" class = "but2">-</button>';
        out24 += '<h4 class = "itog">Итого:</h4>';
        out24 += '<p class = "c24">250</p>'
        out24 += '<span class = s>₽</span>'
        out24 += '<button id = "cl24" class = "close">x</button>'
        out24 += '</div>'
        $(out24).appendTo('.elements');
        $('#x24').css('margin-left','250px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 4) && (a[i-3] == 2) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo24').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo24').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo24').text()
        var cost = $('.c24').text()
        var resct = cost * x
        $('.c24').text(resct)

        $('#cl24').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo24').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c24').text())
    }    
}

function chekCart25() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 25) {
        var out25 = '';
        out25 += '<div class = "div25">';
        out25 += '<h4 class = "t25">Морс облепиховый</h4>';
        out25 += '<p id = "x25" class = "x">x:</p>';
        out25 += '<p class = "colvo25"></p>';
        out25 += '<button id = "+25" class = "but1">+</button>';
        out25 += '<button id = "-25" class = "but2">-</button>';
        out25 += '<h4 class = "itog">Итого:</h4>';
        out25 += '<p class = "c25">450</p>'
        out25 += '<span class = s>₽</span>'
        out25 += '<button id = "cl25" class = "close">x</button>'
        out25 += '</div>'
        $(out25).appendTo('.elements');
        $('#x25').css('margin-left','200px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 5) && (a[i-3] == 2) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo25').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo25').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo25').text()
        var cost = $('.c25').text()
        var resct = cost * x
        $('.c25').text(resct)

        $('#cl25').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo25').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c25').text())
    }    
}

function chekCart26() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 26) {
        var out26 = '';
        out26 += '<div class = "div26">';
        out26 += '<h4 class = "t26">Морс бруснично-клюквенный</h4>';
        out26 += '<p id = "x26" class = "x">x:</p>';
        out26 += '<p class = "colvo26"></p>';
        out26 += '<button id = "+26" class = "but1">+</button>';
        out26 += '<button id = "-26" class = "but2">-</button>';
        out26 += '<h4 class = "itog">Итого:</h4>';
        out26 += '<p class = "c26">450</p>'
        out26 += '<span class = s>₽</span>'
        out26 += '<button id = "cl26" class = "close">x</button>'
        out26 += '</div>'
        $(out26).appendTo('.elements');
        $('#x26').css('margin-left','140px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 6) && (a[i-3] == 2) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo26').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo26').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo26').text()
        var cost = $('.c26').text()
        var resct = cost * x
        $('.c26').text(resct)

        $('#cl26').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo26').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c26').text())
    }
}

function chekCart27() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 27) {
        var out27 = '';
        out27 += '<div class = "div27">';
        out27 += '<h4 class = "t27">Фреш морковный</h4>';
        out27 += '<p id = "x27" class = "x">x:</p>';
        out27 += '<p class = "colvo27"></p>';
        out27 += '<button id = "+27" class = "but1">+</button>';
        out27 += '<button id = "-27" class = "but2">-</button>';
        out27 += '<h4 class = "itog">Итого:</h4>';
        out27 += '<p class = "c27">280</p>'
        out27 += '<span class = s>₽</span>'
        out27 += '<button id = "cl27" class = "close">x</button>'
        out27 += '</div>'
        $(out27).appendTo('.elements');
        $('#x27').css('margin-left','210px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 7) && (a[i-3] == 2) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo27').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo27').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo27').text()
        var cost = $('.c27').text()
        var resct = cost * x
        $('.c27').text(resct)

        $('#cl27').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo27').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c27').text())
    }    
}

function chekCart28() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 28) {
        var out28 = '';
        out28 += '<div class = "div28">';
        out28 += '<h4 class = "t28">Фреш яблочный</h4>';
        out28 += '<p id = "x28" class = "x">x:</p>';
        out28 += '<p class = "colvo28"></p>';
        out28 += '<button id = "+28" class = "but1">+</button>';
        out28 += '<button id = "-28" class = "but2">-</button>';
        out28 += '<h4 class = "itog">Итого:</h4>';
        out28 += '<p class = "c28">280</p>'
        out28 += '<span class = s>₽</span>'
        out28 += '<button id = "cl28" class = "close">x</button>'
        out28 += '</div>'
        $(out28).appendTo('.elements');
        $('#x28').css('margin-left','220px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 8) && (a[i-3] == 2) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo28').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo28').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo28').text()
        var cost = $('.c28').text()
        var resct = cost * x
        $('.c28').text(resct)

        $('#cl28').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo28').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c28').text())
    }    
}

function chekCart29() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 29) {
        var out29 = '';
        out29 += '<div class = "div29">';
        out29 += '<h4 class = "t29">Фреш апельсиновый</h4>';
        out29 += '<p id = "x29" class = "x">x:</p>';
        out29 += '<p class = "colvo29"></p>';
        out29 += '<button id = "+29" class = "but1">+</button>';
        out29 += '<button id = "-29" class = "but2">-</button>';
        out29 += '<h4 class = "itog">Итого:</h4>';
        out29 += '<p class = "c29">280</p>'
        out29 += '<span class = s>₽</span>'
        out29 += '<button id = "cl29" class = "close">x</button>'
        out29 += '</div>'
        $(out29).appendTo('.elements');
        $('#x29').css('margin-left','190px')

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 9) && (a[i-3] == 2) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo29').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo29').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

        var x = $('.colvo29').text()
        var cost = $('.c29').text()
        var resct = cost * x
        $('.c29').text(resct)

        $('#cl29').click(function() {
            var id = $(this).attr('id')
            for(let i = 0; i < id.length; i++){
                if((id[i] == 'l') && (id[i-1] == 'c')) {
                id = id[i+1] + id[i+2]
            }
        }
                loadColvo()
                loadCart()
                colvo = colvo - $('.colvo29').text();
                saveColvo()
                delete cart[id]
                createCart()
                loadCart()
                location.reload();
        })

        total += Number($('.c29').text())
    }    
}

function chekCart30() {
    for(var i = 0 ; i < bk.length ; i++)
    if( bk[i] == 30) {
        if( s == "yabl") {
            var out30 = '';
            out30 += '<div class = "div30">';
            out30 += '<h4 class = "t30">Сок Rich Яблоко 0,2л</h4>';
            out30 += '<p id = "x30" class = "x">x:</p>';
            out30 += '<p class = "colvo30"></p>';
            out30 += '<button id = "+30" class = "but1">+</button>';
            out30 += '<button id = "-30" class = "but2">-</button>';
            out30 += '<h4 class = "itog">Итого:</h4>';
            out30 += '<p class = "c30">180</p>'
            out30 += '<span class = s>₽</span>'
            out30 += '<button id = "cl30" class = "close">x</button>'
            out30 += '</div>'
            $(out30).appendTo('.elements');

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 0) && (a[i-3] == 3) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo30').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo30').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

            var x = $('.colvo30').text()
            var cost = $('.c30').text()
            var resct = cost * x
            $('.c30').text(resct)

            $('#cl30').click(function() {
                var id = $(this).attr('id')
                for(let i = 0; i < id.length; i++){
                    if((id[i] == 'l') && (id[i-1] == 'c')) {
                    id = id[i+1] + id[i+2]
                }
            }
                    loadColvo()
                    loadCart()
                    colvo = colvo - $('.colvo30').text();
                    saveColvo()
                    delete cart[id]
                    createCart()
                    loadCart()
                    location.reload();
            })

            total += Number($('.c30').text())
        }
        else if ( s == 'cherry') {
            var out30 = '';
            out30 += '<div class = "div30">';
            out30 += '<h4 class = "t30">Сок Rich Вишня 0,2л</h4>';
            out30 += '<p id = "x30" class = "x">x:</p>';
            out30 += '<p class = "colvo30"></p>';
            out30 += '<button id = "+30" class = "but1">+</button>';
            out30 += '<button id = "-30" class = "but2">-</button>';
            out30 += '<h4 class = "itog">Итого:</h4>';
            out30 += '<p class = "c30">180</p>'
            out30 += '<span class = s>₽</span>'
            out30 += '<button id = "cl30" class = "close">x</button>'
            out30 += '</div>'
            $(out30).appendTo('.elements');
            
        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 0) && (a[i-3] == 3) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo30').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo30').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

            var x = $('.colvo30').text()
            var cost = $('.c30').text()
            var resct = cost * x
            $('.c30').text(resct)

            $('#cl30').click(function() {
                var id = $(this).attr('id')
                for(let i = 0; i < id.length; i++){
                    if((id[i] == 'l') && (id[i-1] == 'c')) {
                    id = id[i+1] + id[i+2]
                }
            }
                    loadColvo()
                    loadCart()
                    colvo = colvo - $('.colvo30').text();
                    saveColvo()
                    delete cart[id]
                    createCart()
                    loadCart()
                    location.reload();
            })

            total += Number($('.c30').text())
        } 
        else if ( s == 'orange')  {
            var out30 = '';
            out30 += '<div class = "div30">';
            out30 += '<h4 class = "t30">Сок Rich Апельсин 0,2л</h4>';
            out30 += '<p id = "x30" class = "x">x:</p>';
            out30 += '<p class = "colvo30"></p>';
            out30 += '<button id = "+30" class = "but1">+</button>';
            out30 += '<button id = "-30" class = "but2">-</button>';
            out30 += '<h4 class = "itog">Итого:</h4>';
            out30 += '<p class = "c30">180</p>'
            out30 += '<span class = s>₽</span>'
            out30 += '<button id = "cl30" class = "close">x</button>'
            out30 += '</div>'
            $(out30).appendTo('.elements');

        for(let i = 0; i < a.length; i++)
        if( a[i] == ':') {
            if((a[i-2] == 0) && (a[i-3] == 3) && (a[i-4] == '"') ) {
                if( (a[i+2] == ',') || (a[i+2] == '}')) {
                    $('.colvo30').text(a[i+1])
                    break;
                }
                else { 
                    $('.colvo30').text(a[i+1] + a[i+2])
                    break;
                }
            }
        }

            var x = $('.colvo30').text()
            var cost = $('.c30').text()
            var resct = cost * x
            $('.c30').text(resct)

            $('#cl30').click(function() {
                var id = $(this).attr('id')
                for(let i = 0; i < id.length; i++){
                    if((id[i] == 'l') && (id[i-1] == 'c')) {
                    id = id[i+1] + id[i+2]
                }
            }
                    loadColvo()
                    loadCart()
                    colvo = colvo - $('.colvo30').text();
                    saveColvo()
                    delete cart[id]
                    createCart()
                    loadCart()
                    location.reload();
            })
            total += Number($('.c30').text())
        }
    }   
}

// Functions for buttons +/- 

$('.but1').click(function() {
    var id = $(this).attr('id')
    for(let i = 0; i < id.length; i++){
         if((id[i] == '+') && (id[i+2] !=undefined)) {
            id = id[i+1] + id[i+2]
        }
        else if(id[i] == '+') {
            id = id[i+1]
        }
    }
    loadColvo();
    loadCart();
    if(cart[id] !=undefined && (cart = b)) {
        cart[id] ++;
        cart2 = b;
        remCart(); 
        createCart2();
        cart = cart2;
        remCart();
        createCart();
        colvo += 1;
        $('.colvo-dig').html(colvo);
        saveColvo();
        location.reload();
    }

});

$('.but2').click(function() {
    var id = $(this).attr('id')
    for(let i = 0; i < id.length; i++){
         if((id[i] == '-') && (id[i+2] !=undefined)) {
            id = id[i+1] + id[i+2]
        }
        else if(id[i] == '-') {
            id = id[i+1]
        }
    }

    loadColvo();
    loadCart();
    if(cart[id] !=undefined && (cart = b)) {
        cart[id] --;
        cart2 = b;
        remCart(); 
        createCart2();
        cart = cart2;
        remCart();
        createCart();
        colvo -= 1;
        $('.colvo-dig').html(colvo);
        saveColvo();
        location.reload();
        if(cart[id] <= 0){
            delete cart[id];
            createCart();
            loadCart();
        }
    }
});

// Open paydiv in basket 

$('.i-buy').click(function() {
    $('.back').css('filter','blur(3px)');
    $('main').css('filter','blur(3px)');
    $('.paydiv').fadeIn();
});

// Close paydiv in basket 

$('.js-close-pay').click(function() {
    $('.paydiv').fadeOut();
    $('.back').css('filter','none');
    $('main').css('filter','none');
});

$(document).mousedown(function(e) {
    var pd = $('.paydiv');
    if (e.target != pd[0] && pd.has(e.target).length === 0) {
        $('.paydiv').fadeOut();
        $('.back').css('filter','none');
        $('main').css('filter','none');
    }
    else {
        $('.back').css('filter','blur(3px)');
        $('main').css('filter','blur(3px)');
    }
});

// Open restdiv to click

$('.totable').click(function() {
    $('.rest-dates').slideToggle(1000);
})

$('.tohome').click(function() {
    $('.deliv-dates').slideToggle(1000);
})

// Checking 1 type payment

$('.rest-dates').submit(function(event) {
    var iname =  $('.rest-name').val();
    var intel = $('.rest-tel').val();

    if( iname == "" || intel == "") {
        alert('Fields must be filled!')
        event.preventDefault()
    }
    else if ( iname.length <= 1) {
        alert('Name must a longer than 1 letter')
        event.preventDefault()
    }
    else if ( !$.isNumeric(intel) ) {
        alert('The number must be consist of only digits')
        event.preventDefault()
    }
    else if( intel.length < 11) {
        alert('The number was entered incorrectly.\nYour number must consist of 11 digits')
        event.preventDefault()
    }
    else {
        $('.paydiv').hide();
        event.preventDefault()
        $('.back').css('filter','blur(3px)'),
        $('main').css('filter','blur(3px)');
        $('.congrat').show();
        $('.congrat-but').click(function () {
            $('.congrat').fadeOut();
            $('.back').css('filter','none'),
            $('main').css('filter','none');
            remCart()
            remColvo()
        }); 
    }
});

// Checking 2 type payment

$('.deliv-dates').submit(function(event) {
    var iname =  $('.deliv-name').val();
    var intel = $('.deliv-tel').val();
    var adres = $('.deliv-address').val();
    var home = $('.deliv-dom').val();

    if( iname == "" || intel == "" || adres == "" || home == "") {
        alert('Fields must be filled!')
        event.preventDefault()
    }
    else if ( iname.length <= 1) {
        alert('Name must a longer than 1 letter')
        event.preventDefault()
    }
    else if ( !$.isNumeric(intel) ) {
        alert('The number must be consist of only digits')
        event.preventDefault()
    }
    else if( intel.length < 11) {
        alert('The number was entered incorrectly.\nYour number must consist of 11 digits')
        event.preventDefault()
    }
    else if ( !(!$.isNumeric(adres))) {
        alert('The address must be consist of only letters')
        event.preventDefault()
    }
    else if ( adres.length <= 1) {
        alert('Address must a longer than 1 letter')
        event.preventDefault()
    }
    else if ( !$.isNumeric(home) ) {
        alert('The home must be consist of only digits')
        event.preventDefault()
    }
    else {
        $('.paydiv').hide();
        event.preventDefault()
        $('.back').css('filter','blur(3px)'),
        $('main').css('filter','blur(3px)');
        $('.message').show();
        $('.mes-but').click(function () {
            $('.message').fadeOut();
            $('.back').css('filter','none'),
            $('main').css('filter','none');
            remCart()
            remColvo()
        });
    }
});