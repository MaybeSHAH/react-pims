var hostName = "192.168.1.102";
var port = 9001;
var userName = "";
var userPass = "";
var mqttID = "web_" + parseInt(Math.random() * 100, 10);
var alarmRows ='';
var dataObj = {};var colAlBraider={0:'MACHINE EMERGENCY PRESSED', 1:'DOOR NOT CLOSED', 2:'CLOSE FRONT RIGHT DOOR AND PRESS RESET', 3:'CLOSE FRONT LEFT DOOR AND PRESS RESET', 4:'CLOSE BACK RIGHT DOOR AND PRESS RESET', 5:'CLOSE BACK LEFT DOOR AND PRESS RESET', 6:'BOBBIN EMPTY D1 INNER ACTIVATED', 7:'BOBBIN EMPTY D1 OUTER ACTIVATED', 8:'BOBBIN EMPTY D2 INNER ACTIVATED', 9:'BOBBIN EMPTY D2 OUTER ACTIVATED', 10:'WIRE BREAK D1 BACK ACTIVATED', 11:'WIRE BREAK D1 FRONT ACTIVATED', 12:'WIRE BREAK D2 BACK ACTIVATED', 13:'WIRE BREAK D2 OUTER ACTIVATED', 14:'MPCB TRIP ACTIVATED', 15:'RUNNING PLY SENSOR ACTIVATED', 16:'OIL LEVEL D1 SENSOR ACTIVATED', 17:'TAKE UP EMERGENGY ACTIVATED', 18:'WIRE BREAK D1 TOP ACTIVATED', 19:'WIRE BREAK D2 TOP ACTIVATED', 20:'METAL SENSOR DETECHED PUT RED TAPE', 21:'ALUMINIUM SENSOR DETECHED PUT RED TAPE'};
var colAlMandrel={0:'TCI-1 PUMP MPCB TRIPPED', 1:'TCI-1 AGITATOR MPCB TRIPPED', 2:'TCI-2 PUMP MPCB TRIPPED', 3:'TCI=2 AGITATOR MPCB TRIPPED', 4:'TAKEUP DRIVE FAULT', 5:'TAKEUP DRIVE ALARM', 6:'MANDREL OD HIGH LINE STOPPED', 7:'MANDREL OD LOW LINE STOPPED', 8:'PANEL EMERGENCY PRESSED', 9:'TAKEUP EMERGENCY PRESSED', 10:'SPARE 1', 11:'SPARE 2', 12:'SPARE 3', 13:'SPARE 4', 14:'SPARE 5', 15:'SPARE 6', 16:'MANDREL OD HIGH', 17:'MANDREL OD LOW'};
var colAlExtruder={0:'THICKNESS  HIGH',1:'THICKNESS LOW',2:'HEAD TEMPERATURE HIGH',3:'HEAD TEMPERATURE LOW',4:'ZONE 2 TEMPERATURE HIGH',5:'ZONE 2 TEMPERATURE LOW',6:'ZONE 3 TEMPERATURE HIGH',7:'ZONE 3 TEMPERATURE LOW',8:'EXTRUDER CURRENT WARNING HIGH',9:'EXTRUDER CURRENT ALARM HIGH',10:'EXTRUDER PRESSURE WANING HIGH',11:'EXTRUDER PRESSURE ALARM HIGH',12:'OUTER DIAMETER HIGH',13:'OUTER DIAMETER LOW',14:'INNER DIAMETER HIGH',15:'INNER DIAMETER LOW',16:'TAKEUP2 END LIMIT ACTIVATED',17:'FEEDER EMERGENCY PRESSED',18:'RED TAPE SENSOR DETECTED',19:'EXTRUSION MATERIAL TEMPERATURE HIGH',20:'EXTRUSION MATERIAL TEMPERATURE LOW',21:'SPARE-1',22:'SPARE-2',23:'SPARE-3',24:'SCREW TEMPERATURE HIGH',25:'SCREW TEMPERATURE LOW',26:'EXTRUDER EMERGENCY PRESSED',27:'INPUT CATTERPULLER EMERGENCY PRESSED',28:'OUTPUT CATTERPULLER EMERGENCY PRESSED',29:'TAKEUP1 EMERGENCY PRESSED',30:'TAKEUP2 EMERGENCY PRESSED',31:'TAKEUP1 END LIMIT ACTIVATED'};
var colAlTesting={0:'HYDRAULIC MOTOR TRIPPED',1:'WATER PUMP TRIPPED',2:'HMI PANEL EMERGENCY PRESSED',3:'MAIN DRIVE FAULT DETECTED',4:'WATER FILTER CHOKED',5:'WATER LEVEL LOW',6:'AIR PRESSURE LOW',7:'WATER MINIMUM PRESSURE NOT REACHED',8:'PIR NUMBER NOT ENTERED',9:'SET EXRACTION PRESSURE NOT ENTERED',10:'SET TEST PRESSURE NOT ENTERED',11:'RIGHT CLAMP EMERGENCY PRESSED',12:'LEFT CLAMP EMERGENCY PRESSED',13:'CHECK CLAMPING LIMIT PRESSURE',14:'MAIN DRIVE NOT READY',15:'SPARE8'};
var colAlVulcanizer={0:'DOOR OPEN TIME-PRESSURE HIGH',1:'WATER PUMP TRIP',2:'OPEN HAND VALVE',3:'SPARE 1',4:'HYDRAULIC MOTOR TRIP',5:'HMI EMERGENCY PRESSED',6:'SELECT AUTO MODE',7:'MANUAL NOT SELECTED',8:'PANEL EMERGENCY PRESSED',9:'DOOR MOTOR TRIP',10:'CLOSE HAND VALVE',11:'HYDRAULIC MOTOR ON FEEDBACK NOT ON',12:'RAMUP TEMPERATURE HIGH',13:'CURING TEMPERATURE HIGH',14:'PRESSURE HIGH',15:'SPARE 2',16:'SPARE 3',17:'DOOR LOCK LIMIT SWITCH NOT ON',18:'DOOR OPEN FB NOT ON',19:'DOOR UNLOCK LIMIT SWITCH NOT ON',20:'DOOR CLOSED FB NOT ON',21:'COMPRESSOR PRESSURE LOW',22:'RAMUP TEMPERATURE LOW',23:'SPARE 4',24:'RAMP OR CURING PRESSURE LOW',25:'SPARE 5',26:'LOW PRESSURE CHECK COMPRESSOR',27:'CYCLE PAUSED',28:'SPARE 6',29:'SPARE 7',30:'SPARE 8',31:'SPARE 9'};

