var radio1 = "mL";
var radio2 = "mg";

var Dose = 20
var Drops = 20



function analyzeRadio(op) {
    "use strict";
    if (op === "oz") {
        radio1 = "oz";
    }
    if (op === "mL") {
        radio1 = "mL";
    }
}

function analyzeRadio1(op) {
    "use strict";
    if (op === "g") {
        radio2 = "g";
    }
    if (op === "mg") {
        radio2 = "mg";
    }
}

function handle1() {
    "use strict";
    var Price = document.getElementById("Price").value;
    var Content = document.getElementById("Content").value;
    if (Content === "" || Price === "") {
        document.getElementById("output1").innerHTML = ""
    } else {

        if (radio2 === "g") {
            var Content = Content * 1000;
        }
        console.log("Price: ",Price,"Content",Content)
        var output = Price / Content;
        var output = output.toFixed(2); 
        document.getElementById("output1").innerHTML = "$"+output
    }
}


function handle2() {
    "use strict";
    var Size = document.getElementById("Size")
        .value;
    var Content = document.getElementById("Content")
        .value;
    if (Content == "" || Size == "") {
        document.getElementById("output2").innerHTML = ""
    } else {
        if (radio1 == "oz") {
            Size = Size * 29.57;
        }
        if (radio2 == "g") {
            Content = Content * 1000;
        }

    document.getElementById("output2").innerHTML = Size / Content;
    }
}

function handle3() {
    "use strict";
    var contentpermL = document.getElementById("output2").innerHTML;
    console.log(Dose);
    if (document.getElementById("Dose").value === undefined || document.getElementById("Dose").value === ""  ) { Dose = 20;}
    
    document.getElementById("output3").innerHTML = contentpermL * Dose;
}

function handle4() {
    "use strict";
    var Content = document.getElementById("Content").value;
    var Dose = document.getElementById("Dose").value;

    if (document.getElementById("Dose")
        .value == null) {
        Dose = 20;
    }
    document.getElementById("output4")
        .innerHTML = Content / Dose;
}

function handle5() {
    "use strict";
    var Size = document.getElementById("Size").value;
    var Drops = document.getElementById("Drops").value;

    if (document.getElementById("Drops").value == null) {
        Drops = 20;
    }
    document.getElementById("output5")
        .innerHTML = Size / Drops;
}

function handle6() {
    "use strict";

    if (document.getElementById("Dose").value == null) {
        Dose = 20;
    }
    document.getElementById("output6").innerHTML = Price * Dose
    console.log(document.getElementById("output6").innerHTML = Price * Dose);

}

function handle() {
    handle1();
    handle2();
    handle3();
    handle4();
    handle5();
    handle6();
}

handle()