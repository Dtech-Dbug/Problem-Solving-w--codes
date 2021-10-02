let hammingDistance = (string1, string2) => {

  // Check if the strings have the same length
  if (string1.length !== string2.length) {
    return 'The strings must have the same length';
  }

  // Initialize distance to 0
  let distance = 0;

  // Claculate diastance
  for (let i = 0; i <= string1.length; i++) {
    if (string1.charAt(i) !== string2.charAt(i)) {
      distance++
    }
  }
  return distance;

}

module.exports = hammingDistance;