$(window).load(function(){
jQuery('#myModal2').on('hidden.bs.modal', function (e) {
jQuery('#myModal2 iframe').attr("src", jQuery("#myModal2 iframe").removeAttr("src"));
});
});