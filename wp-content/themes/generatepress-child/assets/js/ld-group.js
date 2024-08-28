(function ($) {

    $( document ).ready(function() {
        $('.wdm_group_registration input').on('change', check_group_checkboxes);

        function check_group_checkboxes() {
            if ($('input[name="wdm_ld_group_active"]:checked').val() !== 'on') {
                $('.quantity').slideUp();
            }else {
                $('.quantity').slideDown();
            }
        }
    });

})(jQuery);