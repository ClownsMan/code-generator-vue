let crypto = require('crypto');
function sign (key, secret, method, uri, date, policy = null, md5 = null) {
  let elems = [];
  [method, uri, date, policy, md5].forEach(item => {
    if (item !== null) {
      elems.push(item);
    }
  });
  const value = elems.join('&');
  const auth = hmacsha1(secret, value);
  return `UPYUN ${key}:${auth}`;
}
function MD5 (value) {
  return crypto
    .createHash('md5')
    .update(value)
    .digest('hex');
}
function hmacsha1 (secret, value) {
  return crypto
    .createHmac('sha1', secret)
    .update(value, 'utf-8')
    .digest()
    .toString('base64');
}
const policy = window.btoa(
  JSON.stringify({
    bucket: 'zc-upai',
    'save-key': `contratc/${Date.parse(new Date())}/{filename}{.suffix}`,
    expiration: parseInt(Date.parse(new Date()) + 3600),
  })
);
const authorization = sign(
  'file',
  MD5('piPUkjK24KmzstGBg74ixsNuD7x31oXD'),
  'POST',
  '/zc-upai',
  policy
);

export { policy, authorization };
