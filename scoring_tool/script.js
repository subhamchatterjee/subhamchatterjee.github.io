document.addEventListener("DOMContentLoaded", function(event) {

    window.addEventListener("load", showValue);
    var q1Elem = document.getElementById("q1");
    var q2Elem = document.getElementById("q2");
    var v1Elem = document.getElementById("v1");
    var v2Elem = document.getElementById("v2");
    var v3Elem = document.getElementById("v3");

    q1Elem.addEventListener("input", showValue);
    q2Elem.addEventListener("input", showValue);
    v1Elem.addEventListener("input", showValue);
    v2Elem.addEventListener("input", showValue);
    v3Elem.addEventListener("input", showValue);

    function showValue() {
        var q1 = parseInt(q1Elem.value);
        var q2 = parseInt(q2Elem.value);

        var v1 = parseInt(v1Elem.value);
        var v2 = parseInt(v2Elem.value);
        var v3 = parseInt(v3Elem.value);

        document.getElementById("alg_scr").innerHTML = q1;
        document.getElementById("arth_scr").innerHTML = q2;

        document.getElementById("sc_scr").innerHTML = v1;
        document.getElementById("cr_scr").innerHTML = v2;
        document.getElementById("rc_scr").innerHTML = v3;

        var q = q1 + q2;
        var v = v1 + v2 + v3;
        var t = q + v;

        if((q < 20) || (q > 180)) {
            document.getElementById("q_error").style.display = "block";
        }
        else document.getElementById("q_error").style.display = "none";

        if((v < 30) || (v > 270)) {
            document.getElementById("v_error").style.display = "block";
        }
        else document.getElementById("v_error").style.display = "none";

        document.getElementById("q-value").innerHTML = q;
        document.getElementById("v-value").innerHTML = v;
        document.getElementById("t-value").innerHTML = t;
    }
});
