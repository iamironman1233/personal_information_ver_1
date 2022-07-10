function clickIE4() {
		return 2 == event.button ? !1 : void 0
	}

	function clickNS4(e) {
		return !(document.layers || document.getElementById && !document.all) || 2 != e.which && 3 != e.which ? void 0 : !1
	}
	var message = "Haizz";
	document.addEventListener("keydown", function(e) {
		e.ctrlKey && e.preventDefault()
	}), document.layers ? (document.captureEvents(Event.MOUSEDOWN), document.onmousedown = clickNS4) : document.all && !document.getElementById && (document.onmousedown = clickIE4), document.oncontextmenu = new Function("return false"), document.onkeypress = function(e) {
		return e = e || window.event, 123 == e.keyCode ? !1 : void 0
	}, document.onmousedown = function(e) {
		return e = e || window.event, 123 == e.keyCode ? !1 : void 0
	}, document.onkeydown = function(e) {
		return e = e || window.event, 123 == e.keyCode ? !1 : void 0
	};
