


var radio1 = "mL";
var radio2 = "mg";


function handle() {
		handle1();
		handle2();
		handle3();
		handle4();
		handle5();
		handle6();
}
function analyzeRadio(op) 
{
	if (op == "oz")
	{
		radio1="oz";
	}
	if (op == "mL")
	{
		radio1="mL";
	}
}

function analyzeRadio1(op) 
{
	if (op == "g")
	{
		radio2="g";
	}
	if (op == "mg")
	{
		radio2="mg";
	}
}

function handle1()
{
	Price = document.getElementById("Price").value;
	Content = document.getElementById("Content").value;
	if(Content==""||Price=="")
	{
		
	}
	else
	{

		if(radio2 == "g"){Content = Content * 1000;}

		document.getElementById("output1").innerHTML = Price / Content;
	}
}


function handle2()
{ 
	Size = document.getElementById("Size").value;
	Content = document.getElementById("Content").value;
	if(Content==""||Size=="")
	{
		
	}
	else
	{
		if(radio1 == "oz"){Size= Size * 29.57;}
		if(radio2 == "g"){Content = Content * 1000;}
		
		document.getElementById("output2").innerHTML = Size / Content;
	}
}

function handle3()
	{
		contentpermL = document.getElementById("output2").innerHTML;
		Dose = document.getElementById("Dose").value;	

		if(document.getElementById("Dose").value == null)
		{
			Dose = 20;
		}

		document.getElementById("output3").innerHTML =  contentpermL * Dose;
	}

function handle4()
	{
		Content = document.getElementById("Content").value;
		Dose = document.getElementById("Dose").value;

		if(document.getElementById("Dose").value == null)
		{
			Dose = 20;
		}
		document.getElementById("output4").innerHTML = Content / Dose;
	}
	function handle5()
	{
		Size = document.getElementById("Size").value;
		Drops = document.getElementById("Drops").value;

		if(document.getElementById("Drops").value == null)
		{
			Drops = 20;
		}
		document.getElementById("output5").innerHTML = Size / Drops;
	}
	function handle6()
	{
		Cost = document.getElementById("output1").innerHTML;
		Dose = document.getElementById("Dose").value;

			if(document.getElementById("Dose").value == null)
		{
			Dose = 20;
		}
		document.getElementById("output6").innerHTML = Cost * Dose;

	}
	
handle()
