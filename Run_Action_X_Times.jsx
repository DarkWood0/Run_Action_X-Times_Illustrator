// Repeat action N times
/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"Run Action X Times","preferredSize":[0,0],"margins":16,"orientation":"row","spacing":10,"alignChildren":["left","top"],"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"enabled":true}},"item-36":{"id":36,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-37":{"id":37,"type":"Button","parentId":36,"style":{"text":"Run","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"ok","helpTip":null,"enabled":true}},"item-38":{"id":38,"type":"Button","parentId":36,"style":{"text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"cancel","helpTip":null,"enabled":true}},"item-41":{"id":41,"type":"StaticText","parentId":43,"style":{"text":"Number of repeats","justify":"left","preferredSize":[0,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":false,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-42":{"id":42,"type":"EditText","parentId":43,"style":{"text":"5","preferredSize":[44,0],"alignment":null,"varName":null,"helpTip":null,"softWrap":false,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"enabled":true,"justify":"left"}},"item-43":{"id":43,"type":"Group","parentId":46,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-44":{"id":44,"type":"StaticText","parentId":46,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Enter action full name","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-45":{"id":45,"type":"EditText","parentId":46,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"","justify":"left","preferredSize":[300,0],"alignment":"left","helpTip":null}},"item-46":{"id":46,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-47":{"id":47,"type":"StaticText","parentId":46,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Enter actions set name","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-48":{"id":48,"type":"EditText","parentId":46,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Default Actions","justify":"left","preferredSize":[300,0],"alignment":"left","helpTip":null}},"item-49":{"id":49,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}}},"order":[0,46,44,45,47,48,43,41,42,49,36,37,38],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"functionWrapper":false,"compactCode":false,"showDialog":true,"itemReferenceList":"None"}}
*/ 

// DIALOG
// ======
var dialog = new Window("dialog"); 
    dialog.text = "Run Action X Times"; 
    dialog.orientation = "row"; 
    dialog.alignChildren = ["left","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

// GROUP1
// ======
var group1 = dialog.add("group", undefined, {name: "group1"}); 
    group1.orientation = "column"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

var statictext1 = group1.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "Enter action full name"; 

var edittext1 = group1.add('edittext {properties: {name: "edittext1"}}'); 
    edittext1.preferredSize.width = 300; 
    edittext1.alignment = ["left","center"]; 

var statictext2 = group1.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "Enter actions set name"; 

var edittext2 = group1.add('edittext {properties: {name: "edittext2"}}'); 
    edittext2.text = "Default Actions"; 
    edittext2.preferredSize.width = 300; 
    edittext2.alignment = ["left","center"]; 

// GROUP2
// ======
var group2 = group1.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

var statictext3 = group2.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "Number of repeats"; 

var edittext3 = group2.add('edittext {properties: {name: "edittext3"}}'); 
    edittext3.text = "5"; 
    edittext3.preferredSize.width = 44; 

// DIALOG
// ======
var divider1 = dialog.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

// GROUP3
// ======
var group3 = dialog.add("group", undefined, {name: "group3"}); 
    group3.orientation = "column"; 
    group3.alignChildren = ["fill","top"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

var ok = group3.add("button", undefined, undefined, {name: "ok"}); 
    ok.text = "Run"; 

var cancel = group3.add("button", undefined, undefined, {name: "cancel"}); 
    cancel.text = "Cancel"; 

var done = false;
while (!done) {
	var x = dialog.show();
	if (x == 2) {
		done = true;
	} else {
		var XTimes = parseInt(edittext3.text);
		for (var a = 0; a < XTimes; a++) {
			app.doScript(edittext1.text, edittext2.text);
		}
		done = true;
	}
}