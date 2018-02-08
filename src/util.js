// 专门放各种工具函数
export default function getDedirectUrl({ type, avator }) {
    let url = (type === 'boss') ? '/boss' : '/genius';
    if (!avator) {
        url += 'info'
    }
    return url
}