client = new Paho.MQTT.Client(hostName, port, mqttID);

client.onConnectionLost = function (responseObject) {
    alert("connection lost: " + responseObject.errorMessage);
};

client.onMessageArrived = function (message) {
  
    var count = 0;
    var mandrelCount =0;
    var extruderCount =0;
    var testingCount =0;
    var vulcaniserCount =0;

  //  console.log("Message Got : " + message.payloadString);    
    if (message.destinationName == 'polyhose1/' || message.destinationName == 'polyhose2/' || message.destinationName == 'polyhose3/') {
        //console.log("Message got : " + message.payloadString);
        var data = JSON.parse(message.payloadString);
        //console.log(data.set1['B_R_4-0']);

        $.each(data.tags, function( index, value ) {
          //  console.log( index + ": " + value );
             $('#'+index).html(value);
             if(value == 1){
                
                const almNum = parseInt(index.substr(8, 2));
                //const machineName = str.substr(0, 5);
                //alert(almNum);
                $('#alarm_'+index).show();
                if(index.startsWith('M-B_A')){
                    $('#'+index).html(colAlBraider[almNum]);
                    count++;
                }else if(index.startsWith('M-M_A')){
                    $('#'+index).html(colAlMandrel[almNum]);
                    mandrelCount++;
                }else if(index.startsWith('M-E_A')){
                    $('#'+index).html(colAlExtruder[almNum]);
                    extruderCount++;
                }else if(index.startsWith('M-T_A')){
                    $('#'+index).html(colAlTesting[almNum]);
                testingCount++;

                }else if(index.startsWith('M-V_A')){
                    $('#'+index).html(colAlVulcanizer[almNum]);
                       vulcaniserCount++;

                }

              //  $('#'+index +' img:first-child').attr("src","dist/img/red.png");

            }else{
                $('#alarm_'+index).hide();
              //  $('#'+index +' img:first-child').attr("src","dist/img/green.png");
            }

           

        });
        $('.active_alarm').html(count);
        $('.mandrel_active_alarm').html(mandrelCount);
        $('.extruder_active_alarm').html(extruderCount);
        $('.testing_active_alarm ').html(testingCount);
        $('.vulcaniser_active_alarm').html(vulcaniserCount);
    }

};

var options = {
    useSSL: false,
    userName: userName,
    password: userPass,
    onSuccess: onConnect,
    onFailure: doFail
}

client.connect(options);

function onConnect() {
   // console.log("MQTT Connected ! ");
    client.subscribe("polyhose1/");
    client.subscribe("polyhose2/");
    client.subscribe("polyhose3/");
   // console.log("MQTT Subscribed ! ");

}

function doFail(e) {
    console.log("Failed : " + e.error);
}