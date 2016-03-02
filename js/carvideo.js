$(window).load(function(){
jQuery('#myModal').on('hidden.bs.modal', function (e) {
jQuery('#myModal iframe').attr("src", jQuery("#myModal iframe").removeAttr("src"));
});
});