$(document).ready(function () {
    // меню --------------------------------------------------
    $('.page-header__menu-bar').click(function () {
        $('.navigation').addClass('active');
    })
    $('.navigation__close').click(function () {
        $('.navigation').removeClass('active');
    })
    $('.submenu').click(function () {
        $(this).toggleClass('show');
    })
    // --- //

    // контент --------------------------------------------------
    $('.expand-label').click(function () {
        $(this).toggleClass('active');
    })

    // конфигуратор --------------------------------------------------
    var currentStep = $('.configurator-steps__content.active').data('step-number');
    $('.btn-next').click(function () {
        var nextStep = currentStep + 1;
        var lastStep = $('.configurator-steps__content').last().data('step-number');

        $(".configurator-steps__item").removeClass('active');

        if (currentStep !== lastStep) {
            if (nextStep <= lastStep) {
                currentStep = nextStep;
                $('.btn-prev').show();
                $('.configurator-steps__content').removeClass('active');
                $(".configurator-steps__content[data-step-number='" + currentStep + "']").addClass('active');
                $(".configurator-steps__item[data-step-number='" + currentStep + "']").addClass('active').removeClass('blank');
            }
        }

        if (currentStep === lastStep) {
            $(this).hide();
        }

        return false

    });

    $('.btn-prev').click(function () {
        var prevStep = $('.configurator-steps__content.active').data('step-number') - 1;
        var firstStep = $('.configurator-steps__content').first().data('step-number');

        $(".configurator-steps__item").removeClass('active');

        if (prevStep >= firstStep) {
            currentStep = prevStep;
            $('.btn-next').show();
            $('.configurator-steps__content').removeClass('active');
            $(".configurator-steps__content[data-step-number='" + currentStep + "']").addClass('active');
            $(".configurator-steps__item[data-step-number='" + currentStep + "']").addClass('active');
            $(".configurator-steps__item[data-step-number='" + (currentStep + 1) + "']").addClass('blank');
        }

        if (currentStep === firstStep) {
            $(this).hide();
        }

        return false
    });

    function goToStep() {
        $(".configurator-steps__content").removeClass('active');
        $(".configurator-steps__item").removeClass('active');
        $(".configurator-steps__content[data-step-number='" + currentStep + "']").addClass('active');
        $(".configurator-steps__item[data-step-number='" + currentStep + "']").addClass('active');

        $('.btn-next').show();
    }

    $('#goToStep2').click(function () {
        currentStep = 2;
        goToStep();
        return false;
    })

    $('#goToStep3').click(function () {
        currentStep = 3;
        goToStep();
        return false;
    })

    $('input[name="step2"]').change(function () {
        var registr = $('input[name="step2"]:checked').data('registr-name');
        $('.registr-name').remove();
        $('#selectedItems').prepend('<li class="registr-name">' + registr + '</li>');
    })

    $('input[name="step3"]').change(function () {
        var wire = $('input[name="step3"]:checked').data('wire');
        $('#selectedWire').text(wire);
    })

    $('input[name="step4"]').change(function () {
        var selectedCheckBoxes = $('input[name="step4"]:checked');
        var checkedValues = Array.from(selectedCheckBoxes).map(cb => cb.value);

        $('.result-option').remove();
        checkedValues.forEach((item) => {
            $('#selectedItems').append('<li class="result-option">' + item + '</li>');
        });

    })
    // --- //

    $('.partners-popup .close').click(function () {
        $('.partners-popup').hide();
    })
    // --- //

    // tabs-mobile --------------------------------------------------
    $('.tabs-mobile__item-title').click(function () {
        $(this).parent().toggleClass('active')
    })
    // --- //
})
