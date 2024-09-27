$('.registr').hide();
$('.left-bar').hide();
$('.active-news').hide();
$('.active-users').hide();
$('.active-brands').hide();
$('.active-tree').hide();
$('.burger2').hide();
$('.lbh-t').hide();
$('.lbn-t').hide();
$('.lbp-t').hide();
$('.lbb-t').hide();
$('.lbu-t').hide();
$('.lbt-t').hide();
$('.p-img').hide();
$('.p-name').hide();
$('.vos-pas').hide();


//vostanovlenie parola
$('.dl-forgot').click(function() {
        $('.sigh-up').hide();
        $('.vos-pas').show();
})

$('.dv-but').click(function() {
        alert('Ваш пароль восстановлен!\nВаш новый пароль: '+ $('.dv-pas').val())
        $('.vos-pas').hide();
        $('.sigh-up').show();
})

$('.dv-cancel').click(function() {
        $('.vos-pas').hide();
        $('.sigh-up').show();
})

// reg and sigh up 
$('.dl-reg').click(function() {
    $('.sigh-up').hide();
    $('.registr').show();
})

$('.dr-but').click(function() {
        alert('Регистрация прошла успешно!')
        $('.registr').hide();
        $('.sigh-up').show();
})

$('.dr-cancel').click(function() {
    $('.registr').hide();
    $('.sigh-up').show();
})

$('.dl-but').click(function() {
    $('.admin-check').hide();
    $('.left-bar').show();
    $('.active-news').show();
    $('.p-img').show();
    $('.p-name').show();
    $('.lb-but-news').css('border-radius', '0px 8px 8px 0px')
    $('.lb-but-news').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
    $('.p-img').show();
    $('.p-name').show();
})

// Click on burger
$('.burger').click(function() {
        $('.burger').hide();
        $('.burger2').show();
        $('.left-bar').css('width','182px')
        $('.left-bar').css('margin-left','300px')
        $('.lbh-t').show();
        $('.lbn-t').show();
        $('.lbp-t').show();
        $('.lbb-t').show();
        $('.lbu-t').show();
        $('.lbt-t').show();
        $('.lb-but-home').attr('class','lb-but-home2 flex')
        $('.lb-but-news').attr('class','lb-but-news2 flex')
        $('.lb-but-prod').attr('class','lb-but-prod2 flex')
        $('.lb-but-brands').attr('class','lb-but-brands2 flex')
        $('.lb-but-users').attr('class','lb-but-users2 flex')
        $('.lb-but-tree').attr('class','lb-but-tree2 flex')
        $('.tree').attr('class','tree2')
})

$('.burger2').click(function() {
        $('.lbh-t').hide();
        $('.lbn-t').hide();
        $('.lbp-t').hide();
        $('.lbb-t').hide();
        $('.lbu-t').hide();
        $('.lbt-t').hide();
        $('.burger2').hide();
        $('.burger').show();
        $('.left-bar').css('width','70px')
        $('.left-bar').css('margin-left','385px')
        $('.lb-but-home2').attr('class','lb-but-home')
        $('.lb-but-news2').attr('class','lb-but-news')
        $('.lb-but-prod2').attr('class','lb-but-prod')
        $('.lb-but-brands2').attr('class','lb-but-brands')
        $('.lb-but-users2').attr('class','lb-but-users')
        $('.lb-but-tree2').attr('class','lb-but-tree')
        $('.tree2').attr('class','tree')
})

// but-home checking 
home = 0;
$('.lb-but-home').click(function() {
        $('.lb-but-home').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-home').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
})

// but-news checking 
$('.lb-but-news').click(function() {
        $('.active-brands').hide();
        $('.active-users').hide();
        $('.active-tree').hide();
        $('.active-news').show();

        $(function() {
                $('.lb-but-news').mouseover(function() {
                        $('.lb-but-news').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-news').mouseout(function() {
                        $('.lb-but-news').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
                })
        })
        $('.lb-but-news').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-news').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
        $('.lb-but-prod').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-prod').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-prod').mouseover(function() {
                        $('.lb-but-prod').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-prod').mouseout(function() {
                        $('.lb-but-prod').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-brands').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-brands').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-brands').mouseover(function() {
                        $('.lb-but-brands').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-brands').mouseout(function() {
                        $('.lb-but-brands').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-users').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-users').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-users').mouseover(function() {
                        $('.lb-but-users').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-users').mouseout(function() {
                        $('.lb-but-users').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-tree').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-tree').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-tree').mouseover(function() {
                        $('.lb-but-tree').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-tree').mouseout(function() {
                        $('.lb-but-tree').css('box-shadow', '0px 0px 0px 0px')
                })
        })
})

