var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "9904",
        "ok": "9904",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13000",
        "ok": "13000",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "844",
        "ok": "844",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "806",
        "ok": "806",
        "ko": "-"
    },
    "percentiles1": {
        "total": "784",
        "ok": "784",
        "ko": "-"
    },
    "percentiles2": {
        "total": "830",
        "ok": "830",
        "ko": "-"
    },
    "percentiles3": {
        "total": "966",
        "ok": "966",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1204",
        "ok": "1204",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6069,
        "percentage": 61
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3734,
        "percentage": 38
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 101,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "319.484",
        "ok": "319.484",
        "ko": "-"
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
        "total": "9904",
        "ok": "9904",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13000",
        "ok": "13000",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "844",
        "ok": "844",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "806",
        "ok": "806",
        "ko": "-"
    },
    "percentiles1": {
        "total": "784",
        "ok": "784",
        "ko": "-"
    },
    "percentiles2": {
        "total": "830",
        "ok": "830",
        "ko": "-"
    },
    "percentiles3": {
        "total": "966",
        "ok": "966",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1204",
        "ok": "1204",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 6069,
        "percentage": 61
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3734,
        "percentage": 38
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 101,
        "percentage": 1
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "319.484",
        "ok": "319.484",
        "ko": "-"
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
