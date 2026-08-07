// ************ Save stuff ************
// ************ Save stuff ************
function save(force) {
	NaNcheck(player)
	if (NaNalert && !force) return
	localStorage.setItem(modInfo.id, JSON.stringify(player));
	localStorage.setItem(modInfo.id+"_options", JSON.stringify(options));
}
function startPlayerBase() {
	return {
		tab: layoutInfo.startTab,
		navTab: (layoutInfo.showTree ? layoutInfo.startNavTab : "none"),
		time: Date.now(),
		notify: {},
		versionType: modInfo.id,
		version: VERSION.num,
		beta: VERSION.beta,
		timePlayed: 0,
		keepGoing: false,
		hasNaN: false,
		hideChallenges: false,
		hideNews: false,
		showStory: true,
		anim: true,
		grad: true,
		forceOneTab: false,
		points: modInfo.initialStartPoints,
		subtabs: {},
		lastSafeTab: (readData(layoutInfo.showTree) ? "none" : layoutInfo.startTab)
	};
}
function getStartPlayer() {
	playerdata = startPlayerBase();

	if (addedPlayerData) {
		extradata = addedPlayerData();
		for (thing in extradata)
			playerdata[thing] = extradata[thing];
	}

	playerdata.infoboxes = {};
	for (layer in layers) {
		playerdata[layer] = getStartLayerData(layer);

		if (layers[layer].tabFormat && !Array.isArray(layers[layer].tabFormat)) {
			playerdata.subtabs[layer] = {};
			playerdata.subtabs[layer].mainTabs = Object.keys(layers[layer].tabFormat)[0];
		}
		if (layers[layer].microtabs) {
			if (playerdata.subtabs[layer] == undefined)
				playerdata.subtabs[layer] = {};
			for (item in layers[layer].microtabs)
				playerdata.subtabs[layer][item] = Object.keys(layers[layer].microtabs[item])[0];
		}
		if (layers[layer].infoboxes) {
			if (playerdata.infoboxes[layer] == undefined)
				playerdata.infoboxes[layer] = {};
			for (item in layers[layer].infoboxes)
				playerdata.infoboxes[layer][item] = false;
		}

	}
	return playerdata;
}
function getStartLayerData(layer) {
	layerdata = {};
	if (layers[layer].startData)
		layerdata = layers[layer].startData();

	if (layerdata.unlocked === undefined)
		layerdata.unlocked = true;
	if (layerdata.total === undefined)
		layerdata.total = decimalZero;
	if (layerdata.best === undefined)
		layerdata.best = decimalZero;
	if (layerdata.resetTime === undefined)
		layerdata.resetTime = 0;
	if (layerdata.forceTooltip === undefined)
		layerdata.forceTooltip = false;

	layerdata.buyables = getStartBuyables(layer);
	if (layerdata.noRespecConfirm === undefined) layerdata.noRespecConfirm = false
	if (layerdata.clickables == undefined)
		layerdata.clickables = getStartClickables(layer);
	layerdata.spentOnBuyables = decimalZero;
	layerdata.upgrades = [];
	layerdata.milestones = [];
	layerdata.lastMilestone = null;
	layerdata.achievements = [];
	layerdata.challenges = getStartChallenges(layer);
	layerdata.grid = getStartGrid(layer);
	layerdata.prevTab = ""

	return layerdata;
}
function getStartBuyables(layer) {
	let data = {};
	if (layers[layer].buyables) {
		for (id in layers[layer].buyables)
			if (isPlainObject(layers[layer].buyables[id]))
				data[id] = decimalZero;
	}
	return data;
}
function getStartClickables(layer) {
	let data = {};
	if (layers[layer].clickables) {
		for (id in layers[layer].clickables)
			if (isPlainObject(layers[layer].clickables[id]))
				data[id] = "";
	}
	return data;
}
function getStartChallenges(layer) {
	let data = {};
	if (layers[layer].challenges) {
		for (id in layers[layer].challenges)
			if (isPlainObject(layers[layer].challenges[id]))
				data[id] = 0;
	}
	return data;
}
function getStartGrid(layer) {
	let data = {};
	if (! layers[layer].grid) return data
	if (layers[layer].grid.maxRows === undefined) layers[layer].grid.maxRows=layers[layer].grid.rows
	if (layers[layer].grid.maxCols === undefined) layers[layer].grid.maxCols=layers[layer].grid.cols

	for (let y = 1; y <= layers[layer].grid.maxRows; y++) {
		for (let x = 1; x <= layers[layer].grid.maxCols; x++) {
			data[100*y + x] = layers[layer].grid.getStartData(100*y + x)
		}
	}
	return data;
}

