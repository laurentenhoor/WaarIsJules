function whereIsJules(today) {
    let iraqueDates = [
        ["2018/01/31 12:00", "2018/02/28 12:00"],
        ["2018/03/28 12:00", "2018/04/25 12:00"],
        ["2018/05/23 12:00", "2018/06/27 12:00"],
        ["2018/07/18 12:00", "2018/08/15 12:00"],
        ["2018/09/26 12:00", "2018/10/31 12:00"],
        ["2018/11/28 12:00", "2018/12/26 12:00"],
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
// whereIsJules(new Date('2018/04/26'));
