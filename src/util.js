// 专门放各种工具函数
export default function getDedirectUrl({ type, avatar }) {
    let url = (type === 'boss') ? '/boss' : '/genius';
    if (!avatar) {
        url += 'info'
    }
    return url
}