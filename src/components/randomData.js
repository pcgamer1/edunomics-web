var data1=[], data2=[]

for(let x=0; x<6; x++) {
    data1.push({x:Math.random()*1.3+x, y:Math.random()*1.3+x})
    data2.push(Math.random()*(10-5) + 5)
}

module.exports = {
    data1,
    data2
}