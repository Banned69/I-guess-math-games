var div1='';
var preloadx1=277;var preloady1=139;
var preloadx2=0;var preloady2=0;
document.write('<div id="preload_div" style="position:absolute;top:'+preloady1+'px;left:'+preloadx1+'px;width:300px;height:250px;transition: all 0.5s ease-out;"><SCRIPT language="Javascript">var cpmstar_rnd=Math.round(Math.random()*999999);var cpmstar_pid=71337;document.writeln("<SCR"+"IPT language=\'Javascript\' src=\'//server.cpmstar.com/view.aspx?poolid="+cpmstar_pid+"&script=1&rnd="+cpmstar_rnd+"\'></SCR"+"IPT>");</SCRIPT></div><br><span id="preload_continue" style="position:absolute;top:420px;left:310px;width:219px;border:1px solid #000;border-radius: 4px;background:#0f0;font-size:21px;padding:3px 9px 3px 9px;color:#00f;cursor:pointer;text-align:center;" onclick="preload_hide();">Loading...</span>');
var preload_div_el=document.getElementById('preload_div');
function preload_hide(){if(preloadx2>=0){preload_div_el.style.left=preloadx2+'px';preload_div_el.style.top=preloady2+'px';}else{preload_div_el.style.display="none";}document.getElementById("preload_continue").style.display="none";for (var i=0;i<div1.length;i++){document.getElementById(div1[i]).style.display="block";}}function preload_done(){document.getElementById("preload_continue").innerHTML="CONTINUE TO GAME"}setTimeout(preload_done,6e3)