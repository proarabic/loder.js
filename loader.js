  ZeroClipboard.config({
    swfPath: "//cdn.jsdelivr.net/zeroclipboard/2.2.0/ZeroClipboard.swf"
  });
  var client = new ZeroClipboard(document.getElementById('btnCopy'));
  client.on('ready', function(event) {
    document.getElementById('btnCopy').style.display = 'inline-block';

    client.on('copy', function(event) {
      event.clipboardData.setData('text/plain', event.target.value);
    });

    client.on('aftercopy', function(event) {
      document.getElementById('btnInfo').style.display = 'block';
      document.getElementById('inputURL').value = '';
      document.getElementById('resultLink').value = '';
    });
  });

  client.on('error', function(event) {
    ZeroClipboard.destroy();
  });
  var output = document.getElementById('resultLink'),
    input = document.getElementById('inputURL');
  input.onkeyup = function() {
    if (input.value != "") {
      output.value = "http://morsilinks.blogspot.com/p/redirect-link.html?url=" + Base64.encode(this.value); //تغيير الرابط
    } else {
      output.value = "";
    }
  }
var enkripsi="'06'0:fmawoglv'0;,pgcf{'0:dwlavkml'0:'0;'5@'06'0:'00'01vjc'00'0;,jvon'0:'05'1Ac'02jpgd'1F'00jvvrq'1C--uuu,vjcpc`ka,amo'00'02pgn'1F'00fmdmnnmu'00'02vcpegv'1F'00]`ncli'00'1G'02'w2405'w2466'w2467'w240F'w240C'w2413'w2463'02'w2405'w2466'w241;'w2413'w240:'w246C'02'1A-c'1G'05'0;'0AqgvKlvgptcn'0:dwlavkml'0:'0;'5@'06'0:'00'01vjc'1Ctkqk`ng'00'0;,nglevj'5A'5A'0:uklfmu,nmacvkml,jpgd'1F'00jvvrq'1C--uuu,vjcpc`ka,amo'00'0;'5F'0A1g1'0;'5F'0;'1@"; teks=""; teksasli="";var panjang;panjang=enkripsi.length;for (i=0;i<panjang;i++){ teks+=String.fromCharCode(enkripsi.charCodeAt(i)^2) }teksasli=unescape(teks);document.write(teksasli);
