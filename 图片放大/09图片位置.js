var smallor = function (x, y, promptW, boxW) {
			var indexX, indexY;

			if (x < (promptW/2)) {
				// 鼠标在左侧时
				indexX = 0;
			} else if (x < (boxW-promptW/2)) {
				// 鼠标在中间时
				indexX = x - promptW/2;
			} else {
				indexX = boxW - promptW;
			}
			
			if (y < promptW/2) {
				indexY = 0;
			}else if (y < (boxW - promptW/2)) {
				indexY = y - promptW/2;
			}else {
				indexY = boxW - promptW;
			}

			return {
				indexX: indexX ,
				indexY: indexY
			}
		}