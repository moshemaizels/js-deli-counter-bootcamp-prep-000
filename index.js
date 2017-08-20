var katzDeli = [];

function takeANumber(currentLine, name){
  currentLine.push(name)
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var currentCust = currentLine[0];
    currentLine.shift()
    return `Currently serving ${currentCust}.`
  }

}
