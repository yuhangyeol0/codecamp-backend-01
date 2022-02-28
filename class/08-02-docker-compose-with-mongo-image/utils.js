export function getCreatedAt(){
    const aaa = new Date()
    const yyyy = aaa.getFullYear()
    const mm = aaa.getMonth()+1
    const dd = aaa.getDate()

    return `${yyyy}-${mm}-${dd}`
}