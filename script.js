//original
//cipher

function encryption{
  const str = 'ABC';
  const encoder = new TextEncoder();
  const byteArray = encoder.encode(str);

  // バイト値を取得
  const asciiValues = [];
  for (let i = 0; i < byteArray.length; i++) {
    asciiValues.push(byteArray[i]);
  }

  console.log(asciiValues);
}
