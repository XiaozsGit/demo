$(function () {

// --------------------------------------------------------------------------------
// 1.复选框点击事件
// 全选与全不选
$('.checkall').change( function () {
	// 点击全选时，小选项跟随
	$('.j-checkbox, .checkall').prop('checked', $(this).prop('checked') );
	get_sum();
	if ($(this).prop('checked')) {
		$('.j-checkbox').parents('.cart-item').addClass('check-cart-item');
	}
	else {
		$('.j-checkbox').parents('.cart-item').removeClass('check-cart-item');
	}
	
});

// 小选项
$('.j-checkbox').change( function () {
	// 点击小选项时，全选跟随
	$('.checkall').prop('checked', $('.j-checkbox:checked').length == $('.j-checkbox').length );
	get_sum();
	$(this).parents('.cart-item').toggleClass('check-cart-item');

});

// ---------------------------------------------------------------------------------
// 2. 加减按钮，改变数量
// 3.根据改变数量 更新小计
// + 加
$('a.increment').click(function () {
	// console.log( $(this).siblings('.itxt').val() );

	var count = parseInt( $(this).siblings('.itxt').val() ) + 1;
	$(this).siblings('.itxt').val(count);
	
	// console.log( $(this).parents('.p-num').siblings('.p-price').text() );
	// console.log( ($(this).parents('.p-price').text().substring(1) * count).toFixed(2) );
	$(this).parents('.p-num').siblings('.p-sum').text('￥' + ($(this).parents('.p-num').siblings('.p-price').text().substr(1) * count).toFixed(2));
	get_sum();

});

// - 减
$('a.decrement').click(function () {

	if ( parseInt( $(this).siblings('.itxt').val() ) > 1) {
		var count = parseInt( $(this).siblings('.itxt').val() ) - 1;
		$(this).siblings('.itxt').val(count);
		$(this).parents('.p-num').siblings('.p-sum').text('￥' + ($(this).parents('.p-num').siblings('.p-price').text().substr(1) * count).toFixed(2));
		get_sum();
		
	}
});

// 直接输入
$('.itxt').change(function () {
	var count = parseInt( $(this).val() );

	$(this).parents('.p-num').siblings('.p-sum').text('￥' + ($(this).parents('.p-num').siblings('.p-price').text().substr(1) * count).toFixed(2));
	get_sum();
});

//-------------------------------------------------------------------------------------
// 修改总数与总计
// 定义一个更新总计和总数的函数 get_sum
var get_sum = function () {
	var sum = 0;
	var count = 0;
	$('div.p-sum').each(function (index, elm) {

		// console.log(index, $(elm).siblings('.p-checkbox'));

		if ( $(elm).siblings('.p-checkbox').children('.j-checkbox').prop('checked')) {
			
			sum += parseFloat( $(elm).text().substr(1));
			count += parseInt( $(elm).siblings('.p-num').find('.itxt').val() );

		}

	});

	$('.price-sum em').text('￥' + sum.toFixed(2));
	$('.amount-sum em').text(count);
}

// --------------------------------------------------------------------------------
// 删除
// 点击谁 删除谁
$('.p-action').click(function () {
	// console.log($(this).parent('.cart-item'));
	$(this).parents('.cart-item').remove();
	get_sum();
});

// 删除选中
$('.operation').click (function (e) {

	if (e.target.className == 'remove-batch' ) {
		// console.log(e.target);
		$('.j-checkbox:checked').parents('.cart-item').remove();
	}
	else if (e.target.className == 'clear-all') {
		// console.log(e.target);
		$('.j-checkbox').parents('.cart-item').remove();
	}

	get_sum();
});


























});