function fixSave() {
	defaultData = getStartPlayer();
	fixData(defaultData, player);

	for (layer in layers) {
		if (player[layer].best !== undefined)
			player[layer].best = new Decimal(player[layer].best);
		if (player[layer].total !== undefined)
			player[layer].total = new Decimal(player[layer].total);

		if (layers[layer].tabFormat && !Array.isArray(layers[layer].tabFormat)) {

			if (!Object.keys(layers[layer].tabFormat).includes(player.subtabs[layer].mainTabs))
				player.subtabs[layer].mainTabs = Object.keys(layers[layer].tabFormat)[0];
		}
		if (layers[layer].microtabs) {
			for (item in layers[layer].microtabs)
				if (!Object.keys(layers[layer].microtabs[item]).includes(player.subtabs[layer][item]))
					player.subtabs[layer][item] = Object.keys(layers[layer].microtabs[item])[0];
		}
	}
}
function fixData(defaultData, newData) {
	for (item in defaultData) {
		if (defaultData[item] == null) {
			if (newData[item] === undefined)
				newData[item] = null;
		}
		else if (Array.isArray(defaultData[item])) {
			if (newData[item] === undefined)
				newData[item] = defaultData[item];

			else
				fixData(defaultData[item], newData[item]);
		}
		else if (defaultData[item] instanceof Decimal) { // Convert to Decimal
			if (newData[item] === undefined)
				newData[item] = defaultData[item];

			else
				newData[item] = new Decimal(newData[item]);
		}
		else if ((!!defaultData[item]) && (typeof defaultData[item] === "object")) {
			if (newData[item] === undefined || (typeof defaultData[item] !== "object"))
				newData[item] = defaultData[item];

			else
				fixData(defaultData[item], newData[item]);
		}
		else {
			if (newData[item] === undefined)
				newData[item] = defaultData[item];
		}
	}
}
function load() {
let get = localStorage.getItem(modInfo.id);

	if (get === null || get === undefined) {
		player = getStartPlayer();
		options = getStartOptions();
	}
	else {
		// 检测是否为旧的 Base64 加密存档
		if (get.startsWith('e') || get.startsWith('E') || get.startsWith('ey') || get.match(/^[A-Za-z0-9+/=]+$/)) {
			try {
				// Base64 解码
				let decoded = atob(get);
				// 处理可能的 URI 编码
				try { decoded = decodeURIComponent(escape(decoded)); } catch(e) {}
				player = Object.assign(getStartPlayer(), JSON.parse(decoded));
				console.log("Migrated old Base64 save to plain JSON");
				// 立即用新格式保存
				localStorage.setItem(modInfo.id, JSON.stringify(player));
			} catch(e) {
				console.error("Failed to decrypt old save:", e);
				player = getStartPlayer();
			}
		} else {
			try {
				player = Object.assign(getStartPlayer(), JSON.parse(get));
			} catch(e) {
				console.error("Failed to parse save:", e);
				player = getStartPlayer();
			}
		}
		fixSave();
		loadOptions();
	}

	if (options.offlineProd) {
		if (player.offTime === undefined)
			player.offTime = { remain: 0 };
		player.offTime.remain += (Date.now() - player.time) / 1000;
	}
	player.time = Date.now();
	versionCheck();
	changeTheme();
	changeTreeQuality();
	updateLayers();
	setupModInfo();

	setupTemp();
	updateTemp();
	updateTemp();
	updateTemp();
	updateTemp();
	updateTabFormats()
	loadVue();
	updateTemp()
	updateTemp()
	updateTemp()
	updateTemp()
	updateTemp()
	versionCheck();
	startInterval()
	slider = document.getElementById("myRange")
	if (slider) slider.value = player.up
}

