let modInfo = {
	name: "Plague Tree (Vorona Cirus Treesease)",
	id: "c0v1d",
	author: "Vorona",
	pointsName: "cases",
    pointsNameSingular: "case",
	discordName: "",
	discordLink: "",
	changelogLink: "https://github.com/Acamaeda/The-Modding-Tree/blob/master/changelog.md",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	offlineLimit: 0.05,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.6.25",
	name: "Vorona Cirus AnT-CTNA",
}

let changelog = `<h1>更新日志：</h1><br>
        <h3>v0.6.25</h3><br>
        - 添加了 AnTNA<br>
        - 添加了 9 个 CTNA 里程碑<br>
        - 添加了 11 个未增强病毒升级<br>
        - 添加了 15 个未增强病毒里程碑<br>
        - 添加了一个未增强病毒可购买项<br>
        - 添加了 3 个增强剂升级<br>
        - 添加了一个未接种层升级<br>
        - 添加了 6 个反距离升级<br>
        - 添加了 6 个成就<br>
        v0.6.24.1<br>
        - 修复了 T 热键在"增强剂疫苗"中重置 CTNA 并被踢出挑战的问题。<br>
        <h3>v0.6.24</h3><br>
        - 添加了致命乌鸦<br>
        - 添加了 5 个未增强病毒升级<br>
        - 添加了 11 个未增强病毒里程碑<br>
        - 添加了 2 个未增强病毒可购买项<br>
        - 添加了一个增强剂升级<br>
        - 添加了 2 个未接种层升级<br>
        - 添加了 2 个反距离升级<br>
        - 添加了 5 个成就<br>
        <h3>v0.6.23</h3><br>
        - 添加了致命突变<br>
        - 添加了 5 个未增强病毒升级<br>
        - 添加了 7 个未增强病毒里程碑<br>
        - 添加了一个增强剂升级<br>
        - 添加了一个未接种层升级<br>
        - 添加了 5 个反距离升级<br>
        - 添加了 5 个成就<br>
        <h3>v0.6.22</h3><br>
        - 添加了一个未接种层<br>
        - 添加了 6 个未增强病毒升级<br>
        - 添加了 3 个未增强病毒里程碑<br>
        - 添加了一个增强剂升级<br>
        - 添加了一个反距离升级<br>
        - 添加了 3 个成就<br>
        v0.6.21.1<br>
        - 修复了冠状病毒突变 9+ 的成本<br>
        <h3>v0.6.21</h3><br>
        - 添加了突变的 rRNA<br>
        - 添加了 12 个未增强病毒升级<br>
        - 添加了一个未接种层升级<br>
        - 添加了一个增强剂升级<br>
        - 添加了 4 个反距离升级<br>
        - 添加了 4 个成就<br>
        - 更改了 SARS 突变名称。<br>
        <h3>v0.6.20</h3><br>
        - 添加了未增强病毒<br>
        - 添加了一个未接种层升级<br>
        - 添加了 2 个增强剂升级<br>
        - 添加了 6 个反距离升级<br>
        - 添加了 4 个成就<br>
        - 修复了隔离 UC 获取指数应用两次的错误。<br>
        v0.6.19.1<br>
        - 在 1 小时重置时间处为升级 '73' 添加了软上限<br>
        - 修复了 AdChallenges NaN 错误<br>
        <h3>v0.6.19</h3><br>
        - 添加了一个未接种层<br>
        - 添加了一个未接种层升级<br>
        - 添加了 2 个增强剂升级<br>
        - 添加了 10 个反距离升级<br>
        - 添加了 5 个成就。<br>
        - 修复了未解锁未接种层时热键重置的问题。<br>
        - 修复了"自动保存已关闭"错误。<br>
        v0.6.18.1<br>
        - 添加了反距离软上限<br>
        - 修复了"抗灭活"成就提示<br>
        <h3>v0.6.18</h3><br>
        - 添加了反距离<br>
        - 添加了 4 个增强剂升级<br>
        - 添加了一个未接种层升级<br>
        - 添加了 5 个反增强剂升级<br>
        - 添加了 5 个成就。<br>
        <h3>v0.6.17</h3><br>
        - 添加了符号表示法<br>
        - 添加了一个增强剂升级<br>
        - 添加了一个未接种层升级<br>
        - 添加了 3 个反增强剂升级<br>
        - 添加了 4 个成就。<br>
        - 添加了一个层。<br>
        v0.6.16.1<br>
        - 修复了"增强剂疫苗"中病例获取过低的问题<br>
        <h3>v0.6.16</h3><br>
        - 添加了 2 个增强剂升级<br>
        - 添加了 6 个反增强剂升级<br>
        - 添加了 4 个成就。<br>
        - 添加了一个层。<br>
        <h3>v0.6.15</h3><br>
        - 添加了反增强剂<br>
        - 添加了 5 个成就。<br>
        - 添加了一个层。<br>
        - 添加了单数/复数词语。<br>
        v0.6.14.1<br>
        - 修复了"你已超出终局"错误<br>
        - 修复了不应在"增强剂疫苗"外购买的未接种层升级<br>
        <h3>v0.6.14</h3><br>
        - 添加了一个挑战。<br>
        - 添加了一个可购买项。<br>
        - 添加了一个侧边层。<br>
        - 添加了 2 个层。<br>
        - 添加了 3 个成就。<br>
        - 添加了病例表示（来自 NG+++）。<br>
        - 更改了反轮盘可点击项。<br>
        v0.6.13.1<br>
        - 修复了绿色连败错误<br>
        <h3>v0.6.13</h3><br>
        - 添加了 AdVaccines。<br>
        - 添加了不良挑战。<br>
        - 添加了 3 个反轮盘可点击项。<br>
        - 添加了 5 个成就。<br>
        - 添加了一个成就奖励（Corona GAS）。<br>
        <h3>v0.6.12</h3><br>
        - 添加了不良反疫苗者。<br>
        - 添加了 3 个不良疫苗。<br>
        - 添加了 3 个成就。<br>
        <h3>v0.6.11</h3><br>
        - 添加了不良疫苗。<br>
        - 添加了 2 个疫苗接种升级。<br>
        - 添加了 2 个成就。<br>
        <h3>v0.6.10</h3><br>
        - 添加了疫苗接种。<br>
        - 添加了一个不良效果升级。<br>
        - 添加了 2 个成就。<br>
        v0.6.9.2<br>
        - 修复了复制体效果错误。<br>
        v0.6.9.1<br>
        - 修复了 In'F'inite CASES 成就错误。<br>
        <h3>v0.6.9</h3><br>
        - 添加了 6 个不良效果升级。<br>
        - 添加了一个不良效果可购买项。<br>
        - 添加了 2 个成就。<br>
        <h3>v0.6.8</h3><br>
        - 添加了逆境。<br>
        - 添加了 2 个不良效果可购买项。<br>
        - 添加了 3 个成就。<br>
        v0.6.7.2<br>
        - 添加了 2 个成就奖励。<br>
        v0.6.7.1<br>
        - 修复了不良可购买项的名称和显示。<br>
        - 修复了自我绿色和指数效果升级显示错误。<br>
        <h3>v0.6.7</h3><br>
        - 添加了不良效果。<br>
        - 添加了 2 个反接种者可购买项。<br>
        - 添加了 3 个成就。<br>
        <h3>v0.6.6</h3><br>
        - 添加了副作用。<br>
        - 添加了 4 个反接种者可购买项。<br>
        - 添加了 3 个成就。<br>
        - 修复了 NaN 随意错误。<br>
        <h3>v0.6.5</h3><br>
        - 添加了反疫苗者。<br>
        - 添加了一个反口罩者可购买项。<br>
        - 添加了 3 个反轮盘可购买项。<br>
        - 添加了 7 个成就。<br>
        - 添加了更新速率滑块。<br>
        <h3>v0.6.4</h3><br>
        - 添加了绿色赌注。<br>
        - 添加了 4 个反轮盘可购买项。<br>
        - 添加了 4 个成就。<br>
        - 将固定提示的按键从 Shift 改为 Ctrl。<br>
        <h3>v0.6.3</h3><br>
        - 添加了反轮盘。<br>
        - 添加了 2 个反口罩者可购买项。<br>
        - 添加了 4 个成就。<br>
        v0.6.2.1<br>
        - 修复了新闻滚动条错误。<br>
        - 修复了 OOM/s 错误。<br>
        - 修复了维度成本错误。<br>
        <h3>v0.6.2</h3><br>
        - 添加了反口罩者。<br>
        - 添加了 3 个可购买项。<br>
        - 添加了 2 个成就。<br>
        <h3>v0.6.1</h3><br>
        - 添加了 5 个里程碑。<br>
        - 添加了 6 个可购买项。<br>
        - 添加了 4 个成就。<br>
        <h2 style = color:#93d281;>v0.6</h2><br>
        - 添加了 CTNA。<br>
        - 添加了 3 个更多的 mRNA 升级。<br>
        - 添加了 8 个更多的成就。<br>
        <h3>v0.5.7</h3><br>
        - 添加了 CRNA。<br>
        - 添加了 4 个成就。<br>
        <h3>v0.5.6</h3><br>
        - 添加了冠状病毒突变。<br>
        - 添加了 2 个成就。<br>
        <h3>v0.5.5</h3><br>
        - 添加了 MMNA。<br>
        - 添加了 2 个成就。<br>
        <h3>v0.5.4</h3><br>
        - 添加了 mRNA。<br>
        - 添加了 3 个成就。<br>
        <h3>v0.5.3</h3><br>
        - 添加了分子。<br>
        - 添加了 3 个成就。<br>
        <h3>v0.5.2</h3><br>
        - 添加了 RNA。<br>
        - 添加了 2 个成就。<br>
        - 添加了 2 个里程碑。<br>
        <h3>v0.5.1</h3><br>
        - 添加了 6 个感染体和隔离升级。<br>
        - 添加了一个可购买项。<br>
        - 减少了游戏卡顿<br>
        <h2 style = color:#93d281;>v0.5</h2><br>
        - 添加了感染体。<br>
        - 添加了 7 个更多的 CV 升级。<br>
        - 添加了 11 个更多的成就。<br>
        <h3>v0.4.4</h3><br>
        - 添加了随意病毒。<br>
        - 添加了更多的伤亡升级。<br>
        <h3>v0.4.3</h3><br>
        - 添加了新闻按钮。<br>
        - 添加了伤亡（AD 中的无限）。<br>
        <h3>v0.4.2</h3><br>
        - 添加了新闻滚动条。<br>
        - 添加了致命维度转移。<br>
        <h3>v0.4.1</h3><br>
        - 添加了致命性。<br>
        - 添加了成就。<br>
        <h2 style = color:#93d281;>v0.4</h2><br>
        - 添加了症状挑战。<br>
        - 重新平衡。<br>
        <h3>v0.3.3</h3><br>
        - 添加了死亡。<br>
        <h3>v0.3.2</h3><br>
        - 添加了康复。<br>
        - 添加了更多的症状升级。<br>
        <h3>v0.3.1</h3><br>
        - 添加了症状。<br>
        <h2 style = color:#93d281;>v0.3</h2><br>
        - 添加了脱壳体挑战。<br>
        - 添加了更多的脱壳体升级。<br>
        <h3>v0.2.2</h3><br>
        - 添加了更多的脱壳体升级。<br>
        - 使第一个脱壳体升级基于最佳值。<br>
        <h3>v0.2.1</h3><br>
        - 添加了脱壳体。<br>
        - 添加了（硬上限）。<br>
        - 重命名为瘟疫树 (Vorona Cirus Treesease)。<br>
        <h2 style = color:#93d281;>v0.2</h2><br>
        - 添加了统计信息。<br>
        - 添加了复制体。<br>
        - 添加了（软上限）。<br>
        - 重命名为 Vorona Cirus Treesease。<br>
        <h2 style = color:#93d281;>v0.1</h2><br>
        - 发布（COVID 树）。<br>
        - 添加了病毒点数。<br>
        - 添加了病例。<br>
`
let winText = `Congratulations! You have reached the end and infected this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

function canGenPoints(){
	let can=false
	if(hasVUpg(11)) can = getVUpgEff(11)
	return can
}
function getGainMult(){
	let gain = decimalOne
    let c22c = challengeCompletions("u", 11)+challengeCompletions("u", 12)+challengeCompletions("u", 21)+challengeCompletions("u", 22)-5
    c22c = Decimal.add(c22c, 1)
    c22c = Decimal.pow(5, c22c)
    if(hasVUpg(12)) gain = gain.mul(getVUpgEff(12))
    if(hasVUpg(13)) gain = gain.mul(getVUpgEff(13))
    if(hasVUpg(21)) gain = gain.mul(getVUpgEff(21))
    gain = gain.mul(tmp.i.effect).mul(tmp.r.effect).mul(tmp.u.effect).mul(tmp.d.effect).mul(tmp.f.effect).mul(tmp.a.effect).mul(tmp.ct.effect)
    if (player.s.unlocked) gain = gain.mul(tmp.s.severityEff);
    if (inChallenge("u", 22)) gain = Decimal.mul(gain ,c22c)
	return gain
}
function getGainExp(){
	let exp = decimalOne
    if (inChallenge("s", 11)) exp = exp.mul(0.1)
    if (inChallenge("s", 12)) exp = exp.mul(0.01)
    if (inChallenge("s", 21)) exp = exp.mul(0.03)
    if (hasDUpg(43)) exp = exp.mul(getDUpgEff(43))
    if (hasFUpg(43)) exp = exp.mul(getFUpgEff(43))
    if (hasFUpg(44)) exp = exp.mul(getFUpgEff(44))
    if (hasFUpg(95)) exp = exp.mul(getFUpgEff(95))
    if (hasFUpg(125)) exp = exp.mul(getFUpgEff(125))
    if (hasFUpg(143)) exp = exp.mul(tmp.f.upgrades[143].effect2)
    exp = exp.mul(tmp.d.buyables[13].effect)
    exp = exp.mul(tmp.e.peffect)
    if (hasFUpg(156)) exp = exp.mul(getFUpgEff(156))
    if (hasFUpg(157)) exp = exp.mul(tmp.f.upgrades[157].effect2)
    if (hasUpgrade("e",221)) exp = exp.mul(upgradeEffect("e",221))
	return exp
}
function getGainpowExp(){
	let exp = decimalOne
    if (player.e.c.gt(0)) exp = exp.mul(tmp.e.Ceffect)
    if (hasFUpg(144)) exp = exp.mul(getFUpgEff(144))
    if (hasFUpg(176)) exp = exp.mul(getFUpgEff(176))
    if (hasUpgrade("e",133)) exp = exp.mul(upgradeEffect("e",133))
    if (hasUpgrade("e",153)) exp = exp.mul(upgradeEffect("e",153))
    if (hasUpgrade("e",43)) exp = exp.mul(upgradeEffect("e",43))
    if (hasUpgrade("e",181)) exp = exp.mul(upgradeEffect("e",181))
    if (hasUpgrade("e",196)) exp = exp.mul(upgradeEffect("e",196))
    if (hasUpgrade("e",222)) exp = exp.mul(upgradeEffect("e",222))
    if (hasUpgrade("e",223)) exp = exp.mul(upgradeEffect("e",223))
    if (hasUpgrade("e",303)) exp = exp.mul(upgradeEffect("e",303))
    if (hasUpgrade("e",211)) exp = exp.mul(tmp.e.upgrades[211].effect2)
	return exp
}
function getGainSlog(){
	let slog = decimalZero
    if (hasUpgrade("ct",285)) slog = slog.add(tmp.ct.upgrades[285].effect)
    if (hasUpgrade("ct",331) && player.ct.inC) slog = slog.add(tmp.ct.upgrades[264].effect.min(1e10))
	return slog
}
function getGainMultSlog(){
	let mult = decimalOne
    let exp = player.ct.upgrades.filter(x=>x>410).length
    if (hasUpgrade("ct",415)) exp = exp**2
    if (hasUpgrade("ct",422)) exp = exp**2
    if (hasUpgrade("Uv",11)) mult = mult.mul(upgradeEffect("Uv",11))
    if (hasUpgrade("Uv",31)) mult = mult.mul(upgradeEffect("Uv",31))
    if (hasUpgrade("Ur",13)) mult = mult.mul(upgradeEffect("Ur",13))
    if (hasMilestone("Ui",4)) mult = mult.mul(milestoneEffect("Ui",4))
    if (hasAchievement("a",204)) mult = mult.mul(player.a.points.max(1))
    mult = mult.mul(tmp.Uv.effect).mul(tmp.Uv.buyables[11].effect).mul(tmp.Ui.effect)
    if (hasUpgrade("ct",401)) mult = mult.mul(tmp.ct.upgrades[401].effect)
    if (hasUpgrade("ct",411)) mult = mult.mul(Decimal.pow(2,exp))
	return mult.mul(tmp.Ui.pathEff)
}
function getGainpowSlog(){
	let mult = decimalOne
    if (hasUpgrade("Uv",22)) mult = mult.mul(upgradeEffect("Uv",22))
    if (hasUpgrade("Ui",12)) mult = mult.mul(upgradeEffect("Ui",12))
    if (hasUpgrade("Up",31)) mult = mult.mul(upgradeEffect("Up",31))
	return mult
}
function getBaseGain(){
	let mult = decimalOne
    if (hasUpgrade("ct",404)) mult = mult.mul(tmp.ct.upgrades[404].effect)
    if (hasUpgrade("ct",471)) mult = mult.mul(tmp.ct.upgrades[471].effect)
    if (hasAchievement("a",205) && player.s.points.gte(1)) mult = mult.mul(player.a.points.max(1))
    if (hasAchievement("a",212) && player.d.points.gte(1)) mult = mult.mul(player.a.points.max(1))
    if (hasAchievement("a",216) && player.f.points.gte(1)) mult = mult.mul(player.a.points.max(1))
	return mult.mul(tmp.Ui.buyables[11].effect)
}
function getMultSlog(){
	let mult = decimalOne
    if (hasUpgrade("uv",11)) mult = mult.mul(tmp.uv.upgrades[11].effect)
    if (hasUpgrade("ct",431)) mult = mult.mul(tmp.ct.upgrades[431].effect)
	return mult
}

function getPointBase() {
    let gain = new Decimal(0.1)
    let cap = tmp.e.icap
    if(!canGenPoints()) gain = decimalZero
    gain = gain.mul(getGainMult())
    gain = gain.pow(getGainExp())
    gain = powExp(gain,getGainpowExp())
    if (inChallenge("e",12) || player.e.inC) gain = gain.add(1).log10()
    if (player.e.inC) gain = powExp(gain,tmp.e.qExp)
    if (hasUpgrade("e",311)) gain = powExp2(gain,upgradeEffect("e",311))
    if (hasUpgrade("e",325)) gain = powExp2(gain,upgradeEffect("e",325))
	gain = gain.min(cap)
    if (hasUpgrade("ct",194)) gain = gain.pow(upgradeEffect("ct",194))
    if (inChallenge("ct",12)) gain = gain.pow(tmp.ct.getAVaxEff)
    if (player.ct.inC) {
        gain = powSlog(gain,tmp.ct.clickables[31].exp)
        if (gain.gte(tet10(30))) gain = tet10(slog(gain).log10().div(Decimal.log10(30)).pow(tmp.ct.clickables[31].exp).mul(Decimal.log10(30)).pow10())
    }
    gain = tet10(slog(gain).add(getGainSlog()).min(1.79769e308))
    gain = tet10(slog(gain).mul(getMultSlog()).min(1.79769e308))
    if (inChallenge("ct", 11)) gain = powSlog(gain,0.5)
    if (inChallenge("ct", 12)) gain = powSlog(gain,0.6)
    if (inChallenge("ct", 21)) gain = powSlog(gain,0.5)
    if (inChallenge("ct", 22)) gain = powSlog(gain,0.5)
    if (inChallenge("ct", 31)) {
        let cmul = player.ct.asv.pow(0.4).max(1)
        if (challengeCompletions("ct",31)>1) cmul = player.ct.asv.pow(0.3).max(1).div(420)
        if (challengeCompletions("ct",31)>2) cmul = player.ct.asv.pow(0.15).max(1).div(2022)
        if (challengeCompletions("ct",31)>3) cmul = player.ct.asv.pow(0.123).max(1).div(1e9)
        gain = gain.mul(cmul)
    }
    return gain.min(tet10(1.79769e308))
}

function getPointGen() {
    let gain = getPointBase()
    let mult = getGainMultSlog()
    let exp = tmp.ct.getBoosterExp
    if (inChallenge("ct", 32)) gain = slogadd(slog(gain).mul(getBaseGain()).pow(getGainpowSlog()),tmp.ct.getBoosterSlog).min(mult.pow(tmp.uv.slogCap).max("ee10")).div(1e9).mul(mult).pow(exp).min("eeeeee33")
    return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
    newsTotal: decimalZero,
    lastSave: new Date().getTime(),
    toggleKeys: false,
    cases: false,
    ca:0,
    infectivity: false,
    ms: 50,
    options:false,
    notation:'Scientific',
}}
var shiftDown = false

window.addEventListener('keydown', function(event) {
	if (player.toggleKeys) {
		if (event.keyCode == 16) shiftDown = !shiftDown;
		if (event.keyCode == 17) controlDown = !controlDown;
	} else {
		if (event.keyCode == 16) shiftDown = true;
		if (event.keyCode == 17) controlDown = true;
	}
}, false);

window.addEventListener('keyup', function(event) {
	if (player.toggleKeys) return 
	if (event.keyCode == 16) shiftDown = false;
	if (event.keyCode == 17) controlDown = false;
}, false);
function convertToB16(n){
    let codes = {
            0: "0",
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            10: "A",
            11: "B",
            12: "C",
            13: "D",
            14: "E",
            15: "F",
    }
    let x = n % 16
    return codes[(n-x)/16] + codes[x]
}
function getUndulatingColor(period = Math.sqrt(760)){
        let t = new Date().getTime()
        let a = Math.sin(t / 1e3 / period * 2 * Math.PI + 0) 
        let b = Math.sin(t / 1e3 / period * 2 * Math.PI + 2)
        let c = Math.sin(t / 1e3 / period * 2 * Math.PI + 4)
        a = convertToB16(Math.floor(a*128) + 128)
        b = convertToB16(Math.floor(b*128) + 128)
        c = convertToB16(Math.floor(c*128) + 128)
        return "#"+String(a) + String(b) + String(c)
}
// Display extra things at the top of the page
var displayThings = [
    function(){
        let x = getUndulatingColor()
		let a = "Current endgame: "+colorText("h2", x,format("eeeee6e15"))/*"Taeyeon"*/+" cases in 'Booster Vaccine' (v0.6.25)"
        let b = inChallenge("ct",32)?"<br>'Booster Vaccine' progress: "+format(slog(player.points.max(1)).div(Decimal.pow(2,1024).log10()).mul(100))+"%":""
        
		return a + b+ (options.autosave ? "" : ". Warning: autosave is off")
	},
	function(){
		let a = new Date().getTime() - player.lastSave
		let b = "Last save was " + formatTime(a/1000) + " ago."
		if (lastTenTicks.length < 10) return b
		let c = 0
		for (i = 0; i<10; i++){
			c += lastTenTicks[i] / 10000
		}
        let d = isEndgame()?makeBlue("<br>You are past endgame,<br>and the game might not be balanced here."):""
		return b + " Average TPS = " + format(c, 3) + "s/tick."+d
	}
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte("eeeee6e15") && inChallenge("ct",32)
}


// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(1) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
    if(oldVersion=="0.6.3"){
        if (hasAchievement("a",143)) addPoints("a",5)
        if (hasAchievement("a",144)) addPoints("a",5)
	}
    if(oldVersion=="0.6.9"){
        if (player.points.lt(tet10(Decimal.pow(2,1024).log10())) && hasAchievement("a",182)) {
            player.a.achievements.splice(player.a.achievements.indexOf("182"),1)
            addPoints("a",-50)
        }
	}
    if (!inChallenge("ct",32) && player.uv.tree == "unvaxxed"){
        player.uv.tree = "normal"
    }
}
