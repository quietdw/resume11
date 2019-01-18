!function () {

    let model = Model({
        resouceName:'Message'
    })
    let view = View('.message')[0]
    let controller = Controller(
        {
            leaveMessage:null,
            messageList:null,
            init:function(view,model){
                this.leaveMessage = view.querySelector('#leaveMessage')
                this.messageList = view.querySelector('ul')
                this.messageInit()
                // this.bindEvents() Controller函数已经调用了
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
    
                        this.messageList.prepend(oLi)
                       
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
                
                this.model.save({
                    name:postName,
                    message:postMessages
                }).then(function (object) {
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
    )
    // let controller = {
    //     view:null,
    //     leaveMessage:null,
    //     messageList:null,
    //     model:null,
    //     init:function(view,model){
    //         this.view = view
    //         this.model = model
    //         this.leaveMessage = view.querySelector('#leaveMessage')
    //         this.messageList = view.querySelector('ul')
    //         this.model.init()
    //         this.messageInit()
    //         this.bindEvents()
    //     },
    //     messageInit:function(){
    //         this.model.fetch().then((message)=> {
    //             let array = message.map((value) => value.attributes);
               
    //             array.forEach((value, key) => {
    //                 let oLi = document.createElement('li')
    //                 let ospanname = document.createElement('span')
    //                 let ospanmessage = document.createElement('span')
    //                 ospanname.innerText = value.name + ': '
    //                 ospanmessage.innerText = value.message

    //                 oLi.appendChild(ospanname)
    //                 oLi.appendChild(ospanmessage)

    //                 this.messageList.appendChild(oLi)
                   
    //             });
    //         })
    //     },
    //     bindEvents:function(){
    //         this.leaveMessage.addEventListener('submit',  (e)=> {
    //             e.preventDefault()
    //             this.savemessage()
    //         })
    //     },
    //     savemessage:function(){
    //         leaveMessage =  this.leaveMessage
    //         let postName = leaveMessage.querySelector('input[name=name]').value
    //         let postMessages = leaveMessage.querySelector('input[name=messages]').value
            
    //         this.model.save({
    //             name:postName,
    //             message:postMessages
    //         }).then(function (object) {
    //             alert('提交成功')
    //             let ul = view.querySelector('ul')
    //             let oLi = document.createElement('li')
    //             let ospanname = document.createElement('span')
    //             let ospanmessage = document.createElement('span')
    //             ospanname.innerText = object.attributes.name + ': '
    //             ospanmessage.innerText = object.attributes.message

    //             oLi.appendChild(ospanname)
    //             oLi.appendChild(ospanmessage)

    //             ul.appendChild(oLi)

    //         })
    //     }
    // }
    
    controller.init.call(controller,view,model)

}.call()