// but-prod checking 
$('.lb-but-prod').click(function() {
        $('.active-news').hide();
        $('.active-brands').hide();
        $('.active-users').hide();
        $('.active-tree').hide();
        $(function() {
                $('.lb-but-prod').mouseover(function() {
                        $('.lb-but-prod').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-prod').mouseout(function() {
                        $('.lb-but-prod').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
                })
        })
        $('.lb-but-prod').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-prod').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
        $('.lb-but-news').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-news').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-news').mouseover(function() {
                        $('.lb-but-news').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-news').mouseout(function() {
                        $('.lb-but-news').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-brands').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-brands').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-brands').mouseover(function() {
                        $('.lb-but-brands').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-brands').mouseout(function() {
                        $('.lb-but-brands').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-users').css('border-radius', '00px 8px 8px 0px')
        $('.lb-but-users').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-users').mouseover(function() {
                        $('.lb-but-users').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-users').mouseout(function() {
                        $('.lb-but-users').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-tree').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-tree').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-tree').mouseover(function() {
                        $('.lb-but-tree').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-tree').mouseout(function() {
                        $('.lb-but-tree').css('box-shadow', '0px 0px 0px 0px')
                })
        })
})

// but-brands checking 
$('.lb-but-brands').click(function() {
        $('.active-news').hide();
        $('.active-users').hide();
        $('.active-tree').hide();
        $('.active-brands').show();
        $(function() {
                $('.lb-but-brands').mouseover(function() {
                        $('.lb-but-brands').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-brands').mouseout(function() {
                        $('.lb-but-brands').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
                })
        })
        $('.lb-but-brands').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-brands').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
        $('.lb-but-news').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-news').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-news').mouseover(function() {
                        $('.lb-but-news').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-news').mouseout(function() {
                        $('.lb-but-news').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-prod').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-prod').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-prod').mouseover(function() {
                        $('.lb-but-prod').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-prod').mouseout(function() {
                        $('.lb-but-prod').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-users').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-users').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-users').mouseover(function() {
                        $('.lb-but-users').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-users').mouseout(function() {
                        $('.lb-but-users').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-tree').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-tree').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-tree').mouseover(function() {
                        $('.lb-but-tree').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-tree').mouseout(function() {
                        $('.lb-but-tree').css('box-shadow', '0px 0px 0px 0px')
                })
        })
})

// but-users checking 
$('.lb-but-users').click(function() {
        $('.active-news').hide();
        $('.active-brands').hide();
        $('.active-tree').hide();
        $('.active-users').show();

        $(function() {
                $('.lb-but-users').mouseover(function() {
                        $('.lb-but-users').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-users').mouseout(function() {
                        $('.lb-but-users').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
                })
        })
        $('.lb-but-users').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-users').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
        $('.lb-but-news').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-news').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-news').mouseover(function() {
                        $('.lb-but-news').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-news').mouseout(function() {
                        $('.lb-but-news').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-prod').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-prod').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-prod').mouseover(function() {
                        $('.lb-but-prod').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-prod').mouseout(function() {
                        $('.lb-but-prod').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-brands').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-brands').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-brands').mouseover(function() {
                        $('.lb-but-brands').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-brands').mouseout(function() {
                        $('.lb-but-brands').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-tree').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-tree').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-tree').mouseover(function() {
                        $('.lb-but-tree').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-tree').mouseout(function() {
                        $('.lb-but-tree').css('box-shadow', '0px 0px 0px 0px')
                })
        })
})

// but-tree checking 
$('.lb-but-tree').click(function() {
        $('.active-news').hide();
        $('.active-brands').hide();
        $('.active-users').hide();
        $('.active-tree').show();
        $(function() {
                $('.lb-but-tree').mouseover(function() {
                        $('.lb-but-tree').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-tree').mouseout(function() {
                        $('.lb-but-tree').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
                })
        })
        $('.lb-but-tree').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-tree').css('box-shadow', 'inset -1px 3px 5px 0px var(--bg-400)')
        $('.lb-but-news').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-news').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-news').mouseover(function() {
                        $('.lb-but-news').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-news').mouseout(function() {
                        $('.lb-but-news').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-prod').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-prod').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-prod').mouseover(function() {
                        $('.lb-but-prod').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-prod').mouseout(function() {
                        $('.lb-but-prod').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-brands').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-brands').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-brands').mouseover(function() {
                        $('.lb-but-brands').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-brands').mouseout(function() {
                        $('.lb-but-brands').css('box-shadow', '0px 0px 0px 0px')
                })
        })
        $('.lb-but-users').css('border-radius', '0px 8px 8px 0px')
        $('.lb-but-users').css('box-shadow', '0px 0px 0px 0px')
        $(function() {
                $('.lb-but-users').mouseover(function() {
                        $('.lb-but-users').css('box-shadow', '0px 3px 5px 0px var(--bg-400)')
                })
                $('.lb-but-users').mouseout(function() {
                        $('.lb-but-users').css('box-shadow', '0px 0px 0px 0px')
                })
        })
   
})