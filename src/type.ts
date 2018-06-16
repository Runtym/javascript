var Templates = function(root, id){
    var tmpObj = root.querySelector('#' + id);
    var instance = root.importNode(tmpObj.content,true);
    this.show = function(){
        root.body.appendChild(instance);
        //root.body.insertBefore(instance,root.body.childNodes[0]);
    }
}