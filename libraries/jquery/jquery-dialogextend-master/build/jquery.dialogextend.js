(function(){var a;a=jQuery;a.widget("ui.dialogExtend",{version:"2.0.0",modes:{},options:{closable:true,dblclick:false,titlebar:false,icons:{close:"ui-icon-closethick",restore:"ui-icon-newwin"},load:null,beforeRestore:null,restore:null},_destroy:function(){},_create:function(){this._state="normal";if(!a(this.element[0]).data("ui-dialog")){a.error("jQuery.dialogExtend Error : Only jQuery UI Dialog element is accepted")}this._verifyOptions();this._initStyles();this._initButtons();this._initTitleBar();this._setState("normal");this._on("load",function(b){return console.log("test",b)});return this._trigger("load")},_setState:function(b){a(this.element[0]).removeClass("ui-dialog-"+this._state).addClass("ui-dialog-"+b);return this._state=b},_verifyOptions:function(){var c,d,b;if(this.options.dblclick&&!(this.options.dblclick in this.modes)){a.error("jQuery.dialogExtend Error : Invalid <dblclick> value '"+this.options.dblclick+"'");this.options.dblclick=false}if(this.options.titlebar&&((d=this.options.titlebar)!=="none"&&d!=="transparent")){a.error("jQuery.dialogExtend Error : Invalid <titlebar> value '"+this.options.titlebar+"'");this.options.titlebar=false}b=[];for(c in this.modes){if(this["_verifyOptions_"+c]){b.push(this["_verifyOptions_"+c]())}else{b.push(void 0)}}return b},_initStyles:function(){var c,d,b;if(!a(".dialog-extend-css").length){d="";d+='<style class="dialog-extend-css" type="text/css">';d+=".ui-dialog .ui-dialog-titlebar-buttonpane>a { float: right; }";d+=".ui-dialog .ui-dialog-titlebar-restore { width: 19px; height: 18px; }";d+=".ui-dialog .ui-dialog-titlebar-restore span { display: block; margin: 1px; }";d+=".ui-dialog .ui-dialog-titlebar-restore:hover,";d+=".ui-dialog .ui-dialog-titlebar-restore:focus { padding: 0; }";d+=".ui-dialog .ui-dialog-titlebar ::selection { background-color: transparent; }";d+="</style>"}b=[];return b},_initButtons:function(){var e,f,b,d,c,g=this;d=a(this.element[0]).dialog("widget").find(".ui-dialog-titlebar");e=a('<div class="ui-dialog-titlebar-buttonpane"></div>').appendTo(d);e.css({position:"absolute",top:"50%",right:"0.3em","margin-top":"-10px",height:"18px"});d.find(".ui-dialog-titlebar-close").css({position:"relative","float":"right",top:"auto",right:"auto",margin:0}).find(".ui-icon").removeClass("ui-icon-closethick").addClass(this.options.icons.close).end().appendTo(e).end();e.append('<a class="ui-dialog-titlebar-restore ui-corner-all ui-state-default" href="#"><span class="ui-icon '+this.options.icons.restore+'">restore</span></a>').find(".ui-dialog-titlebar-restore").attr("role","button").mouseover(function(){return a(this).addClass("ui-state-hover")}).mouseout(function(){return a(this).removeClass("ui-state-hover")}).focus(function(){return a(this).addClass("ui-state-focus")}).blur(function(){return a(this).removeClass("ui-state-focus")}).end().find(".ui-dialog-titlebar-close").toggle(this.options.closable).end().find(".ui-dialog-titlebar-restore").hide().click(function(h){h.preventDefault();return g.restore()}).end();c=this.modes;for(b in c){f=c[b];this._initModuleButton(b,f)}return d.dblclick(function(h){if(g.options.dblclick){if(g._state!=="normal"){return g.restore()}else{return g[g.options.dblclick]()}}}).select(function(){return false})},_initModuleButton:function(b,d){var c,e=this;c=a(this.element[0]).dialog("widget").find(".ui-dialog-titlebar-buttonpane");return c.append('<a class="ui-dialog-titlebar-'+b+' ui-corner-all ui-state-default" href="#"><span class="ui-icon '+this.options.icons[b]+'">'+b+"</span></a>").find(".ui-dialog-titlebar-"+b).attr("role","button").mouseover(function(){return a(this).addClass("ui-state-hover")}).mouseout(function(){return a(this).removeClass("ui-state-hover")}).focus(function(){return a(this).addClass("ui-state-focus")}).blur(function(){return a(this).removeClass("ui-state-focus")}).end().find(".ui-dialog-titlebar-"+b).toggle(this.options[d.option]).click(function(f){f.preventDefault();return e[b]()}).end()},_initTitleBar:function(){var b;switch(this.options.titlebar){case false:return 0;case"none":if(a(this.element[0]).dialog("option","draggable")){b=a("<div />").addClass("ui-dialog-draggable-handle").css("cursor","move").height(5);a(this.element[0]).dialog("widget").prepend(b).draggable("option","handle",b)}return a(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").find(".ui-dialog-title").html("&nbsp;").end().css({"background-color":"transparent","background-image":"none",border:0,position:"absolute",right:0,top:0,"z-index":9999}).end();case"transparent":return a(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").css({"background-color":"transparent","background-image":"none",border:0});default:return a.error("jQuery.dialogExtend Error : Invalid <titlebar> value '"+this.options.titlebar+"'")}},state:function(){return this._state},restore:function(){this._trigger("beforeRestore");this._restore();this._setState("normal");this._toggleButtons();return this._trigger("restore")},_restore:function(){if(this._state!=="normal"){return this["_restore_"+this._state]()}},_saveSnapshot:function(){if(this._state==="normal"){this.original_config_resizable=a(this.element[0]).dialog("option","resizable");this.original_config_draggable=a(this.element[0]).dialog("option","draggable");this.original_size_height=a(this.element[0]).dialog("widget").outerHeight();this.original_size_width=a(this.element[0]).dialog("option","width");this.original_size_maxHeight=a(this.element[0]).dialog("option","maxHeight");this.original_position_mode=a(this.element[0]).dialog("widget").css("position");this.original_position_left=a(this.element[0]).dialog("widget").offset().left-a("body").scrollLeft();this.original_position_top=a(this.element[0]).dialog("widget").offset().top-a("body").scrollTop();return this.original_titlebar_wrap=a(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").css("white-space")}},_loadSnapshot:function(){return{config:{resizable:this.original_config_resizable,draggable:this.original_config_draggable},size:{height:this.original_size_height,width:this.original_size_width,maxHeight:this.original_size_maxHeight},position:{mode:this.original_position_mode,left:this.original_position_left,top:this.original_position_top},titlebar:{wrap:this.original_titlebar_wrap}}},_toggleButtons:function(){var e,c,d,b;a(this.element[0]).dialog("widget").find(".ui-dialog-titlebar-restore").toggle(this._state!=="normal").css({right:"1.4em"}).end();d=this.modes;b=[];for(c in d){e=d[c];b.push(a(this.element[0]).dialog("widget").find(".ui-dialog-titlebar-"+c).toggle(this._state!==e.state&&this.options[e.option]))}return b}})}).call(this);(function(){var a;a=jQuery;a.extend(true,a.ui.dialogExtend.prototype,{modes:{collapse:{option:"collapsable",state:"collapsed"}},options:{collapsable:false,icons:{collapse:"ui-icon-triangle-1-s"},beforeCollapse:null,collapse:null},collapse:function(){var b;b=a(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").height()+15;this._trigger("beforeCollapse");this._saveSnapshot();a(this.element[0]).dialog("option",{resizable:false,height:b,maxHeight:b}).on("dialogclose",this._collapse_restore).hide().dialog("widget").find(".ui-dialog-buttonpane:visible").hide().end().find(".ui-dialog-titlebar").css("white-space","nowrap").end().find(".ui-dialog-content");this._setState("collapsed");this._toggleButtons();return this._trigger("collapse")},_restore_collapsed:function(){var b;b=this._loadSnapshot();return a(this.element[0]).show().dialog("widget").find(".ui-dialog-buttonpane:hidden").show().end().find(".ui-dialog-titlebar").css("white-space",b.titlebar.wrap).end().find(".ui-dialog-content").dialog("option",{resizable:b.config.resizable,height:b.size.height,maxHeight:b.size.maxHeight}).off("dialogclose",this._collapse_restore)},_initStyles_collapse:function(){var b;if(!a(".dialog-extend-collapse-css").length){b="";b+='<style class="dialog-extend-collapse-css" type="text/css">';b+=".ui-dialog .ui-dialog-titlebar-collapse { width: 19px; height: 18px; }";b+=".ui-dialog .ui-dialog-titlebar-collapse span { display: block; margin: 1px; }";b+=".ui-dialog .ui-dialog-titlebar-collapse:hover,";b+=".ui-dialog .ui-dialog-titlebar-collapse:focus { padding: 0; }";b+="</style>";return a(b).appendTo("body")}},_collapse_restore:function(){return a(this).dialogExtend("restore")}})}).call(this);(function(){var a;a=jQuery;a.extend(true,a.ui.dialogExtend.prototype,{modes:{maximize:{option:"maximizable",state:"maximized"}},options:{maximizable:false,icons:{maximize:"ui-icon-extlink"},beforeMaximize:null,maximize:null},maximize:function(){var b,c;b=a(window).height()-11;c=a(window).width()-11;this._trigger("beforeMaximize");if(this._state!=="normal"){this._restore()}this._saveSnapshot();if(a(this.element[0]).dialog("option","draggable")){a(this.element[0]).dialog("widget").draggable("option","handle",null).find(".ui-dialog-draggable-handle").css("cursor","text").end()}a(this.element[0]).dialog("widget").css("position","fixed").find(".ui-dialog-content").show().dialog("widget").find(".ui-dialog-buttonpane").show().end().find(".ui-dialog-content").dialog("option",{resizable:false,draggable:false,height:b,width:c,position:{my:"left top",at:"left top"}});this._setState("maximized");this._toggleButtons();return this._trigger("maximize")},_restore_maximized:function(){var b;b=this._loadSnapshot();a(this.element[0]).dialog("widget").css("position",b.position.mode).find(".ui-dialog-titlebar").css("white-space",b.titlebar.wrap).end().find(".ui-dialog-content").dialog("option",{resizable:b.config.resizable,draggable:b.config.draggable,height:b.size.height,width:b.size.width,maxHeight:b.size.maxHeight,position:{my:"left top",at:"left+"+b.position.left+" top+"+b.position.top}});if(a(this.element[0]).dialog("option","draggable")){return a(this.element[0]).dialog("widget").draggable("option","handle",a(this.element[0]).dialog("widget").find(".ui-dialog-draggable-handle").length?a(this.element[0]).dialog("widget").find(".ui-dialog-draggable-handle"):".ui-dialog-titlebar").find(".ui-dialog-draggable-handle").css("cursor","move")}},_initStyles_maximize:function(){var b;if(!a(".dialog-extend-maximize-css").length){b="";b+='<style class="dialog-extend-maximize-css" type="text/css">';b+=".ui-dialog .ui-dialog-titlebar-maximize { width: 19px; height: 18px; }";b+=".ui-dialog .ui-dialog-titlebar-maximize span { display: block; margin: 1px; }";b+=".ui-dialog .ui-dialog-titlebar-maximize:hover,";b+=".ui-dialog .ui-dialog-titlebar-maximize:focus { padding: 0; }";b+="</style>";return a(b).appendTo("body")}}})}).call(this);(function(){var a;a=jQuery;a.extend(true,a.ui.dialogExtend.prototype,{modes:{minimize:{option:"minimizable",state:"minimized"}},options:{minimizable:false,minimizeLocation:"left",icons:{minimize:"ui-icon-minus"},beforeMinimize:null,minimize:null},minimize:function(){var e,b,d,c;b=a(this.element[0]).dialog("widget").find(".ui-dialog-titlebar").height()+15;d=200;if(a("#dialog-extend-fixed-container").length){e=a("#dialog-extend-fixed-container")}else{e=a('<div id="dialog-extend-fixed-container"></div>').appendTo("body")}e.css({position:"fixed",bottom:40,left:1,right:1,"z-index":9999});c=a("<div/>").css({"float":this.options.minimizeLocation,margin:1});e.append(c);a(this.element[0]).data("dialog-extend-minimize-overlay",c);this._trigger("beforeMinimize");this._saveSnapshot();if(a(this.element[0]).dialog("option","draggable")){a(this.element[0]).dialog("widget").draggable("option","handle",null).find(".ui-dialog-draggable-handle").css("cursor","text").end()}a(this.element[0]).dialog("option",{resizable:false,draggable:false,height:b,width:d}).on("dialogclose",this._minimize_removeOverlay).dialog("widget").css("position","static").appendTo(c).find(".ui-dialog-content").dialog("widget").find(".ui-dialog-titlebar").each(function(){var h,f,g;g=a(this);h=g.find(".ui-dialog-titlebar-buttonpane");f=g.find(".ui-dialog-title");return f.css({overflow:"hidden",width:g.width()-h.width()+10})}).end().find(".ui-dialog-content").hide().dialog("widget").find(".ui-dialog-buttonpane:visible").hide().end().find(".ui-dialog-titlebar").css("white-space","nowrap").end().find(".ui-dialog-content");this._setState("minimized");this._toggleButtons();return this._trigger("minimize")},_restore_minimized:function(){var b;b=this._loadSnapshot();a(this.element[0]).dialog("widget").appendTo("body").css({"float":"none",margin:0,position:b.position.mode}).find(".ui-dialog-content").dialog("widget").find(".ui-dialog-title").css("width","auto").end().find(".ui-dialog-content").show().dialog("widget").find(".ui-dialog-buttonpane:hidden").show().end().find(".ui-dialog-titlebar").css("white-space",b.titlebar.wrap).end().find(".ui-dialog-content").dialog("option",{resizable:b.config.resizable,draggable:b.config.draggable,height:b.size.height,width:b.size.width,maxHeight:b.size.maxHeight,position:{my:"left top",at:"left+"+b.position.left+" top+"+b.position.top}}).off("dialogclose",this._minimize_removeOverlay);if(a(this.element[0]).dialog("option","draggable")){a(this.element[0]).dialog("widget").draggable("option","handle",a(this.element[0]).dialog("widget").find(".ui-dialog-draggable-handle").length?a(this.element[0]).dialog("widget").find(".ui-dialog-draggable-handle"):".ui-dialog-titlebar").find(".ui-dialog-draggable-handle").css("cursor","move")}a(this.element[0]).data("dialog-extend-minimize-overlay").remove();return a(this.element[0]).removeData("dialog-extend-overlay")},_initStyles_minimize:function(){var b;if(!a(".dialog-extend-minimize-css").length){b="";b+='<style class="dialog-extend-minimize-css" type="text/css">';b+=".ui-dialog .ui-dialog-titlebar-minimize { width: 19px; height: 18px; }";b+=".ui-dialog .ui-dialog-titlebar-minimize span { display: block; margin: 1px; }";b+=".ui-dialog .ui-dialog-titlebar-minimize:hover,";b+=".ui-dialog .ui-dialog-titlebar-minimize:focus { padding: 0; }";b+="</style>";return a(b).appendTo("body")}},_verifyOptions_minimize:function(){var b;if(!this.options.minimizeLocation||((b=this.options.minimizeLocation)!=="left"&&b!=="right")){a.error("jQuery.dialogExtend Error : Invalid <minimizeLocation> value '"+this.options.minimizeLocation+"'");return this.options.minimizeLocation="left"}},_minimize_removeOverlay:function(){a(this).dialogExtend("restore");a(this).dialog("widget").appendTo(a("body"));a(this).data("dialog-extend-minimize-overlay").remove();return a(this).removeData("dialog-extend-overlay")}})}).call(this);