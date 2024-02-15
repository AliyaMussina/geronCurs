const premiya = (oklad:number)=>{
    if (oklad > 400000) {
           let bonus:number = (oklad / 100) * 10
           return(`Ваша ЗП: ${oklad}. Вы получили премию ${bonus}. Итоговая зарплата: ${oklad+bonus}`)
       }
       else if (oklad >300000){
           let bonus:number = (oklad / 100) * 15 
               return(`Ваша ЗП: ${oklad}. Вы получили премию ${bonus}. Итоговая зарплата: ${oklad+bonus}`)
       }
      else{
       let bonus:number = (oklad / 100) * 20
       return(`Ваша ЗП: ${oklad}. Вы получили премию ${bonus}. Итоговая зарплата: ${oklad+bonus}`)
      }
    } 
const getEffect = (projects:number, exp:number) =>{
    let effect:number = projects/exp
    
    if (effect>=4){
        console.log(premiya(300000))
        return('сотрудник эффективен')
    }
    else if (effect>=3){
        return('сотрудник должен улучшить результаты')
    }
    else {
        return('сотруднику необходимо пройти переквалификацию')
        
 }
};


console.log(getEffect (20,5))
console.log(premiya(350000))

