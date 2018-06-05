// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "<u>厳</u>めしい老紳士",
					answer: "いか",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "水面に<u>揺蕩</u>う船",
					answer: "たゆた",
					position: 3,
					orientation: "across",
					startx: 4,
					starty: 1
				},
				{
					clue: "<u>所縁</u>の地を巡る",
					answer: "ゆかり",
					position: 6,
					orientation: "across",
					startx: 5,
					starty: 2
				},
				{
					clue: "<u>夥</u>しい数",
					answer: "おびただ",
					position: 8,
					orientation: "across",
					startx: 1,
					starty: 3
				},
				{
					clue: "両手を<u>擦</u>り合わせる",
					answer: "こす",
					position: 10,
					orientation: "across",	
					startx: 1,
					starty: 4
				},
				{
					clue: "耳を<u>欹</u>てる",
					answer: "そばだ",
					position: 13,
					orientation: "across",
					startx: 5,
					starty: 5
				},
				{
					clue: "<u>咄嗟</u>の出来事",
					answer: "とっさ",
					position: 15,
					orientation: "across",
					startx: 2,
					starty: 6
				},
				{
					clue: "<u>歯朶</u>の葉に積む雪落ちんとして落ちず(山口誓子)",
					answer: "しだ",
					position: 17,
					orientation: "across",
					startx: 6,
					starty: 6
				},
				{
					clue: "退屈な毎日に<u>倦</u>む",
					answer: "う",
					position: 18,
					orientation: "across",
					startx: 1,
					starty: 7
				},
				{
					clue: "<u>毳毳</u>しい服装",
					answer: "けばけば",
					position: 19,
					orientation: "across",
					startx: 3,
					starty: 7
				},
				{
					clue: "<u>囂</u>しい人々",
					answer: "かまびす",
					position: 2,
					orientation: "down",
					startx: 2,
					starty: 1
				},
				{
					clue: "<u>由々</u>しき大事件",
					answer: "ゆゆ",
					position: 4,
					orientation: "down",
					startx: 5,
					starty: 1
				},
				{
					clue: "外灯に虫が<u>集</u>る",
					answer: "たか",
					position: 5,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: "<u>凛々</u>しい いでたち",
					answer: "りり",
					position: 7,
					orientation: "down",
					startx: 7,
					starty: 2
				},
				{
					clue: "代表で話すなんて<u>烏滸</u>がましい",
					answer: "おこ",
					position: 8,
					orientation: "down",
					startx: 1,
					starty: 3
				},
				{
					clue: "熱があって<u>怠</u>い",
					answer: "だる",
					position: 9,
					orientation: "down",
					startx: 4,
					starty: 3
				},
				{
					clue: "店に<u>屡</u>やってくる客",
					answer: "しばしば",
					position: 11,
					orientation: "down",
					startx: 6,
					starty: 4
				},
				{
					clue: "<u>素っ気</u>ない態度",
					answer: "そつけ",
					position: 12,
					orientation: "down",
					startx: 3,
					starty: 5
				},
				{
					clue: "小さい子のように<u>駄々</u>をこねる",
					answer: "だだ",
					position: 14,
					orientation: "down",
					startx: 7,
					starty: 5
				},
				{
					clue: "あっさり<u>捌</u>けた人",
					answer: "さば",
					position: 16,
					orientation: "down",
					startx: 4,
					starty: 6
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
