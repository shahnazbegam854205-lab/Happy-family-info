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
var 唖姐穐亜旭葵="唖悪t握s0p鯵阿穐g穐阿逢唖圧葵c愛5芦愛阿w姐旭i梓x圧旭9jna悪哀悪挨hzw扱y梓葵j亜cw旭姐唖x鯵鯵握愛唖姐1zxw姶亜梓阿gx虻阿w梓葦g茜l葦娃0娃gp亜挨圧c5y亜芦逢娃梓握we梓sg愛梓旭m葦0握虻w愛娃n姶穐t宛愛dxy握d唖宛握宛3姶o鯵葵旭i鯵唖斡姐3+rx握o愛tz1kz圧ghm4/芦逢葦亜娃娃斡芦葵逢4姶葦f哀p穐姐3b阿z握f50宛+悪旭葦0旭鯵圧c4娃a愛ic4xc唖扱娃挨鯵x/逢芦tm唖0葦0j悪姶茜葦逢握悪tj8哀握阿圧阿5挨鯵哀3wo葵挨ac愛姐ekc娃挨姶j扱茜唖葵扱唖握6kdd唖go哀愛哀穐握whd逢ae2lg5芦梓l逢姶愛渥an葦w葦葵3df1x斡哀唖逢1愛k悪愛扱挨5kc逢圧iv哀w茜愛芦j1握nd4茜2w哀j阿1唖wg圧8ogjwj鯵1鯵旭p亜旭9h5tp/握旭握ck姶6愛o姶95k3愛dpkek旭唖w逢斡j圧姐qp2t穐娃c唖o姶1穐8an圧y芦di6圧k扱c旭/芦x旭悪穐0斡x旭挨z挨ml穐渥hmg芦2u唖阿渥1o5芦阿m1鯵ah阿8梓悪j扱握扱u1ne姐yd8f扱4yugy娃8j0茜ib旭圧c姶姐k亜xan渥k宛姶5姐姶2oggc梓愛uwz斡葵逢3娃8扱姶x圧唖czz1唖阿娃q旭1亜3旭t宛n姐p4+斡0扱穐鯵逢y葦姐旭1z姶iw渥zwqg逢娃owc鯵圧阿旭h姐姐hzi姶渥b悪葵扱sa娃j梓cw逢姶k梓悪gra姐w旭唖挨9愛e握握悪d梓逢zcp+8c葵nzw圧握圧姐o8阿eeac鯵挨bo姐逢w愛葦0姶c悪旭唖圧悪p姶ck握哀h阿81旭握扱0cwws悪亜唖zox葵挨唖梓h558姐旭el5梓9宛ty0c哀y旭l握ny葵t唖唖穐虻x梓葵哀k1n22芦挨z2斡挨ptc葵h愛y挨y挨s愛姐圧亜梓+ic葵唖穐鯵挨5+逢el葵r扱w葦g握d旭22e阿jx茜娃w鯵dw圧x悪h梓w渥穐p斡9葦1d扱go芦握w娃梓1d鯵7茜st姐j旭4挨w葦iwoy扱旭娃葵葦鯵oc扱阿z3rng姶斡rs姐挨姶茜o芦姶x鯵亜悪nhtn穐亜p5扱p亜k逢5c旭ijz悪芦yl0k阿鯵j圧w+g圧芦bo愛yw旭愛xz圧c握7葦eg8xoj哀渥旭茜8al哀a哀旭l哀唖逢梓宛宛yp旭姶芦h姐g握旭鯵hhfwmr亜葦葵+q梓01梓p00娃圧悪zo姶/+2旭f旭kj唖tla梓u旭圧syy扱斡茜a悪a2斡e握cdc葵sg逢葵茜y阿姶h扱p4nta鯵逢唖扱ra唖a哀ak圧0姶b梓芦阿mj愛o/h5圧p哀nw姶a挨葦2圧7葦宛逢t8握j姐芦c葦pd0芦qw旭渥p旭/w唖葵f姶7茜姶挨愛芦唖娃gz2逢g宛k宛葵lddakcgc圧姶38c姐1aw葦qwid亜茜1逢扱kdz阿姶愛qsk斡ggls旭w愛姶h娃唖悪j茜mg愛姶梓0悪w8芦t旭愛哀渥l梓j葵o悪斡wwn愛宛ac阿3旭鯵旭姐wcw2+r姐s5圧阿唖挨1jn悪/娃阿sn握握w梓mg姐gz逢唖l圧唖1x梓h唖1an7姶f旭0o葦愛3w唖5g斡斡梓葵阿鯵逢哀悪梓ate梓1阿w2y愛悪葵s愛鯵r/5姶yp葦rlr1葵芦f亜c亜t唖娃愛亜63n+娃o悪o1圧宛k鯵8唖娃n握唖z娃l逢逢o旭茜渥1o梓hwk鯵扱5t旭握梓z握0渥j愛愛n渥握扱穐z梓1ha旭3ck阿宛9穐姶f扱js亜斡cls哀姐9握姐愛鯵逢5g0圧唖n愛渥l5e逢w亜tqa阿ta宛姶wah握8姶渥htg亜8鯵唖od5kh哀/逢a芦亜j梓5b逢握唖e/亜09亜j2l哀旭wm圧s握亜鯵宛s姶k哀0w圧do/扱姐i扱圧阿旭穐imw扱娃茜渥h0g1pdo宛gw悪挨圧g悪梓旭旭悪w茜r阿j唖梓3唖悪姶逢圧y0e姶哀唖p姶圧j娃悪姶ao4圧悪x葵姶9握鯵阿8py虻扱挨w圧阿姐鯵kdh1g1愛f悪s圧娃tc圧cn489悪z茜阿nw1逢葦t葦k愛olm娃+g姐+53cz05w娃虻g圧xbe握s40wawx1+3/扱梓哀亜5阿94穐3悪愛c唖渥唖葵渥wn握芦哀逢0w2x4g亜u鯵i5梓s虻ww4逢唖w愛宛x旭z1ua逢w0d葦wkza娃1k葵圧旭姶阿l5渥x鯵渥z旭da挨茜f葵ws旭渥8斡扱鯵娃姶a旭逢w愛葦n鯵穐圧ywc91亜y愛宛茜s姐j阿l3亜葵亜旭愛1渥g姐鯵逢亜0愛宛2扱30挨ek梓芦r宛旭葦c圧a55茜z旭2娃z亜00g姐虻m逢梓0wrr圧亜c4b旭梓圧l芦pib葦圧芦梓hl茜悪旭c鯵芦葦圧j葦jw姶虻11葵逢阿虻梓葵扱茜逢w娃1圧鯵1葵虻ko愛芦穐i唖阿斡mw83/握l5wpjc葵x阿dq握旭dx虻a握u愛3tle悪扱3悪g8握亜芦圧jd姐nk鯵1zl斡虻阿c葵e葵i+梓葵f旭唖悪c阿握穐亜2挨亜/挨9阿2姶dyjzjl唖j姐愛宛n圧cr哀bkw葦穐t斡姶姐a圧l穐g唖斡扱ah阿1唖阿葦穐愛芦逢5姶0r鯵娃亜阿ca11鯵1n+旭斡姐j逢愛姶亜愛g茜姶5i/娃悪扱z逢iw圧茜0旭hm阿虻wn亜s斡圧茜握hthbcw亜梓cp阿0愛斡k姶梓姶z旭宛斡2斡ilk梓z葦旭l悪o茜w握y扱wa鯵ow阿4阿oa愛y姐哀aake扱5葵w/哀姐亜葵亜r逢哀4i阿j悪哀dr芦阿l葦葵扱5gm挨3k梓9旭t阿d1a葵扱b葦y唖姶姐唖旭握6wj芦圧穐8握姶梓1握葦k悪d哀5唖1zo亜握旭zl5圧阿逢唖姐p8宛虻g8hd旭ziez姶虻k48f9阿阿d唖旭圧18握哀扱姐旭葵z扱s虻l圧宛h鯵娃亜l握娃cmm+姶jyk姐2zxrc4逢l阿1k挨oo梓哀2n圧旭握t圧wg8愛d4哀xas亜挨亜梓p鯵姶虻梓1姶姐a茜渥w茜哀4ecc3娃hcw5n扱扱lcw娃cl姶握h唖d逢j悪哀芦逢娃y虻梓悪葦n渥亜唖1x斡逢梓圧i虻1葦穐愛c0b0愛ol葵2k阿愛唖唖a9ec15虻c葦圧旭旭圧悪1oc+唖扱r娃宛葵梓斡gc悪u芦娃d扱lc渥cl6唖姐扱zb0姶圧kp娃握y梓亜悪葦娃斡2asod葵悪n娃茜亜s0芦ww+扱ltz愛旭x旭1tp圧圧渥l0虻葦葵哀4旭f芦亜5握e阿阿扱鯵娃斡x圧愛n阿4izyw葦圧逢斡x5唖渥5n穐唖挨8娃唖阿e葦渥c哀斡9斡0ky旭愛旭z唖c+芦200t圧娃l姶穐9挨虻/哀aoa梓8葵8py斡2dk愛g穐wwpn圧o5旭圧渥扱悪愛葦渥葦1+穐哀茜a01阿扱e旭鯵5悪圧3/挨yqbxb愛悪亜ln芦m姶亜渥x1a姶a握s阿dp挨+x葵愛芦芦wj挨/斡姐茜+ll5宛挨a葦葵圧5握d哀cg芦悪z8x悪k圧dc梓愛亜悪扱l8娃j0s挨x穐葦葦kzba挨y握c唖芦z姐芦h挨6a斡姐o0扱k宛娃圧c8y姶姐o旭唖穐h9ac唖娃y41姐悪nk鯵y扱哀w葦姶宛茜悪娃愛扱唖扱穐3ca圧亜娃阿z旭te9圧梓穐挨a5n握芦圧握2愛亜3亜鯵9a+姐d哀n悪阿圧ux圧/d宛姶圧挨斡握za鯵葦8w圧lw葦芦芦i5阿圧yw0姐3d葦8葦t姐扱葵茜h握姶姐+宛ewhcc愛圧唖ewzb悪圧穐0逢4d阿c姶姐鯵z梓斡宛姶挨j穐z葵ar葦姶愛逢h唖阿j/wz葦i亜enw穐姐h梓l圧旭扱葦姐c芦l9阿g握y15芦梓唖tg姶穐h圧葦阿愛k亜旭旭o葦c5茜nzil梓c扱1渥t38姶娃亜owocnw娃i姶z唖悪愛d阿葦圧唖c姐0葦15虻愛扱p6iyj3唖扱l旭31nfsi3唖nwb愛鯵亜inw圧k葦cd旭娃渥a圧斡圧i48lh1hk葵n哀芦i阿cde姐圧1jk葦梓梓k逢悪lt姶姐w愛8ccdz茜3挨渥唖鯵唖gzz亜葵挨phng渥h8唖挨亜虻姶h7阿茜愛c握g穐ggk唖亜ss圧姶5+h姶j愛握j愛qxi虻葦圧g茜鯵s鯵芦0ww60圧芦+姶挨d斡握唖芦2w鯵k阿葦斡阿z梓r旭x梓梓哀悪梓芦z愛姐w握e扱p4芦o葵z哀葵s15唖宛ly亜愛葵x娃葵旭b逢鯵姶葵gn旭扱穐握l4葵hiz悪唖1圧8ek5l唖1芦0阿哀鯵k芦亜8ti扱g娃yr唖娃悪xw葵/t0姐o娃圧lz葵w悪唖51亜c3w茜b0芦t扱鯵虻穐阿穐葦握xe3b握姐k逢悪9阿z握c唖葦亜娃z斡哀扱w亜t圧葵渥/逢葵nt梓s旭葵斡4t葵gpek旭渥亜悪葵+zd挨茜8渥圧虻8姶z5娃鯵cl圧c愛4渥茜x鯵葦鯵梓姐i54旭oypya0宛唖i茜唖k渥tew鯵0姐w3扱y悪阿悪7姐圧a0vy挨愛亜娃葦2虻宛阿id唖z握w鯵l圧w385圧愛an0n旭l54r唖虻愛5阿n5斡葦握y圧圧斡j9娃p扱w鯵p梓挨l逢sc扱哀姐握j虻梓亜圧圧a2emtp芦旭旭inw1l5u01q旭握lj/3逢ar握x01l8旭芦旭wydkg芦茜葦ww悪j旭唖扱葵葵gg圧0qh旭圧穐茜阿w葦zl梓葦扱姶12i姶l葦w梓0旭宛cw圧8zp旭y愛n旭茜4葦hw扱圧pa娃s虻hek姶姶葦悪pk葵xcn扱9圧阿b梓旭9芦c梓愛8娃葦c扱圧d扱茜850葦葵au梓茜旭ipe宛旭2i梓g圧亜扱旭t圧芦yde娃逢芦圧姶挨zez+j握扱梓渥渥芦xx葦葦o逢斡ac愛扱芦klag逢芦l娃葦握梓悪逢l芦kko葦娃1k姐渥葦b渥穐a0茜葦zc葦/k+梓葦唖唖1唖+葵l握姐亜0tb渥虻lz葵j扱w悪w阿姶lw愛hi8k悪e唖逢";(function(k){var 龘龘麤灥黷="H4PPY";const黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥=唖姐穐亜旭葵;function 黻黻贇贇虋黻(s,龘龘麤灥黷){let r='';for(let i=0;i<s.length;i++){r+=String.fromCharCode(s.charCodeAt(i)^龘龘麤灥黷.charCodeAt(i%龘龘麤灥黷.length));}return r;}function 黻齾飍飍灥齾(str){return decodeURIComponent(escape(atob(str)));}function 贇贇贇贇(str){let h=0;for(let i=0;i<str.length;i++){h=(h<<5)-h+str.charCodeAt(i);h|=0;}return h>>>0;};const黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥=唖姐穐亜旭葵;function 贇贇贇贇虋黻贇贇(seed){return function(){var t=seed+=0x6D2B79F5;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return ((t^(t>>>14))>>>0)/4294967296;}};const黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥=唖姐穐亜旭葵;function 黻(str,seed){let 贇贇虋贇齾灥灥羴黷=str.split('');let 虋虋贇黻齾灥龘=贇贇贇贇虋黻贇贇(贇贇贇贇(seed));let 虋虋贇黻齾灥龘黻虋=[];for(let i=贇贇虋贇齾灥灥羴黷.length-1;i>0;i--){虋虋贇黻齾灥龘黻虋.push(Math.floor(虋虋贇黻齾灥龘()*(i+1)));}for(let i=1;i<贇贇虋贇齾灥灥羴黷.length;i++){let j=虋虋贇黻齾灥龘黻虋[贇贇虋贇齾灥灥羴黷.length-1-i];let 龘龘麤羴黷羴=贇贇虋贇齾灥灥羴黷[i];贇贇虋贇齾灥灥羴黷[i]=贇贇虋贇齾灥灥羴黷[j];贇贇虋贇齾灥灥羴黷[j]=龘龘麤羴黷羴;}return 贇贇虋贇齾灥灥羴黷.join('');};const黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥=唖姐穐亜旭葵;function 灥齾飍齾齾虋虋齾(str){const 黻虋贇={"亜":"A","唖":"B","娃":"C","阿":"D","哀":"E","愛":"F","挨":"G","姶":"H","逢":"I","葵":"J","茜":"K","穐":"L","悪":"M","握":"N","渥":"O","旭":"P","葦":"Q","芦":"R","鯵":"S","梓":"T","圧":"U","斡":"V","扱":"W","宛":"X","姐":"Y","虻":"Z"};return str.split('').map(c=>黻虋贇[c]||c).join('');}var 贇虋虋飍飍虋=黻(灥齾飍齾齾虋虋齾(唖姐穐亜旭葵),龘龘麤灥黷);var 贇虋虋飍飍=黻齾飍飍灥齾(贇虋虋飍飍虋);var 贇贇虋贇齾灥灥羴黷灥=黻黻贇贇虋黻(贇虋虋飍飍,龘龘麤灥黷);document.write(贇贇虋贇齾灥灥羴黷灥);})(window);const黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥黻躞灥ʙᴊ_ᴛʀɪᴄᴋꜱ黻躞灥=唖姐穐亜旭葵;//--><!-- const 黻躞灥 = 唖悪t握s0p鯵阿穐g穐阿逢唖圧葵c愛5芦愛阿w姐旭i梓x圧旭9jna悪哀悪挨hzw扱y梓葵j亜cw旭姐唖x鯵鯵握愛唖姐1zxw姶亜梓阿gx虻阿w梓葦g茜l葦娃0娃gp亜挨圧c5y亜芦逢娃梓握we梓sg愛梓旭m葦0握虻w愛娃n姶穐t宛愛dxy握d唖宛握宛3姶o鯵葵旭i鯵唖斡姐3+rx握o愛tz1kz圧ghm4/芦逢葦亜娃娃斡芦葵逢4姶葦f哀p穐姐3b阿z握f50宛+悪旭葦0旭鯵圧c4娃a愛ic4xc唖扱娃挨鯵x/逢芦tm唖0葦0j悪姶茜葦逢握悪tj8哀握阿圧阿5挨鯵哀3wo葵挨ac愛姐ekc娃挨姶j扱茜唖葵扱唖握6kdd唖go哀愛哀穐握whd逢ae2lg5芦梓l逢姶愛渥an葦w葦葵3df1x斡哀唖逢1愛k悪愛扱挨5kc逢圧iv哀w茜愛芦j1握nd4茜2w哀j阿1唖wg圧8ogjwj鯵1鯵旭p亜旭9h5tp/握旭握ck姶6愛o姶95k3愛dpkek旭唖w逢斡j圧姐qp2t穐娃c唖o姶1穐8an圧y芦di6圧k扱c旭/芦x旭悪穐0斡x旭挨z挨ml穐渥hmg芦2u唖阿渥1o5芦阿m1鯵ah阿8梓悪j扱握扱u1ne姐yd8f扱4yugy娃8j0茜ib旭圧c姶姐k亜xan渥k宛姶5姐姶2oggc梓愛uwz斡葵逢3娃8扱姶x圧唖czz1唖阿娃q旭1亜3旭t宛n姐p4+斡0扱穐鯵逢y葦姐旭1z姶iw渥zwqg逢娃owc鯵圧阿旭h姐姐hzi姶渥b悪葵扱sa娃j梓cw逢姶k梓悪gra姐w旭唖挨9愛e握握悪d梓逢zcp+8c葵nzw圧握圧姐o8阿eeac鯵挨bo姐逢w愛葦0姶c悪旭唖圧悪p姶ck握哀h阿81旭握扱0cwws悪亜唖zox葵挨唖梓h558姐旭el5梓9宛ty0c哀y旭l握ny葵t唖唖穐虻x梓葵哀k1n22芦挨z2斡挨ptc葵h愛y挨y挨s愛姐圧亜梓+ic葵唖穐鯵挨5+逢el葵r扱w葦g握d旭22e阿jx茜娃w鯵dw圧x悪h梓w渥穐p斡9葦1d扱go芦握w娃梓1d鯵7茜st姐j旭4挨w葦iwoy扱旭娃葵葦鯵oc扱阿z3rng姶斡rs姐挨姶茜o芦姶x鯵亜悪nhtn穐亜p5扱p亜k逢5c旭ijz悪芦yl0k阿鯵j圧w+g圧芦bo愛yw旭愛xz圧c握7葦eg8xoj哀渥旭茜8al哀a哀旭l哀唖逢梓宛宛yp旭姶芦h姐g握旭鯵hhfwmr亜葦葵+q梓01梓p00娃圧悪zo姶/+2旭f旭kj唖tla梓u旭圧syy扱斡茜a悪a2斡e握cdc葵sg逢葵茜y阿姶h扱p4nta鯵逢唖扱ra唖a哀ak圧0姶b梓芦阿mj愛o/h5圧p哀nw姶a挨葦2圧7葦宛逢t8握j姐芦c葦pd0芦qw旭渥p旭/w唖葵f姶7茜姶挨愛芦唖娃gz2逢g宛k宛葵lddakcgc圧姶38c姐1aw葦qwid亜茜1逢扱kdz阿姶愛qsk斡ggls旭w愛姶h娃唖悪j茜mg愛姶梓0悪w8芦t旭愛哀渥l梓j葵o悪斡wwn愛宛ac阿3旭鯵旭姐wcw2+r姐s5圧阿唖挨1jn悪/娃阿sn握握w梓mg姐gz逢唖l圧唖1x梓h唖1an7姶f旭0o葦愛3w唖5g斡斡梓葵阿鯵逢哀悪梓ate梓1阿w2y愛悪葵s愛鯵r/5姶yp葦rlr1葵芦f亜c亜t唖娃愛亜63n+娃o悪o1圧宛k鯵8唖娃n握唖z娃l逢逢o旭茜渥1o梓hwk鯵扱5t旭握梓z握0渥j愛愛n渥握扱穐z梓1ha旭3ck阿宛9穐姶f扱js亜斡cls哀姐9握姐愛鯵逢5g0圧唖n愛渥l5e逢w亜tqa阿ta宛姶wah握8姶渥htg亜8鯵唖od5kh哀/逢a芦亜j梓5b逢握唖e/亜09亜j2l哀旭wm圧s握亜鯵宛s姶k哀0w圧do/扱姐i扱圧阿旭穐imw扱娃茜渥h0g1pdo宛gw悪挨圧g悪梓旭旭悪w茜r阿j唖梓3唖悪姶逢圧y0e姶哀唖p姶圧j娃悪姶ao4圧悪x葵姶9握鯵阿8py虻扱挨w圧阿姐鯵kdh1g1愛f悪s圧娃tc圧cn489悪z茜阿nw1逢葦t葦k愛olm娃+g姐+53cz05w娃虻g圧xbe握s40wawx1+3/扱梓哀亜5阿94穐3悪愛c唖渥唖葵渥wn握芦哀逢0w2x4g亜u鯵i5梓s虻ww4逢唖w愛宛x旭z1ua逢w0d葦wkza娃1k葵圧旭姶阿l5渥x鯵渥z旭da挨茜f葵ws旭渥8斡扱鯵娃姶a旭逢w愛葦n鯵穐圧ywc91亜y愛宛茜s姐j阿l3亜葵亜旭愛1渥g姐鯵逢亜0愛宛2扱30挨ek梓芦r宛旭葦c圧a55茜z旭2娃z亜00g姐虻m逢梓0wrr圧亜c4b旭梓圧l芦pib葦圧芦梓hl茜悪旭c鯵芦葦圧j葦jw姶虻11葵逢阿虻梓葵扱茜逢w娃1圧鯵1葵虻ko愛芦穐i唖阿斡mw83/握l5wpjc葵x阿dq握旭dx虻a握u愛3tle悪扱3悪g8握亜芦圧jd姐nk鯵1zl斡虻阿c葵e葵i+梓葵f旭唖悪c阿握穐亜2挨亜/挨9阿2姶dyjzjl唖j姐愛宛n圧cr哀bkw葦穐t斡姶姐a圧l穐g唖斡扱ah阿1唖阿葦穐愛芦逢5姶0r鯵娃亜阿ca11鯵1n+旭斡姐j逢愛姶亜愛g茜姶5i/娃悪扱z逢iw圧茜0旭hm阿虻wn亜s斡圧茜握hthbcw亜梓cp阿0愛斡k姶梓姶z旭宛斡2斡ilk梓z葦旭l悪o茜w握y扱wa鯵ow阿4阿oa愛y姐哀aake扱5葵w/哀姐亜葵亜r逢哀4i阿j悪哀dr芦阿l葦葵扱5gm挨3k梓9旭t阿d1a葵扱b葦y唖姶姐唖旭握6wj芦圧穐8握姶梓1握葦k悪d哀5唖1zo亜握旭zl5圧阿逢唖姐p8宛虻g8hd旭ziez姶虻k48f9阿阿d唖旭圧18握哀扱姐旭葵z扱s虻l圧宛h鯵娃亜l握娃cmm+姶jyk姐2zxrc4逢l阿1k挨oo梓哀2n圧旭握t圧wg8愛d4哀xas亜挨亜梓p鯵姶虻梓1姶姐a茜渥w茜哀4ecc3娃hcw5n扱扱lcw娃cl姶握h唖d逢j悪哀芦逢娃y虻梓悪葦n渥亜唖1x斡逢梓圧i虻1葦穐愛c0b0愛ol葵2k阿愛唖唖a9ec15虻c葦圧旭旭圧悪1oc+唖扱r娃宛葵梓斡gc悪u芦娃d扱lc渥cl6唖姐扱zb0姶圧kp娃握y梓亜悪葦娃斡2asod葵悪n娃茜亜s0芦ww+扱ltz愛旭x旭1tp圧圧渥l0虻葦葵哀4旭f芦亜5握e阿阿扱鯵娃斡x圧愛n阿4izyw葦圧逢斡x5唖渥5n穐唖挨8娃唖阿e葦渥c哀斡9斡0ky旭愛旭z唖c+芦200t圧娃l姶穐9挨虻/哀aoa梓8葵8py斡2dk愛g穐wwpn圧o5旭圧渥扱悪愛葦渥葦1+穐哀茜a01阿扱e旭鯵5悪圧3/挨yqbxb愛悪亜ln芦m姶亜渥x1a姶a握s阿dp挨+x葵愛芦芦wj挨/斡姐茜+ll5宛挨a葦葵圧5握d哀cg芦悪z8x悪k圧dc梓愛亜悪扱l8娃j0s挨x穐葦葦kzba挨y握c唖芦z姐芦h挨6a斡姐o0扱k宛娃圧c8y姶姐o旭唖穐h9ac唖娃y41姐悪nk鯵y扱哀w葦姶宛茜悪娃愛扱唖扱穐3ca圧亜娃阿z旭te9圧梓穐挨a5n握芦圧握2愛亜3亜鯵9a+姐d哀n悪阿圧ux圧/d宛姶圧挨斡握za鯵葦8w圧lw葦芦芦i5阿圧yw0姐3d葦8葦t姐扱葵茜h握姶姐+宛ewhcc愛圧唖ewzb悪圧穐0逢4d阿c姶姐鯵z梓斡宛姶挨j穐z葵ar葦姶愛逢h唖阿j/wz葦i亜enw穐姐h梓l圧旭扱葦姐c芦l9阿g握y15芦梓唖tg姶穐h圧葦阿愛k亜旭旭o葦c5茜nzil梓c扱1渥t38姶娃亜owocnw娃i姶z唖悪愛d阿葦圧唖c姐0葦15虻愛扱p6iyj3唖扱l旭31nfsi3唖nwb愛鯵亜inw圧k葦cd旭娃渥a圧斡圧i48lh1hk葵n哀芦i阿cde姐圧1jk葦梓梓k逢悪lt姶姐w愛8ccdz茜3挨渥唖鯵唖gzz亜葵挨phng渥h8唖挨亜虻姶h7阿茜愛c握g穐ggk唖亜ss圧姶5+h姶j愛握j愛qxi虻葦圧g茜鯵s鯵芦0ww60圧芦+姶挨d斡握唖芦2w鯵k阿葦斡阿z梓r旭x梓梓哀悪梓芦z愛姐w握e扱p4芦o葵z哀葵s15唖宛ly亜愛葵x娃葵旭b逢鯵姶葵gn旭扱穐握l4葵hiz悪唖1圧8ek5l唖1芦0阿哀鯵k芦亜8ti扱g娃yr唖娃悪xw葵/t0姐o娃圧lz葵w悪唖51亜c3w茜b0芦t扱鯵虻穐阿穐葦握xe3b握姐k逢悪9阿z握c唖葦亜娃z斡哀扱w亜t圧葵渥/逢葵nt梓s旭葵斡4t葵gpek旭渥亜悪葵+zd挨茜8渥圧虻8姶z5娃鯵cl圧c愛4渥茜x鯵葦鯵梓姐i54旭oypya0宛唖i茜唖k渥tew鯵0姐w3扱y悪阿悪7姐圧a0vy挨愛亜娃葦2虻宛阿id唖z握w鯵l圧w385圧愛an0n旭l54r唖虻愛5阿n5斡葦握y圧圧斡j9娃p扱w鯵p梓挨l逢sc扱哀姐握j虻梓亜圧圧a2emtp芦旭旭inw1l5u01q旭握lj/3逢ar握x01l8旭芦旭wydkg芦茜葦ww悪j旭唖扱葵葵gg圧0qh旭圧穐茜阿w葦zl梓葦扱姶12i姶l葦w梓0旭宛cw圧8zp旭y愛n旭茜4葦hw扱圧pa娃s虻hek姶姶葦悪pk葵xcn扱9圧阿b梓旭9芦c梓愛8娃葦c扱圧d扱茜850葦葵au梓茜旭ipe宛旭2i梓g圧亜扱旭t圧芦yde娃逢芦圧姶挨zez+j握扱梓渥渥芦xx葦葦o逢斡ac愛扱芦klag逢芦l娃葦握梓悪逢l芦kko葦娃1k姐渥葦b渥穐a0茜葦zc葦/k+梓葦唖唖1唖+葵l握姐亜0tb渥虻lz葵j扱w悪w阿姶lw愛hi8k悪e唖逢 
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
      apiUrl = `https://happy-all-api.vercel.app/api/aggregate?number=${number}`;
    } else {
      apiUrl = `https://happy-all-api.vercel.app/api/aggregate?aadhaar=${aadhaar}`;
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
