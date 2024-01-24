function start() {
    let res_msg = document.createElement('div');
    res_msg.innerHTML = " Hi, my name is Pretty UK, How can I help you today?"
    res_msg.setAttribute("class", "left");

    document.getElementById('msg_part').appendChild(res_msg);
}

document.getElementById('send').addEventListener("click", async (e) => {
    e.preventDefault();

    var req = document.getElementById('text').value;
    if (req == undefined || req == "") {

    } else {
        let res = "";

        await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`).then(data => {
            res = JSON.stringify(data.data.response);
        });

        let msg_req = document.createElement('div');
        let msg_res = document.createElement('div');

        let Convo1 = document.createElement('div');
        let Convo2 = document.createElement('div');

        Convo1.setAttribute("class", "msgConvo1");
        Convo2.setAttribute("class", "msgConvo2");

        msg_req.innerHTML = req;
        msg_res.innerHTML = res;

        msg_req.setAttribute("class", "right");
        msg_res.setAttribute("class", "left");

        Convo1.appendChild(msg_req);
        Convo2.appendChild(msg_res);

        let message = document.getElementById('msg_part');

        message.appendChild(Convo1);
        message.appendChild(Convo2);

        document.getElementById('text').value = "";

        function scroll() {
            var scrollMsg = document.getElementById('msg_part');
            scrollMsg.scrollTop = scrollMsg.scrollHeight;
        }

        scroll();
    }
});