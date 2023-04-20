escribe('mostProfitableDepartment', function(){

    it('should return hardware for the given sales data', function(){
        const salesData = [
            {department: 'hardware', sales: 4500, day: 'Monday'},
            {department: 'outdoor', sales: 1500, day: 'Monday'},
            {department: 'hardware', sales: 5500, day: 'Tuesday'},
            {department: 'outdoor', sales: 2505, day: 'Tuesday'},
            {department: 'carpentry', sales: 7500, day: 'Tuesday'},
            {department: 'hardware', sales: 8505, day: 'Wednesday'},
            {department: 'outdoor', sales: 7505, day: 'Wednesday'},
        ];
        assert.strictEqual(mostProfitableDepartment(salesData), 'hardware');
    });

    it('should return sales for the given sales data', function(){
        const salesData = [
            {department: 'sales', sales: 4500, day: 'Monday'},
            {department: 'sales', sales: 5500, day: 'Tuesday'},
            {department: 'sales', sales: 7500, day: 'Tuesday'},
            {department: 'sales', sales: 8505, day: 'Wednesday'},
            {department: 'sales', sales: 7505, day: 'Wednesday'},
        ];
        assert.strictEqual(mostProfitableDepartment(salesData), 'sales');
    });

    it('should return empty string for empty sales data', function(){
        const salesData = [];
        assert.strictEqual(mostProfitableDepartment(salesData), '');
    });
});
