// Using Drupal.behaviors to implement js
// Implements a setTimeout of 10 seconds

// Created by Ellen R. Sullivan

(function ($) {
    Drupal.behaviors.Show_Login_Time = {
        attach: function (context, settings) {
            setTimeout( function () { $('#block-show-login-time-show-login-time').hide() }, 10000 );
        }
    };
}(jQuery));