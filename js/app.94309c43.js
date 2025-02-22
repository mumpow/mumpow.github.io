(function(e){function a(a){for(var o,r,i=a[0],h=a[1],m=a[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(o in h)Object.prototype.hasOwnProperty.call(h,o)&&(e[o]=h[o]);l&&l(a);while(d.length)d.shift()();return s.push.apply(s,m||[]),t()}function t(){for(var e,a=0;a<s.length;a++){for(var t=s[a],o=!0,i=1;i<t.length;i++){var h=t[i];0!==n[h]&&(o=!1)}o&&(s.splice(a--,1),e=r(r.s=t[0]))}return e}var o={},n={app:0},s=[];function r(a){if(o[a])return o[a].exports;var t=o[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=o,r.d=function(e,a,t){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)r.d(t,o,function(a){return e[a]}.bind(null,o));return t},r.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],h=i.push.bind(i);i.push=a,i=i.slice();for(var m=0;m<i.length;m++)a(i[m]);var l=h;s.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"page-container"}},[t("div",{ref:"backgroundContainer",attrs:{id:"background-container"}}),t("div",{attrs:{id:"header-section"}},[t("div",{attrs:{id:"mode-container"},on:{click:function(a){return e.nightToggle()}}},[t("div",{attrs:{id:"mode"}},[e.night?t("font-awesome-icon",{attrs:{icon:["fas","sun"]}}):t("font-awesome-icon",{attrs:{icon:["fas","moon"]}})],1)]),t("div",{attrs:{id:"year-container"}},[t("div",{staticClass:"year",class:{underline:"yearfive"===e.currentYear},on:{click:function(a){return e.changeYear("yearfive")}}},[e._v("\r\n          '24-'25\r\n        ")]),t("div",{staticClass:"year",class:{underline:"yearfour"===e.currentYear},on:{click:function(a){return e.changeYear("yearfour")}}},[e._v("\r\n          '23-'24\r\n        ")]),t("div",{staticClass:"year",class:{underline:"yearthree"===e.currentYear},on:{click:function(a){return e.changeYear("yearthree")}}},[e._v("\r\n          '22-'23\r\n        ")]),t("div",{staticClass:"year",class:{underline:"yeartwo"===e.currentYear},on:{click:function(a){return e.changeYear("yeartwo")}}},[e._v("\r\n          '21-'22\r\n        ")]),t("div",{staticClass:"year",class:{underline:"yearone"===e.currentYear},on:{click:function(a){return e.changeYear("yearone")}}},[e._v("\r\n          '20-'21\r\n        ")])])]),e.hover?t("div",{class:{"fade-in":e.hover,"fade-out":e.fadeOut},attrs:{id:"user-display"}},[t("div",{attrs:{id:"user"}},[e._v(e._s(e.user))]),t("div",{attrs:{id:"message"}},[e._v(e._s(e.message))])]):e._e()])])},s=[],r=(t("7f7f"),t("d225")),i=t("b0b4");t("6c7b");function h(e,a){return null!=e?e:a}var m,l,u,d,c=1e3/60,g=function(){function e(a){Object(r["a"])(this,e),this.garden=a,this.reset()}return Object(i["a"])(e,[{key:"reset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.x,t=e.y,o=e.vx,n=e.vy,s=e.m;this.x=h(a,Math.random()*this.garden.width),this.y=h(t,Math.random()*this.garden.height),this.vx=h(o,.5*Math.random()-.25),this.vy=h(n,.5*Math.random()-.25),this.m=h(s,7*Math.random()+5)}},{key:"addForce",value:function(e,a){this.vx+=e*a.x/this.m,this.vy+=e*a.y/this.m}},{key:"distanceTo",value:function(e){var a=e.x-this.x,t=e.y-this.y,o=Math.sqrt(Math.pow(a,2)+Math.pow(t,2));return{x:a,y:t,total:o}}},{key:"update",value:function(e){this.x+=this.vx*e/c,this.y+=this.vy*e/c,(this.x>this.garden.width+5||this.x<-5||this.y>this.garden.height+5||this.y<-5)&&this.reset()}},{key:"squaredDistanceTo",value:function(e){return(e.x-this.x)*(e.x-this.x)+(e.y-this.y)*(e.y-this.y)}},{key:"collideTo",value:function(e){e.vx=e.m*e.vx/(this.m+e.m)+this.m*this.vx/(this.m+e.m),e.vy=e.m*e.vy/(this.m+e.m)+this.m*this.vy/(this.m+e.m),this.reset()}},{key:"render",value:function(){this.garden.ctx.beginPath(),this.garden.ctx.arc(this.x,this.y,this.getDiameter(),0,2*Math.PI),this.garden.ctx.fill()}},{key:"getDiameter",value:function(){return this.m}}]),e}(),y=[{name:"rickastley",message:"🎵 never gonna give you up 🎵"},{name:"jakisaur",message:"have a great summer 2020ByeGuys"},{name:"its_smiv",message:"ur a butt"},{name:"filmotter",message:"GOT IN THERE, BEESH"},{name:"greenlionvoltronpilot",message:"This has bean an eye opening & watering experience, I hope we can continue to hang out for years to come ♥"},{name:"mayaselph",message:"Can't wait to see more of your friendship events"},{name:"spykerblade",message:"am very hap i found this strim and then found the other temp nana peopos"},{name:"mompou",message:"happy anniversary to myself"},{name:"walguy_the_robin",message:"Congrats on a great first year of streaming! Thanks again for bringing so many bright moments to a generally difficult and challenging time. And never think that all of us who love you don't see through your snarkiness to your heart of gold! Take care! jinzHug jinzLove regina7Hug"},{name:"barrettrts",message:"It has been truly wonderful to be part of your first year of streaming PrideUwu"},{name:"geeky_reader",message:"Happy stream-iversary! I'm so happy to have met you, and gotten to know you over the past several months. Even though it's only been months, it feels longer (in a good way of course). I appreciate you and your streams. At first I lurked a lot (as I usually do when I meet new people) but I'm glad I started to chat more. You've become a valuable friend, and can't wait to make more memories with you. Sorry not sorry for the longish message. Thanks for being you UwU"},{name:"bearlymolly",message:"Freb, your aggressive friendship was my favorite part of 2020, P.S. you are cool, P.S.S. <one letter away from piss LOL P.S.S.S. I love you."},{name:"mega_dave",message:"Fred. It's so crazy to think how quickly time has passed-I'm so glad I randomly decided to raid you and become friends. I guess you are okay."},{name:"camthethird",message:"Woah. So you made yourself a custom yearbook? That’s pretty nifty. So I just type a message now and it’ll be saved somewhere for like eternity? (Idk how yearbooks work time wise) So you can go back & look at this in the future? Huh. I should write something meaningful then. Like something nice, when you think back to this. Or something wholesome maybe or advice? I know!“Dear mp, this is your yearbook. I like your steams but more importantly beware of ducks.They’re up to something! Au revoir, cam"},{name:"acci",message:"Who have thought? That a young buck like you could actually do the right thing and avoid getting her sorry butt kicked off Twitch for a whole year."},{name:"youkaibuster_plays",message:"As a relatively new member of the community I liked the stream right from the start and had a great time. It's a nice time on each stream for me and I hope to enjoy for a long time coming. Cheers for the first year and hope you'll do many more with joy!"},{name:"kingofcheeseii",message:"Henlo, I am very new but I love your vibes and community and I think I will stick around :>"},{name:"jiggadee",message:"Happy stream anniversary mompou thanks for the dank gameplays!"},{name:"exoidis",message:"Thanks for all the laughs and I'm glad to have meet all of you, now we draw :D"},{name:"htgerardo",message:"wahaha"},{name:"i__love__murasaki_shion",message:"looking forward to another year! i also love Minato Aqua"}],p=[{name:"elmo",message:"a PLASTIC WATUH BOTTLE and a PAPAH TOWEL RUHLL"},{name:"darkbond007",message:"Happy anniversary Mompou, you channel has become very important to me and part of my weekly routine. I love your positivity and how you have fun but raise money for charity is inspirational. Heres to many more anniversaries to come!"},{name:"jakisaur",message:"have a great summer 2020ByeGuys"},{name:"endymion_22",message:"oh you found me! thank you mompou and thank you dark souls (the game that brought me here)"},{name:"normalcollar",message:"I'm a stupid moron with an ugly face and a big butt and my butt smells and I like to kiss my own butt."},{name:"its_smiv",message:"ur still a butt"},{name:"spykerblade",message:"congratz on 2 years, it's been a gewd time frogVibe"},{name:"notsokal",message:"hhhhhhhhh,,,,, yearbook,,,,"},{name:"chaosaudit",message:"Happy streamaversary! thank you for giving me such a wonderful place to hang out. u awesome"},{name:"mayaselph",message:"The array is provided so that more images are there in the images."},{name:"steedling",message:"you are such a lovely, talented, and generous person who deserves all the kindness and serenity. I always look forward to your streams and am happy to have gotten to know you even just a little."},{name:"spaceabe",message:"Happy anniversary! I have really enjoyed my time in your streams and  in discord. I will forever be grateful for inspiring me to open my mouth here, you are pretty cool."},{name:"filmotter",message:"Sup bish. Das it. UwU. <3"},{name:"oystermilk",message:"Peach Peach Peach i think u r a really cool person, i wish i could be as cool as you Peach Peach Peach"},{name:"georgebynature",message:"i love bowling. Happy 2 years!"},{name:"sunfellx",message:"whether it's during stream or on discord hanging out is always a good time. I hope there are many more years of good times! mompouTap"},{name:"machinecitizen",message:"DAG! Congrats on two years! It's been so much fun!"},{name:"gorgusan",message:"Happy 2 year anniversary mompou! I've only been watching you for like a couple of months but your channel is already one of my faves to hang out in! Also DS2 is the best game ever, can't wait for your NG+++ playthrough :p"},{name:"princess_tadpole",message:"thank you :)"},{name:"puzzledmonkeytree",message:"Merry mompouversary - here's to many more years of hating it here"},{name:"dearpapaya",message:"Thank you for being such a wonderful wifey! Congrats on another year on twitch!! Don’t ever forget to stream what you love ❤️ hehehe"},{name:"walguy_the_robin",message:"Another year of great streams completed, a new one beginning. Will this be the year you finally fully realize how cool and charismatic and entertaining you really are? We shall see! jinzGrin Thanks again for all the great times! mompouLove"},{name:"greenlionvoltronpilot",message:"thank you for bringing so much joy and happiness into my life & heart, I love spending every minute with you and look forward to another 12 months ♥"},{name:"battlecoder_",message:"Happy anniversary! It's been both a huge honor and a joy to be part of your community. Thanks for creating this space, and for the fantastic content you constantly put together for us all.  <3 You are the coolest"},{name:"mochii_hydeheart",message:"Happy twitcherversary ! Thanks for having me in your space.  (and allowing me to lurk) You're community's pretty hilarious, and you're pretty entertaining, it's been great having you in the background."},{name:"moe9times",message:"Had the pleasure of meeting mompou at a charity do once. She was surprisingly down to earth, and VERY funny."},{name:"a_threat_",message:"10/10 knows what dark mode is and shows cat pics on stream"},{name:"mirramon",message:"thx again for streaming, and for always being funny clintV"},{name:"fauxretro",message:"Thank you for being great streamer and great person happy 2 years"},{name:"damnamazin",message:"asdfghjkl; I know how to sign things, yes. Happy years! Many more?"}],f=[{name:"thom",message:"i pride myself and think of myself as a man of faith, as there's a drive into deep left field by castellanos and that'll be a home run. and so that'll make it a 4-0 ballgame."},{name:"spykerblade",message:"Happy Anniversary mompou, it's been great times watching your stream, look forward to more"},{name:"mayaselph",message:"Hey, you're pretty neat, three years huh. That's like more than 2 years and almost as many as 4"},{name:"endy_________",message:"oh you've found me again! thank you for your kindness, thank you for making me laugh, thank you for giving me comfort, thank you for being bubbly, thank you for co-hating Joel Fagliano, thank you for loving streaming, thank you for being a friend"},{name:"spaceabe",message:"Happy anniversary! Thank you for all the fun times, interesting, conversations and K-pop lessons!"},{name:"greenlionvoltronpilot",message:"I always hate coming up with things to put in yearbooks/celebrations cards so know that I love you & this community so much that i'm willing to overcome my reservations to contribute pixifrLove"},{name:"walguy_the_robin",message:"I'm glad you started streaming! I'm glad I found you! And I'm glad you're still here! I will always be proud to be your first subscriber, and I will continue to be one as long as you keep streaming and there is life in these bones. Happy anniversary, and may the next year of streaming bring you more viewers, more friends and more love. You deserve it all! And may you also find a few games to play that you actually like! You deserve that too. Take care, and stay awesome!"},{name:"normalcollar",message:"hi"},{name:"justchadley",message:"Happy Anniversary mompou!  You are hands down my favorite Dark Souls 3 streamer and it is not even close.  However, even when you are not playing Dark Souls 3 this community has always been a welcoming place where I always feel comfortable being myself.  Thank you for all of the fun, kindness, and support over the past three years.  I am looking forward to finally winning at marbles at some point in the next three years."},{name:"earlcrogg",message:"Happy anniversary!! I show up whenever I can and it puts a smile in my heart when I do."},{name:"barrettrts",message:"Thank you for building a wonderful community that I'm glad I can be a part of mompouCozy"},{name:"itssmiv",message:"ur kinda cool even though u cheat in borderlands"},{name:"seeshark_",message:"It's nice to know there's always a nice community I can hang out with on this website and on Discord also I guess so thank you for creating it <3"},{name:"oystermilk",message:"Hi, I think you are (genuinely) a really cool person and I enjoy you and your content, thanks sacrificing another year of your life to twitch. Also you are effortlessly artistic. And cool"},{name:"traintohypetown",message:"Happy Year Three! There are countless streamers out there, but your unique style is so rad and irreplaceable. Thanks for being awesome!"},{name:"machinecitizen",message:"I'm not here o/ hello goodbye have good stream"},{name:"theakilies",message:"Hi, I don't sign stuff like this, I don't know why I clicked on this, or why I keep typing. Perhaps our commonality of hating things makes me feel like we understand each other. Maybe I just like charity. Anyway, H.A.K.A.S. See you next year or something."},{name:"mazzvg",message:"Happy anniversary! I'm so happy I found this wonderful group of people and I look forward to the next year of you hating streaming!"},{name:"mochii_hydeheart",message:"Happy streamerversary!"},{name:"battlecoder_",message:"Happy anniversary! I'm glad I came across your streams. Being part of your community has been amazing. You are great mompouTap"},{name:"Robertson_SO",message:"Thanks for providing a whole year of streams and for being the #1 spiteful stream, mompou! Happy stream anniversary!"},{name:"dearpapaya",message:"listen, i love you and i consider leaving arizona far too much since i met you. i'm happy that you are my wife<3"},{name:"11paigebook",message:"Happy Anniversary!! Getting to know you and becoming a part of your community has been a highlight of my year! H.A.G.S"},{name:"undiesmorita",message:"Hello mompou. I am so glad that raid took me in here that fateful day in that shitty FFX temple (seriously that ball temple was hell), your stream and this community here has made a sizable positive impact in my life and I am so thankful to you and everyone here for that. So thank you, I hope we can continue to be friends for a long time, all of us. ❤️❤️❤️✨"},{name:"tavixx",message:"u seem chill. have a great summer!"}],v=[{name:"picard",message:"aaaaard kraxon leeeeesss... blag blan ar'nik ka'nik. aaaaard krasulaaa. risssssss... trassssss... trasulah!"},{name:"GreenLionVoltronPilot",message:"well its that time of year again and we get to celebrate everything you've achieved for the year! so les be anns together noobalBlelele on this versary mompouLove "},{name:"ceci_the_sm",message:"HAPPY STREAMAVERSARY! where else on the internet would I be able to end up starring in a baja blast kidney stone pissing fanfic? the community you've created here is unmatched in so many ways. you're the greatest (parasocial)"},{name:"SunfellX",message:"Happy [years] Anniversary, uhhh sarcasm and puns, I'm bad at these. Especially when someone is talking and chat is setting off alerts every ten seconds."},{name:"crazytindell96",message:"You’re amazing Mompou!"},{name:"noobalott",message:"un-bee-lievable year, thanks for all the buzz-are streams! Hive a great anniversary 🐝 "},{name:"steedling",message:"HAGS"},{name:"FermentedTriangle",message:"Is this a steedling which I see before me, The Stepladder toward my stand? content, let me clutch thee. I see thee squat, and yet I see thee still."},{name:"UndiesMorita",message:"I'm unoriginal, so HAGS. But also, I love and appreciate your stream and you so much, mompou, thank you for sticking with us so long, giving us wonderful entertainment and good fredns vibes times. I appreciate you!! <3 <3 <3 Reagan says hi!!"},{name:"spaceabe",message:"Thanks for radiating some lovely chaotic energy into my life! You're the best!"},{name:"SpykerBlade",message:"Happy Streamversary! it's been fun times with lots of laughs and fromsoft game shredding, it's been a joy to be part of the stream and this awesome community"},{name:"dearpapaya",message:"congrats to another anniversary see can't wait to see you stream for another 10 years :D"},{name:"FilmOtter",message:"oh hi i love you and you're a great friend and an alright streamer, i guess :p"},{name:"normalcollar",message:"no u sign my yearbook"},{name:"MachineCitizen",message:"amazing. thanks for the bald streaming o/"},{name:"moontomes",message:"Hello Fred! Thanks for another year of fun!! Stay cool out there."},{name:"nyannyanexpress",message:"happy streamaversary! i'm looking forward to more fun streams on the road to ascension™~"},{name:"OysterMilk",message:"i thought you said you weren't doing doodles anymore after 2023 Charmanderp HAGS"},{name:"tavixx",message:"see u next year!"},{name:"MayaSelph",message:"boop"},{name:"onestheloneliest",message:"stay kewl i hope we stay friends over summer"},{name:"TheAkilies",message:"Yoooooo mompou!! Driving class and tech ed were so fun this year. Maybe stay away from table saws tho, soz. Anyway, DM me sometime to keep in touch. HAKAS | Shakas"},{name:"Robertson_SO",message:"thanks for another year of streams, with a lot of squats mompouWiggle "},{name:"Walguy_the_Robin",message:"Thanks for another great year of streams. And remember, the great thing about your streams is YOU! mompouLove"},{name:"AnoukOgilvy",message:"It took me four years to sign your yearbook 😂 Congrats (or not) on streaming for so long, truly astounding willpower!"}],b=[{name:"asmrz",message:"ojousama, it's time to go to bed"},{name:"spaceabe",message:"From professional Lost Izalith gameplay to crafting advice, thanks for the good times. You're cool."},{name:"tavixx",message:"despite our many, many differences, you will be missed.. HAVE A GREAT SUMMER!!"},{name:"MachineCitizen",message:"thanks for the last stream"},{name:"moontomes",message:"thanks for streaming. and cats! "},{name:"KeriGeez",message:"mompou, weve had a crazy four years! AP Chem was nUtS! im gonna miss you so much! have a great summer! love, keri"},{name:"Jinzee",message:"I'm glad we had so much jazz on this day, the final day of Mompou streaming ever."},{name:"FauxRetro",message:"Always have enjoyed my time year even when mompou roasted Psychonauts! HAGS (Have a Great Summer)"},{name:"noobalott",message:"Thanks for the last 8 months of incredible content"},{name:"FlyingAway09",message:"I am only here to see the cats."},{name:"FloppyMcDingDong",message:"I levo hiw ovoryene penoshes type's hure"},{name:"Robertson_SO",message:"waited 8 months for void lunch, worth it"},{name:"XxPhantom73xX",message:"Phanta was here"},{name:"MayaSelph",message:"parrotsocial"},{name:"OysterMilk",message:"I am hoping that luck will be on my side finding a man who is a fun loving and open to maybe a little romance (1) Message for you A gentleman who will know how to treat his lady I don’t mind how old you are as long as you are kind and make me laugh. •I Sent You (8) Sexy Selfies! Let’s Meet This Weekend"},{name:"GreenLionVoltronPilot",message:"hopefully this message makes it across the vastness of the pacific and conveys the deepness of my love for not only you but this community that has festered in my heart ♥"},{name:"linny0301",message:"Last stream, as they say. Sad. Sad, sad day. You will be missed but more importantly muting you and timing people out will be missed. Give kitties lots of kisses and scratches from me. "},{name:"normalcollar",message:"sign my yearbook"},{name:"steedling",message:"Goodbye forever"},{name:"AnoukOgilvy",message:"Mama, kudos for doing this, for streaming."},{name:"crazytindell96",message:"You're amazing"},{name:"suspicious_fish",message:"HAGS, you seem more peppy thaan last time Teehee almost happy? strange , catch u next year"},{name:"nyannyanexpress",message:"one time, I played a game that was worse than peach beach splash. have a great summer!"}],w=window,k=w.devicePixelRatio,I=void 0===k?1:k,x=w.requestAnimationFrame,S=function(){function e(a,t){var o=this;Object(r["a"])(this,e),this.nodes=[],this.container=a,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.started=!1,this.nightmode=!1,this.isMousedown=!1,this.hover=!1,this.user="",this.message="",this.force=1.5,this.color1="189, 87, 109",this.color2="204, 121, 49",this.color3="227, 199, 14",this.color4="41, 105, 56",this.color5="127, 190, 212",this.color6="53, 94, 171",this.color7="212, 150, 224",I&&1!==I&&(this.canvas.style.transform="scale("+1/I+")",this.canvas.style.transformOrigin="0 0"),this.mouseDown=this.mouseDown.bind(this),this.mouseUp=this.mouseUp.bind(this),this.mouseLeave=this.mouseLeave.bind(this),this.container.addEventListener("mousedown",this.mouseDown),this.container.appendChild(this.canvas),this.resize(t),this.liarNode={},this.container.addEventListener("mousemove",(function(e){o.liarNode.x=e.clientX,o.liarNode.y=e.clientY}))}return Object(i["a"])(e,[{key:"mouseDown",value:function(e){e.stopPropagation(),this.isMousedown=!0,m=this.container.getBoundingClientRect(),u={x:window.scrollX,y:window.scrollY},l=new g(this),l.x=(e.pageX-u.x-m.left)*I,l.y=(e.pageY-u.y-m.top)*I,l.m=20,l.update=function(){},l.reset=function(){},l.render=function(){},this.nodes.unshift(l),this.container.addEventListener("mousemove",this.mouseMove),this.container.addEventListener("mouseleave",this.mouseLeave),this.container.addEventListener("mouseup",this.mouseUp)}},{key:"mouseLeave",value:function(e){this.container.removeEventListener("mousemove",this.mouseMove),this.container.removeEventListener("mouseup",this.mouseUp),this.container.removeEventListener("mouseleave",this.mouseLeave);for(var a=0;a<this.nodes.length;a++)if(this.nodes[a]===l){this.nodes.splice(a--,1);break}this.isMousedown=!1}},{key:"mouseMove",value:function(e){l.x=(e.pageX-u.x-m.left)*I,l.y=(e.pageY-u.y-m.top)*I}},{key:"mouseUp",value:function(e){this.container.removeEventListener("mousemove",this.mouseMove),this.container.removeEventListener("mouseup",this.mouseUp);for(var a=0;a<this.nodes.length;a++)if(this.nodes[a]===l){this.nodes.splice(a--,1);break}this.isMousedown=!1}},{key:"start",value:function(e){this.playing||(this.playing=!0,this.render(e,!0))}},{key:"stop",value:function(){this.playing&&(this.playing=!1)}},{key:"assignYear",value:function(e){d=[],"yearone"===e?d=y:"yeartwo"===e?d=p:"yearthree"===e?d=f:"yearfour"===e?d=v:"yearfive"===e&&(d=b)}},{key:"resize",value:function(e){this.width=this.container.clientWidth*I,this.height=this.container.clientHeight*I,this.area=this.width*this.height,this.nodes=[],this.assignYear(e),this.nodes.length=d.length,this.canvas.width=this.width,this.canvas.height=this.height;var a=this.ctx.createLinearGradient(0,0,this.width,0);a.addColorStop("0","rgb(".concat(this.color1,")")),a.addColorStop("0.14","rgb(".concat(this.color2,")")),a.addColorStop("0.28","rgb(".concat(this.color3,")")),a.addColorStop("0.42","rgb(".concat(this.color4,")")),a.addColorStop("0.56","rgb(".concat(this.color5,")")),a.addColorStop("0.7","rgb(".concat(this.color6,")")),a.addColorStop("1.0","rgb(".concat(this.color7,")")),this.ctx.fillStyle=a;for(var t=0;t<this.nodes.length;t++)this.nodes[t]||(this.nodes[t]=new g(this))}},{key:"toggleNightMode",value:function(e){var a=this.ctx.createLinearGradient(0,0,this.width,0);a.addColorStop("0","rgb(".concat(this.color1,")")),a.addColorStop("0.14","rgb(".concat(this.color2,")")),a.addColorStop("0.28","rgb(".concat(this.color3,")")),a.addColorStop("0.42","rgb(".concat(this.color4,")")),a.addColorStop("0.56","rgb(".concat(this.color5,")")),a.addColorStop("0.7","rgb(".concat(this.color6,")")),a.addColorStop("1.0","rgb(".concat(this.color7,")")),this.nightMode=!!e,this.nightMode?document.body.classList.add("nightmode"):document.body.classList.remove("nightmode"),this.ctx.fillStyle=a}},{key:"render",value:function(e,a,t){var o=this;if(this.playing){a&&x((function(a){o.render(e,!0,a)}));var n=t-(this.lastTime||t);this.lastTime=t,this.ctx.clearRect(0,0,this.width,this.height);for(var s=0;s<this.nodes.length-1;s++)for(var r=this.nodes[s],i=s+1;i<this.nodes.length;i++){var h=this.nodes[i],m=r.squaredDistanceTo(h),l=this.force*(r.m*h.m)/m,u=100*l;if(!(u<.025))if(m<=(r.m/2+h.m/2)*(r.m/2+h.m/2))r.m<=h.m?r.collideTo(h):h.collideTo(r);else{var c=r.distanceTo(h),g={x:c.x/c.total,y:c.y/c.total};this.ctx.beginPath();var y=this.ctx.createLinearGradient(0,0,this.width,0);y.addColorStop("0","rgba(".concat(this.color1,",").concat(u<1?u:1,")")),y.addColorStop("0.14","rgba(".concat(this.color2,",").concat(u<1?u:1,")")),y.addColorStop("0.28","rgba(".concat(this.color3,",").concat(u<1?u:1,")")),y.addColorStop("0.42","rgba(".concat(this.color4,",").concat(u<1?u:1,")")),y.addColorStop("0.56","rgba(".concat(this.color5,",").concat(u<1?u:1,")")),y.addColorStop("0.7","rgba(".concat(this.color6,",").concat(u<1?u:1,")")),y.addColorStop("1.0","rgba(".concat(this.color7,",").concat(u<1?u:1,")")),this.ctx.strokeStyle=y,this.ctx.moveTo(r.x,r.y),this.ctx.lineTo(h.x,h.y),this.ctx.lineWidth=2,this.ctx.stroke(),r.addForce(l,g),h.addForce(-l,g)}}this.hover=!1,this.assignYear(e);for(var p=0;p<this.nodes.length;p++)this.nodes[p].render(),this.nodes[p].update(n||0),this.isMousedown||this.nodes[p].distanceTo(this.liarNode).total<this.nodes[p].getDiameter()&&(this.hover=!0,this.user=d[p].name,this.message=d[p].message)}}}]),e}(),T={name:"garden",data:function(){return{pixelRatio:window.devicePixelRatio,date:new Date,appHeight:null,appWidth:null}},methods:{createGarden:function(e,a,t){this[e]=new S(a,t)},gardenListener:function(e,a,t,o){e.stopPropagation(),e.preventDefault();var n=a.getBoundingClientRect(),s={x:window.scrollX,y:window.scrollY};this[o]++,this[o]>this[t].nodes.length-1&&(this[o]=1),this[t].nodes[this[o]].reset({x:(e.pageX-s.x-n.left)*this.pixelRatio,y:(e.pageY-s.y-n.top)*this.pixelRatio,vx:0,vy:0})},setAppHeightAndWidth:function(e){this.appHeight=e.clientHeight,this.appWidth=e.clientWidth}}},H={name:"App",mixins:[T],data:function(){return{background:{},resetNode:0,night:!1,hover:!1,user:"",message:"",hoverTimeout:null,fadeTimeout:null,fadeOut:!1,currentYear:"yearfive"}},watch:{"background.hover":function(){var e=this;this.background.hover?(clearTimeout(this.fadeTimeout),clearTimeout(this.hoverTimeout),this.fadeOut=!1,this.hover=this.background.hover):(clearTimeout(this.fadeTimeout),clearTimeout(this.hoverTimeout),this.fadeTimeout=setTimeout((function(){e.fadeOut=!0}),4500),this.hoverTimeout=setTimeout((function(){e.hover=e.background.hover,e.fadeOut=!1}),5e3))},"background.user":function(){this.user=this.background.user},"background.message":function(){this.message=this.background.message}},methods:{nightToggle:function(){this.night=!this.night,this.background.toggleNightMode(this.night),this.resizeApp()},resizeApp:function(){this.setAppHeightAndWidth(this.$refs.backgroundContainer)},changeYear:function(e){this.hover=!1,this.currentYear!==e&&(this.currentYear=e,this.garden(e))},garden:function(e){var a=this;this.background.stop(),setTimeout((function(){a.background.start(e),(a.date.getHours()>18||a.date.getHours()<6)&&(a.night=!0,a.background.toggleNightMode(a.night)),a.background.resize(a.currentYear),a.resizeApp()}),100)}},mounted:function(){var e=this;this.createGarden("background",this.$refs.backgroundContainer,"yearfive"),this.background.start("yearfive"),(this.date.getHours()>18||this.date.getHours()<6)&&(this.night=!0,this.background.toggleNightMode(this.night)),window.addEventListener("resize",(function(){console.log(e.currentYear),e.background.resize(e.currentYear),e.resizeApp()})),this.resizeApp()}},_=H,A=(t("5c0b"),t("2877")),M=Object(A["a"])(_,n,s,!1,null,null,null),C=M.exports,Y=t("8c4f");o["a"].use(Y["a"]);var z=[{path:"/",name:"home"}],L=new Y["a"]({routes:z,mode:"history",scrollBehavior:function(e,a,t){return window.scrollTo({top:0,behavior:"smooth"})}}),j=t("ecee"),O=t("c074"),P=t("ad3d");j["c"].add(O["a"],O["b"],O["c"]),o["a"].component("font-awesome-icon",P["a"]),o["a"].config.productionTip=!1,new o["a"]({router:L,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,a,t){"use strict";var o=t("e332"),n=t.n(o);n.a},e332:function(e,a,t){}});
//# sourceMappingURL=app.94309c43.js.map