function loadOptions() {
	let get2 = localStorage.getItem(modInfo.id+"_options");
	if (get2) {
		// 检测旧加密格式
		if (get2.startsWith('e') || get2.startsWith('E') || get2.match(/^[A-Za-z0-9+/=]+$/)) {
			try {
				let decoded = atob(get2);
				try { decoded = decodeURIComponent(escape(decoded)); } catch(e) {}
				options = Object.assign(getStartOptions(), JSON.parse(decoded));
				// 用新格式重写
				localStorage.setItem(modInfo.id+"_options", JSON.stringify(options));
			} catch(e) {
				options = getStartOptions();
			}
		} else {
			try {
				options = Object.assign(getStartOptions(), JSON.parse(get2));
			} catch(e) {
				options = getStartOptions();
			}
		}
	}
	else 
		options = getStartOptions()
	if (themes.indexOf(options.theme) < 0) theme = "default"
	fixData(options, getStartOptions())
}

function setupModInfo() {
	modInfo.changelog = changelog;
	modInfo.winText = winText ? winText : `Congratulations! You have reached the end and beaten this game, but for now...`;

}
function fixNaNs() {
	NaNcheck(player);
}
function NaNcheck(data) {
	for (item in data) {
		if (data[item] == null) {
		}
		else if (Array.isArray(data[item])) {
			NaNcheck(data[item]);
		}
		else if (data[item] !== data[item] || checkDecimalNaN(data[item])) {
			if (!NaNalert) {
				clearInterval(interval);
				NaNalert = true;
				alert("Invalid value found in player, named '" + item + "'. Please let the creator of this mod know! You can refresh the page, and you will be un-NaNed.")
				return
			}
		}
		else if (data[item] instanceof Decimal) {
		}
		else if ((!!data[item]) && (data[item].constructor === Object)) {
			NaNcheck(data[item]);
		}
	}
}
function exportSave() {
	let str = JSON.stringify(player);

	const el = document.createElement("textarea");
	el.value = str;
	document.body.appendChild(el);
	el.select();
	el.setSelectionRange(0, 99999);
	document.execCommand("copy");
	document.body.removeChild(el);
}
function importSave(imported = undefined, forced = false) {
	if (imported === undefined)
		imported = prompt("Paste your save here");
	try {
		let parsedData;
		
		// 检测是否为 Base64 加密格式（以 eyJ 开头或符合 Base64 特征）
		if (imported.match(/^[A-Za-z0-9+/=]+$/) && imported.length > 50) {
			try {
				// 尝试 Base64 解密
				let decoded = atob(imported);
				try { decoded = decodeURIComponent(escape(decoded)); } catch(e) {}
				parsedData = JSON.parse(decoded);
				console.log("Imported as Base64 encrypted save");
			} catch(e) {
				// Base64 解密失败，尝试直接解析
				parsedData = JSON.parse(imported);
				console.log("Imported as plain JSON save");
			}
		} else {
			// 直接作为纯 JSON 解析
			parsedData = JSON.parse(imported);
			console.log("Imported as plain JSON save");
		}
		
		tempPlr = Object.assign(getStartPlayer(), parsedData);
		
		if (tempPlr.versionType != modInfo.id && !forced && !confirm("This save appears to be for a different mod! Are you sure you want to import?"))
			return;
			
		player = tempPlr;
		player.versionType = modInfo.id;
		
		fixSave();
		versionCheck();
		NaNcheck(player);
		
		save();
		window.location.reload();
	} catch (e) {
		alert("导入失败！请检查你粘贴的内容是否正确。\n错误详情: " + e.message);
		console.error("Import Error:", e);
	}
}

function layerText(elem, layer, text) {
	return "<" + elem + " style='color:" + tmp[layer].color + ";text-shadow:0px 0px 10px;'>" + text + "</" + elem + ">"
}

function colorText(elem, color, text) {
	return "<" + elem + " style='color:" + color + ";text-shadow:0px 0px 10px;'>" + text + "</" + elem + ">"
}

function versionCheck() {
	let setVersion = true;

	if (player.versionType === undefined || player.version === undefined) {
		player.versionType = modInfo.id;
		player.version = 0;
	}

	if (setVersion) {
		if (player.versionType == modInfo.id && VERSION.num > player.version) {
			player.keepGoing = false;
			if (fixOldSave)
				fixOldSave(player.version);
		}
		player.versionType = getStartPlayer().versionType;
		player.version = VERSION.num;
		player.beta = VERSION.beta;
	}
}
var saveInterval = setInterval(function () {
	if (player === undefined)
		return;
	if (tmp.gameEnded && !player.keepGoing)
		return;
	if (options.autosave)
		save();
}, 5000);

window.onbeforeunload = () => {
    if (player.autosave) {
        save();
    }
};