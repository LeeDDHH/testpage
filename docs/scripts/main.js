window.onload = function() {
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
}