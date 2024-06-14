//original
//cipher

function encryption() {
    const str = document.ElementById(original);
    const byteArray = new TextEncoder().encode(str);

    // バイト値を取得
    const asciiValues = [];
    for (let i = 0; i < byteArray.length; i++) {
    	asciiValues.push(byteArray[i]);
	}

	console.log(asciiValues); // 出力: [65, 66, 67]
}
