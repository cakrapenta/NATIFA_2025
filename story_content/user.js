function ExecuteScript(strId)
{
  switch (strId)
  {
      case "65eHcdDeaFH":
        Script1();
        break;
      case "6iAF6KH1yGl":
        Script2();
        break;
      case "6ghIG07kl1z":
        Script3();
        break;
      case "5xCfAq6sHhL":
        Script4();
        break;
      case "6DsS6VECitE":
        Script5();
        break;
      case "5e8Y41KQQG9":
        Script6();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0;
}

function Script3()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script4()
{
  var audio = document.getElementById('bgSongku 1')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0;
}

function Script5()
{
  var audio= document.getElemenById('bgSongku 1');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script6()
{
  var player = GetPlayer();


var nama = player.GetVar("TextEntry");

var kelas = player.GetVar("TextEntry1");


var j1 = player.GetVar("TextEntry7");
var j2 = player.GetVar("TextEntry8");
var j3 = player.GetVar("TextEntry9");
var j4 = player.GetVar("TextEntry10");
var j5 = player.GetVar("TextEntry11");
var j6 = player.GetVar("TextEntry28");
var j7 = player.GetVar("TextEntry29");
var j8 = player.GetVar("Dugaan1");
var j9 = player.GetVar("TextEntry30");
var j10 = player.GetVar("TextEntry31");
var j11 = player.GetVar("TextEntry32");
var j12 = player.GetVar("TextEntry33");
var j13 = player.GetVar("Dugaan2");
var j14 = player.GetVar("TextEntry34");
var j15 = player.GetVar("TextEntry35");


var tanggal = new Date().toLocaleDateString("id-ID");



var isiFile = "Nama Siswa: " + nama + "\n";

isiFile += "Kelas:"+ kelas+"\n";

isiFile += "Tanggal: " + tanggal + "\n\n";

isiFile += "Masalah 1"+"\n";


isiFile += "Setelah kamu mengamati video yang berisi permasalahan terkait bangun ruang, coba tuliskan dugaanmu dari permasalahan yang diberikan!";

isiFile += "Jawab:"+j1 + "\n";

isiFile += "Berdasarkan dugaan yang kamu tuliskan, coba tuliskan alasannya!";

isiFile += "Jawab:"+j2 + "\n\n";

isiFile += "Kesimpulan apa yang kamu dapatkan berdasarkan dugaan dan alasan yang telah dirumuskan sebelumnya?";

isiFile += "Jawab:"+j3 + "\n";

isiFile += "Coba periksa simpulan yang telah kamu dapatkan! Bagaimana cara kamu membuktikan bahwa simpulan yang kamu peroleh bernilai benar?";

isiFile += "Jawab:"+j4 + "\n";

isiFile += "Pola apa yang kamu temukan dari permasalahan bangun ruang yang telah diberikan?";

isiFile += "Jawab:"+j5 + "\n\n";

isiFile += "Masalah 2"+"\n\n";

isiFile += "Setelah kamu mengamati video yang berisi permasalahan terkait bangun ruang, coba tuliskan dugaanmu dari permasalahan yang diberikan!";

isiFile += "Jawab:"+j6 + "\n";

isiFile += "Berdasarkan dugaan yang kamu tuliskan, coba tuliskan alasannya!";

isiFile += "Jawab:"+j7 + "\n\n";

isiFile += "Kesimpulan apa yang kamu dapatkan berdasarkan dugaan dan alasan yang telah dirumuskan sebelumnya?";

isiFile += "Jawab:"+j8 + "\n";

isiFile += "Coba periksa simpulan yang telah kamu dapatkan! Bagaimana cara kamu membuktikan bahwa simpulan yang kamu peroleh bernilai benar?";

isiFile += "Jawab:"+j9 + "\n";

isiFile += "Pola apa yang kamu temukan dari permasalahan bangun ruang yang telah diberikan?";

isiFile += "Jawab:"+j10 + "\n\n";

isiFile += "Masalah 3"+"\n\n";

isiFile += "Setelah kamu mengamati video yang berisi permasalahan terkait bangun ruang, coba tuliskan dugaanmu dari permasalahan yang diberikan!";

isiFile += "Jawab:"+j11 + "\n";

isiFile += "Berdasarkan dugaan yang kamu tuliskan, coba tuliskan alasannya!";

isiFile += "Jawab:"+j12 + "\n\n";

isiFile += "Kesimpulan apa yang kamu dapatkan berdasarkan dugaan dan alasan yang telah dirumuskan sebelumnya?";

isiFile += "Jawab:"+j13 + "\n";

isiFile += "Coba periksa simpulan yang telah kamu dapatkan! Bagaimana cara kamu membuktikan bahwa simpulan yang kamu peroleh bernilai benar?";

isiFile += "Jawab:"+j14 + "\n";

isiFile += "Pola apa yang kamu temukan dari permasalahan bangun ruang yang telah diberikan?";

isiFile += "Jawab:"+j15 + "\n\n";


var textFile = new Blob([isiFile], { type: 'text/plain' });

var downloadLink = document.createElement("a");

downloadLink.href = URL.createObjectURL(textFile);
downloadLink.download = "Jawaban_" + nama +kelas+ ".txt";
document.body.appendChild(downloadLink);
downloadLink.click();
document.body.removeChild(downloadLink);
}

