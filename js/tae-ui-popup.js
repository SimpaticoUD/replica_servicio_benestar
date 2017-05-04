$( function() {
	$(document).tooltip();
});

/**
 * TAE UI OPERATIONS
 */
var taeUI = new function() {

	this.colors = {
		simplify: '#000'
	}

	this.labels = {
		dialogTitle: 'Text enrichment',
		tabSyntSimpTitle: 'Simplified text',
		tabDefinitionsTitle: 'Definitions',
		tabSimplificationTitle: 'Semplification',
		tabWikipediaTitle: 'Wikipedia',
		entryMessage: 'Select an action',
		notextMessage: 'No text selected'

	};

	/**
	 * INITIALIZE UI COMPONENT.
	 * CONFIG PARAMETERS:
	 * - endpoint: URL OF THE TAE API ENDPOINT
	 * - dialogTitle:  title of the dialog
	 * - tabSyntSimpTitle: title of the syntactic simplification tab
	 * - tabDefinitionsTitle: title of the definitions tab
	 * - tabSimplificationTitle: title of the simplification tab
	 * - tabWikipediaTitle: text on the wikipedia tab
	 * - entryMessage: text on the default tab
	 * - notextMessage: text to shwo when no text selected
	 */
	this.init = function(config) {
		config = config || {};
		taeEngine.init({endpoint: config.endpoint, lang: config.lang});
		this.labels.dialogTitle = config.dialogTitle || this.labels.dialogTitle;
		this.labels.tabSyntSimpTitle = config.tabSyntSimpTitle || this.labels.tabSyntSimpTitle;
		this.labels.tabDefinitionsTitle = config.tabDefinitionsTitle || this.labels.tabDefinitionsTitle;
		this.labels.tabSimplificationTitle = config.tabSimplificationTitle || this.labels.tabSimplificationTitle;
		this.labels.tabWikipediaTitle = config.tabWikipediaTitle || this.labels.tabWikipediaTitle;
		this.labels.entryMessage = config.entryMessage || this.labels.entryMessage;
		this.labels.notextMessage = config.notextMessage || this.labels.notextMessage;
		this.colors.simplify = config.simplifyColor || this.colors.simplify;

		taeUI.dialog_simplify = $(
				'<div id="dialog-simplify" title="'+taeUI.labels.dialogTitle+'">'+
				'	<div id="tabs">'+
				'		<ul>'+
				'			<li><a href="#tab-0">Simpatico</a></li>'+
				'			<li><a href="#tab-synt-simp">'+taeUI.labels.tabSyntSimpTitle+'</a></li>'+
				'			<li><a href="#tab-definizioni">'+taeUI.labels.tabDefinitionsTitle+'</a></li>'+
				'			<li><a href="#tab-semplificazione">'+taeUI.labels.tabSimplificationTitle+'</a></li>'+
				'			<li><a href="#tab-wikipedia">'+taeUI.labels.tabWikipediaTitle+'</a></li>'+
				'		</ul>'+
				'		<div id="tab-0">'+
				'			<p>'+taeUI.labels.entryMessage+'</p>'+
				'		</div>'+
				'		<div id="tab-synt-simp">'+
				'			<p>Loading...</p>'+
				'		</div>'+
				'		<div id="tab-definizioni">'+
				'			<p>Loading...</p>'+
				'		</div>'+
				'		<div id="tab-semplificazione">'+
				'			<p>Loading...</p>'+
				'		</div>'+
				'		<div id="tab-wikipedia">'+
				'			<p>Funzione non implementata</p>'+
				'		</div>'+
				'	</div>'+
				'</div>'
			).dialog({
			autoOpen: false,
			modal: true,
			resizable: true,
			height: "auto",
			width: 600,
			buttons: {
				close: function() {
					$(this).dialog( "close" );
				}
			}
		});
		taeUI.dialog_simplify.tabs({
			beforeActivate: function( event, ui ) {
				var cb = setInnerText(ui.newPanel["0"].id);
				var errCb = setError(ui.newPanel["0"].id);

				if(ui.newPanel["0"].id == "tab-0") {
					if(!!taeUI.selectedText) {
						ui.newPanel["0"].innerHTML = '<p>'+taeUI.labels.entryMessage+'</p>';
					} else {
						ui.newPanel["0"].innerHTML = '<p>'+taeUI.labels.notextMessage+'</p>';
					}
				} if(ui.newPanel["0"].id == "tab-synt-simp") {
					if(!!taeUI.selectedText) {
						ui.newPanel["0"].innerHTML = '<p>Loading...</p>';
						taeEngine.getSimplifiedText(taeUI.selectedText, cb, errCb);
					} else {
						ui.newPanel["0"].innerHTML = '<p>'+taeUI.labels.notextMessage+'</p>';
					}
				} if(ui.newPanel["0"].id == "tab-definizioni") {
					if(!!taeUI.selectedText) {
						ui.newPanel["0"].innerHTML = '<p>Loading...</p>';
						taeEngine.getDefinitions(taeUI.selectedText, cb, errCb);
					} else {
						ui.newPanel["0"].innerHTML = '<p>'+taeUI.labels.notextMessage+'</p>';
					}
				} if(ui.newPanel["0"].id == "tab-semplificazione") {
					if(!!taeUI.selectedText) {
						ui.newPanel["0"].innerHTML = '<p>Loading...</p>';
						taeEngine.getExplanations(taeUI.selectedText, cb, errCb);
					} else {
						ui.newPanel["0"].innerHTML = '<p>'+taeUI.labels.notextMessage+'</p>';
					}
				} else if(ui.newPanel["0"].id == "tab-wikipedia") {
					if(!!taeUI.selectedText) {
						ui.newPanel["0"].innerHTML = '<p>Loading...</p>';
						taeEngine.wikipedia(taeUI.selectedText, cb, errCb);
					} else {
						ui.newPanel["0"].innerHTML = '<p>'+taeUI.labels.notextMessage+'</p>';
					}
				}
			},
			load:function( event, ui ) {
	  		/* After page load*/
	  	}
		});

	}

	/**
	 * CURRENTLY SELECTED TEXT DATA: text, word, position (if apply)
	 */
	this.selectedText = null;

	this.dialog_simplify = null;

	/**
	 * OPEN TAE UI DIALOG FOR CURRENTLY SELECTED TEXT
	 */
	this.showDialog = function() {
		this.selectedText = getSelectedTextData();
		this.dialog_simplify.tabs( "option", "active", 0);
		var disabled = [];
		if (!this.selectedText || !this.selectedText.text) disabled = [0,1,2,3,4];
		else if (this.selectedText.word) disabled.push(1);
		this.dialog_simplify.tabs("option", "disabled", disabled);
		this.dialog_simplify.dialog("open");

	}
	this.hideDialog = function() {
		this.dialog_simplify.dialog("close");
	}

	/**
	 * FIND AND UPDATE THE TEXT ELEMENTS FOR SIMPLIFICATION. THE
	 * TEXT TO SIMPLIFY SHOULD BE ANNOTATED WITH THE simp-text-paragraph ANNOTATION
	 */
	this.activateSimplification = function() {
		$('.simp-text-paragraph').each(function(i){
			var p = $(this);
			p.attr("id", "sp"+i++);
	        p.css('position','relative');
	        p.css('borderLeft', "thick solid " + taeUI.colors.simplify);
	        p.on("click", function(){
	        	doSimplify(p.attr('id'));
	        });
		});
	}
	/**
	 * FIND AND UPDATE THE TEXT ELEMENTS FOR SIMPLIFICATION
	 */
	this.deactivateSimplification = function() {
		$('.simp-text-paragraph').each(function(i){
			var p = $(this);
			if (p.attr('id').indexOf('_simplified')>0) {
				p.remove();
			}
			else {
		        p.css('display', "");
		        p.css('borderLeft', "0");
		        p.css('borderBottom', "0");
		        p.unbind("click");
			}
		});
	}

	function doSimplify(id) {
		var p = $('#'+id);
		p.css('borderBottom', 'thick solid ' + taeUI.colors.simplify);
		taeEngine.getSimplifiedText(p.text(),function(txt) {
			var cpy = p.clone();
			cpy.attr('id',id+'_simplified');
			cpy.attr('display','none');
			cpy.on('click', function() {
				cpy.remove();
				p.fadeIn(400);
			});
			cpy.text(txt);
			p.fadeOut(400, function(){
				cpy.appendTo(p.parent());
			});
		});
	}

	function getSelectedTextData(){
	  var textData = {text:''};

	  if (window.getSelection()) {
	      textData.text = window.getSelection().toString().trim();
	      if (!textData.text.match(/(\s)/i)) {
	    	  textData.word = textData.text;
	    	  var selection = window.getSelection();
	    	  if (selection && selection.anchorNode) {
	    		  textData.text = selection.anchorNode.textContent;
	    	  }
	      }
	  } else if (document.selection && document.selection.type != "Control") {
		  textData.text = document.selection.createRange().text;
	      if (!textData.text.match(/(\s)/i)) {
	    	  textData.word = textData.text;
	    	  var selection = window.getSelection();
	    	  if (selection && selection.anchorNode) {
	    		  textData.text = selection.anchorNode.value;
	    	  }
	      }
	  }
	  if (!textData.text) return null;
	  return textData;
	};

	function setInnerText(target) {
		var targetElement = document.getElementById(target);
		return function(text) {
			targetElement.innerHTML = '<p>' + text + '</p>';
		}
	}

	function setError(target) {
		var targetElement = document.getElementById(target);
		return function(text) {
			targetElement.innerHTML = '<p>' + text + '</p>';
		}
	}

};
