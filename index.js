exports.toBase64 = function(json) {
  const data = JSON.stringify(json);
  const buff = Buffer.from(data);
  const base64data = buff.toString('base64');

  // console.log(`"${data}" converted to Base64 is "${base64data}"`);

  return base64data;
}

exports.toJson = function(base64) {
  const buff = Buffer.from(base64, 'base64');
  const text = buff.toString('ascii');

  // console.log(`"${base64}" converted from Base64 to ASCII is "${text}"`);

  return JSON.parse(text);
}

