$(function () {
    var mains=$('.header .menu .mains')[0]
    // console.log(mains)
    var selfIntro=$('.header .menu .self-intro')[0]
    var askills=$('.header .menu .askills')[0]
    var myPros=$('.header .menu .my-pros')[0]
    var workings=$('.header .menu .workings')[0]
    var contract=$('.header .menu .contract')[0]

    $(mains).on('click',function () {
        $('.main .content *').removeClass('active')
        $('.main .content').find('.mine').addClass('active')
    })
    $(selfIntro).on('click',function () {
        $('.main .content *').removeClass('active')
        $('.main .content').find('.intr-self').addClass('active')
    })
    $(askills).on('click',function () {
        $('.main .content *').removeClass('active')
        $('.main .content').find('.skills').addClass('active')
    })
    $(myPros).on('click',function () {
        $('.main .content *').removeClass('active')
        $('.main .content').find('.my-pro').addClass('active')
    })
    $(workings).on('click',function () {
        $('.main .content *').removeClass('active')
        $('.main .content').find('.working').addClass('active')
    })
    $(contract).on('click',function () {
        $('.main .content *').removeClass('active')
        $('.main .content').find('.context').addClass('active')
    })

    function $$(selector, context) {
        context = context || document;
        var elements = context.querySelectorAll(selector);
        return Array.prototype.slice.call(elements);
    }

    $$('.skills .useful .pie').forEach(function(pie) {
        var p = parseFloat(pie.textContent);
        var NS = "http://www.w3.org/2000/svg";
        var svg = document.createElementNS(NS, "svg");
        var circle = document.createElementNS(NS, "circle");
        var title = document.createElementNS(NS, "title");

        circle.setAttribute("r", 16);
        circle.setAttribute("cx", 16);
        circle.setAttribute("cy", 16);
        circle.setAttribute("stroke-dasharray", p + " 100");

        svg.setAttribute("viewBox", "0 0 32 32");
        title.textContent = pie.textContent;
        pie.textContent = '';
        svg.appendChild(title);
        svg.appendChild(circle);
        pie.appendChild(svg);
    });



})