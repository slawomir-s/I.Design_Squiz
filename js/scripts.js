$(document).ready(function(){
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen === false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });  
     submitIcon.mouseup(function(){
            return false;
        });
    searchBox.mouseup(function(){
            return false;
        });
    $(document).mouseup(function(){
            if(isOpen === true){
                $('.searchbox-icon').css('display','block');
                submitIcon.click();
            }
        });
});
    function buttonUp(){
        var inputVal = $('.searchbox-input').val();
        inputVal = $.trim(inputVal).length;
        if( inputVal !== 0){
            $('.searchbox-icon').css('display','none');
        } else {
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
        }
    }

$('input[type=range]').on('input', function(e){
    var min = e.target.min,
        max = e.target.max,
        val = e.target.value;
  
    $(e.target).css({
        'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
    });
}).trigger('input');

var slider = document.getElementById('slider');
var range = document.getElementById('range');
    
slider.onchange = function() {
    range.innerHTML = getMessage(this.value);
};
    
function getMessage(value) {
		var htmlValue = '<span class="text-red">$' + value + '</span>';
    if (value <= 20) {
        return htmlValue + ' will let us to add a few new modules';
    } else if (value <= 50) {
        return htmlValue + ' can help us improve this product';
    } else if (value <= 80) {
        return htmlValue + ' can help us expand this product to other platforms';     } else {
        return htmlValue + ' goes a long way. If you\'d like to consider becoming a sponsor, please contact us';
    }
}

var button = document.getElementById("button");
button.onclick = function() {
    var info = document.getElementById("info");
    var display = info.style.display;
    if (display === 'none') {
        info.style.display = 'inline-block';
    } else {
        info.style.display = 'none';
    }
    return false;
};

var address = document.getElementById('address');
var addressError = document.getElementById('address-error');
address.oninput = checkFields;

var email = document.getElementById('email');
var emailError = document.getElementById('email-error');
email.oninput = checkFields;

var city = document.getElementById('city');
var cityError = document.getElementById('city-error');
city.oninput = checkFields;

var thirdSection = document.getElementById('third');

function checkFields() {
    var allCorrect = true;
    if (address.value.indexOf(',') == -1) {
        address.classList.add('border-red');
        addressError.style.opacity = 1;
        allCorrect = false;
    } else {
        address.classList.remove('border-red');
        addressError.style.opacity = 0;
    }
  
    if (!isEmailValid(email.value)) {
        email.classList.add('border-red');
        emailError.style.opacity = 1;
        allCorrect = false;
    } else {
        email.classList.remove('border-red');
        emailError.style.opacity = 0;
    }
  
    if (city.value.indexOf(',') == -1) {
        city.classList.add('border-red');
        cityError.style.opacity = 1;
        allCorrect = false;
    } else {
        city.classList.remove('border-red');
        cityError.style.opacity = 0;
    }
  
    if (allCorrect) {
        thirdSection.style.display = 'block';
    } else {
        thirdSection.style.opacity = 'none';
    }
}

function isEmailValid(email) {
	var indexOfAt = email.indexOf('@');
	var indexOfDot = email.indexOf('.', indexOfAt);
    return indexOfDot > indexOfAt;
};

String.prototype.toCardFormat = function () {
    return this.replace(/[^0-9]/g, "").substr(0, 16).split("").reduce(cardFormat, "");
    function cardFormat(str, l, i) {
        return str + ((!i || (i % 4)) ? "" : " ") + l;
    }
};
    
$(document).ready(function(){
    $(".credit-card").keyup(function () {
        $(this).val($(this).val().toCardFormat());
    });
});