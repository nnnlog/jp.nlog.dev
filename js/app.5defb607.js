(function(t){function e(e){for(var s,c,i=e[0],o=e[1],l=e[2],h=0,u=[];h<i.length;h++)c=i[h],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},r={app:0},n=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0cd1":function(t,e,a){"use strict";a("9207")},1980:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-content",{staticStyle:{display:"flex","flex-direction":"column","min-height":"100vh"},attrs:{"md-theme":"primary"}},[a("nav",{staticClass:"nav-bar"},[a("p",{staticClass:"nav-bar-text",staticStyle:{cursor:"pointer"},on:{click:function(e){t.$router.push({name:"Main"}).catch((function(){}))}}},[t._v(" 일본어 학습 ")]),a("div",{staticStyle:{"margin-right":"20px","font-size":"17px"}},[{spell:1,word:1}[t.$route.fullPath.split("/").filter((function(t){return""!==t})).join("/")]?a("div",{staticStyle:{display:"flex","justify-content":"center"}},[a("p",{staticStyle:{color:"green","margin-right":"3px"}},[t._v(t._s(t.$store.getters.quizStatus.ac))]),a("p",{staticStyle:{"margin-right":"3px"}},[t._v("/")]),a("p",{staticStyle:{color:"red","margin-right":"3px"}},[t._v(t._s(t.$store.getters.quizStatus.wa))]),a("p",{staticStyle:{"margin-right":"3px"}},[t._v("/")]),a("p",{staticStyle:{color:"#c7cc00"}},[t._v(t._s(t.$store.getters.quizStatus.re))])]):t._e(),a("md-tooltip",[t._v("맞은 문제 / 틀린 문제 / 남은 문제")])],1)]),a("router-view",{staticStyle:{flex:"1","align-items":"center"}})],1)},n=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-list"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[t._v("글자")]),a("div",{staticClass:"card-problem-list"},[a("md-checkbox",{staticClass:"md-theme-reverse",staticStyle:{color:"white"},model:{value:t.hiragana,callback:function(e){t.hiragana=e},expression:"hiragana"}},[t._v("히라가나 (ひらがな)")]),a("md-checkbox",{staticClass:"md-theme-reverse",staticStyle:{color:"white"},model:{value:t.katakana,callback:function(e){t.katakana=e},expression:"katakana"}},[t._v("가타카나 (カタカナ)")])],1),a("div",{staticClass:"card-test"},[a("md-button",{staticClass:"md-dense md-theme-primary",on:{click:function(e){return t.startQuizSpell()}}},[a("span",[t._v("테스트 시작")]),a("span",{staticClass:"mdi mdi-chevron-right"})])],1)]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[t._v("단어")]),a("div",{staticClass:"card-problem-list"},[a("md-checkbox",{staticClass:"md-theme-reverse",staticStyle:{color:"white"},model:{value:t.noun,callback:function(e){t.noun=e},expression:"noun"}},[t._v("명사")]),a("md-checkbox",{staticClass:"md-theme-reverse",staticStyle:{color:"white"},model:{value:t.adj,callback:function(e){t.adj=e},expression:"adj"}},[t._v("형용사")]),a("md-checkbox",{staticClass:"md-theme-reverse",staticStyle:{color:"white"},model:{value:t.verb,callback:function(e){t.verb=e},expression:"verb"}},[t._v("동사")]),a("md-field",[a("label",{attrs:{for:"chapter"}},[t._v("학습할 단원")]),a("md-select",{attrs:{name:"chapter",id:"chapter",multiple:""},model:{value:t.selectedChapter,callback:function(e){t.selectedChapter=e},expression:"selectedChapter"}},[a("md-option",{attrs:{value:"7"}},[t._v("7과")])],1)],1)],1),a("div",{staticClass:"card-test"},[a("md-button",{staticClass:"md-dense md-theme-primary",on:{click:function(e){return t.startQuizWord()}}},[a("span",[t._v("테스트 시작")]),a("span",{staticClass:"mdi mdi-chevron-right"})])],1)])])},i=[],o={name:"Main",data:function(){return{hiragana:!1,katakana:!1,noun:!1,adj:!1,verb:!1,selectedChapter:[]}},methods:{startQuizSpell:function(){this.$store.dispatch("saveQuizSetting",{hiragana:this.hiragana,katakana:this.katakana,noun:this.noun,adj:this.adj,verb:this.verb,selectedChapter:this.selectedChapter});var t=this.$store.getters.quizSetting;t.hiragana||t.katakana?this.$router.push({name:"Spell"}):alert("히라가나 또는 가타카나를 선택해주세요.")},startQuizWord:function(){this.$store.dispatch("saveQuizSetting",{hiragana:this.hiragana,katakana:this.katakana,noun:this.noun,adj:this.adj,verb:this.verb,selectedChapter:this.selectedChapter});var t=this.$store.getters.quizSetting;t.noun||t.verb||t.adj||t.selectedChapter.length?this.$router.push({name:"Word"}):alert("퀴즈 범위를 선택해주세요.")}},computed:{}},l=o,d=(a("d892"),a("2877")),h=Object(d["a"])(l,c,i,!1,null,"4a16959a",null),u=h.exports,p={name:"App",components:{Main:u}},m=p,x=(a("034f"),a("5c64"),Object(d["a"])(m,r,n,!1,null,null,null)),k=x.exports,v=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-list"},[t.quizId>=t.quizProblem.length?a("div",[a("h1",[t._v("퀴즈 종료")]),a("p",[t._v("맞춘 문제 : "+t._s(t.ac))]),a("p",[t._v("틀린 문제 : "+t._s(t.wa))]),a("br"),a("p",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push({name:"Main"})}}},[t._v("메인 페이지로 돌아가기 "),a("span",{staticClass:"mdi mdi-chevron-right"})])]):a("div",{staticClass:"card",class:"card-"+t.cardStatus},[a("div",{staticClass:"card-quiz"},[t._v(t._s(t.quizProblem[t.quizId].text))]),a("div",{staticClass:"card-ans-list"},t._l(t.ans,(function(e){return a("div",{staticClass:"card-ans",class:e.text===t.selectedAns?"card-"+t.cardStatus:"",on:{click:function(a){return t.solve(e)}}},[a("div",{style:"ac"===t.cardStatus||t.showAns?"justify-content: flex-end; align-items: flex-end;":"justify-content: center;"},[t._v(" "+t._s(e.speak)+" ")]),a("div",{style:"ac"===t.cardStatus||t.showAns?"display: block;":"display: none;"},[t._v(" "+t._s("ac"===t.cardStatus||t.showAns?"("+e.text+")":"")+" ")])])})),0)]),a("div"),a("md-snackbar",{attrs:{"md-position":"center","md-duration":1/0,"md-active":t.waSnackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.waSnackbar=e},"update:md-active":function(e){t.waSnackbar=e}}},[a("span",[t._v("다시 맞춰주세요!")]),a("md-button",{staticClass:"md-primary",on:{click:function(e){(t.waSnackbar=!1)||(t.showAns=!0)}}},[t._v("정답 보기")])],1)],1)},w=[],_=(a("d81d"),a("b64b"),a("07ac"),a("b85c")),b={name:"Spell",created:function(){var t=this.$store.getters.quizSetting;t.hiragana||t.katakana?this.startQuiz():this.$router.push("/")},data:function(){return{cardStatus:"",showAns:!1,acSnackbar:!1,waSnackbar:!1,ac:0,wa:0,alreadyWA:0,quizId:0,ans:[],selectedAns:0,quizProblem:[],hiragana:[{text:"あ",speak:"a"},{text:"い",speak:"i"},{text:"う",speak:"u"},{text:"え",speak:"e"},{text:"お",speak:"o"},{text:"か",speak:"ka"},{text:"き",speak:"ki"},{text:"く",speak:"ku"},{text:"け",speak:"ke"},{text:"こ",speak:"ko"},{text:"さ",speak:"sa"},{text:"し",speak:"shi"},{text:"す",speak:"su"},{text:"せ",speak:"se"},{text:"そ",speak:"so"},{text:"た",speak:"ta"},{text:"ち",speak:"chi"},{text:"つ",speak:"tsu"},{text:"て",speak:"te"},{text:"と",speak:"to"},{text:"な",speak:"na"},{text:"に",speak:"ni"},{text:"ぬ",speak:"nu"},{text:"ね",speak:"ne"},{text:"の",speak:"no"},{text:"は",speak:"ha"},{text:"ひ",speak:"hi"},{text:"ふ",speak:"hu"},{text:"へ",speak:"he"},{text:"ほ",speak:"ho"},{text:"ま",speak:"ma"},{text:"み",speak:"mi"},{text:"む",speak:"mu"},{text:"め",speak:"me"},{text:"も",speak:"mo"},{text:"や",speak:"ya"},{text:"ゆ",speak:"yu"},{text:"よ",speak:"yo"},{text:"ら",speak:"ra"},{text:"り",speak:"ri"},{text:"る",speak:"ru"},{text:"れ",speak:"re"},{text:"ろ",speak:"ro"},{text:"わ",speak:"wa"},{text:"を",speak:"wo"},{text:"ん",speak:"n"}],katakana:[{text:"ア",speak:"a"},{text:"イ",speak:"i"},{text:"ウ",speak:"u"},{text:"エ",speak:"e"},{text:"オ",speak:"o"},{text:"カ",speak:"ka"},{text:"キ",speak:"ki"},{text:"ク",speak:"ku"},{text:"ケ",speak:"ke"},{text:"コ",speak:"ko"},{text:"サ",speak:"sa"},{text:"シ",speak:"shi"},{text:"ス",speak:"su"},{text:"セ",speak:"se"},{text:"ソ",speak:"so"},{text:"タ",speak:"ta"},{text:"チ",speak:"chi"},{text:"ツ",speak:"tsu"},{text:"テ",speak:"te"},{text:"ト",speak:"to"},{text:"ナ",speak:"na"},{text:"ニ",speak:"ni"},{text:"ヌ",speak:"nu"},{text:"ネ",speak:"ne"},{text:"ノ",speak:"no"},{text:"ハ",speak:"ha"},{text:"ヒ",speak:"hi"},{text:"フ",speak:"hu"},{text:"ヘ",speak:"he"},{text:"ホ",speak:"ho"},{text:"マ",speak:"ma"},{text:"ミ",speak:"mi"},{text:"ム",speak:"mu"},{text:"メ",speak:"me"},{text:"モ",speak:"mo"},{text:"ヤ",speak:"ya"},{text:"ユ",speak:"yu"},{text:"ヨ",speak:"yo"},{text:"ラ",speak:"ra"},{text:"リ",speak:"ri"},{text:"ル",speak:"ru"},{text:"レ",speak:"re"},{text:"ロ",speak:"ro"},{text:"ワ",speak:"wa"},{text:"ヲ",speak:"wo"},{text:"ン",speak:"n"}]}},methods:{startQuiz:function(){this.ac=0,this.wa=0,this.quizId=-1,this.ans=[];var t=this.$store.getters.quizSetting,e=[];if(t.hiragana){var a,s=Object(_["a"])(this.hiragana);try{for(s.s();!(a=s.n()).done;){var r=a.value;e.push(r)}}catch(o){s.e(o)}finally{s.f()}}if(t.katakana){var n,c=Object(_["a"])(this.katakana);try{for(c.s();!(n=c.n()).done;){var i=n.value;e.push(i)}}catch(o){c.e(o)}finally{c.f()}}this.quizProblem=this.shuffle(e),this.nextCard()},nextCard:function(){var t=this;this.cardStatus="",this.showAns=!1,this.waSnackbar=!1,this.acSnackbar=!1,this.alreadyWA=!1,this.selectedAns=0,++this.quizId;var e={};e[this.quizId]=1;var a=this.combination(0,this.quizProblem.length-1,e,5);a=this.shuffle(a),this.ans=a.map((function(e){return t.quizProblem[e]})),this.$store.dispatch("setQuizStatus",{ac:this.ac,wa:this.wa,re:this.quizProblem.length-this.quizId})},solve:function(t){var e=this;"ac"!==this.cardStatus&&(this.selectedAns=t.text,t.text===this.quizProblem[this.quizId].text?(this.alreadyWA||++this.ac,this.cardStatus="ac",this.waSnackbar=!1,this.acSnackbar=!0,setTimeout((function(){return e.nextCard()}),1700)):(this.alreadyWA||++this.wa,this.cardStatus="wa",this.waSnackbar=!0,this.alreadyWA=!0),this.$store.dispatch("setQuizStatus",{ac:this.ac,wa:this.wa,re:this.quizProblem.length-this.quizId}))},combination:function(t,e,a,s){if(s=Math.min(e-t+1,s),s-=Object.values(a).length,3*s>e-t+1){for(var r=[],n=t;n<=e;n++)r.push(n);r=this.shuffle(r);for(var c=0;s>0;c++)a[r[c]]||(a[r[c]]=1,--s)}else while(s>0){var i=this.mt_rand(t,e);a[i]||(--s,a[i]=1)}return Object.keys(a)},mt_rand:function(t,e){var a=arguments.length;if(0===a)t=0,e=2147483647;else{if(1===a)throw new Error("Warning: mt_rand() expects exactly 2 parameters, 1 given");t=parseInt(t,10),e=parseInt(e,10)}return Math.floor(Math.random()*(e-t+1))+t},shuffle:function(t){var e,a,s=t.length;while(0!==s)a=Math.floor(Math.random()*s),s-=1,e=t[s],t[s]=t[a],t[a]=e;return t}}},g=b,S=(a("0cd1"),Object(d["a"])(g,f,w,!1,null,"c47799e2",null)),N=S.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-list"},[t.quizId>=t.quizProblem.length?a("div",[a("h1",[t._v("퀴즈 종료")]),a("p",[t._v("맞춘 문제 : "+t._s(t.ac))]),a("p",[t._v("틀린 문제 : "+t._s(t.wa))]),a("br"),a("p",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.$router.push({name:"Main"})}}},[t._v("메인 페이지로 돌아가기 "),a("span",{staticClass:"mdi mdi-chevron-right"})])]):a("div",{staticClass:"card",class:"card-"+t.cardStatus},[a("div",{staticClass:"card-quiz"},[t._v(t._s(t.quizProblem[t.quizId].text))]),a("div",{staticClass:"card-ans-list"},t._l(t.ans,(function(e){return a("div",{staticClass:"card-ans",class:e.text===t.selectedAns?"card-"+t.cardStatus:"",on:{click:function(a){return t.solve(e)}}},[a("div",{staticStyle:{flex:"1"},style:"ac"===t.cardStatus||t.showAns?"justify-content: flex-end; align-items: flex-end;":"justify-content: center;"},[t._v(" "+t._s(e.mean)+" ")]),a("div",{style:"ac"===t.cardStatus||t.showAns?"display: block;":"display: none;"},[t._v(" "+t._s("ac"===t.cardStatus||t.showAns?"("+e.text+")":"")+" ")])])})),0)]),a("div"),a("md-snackbar",{attrs:{"md-position":"center","md-duration":1/0,"md-active":t.waSnackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.waSnackbar=e},"update:md-active":function(e){t.waSnackbar=e}}},[a("span",[t._v("다시 맞춰주세요!")]),a("md-button",{staticClass:"md-primary",on:{click:function(e){(t.waSnackbar=!1)||(t.showAns=!0)}}},[t._v("정답 보기")])],1)],1)},z=[],O=(a("4160"),a("caad"),a("2532"),a("159b"),{NOUN:"0",VERB:"1",ADJ:"2"}),C={word_class:O,words:[{text:"かう",mean:"사다",chapter:[7],word_class:[O.VERB]},{text:"いく",mean:"가다",chapter:[7],word_class:[O.VERB]},{text:"はなす",mean:"말하다, 이야기하다",chapter:[7],word_class:[O.VERB]},{text:"あそぶ",mean:"놀다",chapter:[7],word_class:[O.VERB]},{text:"すわる",mean:"앉다",chapter:[7],word_class:[O.VERB]},{text:"のむ",mean:"마시다",chapter:[7],word_class:[O.VERB]},{text:"つくる",mean:"만들다",chapter:[7],word_class:[O.VERB]},{text:"のぼる",mean:"오르다",chapter:[7],word_class:[O.VERB]},{text:"みる",mean:"보다",chapter:[7],word_class:[O.VERB]},{text:"たべる",mean:"먹다",chapter:[7],word_class:[O.VERB]},{text:"する",mean:"하다",chapter:[7],word_class:[O.VERB]},{text:"くる",mean:"오다",chapter:[7],word_class:[O.VERB]},{text:"もう",mean:"이미, 벌써, 더",chapter:[7],word_class:[]},{text:"なつやすみ",mean:"여름방학(휴가)",chapter:[7],word_class:[O.NOUN]},{text:"ふゆやすみ",mean:"겨울방학",chapter:[7],word_class:[O.NOUN]},{text:"よてい",mean:"예정",chapter:[7],word_class:[O.NOUN]},{text:"イタリア",mean:"이탈리아",chapter:[7],word_class:[O.NOUN]},{text:"りょうり",mean:"요리",chapter:[7],word_class:[O.NOUN]},{text:"ならう",mean:"배우다",chapter:[7],word_class:[O.VERB]},{text:"スキー",mean:"스키",chapter:[7],word_class:[O.NOUN]},{text:"あう",mean:"만나다",chapter:[7],word_class:[O.VERB]},{text:"きく",mean:"듣다, 묻다",chapter:[7],word_class:[O.VERB]},{text:"よむ",mean:"읽다",chapter:[7],word_class:[O.VERB]},{text:"ねる",mean:"자다",chapter:[7],word_class:[O.VERB]},{text:"きのう",mean:"어제",chapter:[7],word_class:[O.NOUN]},{text:"きょう",mean:"오늘",chapter:[7],word_class:[O.NOUN]},{text:"あした",mean:"내일",chapter:[7],word_class:[O.NOUN]},{text:"ケーキ",mean:"케이크",chapter:[7],word_class:[O.NOUN]},{text:"テレビ",mean:"텔레비전",chapter:[7],word_class:[O.NOUN]},{text:"ともだち",mean:"친구",chapter:[7],word_class:[O.NOUN]},{text:"よく",mean:"잘, 자주",chapter:[7],word_class:[]},{text:"ときどき",mean:"때때로",chapter:[7],word_class:[]},{text:"あまり",mean:"(부정)그다지, 별로",chapter:[7],word_class:[]},{text:"ぜんぜん",mean:"전혀",chapter:[7],word_class:[]},{text:"うんどう",mean:"운동",chapter:[7],word_class:[O.NOUN]},{text:"しんぶん",mean:"신문",chapter:[7],word_class:[O.NOUN]},{text:"コーヒー",mean:"커피",chapter:[7],word_class:[O.NOUN]},{text:"やま",mean:"산",chapter:[7],word_class:[O.NOUN]},{text:"としょかん",mean:"도서관",chapter:[7],word_class:[O.NOUN]},{text:"アイスクリーム",mean:"아이스크림",chapter:[7],word_class:[O.NOUN]},{text:"おんがく",mean:"음악",chapter:[7],word_class:[O.NOUN]},{text:"はは",mean:"어머니",chapter:[7],word_class:[O.NOUN]},{text:"ちち",mean:"아버지",chapter:[7],word_class:[O.NOUN]},{text:"ひ",mean:"날, 해",chapter:[7],word_class:[O.NOUN]},{text:"ほか",mean:"딴 것, 바깥",chapter:[7],word_class:[O.NOUN]},{text:"くに",mean:"나라",chapter:[7],word_class:[O.NOUN]},{text:"ほかの くに",mean:"다른 나라",chapter:[7],word_class:[O.NOUN]},{text:"オーストラリア",mean:"오스트레일리아, 호주",chapter:[7],word_class:[O.NOUN]},{text:"おなじ",mean:"같음, 동일함",chapter:[7],word_class:[O.NOUN]},{text:"はやい",mean:"이르다, 빠르다",chapter:[7],word_class:[O.ADJ]},{text:"ほう",mean:"방향, 쪽, 편",chapter:[7],word_class:[O.NOUN]},{text:"いっしょ",mean:"함께 함",chapter:[7],word_class:[O.NOUN]},{text:"カーネーション",mean:"카네이션",chapter:[7],word_class:[O.NOUN]},{text:"プレゼント",mean:"선물",chapter:[7],word_class:[O.NOUN]},{text:"えいが",mean:"영화",chapter:[7],word_class:[O.NOUN]},{text:"いえ",mean:"집",chapter:[7],word_class:[O.NOUN]},{text:"うち",mean:"집, 안, 우리",chapter:[7],word_class:[O.NOUN]},{text:"そうじ",mean:"청소",chapter:[7],word_class:[O.NOUN]},{text:"てつだう",mean:"도와주다, 거들다",chapter:[7],word_class:[O.VERB]},{text:"きく",mean:"국화",chapter:[7],word_class:[O.NOUN]},{text:"はな",mean:"꽃",chapter:[7],word_class:[O.NOUN]},{text:"いろいろだ",mean:"여러가지다",chapter:[7],word_class:[O.VERB]},{text:"ちがう",mean:"다르다",chapter:[7],word_class:[O.VERB]},{text:"～から",mean:"~로 부터, ~이므로, ~이니까(이유)",chapter:[7],word_class:[O.VERB]},{text:"おもしろい",mean:"재미있다",chapter:[7],word_class:[O.ADJ]},{text:"かいもの",mean:"쇼핑",chapter:[7],word_class:[O.NOUN]},{text:"どんな",mean:"어떤",chapter:[7],word_class:[]},{text:"にぎやかだ",mean:"붐비다, 번화하다",chapter:[7],word_class:[O.ADJ]},{text:"まち",mean:"시, 도시",chapter:[7],word_class:[O.NOUN]},{text:"たべもの",mean:"음식",chapter:[7],word_class:[O.NOUN]},{text:"でも",mean:"그렇지만",chapter:[7],word_class:[O.VERB]},{text:"ふゆ",mean:"겨울",chapter:[7],word_class:[O.NOUN]},{text:"とても",mean:"아주, 매우",chapter:[7],word_class:[O.VERB]},{text:"さむい",mean:"춥다",chapter:[7],word_class:[O.ADJ]},{text:"おきる",mean:"일어나다",chapter:[7],word_class:[O.VERB]},{text:"がっこう",mean:"학교",chapter:[7],word_class:[O.NOUN]},{text:"ひるごはん",mean:"점심밥",chapter:[7],word_class:[O.NOUN]},{text:"かえる",mean:"돌아오다",chapter:[7],word_class:[O.VERB]},{text:"おおさか",mean:"오사카",chapter:[7],word_class:[O.NOUN]},{text:"かわいい",mean:"귀엽다, 사랑스럽다",chapter:[7],word_class:[O.ADJ]}]},q={name:"Word",created:function(){var t=this.$store.getters.quizSetting;t.noun||t.verb||t.adj||t.selectedChapter.length?this.startQuiz():this.$router.push("/")},data:function(){return{cardStatus:"",showAns:!1,acSnackbar:!1,waSnackbar:!1,ac:0,wa:0,alreadyWA:0,quizId:0,ans:[],selectedAns:0,quizProblem:[]}},methods:{startQuiz:function(){this.ac=0,this.wa=0,this.quizId=-1,this.ans=[];var t=this.$store.getters.quizSetting,e=[];C.words.forEach((function(a){(t.selectedChapter.includes(String(a.chapter))||t.noun&&a.word_class.includes(C.word_class.NOUN)||t.adj&&a.word_class.includes(C.word_class.ADJ)||t.verb&&a.word_class.includes(C.word_class.VERB))&&e.push(a)})),this.quizProblem=this.shuffle(e),this.nextCard()},nextCard:function(){var t=this;this.cardStatus="",this.showAns=!1,this.waSnackbar=!1,this.acSnackbar=!1,this.alreadyWA=!1,this.selectedAns=0,++this.quizId;var e={};e[this.quizId]=1;var a=this.combination(0,this.quizProblem.length-1,e,5);a=this.shuffle(a),this.ans=a.map((function(e){return t.quizProblem[e]})),this.$store.dispatch("setQuizStatus",{ac:this.ac,wa:this.wa,re:this.quizProblem.length-this.quizId-1})},solve:function(t){var e=this;"ac"!==this.cardStatus&&(this.selectedAns=t.text,t.text===this.quizProblem[this.quizId].text?(this.alreadyWA||++this.ac,this.cardStatus="ac",this.waSnackbar=!1,this.acSnackbar=!0,setTimeout((function(){return e.nextCard()}),1700)):(this.alreadyWA||++this.wa,this.cardStatus="wa",this.waSnackbar=!0,this.alreadyWA=!0),this.$store.dispatch("setQuizStatus",{ac:this.ac,wa:this.wa,re:this.quizProblem.length-this.quizId-1}))},combination:function(t,e,a,s){if(s=Math.min(e-t+1,s),s-=Object.values(a).length,3*s>e-t+1){for(var r=[],n=t;n<=e;n++)r.push(n);r=this.shuffle(r);for(var c=0;s>0;c++)a[r[c]]||(a[r[c]]=1,--s)}else while(s>0){var i=this.mt_rand(t,e);a[i]||(--s,a[i]=1)}return Object.keys(a)},mt_rand:function(t,e){var a=arguments.length;if(0===a)t=0,e=2147483647;else{if(1===a)throw new Error("Warning: mt_rand() expects exactly 2 parameters, 1 given");t=parseInt(t,10),e=parseInt(e,10)}return Math.floor(Math.random()*(e-t+1))+t},shuffle:function(t){var e,a,s=t.length;while(0!==s)a=Math.floor(Math.random()*s),s-=1,e=t[s],t[s]=t[a],t[a]=e;return t}}},U=q,j=(a("cb60"),Object(d["a"])(U,y,z,!1,null,"64e673ad",null)),A=j.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" 404 ")])},$=[],B={name:"NotFound"},R=B,V=Object(d["a"])(R,E,$,!1,null,"7440b51b",null),P=V.exports;s["default"].use(v["a"]);var I=new v["a"]({mode:"history",routes:[{path:"/",name:"Main",component:u},{path:"/spell/",name:"Spell",component:N},{path:"/word/",name:"Word",component:A},{path:"/*",name:"404",component:P}]}),M=a("2f62");s["default"].use(M["a"]);var Q=new M["a"].Store({state:{hiragana:!1,katakana:!1,noun:!1,adj:!1,verb:!1,selectedChapter:[],ac:0,wa:0,remaining:0},mutations:{setQuizSetting:function(t,e){var a=e.hiragana,s=e.katakana,r=e.noun,n=e.adj,c=e.verb,i=e.selectedChapter;t.hiragana=a,t.katakana=s,t.noun=r,t.adj=n,t.verb=c,t.selectedChapter=i},setQuizStatus:function(t,e){var a=e.ac,s=e.wa,r=e.re;t.ac=a,t.wa=s,t.re=r}},actions:{saveQuizSetting:function(t,e){var a=t.commit,s=e.hiragana,r=e.katakana,n=e.noun,c=e.adj,i=e.verb,o=e.selectedChapter;a("setQuizSetting",{hiragana:!!s,katakana:!!r,noun:!!n,adj:!!c,verb:!!i,selectedChapter:Array.isArray(o)?o:[]})},setQuizStatus:function(t,e){var a=t.commit,s=e.ac,r=e.wa,n=e.re;a("setQuizStatus",{ac:s,wa:r,re:n})}},getters:{quizSetting:function(t){return{hiragana:t.hiragana,katakana:t.katakana,noun:t.noun,adj:t.adj,verb:t.verb,selectedChapter:t.selectedChapter}},quizStatus:function(t){return{ac:t.ac,wa:t.wa,re:t.re}}},modules:{}}),W=a("43f9"),J=a.n(W);a("51de");s["default"].config.productionTip=!1,s["default"].use(J.a),new s["default"]({el:"#app",router:I,store:Q,components:{App:k},template:"<App/>",render:function(t){return t(k)}})},"5c64":function(t,e,a){"use strict";a("d32a")},8177:function(t,e,a){},"85ec":function(t,e,a){},9207:function(t,e,a){},cb60:function(t,e,a){"use strict";a("1980")},d32a:function(t,e,a){},d892:function(t,e,a){"use strict";a("8177")}});
//# sourceMappingURL=app.5defb607.js.map