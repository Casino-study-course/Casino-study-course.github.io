(function( $ ) {
	'use strict';

	$(function() {
		 $('#wdm_add_user_fields').on('click', '#wdm_submit', function(e){
			e.preventDefault();

			var members_emails = [];
			$('#wdm_add_user_fields [name="wdm_members_email[]"]').each(function() {
				members_emails.push($(this).val());
			});

			var data = {
	            action: 'check_user_course_status_lt',
	            _ajax_nonce: lt_ajax_obj.nonce,
	            group_id: $('#wdm_add_user_fields [name="wdm_group_id"]').val(),
	            members_emails: members_emails
	        };

			 $.ajax({
	            type: 'post',
	            url: lt_ajax_obj.ajax_url,
	            data: data,
	            success: function (response) {
	                if (response.success) {
	                    if (response.person_completed_course) {
							var r = confirm(lt_ajax_obj.confirm_add_existing_user_message);
							if (r == true) {
								$('#wdm_add_user_fields').submit();
							}
	                    } else {
	                    	$('#wdm_add_user_fields').submit();
	                    }
	                } else {
	                	if (response.message && response.error) {
	                		alert('Please fill in all fields and try again.');
	                	}
	                }
	            },
	        });
		 });

		 $('#wdm_group').on('click', '.wdm_remove', function(e){
			e.preventDefault();

			var message_type = $(this).data('message_type');
            
            // Person completed course
            if (message_type == 2) {
				wdm_data.are_you_sure = lt_ajax_obj.confirm_remove_user_message_completed;
			// For the removal of someone who has started but not finished	
            } else if (message_type == 1) {
				wdm_data.are_you_sure = lt_ajax_obj.confirm_remove_user_message_in_progress;
			// For someone who has done nothing on the course	
            } else {
            	wdm_data.are_you_sure = lt_ajax_obj.confirm_remove_user_message_not_started;
            }


		 });

	});

})( jQuery );
