function whereIsJules(today) {
    let iraqueDates = [
        ["2019/03/27 12:00", "2019/04/24 12:00"],
        ["2019/05/22 12:00", "2019/06/12 12:00"],
        ["2019/07/03 12:00", "2019/07/31 12:00"],
        ["2019/09/02 12:00", "2019/09/30 12:00"],
        ["2019/10/28 12:00", "2019/11/27 12:00"],
        ["2019/12/27 12:00", "2019/12/31 12:00"],
    ]

    $.each(iraqueDates, (i, range) => {
        let start = new Date(range[0]);
        let end = new Date(range[1]);
        if (iraqueDates[i + 1]) {
            var nextStart = new Date(iraqueDates[i + 1][0]);
        }

        if (today > start && today < end) {
            console.log('Jules is in Iraq')
            console.log('He will be back in the Netherlands at ' + end)

            setCountDown(end, 'Jules is terug over')

            let imageUrl = './img/gasflare.gif';
            $('body').css('background-image', 'url(' + imageUrl + ')');

            $("#favicon").attr("href", "./img/iraq-flag.png");
            $("#flag").attr("src", "./img/iraq-flag.png");


        } else if (nextStart && today > end && today < nextStart) {
            console.log('Jules is in the Netherlands')
            console.log('He will be in the Netherlands until ' + nextStart)

            setCountDown(nextStart, 'Jules is hier nog')

            let imageUrl = './img/dutch.gif';
            $('body').css('background-image', 'url(' + imageUrl + ')');

            $("#favicon").attr("href", "./img/nl-flag.png");
            $("#flag").attr("src", "./img/nl-flag.png");

        }
    })

}

function setCountDown(date, prefixString) {
    $("#countdown")
        .countdown(date, function (event) {
            $(this).text(
                event.strftime(prefixString + ' %D dagen, %H uur, %M minuten en %S seconden.')
            );
        });
}


whereIsJules(new Date());
// whereIsJules(new Date('2019/04/26'));
