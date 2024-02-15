type TUser = {
    postId:number,
    id:number,
    name:string,
    email:string,
    body:string
}
const getUser = async() =>{
    return fetch ("https://run.mocky.io/v3/a27db518-069d-45a3-8fac-938b5c2228d1")
}
const checkResult = async() =>{
    const response:TUser[] = await (await getUser ()).json()
    return response
}
const getTheLongestBodyUser = async() =>{
    const users:TUser[] = await (checkResult())
    let userWithLongestBody:TUser | null = null
    users.forEach(item =>{
        if (!userWithLongestBody || item.body.length > userWithLongestBody.body.length){
            userWithLongestBody = {...item}
        }
    })
    return (userWithLongestBody)
}
getTheLongestBodyUser().then((data) =>{
    console.log(data)
})