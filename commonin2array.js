function commonItem(arr1, arr2) {
var obj = {};
var result = [];
    for (var i = 0; i < arr1.length; i++) {
        if(!obj[arr1[i]]) {
            var ele = arr1[i];
            obj[ele] = true;
        } else {
            
        }
    }
    for (let index = 0; index < arr2.length; index++) {
       if(obj[arr2[index]]) {
          result.push(arr2[index]);
       }
        
    }
return {result, obj};
}

 console.log(commonItem(['a', 'b', 'c', 'd', 'e', 'd'],['f', 'g', 'c',  'e']))
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   const car1 = new Car('Eagle', 'Talon TSi', 1993);
// const car2 = Car('Eagle', 'Talon TSi', 1993)
// // console.log(car1.make);
// console.log(car2.make);
