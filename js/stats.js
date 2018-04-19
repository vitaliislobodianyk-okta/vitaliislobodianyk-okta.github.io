var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5993",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "55",
        "ko": "12"
    },
    "maxResponseTime": {
        "total": "160",
        "ok": "160",
        "ko": "44"
    },
    "meanResponseTime": {
        "total": "62",
        "ok": "62",
        "ko": "32"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "7",
        "ko": "11"
    },
    "percentiles1": {
        "total": "60",
        "ok": "60",
        "ko": "36"
    },
    "percentiles2": {
        "total": "62",
        "ok": "62",
        "ko": "40"
    },
    "percentiles3": {
        "total": "68",
        "ok": "68",
        "ko": "43"
    },
    "percentiles4": {
        "total": "91",
        "ok": "91",
        "ko": "44"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5993,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 7,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "193.548",
        "ok": "193.323",
        "ko": "0.226"
    }
},
contents: {
"req_send-sms-a7648": {
        type: "REQUEST",
        name: "Send SMS",
path: "Send SMS",
pathFormatted: "req_send-sms-a7648",
stats: {
    "name": "Send SMS",
    "numberOfRequests": {
        "total": "6000",
        "ok": "5993",
        "ko": "7"
    },
    "minResponseTime": {
        "total": "12",
        "ok": "55",
        "ko": "12"
    },
    "maxResponseTime": {
        "total": "160",
        "ok": "160",
        "ko": "44"
    },
    "meanResponseTime": {
        "total": "62",
        "ok": "62",
        "ko": "32"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "7",
        "ko": "11"
    },
    "percentiles1": {
        "total": "60",
        "ok": "60",
        "ko": "36"
    },
    "percentiles2": {
        "total": "62",
        "ok": "62",
        "ko": "40"
    },
    "percentiles3": {
        "total": "68",
        "ok": "68",
        "ko": "43"
    },
    "percentiles4": {
        "total": "91",
        "ok": "91",
        "ko": "44"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 5993,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 7,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "193.548",
        "ok": "193.323",
        "ko": "0.226"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
