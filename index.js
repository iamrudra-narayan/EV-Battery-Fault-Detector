const fetchData = async () => {
    var res = await fetch(
      "https://api.thingspeak.com/channels/1955486/fields/1.json?results="
    );
    var feildData = await res.json();
 
    if (feildData) {
      console.log(feildData.feeds[feildData.feeds.length - 1].field1);
      getISS(feildData.feeds[feildData.feeds.length - 1].field1);
    }
  };
  // fetchData();
  async function getISS(data) {
    console.log(data);
    function value(data) {
      return data;
    }
    var temp_data = value(data);

    setInterval(value, 1000);
    if (temp_data >= 35) {
      document.getElementById("ct").innerHTML=
        "<p style='color:red;FONT-SIZE:25PX;font-family:arial;'><b>Warning</b></p><iframe width=31 height=22 style=border: 0px solid #cccccc= src=https://thingspeak.com/channels/1955486/widgets/55808=></iframe><p style='color:red;FONT-SIZE:15PX;font-family:arial;padding-left:10px;'><b>Your Vehicle Battery suffering at Over Temperature!</b></p><p style='color:red;FONT-SIZE:20PX;font-family:monospace;padding-left:10px;'><b>Your Vehicle Battery is in Danger State</b></p><audio autoplay/><source src='/syron.mpeg' type='audio/mp3' style='visibility:hidden;'></audio>";
      const myTimeout = setTimeout(myGreeting, 2000);
      function myGreeting() {
        if (confirm("Press Ok to disconnect the BMS!")) {
        document.getElementById("ct").innerHTML =
            "<h2 style='color:black;FONT-SIZE:18PX;margin-top:4px;'><b><u>ALERT</u></b></h2><img src='disconnect.png' style='height:310px;width:310px;margin-top:5px;'><p style='color:red;FONT-SIZE:15PX'><p style='color:green;FONT-SIZE:18PX;padding-left:50px'><b>Your EV BMS Successfully Disconnected!</b></p>";
        } else {
          const myTimeout = setTimeout(cancel, 5000);
          function cancel() {
            document.getElementById("ct").innerHTML =
              "<h2 style='color:black;FONT-SIZE:18PX;margin-top:15px;'><b><u>ALERT</u></b></h2><img src='disconnect.png' style='height:310px;width:310px;margin-top:15px;'><p style='color:red;FONT-SIZE:15PX'><p style='color:green;FONT-SIZE:18PX;padding-left:50px'><b>Your EV BMS Automatically Disconnected!</b></p>";
          }
        }
      }
    } else {
      document.getElementById("ct").innerHTML =
        "<img src='http://shorturl.at/kAMO1' style='height:260px;width:310px;margin-top:-15px;' loop='infinite' alt='Computer man'/><h2 style='margin-top:15px;color:green;font-size:16px;font-weight:700;font-family:arial'>You Are Running in Safe Way.</h2>";
    }
  }
  setInterval(() => {
    fetchData();
  }, 16000);
  fetchData();
