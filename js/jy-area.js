$(function(province, city, town) {
	var loc = new Location(),
		title = ['省份', '地级市'],
		loc_province = $('#loc_province'),
		loc_city = $('#loc_city');
	$.each(title, function(k, v) {
		title[k] = '<option value="">' + v + '</option>';
	});
	loc_province.append(title[0]); //默认省份提示
	loc_city.append(title[1]); //地级市提示
	loc_province.change(function() {
		loc_city.empty(); //地级市联动，清空地级市
		loc_city.append(title[1]);
		loc.fillOption('loc_city', '0,' + loc_province.val());
		loc_city.change();
	});
	if(province) {
		loc.fillOption('loc_province', '0', province);
		city ? loc.fillOption('loc_city', '0,' + province, city) : '';
	} else {
		loc.fillOption('loc_province', '0');
	}
})