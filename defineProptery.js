let data = {
    name: 'zjl',
    age: 20
}


Object.defineProperty(data, 'name', {
    get: function() {
        console.log('data is read');
        return data['name'];
    },
    set: function(value) {
        data['name'] = value;
        console.log('name is changed by ', vlaue);
    }
})
data.name = 'yyq';