import request from '@/utils/request';

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
export async function getNotificationsRemindersList(params) {
    return request({
        url:'v1/integration_center/notifications_reminders',
        params,
        method: 'get',
    });
}