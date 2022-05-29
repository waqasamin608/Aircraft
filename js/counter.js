function animateValue($obj, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 100 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        $obj.text(current);
        if (current == end) {
            $obj.text('+'+$obj.text());
            clearInterval(timer);
        }
    }, stepTime);
}

function animateValueBig($obj, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 100000 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        $obj.text(current);
        if (current == end) {
            $obj.text('+$'+$obj.text());
            clearInterval(timer);
        }
    }, stepTime);
}
function animateValueBigger($obj, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1000000 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        $obj.text(current);
        if (current == end) {
            $obj.text('+$'+$obj.text());
            clearInterval(timer);
        }
    }, stepTime);
}
function animateValuejob($obj, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 100000 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        $obj.text(current);
        if (current == end) {
            $obj.text(+$obj.text());
            clearInterval(timer);
        }
    }, stepTime);
}

var $number1 = $('#count-number1'),
    start1 = $number1.attr('data-start')*1,
    end1 = $number1.attr('data-end')*1;

    var $number2 = $('#count-number2'),
    start2 = $number2.attr('data-start')*1,
    end2 = $number2.attr('data-end')*1;

    var $number3 = $('#count-number3'),
    start3 = $number3.attr('data-start')*1,
    end3 = $number3.attr('data-end')*1;

    var $number4 = $('#count-number4'),
    start4 = $number4.attr('data-start')*1,
    end4 = $number4.attr('data-end')*1;

    var $number5 = $('#count-number5'),
    start5 = $number5.attr('data-start')*1,
    end5 = $number5.attr('data-end')*1;

    var $number6 = $('#count-number6'),
    start6 = $number5.attr('data-start')*1,
    end6 = $number6.attr('data-end')*1;

animateValue($number1, start1, end1, 2000);
animateValue($number2, start2, end2, 2000);
animateValue($number3, start3, end3, 2000);
animateValueBig($number4, start4, end4, 2000);
animateValueBig($number5, start5, end5, 2000);
animateValuejob($number5, start5, end5, 2000);
animateValueBigger($number6, start6, end6, 2000);