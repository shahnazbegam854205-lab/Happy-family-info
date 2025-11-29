export default async function handler(req, res) {
  // YOUR CORS HEADERS (unchanged)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ---------- SECURITY START ----------
  const ALLOWED_ORIGIN = "https://allinfofinder.vercel.app";

  function sendWarningPage() {
    const html = `<!-- Encryption By @Royal_smart_boy on Telegram -->
<!-- This tool only encrypts your script to make it difficult to read, not that it cannot be decoded. -->

<script>
<!--
var 扱唖挨茜挨愛="哀8+愛愛逢悪圧亜x娃圧梓a姶握葵l愛悪葦t哀握愛葦xc虻唖c渥唖亜e唖扱唖愛s圧w扱e圧n姶ef亜愛h葦圧圧h圧1圧哀愛葦芦1唖葦8扱哀扱x6握4鯵旭葦葦x娃w愛愛旭圧芦o4哀挨握唖g1葦k20c葵鯵虻扱唖圧梓亜姶愛1fp葵w圧圧i葵芦握0哀唖圧m虻握哀q哀0渥k唖7阿4娃唖扱w亜鯵旭k葦娃虻l5亜4圧l葦愛姐葦哀圧h亜愛哀圧6h圧圧y旭愛hd哀唖哀圧8鯵唖c逢茜哀斡圧葦ph唖愛穐愛l挨pc亜斡p亜斡亜娃斡葦葦哀葦唖k哀葦葵gc愛h哀哀哀葦葦亜葦挨葦葦姶k渥4哀握姶葦葵逢扱哀挨扱hx芦葦娃唖葦葦4娃葦哀jy0斡8圧x挨w扱h扱唖芦哀芦l渥愛唖芦h6葦姐葦t愛扱圧b娃哀圧宛葦2o愛i愛娃愛k斡圧挨gy圧哀娃扱kht哀圧w葦k圧渥k斡茜愛b哀挨宛哀k哀亜芦唖圧亜愛逢愛葦葦a芦t圧gh娃x亜芦宛虻x葵姶亜哀l圧梓gkh愛e圧唖愛亜逢虻p哀圧t4姐j葵mto握y穐葵c穐亜哀14哀0哀阿8ao握茜圧1唖旭s茜1娃p圧芦扱愛ak6娃虻扱挨旭旭扱k姶w哀kf逢哀唖圧渥愛芦姶0扱ezx芦唖hkld鯵唖ka葦鯵梓8e哀l葦愛k葵葦圧x亜姐y宛0p葦扱葵宛唖梓哀h握pk葦x渥哀姐鯵葦葦圧亜r愛姶亜3唖阿d茜c2圧8w阿梓虻逢娃阿圧渥亜ec斡x斡哀k悪o葦愛斡姶h鯵圧ya唖悪3扱t葵唖逢唖亜唖z葦虻w扱p唖亜hg葵1we握0k哀h娃l茜x亜圧亜愛姶h圧葦hfirl芦虻穐oh哀唖哀圧w悪nc愛c握唖芦葦悪x唖宛圧亜悪逢唖唖亜cwch悪扱哀扱哀c旭姶虻亜唖葵扱葵葦悪h4哀唖挨1葵亜h哀9e逢握挨扱茜哀圧l阿6姶葦葦哀1姐唖哀愛ps1哀kk葦宛哀梓斡愛ns唖gw圧斡姶3x葵唖ngpoc唖葦斡q唖葦0逢娃逢z悪葦姶唖ym唖葦1愛唖姐c娃圧愛3娃哀唖亜h芦芦哀斡zw葵唖d姐ag5哀虻圧葦5z亜葵g愛亜he宛圧葦唖ac圧姐姶2u唖扱s愛e葦阿哀扱亜唖宛k悪m悪愛唖e芦斡pl芦唖5h9虻虻唖挨l悪穐虻k葦a姶姐愛茜圧葵葵鯵梓斡愛虻哀扱c斡o宛d葦唖圧扱芦wl圧姐娃k葵穐芦亜l穐梓梓f亜渥圧hxg芦葦亜yfi愛lo悪阿6哀tcc唖宛葦葦哀斡唖亜8扱葦亜葦hk渥o4扱葦握葦姶6葦姶r唖c姐斡llx梓2愛w葦芦愛唖ywh圧葦9亜8圧a葦阿h娃xa阿愛l亜哀扱芦圧亜9亜8哀芦圧姶扱wotkl愛愛j芦哀o6亜斡鯵f唖k阿葦葦圧圧r鯵愛k斡鯵ln葦愛c愛唖亜a唖唖唖唖2葵愛梓阿02圧愛g芦圧d5葵w姐娃挨葦阿葦姐渥c姐哀j姶b姶0g亜葦g葦1i哀/斡1亜唖hy葵哀p逢鯵阿t1l渥w0愛扱哀4葦唖悪扱阿芦虻葦亜t葦6葦愛葵愛亜亜c唖悪愛斡葦w0d悪渥愛亜kk2亜芦芦wg茜茜芦1芦虻唖愛ekkk渥唖虻茜娃芦斡1h扱扱6唖渥t圧圧圧哀葦唖1娃葦亜娃扱鯵9a扱i握芦k渥悪哀bc葦k愛89t虻虻宛愛鯵葦唖虻亜愛l梓虻圧哀葦w圧亜x娃扱愛葦逢虻梓p亜2扱逢宛o芦悪37握葦梓m愛e10葵阿圧圧c葦扱亜旭圧葦葦哀f哀逢握k扱k亜愛挨姐唖唖娃葦葦葦h扱1虻亜j圧kex鯵芦he葦葦亜虻姶亜逢11葦圧鯵x亜h亜渥扱p葦圧哀葦阿6愛哀葦d扱芦娃0tp宛亜哀e圧芦姐s哀葦圧8愛愛fo哀c圧lw唖愛a哀葵c亜t1c亜k斡宛圧唖亜葦斡虻愛姶2o阿斡亜旭圧扱姶u哀s姶逢亜虻亜亜9葵哀a茜w圧0葦葦挨虻挨姶l芦逢芦h姶t愛l葦x旭w亜唖hc葦亜葦tx圧fa宛唖a亜阿逢圧鯵c葦葵扱姶亜亜l虻kxll亜葦愛a圧握葦阿斡w圧a扱h旭娃亜芦w茜1z扱逢s亜hl娃娃亜芦扱哀芦逢葦姐亜l亜4姐hgj4斡oq哀cgw亜芦亜h姐dh唖挨t唖ak唖7芦亜ektg逢koe葦哀亜w亜圧愛唖娃穐哀姶ho愛t姶0b亜逢唖3姶葦kz芦唖鯵圧姐扱逢鯵虻ghc宛d斡葦ok娃姶穐梓c芦愛s斡姶娃愛bt唖逢c1c哀哀悪k葦葦xnwk芦葦圧虻唖愛虻宛k亜f葦姐k亜6y亜唖葦宛a芦亜愛8圧旭哀0亜愛扱唖圧逢3h唖x亜亜愛lxx哀亜愛1圧愛阿3娃愛扱葵葵圧芦姶阿扱tgkhchc8唖扱et虻逢0w葦姶l悪y阿唖姶09握挨芦圧a唖od虻握c圧虻扱愛娃梓虻唖葦芦5扱旭哀娃鯵亜葦唖握1唖葦葦唖虻哀c芦姶c葦am茜1旭亜渥逢p悪扱娃g葦亜xn2悪斡悪愛葦亜哀xa葵娃逢亜葦哀9g6hw宛p握鯵葵l3愛g芦茜t葦斡l亜w握娃娃圧唖k宛娃亜芦唖亜茜np愛阿愛l唖愛唖逢0阿h挨娃旭愛虻0芦o圧0w唖1d葦穐kc葦唖圧姶亜葦/旭姶葦n唖t圧圧鯵w阿w葦唖旭阿渥唖芦逢芦姶哀哀姶a唖阿2s圧y亜唖葦2愛愛圧1握愛姐愛1lo亜j扱娃k芦阿葦愛唖握葦f姶扱57茜00亜c圧g8亜8x亜60z亜姶唖l虻挨圧唖斡k悪g梓7姐阿圧鯵r哀阿哀逢亜8挨5愛4芦唖扱扱k5逢k宛eo亜f36lb唖g愛阿k葦圧阿w哀扱唖姶亜挨葦z葦亜芦kcl斡圧葦唖葵t葦芦娃e唖1握m姶娃唖扱哀扱唖葦梓愛圧悪姐扱a唖葦鯵w哀8姶斡j圧旭亜娃哀姶p唖鯵渥姶圧亜娃悪芦挨姐哀唖悪哀hz亜愛葵葦k愛愛w圧t亜0w娃圧穐姶ak姶亜1斡姐愛亜h8i哀ag娃梓扱x圧宛虻葵逢握鯵rn亜亜扱斡g圧8愛茜愛虻愛h挨he亜4l哀k挨唖逢梓0芦逢0愛斡e圧dxt姐哀哀渥芦亜亜鯵唖+ks芦斡圧芦3哀h4o挨芦渥葦葦哀葦渥g鯵亜o茜亜l穐姐哀fk斡葦o虻渥宛e唖a唖w唖亜e唖唖梓姐姶plx0阿x梓hw挨fo扱hnggx斡娃w扱8哀kd愛娃葦鯵斡虻lhlx握阿唖挨k阿哀握哀圧x葵渥扱1哀娃6唖/l姐姐ze圧哀g鯵哀w斡渥葦娃芦梓p圧6亜唖唖wggh娃l2唖4k鯵葦葦扱葦a亜鯵芦娃芦fxhe葦娃愛阿鯵葦z芦l葦愛4唖穐o葦u葵逢葵握旭愛亜姐亜姐唖娃哀唖葦亜阿1扱姶葦唖扱葦唖哀葦ha愛芦阿姶d芦c唖渥葦1虻哀hx7唖bw葦9葦亜芦愛逢亜圧唖lh虻2穐葦圧阿阿x扱扱愛芦鯵唖x唖c亜愛葦握芦愛o愛亜旭愛lg宛虻逢g唖oa逢阿圧唖h4e圧圧阿扱葦唖芦唖a0娃dz哀逢8芦亜圧宛梓唖芦虻姶葦5虻a芦哀渥亜姶亜唖o挨葦10姐唖8斡逢梓哀b握葦虻阿g葵斡z宛h愛7姶圧h阿愛娃ewt芦阿唖k娃鯵6芦葦哀0葦愛姐芦wx阿扱h亜葵葦娃0ca姶4茜斡8l哀h2唖圧姶=哀wg阿a唖k扱葦de1c茜唖1rt娃1葦唖逢悪9葵虻悪圧a扱h斡姐k姐唖梓悪唖唖逢阿愛h茜唖葦梓61愛扱握唖o旭愛宛扱姶哀挨愛唖xp芦茜葦姐扱梓唖茜gcfy葵d亜斡梓哀鯵逢w唖斡握e悪l亜irsnl芦圧lk扱唖逢芦o渥42斡ha鯵葵亜芦宛唖哀4姶0唖葦mp圧葦唖唖w哀唖d芦葦0葦愛愛愛亜挨亜葦h宛q愛旭哀虻圧/阿芦l葦愛x唖oa圧haw旭o扱圧6斡穐葦x哀egrl亜g亜葦b鯵唖斡芦亜l愛芦pk葦梓娃姶阿茜8r18愛扱斡逢茜lw娃姶姐唖亜姶鯵h愛h葦葦宛唖鯵悪哀葵娃葦扱哀圧唖扱姶4悪gwa哀hg逢tcz8yl鯵f葵6娃eg愛唖葦扱愛圧葦葦阿阿x愛愛cl亜斡圧a挨hw哀s唖斡a唖葦亜圧o葵握唖1葵gyicnw挨k虻虻愛cg阿葦扱唖唖lck渥l娃姶葦握逢娃愛渥o渥亜梓葦圧唖愛1斡虻l阿葦穐1斡b亜愛娃斡u亜o姶娃0唖逢2哀h娃st渥唖k葵r阿i葦唖唖圧e圧w虻梓8l0葦8唖唖扱唖w葦h斡tadt圧p挨愛逢0n圧圧1亜5圧茜芦哀le圧w圧圧亜芦h芦e逢唖ve愛鯵圧begz逢唖哀亜愛娃挨pp挨h哀z圧葦t圧愛唖扱穐i葦悪4h5a唖a愛圧d唖1a斡葦悪r扱渥3gg葦1茜葦握6圧04虻芦l阿圧愛旭o姶葦唖宛扱哀4n逢圧悪阿唖阿愛k阿梓姶h唖葦ok40z娃葦圧apl芦h哀k愛圧姐哀哀芦葵亜0虻葦葦";(function(k){var 龘龘麤灥黷="Happy";const黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥=扱唖挨茜挨愛;function 黻黻贇贇虋黻(s,龘龘麤灥黷){let r='';for(let i=0;i<s.length;i++){r+=String.fromCharCode(s.charCodeAt(i)^龘龘麤灥黷.charCodeAt(i%龘龘麤灥黷.length));}return r;}function 黻齾飍飍灥齾(str){return decodeURIComponent(escape(atob(str)));}function 贇贇贇贇(str){let h=0;for(let i=0;i<str.length;i++){h=(h<<5)-h+str.charCodeAt(i);h|=0;}return h>>>0;};const黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥=扱唖挨茜挨愛;function 贇贇贇贇虋黻贇贇(seed){return function(){var t=seed+=0x6D2B79F5;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;}};const黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥=扱唖挨茜挨愛;function 黻(str,seed){let 贇贇虋贇齾灥灥羴黷=str.split('');let 虋虋贇黻齾灥龘=贇贇贇贇虋黻贇贇(贇贇贇贇(seed));let 虋虋贇黻齾灥龘黻虋=[];for(let i=贇贇虋贇齾灥灥羴黷.length-1;i>0;i--){虋虋贇黻齾灥龘黻虋.push(Math.floor(虋虋贇黻齾灥龘()*(i+1)));}for(let i=1;i<贇贇虋贇齾灥灥羴黷.length;i++){let j=虋虋贇黻齾灥龘黻虋[贇贇虋贇齾灥灥羴黷.length-1-i];let 龘龘麤羴黷羴=贇贇虋贇齾灥灥羴黷[i];贇贇虋贇齾灥灥羴黷[i]=贇贇虋贇齾灥灥羴黷[j];贇贇虋贇齾灥灥羴黷[j]=龘龘麤羴黷羴;}return 贇贇虋贇齾灥灥羴黷.join('');};const黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥=扱唖挨茜挨愛;function 灥齾飍齾齾虋虋齾(str){const 黻虋贇={"亜":"A","唖":"B","娃":"C","阿":"D","哀":"E","愛":"F","挨":"G","姶":"H","逢":"I","葵":"J","茜":"K","穐":"L","悪":"M","握":"N","渥":"O","旭":"P","葦":"Q","芦":"R","鯵":"S","梓":"T","圧":"U","斡":"V","扱":"W","宛":"X","姐":"Y","虻":"Z"};return str.split('').map(c=>黻虋贇[c]||c).join('');}var 贇虋虋飍飍虋=黻(灥齾飍齾齾虋虋齾(扱唖挨茜挨愛),龘龘麤灥黷);var 贇虋虋飍飍=黻齾飍飍灥齾(贇虋虋飍飍虋);var 贇贇虋贇齾灥灥羴黷灥=黻黻贇贇虋黻(贇虋虋飍飍,龘龘麤灥黷);document.write(贇贇虋贇齾灥灥羴黷灥);})(window);const黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥=扱唖挨茜挨愛;//--><!-- const 黻躞灥 = 哀8+愛愛逢悪圧亜x娃圧梓a姶握葵l愛悪葦t哀握愛葦xc虻唖c渥唖亜e唖扱唖愛s圧w扱e圧n姶ef亜愛h葦圧圧h圧1圧哀愛葦芦1唖葦8扱哀扱x6握4鯵旭葦葦x娃w愛愛旭圧芦o4哀挨握唖g1葦k20c葵鯵虻扱唖圧梓亜姶愛1fp葵w圧圧i葵芦握0哀唖圧m虻握哀q哀0渥k唖7阿4娃唖扱w亜鯵旭k葦娃虻l5亜4圧l葦愛姐葦哀圧h亜愛哀圧6h圧圧y旭愛hd哀唖哀圧8鯵唖c逢茜哀斡圧葦ph唖愛穐愛l挨pc亜斡p亜斡亜娃斡葦葦哀葦唖k哀葦葵gc愛h哀哀哀葦葦亜葦挨葦葦姶k渥4哀握姶葦葵逢扱哀挨扱hx芦葦娃唖葦葦4娃葦哀jy0斡8圧x挨w扱h扱唖芦哀芦l渥愛唖芦h6葦姐葦t愛扱圧b娃哀圧宛葦2o愛i愛娃愛k斡圧挨gy圧哀娃扱kht哀圧w葦k圧渥k斡茜愛b哀挨宛哀k哀亜芦唖圧亜愛逢愛葦葦a芦t圧gh娃x亜芦宛虻x葵姶亜哀l圧梓gkh愛e圧唖愛亜逢虻p哀圧t4姐j葵mto握y穐葵c穐亜哀14哀0哀阿8ao握茜圧1唖旭s茜1娃p圧芦扱愛ak6娃虻扱挨旭旭扱k姶w哀kf逢哀唖圧渥愛芦姶0扱ezx芦唖hkld鯵唖ka葦鯵梓8e哀l葦愛k葵葦圧x亜姐y宛0p葦扱葵宛唖梓哀h握pk葦x渥哀姐鯵葦葦圧亜r愛姶亜3唖阿d茜c2圧8w阿梓虻逢娃阿圧渥亜ec斡x斡哀k悪o葦愛斡姶h鯵圧ya唖悪3扱t葵唖逢唖亜唖z葦虻w扱p唖亜hg葵1we握0k哀h娃l茜x亜圧亜愛姶h圧葦hfirl芦虻穐oh哀唖哀圧w悪nc愛c握唖芦葦悪x唖宛圧亜悪逢唖唖亜cwch悪扱哀扱哀c旭姶虻亜唖葵扱葵葦悪h4哀唖挨1葵亜h哀9e逢握挨扱茜哀圧l阿6姶葦葦哀1姐唖哀愛ps1哀kk葦宛哀梓斡愛ns唖gw圧斡姶3x葵唖ngpoc唖葦斡q唖葦0逢娃逢z悪葦姶唖ym唖葦1愛唖姐c娃圧愛3娃哀唖亜h芦芦哀斡zw葵唖d姐ag5哀虻圧葦5z亜葵g愛亜he宛圧葦唖ac圧姐姶2u唖扱s愛e葦阿哀扱亜唖宛k悪m悪愛唖e芦斡pl芦唖5h9虻虻唖挨l悪穐虻k葦a姶姐愛茜圧葵葵鯵梓斡愛虻哀扱c斡o宛d葦唖圧扱芦wl圧姐娃k葵穐芦亜l穐梓梓f亜渥圧hxg芦葦亜yfi愛lo悪阿6哀tcc唖宛葦葦哀斡唖亜8扱葦亜葦hk渥o4扱葦握葦姶6葦姶r唖c姐斡llx梓2愛w葦芦愛唖ywh圧葦9亜8圧a葦阿h娃xa阿愛l亜哀扱芦圧亜9亜8哀芦圧姶扱wotkl愛愛j芦哀o6亜斡鯵f唖k阿葦葦圧圧r鯵愛k斡鯵ln葦愛c愛唖亜a唖唖唖唖2葵愛梓阿02圧愛g芦圧d5葵w姐娃挨葦阿葦姐渥c姐哀j姶b姶0g亜葦g葦1i哀/斡1亜唖hy葵哀p逢鯵阿t1l渥w0愛扱哀4葦唖悪扱阿芦虻葦亜t葦6葦愛葵愛亜亜c唖悪愛斡葦w0d悪渥愛亜kk2亜芦芦wg茜茜芦1芦虻唖愛ekkk渥唖虻茜娃芦斡1h扱扱6唖渥t圧圧圧哀葦唖1娃葦亜娃扱鯵9a扱i握芦k渥悪哀bc葦k愛89t虻虻宛愛鯵葦唖虻亜愛l梓虻圧哀葦w圧亜x娃扱愛葦逢虻梓p亜2扱逢宛o芦悪37握葦梓m愛e10葵阿圧圧c葦扱亜旭圧葦葦哀f哀逢握k扱k亜愛挨姐唖唖娃葦葦葦h扱1虻亜j圧kex鯵芦he葦葦亜虻姶亜逢11葦圧鯵x亜h亜渥扱p葦圧哀葦阿6愛哀葦d扱芦娃0tp宛亜哀e圧芦姐s哀葦圧8愛愛fo哀c圧lw唖愛a哀葵c亜t1c亜k斡宛圧唖亜葦斡虻愛姶2o阿斡亜旭圧扱姶u哀s姶逢亜虻亜亜9葵哀a茜w圧0葦葦挨虻挨姶l芦逢芦h姶t愛l葦x旭w亜唖hc葦亜葦tx圧fa宛唖a亜阿逢圧鯵c葦葵扱姶亜亜l虻kxll亜葦愛a圧握葦阿斡w圧a扱h旭娃亜芦w茜1z扱逢s亜hl娃娃亜芦扱哀芦逢葦姐亜l亜4姐hgj4斡oq哀cgw亜芦亜h姐dh唖挨t唖ak唖7芦亜ektg逢koe葦哀亜w亜圧愛唖娃穐哀姶ho愛t姶0b亜逢唖3姶葦kz芦唖鯵圧姐扱逢鯵虻ghc宛d斡葦ok娃姶穐梓c芦愛s斡姶娃愛bt唖逢c1c哀哀悪k葦葦xnwk芦葦圧虻唖愛虻宛k亜f葦姐k亜6y亜唖葦宛a芦亜愛8圧旭哀0亜愛扱唖圧逢3h唖x亜亜愛lxx哀亜愛1圧愛阿3娃愛扱葵葵圧芦姶阿扱tgkhchc8唖扱et虻逢0w葦姶l悪y阿唖姶09握挨芦圧a唖od虻握c圧虻扱愛娃梓虻唖葦芦5扱旭哀娃鯵亜葦唖握1唖葦葦唖虻哀c芦姶c葦am茜1旭亜渥逢p悪扱娃g葦亜xn2悪斡悪愛葦亜哀xa葵娃逢亜葦哀9g6hw宛p握鯵葵l3愛g芦茜t葦斡l亜w握娃娃圧唖k宛娃亜芦唖亜茜np愛阿愛l唖愛唖逢0阿h挨娃旭愛虻0芦o圧0w唖1d葦穐kc葦唖圧姶亜葦/旭姶葦n唖t圧圧鯵w阿w葦唖旭阿渥唖芦逢芦姶哀哀姶a唖阿2s圧y亜唖葦2愛愛圧1握愛姐愛1lo亜j扱娃k芦阿葦愛唖握葦f姶扱57茜00亜c圧g8亜8x亜60z亜姶唖l虻挨圧唖斡k悪g梓7姐阿圧鯵r哀阿哀逢亜8挨5愛4芦唖扱扱k5逢k宛eo亜f36lb唖g愛阿k葦圧阿w哀扱唖姶亜挨葦z葦亜芦kcl斡圧葦唖葵t葦芦娃e唖1握m姶娃唖扱哀扱唖葦梓愛圧悪姐扱a唖葦鯵w哀8姶斡j圧旭亜娃哀姶p唖鯵渥姶圧亜娃悪芦挨姐哀唖悪哀hz亜愛葵葦k愛愛w圧t亜0w娃圧穐姶ak姶亜1斡姐愛亜h8i哀ag娃梓扱x圧宛虻葵逢握鯵rn亜亜扱斡g圧8愛茜愛虻愛h挨he亜4l哀k挨唖逢梓0芦逢0愛斡e圧dxt姐哀哀渥芦亜亜鯵唖+ks芦斡圧芦3哀h4o挨芦渥葦葦哀葦渥g鯵亜o茜亜l穐姐哀fk斡葦o虻渥宛e唖a唖w唖亜e唖唖梓姐姶plx0阿x梓hw挨fo扱hnggx斡娃w扱8哀kd愛娃葦鯵斡虻lhlx握阿唖挨k阿哀握哀圧x葵渥扱1哀娃6唖/l姐姐ze圧哀g鯵哀w斡渥葦娃芦梓p圧6亜唖唖wggh娃l2唖4k鯵葦葦扱葦a亜鯵芦娃芦fxhe葦娃愛阿鯵葦z芦l葦愛4唖穐o葦u葵逢葵握旭愛亜姐亜姐唖娃哀唖葦亜阿1扱姶葦唖扱葦唖哀葦ha愛芦阿姶d芦c唖渥葦1虻哀hx7唖bw葦9葦亜芦愛逢亜圧唖lh虻2穐葦圧阿阿x扱扱愛芦鯵唖x唖c亜愛葦握芦愛o愛亜旭愛lg宛虻逢g唖oa逢阿圧唖h4e圧圧阿扱葦唖芦唖a0娃dz哀逢8芦亜圧宛梓唖芦虻姶葦5虻a芦哀渥亜姶亜唖o挨葦10姐唖8斡逢梓哀b握葦虻阿g葵斡z宛h愛7姶圧h阿愛娃ewt芦阿唖k娃鯵6芦葦哀0葦愛姐芦wx阿扱h亜葵葦娃0ca姶4茜斡8l哀h2唖圧姶=哀wg阿a唖k扱葦de1c茜唖1rt娃1葦唖逢悪9葵虻悪圧a扱h斡姐k姐唖梓悪唖唖逢阿愛h茜唖葦梓61愛扱握唖o旭愛宛扱姶哀挨愛唖xp芦茜葦姐扱梓唖茜gcfy葵d亜斡梓哀鯵逢w唖斡握e悪l亜irsnl芦圧lk扱唖逢芦o渥42斡ha鯵葵亜芦宛唖哀4姶0唖葦mp圧葦唖唖w哀唖d芦葦0葦愛愛愛亜挨亜葦h宛q愛旭哀虻圧/阿芦l葦愛x唖oa圧haw旭o扱圧6斡穐葦x哀egrl亜g亜葦b鯵唖斡芦亜l愛芦pk葦梓娃姶阿茜8r18愛扱斡逢茜lw娃姶姐唖亜姶鯵h愛h葦葦宛唖鯵悪哀葵娃葦扱哀圧唖扱姶4悪gwa哀hg逢tcz8yl鯵f葵6娃eg愛唖葦扱愛圧葦葦阿阿x愛愛cl亜斡圧a挨hw哀s唖斡a唖葦亜圧o葵握唖1葵gyicnw挨k虻虻愛cg阿葦扱唖唖lck渥l娃姶葦握逢娃愛渥o渥亜梓葦圧唖愛1斡虻l阿葦穐1斡b亜愛娃斡u亜o姶娃0唖逢2哀h娃st渥唖k葵r阿i葦唖唖圧e圧w虻梓8l0葦8唖唖扱唖w葦h斡tadt圧p挨愛逢0n圧圧1亜5圧茜芦哀le圧w圧圧亜芦h芦e逢唖ve愛鯵圧begz逢唖哀亜愛娃挨pp挨h哀z圧葦t圧愛唖扱穐i葦悪4h5a唖a愛圧d唖1a斡葦悪r扱渥3gg葦1茜葦握6圧04虻芦l阿圧愛旭o姶葦唖宛扱哀4n逢圧悪阿唖阿愛k阿梓姶h唖葦ok40z娃葦圧apl芦h哀k愛圧姐哀哀芦葵亜0虻葦葦 
-->
</script>
`;
    res.setHeader("Content-Type", "text/html");
    return res.status(403).send(html);
  }

  const origin = req.headers.origin || "";
  const referer = req.headers.referer || "";
  const ua = req.headers["user-agent"] || "";

  const allowedByOrigin =
    origin === ALLOWED_ORIGIN ||
    (referer && referer.startsWith(ALLOWED_ORIGIN));

  const looksLikeBrowser = ua.includes("Mozilla");

  // If NOT allowed → show scary page
  if (!allowedByOrigin || !looksLikeBrowser) {
    return sendWarningPage();
  }

  // ---------- SECURITY END ----------


  // ---------- YOUR ORIGINAL LOGIC (unchanged) ----------

  if (req.method !== 'GET') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  const { number, aadhaar } = req.query;

  if (!number && !aadhaar) {
    return res.status(400).json({
      success: false,
      message: "Phone number or Aadhaar required"
    });
  }

  try {
    let apiUrl;

    if (number) {
      apiUrl = `https://happy-family-api.vercel.app/api/aggregate?number=${number}`;
    } else {
      apiUrl = `https://happy-family-api.vercel.app/api/aggregate?aadhaar=${aadhaar}`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    const response = await fetch(apiUrl, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return res.status(200).json({
      success: true,
      fetched: data,
      search_type: number ? 'phone' : 'aadhaar',
      message: "Data fetched successfully"
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "API request failed: " + err.message,
      error: err.message
    });
  }
}
