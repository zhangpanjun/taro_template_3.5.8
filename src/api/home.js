export function mockAjax(payload){
    console.log('更改home-model中status  调用接口的入参',payload)
    return new Promise((resolve)=>{
        setTimeout(()=>{
            const res = {
                    status: payload
                }
            resolve(res)
        },1000)
    })

}