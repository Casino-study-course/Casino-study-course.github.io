(function( $ ) {
	'use strict';

	$(function() {
		// 'I am buying for others' checkbox
		if ($('.single-product .wdm_group_registration').length) {
			var str = '<div class="ltar_wdm_group_registration">'+
					'<input type="checkbox" name="ltar_wdm_ld_buying_for_others" class="ltar_wdm_ld_buying_for_others" value="" id="ltar_wdm_ld_buying_for_others">'+
					'<label for="ltar_wdm_ld_buying_for_others"> I am buying for others</label>'+
				'</div>';
			$(str).insertBefore( ".wdm_group_registration" );

			$('.ltar_wdm_group_registration').on('change', '.ltar_wdm_ld_buying_for_others', function(){
				if($(this).is(":checked")) {
					$(this).closest('form').find('.wdm_group_registration #wdm_gr_group').trigger('click');
				} else {
					$(this).closest('form').find('.wdm_group_registration #wdm_gr_signle').trigger('click');
				}
			});

			if($('form .wdm_group_registration #wdm_gr_group').length && $('form .wdm_group_registration #wdm_gr_group').is(":checked")) {
				$('.ltar_wdm_group_registration .ltar_wdm_ld_buying_for_others').prop('checked', true);
			}

		}


		if ($('.container-redirect-to-url-thank-you-page-lt').length) {
			 setTimeout(function(){
	            var redirect_url = $('.container-redirect-to-url-thank-you-page-lt').data('url');
				if (redirect_url) {
					window.location.href = redirect_url;
				}        
	        }, 3500);
		}
	});

})( jQuery );
