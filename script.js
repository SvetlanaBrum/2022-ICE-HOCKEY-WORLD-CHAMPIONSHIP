/* ФИКСИРУЮ ШАПКУ */
$(function () {
 let header = $('.heading');
 let hederHeight = header.height(); // вычисляем высоту шапки
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('heading_fixed');
    $('body').css({
       'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
    });
   } else {
    header.removeClass('heading_fixed');
    $('body').css({
     'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
    })
   }
 });
});

/*СЧЕТЧИК*/
function champCountDown() {
    const champDate = new Date("May 13, 2022, 16:20"); //скорее всего по местному финскому времени
    const now = new Date();
    const diff = champDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHours = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHours;

    const displayMinutes = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displaySeconds = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySeconds;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        
        clearInterval(timerId);

        letsGetStarted();
    }
}

let timerId = setInterval(champCountDown, 1000);

function letsGetStarted() {
    const heading = document.querySelector("h1");
    heading.innerHTML = `MEN'S ICE HOCKEY WORLD CHAMPIONSHIP 2022 <br> is declared to be OPEN!!!`
    heading.classList.add("headingChanged");
}

const button = document.querySelector("#myButton");

button.addEventListener("click", function () {
    const audio = document.querySelector("#myAudio");
    if (audio.paused) {
        audio.play();
    }
    else {
        audio.pause();
    }
    
});


// МОДАЛЬНЫЕ ОКНА ПРИ НАЖАТИИ НА флаг

// canada
$(function () {
    $(".can").on("click", (event) => {
        $(".modal-can").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-can").removeClass("modalStyle");
    })
});

// russia
$(function () {
    $(".rus").on("click", (event) => {
        $(".modal-rus").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-rus").removeClass("modalStyle");
    })
});

// germany
$(function () {
    $(".ger").on("click", (event) => {
        $(".modal-ger").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-ger").removeClass("modalStyle");
    })
});

// finland
$(function () {
    $(".fin").on("click", (event) => {
        $(".modal-fin").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-fin").removeClass("modalStyle");
    })
});

// usa
$(function () {
    $(".usa").on("click", (event) => {
        $(".modal-usa").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-usa").removeClass("modalStyle");
    })
});

// Czech Republic
$(function () {
    $(".cze").on("click", (event) => {
        $(".modal-cze").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-cze").removeClass("modalStyle");
    })
});

// sweden
$(function () {
    $(".swe").on("click", (event) => {
        $(".modal-swe").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-swe").removeClass("modalStyle");
    })
});

// switzerland
$(function () {
    $(".sui").on("click", (event) => {
        $(".modal-sui").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-sui").removeClass("modalStyle");
    })
});

// slovakia
$(function () {
    $(".svk").on("click", (event) => {
        $(".modal-svk").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-svk").removeClass("modalStyle");
    })
});

// denmark
$(function () {
    $(".den").on("click", (event) => {
        $(".modal-den").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-den").removeClass("modalStyle");
    })
});

// kazakhstan
$(function () {
    $(".kaz").on("click", (event) => {
        $(".modal-kaz").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-kaz").removeClass("modalStyle");
    })
});

// italy
$(function () {
    $(".ita").on("click", (event) => {
        $(".modal-ita").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-ita").removeClass("modalStyle");
    })
});

// GBR
$(function () {
    $(".gbr").on("click", (event) => {
        $(".modal-gbr").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-gbr").removeClass("modalStyle");
    })
});

// belarus
$(function () {
    $(".blr").on("click", (event) => {
        $(".modal-blr").addClass("modalStyle");
    });

    $(".cross").on("click", (event) => {
        $(".modal-blr").removeClass("modalStyle");
    })
});


// Закрытие модального окна при клике вне его контентной области
$('.modal').mouseup(function (e) {
    let modalContent = $(".modal-content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $('.modal').removeClass('modalStyle');
}
});
// Закрытие модального окна при клике ESCAPE
$(document).keydown(function (e) {
if (e.keyCode == 27) {
$('.modal').removeClass('modalStyle');
}
});