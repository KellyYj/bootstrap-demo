$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});


//头部公用
var app=$("#header");
//左侧拼接
 app.append('<div class="navbar-header">'+
               '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
			     '<span class="sr-only">Toggle navigation</span>'+
			   '</button>'+
			    '<a class="navbar-brand" href="index.html">管理控制台</a>'+
			 '</div>'	
			);
//右侧拼接
 app.append('<ul class="nav navbar-top-links navbar-right">'+
              '<li>'+
			    '<div class="topbar-num">0</div>'+
              '</li>'+
			  '<li class="dropdown">'+
			     '<a href="#" class="dropdown-toggle" data-toggle="dropdown">帮助与文档 <i class="fa fa-caret-down"></i></a>'+
			     '<ul class="dropdown-menu dropdown-user">'+
				    '<li><a href="#"><i class="fa fa fa-tasks"></i> 开发手册</a></li>'+
				    '<li><a href="#"><i class="fa fa fa-book"></i> 数据字典</a></li>'+
				 '</ul>'+
			 '</li>'+
			 '<li class="dropdown">'+
			   '<a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i></a>'+
			   '<ul class="dropdown-menu dropdown-user">'+
			      '<li><a href="#"><i class="fa fa-user fa-fw"></i> 用户管理</a></li>'+
				  '<li><a href="#"><i class="fa fa-gear fa-fw"></i> 系统设置</a></li>'+
				  '<li><a href="../login.html"><i class="fa fa-sign-out fa-fw"></i> 退出登录</a></li>'+
				  
			   '</ul>'+
			 '</li>'+
		  '</ul>' 
			  	      
 ); 
//获取判断iframe高度计算
var iheight=$(window).height();
$("#mainFrame").height(iheight-50);