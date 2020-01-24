$(document).ready(function () {
    $('.btn-next').click(function () {
        var currentStep = $('.configurator-steps__content.active').data('step-number')
        var nextStep = currentStep + 1;
        var lastStep = $('.configurator-steps__content').last().data('step-number');

        $(".configurator-steps__item").removeClass('active');

        if (currentStep !== lastStep) {
            if (nextStep <= lastStep) {
                $('.btn-prev').show();
                $('.configurator-steps__content').removeClass('active');
                $(".configurator-steps__content[data-step-number='" + nextStep + "']").addClass('active');
                $(".configurator-steps__item[data-step-number='" + nextStep + "']").addClass('active').removeClass('blank');
            }
        }

        if (nextStep === lastStep) {
            $(this).hide();
        }

        return false

    });

    $('.btn-prev').click(function () {
        var prevStep = $('.configurator-steps__content.active').data('step-number') - 1;
        var firstStep = $('.configurator-steps__content').first().data('step-number');

        $(".configurator-steps__item").removeClass('active');

        if (prevStep >= firstStep) {
            $('.btn-next').show();
            $('.configurator-steps__content').removeClass('active');
            $(".configurator-steps__content[data-step-number='" + prevStep + "']").addClass('active');
            $(".configurator-steps__item[data-step-number='" + prevStep + "']").addClass('active');
            $(".configurator-steps__item[data-step-number='" + (prevStep + 1) + "']").addClass('blank');
        }

        if (prevStep === firstStep) {
            $(this).hide();
        }

        return false
    });
})
