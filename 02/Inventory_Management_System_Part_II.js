function correctBox(boxes = []) {
  let repeatingLetters = '';
  for (const box of boxes) {
    for (const otherBox of boxes) {
      if (box !== otherBox) {
        const spreadBox = [...box];
        const spreadOtherBox = [...otherBox];
        let tempLetters = '';
        for (let i = 0; i < spreadBox.length; i++) {
          if (spreadBox[i] === spreadOtherBox[i]) {
            tempLetters += spreadBox[i];
            if (tempLetters.length > repeatingLetters.length) {
              repeatingLetters = tempLetters;
            }
          }
        }
      }
    }
  }
  return repeatingLetters;
}

const inputStr = `oeambtcgjqnzhgkdylfapoiusr
oewmbtcxjqnzhgvdyltapvqusr
oewmbtchjqnzigkdylfapviuse
oeimbucxjqnzhgkdyyfapviusr
fewmbtcxjqndhgcdylfapviusr
oevgbtccjqnzhgkdylfapviusr
oewmbtcxjqnzhnkdylmapvpusr
oewmbtcxjqnzhxkdyldapvirsr
oewmutccjqnzngkdylfapviusr
oewmbtcxbqnzhgkdsliapviusr
ozwmbtfxjqnzcgkdylfapviusr
oewmbtdxjqnzhgkdypfapsiusr
oeylbtcxjqnzhgyyylfapviusr
oewmbtcxjqnzhgkdrlfakuiusr
oewmbtcujqnxhgkdylfadviusr
oewmbtcxlqpzhgkdylfaaviusr
oewmztcxjqnzhgkdylfqpliusr
oeembtcxjqnzhgkdtlmapviusr
onwmbtcxjqnqhgkdylfapdiusr
oewmbtcxnqnzhgkdylfapsbusr
oeoibtjxjqnzhgkdylfapviusr
oxwmbtcxjqnzhgkdylfapcipsr
oewmbtoxbqnzhgzdylfapviusr
okwubtcxjqnzhgkdylfapiiusr
oewmbtcxjqnzhgodylfapnicsr
oewmitcxjqnzhgkdylfaphlusr
oewmbtaxjqnzhgkhylfapveusr
oewmftcbjqnzhgkdylfapviurr
oewmbtcujqnzbgkdylfapliusr
oeevbtcxjqnzhgkdylfapniusr
oewmbtcxjqnvhgkdylfapnpusr
oewabtcxjqnzhgddylfapviust
oewmbtyxjqnzhgkdvlfapvinsr
jewmbtcxjonzhzkdylfapviusr
oewmbrcxjqnzxgkdylfapoiusr
dewmbtmxjqnzhgkdyvfapviusr
oewmbtctjqnzhgkdmlfapvihsr
oewmbjcxjqnzhgvdylfapviurr
oewmbtcxjqnzhgcdxlfapvfusr
oewmbucxjqnzhgkdyltapvifsr
gewmbtcejqezhgkdylfapviusr
oewebtcxjznzhgkdylfapvhusr
oewmjtcxjqnzhgkdycfakviusr
oewmbtcxjtnvhgkdylfabviusr
oewmbtcxjqnthgkgclfapviusr
hewmbtcxjqnzhgkdwlfapziusr
oewmbtcxjqnzhgkdylfqpviysf
oewmbtcxjvnzhgmdylfapviuse
oewmbtcxjqnphgkdymzapviusr
oewmbtcxjqnzwmkdylfapvbusr
oewmbthxjqnzhgkdylfatvilsr
oewmbtcxaznzhgkhylfapviusr
zewmbscxjqnzhgkdylfatviusr
oewmbecyaqnzhgkdylfapviusr
oewmbtnxjqnzhekxylfapviusr
oewmbtcxjqczhgkdyltnpviusr
yewmbecxjnnzhgkdylfapviusr
oewmbocxjqnzhgkyylfapviusv
oewmxtcxjqnzhgkkylfspviusr
oiwmbtcxjqnzhgkdydfapvgusr
oewmbtcxjqnzngydylfwpviusr
oewmctcxjqnzhgkdelfapviasr
oewmbtcxjqnzhgxdwmfapviusr
oewmntcxjqnzhgkdylfamviusw
oewmatcxjqbzhgkdylfapvhusr
oewmbtcxjqnqhmkdyluapviusr
opwmbtcxjqnzhgkdywfapvilsr
omwmbtcxjqnlhgkdylyapviusr
oewmltcxoqnzhgkdylfapvfusr
oewmbtcxjqtzhgkdyyoapviusr
oewmbtcxjqnzhrkdzlffpviusr
oewmbtqxyqnzhgkdylfalviusr
oeuzbtcxlqnzhgkdylfapviusr
oewmbtcxjqnzhtxdylflpviusr
oewmdtfxjqnzhgkdylfapviufr
ojwmbtcxjqnzhgkdylfypviqsr
oewmbtcxjqnzhgkdylfapvivuf
oewmjtcsjqnzxgkdylfapviusr
ohembtcxjqnzhnkdylfapviusr
oewmptcajqnzhgkdylfapviusd
oewmbtcxjcnwhgkbylfapviusr
oewmbtcxjqnzhgddnlfapvqusr
oewmbtcfjqnzhgkdypfapvzusr
oewdbtccjqnzhgfdylfapviusr
oewmbtcxjpnzhgkdplfaqviusr
oepmbhcxjqnzhgkdylfaaviusr
oewmbtcwjqxzhgkwylfapviusr
oewmatcxjqnchgkdylfapvifsr
omwmbncxjqnzhgkdylfapviuyr
sewmbsckjqnzhgkdylfapviusr
oewubtcxjqnzhgkdyluapvausr
ohwmbtcxqqhzhgkdylfapviusr
oewmbtcxjqnzhgkpylfapnissr
eewmbccxjqnzhgkdylbapviusr
oewmitcyjqnzhgkdylkapviusr
oewmbtcxjvnzhgkdyjfvpviusr
oewmbtcxjqmzhgkdyefagviusr
oewmbtcvjqnzhgkdylpapviufr
oewmbtcxjrnkhgkdylfapsiusr
oewmbtcxjqnzygkdylfaxvipsr
oexmbtcxjqczhgkdyloapviusr
oewmbtcxjqnlhtkdylfapvmusr
oewmbtcxdqjzdgkdylfapviusr
oewmbtclgqnzhgkdylfabviusr
oewmbtvfjqnzhgkdylfapviulr
oewmbtcxjqnzhgkdyllarvijsr
oewmbtyxjqnzhgpdylxapviusr
oeylbtcxjqnzhgkyylfapviusr
oewmbtctjqnzhjkdylfapviulr
oermatcxjqnzhgkdylzapviusr
oewmbtcxjqnztgkdzlfapviutr
oewlbtcxjqnztgkvylfapviusr
oewmbtcxjqzvhgkdylfapviusk
oewmbtcxjqnzmgkdyldapvilsr
felmbtcxjqnzhgkdylfapviusl
oewmbtcxjgnzhgkjylfaeviusr
ovwmbtcxjqpzhgkdylfapvizsr
eewmbtcpjqnzhgkdylfapvijsr
oewmbzcxjqnzhgkdylfaeviutr
tewmbtcljqhzhgkdylfapviusr
oewmbtcujqnzhgkdnliapviusr
oewmbtcljqnzhskdylfapvgusr
oewmbtchjqnzhgkdylmapviuse
oewmbtcxjqnzbgkdylfaiviurr
oewmbtcxjqnzhkkdyloapsiusr
oewjbtcxjqnhhgkdylfapjiusr
odwmbtcnjqnzhgkdylfapvicsr
oewmbccxjqrzwgkdylfapviusr
kewmbtcvjqnzhgkdylaapviusr
okwmbtcxjqnzhgkdylfspvausr
oewmbtcxjynzhgkdyafapviusw
oewmbtcxjqnzhgwdyleayviusr
oewmbtcxjqnzhgkdylfapviicl
oewmbtcxjqnzhgkdyltaeziusr
oewmbtcxrqnzhgkdylftpvizsr
oewsrtcgjqnzhgkdylfapviusr
oewmbtsxgqnzhgxdylfapviusr
oewmbtcxjanzhgtdylfapeiusr
oewybtcgjqnzhgkdylfapviust
ojwmbncxjqnzhgkdylfapgiusr
ocgebtcxjqnzhgkdylfapviusr
oejcbtcxjqnzhgkvylfapviusr
oswmbtcxjqnkhgkdylfapviusb
oewdbtcxjqnzdgkdylfypviusr
oawmutcxjqnzhgkddlfapviusr
oewzbtcxyqnzhgkdylfapviusy
zewmbtcxjqnzkgkdylwapviusr
aewmbtkxjqnzhgkdylfapviuer
oewmbtcxwqnzhgkdyofapviuur
oewmbtcxjqnzggkdylfapanusr
oewmstcxuqnzhgkdylzapviusr
zewmbtcxjqozhgkdelfapviusr
oewzbtcxjqnahgkdyllapviusr
fewmatcxjqnghgkdylfapviusr
oewmbtcxjqnzhgkdylfapviyqb
oewwbtcxjqnzhgkdyljapviqsr
oewmbtbxjqnzhgkxylfapviesr
oewmbtcbjqnphgkdylfapviysr
oewabtcxyqnzhgkdylfabviusr
oewmbtcxhknzhgkdylfapviusd
ozwmbtcljqnzhgkdylfapviksr
tewmbtcxjqnzhgkdylfaxvqusr
oewmbtcxrqnzhgkdytfapvrusr
ohwmbtcxjcnzhgkdyifapviusr
oewmbpcxjqnzhwkdylfaphiusr
oedmbtcxjqnzhgnbylfapviusr
oewmbocxjqnehgkdylfapvbusr
oeymbtcxjqezegkdylfapviusr
oewmbtcxjqnzhgkdllferviusr
oewmbtcxjqnzhgkwmlfawviusr
oewmbtcxienzhgkdyzfapviusr
mewmbtcxjqnzhqkdylfapviwsr
oewmbtcxjqnztgkmylfapvdusr
ouwmbtcxjqnzhokdylpapviusr
oewmctcxjqhzhgmdylfapviusr
oewmbtcyjqnzhmkdylfarviusr
oewmbtcxjqnzhgkdpnfzpviusr
oewmptcxjqnzhgkdylkapviulr
nefmbtcxsqnzhgkdylfapviusr
oewmbtcxwqnzhgkdilfapvizsr
eewmbtcxjqwzhghdylfapviusr
oewmbtixmqnzhgkjylfapviusr
okwmbtcdzqnzhgkdylfapviusr
oewmbtxxjrnzigkdylfapviusr
oewmdycxjqnzhekdylfapviusr
oewmutcxjqnzhgkdylfapsiuqr
oewmbacxjqnzrgkdrlfapviusr
oewmbtcxpqnzhmkdylfapciusr
oewabtcxjqnzhgkdyrcapviusr
oswmbtcxjqnzhgkdrxfapviusr
gewmbtcnjqnzhgkdylvapviusr
newmbtcxjwnzfgkdylfapviusr
lewmbtcxjqnzhgkdylfaptiujr
oewwbtcxjqndhgkdylfapiiusr
oewmbtcxjqnzhggdylfapvqmsr
lewmbtcxjqnzhgkhllfapviusr
oewmbtocjqnzhgkdylfapvhusr
oedmbtcxjqnzhgkdyhfapviusb
oewmbtcxjqnzhgkdylfajvaosr
zewmbtcxjqnzhgkdylfapvsssr
oewmbthxjqnzhskdylfapviuqr
yewmrtcvjqnzhgkdylfapviusr
oewmbtctjqnzhgkdylfabvhusr
oesmstcxjqnzhgkdylfapqiusr
oewmbtcxjqnzzgkdylfopiiusr
otwmbtzxjqnzhgkdylfaxviusr
ouwmbxcxjqnzhgkdylfapvnusr
oewmbtcxjqezhgedylfapvsusr
oesmhtcsjqnzhgkdylfapviusr
oewdbtcxjqnzhgkdilfapvifsr
oewmbtcxjqnzhgudynfamviusr
qewhbtcxjqnzhgkdyxfapviusr
oewmbzcxjqtzhgkdylfapvitsr
oewmbtccjqzzhgkaylfapviusr
jewmbtcxmqnzhlkdylfapviusr
oewmbtcxjqbzhgkdnlfapviusp
oeimbtcdjqnzhgkdylfapviuer
oewtbtcxjqnihgkdylfahviusr
oewmbtcxhqnzhgkdylfapdiudr
oefmbtcxjqyshgkdylfapviusr
oewmbtcxjqnzhgkfglfapviusx
oecmbocxjqnzhgkdmlfapviusr
oewmbtcxjqnzhghdylfavviuhr
oewmbmcxiqnzhgkpylfapviusr
oewmbtcnjqnzhgkrylfanviusr
oewmbocxjqnzhzkdllfapviusr
eewmbtckjqnzhgkdylfapviusg
oewmbtcrjqqzhgkdylfapvigsr
oewmbtcxjqazhgfdylfapjiusr
oetmbtcxjqnzhgldylfapviqsr
oewbbtcxjqnzlgkdylfapviuse
oewmbtcxjqnzhglbolfapviusr
oewmbtcxjqnzcgkdylfapviuhy
oelmbtcxjqfzhgkdylaapviusr
oojmbycxjqnzhgkdylfapviusr
oewmbtrxjqnrhgkdylfapniusr
oewmbtcxjqnzhgkyyhfapviuso
oewabtcxjqnzhskdylfapviusx
oewmbtcrjqnmhgkdylfapvnusr
oewmbtcxjqrzhgkdylfapvpuss
oewmbtcxhqnzwgkddlfapviusr
kewmbtcxjqnzhgkyylfajviusr
oswmbtcxjqnzhgkdjlfapviuss
onwmbtcxjqnchgkdylfapvpusr
oeymbtcxjqnxhikdylfapviusr
oewmblcdjqnzhgkdylfapviysr
oewmbtcxeqczhgudylfapviusr
oewmbpgxjqnzhgkdylfapfiusr
ohwmwtcxjqnzhgkdylftpviusr
zebmbtuxjqnzhgkdylfapviusr`;
const inputArr = inputStr.split('\n');
const deneme = ['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'];
console.log(correctBox(inputArr)); // 6916;
