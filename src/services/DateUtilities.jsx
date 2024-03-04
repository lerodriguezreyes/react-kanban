export function currentDate() {
   console.log( 'Current Date invoked') 
   const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth()+1;
    const mmEdit = mm.toString().padStart(2, '0');
    const yyyy = date.getFullYear();
    const currentDate = `${yyyy}-${mmEdit}-${dd}`;
    return currentDate;
    }

export function milisecondComparison(taskDate){
      console.log( 'Milisecond comparison invoked')
      const myDate = new Date()
      const miliDate = myDate.getTime()
      const testDate = new Date(taskDate)
      const testMiliDate = testDate.getTime()
      
      return miliDate < testMiliDate ? true : false;
    }