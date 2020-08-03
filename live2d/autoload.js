// 注意：live2d_path 参数应使用绝对路径
const live2d_path = "https://cdn.jsdelivr.net/gh/radium-bit/res@latest/live2d/";
// const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
//const live2d_path = "/live2d-widget/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 768) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			apiPath: "https://live2d.fghrsh.net/api/",
			//cdnPath: "https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/"
		});
	});
}
// initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址
// API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api
// 初始化看板娘会自动加载指定目录下的 waifu-tips.json

console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
console.log(`
	此网站源代码公开。但请不要盗图，谢谢。
	, ............................. ....... ,,..... .....   BG;::,PGXR, ....................... ................. ....................  ,.... . . ..      
.                                                      sg1.,.sOS M;                                                                                   
. . ... . . ... ... . . ... ..... ..... .  .,.. . .   25B;,:HgR  DR  .... . . ........... ... . . . ........... . ......... . . ...  ....   .  ..     
. .. ..... . . . . . . . . . . . . . .. ..   ,..     J7PG iGMQc  aB              . . .     ...   . . . ....... ... . . . . . . ....  .....  .. ..     
, . . . .   . . .   . .   . . . .   . . ..    ...   rH,Qi7OR117  2B,                        ... . . . . . ..... ... . . . . . .....   ....  ..  ,     
. .    . . . . . . . .   .   . . . .   . .     ... .G:;BJGG7 r,  aMr :7JJwJJJJJsc7r;;i;;:.       . . . .   ..... . . . . . . ... ...   ...   .  .     
, . .  .... .   .   .       .   .   .  ...         Zr,cQXpr :.   PHgRBBEE6pKPPZOMBBEX2SUPPZX2;:   . . . . . ..... . . . ..... .   ..   ....  .  .     
. .. . ....  . . . . . .     .   . . . . .      ; cU:,UDX7      :DwRMrSSJwJJLsv7rr;iirrr:::icSSJ;,..     . . ....... . . . . ... ..,   ....  ,. ..    
. . . . . . . . . .   . . . . .    .  . ...    SM.p:;,OPa       5vSgL Jv;;rirr77sJ21J7r;rr;::::::. .:.      .  .. .   . . . . .   ...   ,..  .. ..    
  ..    .. . . . . . .   . . . . . . .   .    wOUQr;:rMa:      ;r.KP  cr::::::,:,::;7wHp5sr;:::;rr,  :::.                               .,.  ..  ,    
  , . . ... . .   . . . .   . .     .    ..  vBrQP:::SM::      ;;::   J7::::;;;;i;;::,:;LaEEKc::r7J7Lv;:LJ;;;;i;irr;;:,..          .:;:  ..   .  .    
  .. . . ....      .   . . .   . . .       :vZvJQ;:r.LJ,;     .7;;    w7ivL1Ls77i;::::,,...:LODL:;;r;rr;..;BBBBQE6KPpEZZHSJLLJ1525UZK7                
  ,.. .  ....     . . . . . .       .    rU7777RP.sP. :;;     , :;    RGKs7;;:::;r7sH6GZpXU7;:r7;;;:;;rr7:   1BK11sr;:;:;;rr7rrrrr1Kr,,.  ..,,;rr7U;::
   , . . ... .   . . . . . . . . .     rXv:77LMBr:7B. .7:   .   ;;    ;. :;r:;rsJJs1s1UHPOgMROr:;;rLvr;::r7;   RK7LL7r;;;;;;;777;;::ivLJssJU5Xw1s1JJJD
   .. .   ... . .     . . . .        .Gs:rw7wBBS;:vQ   7:  :,  .r;. .   7R6XJsLr;:::::::::;;;;;;r;r7s1S2si;rc:  JH;:;::::;7267;J77Lcc7cL15Sw2Lc7L77UBv
   ..  . ....... . .   .   . .      Lg::J2pPQBEJ:;rB   :, ;r   r:;::,  sBKL7;;:;;;;;;;;;;;:;:;;i;r:;:;ivsaUv;vr  ;O7:rc26BMJ. vEaSJ1XRP1r: ,;rr::aQR. 
    . . . .. .... .   .       .    Ea..2svP:pBKr;;;O.    :c   ;,:,.::sGGLi;:;;i;r;i;;;::;;i;r;r;i;s;r;rirrJUS7r7  .ppQBBgr         .rr:....    .K6;   
     .     ,  ....     . . . .   .BL..;U7JM:,UP;;irQ    .7.  :,sa:JMgPLr:;;r;iir;r;i::sZr;;rrrrr;;pr;7;r;rrvsUJc7.  Or .       .,rr;:,,,.    .pD;     
     ..    ..   ..  . .   .     ,Qr,.:aLrpBr:r1;r;wQ  7.:;:::.sEOQBscri;;irir;ririi:rQBQi;rrrrrr;rDrir7irri;ccJ1ss,  ;                      RO.     . 
      ..   ..    ..    .   .   .Q;,,.UJcrQBs:rrr;;EE .r;:::, sMBQwrvr;;rrrirrrrrrr:JBBc;;rrrrrrr:Up;irL7rrrr;rLssJs   v                   rB5   ... . 
       .    .     ..      .    g;,,.UJsrSBBE:rrrPrQJ .r::. ,GBBHrrr;rrrrrrrrrr7rr;aBJ::irr7rrrr;rDL;rivsrr7rrrivwc1v   L: ....,.        .QB.    ... . 
       .    .      ..         gr,, PXL7rgBBBc;rrEp    ,::.vBBMc77i;rr7r7r7r777rri5S;;rrrr7r7r7r;Kp;rrrrsvrrrr7rrr2cS:   Pr;rrr:.      .PBS   .  .,..  
        .   .       ..       2w,: sBcvrJBB2LQrr;SRL    2EDBBKrLrir777r7777v7777raLir7r7r7r7r7riUDrrr7rr7s7rr7r7rrrUsU   .U:.        :pBQ.   ..  ..,.. 
. ..     . ...       ...    ,Q,:,:BErviMBJ;rDPr;cERs  ;BBBBS7Lrrrccv7v7c7c7c777PLr7c7v7v7v77rr5D7rr777rLvsr7r7r7rrr5U;   :J,::,.,,.   . :s  ..  . .,. 
, ......     .         ..   RL:::HBJ7rEB2;vrSE5rr16gPJBQBM5Lvi7vscv7c7c7c7c77vZc77c7cvcvc7vr7KZrrr7777rvLLLr7r777r776v    Pv:::icr:..,:rc;  ..  ,  ,, 
. .......... .           . :B:::rBBv;KBZic7L6Z2Lr7wS5QBBR5rrr7sJ7v7LvcvLcL77cgL77LvLvL7c77rJZXr77v7v7v7vs7prr777777ccR     B:.   ,7S;r:.     .  .  ., 
. . . ....... .            OS:;:ZBg;1BQr7cL7saX1s7s2RQBg5r ;1ws7svLcLvLLsc7cRL7cLcscLcL77cK61r77cvLvc7vr1rOUr7v7vvJJ rc    1Brsi.  i;   .   ... ,   , 
  .. . .........           B;;:7BBSrBBL7cscL77P55w2QRQgwc;7S1L7wLLLsLss1LLLBJ7csLsLLcvrLSGUv7cvLcccLvc77J72Bi77LvJ,c. .     BRJ277i,:. ...  ... ..  ..
  ... .    .....          7R:;:XBMU6B5rLsLsc716JsUBRQMUrr1Xs7vasLcLLsJJ .1Q17LsLscL7Ls5ZSs77LLscscsL2sL7U1LQUrv7L2  2   :   .1    .,......  ... ..   .
  .           ..          Ew;r:MMM6Eg7csLsLL762swBRRBXrvU5c7spsLLLLss2. 7DJ iJLLvsJSXwPZrsvscLLsLLLJ:;sLs1 cB7rLc2: E   ,.   :7 ..........  ...  .    
  .            ..         Qrr:7BRB1Ow7sssLsvJpssMMRBaiJS177JDLLLsLsLJs;J6sL7JsJJ5UXJ77BcJLLcsLscLL1r .5Lr. :Bs7vssL.R, ::.    7,..........  .., ..    
   .           .         ,Mir:5BQ6cg7ssssJs7aXvGMRBarU5scv2gLLLsLsLssJ1KLLL1Jw1JLsL7rBRr2LLsLsLsLssv;wsL5XJsBE7cLssLZs ,U     .r .........  .... ,    
                         rKir:QQB;OJssJssssvELSQMBX7SJLL75MLLssssLJLJspssLsLsLLcLJL;GBJ7U7sLLcscLLss2ssv5ws7BgL7sLsLHZ  M:     ;, ......... ...  .    
                         ULr:7BBJrOLJ1JJssc2KsgQQKL5LsLcSQLLLsLJsscsLP1LLsLsLsLc11;PQBr1JsLLLsLsLsLsLsLcUwc7BMscLssLwQ  Oa   ;  ; .............. .    
                         p7v:5BB,Eas1JJJ1scH1PBQEswcsL7SBLssJsJsJLsLaXcLsLsLscLsSrHB1XL1sLsLsLsLsLsLsLLca1srBQwLsLsL2Q. p6i  ;U r.......... ....  .   
                        .G7s,RBJ:B2J1wJwJsspsQBRJscscvpB7csJsJsJsLs1ZccsLsLsLsLa7HBi 6JJssLsLLLsLsLsLscJU277BB21cJssJB, KKS  .B :; .............  .   
                        75UriBB.aRr22J2J1LSUOQRscss71QBvcJJsJsJsssLDU7sLscLLLc5spE: :ES71LLLsLsLLLsLsLLJH177BBHJssJLJB: p2E;  B: c .............. .   
                        acE;2B2.Qp:S22J2JJSHQOcLsLcZBBrLJ1sJsJsscsaBrLvL71sL7UH6c.  rQJrJLLLcLcscsLsLs7UEs7sB7EwsssssB:,XUUO  gg v........ ...... ..  
                        GrM:RB::BJ:X5w21wJXgKcJscUQBQrL11JJsJssvscBpr77rHU7rUS7.    2Bv727LvsLsLsLsLs7sPDrc1B pX2cJLJBr;aJJB. ZB:.; .............  .  
                       .H1O:QO.sQ:rE1212J5pSc1LLEDMB;LU1J1sJsJcJ7OB2cLUBE11gO:      ROr7Jc7LcLvLLLcLc7JQS77Ep rR2LLssBs1JJLB7 LQK r .............  .  
                       rJgX;Br.OB:D61121wpasJc1Bp1QiL2UsJsJsJLsLLBQ;;wBJrcDw .::;: .Bcr7U7c7LvLvLcsv7c6BL7cR, :MpsJLwMUwJJsME irB:; ....... .....   . 
                       57BcJB,:BBJBPJUwwKXJJvXBM7Rc1Jas1JJsJLcJrRB5;gBs;7Z:        7Mrr7J77cvc7LcLv77aBMrsSg .:XM2JswQ1wJwLRQ,r GX:. .............  . 
:                      U1Brp6.LBROB1w2wHKJJcGQBvZcPJS1JJJsJscs7aBBggXLrsP.         UUrr7Jr77v7v7c7vrK5BXrvg:   :MJL7aRwJ1JLOBJ; ;B7. .............  . 
.                     ;sRB:R7,HBGgBSswSZJJLRBBSUL6p12JJJsJLLLs7BBBJ.rrsJ           grr;DJr7v7777vviPp,E172X    .OP77pRJJJ1LRBw:, BK, .............    
. ,                   JcBE;g::QBZgB6J1Z1JsQBBRsLwBsSJJ1sssLvU;RQX  irr:           r2rrJBLr7r7r7vc;Pg: g7cP.     SErLB6ws1ssBB7:: SBr .............    
. .,                 .JPBUrE,rBBPBQR1HSJsBBBB2L7BX12sJsJLs72iLBB  vQEDSGgQgBR2:  .K7vU,XLrr7777L;OB; .Xr2;      :OrgQHssJJ2Bp;,: ;Ba .............    
, ..,                LLBBr1a.LBgZBRDgXsLBBgBGLrRBsHLJsJLs71c;HRBpBBBBQBQQMBGQBB1 c2KH, Ssr7rr7s7QE.  :Psc  :LKXs7aPMQ1JLJLgOE :, .BD  ... ... ..... . 
. .....              S6OrJSU.KBgZBODM2cRBGQBJrSBXX2Jssss7sJ7BBBMRRZ72gppaSB: ,;7QB5r   P7rrrr5aG;    JrHJKBBQBBBBBBBg1LJsURHS r,  DB. .............   
  ....,.            JLB 71Ds,DB6RBODO7pQREBXvrBQaXssJss7cU;LS6BMXX;  wwUPZB    r2:.    H7rrvRH;      ZQQBRO6B.   BBBBPsLs6Kpi 2.  UB: ..............  
.    ....,         .2ZO wJBL:BBZRBORUsgMgMO2:ZBgXJLJssvrP7;R:LBP:,   ...:1R   ,:       PrrL6r       PBB,rDpgO .. BBQ5scLU61O  E   rB; .. ............ 
, ... .......      1rB. XsBciBBPBBQOJ6RRgMa7rQBE5cJsscrZP,pE:R:,: ,,:...  .            17J1.       :BH:  rcgr   sZRQU7csO1H5 ,B   ;Q7 .............., 
. .............   .2XB  52BJ7BQpBBBgUDgQRpU;PBQELsssvrpQ,JQJ:Q  .:,,,,,,:             .XUr         7w.  .. r   :K,BBJ7v65JGr wB   :B7 .... .......... 
. . ......... ... 2rB;  U5BwSBM6BQBDDEBgRa7rMBBwLJJcrKB:rQB;LJ    . .....            ;PL.           :.,,::.   ,;,RBBcr5Xs1g  GQ   cBL ......... ..... 
. .. .........   rsMB  .JGQH6QgDBBQM6RMRPU:XBBELLJLrSB;:GB5:X;                      ,:               ...,:  .:..BQQR;1XLsPS  Qg   KBc .... .......... 
. ... ........   2XQs  rLQMX6QRDBQBQZQMOpr7RBQ5vJs7SB7:aBRr;6     . . . .                                   .  BBOBL75scwEs ,DQ  :EB7 . ....... . ... 
  .... .......  LKQB   JrBDPSBDRQBQBRBDDJ;EMBgcss75Bs:vQRp:L7                                                 vBDgM7sscJaKr ;PB  X1B: ............... 
  ,.. . .....  ,OBB7  :ssBDPSQggBQBQBDQXr1RRB5Lsv2BS:iOgQv:Pv                                 .               BRDBOrcvsUZsa U1B :EsM  ... ..... ...., 
  .... . ...   BBBB   cr2BEZwQDQQBQBQQgsiEGBRssL2BE:;Xgg6::BB:                                               BBgMB7r7sUg2av PJR:SJUH . ........... .. 
  ,.... . ..  DQBB;   X:EBZEUDRRBQBQBBJ2vDDQpvL2BR;:URORs:sQBB:                                             aBQQDrrrsKD1rB ;aJgDLLZ;  ........... ... 
  ...... .   sBQBG   rs:RBPG2OMBMBQBQa1EvRgBsvwBB7:sgDDp;;6GpBi,.                                          2BBQ5;7cSODw;RE ZLUGZ7sO   ............... 
. .......   :BQEB    a;rBMZESKQQQQBBRvBaLDBD72BBs:7OgZg7:1RpZB:,;:                                        ZBBZr:27Kg6S;SB .D7SpEv2K   ............. . 
  .......   BBHBL   ;w,aRMZO5KRBQBQBJ6MKcgRUJBBH:rDRpR5i7R6Z6B:,:;::                    ..              :BBgL;sB7 LQH;JB6 a67XSDvEi   ...........,... 
.   .....  OBpBg    S:UMQE6OH5RBBQBG2RDGLP6UQQG;;GB6DZ7;EO6pDQ,,::;;7,                                :gBQHJ2BBS  GEicQg: sHcaSO2G    ,.......    . . 
. .  ...  5BZgQ.   JrURMRS6DaSGBQBBwOgGgSLGMQM7:JBEODJiaRZp6gg.:::::;Lr:                           .LQQBRDGERB2   MrcgXp L KsKU6MU    .. ....,     .. 
. ..     cBpOB;   7LUgRRE1OOK5GBBBgUBGggD7gQQ1;vQQggSrwREp6PBa.:::::::7Lv;.                     ,LORpDMODDPXBa   :1LGUpr:; sXXSSB.    , .......   ... 
. ...   ;BPOBU   :1XRgRR52Eg56PBMBSBBBBBGPQBHrrgRMQOvsggp6HPBr ::::::::;7LLL:.              .i5QBRUJLRDDOKJBD   .swpUUO.J  ;gPUP6  . ..........  ,.,. 
. . .  ,Bp6QQ    JpgORQHU1ROap6BM:O:;UGw7rBgL;ZGB  SsGBME6RgB,  ,::::::::rrrs1wc:       .76BBBRpPJJvURgDPLDB:  :2ap2UpL:r  .gK5aQ    .......... ..    
. ..   BEPDB    1ggERMZ21ZQESZQP;cB       BH;UgXD rSpB:SgBMGRQK7. .,::::::;7;rirPBZULJ6BBBBOaXa5UJscpMDKLPMB, 75apw2SR 7   ,DP2XMr   ..... .....      
. .   BgH6B;  :OQg6gRG25gBBPHPB  rB2  ,. :BLvDSPE;PaB7 rBBBgRgBBB5;. .,,::::r;;.ZQRQBBQgDDP2a5XJasscRRXLaRQBJ72U6X22O7.;   7Ma5XDg   .,.... ....  .   
. .  DRPHBJ  7BBDKgRgKPKgXEEXpB, 1BQ;;s1rXOr6P1gRUwBP ..:7ZMBBBBBBBBar,. ..,:i::BQGEPZZGOK1S5aU25JvKMas2RBB1r12ZGQK5O.r    KG6PKpBv   ..........   ,. 
.   pMPaBp  XQQGHDRRZKBs  pGpKB: SBXP .  ps2ZUaBEsBB         :LPBBBBBBBDX7:.  .rBQQgMPEOH1aUaa55Sc6BXJwDBgr:12EOggXZr:, . .DBaL:..;s;   . .......   , 
.  sQpXgg  MMDOXgQBBpQBBX,RZKpBX:KBHZ   ,OLZSHUg2DB               ,:52wPOQBBpUOBMDwPREDK1aSXHZaKwP.JR5DBprrwUOGDDE5Z.;    UBsrrvri;.;7   ........   . 
  rR6HDg  BREMgBBBQL   .rcQHpHB1 .BBL6  gJEXpJ1pEB:                 BGSssLJUOBBZaL1RgQR6OODRK7ZREg  .DgSr72UDGDORaO::    JE7rJUJPBBB5HH       . .   . 
 :BZXOD ,BDOZJJU1:     r,XMPHPQJ  QBwwv7HHp61rXDB; :,              BBggROOZK2S1JLLBBZ77Lrrrvr.:7UO.,rZKrLU2gGDROpZJ::  sBP7v7Lcc7rrs6BBRv:      ..    
LZEXOg 7BZPD6r  ..,:,rRr:RGKP6BH  QBB;BZJ6pJrvgQ; ::;r.           EBDEggDPSwwJwJJD6rw, .:,::.    :PQEXcJUUgDgBS;HZ:c  ;QJrcvL7vLLrr:,:cZBBBBP:.       
GHXDg ;B66PPBZrL,:;iaBP.7BPpDpSS..wBB2sUHZs772HQ,    :;:..       cBgEEaJcLL112J2ZQE; :   :::;   iBH;1swUURgBBs sDi5,  2B77vL7L7wPUs1Js, w7:XBar7;;,   
HURg ;BZZKPgBr::,:7DR7:,DOpRB.Rr..:BQMXs6LcccHJ6X ..            ;BBggZH5HKpwJJ1J2JwG; :,  .   :BB, saU2SRBBR. sHSLH   BgX77cLvc777sLr::.J    .;;r7w7  
PR6 ;BZpPpOB.,rr:URg7r.wQGB6 :B.., EBBHSLLLsLE7UM:,:::::::..    ;EBBQBBMgRgRZpaPJswgBG: .,  :OBU  OZ5USQBBi  :UPcB    QGSHLcvLcccsvL7r;:;X       .,,  
Bs .BZ6KP6Br  rBgQBJr,rBBQ7  Br :i::BB2vLLscw6;LB2.::,. ..:,,      .7pBBBBQgMRQgSPgDDQBS: .2BG: ,QR2UXBBr   .KJXBc:: ;BHpHH7LcLcssJJwwscZr       .  , 
;  BDZPPHBH   KMgZr;,rBQJ. .B2.rr;, SBLcLsLL5p;LGQ:;c7r:                ;J5PUUwsXREE6OgBp;PD;  ;QMU2HBQ     Sw1BD  ,:RQKHpSvLsLLvc77vJ;,:7         .. 
  6QZKpHQQ   LBRS;;:rQ1.  rBH:L;,.,.;Q7LsLsvPX::DRa.pBBQBBBOU:            s5LvsJSPZERMBBpEBs  :RRHw2BR    .5acPB     BEKpHH7LLsLLvLv7v2JLOL .       . 
 .BGKPHZB;  XBMJ:;,rD: .rgRL;v:.:r7rJ67sLsLsHS:.DHQ. 7BBBBBBBBQZ:  .      QDZGORgRMBDKUZ6rsBD7ZGG1wBD  ::.LHsLQr  s.XBHpHpHLLJLsLc1Bps5PPL  .,        
 JQppKPBR  OBgv::.cB,.JDMJ;rv::7JLL;PULLsLLsH27 GaBr   HBpHSXXpDBX. :;:  :RQBBBQQgEwsLEUp:,EBQ5DaJBD .:, rPssXw  E  BQHHPHpLsssLs71QJ2gs      ,..     
 G6ZKKGB  RBO7::;pBB6sJc:;rv:;r7i;;,a5LsLsvU52s JOHB    :B6SUSUXXMB;  .. g,;RpaUJJs1JGSUKr pZ1HOJRB  .  .PJJLG:,US  LBQpKPPJcJssL7RBgH         ..,.   
L6KPPHB7 QQDr:7PBQRDBO::r7v:,,,,,,, P2ssJLLS5sa ;RSRE     BgXSXSXaZBE   .BQ.;5UJ22UJPP22HJ KKsDXpG.:,   pwJLXw:7O.,. ,gBM6E1ssJsLSM :     .       ... 
gKUpKggrRODJ:sQgJBODGBM;;7::::::::,.JaLsLs7HJLp; RHaB;     gBHaX5XSXQB  vBgBr ZP1UwSEU25UaLP15OPQL .:..K2Js2E::g,.,:,  ;EBB5wU1JJB;    .   . .     .. 
BU52ZQEGZZZ:;DD  BQGOGBQ:.:::::::::.rXssJsLK1c5S ;B5Eg      5BpSaSXSXEB,pMOgB; pQa2GK2SU5SQUUUDOGB7  :Z2Jswpr.,:,,:::,,  ,vsJJSHRg.         . . . . . 
RJJwsUpPSOv:GP   rBD6EEBZ..,,,,,.,. .SvL7LrKL776, aKwBJ      ,Ha252U255gBGpEOB27:2UEs2JwsZ5JJwOScpB::XsLcsw.     :,.....       , 7.                   
`);
