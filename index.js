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

function currentLine(line) {
  var lineReadout = ""
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    lineReadout = "The line is currently:"
    for (var i = 0; i < line.length; i++) {
      lineReadout = lineReadout + ` ${i+1}. ${line[i]},`
    }
    return lineReadout
  }
}
