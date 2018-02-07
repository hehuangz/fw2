export default function getDedirectUrl({ type }) {
    let url = (type === 'boss') ? '/boss' : '/genius'
    return url
}