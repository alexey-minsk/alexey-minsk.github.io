(function (win, doc) {
    'use strict';
    win.addEventListener('load', function () {

        var btnAllDays = doc.getElementById("btn_schedule_all");
        var btnToday = doc.getElementById("btn_schedule_today");
        var btnTomorrow = doc.getElementById("btn_schedule_tomorrow");

        var btnMon = doc.getElementById("btn_schedule_mon");
        var btnTue = doc.getElementById("btn_schedule_tue");
        var btnWed = doc.getElementById("btn_schedule_wed");
        var btnThu = doc.getElementById("btn_schedule_thu");
        var btnFri = doc.getElementById("btn_schedule_fri");

        btnAllDays.addEventListener("click", function () {
            remove_class("mui_btn_schedule", "mui-btn--primary");
            this.classList.add("mui-btn--primary");
            toggle_by_class("schedule-row", true);
        });

        btnToday.addEventListener("click", function () {
            remove_class("mui_btn_schedule", "mui-btn--primary");
            this.classList.add("mui-btn--primary");
            var day = get_day_string((new Date()).getDay());
            toggle_by_class("schedule-row", false);
            toggle_by_class("schedule-row-" + day, true);
        });

        btnTomorrow.addEventListener("click", function () {
            remove_class("mui_btn_schedule", "mui-btn--primary");
            this.classList.add("mui-btn--primary");
            var day = get_day_string((new Date()).getDay() + 1);
            toggle_by_class("schedule-row", false);
            toggle_by_class("schedule-row-" + day, true);
        });

        btnMon.addEventListener("click", function () {
            remove_class("mui_btn_schedule", "mui-btn--primary");
            this.classList.add("mui-btn--primary");
            toggle_by_class("schedule-row", false);
            toggle_by_class("schedule-row-mon", true);
        });

        btnTue.addEventListener("click", function () {
            remove_class("mui_btn_schedule", "mui-btn--primary");
            this.classList.add("mui-btn--primary");
            toggle_by_class("schedule-row", false);
            toggle_by_class("schedule-row-tue", true);
        });

        btnWed.addEventListener("click", function () {
            remove_class("mui_btn_schedule", "mui-btn--primary");
            this.classList.add("mui-btn--primary");
            toggle_by_class("schedule-row", false);
            toggle_by_class("schedule-row-wed", true);
        });

        btnThu.addEventListener("click", function () {
            remove_class("mui_btn_schedule", "mui-btn--primary");
            this.classList.add("mui-btn--primary");
            toggle_by_class("schedule-row", false);
            toggle_by_class("schedule-row-thu", true);
        });

        btnFri.addEventListener("click", function () {
            remove_class("mui_btn_schedule", "mui-btn--primary");
            this.classList.add("mui-btn--primary");
            toggle_by_class("schedule-row", false);
            toggle_by_class("schedule-row-fri", true);
        });
    })

    function get_day_string(day) {
        switch (day) {
            case 1:
                return "mon";
            case 2:
                return "tue";
            case 3:
                return "wed";
            case 4:
                return "thu";
            case 5:
                return "fri";
            default:
              return "mon";
          }
    }

    function remove_class(cls, classNameToRemove) {
        var lst = doc.getElementsByClassName(cls, classNameToRemove);
        for (var i = 0; i < lst.length; ++i) {
            lst[i].classList.remove(classNameToRemove);
        }
    }

    function toggle_by_class(cls, on) {
        var lst = doc.getElementsByClassName(cls);
        for (var i = 0; i < lst.length; ++i) {
            lst[i].style.display = on ? '' : 'none';
        }
    }
}
)(window, document)