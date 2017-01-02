/// <reference path="appframework.d.ts" />
af(function ($) {
});
(function () {
    return $('div'); //=> all DIV elements on the page
})();
(function () {
    return $("<p />", {}); // context
})();
(function () {
    return $($('')); // appFrameworkCollection
})();
(function () {
    return $(document.createElement('div')); // HTMLElement
})();
(function () {
    return $({}); // Object(any)
})();
(function () {
    return $.is$($(''));
})();
(function () {
    return $.map([], function (item, index) {
        return true;
    });
})();
$.each([], function (index, item) {
});
$.each({}, function (key, value) {
});
(function () {
    return $.extend({ one: 'patridge' }, { two: 'turtle doves' });
})();
(function () {
    return $.isArray({});
})();
(function () {
    return $.isFunction({});
})();
(function () {
    return $.isObject({});
})();
(function () {
    return $.fn;
})();
(function () {
    return $.ajaxSettings;
})();
$.jsonP({});
(function () {
    return $.ajax({});
})();
(function () {
    return $.get('', function (data, status, xhr) {
    });
})();
(function () {
    return $.post('', function (data, status, xhr) {
    });
})();
(function () {
    return $.post('', {}, function (data, status, xhr) {
    });
})();
(function () {
    return $.getJSON('', function (data, status, xhr) {
    });
})();
(function () {
    return $.getJSON('', {}, function (data, status, xhr) {
    });
})();
(function () {
    return $.param({});
})();
(function () {
    return $.param({}, '');
})();
(function () {
    return $.parseJSON('');
})();
(function () {
    return $.parseXML('');
})();
(function () {
    return $.uuid();
})();
(function () {
    return $.getCssMatrix(document.createElement('div'));
})();
(function () {
    return $.getCssMatrix($(''));
})();
(function () {
    return $.create('');
})();
(function () {
    return $.create('', {});
})();
(function () {
    return $.query('');
})();
(function () {
    return $.query('', {});
})();
(function () {
    return $.Event('', {});
})();
(function () {
    return $.bind({}, '', function () {
    });
})();
(function () {
    return $.trigger({}, '');
})();
(function () {
    return $.trigger({}, '', []);
})();
(function () {
    return $.unbind({}, '', function () {
    });
})();
(function () {
    return $.proxy(function () {
    }, {});
})();
(function () {
    return $.cleanUpContent(document.createElement('div'), false, false);
})();
(function () {
    return $.asap(function () {
    });
})();
(function () {
    return $.asap(function () {
    }, {});
})();
(function () {
    return $.asap(function () {
    }, {}, []);
})();
(function () {
    return $.parseJS('');
})();
(function () {
    return $.parseJS(document.createElement('div'));
})();
$.os.webkit;
$.os.android;
$.os.androidICS;
$.os.ipad;
$.os.iphone;
$.os.ios7;
$.os.webos;
$.os.touchpad;
$.os.ios;
$.os.playbook;
$.os.blackberry;
$.os.blackberry10;
$.os.chrome;
$.os.opera;
$.os.fennec;
$.os.ie;
$.os.ieTouch;
$.os.supportsTouch;
$.feat.nativeTouchScroll;
$.feat.cssPrefix;
$.feat.cssTransformStart;
$.feat.cssTransformEnd;
(function () {
    return $('').reduce(function (hoge) {
        return hoge;
    });
})();
(function () {
    return $('').push($(''));
})();
(function () {
    return $('').indexOf($(''));
})();
(function () {
    return $('').concat($(''));
})();
(function () {
    return $('').slice(0);
})();
(function () {
    return $('').length;
})();
(function () {
    return $('').map(function () {
    });
})();
(function () {
    return $('').each(function () {
    });
})();
(function () {
    return $('').forEach(function () {
    });
})();
(function () {
    return $('').ready(function () {
    });
})();
(function () {
    return $('').find('');
})();
(function () {
    return $('').html();
})();
(function () {
    return $('').html('');
})();
(function () {
    return $('').html('', false);
})();
(function () {
    return $('').text();
})();
(function () {
    return $('').text('');
})();
(function () {
    return $('').css('');
})();
(function () {
    return $('').css('', '');
})();
(function () {
    return $('').css({});
})();
(function () {
    return $('').vendorCss('');
})();
(function () {
    return $('').computedStyle('');
})();
(function () {
    return $('').empty();
})();
(function () {
    return $('').hide();
})();
(function () {
    return $('').show();
})();
(function () {
    return $('').toggle();
})();
(function () {
    return $('').val();
})();
(function () {
    return $('').val('');
})();
(function () {
    return $('').attr('');
})();
(function () {
    return $('').attr({});
})();
(function () {
    return $('').attr('', '');
})();
(function () {
    return $('').attr('', {});
})();
(function () {
    return $('').removeAttr('');
})();
(function () {
    return $('').prop('');
})();
(function () {
    return $('').prop({});
})();
(function () {
    return $('').prop('', '');
})();
(function () {
    return $('').prop('', {});
})();
(function () {
    return $('').removeProp('');
})();
(function () {
    return $('').remove();
})();
(function () {
    return $('').remove('');
})();
(function () {
    return $('').remove(document.createElement('div'));
})();
(function () {
    return $('').remove($(''));
})();
(function () {
    return $('').addClass('');
})();
(function () {
    return $('').removeClass('');
})();
(function () {
    return $('').toggleClass('');
})();
(function () {
    return $('').replaceClass('', '');
})();
(function () {
    return $('').hasClass('', document.createElement('div'));
})();
(function () {
    return $('').append('');
})();
(function () {
    return $('').appendTo('');
})();
(function () {
    return $('').prependTo('');
})();
(function () {
    return $('').prepend('');
})();
(function () {
    return $('').insertBefore('');
})();
(function () {
    return $('').insertAfter('');
})();
(function () {
    return $('').get();
})();
(function () {
    return $('').get(0);
})();
(function () {
    return $('').offset();
})();
(function () {
    return $('').height();
})();
(function () {
    return $('').width();
})();
(function () {
    return $('').parent();
})();
(function () {
    return $('').parents();
})();
(function () {
    return $('').children();
})();
(function () {
    return $('').siblings();
})();
(function () {
    return $('').closest();
})();
(function () {
    return $('').filter();
})();
(function () {
    return $('').not();
})();
(function () {
    return $('').data('');
})();
(function () {
    return $('').data('', '');
})();
(function () {
    return $('').data('', {});
})();
(function () {
    return $('').end();
})();
(function () {
    return $('').clone();
})();
(function () {
    return $('').size();
})();
(function () {
    return $('').serialize();
})();
(function () {
    return $('').eq(0);
})();
(function () {
    return $('').index();
})();
(function () {
    return $('').index('');
})();
(function () {
    return $('').is('');
})();
(function () {
    return $('').bind({});
})();
(function () {
    return $('').bind('', function () {
    });
})();
(function () {
    return $('').unbind({});
})();
(function () {
    return $('').unbind();
})();
(function () {
    return $('').unbind('', function () {
    });
})();
(function () {
    return $('').one({});
})();
(function () {
    return $('').one('', function () {
    });
})();
(function () {
    return $('').delegate('', {});
})();
(function () {
    return $('').delegate('', '', function () {
    });
})();
(function () {
    return $('').undelegate('', {});
})();
(function () {
    return $('').undelegate('', '', function () {
    });
})();
(function () {
    return $('').on({});
})();
(function () {
    return $('').on('', function () {
    });
})();
(function () {
    return $('').on('', '', function () {
    });
})();
(function () {
    return $('').off({});
})();
(function () {
    return $('').off('', function () {
    });
})();
(function () {
    return $('').off('', '', function () {
    });
})();
(function () {
    return $('').trigger('');
})();
(function () {
    return $('').trigger({});
})();
(function () {
    return $('').click();
})();
(function () {
    return $('').click(function () {
    });
})();
(function () {
    return $('').keydown();
})();
(function () {
    return $('').keydown(function () {
    });
})();
(function () {
    return $('').keyup();
})();
(function () {
    return $('').keyup(function () {
    });
})();
(function () {
    return $('').keypress();
})();
(function () {
    return $('').keypress(function () {
    });
})();
(function () {
    return $('').submit();
})();
(function () {
    return $('').submit(function () {
    });
})();
(function () {
    return $('').load();
})();
(function () {
    return $('').load(function () {
    });
})();
(function () {
    return $('').resize();
})();
(function () {
    return $('').resize(function () {
    });
})();
(function () {
    return $('').change();
})();
(function () {
    return $('').change(function () {
    });
})();
(function () {
    return $('').select();
})();
(function () {
    return $('').select(function () {
    });
})();
(function () {
    return $('').error();
})();
(function () {
    return $('').error(function () {
    });
})();
(function () {
    return $('').focus();
})();
(function () {
    return $('').focus(function () {
    });
})();
(function () {
    return $('').blur();
})();
(function () {
    return $('').blur(function () {
    });
})();
