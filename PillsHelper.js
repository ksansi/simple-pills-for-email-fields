({
    addNewPills: function(cmp, helper, values) {
        var pills = cmp.get('v.pills');
        
        for (var i = 0; i < values.length; i++) {
            var trimmedVal = values[i].trim();
            if (trimmedVal !== "") {
                pills.push({                    
                    label: trimmedVal
                    
                });
            }
        }
        
        cmp.set('v.pills', pills);
    }
})