type TRecycling = 'weekend' | 'festive' | 'vacation'
let TPrim:TRecycling = 'weekend'
let TPrim1:TRecycling = 'festive'
let TPrim2:TRecycling = 'vacation'
let oklad:number = 200000
let watch:number = 20
const premiya1 = (watch:number)=>{
    if (watch > 20 ){
        if (TPrim.includes('weekend')){
                let bonus:number = (oklad/ 100) * 15
                return(`Ваша ЗП: ${oklad}. Вы получили премию ${bonus}. Итоговая зарплата: ${oklad+bonus}`)
            }
            else if (TPrim1.includes('festive')){
                let bonus:number = (oklad/ 100) * 20
                return(`Ваша ЗП: ${oklad}. Вы получили премию ${bonus}. Итоговая зарплата: ${oklad+bonus}`)
            }
            else if (TPrim2.includes('vacation')){
                let bonus:number = (oklad/ 100) * 30
                return(`Ваша ЗП: ${oklad}. Вы получили премию ${bonus}. Итоговая зарплата: ${oklad+bonus}`)
            }
        }         

    else if (watch >1 && watch <= 10) {
        if (TPrim.includes('weekend')){
                let bonus:number = (oklad/ 100) * 5
                return(`Ваша ЗП: ${oklad}. Вы получили премию ${bonus}. Итоговая зарплата: ${oklad+bonus}`)
            }
            else if (TPrim1.includes('festive')){
                let bonus:number = (oklad/ 100) * 10
                return(`Ваша ЗП: ${oklad}. Вы получили премию ${bonus}. Итоговая зарплата: ${oklad+bonus}`)
            }
         
            else if (TPrim2.includes('vacation')) {
                let bonus:number = (oklad/ 100) * 15
                return(`Ваша ЗП: ${oklad}. Вы получили премию ${bonus}. Итоговая зарплата: ${oklad+bonus}`)
            }
    } 
        }   
  
    console.log(premiya1)
    