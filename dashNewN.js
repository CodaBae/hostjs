$(document).ready(function(){

	// Get navbar height
	var navbarHeight = $(".dash-navbar").outerHeight();
	$(".dash-contents .sidebar").css("paddingTop", navbarHeight);
	$(".dash-contents .details").css("paddingTop", navbarHeight);
	$(".dash-contents .market").css("paddingTop", navbarHeight);

	function hideAllSections(){
		$(".buy-option").hide();
		$(".sell-option").hide();
		$(".real-account-box").hide();
		$(".notification-box").hide();
		$(".forex-box").hide();
	}

	function showSection(section){
		hideAllSections();
		$(section).show();
	}

	function hideSection(section){
		hideAllSections();
		$(section).hide();
	}

	function addAmount(){
		var amount = $(".dash-contents .trade .trade-action .trade-amount .trade-amount-input .amount input").val();
		amount++;
		$(".dash-contents .trade .trade-action .trade-amount .trade-amount-input .amount input").val(amount);

	}

	function minusAmount(){
		var amount = $(".dash-contents .trade .trade-action .trade-amount .trade-amount-input .amount input").val();
		amount--;
		$(".dash-contents .trade .trade-action .trade-amount .trade-amount-input .amount input").val(amount);

	}


	function dashboardDetails(action){
		if(action == "hide"){
			$(".dash-contents .market .tradingview-widget-copyright").css({
				"width": "84vh"
			});
			$(".dash-contents .details").css({
				"width": "0"
			});
			$(".dash-contents .details .expand-btn").removeClass("close");
			$(".dash-contents .details .expand-btn").addClass("open");
		}

		if(action == "show"){
			$(".dash-contents .market .tradingview-widget-copyright").css({
				"width": "70vh"
			});
			$(".dash-contents .details").css({
				"width": "23vh"
			});
			$(".dash-contents .details .expand-btn").removeClass("open");
			$(".dash-contents .details .expand-btn").addClass("close");
		}
	}

	$(".dash-contents").on("click", ".details .expand-btn.close", function(){
		dashboardDetails("hide");
		setTimeout(function() {
			setAdvanceChartWidget();
		}, 500);
	});

	$(".dash-contents").on("click", ".details .expand-btn.open", function(){
		dashboardDetails("show");
		setTimeout(function() {
			setAdvanceChartWidget();
		}, 500);
	});

	// Show buy box
	$(".dash-contents .trade .trade-action .actions .buy").on("click", function(){
		showSection(".buy-option");
	});

	// Hide buy box
	$(".buy-option span.close").on("click", function(){
		hideSection(".buy-option");
	});


	$(".buy-option 	.close1").on("click", function(){
		hideSection(".buy-option");
	});

	
	// Show sell box
	$(".dash-contents .trade .trade-action .actions .sell").on("click", function(){
		showSection(".sell-option");
	});

	// Hide sell box
	$(".sell-option span.close").on("click", function(){
		hideSection(".sell-option");
	});

	$(".sell-option button.close1").on("click", function(){
		hideSection(".sell-option");
	});

	// Show real account box
	$(".dash-navbar .account .real-account a").on("click", function(){
		showSection(".real-account-box");
	});

	// Hide sell box
	$(".real-account-box span.close").on("click", function(){
		hideSection(".real-account-box");
	});

	// Show notification box
	$(".dash-navbar .account .notification a").on("click", function(){
		showSection(".notification-box");
	});

	// Hide notification box
	$(".notification-box span.close").on("click", function(){
		hideSection(".notification-box");
	});

	// Show forex box
	$("#add-to-group").on("click", function(){
		showSection(".forex-box");
	});

	// Hide forex box
	$(".forex-box span.close").on("click", function(){
		hideSection(".forex-box");
	});

	$(".dash-contents .trade .trade-action .trade-amount .trade-amount-add").on("click", function(){
		addAmount();
	});

	$(".dash-contents .trade .trade-action .trade-amount .trade-amount-minus").on("click", function(){
		minusAmount();
	});

	// Open profile box
	$(".account-profile").on("click", function(){
		hideAllSections();
		$(".profile-box").css("right", "0");
	});

	// Close profile box
	$(".profile-box [data-action='close']").on("click", function(){
		$(".profile-box").css("right", "-1000px");
	});

	$(".profile-box span.close").on("click", function(){
		$(".profile-box").css("right", "-1000px");
	});

	// Tabs
	$(".tabs-details").eq(0).show();

	$(".tabs a").on("click", function(){
		var tabName = $(this).attr("data-tab");

		if(tabName !== undefined){
			$(".tabs-details").hide();
			$("[data-tab-dtl='" + tabName + "']").show();

			$(".tabs a").removeClass("active");
			$("[data-tab='" + tabName + "']").addClass("active");
		}

	});

	$(".dash-contents .order").on("click", ".untoggled", function(){
		$(".dash-contents .order .expand").removeClass("untoggled");
		$(".dash-contents .order .expand").addClass("toggled");
		$(".dash-contents .order .dtls .all-tables").show();
		$(".dash-contents .order .dtls .tables").eq(0).show();

		$(".dash-contents .order").css({
			"height": "28vh",
			"overflow": "auto"
		});

		$(".dash-contents .trade .chart .tradingview-widget-copyright").css({
			"height": "64vh"
		});

		setAdvanceChartWidget();
	});

	$(".dash-contents .order").on("click", ".toggled", function(){

		$(".dash-contents .order .text").removeClass("active");

		$(".dash-contents .order .expand").addClass("untoggled");
		$(".dash-contents .order .expand").removeClass("toggled");
		$(".dash-contents .order .dtls .all-tables").hide();
		$(".dash-contents .order .dtls .tables").hide();

		$(".dash-contents .order").css({
			"height": "8vh",
			"overflow": "hidden"
		});

		$(".dash-contents .trade .chart .tradingview-widget-copyright").css({
			"height": "84vh"
		});

		setAdvanceChartWidget();
	});

	$(".dash-contents .order .text").eq(0).on("click", function(){
		$(".dash-contents .order .text").removeClass("active");
		$(this).addClass("active");
		$(".dash-contents .order .dtls .tables").hide();
		$(".dash-contents .order .dtls .tables").eq(0).show();
	});

	$(".dash-contents .order .text").eq(1).on("click", function(){
		$(".dash-contents .order .text").removeClass("active");
		$(this).addClass("active");
		$(".dash-contents .order .dtls .tables").hide();
		$(".dash-contents .order .dtls .tables").eq(1).show();
	});


	// Tabs
	$(".tabs-details").eq(0).show();

	$(".tabs a").on("click", function(){
		var tabName = $(this).attr("data-tab");

		if(tabName !== undefined){
			$(".tabs-details").hide();
			$("[data-tab-dtl='" + tabName + "']").show();

			$(".tabs a").removeClass("active");
			$("[data-tab='" + tabName + "']").addClass("active");
		}

	});




	// Hover over instrument
	$(".forex-box .second table tr").mouseenter(function(){
		var index = $(".forex-box .second table tr").index(this);
		var eq = index - 1;
		$(".instrument-box").hide();
		$(".instrument-box").eq(eq).show();
	});

	$(".instrument-box").mouseleave(function(){
		$(this).hide();
	});

	$(".forex-box .first a").eq(0).on("click", function(){
		$(".forex-box .first a").removeClass("active");
		$(this).addClass("active");

		$(".forex-box .second .all").show();
		$(".forex-box .second .favourites").hide();
	});

	$(".forex-box .first a").eq(1).on("click", function(){
		$(".forex-box .first a").removeClass("active");
		$(this).addClass("active");

		$(".forex-box .second .all").hide();
		$(".forex-box .second .favourites").show();
	});

	
	function orderBook(action){
		if(action == "show"){
			$(".dash-contents .order-book-section").show();
			$(".dash-contents .market").css("width", "76%");
		}
		if(action == "hide"){
			$(".dash-contents .order-book-section").hide();
			$(".dash-contents .market").css("width", "94%");
		}
	}

	// Switch tabs
	$(".dash-tab-sec").eq(0).show();
	$(".dash-contents .order-book-section .order-book-sec .tabs a").on("click", function(e){
		e.preventDefault();
		var index = $(".dash-contents .order-book-section .order-book-sec .tabs a").index(this);

		$(".dash-contents .order-book-section .order-book-sec .tabs a").removeClass("active");
		$(this).addClass("active");

		$(".dash-tab-sec").hide();
		$(".dash-tab-sec").eq(index).show();
	});

	// Customized Actions
	$('[dash-action="order-book"]').on("click", function(event){
		event.preventDefault();
		if($(".dash-contents .order-book-section").is(":visible")){
			orderBook("hide")
		}
		else {
			orderBook("show");
		}
	});


	// $(".dash-navbar .stock").on("click", ".stock-box span.close", function(){
	// 	var index = $(".dash-navbar .stock .stock-box span.close").index(this);
	// 	$(".dash-navbar .stock .stock-box").eq(index).remove();
	// });



});