({
	handleRemove: function (cmp, event) {
        var name = event.getParam("item").name;
        //alert(name + ' pill was removed!');
        // Remove the pill from view
        var items = cmp.get('v.pills');
        var item = event.getParam("index");
        items.splice(item, 1);
        
        cmp.set('v.pills', items);
        if(items.length==0){
            cmp.set("v.emailPills",false);
        }
        
    },
    changeEmail:function(cmp, event, helper){
        
        var delimiter = ";";
        var inputText = cmp.find('email').getElement();
        var currentInput = inputText.value;
    
        if (currentInput[currentInput.length - 1] === delimiter || event.keyCode === 13) {
          	helper.addNewPills(cmp, helper, currentInput.split(delimiter));
          	inputText.value = ''; 
            cmp.set("v.emailPills",true);
        }
    
	}
})