  function mainmenu() {    var thisBrowser = navigator.userAgent;    var mapSearch = '30800 Gratiot Avenue, Roseville, ' + stateOmn + ' ' + zipOmn;      $("#nav-container li ul").css({ display: "none" });    if (Modernizr.touch) {      $("#nav-container li a").click(function (e) {        $("#nav-container ul").css({ visibility: "hidden", display: "none" });        if ($(this).siblings('ul').length > 0) {          e.preventDefault();          $('ul:first', $(this).parent()).css({ visibility: "visible", display: "block" });        }      });      mobilePhoneClass();              if (thisBrowser.indexOf('OS 6') != -1) {        $('.mapLink').attr('href','http://maps.apple.com/maps?q=' + mapSearch);      } else {        $('.mapLink').attr('href','http://maps.google.com/maps?q='+ mapSearch);      }           } else {      $("#nav-container li").hover(function () {        $(this).find('ul:first').css({ display: "block" });      }, function () {        $(this).find('ul:first').css({ display: "none" });      });      if (thisBrowser.indexOf('Windows Phone') != -1){        $('.mapLink').attr('href','maps: ' + mapSearch);        mobilePhoneClass();      } else {        phoneLinks();      }    }  }