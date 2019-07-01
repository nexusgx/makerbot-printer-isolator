// ==UserScript==
// @name         Makerbot monitor
// @namespace    https://github.com/nexusgx/makerbot-printer-isolator
// @version      1.1
// @description  Isolate the makerbot print monitor
// @author       nexusgx
// @match        https://my.makerbot.com/printers
// @grant        none
// ==/UserScript==

(function() {

    setTimeout(addBtn,1000);
    // Your code here...
})();
var elemsToHide=".nav-spacer,.site-header,.makerbot-footer,.separator,.support-note,.printers .page-title,#start-print,#accounts .row .col-md-3,#content .printers .col-md-6:first-child";
var styles=
    '.ring{width:200px !important;height: 200px !important;}'+
    '#accounts .printer ul.status{font-size:2em}'+
    '#accounts .printer .printer-controls button:before{width:100px;height:100px;background-size:100px}'+
    '#accounts .printer .printer-controls button{height:150px;font-size:28px}';
function addBtn(){
    $('body').prepend('<style id="monitorstyles"></style>'+
        '<button id="monitorprinter" style="width: 100%;font-size: 20px;color: #fff;background-color: #a22;border: 1px solid #efefef;position: absolute;top: 0;left: 0;z-index:10000;">MONITOR PRINTER</button>'+
        '<button id="hidemonitor" style="width: 100%;font-size: 20px;color: #fff;background-color: #2a2;border: 1px solid #efefef;position: absolute;top: 0;left: 0; display:none;z-index:10000;">HIDE MONITOR</button>'
    );
    $('#monitorprinter').on('click',function(){
        $(elemsToHide).hide();
        $('#monitorstyles').text(styles);
        $('object').attr('style','width:100%');
        $("#accounts .row .col-md-8").addClass('col-md-12'); //widen the printer column
        $('#content .printers .col-md-6:last-child').addClass('col-md-12'); //widen the printer display
        $('#monitorprinter').hide();
        $('#hidemonitor').show();

    });
    $('#hidemonitor').on('click',function(){ //revert everything
        $(elemsToHide).show();
        $('#monitorstyles').text('');
        $('object').attr('style','');
        $("#accounts .row .col-md-8").removeClass('col-md-12');
        $('#content .printers .col-md-6:last-child').removeClass('col-md-12');
        $('#monitorprinter').show();
        $('#hidemonitor').hide();
    });
}
