$(window).load(function(){
jQuery('#myModal1').on('hidden.bs.modal', function (e) {
jQuery('#myModal1 iframe').attr("src", jQuery("#myModal1 iframe").removeAttr("src"));
});
});