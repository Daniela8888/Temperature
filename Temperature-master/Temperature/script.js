$(document).ready(function() {
	$("#btnokej").click(function(){
		var city=$("#city").val();
		var code=$("#code").val();
		if(city.length>1){
			var urllink='http://api.openweathermap.org/data/2.5/weather?q=';
			urllink=urllink + city;
			
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
				console.log("desc:"+data.weather[0].description);

				$('#content').empty();
				var table=$("<table/>");
				table.addClass("Temperature");


				var tr=getLine('City',city);
				table.append(tr);

				var tr=getLine('Country',data.sys.country);
				table.append(tr);

				var tr=getLine('Temperature',data.main.temp-273.15);
				table.append(tr);

				var tr=getLine('Humidity',data.main.humidity+' %');
				table.append(tr);

				tr=getLine("Description", data.weather[0].description);
         	    table.append(tr);


				var tr=getLine('Pressure',data.main.pressure+' hPa');
				table.append(tr);


				$("#content").append(table);

				if($("#details").is(':checked')){
					

					var tr=getLine('Wind',data.wind.speed);
					table.append(tr);

					var tr=getLine('MinTemp',data.main.temp_min-273.15);
					table.append(tr);

					var tr=getLine('MaxTemp',data.main.temp_max-273.15);
					table.append(tr);

					var tr=getLine("Sunrise", new Date(data.sys.sunrise*1000).getHours()+':'+new Date(data.sys.sunrise*1000).getMinutes());
              		table.append(tr);

              		var	tr=getLine("Sunset", new Date(data.sys.sunset*1000).getHours()+':'+new Date(data.sys.sunset*1000).getMinutes());
            		  table.append(tr);
            		
				}



			

			},
			type: 'GET'

		});

		}

	});

	function getLine(data1,data2){
		var tr=$("<tr/>");
		var td1=$("<td/>");
		$(td1).append(data1);
		var td2=$("<td/>");
		$(td2).append(data2);
		tr.append(td1);
		tr.append(td2);
		return tr;

	}
	});

