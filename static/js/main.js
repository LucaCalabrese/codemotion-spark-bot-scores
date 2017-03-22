var colors = ["white", "#66ccff", "orange", "violet", "lime", "pink", "#ffcc99", "#66ffcc", "#ffcc00", "#ff6666"];

var getScores = function () {
    $.get("http://ec2-35-160-245-208.us-west-2.compute.amazonaws.com:8080/chatbot-codemotion/api/engine/scores", function (data) {
        $('.high-score-rows').empty();
        $.each(data, function (i, item) {
            if (i < 18) {
                // Display max 18 elements
                let randomNum = Math.round(Math.random() * colors.length);
                console.log("randomNum: " + randomNum);
                let randomColor = colors[randomNum - 1];
                console.log("randomColor: " + randomColor);
                let rankSuffix = "TH";
                switch (item.rank) {
                    case 1: rankSuffix = "ST"; break;
                    case 2: rankSuffix = "ND"; break;
                    case 3: rankSuffix = "RD"; break;
                    default: rankSuffix = "TH";
                }
                let style = "high-score-rows";
                if (i > 8) {
                    // Display max 9 elements on widescreen displays
                    style = style + " visible-md visible-sm";
                }
                console.log("style " + style);
                $('<tr>').addClass(style).append(
                    $('<td class="col-left">').text(item.rank + rankSuffix).css('color', randomColor),
                    $('<td class="col-center">').text(item.score).css('color', randomColor),
                    $('<td class="col-right">').text(item.name.substring(0, 10)).css('color', randomColor)
                ).appendTo('#high-score-table');
            }
        })
    });
}

$(document).ready(getScores);
var intervalID = setInterval(getScores, 10000);