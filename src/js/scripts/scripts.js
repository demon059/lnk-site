$(document).ready(function () {
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


    // карта поставок на главной
    fetch('build/js/libs/map/with-regions.json').then(function (response) {
        response.json().then(function (data) {
            new RussianMap({
                viewPort: data.viewPort,
                mapId: 'russian-map',
                width: 862,
                height: 497,
                // дефолтовые атрибуты для контуров регионов
                defaultAttr: {
                    fill: '#25669e', // цвет которым закрашивать
                    stroke: '#ffffff', // цвет границы
                    'stroke-width': 1, // ширина границы
                    'stroke-linejoin': 'round' // скруглять углы
                },

                // hover
                mouseMoveAttr: {
                    fill: '#25669e'
                }
                // onMouseMove: function (event) {
                //     console.log('mouse on ' + this.region.name + ' (ident: ' + this.region.ident + ')');
                // },
                // onMouseOut: function (event) {
                //     console.log('out on ' + this.region.name + ' (ident: ' + this.region.ident + ')');
                // },
                // onMouseClick: function (event) {
                //     console.log('clicked on ' + this.region.name);
                // }
            }, data.regions);
        });
    });

    // партнеры

    var words = [
        {
            text: "Компания", weight: 13, handlers: {
                click: function () {
                    var equipment = 'Название'
                    var year = '2008'

                    $('.partners-popup').show();
                    $('#partnerEquipment').text(equipment);
                    $('#partnerYear').text(year);
                }
            }
        },
        {
            text: "Компания2", weight: 10, handlers: {
                click: function () {
                    var equipment = 'Название1'
                    var year = '2002'

                    $('.partners-popup').show();
                    $('#partnerEquipment').text(equipment);
                    $('#partnerYear').text(year);
                }
            }
        },
        {
            text: "Компания3", weight: 8, handlers: {
                click: function () {
                    var equipment = 'Название3'
                    var year = '2004'

                    $('.partners-popup').show();
                    $('#partnerEquipment').text(equipment);
                    $('#partnerYear').text(year);
                }
            }
        },
        {
            text: "Компания4", weight: 7.3, handlers: {
                click: function () {
                    var equipment = 'Название4'
                    var year = '2002'

                    $('.partners-popup').show();
                    $('#partnerEquipment').text(equipment);
                    $('#partnerYear').text(year);
                }
            }
        },
        {
            text: "Компания5", weight: 8.5, handlers: {
                click: function () {
                    var equipment = 'Название5'
                    var year = '2005'

                    $('.partners-popup').show();
                    $('#partnerEquipment').text(equipment);
                    $('#partnerYear').text(year);
                }
            }
        },
        {
            text: "Компания6", weight: 6.2, handlers: {
                click: function () {
                    var equipment = 'Название6'
                    var year = '2005'

                    $('.partners-popup').show();
                    $('#partnerEquipment').text(equipment);
                    $('#partnerYear').text(year);
                }
            }
        },
        {
            text: "Компания7", weight: 5, handlers: {
                click: function () {
                    var equipment = 'Название7'
                    var year = '2001'

                    $('.partners-popup').show();
                    $('#partnerEquipment').text(equipment);
                    $('#partnerYear').text(year);
                }
            }
        },
    ];

    $('#partners').jQCloud(words, {
        autoResize: true
    });

    $('.partners-popup .close').click(function () {
        $('.partners-popup').hide();
    })

})
