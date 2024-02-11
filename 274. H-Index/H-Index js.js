/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    const h = citations.length;
  citations.sort ((a,b)=>(a-b));
         let i;
    for(i=0;i<h;i++){
        if(h-i<=citations[i]){
            break;
        }
    }
    return h-i;
};
 