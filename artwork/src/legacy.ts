export const legacyRandomGenerator = (hash: string) => {
  let alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
  let b58dec = (str: string) =>
    Array.from(str).reduce(
      (p, c) => (p * alphabet.length + alphabet.indexOf(c)) | 0,
      0
    )
  let hashTrunc = hash.slice(2)
  let regex = new RegExp('.{' + ((hash.length / 4) | 0) + '}', 'g')
  let hashes = hashTrunc.match(regex)?.map((h) => b58dec(h)) || []
  let sfc32 = (hashes: number[]) => {
    let [a, b, c, d] = hashes
    return () => {
      a |= 0
      b |= 0
      c |= 0
      d |= 0
      var t = (((a + b) | 0) + d) | 0
      d = (d + 1) | 0
      a = b ^ (b >>> 9)
      b = (c + (c << 3)) | 0
      c = (c << 21) | (c >>> 11)
      c = (c + t) | 0
      return (t >>> 0) / 4294967296
    }
  }
  return sfc32(hashes)
}
