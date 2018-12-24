!function () {
    let model = {
        fetch:function(){
             var query = new AV.Query('Message')
             return query.find()
        },
        save:function(postName,postMessages){
            var Message = AV.Object.extend('Message')
            var message = new Message();
            return message.save({
                name: postName,
                message: postMessages,
            })
        }
    }
    let view = document.querySelector('.message')
    let controller = {
        view:null,
        leaveMessage:null,
        messageList:null,
        model:null,
        initAV:function(){
            var APP_ID = 'KMOXV4q9U0oDj41GjcqDuFe0-gzGzoHsz'
            var APP_KEY = 'vt42FiDltVxEsHYopyyLvLDj'

            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        init:function(view,model){
            this.view = view
            this.model = model
            this.leaveMessage = view.querySelector('#leaveMessage')
            this.messageList = view.querySelector('ul')
            this.initAV()
            this.messageInit()
            this.bindEvents()
        },
        messageInit:function(){
            this.model.fetch().then((message)=> {
                let array = message.map((value) => value.attributes);
               
                array.forEach((value, key) => {
                    let oLi = document.createElement('li')
                    let ospanname = document.createElement('span')
                    let ospanmessage = document.createElement('span')
                    ospanname.innerText = value.name + ': '
                    ospanmessage.innerText = value.message

                    oLi.appendChild(ospanname)
                    oLi.appendChild(ospanmessage)

                    this.messageList.appendChild(oLi)
                   
                });
            })
        },
        bindEvents:function(){
            this.leaveMessage.addEventListener('submit',  (e)=> {
                e.preventDefault()
                this.savemessage()
            })
        },
        savemessage:function(){
            leaveMessage =  this.leaveMessage
            let postName = leaveMessage.querySelector('input[name=name]').value
            let postMessages = leaveMessage.querySelector('input[name=messages]').value
            
            this.model.save(postName,postMessages).then(function (object) {
                alert('提交成功')
                let ul = view.querySelector('ul')
                let oLi = document.createElement('li')
                let ospanname = document.createElement('span')
                let ospanmessage = document.createElement('span')
                ospanname.innerText = object.attributes.name + ': '
                ospanmessage.innerText = object.attributes.message

                oLi.appendChild(ospanname)
                oLi.appendChild(ospanmessage)

                ul.appendChild(oLi)

            })
        }
    }
    
    controller.init.call(controller,view,model)

}.call()