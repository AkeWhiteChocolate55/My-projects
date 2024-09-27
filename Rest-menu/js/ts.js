// change background header

$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $('.container').css('background-color','black');
    }
    else {
        $('.container').css('background-color','transparent');
    }
  });


// open book a table

$('.jsbut-book').click(function() {
    $('.container').css('filter','blur(3px)'),
    $('main').css('filter','blur(3px)');
    $('.bookt').fadeIn();
});

// checking fields

$('.down-submit').submit(function(event) {
    var iname =  $('.name').val();
    var intel = $('.tel').val();

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
        $('.bookt').hide();
        event.preventDefault()
        $('.container').css('filter','blur(3px)'),
        $('main').css('filter','blur(3px)');
        $('.congrat').show();
        $('.congrat-but').click(function () {
            $('.congrat').fadeOut();
            $('.container').css('filter','none'),
            $('main').css('filter','none');
            setTimeout(function() {window.location.reload();}, 500);
        });
        
    }

});

// close book a table

$('.js-close-but').mousedown(function() {
    $('.bookt').fadeOut();
    $('.container').css('filter','none'),
    $('main').css('filter','none');
});

$(document).mousedown(function(e) {
    var bkt = $('.bookt');
    if (e.target != bkt[0] && bkt.has(e.target).length === 0) {
        $('.bookt').fadeOut();
        $('.container').css('filter','none'),
        $('main').css('filter','none');
    }
    else {
        $(document).click(function(e) {
            var pd = $('.bookt');
            if (e.target = pd[0] && pd.has(e.target).length > 0) {
                $('.container').css('display','flex');
                $('.container').css('filter','blur(3px)');
                $('main').css('filter','blur(3px)');
            }})
    }
});

// Click on button order

$('.btn').click(function() {
    if( colvo == null) {
        alert('Your order have empty! \nYou need to choose a products.')
    }
    else {
        $('.container').css('filter','blur(3px)'),
    $('main').css('filter','blur(3px)');
    $('.paydiv2').fadeIn();
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $('.container').css('display','none');
        }
        else {
            $('.container').css('display','flex');
            $(window).on("scroll", function() {
                if($(window).scrollTop() > 100) {
                    $('.container').css('background-color','black');
                }
                else {
                    $('.container').css('background-color','transparent');
                }
              });
        }
      });
    }
})  

// Close paydiv in basket 

$('.js-close-pay2').click(function() {
    $('.paydiv2').fadeOut();
    $('.container').css('filter','none');
    $('main').css('filter','none');
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $('.container').css('display','flex')
            $('.container').css('background-color','black');
        }
        else {
            $('.container').css('background-color','transparent');
        }
      });
    
});

$(document).mousedown(function(e) {
    var pd = $('.paydiv2');
    if (e.target != pd[0] && pd.has(e.target).length === 0) {
        $('.paydiv2').fadeOut();
        $('.container').css('filter','none');
        $('main').css('filter','none');
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $('.container').css('display','flex');
            }
        })  
    }
    else {
        $(document).click(function(e) {
            var pd = $('.paydiv2');
            if (e.target = pd[0] && pd.has(e.target).length > 0) {
                $('.container').css('display','flex');
                $('.container').css('filter','blur(3px)');
                $('main').css('filter','blur(3px)');
            }
        })
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $('.container').css('background-color','transparent');
            }
          });            
    }
});




// Open restdiv to click

$('.totable2').click(function() {
    $('.rest-dates2').slideToggle(1000);
})

$('.tohome2').click(function() {
    $('.deliv-dates2').slideToggle(1000);
})

// Checking 1 type payment

$('.rest-dates2').submit(function(event) {
    var iname =  $('.rest-name2').val();
    var intel = $('.rest-tel2').val();

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
        $('.paydiv2').hide();
        event.preventDefault()
        $('.container').css('filter','blur(3px)'),
        $('main').css('filter','blur(3px)');
        $('.congrat2').show();
        $('.congrat-but2').click(function () {
            $('.congrat2').fadeOut();
            $('.container').css('filter','none'),
            $('main').css('filter','none');
            remCart()
            remColvo()
        }); 
    }
});

// Checking 2 type payment

$('.deliv-dates2').submit(function(event) {
    var iname =  $('.deliv-name2').val();
    var intel = $('.deliv-tel2').val();
    var adres = $('.deliv-address2').val();
    var home = $('.deliv-dom2').val();

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
        $('.paydiv2').hide();
        event.preventDefault()
        $('.container').css('filter','blur(3px)'),
        $('main').css('filter','blur(3px)');
        $('.message2').show();
        $('.mes-but2').click(function () {
            $('.message2').fadeOut();
            $('.container').css('filter','none'),
            $('main').css('filter','none');
            remCart()
            remColvo()
        });
    }
});

// numbers orders on basket

loadColvo();
loadCart();

var cart = {};
var cart2 = {};
var colvo = 0;
var c = localStorage.getItem('cart')
var d = JSON.parse(c)

// Add element into basket

$('.price-but').click(function() {
    loadColvo();
    loadCart();
    var id = $(this).attr('id')
    if(cart[id] !=undefined && (cart = d)) {
        cart[id] ++;
        cart2 = d;
        remCart(); 
        createCart2();
        cart = cart2;
        remCart();
        createCart();
        colvo += 1;
        $('.colvo-dig').html(colvo);
        saveColvo();
    }
    else {
        loadCart();
        if(cart[id] === undefined && (cart !=d)) {
            cart[id] = 1;
            createCart();
            colvo += 1;
            saveColvo();
            $('.colvo-dig').html(colvo);
            location.reload();
        }
    }
});

// Checking which juice

count = 0;

$('span').click(function() {
    var name = $(this).attr('name')
    var sok = $('#30').attr('name', name)
});


$('#30').click(function() {
    var s = $(this).attr('name')
    count ++;
    createSok(s);
});


function createSok(name) {
    localStorage.setItem('sok', JSON.stringify(name));
    localStorage.setItem('sokC' , JSON.stringify(count));

};

// Saving number basket elements

function saveColvo() {
    localStorage.setItem('colvo', JSON.stringify(colvo));
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

// Checking zero goods 

colvo = localStorage.getItem('colvo')

if (colvo <= 0) {
    localStorage.removeItem('colvo');
    loadCart();
}

