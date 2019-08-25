$(function () {

// 1、全选
$('.checkall').change(function () {
	var checkedFlag = $(this).prop('checked');
	$('.j-checkbox,.checkall').prop('checked',checkedFlag);

	if (checkedFlag) {
		$('.cart-item').addClass('check-cart-item');
	} else {
		$('.cart-item').removeClass('check-cart-item');
	}
});
// 2、小按钮
$('.j-checkbox').change(function () {

	var len1 = $('.j-checkbox').length;
	var len2 = $('.j-checkbox:checked').length;

	$('.checkall').prop('checked',len1 == len2);

	if ($(this).prop('checked')) {
		$(this).parents('.cart-item').addClass('check-cart-item');
	}else {
		$(this).parents('.cart-item').removeClass('check-cart-item');
	}

	// if (len1 == len2) {
	// 	$('.checkall').prop('checked',true);
	// } else {
	// 	$('.checkall').prop('checked',false);
	// }

});
// 3、数量
$('.increment').click(function () {

	var val = $(this).siblings('.itxt').val();
	val++;
	$(this).siblings('.itxt').val(val);

	var p = $(this).parent().parent().siblings('.p-price').text();
	p = p.substr(1);
	var pSum = p * val;
	$(this).parent().parent().siblings('.p-sum').text('￥' + pSum.toFixed(2));

	getCount();

});

$('.decrement').click(function () {
	var val = $(this).siblings('.itxt').val();
	if (val == 1) {
		return;
	}
	val--;
	$(this).siblings('.itxt').val(val);


	var p = $(this).parent().parent().siblings('.p-price').text();
	p = p.substr(1);
	var pSum = p * val;
	$(this).parent().parent().siblings('.p-sum').text('￥' + pSum.toFixed(2));

	getCount();

});


$('.itxt').change(function () {

	var val = $(this).val();

	var p = $(this).parent().parent().siblings('.p-price').text();
	p = p.substr(1);
	var pSum = p * val;
	$(this).parent().parent().siblings('.p-sum').text('￥' + pSum.toFixed(2));

	getCount();

});

getCount();
// 求和
function getCount () {
	var count = 0;
	$('.itxt').each(function (i,elm) {
		count = count + parseInt( $(elm).val() );
	});
	$('.amount-sum em').text(count);

	var sum = 0;
	$('.p-sum').each(function (i,elm) {
		var val = parseFloat($(elm).text().substr(1));
		sum += val;
	})
	$('.price-sum em').text('￥' + sum.toFixed(2));

};


$('.p-action a').click(function () {

	$(this).parents('.cart-item').remove();
	getCount();

})

$('.remove-batch').click(function () {

	$('.j-checkbox:checked').parents('.cart-item').remove();
	getCount();

})

$('.clear-all').click(function () {

	$('.cart-item').remove();
	getCount();


})

















});