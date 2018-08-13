let m_pos = {
  top:"",
  top2:"",
  about:"",
  about2:"",
  skills:"",
  skills2:"",
  contact:"",
  contact2:""
}

let message = {
  top:["やりたいことを細かく分解する",0],
  top2:["それはものづくりの第一歩",0],
  about:["一人で考えるのは難しい",0],
  about2:["だけど一緒に考える人がいると楽になる",0],
  skills:["プログラミングのスキル、やりたいことがまだわからない…",0],
  skills2:["誰かに話して整理してみませんか？",0],
  contact:["まずは会って話してみませんか？",0],
  contact2:["お気軽に連絡ください",0]
}

window.onload = function() {
  let d_body = document.documentElement;
  if(d_body.scrollTop !== 0){
    this.location='index.html';
  }
  
  //form-like
    var address, subject, body;
    var sendmail = document.getElementById('send');

    sendmail.onclick=function(){
        body = '<姓名>\n';
        body += document.getElementById('name').value;
        body += '\n\n';

        subject='サイトからのメールです。'

        body += '<お問い合わせ内容>\n';
        body += document.getElementById('inquiry').value;
        body += '\n\n';

        body += '<送信者>\n';
        address=document.getElementById('email').value;
        body += address + '\n\n';

        body += '間違いがなければこのままお送りしてください。';

        body = body.replace(/\n\r?/g, '%0D%0A');

        location.href = 'mailto:vergissmeinnicht24@gmail.com?subject=' + subject + '&body=' + body;
        body, address, subject ='';
    }
    //form-like end

    let ops_ctrl = 2;

    for(key in m_pos){
      // console.log(key);
      //idで要素取得
      let messageElement = document.getElementById(key);
      //要素の絶対座標を代入
      let messageTopPosition = messageElement.getBoundingClientRect().top;

      messageElement.innerHTML = message[key][0];

      messageElement.style.display = "none";
      //messageのkeyに代入
      m_pos[key]= ops_ctrl % 2 == 1 ? messageTopPosition - 300 : messageTopPosition - 360;
      // console.log(m_pos[key]);
      ops_ctrl++

    }

}

window.onscroll = function() {myFunction()};

function myFunction() {
  for(key in m_pos){

    if(message[key][1] !== 0) continue;
    
    if (document.body.scrollTop > m_pos[key] || document.documentElement.scrollTop > m_pos[key]) {

      let blank = document.querySelector(".blank");
      blank.parentNode.removeChild(blank);

      let typeName = 'anim-typewriter-' + key;
      let key_message = document.getElementById(key);
      key_message.classList.add('line-typed',typeName);
      key_message.style.display = "";
      message[key][1] = 1;

    }
  
  }
    
}
