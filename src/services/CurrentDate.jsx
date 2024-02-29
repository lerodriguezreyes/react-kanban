 export function CurrentDate() {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth()+1;
    const mmEdit = mm.toString().padStart(2, '0');
    const yyyy = date.getFullYear();
    const currentDate = `${yyyy}-${mmEdit}-${dd}`;
    return currentDate;
    }