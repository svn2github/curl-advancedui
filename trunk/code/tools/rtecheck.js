// Copyright (C) 1998-2008, Sumisho Computer Systems Corp. All Rights Reserved.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//
// @authors Masaki Kodan, Akira Mori
//
var local = new Array('local_developer');

for(var i in local){
   var name = local[i];
   on[name]      = new Image();
   on[name].src  = docroot + "./images/" + name + "_on.gif"; 
   off[name]     = new Image();
   off[name].src = docroot + "./images/" + name + "_off.gif";
}



function CheckRTE(url, name, version, open, checkpageopen, width, height){

	var popup=window.open('', checkpageopen, "width=" + width + ", height=" + height + ", resizable=yes, scrollbars=yes, status=yes");
	popup.document.writeln("<html>");
		
	popup.document.writeln("<HEAD><TITLE>Curl RTE checker</TITLE>");

	var os = GetOsName();
	if(os == "Mac" || os == "UNIX" || os == "Other"){
		popup.document.writeln("<BODY>");
		popup.document.writeln("<script language=\"javascript\" type=\"text/javascript\">");
		popup.document.writeln("<!--");
		popup.document.write("   document.writeln(\"<img src='./images/check1.gif' width='700' height='60'>\")\;     ");
		popup.document.writeln("document.writeln(\"<br>" + name + "を立ち上げています\")\;");
	    popup.document.writeln("document.writeln(\"<br>\")\;");
	    popup.document.writeln("document.writeln(\"しばらくお待ちください\")\;");
	    popup.document.writeln("document.writeln(\"<br>\")\;");
	    
	    popup.document.writeln("var newpopup");
	    
	    popup.document.writeln("       setTimeout(  'newpopup=window.open(\"" + url + "\", \"" + open + "\")'   , 500);                     ");
	    popup.document.writeln("       setTimeout(  'newpopup.window.close()'   , 5000);                     ");
	    popup.document.writeln("// -->");
		popup.document.writeln("</script>");
	    
		popup.document.writeln("</BODY>");
		
		popup.document.writeln("</html>");
		return;
	}

	popup.document.writeln("<script language=\"javascript\" type=\"text/javascript\">");
	popup.document.writeln("<!--");
	popup.document.writeln("// netscape/opera/konqueror");
	popup.document.writeln("var curlinstalled = 0\;");
	
	popup.document.writeln("var curlversion6 = 0\;");
	popup.document.writeln("var curlversion5 = 0\;");
	popup.document.writeln("var curlversion4 = 0\;");
	popup.document.writeln("var curlversion3 = 0\;");
	popup.document.writeln("var curlversion2 = 0\;");
	popup.document.writeln("MSDetect = \"false\"\;");

	popup.document.writeln("if (navigator.mimeTypes && navigator.mimeTypes.length)");
	popup.document.writeln("{");
	    popup.document.writeln("x = navigator.mimeTypes[\"text/vnd.curl\"];");
	    popup.document.writeln("if (x && x.enabledPlugin)");
	        popup.document.writeln("curlinstalled = 2\;");
	    popup.document.writeln("else");
	        popup.document.writeln("curlinstalled = 1\;");
	        
	    popup.document.writeln("x = navigator.mimeTypes[\"text/vnd.curl.surge.6.0\"];");
	    popup.document.writeln("if (x && x.enabledPlugin)");
	        popup.document.writeln("curlversion6 = 2\;");
	    popup.document.writeln("else");
	        popup.document.writeln("curlversion6 = 1\;");
	    
	    popup.document.writeln("x = navigator.mimeTypes[\"text/vnd.curl.surge.5.0\"];");
	    popup.document.writeln("if (x && x.enabledPlugin)");
	        popup.document.writeln("curlversion5 = 2\;");
	    popup.document.writeln("else");
	        popup.document.writeln("curlversion5 = 1\;");
	        
	    popup.document.writeln("x = navigator.mimeTypes[\"text/vnd.curl.surge.4.0\"];");
	    popup.document.writeln("if (x && x.enabledPlugin)");
	        popup.document.writeln("curlversion4 = 2\;");
	    popup.document.writeln("else");
	        popup.document.writeln("curlversion4 = 1\;");
	        
	    popup.document.writeln("x = navigator.mimeTypes[\"text/vnd.curl.surge.3.0\"];");
	    popup.document.writeln("if (x && x.enabledPlugin)");
	        popup.document.writeln("curlversion3 = 2\;");
	    popup.document.writeln("else");
	        popup.document.writeln("curlversion3 = 1\;");
	    popup.document.writeln("x = navigator.mimeTypes[\"text/vnd.curl.surge.2.0\"];");
	    popup.document.writeln("if (x && x.enabledPlugin)");
	        popup.document.writeln("curlversion2 = 2\;");
	    popup.document.writeln("else");
	        popup.document.writeln("curlversion2 = 1\;");
	popup.document.writeln("}");
	popup.document.writeln("else if (navigator.plugins && navigator.plugins.length)");
	popup.document.writeln("{");
	
		popup.document.writeln("x = navigator.plugins[\"Curl RTE 6.0 Plug-in\"]\;");
	    popup.document.writeln("if (x)");
	    popup.document.writeln("{");
	        popup.document.writeln("curlinstalled = 2\;");
	        popup.document.writeln("curlversion6 = 2\;");
	    popup.document.writeln("}");
	
	    popup.document.writeln("x = navigator.plugins[\"Curl RTE 5.0 Plug-in\"]\;");
	    popup.document.writeln("if (x)");
	    popup.document.writeln("{");
	        popup.document.writeln("curlinstalled = 2\;");
	        popup.document.writeln("curlversion5 = 2\;");
	    popup.document.writeln("}");
	    
	    popup.document.writeln("x = navigator.plugins[\"Curl RTE 4.0 Plug-in\"]\;");
	    popup.document.writeln("if (x)");
	    popup.document.writeln("{");
	        popup.document.writeln("curlinstalled = 2\;");
	        popup.document.writeln("curlversion4 = 2\;");
	    popup.document.writeln("}");
	    popup.document.writeln("x = navigator.plugins[\"Curl RTE 3.0 Plug-in\"]\;");
	    popup.document.writeln("if (x)");
	    popup.document.writeln("{");
	        popup.document.writeln("curlinstalled = 2\;");
	        popup.document.writeln("curlversion3 = 2\;");
	    popup.document.writeln("}");
	    popup.document.writeln("x = navigator.plugins[\"Curl RTE 2.0 Plug-in\"]\;");
	    popup.document.writeln("if (x)");
	    popup.document.writeln("{");
	        popup.document.writeln("curlinstalled = 2\;");
	        popup.document.writeln("curlversion2 = 2\;");
	    popup.document.writeln("}");
	popup.document.writeln("}");
	popup.document.writeln("else");
	popup.document.writeln("{");
	   popup.document.writeln(" MSDetect = \"true\"\;");
	popup.document.writeln("}");
	
	
	
	popup.document.writeln("// -->");
	popup.document.writeln("</script>");
	
	
	
	popup.document.writeln("<SCRIPT LANGUAGE=\"VBScript\">");
	popup.document.writeln("on error resume next");
	popup.document.writeln("If MSDetect = \"true\" Then");
	    popup.document.writeln("If Not(IsObject(CreateObject(\"Curl.Applet\"))) Then");
	    popup.document.writeln("Else curlinstalled = 2");
	    popup.document.writeln("End if");
	    
	    popup.document.writeln("If Not(IsObject(CreateObject(\"Curl.Surge.6.0\"))) Then");
	    popup.document.writeln("Else curlversion6 = 2");
	    popup.document.writeln("End If");
	    
	    popup.document.writeln("If Not(IsObject(CreateObject(\"Curl.Surge.5.0\"))) Then");
	    popup.document.writeln("Else curlversion5 = 2");
	    popup.document.writeln("End If");
	    popup.document.writeln("If Not(IsObject(CreateObject(\"Curl.Surge.4.0\"))) Then");
	    popup.document.writeln("Else curlversion4 = 2");
	    popup.document.writeln("End If");
	    popup.document.writeln("If Not(IsObject(CreateObject(\"Curl.Surge.3.0\"))) Then");
	    popup.document.writeln("Else curlversion3 = 2");
	    popup.document.writeln("End If");
		popup.document.writeln("If Not(IsObject(CreateObject(\"Curl.Surge.2.0\"))) Then");
	    popup.document.writeln("Else curlversion2 = 2");
	    popup.document.writeln("End If");
	popup.document.writeln("End If");
	popup.document.writeln("If curlinstalled = 0 Then curlinstalled = 1 End If");
	popup.document.writeln("</SCRIPT>");
	popup.document.writeln("</HEAD>");

	popup.document.writeln("<BODY>");
	//popup.document.writeln("<p>");

	popup.document.writeln("<script language=\"javascript\" type=\"text/javascript\">");
	popup.document.writeln("<!--");
	popup.document.writeln("progversion = 0\;");

	
	var versionname = "初期値";
	if (version == 6){
		versionname = "curlversion6";
	} else if (version == 5){
		versionname = "curlversion5";
	} else if (version == 4){
		versionname = "curlversion4";
	} else if (version == 3) {
		versionname = "curlversion3";
	} else if (version == 2) {
		versionname = "curlversion2";
	}
	
	popup.document.write("   document.writeln(\"<img src='./images/check1.gif' width='700' height='60'>\")\;     ");
	
	
	//テスト用
	/*
	popup.document.writeln("document.writeln(\"<br>curlinstalled=\" + curlinstalled)\;");
	popup.document.writeln("document.writeln(\"<br>curlversion5=\" + curlversion5)\;")
	popup.document.writeln("document.writeln(\"<br>curlversion4=\" + curlversion4)\;")
	popup.document.writeln("document.writeln(\"<br>curlversion3=\" + curlversion3)\;")
	popup.document.writeln("document.writeln(\"<br>curlversion2=\" + curlversion2)\;")
	popup.document.writeln("document.writeln(\"<br>progversion=\" + progversion)\;");
	popup.document.writeln("document.writeln(\"<br>versionname=" + versionname + "\")\;");
	
	popup.document.writeln("curlinstalled = 22");
	popup.document.writeln("curlversion5 = 1");
	popup.document.writeln("curlversion4 = 1");
	popup.document.writeln("curlversion3 = 1");
	popup.document.writeln("curlversion2 = 1");
	popup.document.writeln("document.writeln(\"<br><br>\")\;");
	*/
	
	popup.document.writeln("if (curlinstalled == 2){");
	    popup.document.writeln("if ("     + versionname +          "== 2) {");
	    	popup.document.writeln("document.writeln(\"<br>" + name + "を立ち上げています\")\;");
	    	popup.document.writeln("document.writeln(\"<br>\")\;");
	    	popup.document.writeln("document.writeln(\" しばらくお待ちください\")\;");
	    	popup.document.writeln("document.writeln(\"<br>\")\;");
	    	//popup.document.writeln("             window.open(\"" + url + "\", \"" + open + "\")\;                 ");
	    	
	    	popup.document.writeln("var newpopup");
	    	
	    	popup.document.writeln("       setTimeout(  'newpopup=window.open(\"" + url + "\", \"" + open + "\")'   , 500);                     ");
	    	popup.document.writeln("       setTimeout(  'newpopup.window.close()'   , 5000);                     ");
	    popup.document.writeln("} else {");
	    	popup.document.writeln("if ('"     + versionname +          "' == 'curlversion6') {");
	    		popup.document.writeln("var downurl = 'http://www.curlap.com/download/rte/index.html';"); 
	    		
	    	popup.document.writeln("} else if ('"     + versionname +          "' == 'curlversion5') {");
	    		popup.document.writeln("var downurl = 'http://www.curlap.com/download/old_rte/v5.html';"); 
	    	popup.document.writeln("} else if ('"     + versionname +          "' == 'curlversion4') {");
	    		popup.document.writeln("var downurl = 'http://www.curlap.com/download/old_rte/v4.html';"); 
	    	popup.document.writeln("} else if ('"     + versionname +          "' == 'curlversion3') {");
	    		popup.document.writeln("var downurl = 'http://www.curlap.com/download/old_rte/v3.html';"); 
	    	popup.document.writeln("} else if ('"     + versionname +          "' == 'curlversion2') {");
	    		popup.document.writeln("var downurl = 'http://www.curlap.com/download/old_rte/v2.html';"); 
	    	popup.document.writeln("} else {");
	    		popup.document.writeln("var downurl = 'http://www.curlap.com/download/rte/index.html';"); 
	    	popup.document.writeln("}");
	    
		popup.document.writeln("document.writeln(\"<br><p>" + name + " を動作させるのに必要なCurlのバージョンがインストールされていません/p>\")\;");
		popup.document.writeln("document.writeln(\"<br>\")\;");
	    	popup.document.writeln("document.writeln(\"<p>Curl バージョン " + version + " をインストールしてください</p><br><br>\")\;");
	    	
	    	popup.document.writeln("  document.writeln(\"<a href= \" + downurl + \"><p><img src='/public/images/rte_dl_bt.gif' width='300' height='36' border='0' ></p></a><br><br>\")\;  ");
	    popup.document.writeln("}");
	popup.document.writeln("}else if (curlinstalled == 1){");
	    popup.document.writeln("document.writeln(\"<br><p>このアプリを動かすには最新の Curl RTE が必要です。</p><br>\")\;");
		popup.document.writeln("document.writeln(\"<p>ここからダウンロードしてください。</p><br><p><a href='http://www.curlap.com/download/rte/index.html'><img src='http://www.curlap.com/shared/rte_dl_bt.gif' width='300' height='36' border='0' ></a></p>\")\;");
	popup.document.writeln("}else{");
		popup.document.writeln("document.writeln(\"<br>Curl RTE がインストールされているかどうかを確認できませんでした。 <br>\")\;");
	   	popup.document.writeln("document.writeln(\"" + name + "を動作させる場合は Curl RTE をインストールしてください<br><br><a href='http://www.curlap.com/download/rte/index.html'><img src='http://www.curlap.com/shared/rte_dl_bt.gif' width='300' height='36' border='0' ></a><br>\")\;");
	  	popup.document.writeln("document.writeln(\"<br><br>\")\;");
	  	popup.document.writeln("document.writeln(\"Curl RTE がインストールされている方はこちらから・・・<br>\")\;");
	  	popup.document.writeln("document.writeln(\"<a href=' " + url + " 'target='" + open + "'>" + name + "</a> 起動\")\;");
	popup.document.writeln("}");
	
	/*
	document.write("   document.writeln(\"<table font-size='1' align='center' bgcolor='silver' width='710' border='0' cellpadding='0' cellspacing='0' summary='レイアウト用'>\")\;     ");
	document.write("   document.writeln(\"<tbody><tr>\")\;     ");
	document.write("   document.writeln(\"<td><p>Copyright 2008 Sumisho Computer Systems Corporation. All rights reserved.</p></td>\")\;     ");
	document.write("   document.writeln(\"<td nowrap'><a href='http://www.curlap.com/terms/index.html'>免責事項</a></td>\")\;     ");
	document.write("   document.writeln(\"<td nowrap><a href='http://www.curlap.com/privacy/index.html'>プライバシーポリシー</a></td>\")\;     ");
	document.write("   document.writeln(\"</tr></tbody>\")\;     ");
	document.write("   document.writeln(\"</table>\")\;     ");
	*/
	
	popup.document.writeln("// -->");
	popup.document.writeln("</script></p>");
	popup.document.writeln("</BODY>");
	popup.document.writeln("</HTML>");
	popup.document.close();
	
}

function GetOsName(){
    var osname = navigator.userAgent.toUpperCase();
    if(osname.indexOf("WIN") >= 0){
        return "Windows";
    } else if(osname.indexOf("MAC") >= 0){
        return "Mac";
    } else if(osname.indexOf("X11") >= 0){
        return "UNIX";
    } else {
        return "Other";
    }
}