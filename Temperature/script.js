$(document).ready(function() {
	$("#btnOk").click(function(){
		var city=$("#city").val();
		var code=$("#code").val();
		if(city.length>1){
			var.urllink='http://api.openweathermap.org/data/2.5/weather?q=';
			urllink=urllink + city;
			}
			if(code.length==2){
				urllink=urllink+','+code;
			}
			urllink=urllink+'&appid=4680e73ebb8923987b5d3e6c0087114d';

			$.ajax({                         
				url: urllink,
				data : {format: 'json'}, 	// informacie ktore sa posielaju na server
			error : function(){
				$("#main").html("ERROR");
				//vypis chyby
			},
			dataType: 'json',
			success: function(data){
				console.log("temp:"+data.main.temp);
				console.log("desc:"+data.weather.main);
				$('#main').empty();
				var table=$("<table/>");
				
				var tr=getLine('City',city);
				table.append(tr);

				var tr=getLine('Country',code);
				table.append(tr);

				tr=getLine("Temperature",data.main.temp-273.15,1);
				table.append(tr);

				tr=getLine("Humidity",data.main.humidity+' %');
				table.append(tr);


				tr=getLine("pressure",data.main.pressure+' hPa');
				table.append(tr);

				if($("#details").is(':checked')){
					tr=getLine
				}



			

			},
			type: 'GET'

		});

		}

	});

	function getLine(data1,data2){

	}
	});

