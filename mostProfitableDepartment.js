function mostProfitableDepartment(salesData){
  var mostProfDep = "";
  var bestSales = 0;
  const departmentMap = {};
  
  for(var i=0; i<salesData.length; i++){
    departmentMap[salesData[i].department] = 0;
  }
  
  for(var i=0; i<salesData.length; i++){
    var totalSales = departmentMap[salesData[i].department];
    totalSales += salesData[i].sales;
    departmentMap[salesData[i].department] = totalSales;  
  }
  
  for(const department in departmentMap){ 
   if(departmentMap[department] >= bestSales ){
     bestSales = departmentMap[department];
     mostProfDep = department;
   }   
 }
 return mostProfDep;
}
