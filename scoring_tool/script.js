var seek1 = document.getElementById("q1");
var seek2 = document.getElementById("q2");
var seek3 = document.getElementById("v1");
var seek4 = document.getElementById("v2");
var seek5 = document.getElementById("v3");
seek1.addEventListener("input",showValue);
seek2.addEventListener("input",showValue);
seek3.addEventListener("input",showValue);
seek4.addEventListener("input",showValue);
seek5.addEventListener("input",showValue);
function showValue() {
    document.getElementById("alg_scr").innerHTML = parseInt(seek1.value);
    document.getElementById("arth_scr").innerHTML = parseInt(seek2.value);
    document.getElementById("sc_scr").innerHTML = parseInt(seek3.value);
    document.getElementById("cr_scr").innerHTML = parseInt(seek4.value);
    document.getElementById("rc_scr").innerHTML = parseInt(seek5.value);
    var q = parseInt(seek1.value) + parseInt(seek2.value);
    var v = parseInt(seek3.value) + parseInt(seek4.value) + parseInt(seek5.value);
    var t = q + v;
    document.getElementById("q-value").innerHTML = q;
    document.getElementById("v-value").innerHTML = v;
    document.getElementById("t-value").innerHTML = t;
}
