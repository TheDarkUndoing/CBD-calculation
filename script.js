var radio1 = "mL";
var radio2 = "mg";
var Dose =20

var Price = document.getElementById("Price").value;
var Content = document.getElementById("Content").value;
var Size = document.getElementById("Size").value;
var contentpermL = Size / Content;
var Dose = document.getElementById("Dose").value;
var Drops = document.getElementById("Drops").value;



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
    var Size = document.getElementById("Size").value;
    var Content = document.getElementById("Content").value;
    if (Content === "" || Size === "") {
        document.getElementById("output2").innerHTML = ""
    } else {
        if (radio1 == "oz") {
            Size = Size * 29.57;
        }
        if (radio2 == "g") {
            Content = Content * 1000;
        }
    var output = Size / Content;
    var output = output.toFixed(2);
    document.getElementById("output2").innerHTML = output;
    }
}

function handle3() {
    "use strict";
    var contentpermL = document.getElementById("output2").innerHTML;
    var Dose = document.getElementById("Dose").value;

    if (document.getElementById("Dose").value === ""  ) { Dose = 20;}
    console.log("<",contentpermL,">");
    console.log("<",Dose,">");
    var output = contentpermL * Dose;
    var output = output.toFixed(2);
    if (contentpermL === "" || Dose === "") {
        document.getElementById("output3").innerHTML = "";
    }else{document.getElementById("output3").innerHTML = output;}
    
}

function handle4() {
    "use strict";
    var Content = document.getElementById("Content").value;
    var Dose = document.getElementById("Dose").value;

    if (document.getElementById("Dose").value == "") {Dose = 20;}
    
    var output = Content / Dose;
    var output = output.toFixed(2)
    if (Content === "" || Dose === "") {
        document.getElementById("output4").innerHTML = "";
    }else{
    document.getElementById("output4").innerHTML =  output;
}
}

function handle5() {
    "use strict";
    var Size = document.getElementById("Size").value;
    var Drops = document.getElementById("Drops").value;
    if (document.getElementById("Drops").value == "") {Drops = 20;}
    var output = Size / Drops;
    var output = output.toFixed(2);
    
    if (Size === "" || Drops === ""){document.getElementById("output5").innerHTML = ""}
        else{document.getElementById("output5").innerHTML = output;}
    
}

function handle6() {
    "use strict";
    var Price = document.getElementById("Price").value;
    var Dose = document.getElementById("Dose").value;
    if (document.getElementById("Dose").value == "") {Dose = 20;}
    var output = Price * Dose;
    var output = output.toFixed(2);
    if (Dose === "" || Price === "" ){document.getElementById("output6").innerHTML = ""}
    else{document.getElementById("output6").innerHTML = output;}
    //console.log(document.getElementById("output6").innerHTML = Price * Dose);

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