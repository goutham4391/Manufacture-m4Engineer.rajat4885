(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
        $(document).ready(function(){
            $('.aol-captcha-ad').find('#aol_app_submit_button').attr('disabled', 'disabled');//Disable submit button on page load.
        });
        $(document).on("afterAppSubmit", function(e, response){
            if(response['success']==false){
                grecaptcha.reset();
                $('#aol_app_submit_button').attr('disabled', 'disabled');//re Disable submit button on form failure.
            }
        });
})( jQuery );
var grdone = function(response) {
    document.getElementById("aol_app_submit_button").disabled=false;
    document.getElementById("aol_app_submit_button").removeAttribute('disabled');
};
