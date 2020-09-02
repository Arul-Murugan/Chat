window.onload = function () {
    if (window.jQuery) {
        $(document).ready(function () {
            $(".chat").hide();
            var data = [
                {
                    id: 1,
                    questions: [
                        `Good morning.<br> Hope you're in for a quick discussion today.`,
                        `Doctor As you know weight gain increases the risk of CVD by a significant amount of 12 percent! Also, a gain of every 3 kg nullifies the benefits of 1 percent reduction in A1c And every 1kg gain increases risk of Heart Failure by a HUGE factor, 7.1 percent Doctor, have a question for you.`,
                        `Do you consider managing your patient's BMI important while treating Type 2 Diabetes?`
                    ],
                    actions: [
                        {
                            name: 'Yes',
                            id: 2
                        },
                        {
                            name: 'No',
                            id: 3
                        },
                        {
                            name: 'Maybe',
                            id: 4
                        }
                    ]
                },
                {
                    id: 2,
                    questions: [
                        `Indeed Several Studies have shown that Obesity is associated with higher risks of pre-diabetes and type 2 diabetes.`,
                        `Tel me doctor, what is your goal while treating patients with Type 2 Diabetes? Is your goal Glycemic control? Or Weight loss ? Or Both?`
                    ],
                    actions: [
                        {
                            name: 'Glycemic control',
                            id: 1
                        },
                        {
                            name: 'Weight loss',
                            id: 3
                        },
                        {
                            name: 'Both',
                            id: 2
                        }
                    ]
                }
            ]

            $(".start-close").on("click", function () {
                $('.start').hide();
                $(".chat").show();
                debugger;
                var message = '';
                if (data && data.length) {
                    message += '<div class="qmessage">'
                    for (var i = 0; i < data[0].questions.length; i++) {
                        let question = data[0].questions[i];
                        message += `<p>${question}</q>`;
                    }
                    message += '</div>';
                    message += '<div class="qoption">'
                    for (var i = 0; i < data[0].actions.length; i++) {
                        let question = data[0].actions[i];
                        message += `<a class="btn action" href="#" role="button" id="${data[0].actions[i].id}">${data[0].actions[i].name}</a>`;
                    }
                    message += '</div>';
                }
                $('.message-content').append(message);
                $('.message-container').animate({ scrollTop: $('.message-container')[0].scrollHeight }, 1000);
            });

            $(document).on("click", '.qoption .action', function () {
                $(this).parent().find('.action').removeClass('active');
                $(this).addClass('active');
                var id = $(this).attr('id');
                var text = $(this).text();
                var message = '';
                var idInd = -1;
                for (let j = 0; j < data.length; j++) {
                    if (data[j].id == id) {
                        idInd = j;
                    }
                }
                if (data && data.length && data[idInd]) {
                    message += '<div class="amessage">'
                    message += `<p>${text}</q>`;
                    message += '</div>';

                    message += '<div class="qmessage">'
                    for (var i = 0; i < data[idInd].questions.length; i++) {
                        let question = data[idInd].questions[i];
                        message += `<p>${question}</q>`;
                    }
                    message += '</div>';
                    message += '<div class="qoption">'
                    for (var i = 0; i < data[idInd].actions.length; i++) {
                        let question = data[idInd].actions[i];
                        message += `<a class="btn action" href="#" role="button" id="${data[idInd].actions[i].id}">${data[idInd].actions[i].name}</a>`;
                    }
                    message += '</div>';
                }
                $('.message-content').append(message);
                $('.message-container').animate({ scrollTop: $('.message-container')[0].scrollHeight }, 1000);
            });

            $(".menu-icon").on("click", function () {
                $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass"));
                $(".sideMenu, .overlay").toggleClass("open");
                $(".overlay, .menu-close").on("click", function () {
                    $('.overlay').removeClass("open");
                    $(".sideMenu").removeClass("open")
                })
            });
        })
    } else {
        console.log("sidebarNavigation Requires jQuery")
    }
}