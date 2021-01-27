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

	// function setAdvanceChartWidget(){
	// 	// Get market width
	// 	var chartWidth = $(".dash-contents .trade .chart").outerWidth();
	// 	var chartHeight = $(".dash-contents .trade .chart").outerHeight() - 50;

	// 	new TradingView.widget(
	//     {
	//       "width": chartWidth,
	//       "height": chartHeight,
	//       "symbol": "NASDAQ:AAPL",
	//       "interval": "D",
	//       "timezone": "Etc/UTC",
	//       "theme": "dark",
	//       "style": "1",
	//       "locale": "en",
	//       "toolbar_bg": "#f1f3f6",
	//       "enable_publishing": false,
	//       "hide_side_toolbar": false,
	//       "allow_symbol_change": true,
	//       "container_id": "tradingview_65e38"
	//     }
	//     );
	// }

	function dashboardDetails(action){
		if(action == "hide"){
			$(".dash-contents .market").css({
				"width": "93%"
			});
			$(".dash-contents .details").css({
				"width": "0"
			});
			$(".dash-contents .details .expand-btn").removeClass("close");
			$(".dash-contents .details .expand-btn").addClass("open");
		}

		if(action == "show"){
			$(".dash-contents .market").css({
				"width": "70%"
			});
			$(".dash-contents .details").css({
				"width": "23%"
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

	$(".buy-option button.close1").on("click", function(){
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
			"height": "35vh",
			"overflow": "auto"
		});

		$(".dash-contents .trade .chart").css({
			"height": "55vh"
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

		$(".dash-contents .trade .chart").css({
			"height": "85vh"
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

	// $(".forex-box .second table tr").on("click", function(){
	// 	var numberOfInstrument = $(".dash-navbar .stock .stock-box").length;

	// 	if(numberOfInstrument < 4){
	// 		var index = $(".forex-box .second table tr").index(this);
	// 		var eq = index - 1;
	// 		var instrument = $(".instrument-box .instrument").eq(eq).text();

	// 		// Prepend instrument
	// 		$(".dash-navbar .stock .dash-row").prepend("<div class=\"stock-box\"><span class=\"name\">Stock</span><span class=\"currency\">" + instrument + "</span><span class=\"close\">x</span></div>");
	// 	}

	// });

	// $(".dash-navbar .stock").on("click", ".stock-box span.close", function(){
	// 	var index = $(".dash-navbar .stock .stock-box span.close").index(this);
	// 	$(".dash-navbar .stock .stock-box").eq(index).remove();
	// });

	// setTimeout(function() {
	// 	setAdvanceChartWidget();
	// }, 500);

});


// import React, { useState, useEffect, Component } from "react";
// import "../AccountsAuth/dash.css";
// import { Route, Switch, useHistory } from "react-router-dom";
// import TradingViewWidget, { Themes } from "react-tradingview-widget";

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fx: ["EURUSD", "USDGBP", "USDJPY"],
//       fxPrice: [],
//       iex: [],
//       crypto: [],
//       cum: [],
//       hideIbox: false,
//       currentItem: [],
//       addCurrentItemC: [],
//       addCurrentItemFx: [],
//       addCurrentItemCum: [],
//       addCurrentItemIex: [],
//       fillArr: [],
//       nullF: "",
//       setView: [],
//       notification: false,
//       buyOpt: false,
//       sellOpt: false,
//       realAcct: false,
//       forexBox: false,
//     };
//     this.myRef = React.createRef();
//     this.myRef2 = React.createRef();
//   }
//   token = "pk_89a71aad5118468288bc93d05e4c33ae";

//   componentDidMount() {
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
//     script.async = false;
//     script.innerHTML = JSON.stringify({
//       colorTheme: "dark",
//       dateRange: "12M",
//       showChart: true,
//       locale: "en",
//       largeChartUrl: "",
//       isTransparent: false,
//       showSymbolLogo: true,
//       width: "100%",
//       height: "100%",
//       plotLineColorGrowing: "rgba(25, 118, 210, 1)",
//       plotLineColorFalling: "rgba(25, 118, 210, 1)",
//       gridLineColor: "rgba(42, 46, 57, 1)",
//       scaleFontColor: "rgba(120, 123, 134, 1)",
//       belowLineFillColorGrowing: "rgba(33, 150, 243, 0.12)",
//       belowLineFillColorFalling: "rgba(33, 150, 243, 0.12)",
//       symbolActiveColor: "rgba(33, 150, 243, 0.12)",
//       tabs: [
//         {
//           title: "Indices",
//           symbols: [
//             {
//               s: "FOREXCOM:SPXUSD",
//               d: "S&P 500",
//             },
//             {
//               s: "FOREXCOM:NSXUSD",
//               d: "Nasdaq 100",
//             },
//             {
//               s: "FOREXCOM:DJI",
//               d: "Dow 30",
//             },
//             {
//               s: "INDEX:NKY",
//               d: "Nikkei 225",
//             },
//             {
//               s: "INDEX:DEU30",
//               d: "DAX Index",
//             },
//             {
//               s: "FOREXCOM:UKXGBP",
//               d: "FTSE 100",
//             },
//           ],
//           originalTitle: "Indices",
//         },
//         {
//           title: "Commodities",
//           symbols: [
//             {
//               s: "CME_MINI:ES1!",
//               d: "S&P 500",
//             },
//             {
//               s: "CME:6E1!",
//               d: "Euro",
//             },
//             {
//               s: "COMEX:GC1!",
//               d: "Gold",
//             },
//             {
//               s: "NYMEX:CL1!",
//               d: "Crude Oil",
//             },
//             {
//               s: "NYMEX:NG1!",
//               d: "Natural Gas",
//             },
//             {
//               s: "CBOT:ZC1!",
//               d: "Corn",
//             },
//           ],
//           originalTitle: "Commodities",
//         },
//         {
//           title: "Bonds",
//           symbols: [
//             {
//               s: "CME:GE1!",
//               d: "Eurodollar",
//             },
//             {
//               s: "CBOT:ZB1!",
//               d: "T-Bond",
//             },
//             {
//               s: "CBOT:UB1!",
//               d: "Ultra T-Bond",
//             },
//             {
//               s: "EUREX:FGBL1!",
//               d: "Euro Bund",
//             },
//             {
//               s: "EUREX:FBTP1!",
//               d: "Euro BTP",
//             },
//             {
//               s: "EUREX:FGBM1!",
//               d: "Euro BOBL",
//             },
//           ],
//           originalTitle: "Bonds",
//         },
//         {
//           title: "Forex",
//           symbols: [
//             {
//               s: "FX:EURUSD",
//             },
//             {
//               s: "FX:GBPUSD",
//             },
//             {
//               s: "FX:USDJPY",
//             },
//             {
//               s: "FX:USDCHF",
//             },
//             {
//               s: "FX:AUDUSD",
//             },
//             {
//               s: "FX:USDCAD",
//             },
//           ],
//           originalTitle: "Forex",
//         },
//       ],
//     });
//     this.myRef.current.appendChild(script);

//     // GET Request.
//     fetch(
//       `https://cloud.iexapis.com/stable/fx/latest?symbols=${this.state.fx}&token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({ fxPrice: json });
//       }); //print data to console

//     //crytp
//     fetch(
//       `https://cloud.iexapis.com/stable/crypto/BTCUSD/price?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({ crypto: [...this.state.crypto, ...[json]] });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors

//     fetch(
//       `https://cloud.iexapis.com/stable/crypto/ETHUSD/price?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({ crypto: [...this.state.crypto, ...[json]] });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors

//     fetch(
//       `https://cloud.iexapis.com/stable/crypto/LTCUSD/price?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({ crypto: [...this.state.crypto, ...[json]] });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors

//     //stock

//     fetch(
//       `https://cloud.iexapis.com/stable/stock/AAPL/price?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           iex: [...this.state.iex, ...[{ price: json, symbol: "AAPL" }]],
//         });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors

//     fetch(
//       `https://cloud.iexapis.com/stable/stock/TSLA/price?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           iex: [...this.state.iex, ...[{ price: json, symbol: "TSLA" }]],
//         });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors

//     fetch(
//       `https://cloud.iexapis.com/stable/stock/GOOGL/price?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           iex: [...this.state.iex, ...[{ price: json, symbol: "GOOGL" }]],
//         });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors

//     fetch(`https://cloud.iexapis.com/stable/stock/FB/price?token=${this.token}`)
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           iex: [...this.state.iex, ...[{ price: json, symbol: "FB" }]],
//         });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors

//     fetch(
//       `https://cloud.iexapis.com/stable/stock/MSFT/price?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           iex: [...this.state.iex, ...[{ price: json, symbol: "MSFT" }]],
//         });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors

//     //commdity

//     fetch(
//       `https://cloud.iexapis.com/stable/data-points/market/DCOILWTICO?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           cum: [...this.state.cum, ...[{ price: json, symbol: "Propane" }]],
//         });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors

//     fetch(
//       `https://cloud.iexapis.com/stable/data-points/market/DHHNGSP?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           cum: [...this.state.cum, ...[{ price: json, symbol: "Diesel" }]],
//         });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors

//     fetch(
//       `https://cloud.iexapis.com/stable/data-points/market/DCOILWTICO?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           cum: [...this.state.cum, ...[{ price: json, symbol: "Jet Fuel" }]],
//         });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors
//     fetch(
//       `https://cloud.iexapis.com/stable/data-points/market/DJFUELUSGULF?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           cum: [...this.state.cum, ...[{ price: json, symbol: "Gas" }]],
//         });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors
//     fetch(
//       `https://cloud.iexapis.com/stable/data-points/market/GASDESW?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           cum: [...this.state.cum, ...[{ price: json, symbol: "Heating Oil" }]],
//         });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors

//     fetch(
//       `https://cloud.iexapis.com/stable/data-points/market/DPROPANEMBTX?token=${this.token}`
//     )
//       // Handle success
//       .then((response) => response.json()) // convert to json
//       .then((json) => {
//         this.setState({
//           cum: [...this.state.cum, ...[{ price: json, symbol: "Crude Oil" }]],
//         });
//       }) //print data to console
//       .catch((err) => console.log("Request Failed", err)); // Catch errors
//   }

//   handleC = (item) => () => {
//     this.setState({
//       hideIbox: false,
//       currentItem: [
//         { symbol: item.symbol, price: item.price, rate: item.rate },
//       ],
//     });
//   };

//   handleAC = (item) => () => {
//     this.setState({
//       hideIbox: false,
//       addCurrentItemC: [
//         ...this.state.addCurrentItemC,
//         ...[{ price: item.price, symbol: item.symbol }],
//       ],
//     });
//   };

//   handleRC = (i) => () => {
//     let value = i;

//     let arr = this.state.addCurrentItemC;

//     arr = arr.filter((item) => item !== value);

//     this.setState({
//       addCurrentItemC: arr,
//     });
//   };

//   handleAFx = (item) => () => {
//     this.setState({
//       hideIbox: false,
//       addCurrentItemFx: [
//         ...this.state.addCurrentItemFx,
//         ...[{ price: item.rate, symbol: item.symbol }],
//       ],
//     });
//   };

//   handleRFx = (i) => () => {
//     let value = i;

//     let arr = this.state.addCurrentItemFx;

//     arr = arr.filter((item) => item !== value);

//     this.setState({
//       addCurrentItemFx: arr,
//     });
//   };

//   handleAIex = (item) => () => {
//     this.setState({
//       hideIbox: false,
//       addCurrentItemIex: [
//         ...this.state.addCurrentItemIex,
//         ...[{ price: item.price, symbol: item.symbol }],
//       ],
//     });
//   };

//   handleRIex = (i) => () => {
//     let value = i;

//     let arr = this.state.addCurrentItemIex;

//     arr = arr.filter((item) => item !== value);

//     this.setState({
//       addCurrentItemIex: arr,
//     });
//   };

//   handleACum = (item) => () => {
//     this.setState({
//       hideIbox: false,
//       addCurrentItemCum: [
//         ...this.state.addCurrentItemCum,
//         ...[{ price: item.price, symbol: item.symbol }],
//       ],
//     });
//   };

//   handleViewUpdate = (item) => () => {
//     this.setState({
//       setView: item,
//     });
//   };

//   handleRCum = (i) => () => {
//     let value = i;

//     let arr = this.state.addCurrentItemCum;

//     arr = arr.filter((item) => item !== value);

//     this.setState({
//       addCurrentItemCum: arr,
//     });
//   };

//   handleFilter = (e) => {
//     let arr1 = [
//       ...this.state.cum,
//       ...this.state.fxPrice,
//       ...this.state.crypto,
//       ...this.state.iex,
//     ];

//     let t = e.target.value ? e.target.value : "";

//     let res = arr1.filter((i) =>
//       i.symbol.toLowerCase().includes(t.toLowerCase())
//     );

//     if (res) {
//       this.setState({
//         fillArr: res,
//         hideOld: true,
//       });
//     } else {
//       this.setState({
//         nullF: "not found",
//         hideOld: true,
//       });
//     }
//   };

//   componentDidUpdate = () => {
//     console.log("from ish", this.state.setView.symbol);
//     const script2 = document.createElement("script");
//     script2.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
//     script2.async = false;
//     script2.innerHTML = JSON.stringify({
//       symbol: this.state.setView.symbol ? this.state.setView.symbol : "BTCUSD",
//       width: "100%",
//       height: "100%",
//       locale: "en",
//       dateRange: "12M",
//       colorTheme: "dark",
//       trendLineColor: "#37a6ef",
//       underLineColor: "rgba(55, 166, 239, 0.15)",
//       isTransparent: false,
//       autosize: true,
//       largeChartUrl: "",
//     });
//     this.myRef2.current.appendChild(script2);
//   };

//   setBuy = () => {
//     console.log(this.state.buyOpt)
//     this.setState({ buyOpt: !this.state.buyOpt });
//   };

//   setSell = () => {
//     console.log(this.state.sellOpt)

//     this.setState({ sellOpt: !this.state.sellOpt });
//   };

//   setNot = () => {
//     console.log(this.state.notification)

//     this.setState({ notification: !this.state.notification });
//   };

//   setFox = () => {

//     console.log(this.state.forexBox)
//     this.setState({ forexBox: !this.state.forexBox});
//   };

//   setReal = () => {
//     console.log(this.state.realAcct)
//     this.setState({ realAcct: !this.state.realAcct });
//   };
//   render() {
//     return (
//       <div>
//         {/* Beggining of navbar */}
//         <nav className="dash-container dash-navbar">
//           <div className="brand">
//             <a href="#">
//               <img src="images/logo.png" />
//             </a>
//           </div>
//           <div className="stock">
//             <div
//               className="dash-row sss"
//               style={{ flexWrap: "nowrap", overflow: "auto" }}
//             >
//               {this.state.addCurrentItemC.length > 0
//                 ? this.state.addCurrentItemC.map((item, i) => (
//                     <div
//                       className="stock-box"
//                       onClick={this.handleViewUpdate(item)}
//                     >
//                       <span className="name">Cryptocurrency</span>
//                       <span className="currency">{item.symbol}</span>
//                       <span className="close" onClick={this.handleRC(item)}>
//                         x
//                       </span>
//                     </div>
//                   ))
//                 : ""}

//               {this.state.addCurrentItemFx.length > 0
//                 ? this.state.addCurrentItemFx.map((item, i) => (
//                     <div
//                       className="stock-box"
//                       onClick={this.handleViewUpdate(item)}
//                     >
//                       <span className="name">Forex</span>
//                       <span className="currency">{item.symbol}</span>
//                       <span className="close" onClick={this.handleRFx(item)}>
//                         x
//                       </span>
//                     </div>
//                   ))
//                 : ""}

//               {this.state.addCurrentItemIex.length > 0
//                 ? this.state.addCurrentItemIex.map((item, i) => (
//                     <div
//                       className="stock-box"
//                       onClick={this.handleViewUpdate(item)}
//                     >
//                       <span className="name">Stock</span>
//                       <span className="currency">{item.symbol}</span>
//                       <span className="close" onClick={this.handleRIex(item)}>
//                         x
//                       </span>
//                     </div>
//                   ))
//                 : ""}

//               {this.state.addCurrentItemCum.length > 0
//                 ? this.state.addCurrentItemCum.map((item, i) => (
//                     <div
//                       className="stock-box"
//                       onClick={this.handleViewUpdate(item)}
//                     >
//                       <span className="name">Commodities</span>
//                       <span className="currency">{item.symbol}</span>
//                       <span className="close" onClick={this.handleRCum(item)}>
//                         x
//                       </span>
//                     </div>
//                   ))
//                 : ""}

//               <div id="add-to-group" className="search" onClick={this.setFox}>
//                 <svg
//                   width={30}
//                   height={30}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M12 8.3273V15.6537"
//                     stroke="#fff"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     d="M15.6667 11.9905H8.33333"
//                     stroke="#fff"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                   <path
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z"
//                     stroke="#fff"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </div>
//           <div className="account">
//             <div className="dash-row dash-row-centralized account-box">
//               <div className="real-account" >
//                 <a href="#" onClick={this.setReal}>
//                   <div className="dash-row dash-row-centralized">
//                     <div className="text">
//                       <h4 className="dtl">Real Account</h4>
//                       <h1 className="amount">798.62 USD</h1>
//                     </div>
//                     <div className="icon">
//                       <svg
//                         width={24}
//                         height={24}
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M19 8.5L12 15.5L5 8.5"
//                           stroke="#28b756"
//                           strokeWidth="1.5"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//               <div className="notification" onClick={this.setNot}>
//                 <a href="#">
//                   <svg
//                     width={30}
//                     height={30}
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z"
//                       stroke="#fff"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                     <path
//                       d="M9.55493 20.8518C10.0542 21.4784 10.7874 21.884 11.5922 21.9787C12.3971 22.0734 13.2072 21.8495 13.8433 21.3564C14.0389 21.2106 14.2149 21.041 14.3672 20.8518"
//                       stroke="#fff"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </a>
//                 {this.state.notification ? (
//                   <div className="notification-box">
//                     <div className="notification">
//                       <span className="title">
//                         Payment canceled #EVO-7IY4-2546
//                       </span>
//                       <span className="desc">
//                         Your payment #EVO-7IY4-2546 has been canceled. Reason :
//                       </span>
//                       <span className="time">5 months ago</span>
//                     </div>
//                     <div className="notification">
//                       <span className="title">
//                         Payment canceled #EVO-7IY4-2546
//                       </span>
//                       <span className="desc">
//                         Your payment #EVO-7IY4-2546 has been canceled. Reason :
//                       </span>
//                       <span className="time">5 months ago</span>
//                     </div>
//                     <div className="notification">
//                       <span className="title">
//                         Payment canceled #EVO-7IY4-2546
//                       </span>
//                       <span className="desc">
//                         Your payment #EVO-7IY4-2546 has been canceled. Reason :
//                       </span>
//                       <span className="time">5 months ago</span>
//                     </div>
//                     <div className="notification">
//                       <span className="title">
//                         Payment canceled #EVO-7IY4-2546
//                       </span>
//                       <span className="desc">
//                         Your payment #EVO-7IY4-2546 has been canceled. Reason :
//                       </span>
//                       <span className="time">5 months ago</span>
//                     </div>
//                     <div className="notification">
//                       <span className="title">
//                         Payment canceled #EVO-7IY4-2546
//                       </span>
//                       <span className="desc">
//                         Your payment #EVO-7IY4-2546 has been canceled. Reason :
//                       </span>
//                       <span className="time">5 months ago</span>
//                     </div>
//                     <span className="close">x</span>
//                   </div>
//                 ) : (
//                   ""
//                 )}
//               </div>
//               <div className="account-profile">
//                 <a href="#">
//                   <div className="profile" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </nav>
//         {/* Ending of navbar */}
//         {/* Beginning of contents */}
//         <section className="dash-contents">
//           <div className="dash-row">
//             <div className="sidebar">
//               <ul>
//                 <li>
//                   <a href="#">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="-5 -4 24 24"
//                       width={20}
//                       height={20}
//                       preserveAspectRatio="xMinYMin"
//                       className="icon__icon"
//                     >
//                       <path d="M1 0a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm12 4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zM7 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z" />
//                     </svg>
//                     <span>Board</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="-5 -2 24 24"
//                       width={20}
//                       height={20}
//                       preserveAspectRatio="xMinYMin"
//                       className="icon__icon"
//                     >
//                       <path d="M5 18v2H3v-2H0V0h11a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5zM3 2H2v14h1V2zm2 0v14h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5zm1 2h5v2H6V4zm0 3h5v2H6V7z" />
//                     </svg>
//                     <span>Order Book</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="-2 -2 24 24"
//                       width={20}
//                       height={20}
//                       preserveAspectRatio="xMinYMin"
//                       className="icon__icon"
//                     >
//                       <path d="M6 2H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2zM3.01 8v9.965H5V13a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4.965h6.013V8H15c-.768 0-1.47-.289-2-.764A2.989 2.989 0 0 1 11 8H9c-.768 0-1.47-.289-2-.764A2.989 2.989 0 0 1 5 8H3.01zm-2-.754A2.993 2.993 0 0 1 0 5V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v2c0 .882-.38 1.676-.987 2.225v10.74a2 2 0 0 1-2 2h-7.64A2.01 2.01 0 0 1 9 20H7a2.01 2.01 0 0 1-.373-.035H3.011a2 2 0 0 1-2-2V7.245zM9 17.966V13H7v4.965h2zM12 2H8v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2zm2 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-3zm0 9h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z" />
//                     </svg>
//                     <span>Market</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="-1.5 -4 24 24"
//                       width={20}
//                       height={20}
//                       preserveAspectRatio="xMinYMin"
//                       className="icon__icon"
//                     >
//                       <path d="M13.071 7.762l6.417 2.575a1 1 0 0 1 .01 1.852l-8.85 3.664a1 1 0 0 1-.765 0L1.032 12.19a1 1 0 0 1 .01-1.852l6.53-2.62c.374-.15 1.556.29 2.693.294 1.215.004 2.387-.417 2.806-.249zM4.064 11.28l6.201 2.567 6.202-2.567-6.202-2.489-6.201 2.489zM10.638.786l8.85 3.551a1 1 0 0 1 .01 1.852l-8.85 3.664a1 1 0 0 1-.765 0L1.032 6.19a1 1 0 0 1 .01-1.852L9.892.786a1 1 0 0 1 .746 0zM4.064 5.28l6.201 2.567 6.202-2.567-6.202-2.489L4.064 5.28z" />
//                     </svg>
//                     <span>Portfolio</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="-4.5 -2 24 24"
//                       width={20}
//                       height={20}
//                       preserveAspectRatio="xMinYMin"
//                       className="icon__icon"
//                     >
//                       <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h7a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" />
//                       <path d="M5 4h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm0 5h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zm4 0h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zm0 4h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zm-4 0h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
//                     </svg>
//                     <span>Calc.</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="-2 -2 24 24"
//                       width={20}
//                       height={20}
//                       preserveAspectRatio="xMinYMin"
//                       className="icon__icon"
//                     >
//                       <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
//                       <path d="M10 18c.448 0 1.119-.568 1.747-1.823C12.532 14.607 13 12.392 13 10c0-2.392-.468-4.607-1.253-6.177C11.119 2.568 10.447 2 10 2c-.448 0-1.119.568-1.747 1.823C7.468 5.393 7 7.608 7 10c0 2.392.468 4.607 1.253 6.177C8.881 17.432 9.553 18 10 18zm0 2c-2.761 0-5-4.477-5-10S7.239 0 10 0s5 4.477 5 10-2.239 10-5 10z" />
//                       <path d="M2 12h16v2H2v-2zm0-6h16v2H2V6z" />
//                     </svg>
//                     <span>News</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="-2 -2 24 24"
//                       width={20}
//                       height={20}
//                       preserveAspectRatio="xMinYMin"
//                       className="icon__icon"
//                     >
//                       <path d="M19.95 11c-.501 5.053-4.765 9-9.95 9-5.523 0-10-4.477-10-10C0 4.815 3.947.551 9 .05v2.012A8.001 8.001 0 0 0 10 18a8.001 8.001 0 0 0 7.938-7h2.013zm0-2h-2.012A8.004 8.004 0 0 0 11 2.062V.049A10.003 10.003 0 0 1 19.95 9z" />
//                     </svg>
//                     <span>Manager</span>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="-2 -2 24 24"
//                       width={20}
//                       height={20}
//                       preserveAspectRatio="xMinYMin"
//                       className="icon__icon"
//                     >
//                       <path d="M20 8.163A2.106 2.106 0 0 0 18.926 10c0 .789.433 1.476 1.074 1.837l-.717 2.406a2.105 2.105 0 0 0-2.218 3.058l-2.062 1.602A2.104 2.104 0 0 0 11.633 20l-3.29-.008a2.104 2.104 0 0 0-3.362-1.094l-2.06-1.615A2.105 2.105 0 0 0 .715 14.24L0 11.825A2.106 2.106 0 0 0 1.051 10C1.051 9.22.63 8.54 0 8.175L.715 5.76a2.105 2.105 0 0 0 2.207-3.043L4.98 1.102A2.104 2.104 0 0 0 8.342.008L11.634 0a2.104 2.104 0 0 0 3.37 1.097l2.06 1.603a2.105 2.105 0 0 0 2.218 3.058L20 8.162zM14.823 3.68c0-.063.002-.125.005-.188l-.08-.062a4.103 4.103 0 0 1-4.308-1.428l-.904.002a4.1 4.1 0 0 1-4.29 1.43l-.095.076A4.108 4.108 0 0 1 2.279 7.6a4.1 4.1 0 0 1 .772 2.399c0 .882-.28 1.715-.772 2.4a4.108 4.108 0 0 1 2.872 4.09l.096.075a4.104 4.104 0 0 1 4.289 1.43l.904.002a4.1 4.1 0 0 1 4.307-1.428l.08-.062A4.108 4.108 0 0 1 17.7 12.4a4.102 4.102 0 0 1-.773-2.4c0-.882.281-1.716.773-2.4a4.108 4.108 0 0 1-2.876-3.919zM10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
//                     </svg>
//                     <span>Admin</span>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="details">
//               <div className="watchlist">
//                 <div className="heading">
//                   <span>Watchlist</span>
//                 </div>
//                 {/* TradingView Widget BEGIN */}
//                 <div className="tradingview-widget-container" ref={this.myRef}>
//                   <div className="tradingview-widget-container__widget" />
//                   <div className="tradingview-widget-copyright">
//                     <a
//                       href="https://www.tradingview.com/markets/"
//                       rel="noopener"
//                       target="_blank"
//                     >
//                       <span style={{ display: "none" }} className="blue-text">
//                         Financial Markets
//                       </span>
//                     </a>{" "}
//                     <span style={{ display: "none" }}>by TradingView</span>
//                   </div>
//                 </div>
//                 {/* TradingView Widget END */}
//               </div>
//               <div className="dtls">
//                 <div className="heading">
//                   <span>Details</span>
//                 </div>
//                 {/* TradingView Widget BEGIN */}
//                 <div className="tradingview-widget-container" ref={this.myRef2}>
//                   <div className="tradingview-widget-container__widget" />
//                   <div className="tradingview-widget-copyright">
//                     <a
//                       href={`https://www.tradingview.com/symbols/${
//                         this.state.setView.symbol
//                           ? this.state.setView.symbol
//                           : "EURUSD"
//                       }/?exchange=FX`}
//                       rel="noopener"
//                       target="_blank"
//                     >
//                       <span style={{ display: "none" }} className="blue-text">
//                         {this.state.setView.symbol
//                           ? this.state.setView.symbol
//                           : "EURUSD"}{" "}
//                         Rates
//                       </span>
//                     </a>{" "}
//                     <span style={{ display: "none" }}>by TradingView</span>
//                   </div>
//                 </div>
//                 {/* TradingView Widget END */}
//               </div>
//               {/* Expand Arrows */}
//               <div className="expand-btn close">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="-8 -5 24 24"
//                   width={15}
//                   height={15}
//                   preserveAspectRatio="xMinYMin"
//                   className="icon__icon"
//                 >
//                   <path d="M2.757 7l4.95 4.95a1 1 0 1 1-1.414 1.414L.636 7.707a1 1 0 0 1 0-1.414L6.293.636A1 1 0 0 1 7.707 2.05L2.757 7z" />
//                 </svg>
//               </div>
//             </div>
//             <div className="market">
//               {/* Expand Arrows */}
//               {/* <div className="expand-btn right close">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="15" height="15" preserveAspectRatio="xMinYMin" className="icon__icon"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>
//     </div> */}
//               <div className="trade">
//                 <div className="dash-row">
//                   <div className="chart">
//                     {/* TradingView Widget BEGIN */}
//                     <div className="tradingview-widget-container">
//                       <div id="tradingview_65e38" />
//                       <div
//                         className="tradingview-widget-copyright"
//                         style={{ height: "78vh" }}
//                       >
//                         <a
//                           style={{ display: "none" }}
//                           href="https://www.tradingview.com/symbols/NASDAQ-AAPL/"
//                           rel="noopener"
//                           target="_blank"
//                         >
//                           <span className="blue-text">
//                             {this.state.setView.symbol} Chart
//                           </span>
//                         </a>{" "}
//                         <TradingViewWidget
//                           symbol={this.state.setView.symbol}
//                           theme={Themes.DARK}
//                           locale="fr"
//                           autosize
//                           locale="en"
//                           toolbar_bg="#f1f3f6"
//                           enable_publishing={false}
//                           hide_side_toolbar={false}
//                           allow_symbol_change={true}
//                         />
//                         <span style={{ display: "none" }}>by TradingView</span>
//                       </div>
//                     </div>
//                     {/* TradingView Widget END */}
//                   </div>
//                   <div className="trade-action">
//                     <div className="trade-amount">
//                       <div className="trade-amount-input">
//                         <span className="dash-alt-text text">Amount</span>
//                         <span className="amount">
//                           USD{" "}
//                           <input
//                             className="input"
//                             type="number"
//                             name="amount"
//                             defaultValue={1}
//                             min={1}
//                             max={50000}
//                           />
//                         </span>
//                       </div>
//                       <div className="dash-row">
//                         <div className="trade-amount-minus">
//                           <span>-</span>
//                         </div>
//                         <div className="trade-amount-add">
//                           <span>+</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="cad">
//                       <span className="text">
//                         {this.state.setView.symbol} quantity
//                       </span>
//                       <span className="amount">{this.state.setView.price}</span>
//                     </div>
//                     <div className="actions">
//                       <div className="buy" onClick={this.setBuy}>
//                         <div className="dtl">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="-5 -5 24 24"
//                             width={35}
//                             height={35}
//                             preserveAspectRatio="xMinYMin"
//                             className="icon__icon"
//                           >
//                             <path d="M1 10a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm4-4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1zm4-4a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm4-2a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z" />
//                           </svg>
//                           <span className="text">BUY</span>
//                         </div>
//                       </div>
//                       <div className="sell" onClick={this.setSell}>
//                         <div className="dtl">
//                           <svg
//                             style={{
//                               transform: "",
//                               marginLeft: "-42%",
//                               marginTop: "-30%",
//                               marginBottom: "20%",
//                             }}
//                             xmlns="https://linkinvest.pro/app/modules/kr-dashboard/statics/img/icons/sell_market.svg"
//                             viewBox="-5 -5 24 24"
//                             width={35}
//                             height={35}
//                             preserveAspectRatio="xMinYMin"
//                             className="icon__icon"
//                           >
//                             <path
//                               fill="white"
//                               d="M18 15C17.7348 15 17.4804 15.1054 17.2929 15.2929C17.1054 15.4804 17 15.7348 17 16V18C17 18.2652 17.1054 18.5196 17.2929 18.7071C17.4804 18.8946 17.7348 19 18 19C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V16C19 15.7348 18.8946 15.4804 18.7071 15.2929C18.5196 15.1054 18.2652 15 18 15V15ZM14 11C13.7348 11 13.4804 11.1054 13.2929 11.2929C13.1054 11.4804 13 11.7348 13 12V18C13 18.2652 13.1054 18.5196 13.2929 18.7071C13.4804 18.8946 13.7348 19 14 19C14.2652 19 14.5196 18.8946 14.7071 18.7071C14.8946 18.5196 15 18.2652 15 18V12C15 11.7348 14.8946 11.4804 14.7071 11.2929C14.5196 11.1054 14.2652 11 14 11V11ZM10 7C9.73478 7 9.48043 7.10536 9.29289 7.29289C9.10536 7.48043 9 7.73478 9 8V18C9 18.2652 9.10536 18.5196 9.29289 18.7071C9.48043 18.8946 9.73478 19 10 19C10.2652 19 10.5196 18.8946 10.7071 18.7071C10.8946 18.5196 11 18.2652 11 18V8C11 7.73478 10.8946 7.48043 10.7071 7.29289C10.5196 7.10536 10.2652 7 10 7V7ZM6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19C6.26522 19 6.51957 18.8946 6.70711 18.7071C6.89464 18.5196 7 18.2652 7 18V6C7 5.73478 6.89464 5.48043 6.70711 5.29289C6.51957 5.10536 6.26522 5 6 5V5Z"
//                             />
//                           </svg>
//                           <span className="text">SELL</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="order">
//                 <div className="dtls">
//                   <span className="text">Open positions</span>
//                   <span className="text">Pending orders</span>
//                   <svg
//                     className="expand untoggled"
//                     width={20}
//                     height={20}
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M5 15.5L12 8.5L19 15.5"
//                       stroke="#fff"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   <div className="all-tables">
//                     <div className="tables" id="open-positions">
//                       <table>
//                         <tbody>
//                           <tr>
//                             <th>Buy/Sell</th>
//                             <th>Asset</th>
//                             <th>Invested</th>
//                             <th>Leverage</th>
//                             <th>Deal Size</th>
//                             <th>Profit / Loss</th>
//                           </tr>
//                           <tr>
//                             <td>Buy</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>Loss</td>
//                           </tr>
//                           <tr>
//                             <td>Buy</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>Loss</td>
//                           </tr>
//                           <tr>
//                             <td>Buy</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>Loss</td>
//                           </tr>
//                           <tr>
//                             <td>Buy</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>Loss</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                     <div className="tables" id="pending-orders">
//                       <table>
//                         <tbody>
//                           <tr>
//                             <th>Buy/Sell</th>
//                             <th>Asset</th>
//                             <th>Order Size</th>
//                             <th>Order By Price</th>
//                             <th>Order Type</th>
//                             <th>Used order margin</th>
//                           </tr>
//                           <tr>
//                             <td>Buy</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>Loss</td>
//                           </tr>
//                           <tr>
//                             <td>Buy</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>Loss</td>
//                           </tr>
//                           <tr>
//                             <td>Buy</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>Loss</td>
//                           </tr>
//                           <tr>
//                             <td>Buy</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>0.00</td>
//                             <td>Loss</td>
//                           </tr>
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         {this.state.buyOpt ? (
//           <section className="buy-option">
//             <h6>CONFIRMATION</h6>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Unit price</span>
//               </div>
//               <div className="split moved">
//                 <span>1.263415 CAD</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Investment</span>
//               </div>
//               <div className="split moved">
//                 <span>1.26 CAD</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>USD Quantity</span>
//               </div>
//               <div className="split moved">
//                 <span>1.000000</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Leverage</span>
//               </div>
//               <div className="split moved">
//                 <span>1:30</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Margin Required</span>
//               </div>
//               <div className="split moved">
//                 <span>0.042114 CAD</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Profit</span>
//               </div>
//               <div className="split moved">
//                 <div className="dash-row">
//                   <div>
//                     <input type="number" name="profit" />
//                   </div>
//                   <div>
//                     <span> &nbsp; CAD</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Loss</span>
//               </div>
//               <div className="split moved">
//                 <div className="dash-row">
//                   <div>
//                     <input type="number" name="loss" />
//                   </div>
//                   <div>
//                     <span> &nbsp; CAD</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Commission</span>
//               </div>
//               <div className="split moved">
//                 <span>2.00% = 0.00 CAD</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized highlighted">
//               <div className="split">
//                 <span>TRADE</span>
//               </div>
//               <div className="split moved">
//                 <span>0.04 USD</span>
//               </div>
//             </div>
//             <div className="dash-row">
//               <button>Confirm buying</button>
//             </div>
//             <span className="close">x</span>
//           </section>
//         ) : (
//           ""
//         )}
//         {this.state.sellOpt ? (
//           <section className="sell-option">
//             <h6>CONFIRMATION</h6>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Unit price</span>
//               </div>
//               <div className="split moved">
//                 <span>1.263415 CAD</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Investment</span>
//               </div>
//               <div className="split moved">
//                 <span>1.26 CAD</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>USD Quantity</span>
//               </div>
//               <div className="split moved">
//                 <span>1.000000</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Leverage</span>
//               </div>
//               <div className="split moved">
//                 <span>1:30</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Margin Required</span>
//               </div>
//               <div className="split moved">
//                 <span>0.042114 CAD</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Profit</span>
//               </div>
//               <div className="split moved">
//                 <div className="dash-row">
//                   <div>
//                     <input type="number" name="profit" />
//                   </div>
//                   <div>
//                     <span> &nbsp; CAD</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Loss</span>
//               </div>
//               <div className="split moved">
//                 <div className="dash-row">
//                   <div>
//                     <input type="number" name="loss" />
//                   </div>
//                   <div>
//                     <span> &nbsp; CAD</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized">
//               <div className="split">
//                 <span>Commission</span>
//               </div>
//               <div className="split moved">
//                 <span>2.00% = 0.00 CAD</span>
//               </div>
//             </div>
//             <div className="dash-row dash-row-centralized highlighted">
//               <div className="split">
//                 <span>TRADE</span>
//               </div>
//               <div className="split moved">
//                 <span>0.04 USD</span>
//               </div>
//             </div>
//             <div className="dash-row">
//               <button>Confirm selling</button>
//             </div>
//             <span className="close">x</span>
//           </section>
//         ) : (
//           ""
//         )}

//         {this.state.realAcct ? 
//           <section className="real-account-box active">
//             <div className="dash-row">
//               <div className="first">
//                 <h6>REAL ACCOUNT</h6>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>USD</span>
//                   </div>
//                   <div className="split moved">
//                     <span>592.91 USD</span>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>BNB</span>
//                   </div>
//                   <div className="split moved">
//                     <span>0.00 BNB</span>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>EDO</span>
//                   </div>
//                   <div className="split moved">
//                     <span>0.00 EDO</span>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>BQX</span>
//                   </div>
//                   <div className="split moved">
//                     <span>0.00 BQX</span>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>BTCB</span>
//                   </div>
//                   <div className="split moved">
//                     <span>0.00 BTCB</span>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>BTG</span>
//                   </div>
//                   <div className="split moved">
//                     <span>0.00 BTG</span>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>CDT</span>
//                   </div>
//                   <div className="split moved">
//                     <span>0.00 CDT</span>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>CHAT</span>
//                   </div>
//                   <div className="split moved">
//                     <span>0.00 CHAT</span>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>CLOAK</span>
//                   </div>
//                   <div className="split moved">
//                     <span>0.00 0.00 CLOAK</span>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>DATA</span>
//                   </div>
//                   <div className="split moved">
//                     <span>0.00 DATA</span>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>DENT</span>
//                   </div>
//                   <div className="split moved">
//                     <span>0.00 DENT</span>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized">
//                   <div className="split">
//                     <span>DGD</span>
//                   </div>
//                   <div className="split moved">
//                     <span>0.00 DGD</span>
//                   </div>
//                   <div className="dash-row">
//                     <a href="#">See all balances</a>
//                   </div>
//                 </div>
//                 <span className="close">x</span>
//               </div>
//               <div className="second">
//                 <div className="dash-row dash-row-centralized rows">
//                   <div className="icon">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="-2 -2 24 24"
//                       width={20}
//                       height={20}
//                       preserveAspectRatio="xMinYMin"
//                       className="icon__icon"
//                     >
//                       <path d="M14.335 9.61l-1.817-1.05-1.495 1.446 1.366 1.322 1.946-1.124a.34.34 0 0 0 .172-.297.34.34 0 0 0-.172-.298zM12.21 8.38l-2-1.155-4.384-2.25 4.95 4.793zM5.9 14.966l4.317-2.382 1.864-1.077-1.304-1.263zM5.534 5.17l-.005 9.677 5.002-4.841z" />
//                       <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" />
//                     </svg>
//                   </div>
//                   <div className="details">
//                     <span className="name">Real account</span>
//                     <span className="amount">596.34 USD</span>
//                   </div>
//                   <div className="btn">
//                     <a className="withdraw" href="#">
//                       Withdraw
//                     </a>
//                     <a className="credit" href="#">
//                       Credit
//                     </a>
//                   </div>
//                 </div>
//                 <div className="dash-row dash-row-centralized rows-2">
//                   <div className="icon">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="-2 -2 24 24"
//                       width={20}
//                       height={20}
//                       preserveAspectRatio="xMinYMin"
//                       className="icon__icon"
//                     >
//                       <path d="M14.335 9.61l-1.817-1.05-1.495 1.446 1.366 1.322 1.946-1.124a.34.34 0 0 0 .172-.297.34.34 0 0 0-.172-.298zM12.21 8.38l-2-1.155-4.384-2.25 4.95 4.793zM5.9 14.966l4.317-2.382 1.864-1.077-1.304-1.263zM5.534 5.17l-.005 9.677 5.002-4.841z" />
//                       <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" />
//                     </svg>
//                   </div>
//                   <div className="details">
//                     <span className="name">External fees</span>
//                     <span className="amount">0.00 BTC (0.00 $)</span>
//                   </div>
//                   <div className="btn">
//                     <a className="withdraw" href="#">
//                       Pay Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//          : (
//           "hhh"
//         )}
//         <section className="profile-box">
//           <div className="change-profile">
//             <div className="dash-row dash-row-centralized">
//               <div className="input">
//                 <label htmlFor="profile-image">
//                   <img src="images/profile.jpg" />
//                 </label>
//                 <input type="file" name="profile-image" id="profile-image" />
//               </div>
//               <div className="user">
//                 <span className="name">Trade</span>
//                 <span className="email">admin@trade.ltd</span>
//               </div>
//             </div>
//           </div>
//           {/* Tabs */}
//           <div className="tabs">
//             <a className="active" data-tab="profile">
//               Profile
//             </a>
//             <a data-tab="notification">Notification</a>
//             <a data-tab="security">Security</a>
//             <a data-tab="exchanges">Exchanges</a>
//             <a data-tab="withdraw/wallets">Withdraw / Wallets</a>
//             <a data-action="logout">Logout</a>
//           </div>
//           <div data-tab-dtl="profile" className="tabs-details">
//             <form autoComplete="off">
//               <div className="dash-row">
//                 <div className="split-50">
//                   <div className="dash-form-box">
//                     <label>Your Name</label>
//                     <input type="text" name="name" id="name" />
//                   </div>
//                 </div>
//                 <div className="split-50">
//                   <div className="dash-form-box">
//                     <label>Your Email Address</label>
//                     <input type="email" name="email" id="email" />
//                   </div>
//                 </div>
//                 <div className="split-50">
//                   <div className="dash-form-box">
//                     <label>Language</label>
//                     <select
//                       name="language"
//                       id="language"
//                       data-placeholder="Choose a Language..."
//                     >
//                       <option value="Afrikaans">Afrikaans</option>
//                       <option value="Albanian">Albanian</option>
//                       <option value="Arabic">Arabic</option>
//                       <option value="Armenian">Armenian</option>
//                       <option value="Basque">Basque</option>
//                       <option value="Bengali">Bengali</option>
//                       <option value="Bulgarian">Bulgarian</option>
//                       <option value="Catalan">Catalan</option>
//                       <option value="Cambodian">Cambodian</option>
//                       <option value="Chinese (Mandarin)">
//                         Chinese (Mandarin)
//                       </option>
//                       <option value="Croatian">Croatian</option>
//                       <option value="Czech">Czech</option>
//                       <option value="Danish">Danish</option>
//                       <option value="Dutch">Dutch</option>
//                       <option value="English">English</option>
//                       <option value="Estonian">Estonian</option>
//                       <option value="Fiji">Fiji</option>
//                       <option value="Finnish">Finnish</option>
//                       <option value="French">French</option>
//                       <option value="Georgian">Georgian</option>
//                       <option value="German">German</option>
//                       <option value="Greek">Greek</option>
//                       <option value="Gujarati">Gujarati</option>
//                       <option value="Hebrew">Hebrew</option>
//                       <option value="Hindi">Hindi</option>
//                       <option value="Hungarian">Hungarian</option>
//                       <option value="Icelandic">Icelandic</option>
//                       <option value="Indonesian">Indonesian</option>
//                       <option value="Irish">Irish</option>
//                       <option value="Italian">Italian</option>
//                       <option value="Japanese">Japanese</option>
//                       <option value="Javanese">Javanese</option>
//                       <option value="Korean">Korean</option>
//                       <option value="Latin">Latin</option>
//                       <option value="Latvian">Latvian</option>
//                       <option value="Lithuanian">Lithuanian</option>
//                       <option value="Macedonian">Macedonian</option>
//                       <option value="Malay">Malay</option>
//                       <option value="Malayalam">Malayalam</option>
//                       <option value="Maltese">Maltese</option>
//                       <option value="Maori">Maori</option>
//                       <option value="Marathi">Marathi</option>
//                       <option value="Mongolian">Mongolian</option>
//                       <option value="Nepali">Nepali</option>
//                       <option value="Norwegian">Norwegian</option>
//                       <option value="Persian">Persian</option>
//                       <option value="Polish">Polish</option>
//                       <option value="Portuguese">Portuguese</option>
//                       <option value="Punjabi">Punjabi</option>
//                       <option value="Quechua">Quechua</option>
//                       <option value="Romanian">Romanian</option>
//                       <option value="Russian">Russian</option>
//                       <option value="Samoan">Samoan</option>
//                       <option value="Serbian">Serbian</option>
//                       <option value="Slovak">Slovak</option>
//                       <option value="Slovenian">Slovenian</option>
//                       <option value="Spanish">Spanish</option>
//                       <option value="Swahili">Swahili</option>
//                       <option value="Swedish ">Swedish </option>
//                       <option value="Tamil">Tamil</option>
//                       <option value="Tatar">Tatar</option>
//                       <option value="Telugu">Telugu</option>
//                       <option value="Thai">Thai</option>
//                       <option value="Tibetan">Tibetan</option>
//                       <option value="Tonga">Tonga</option>
//                       <option value="Turkish">Turkish</option>
//                       <option value="Ukrainian">Ukrainian</option>
//                       <option value="Urdu">Urdu</option>
//                       <option value="Uzbek">Uzbek</option>
//                       <option value="Vietnamese">Vietnamese</option>
//                       <option value="Welsh">Welsh</option>
//                       <option value="Xhosa">Xhosa</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="split-50">
//                   <div className="dash-form-box">
//                     <label>Currency</label>
//                     <select name="currency" id="currency">
//                       <option value="AED">United Arab Emirates dirham</option>
//                       <option value="AFN">Afghan afghani</option>
//                       <option value="ALL">Albanian lek</option>
//                       <option value="AMD">Armenian dram</option>
//                       <option value="AOA">Angolan kwanza</option>
//                       <option value="ARS">Argentine peso</option>
//                       <option value="AUD">Australian dollar</option>
//                       <option value="AWG">Aruban florin</option>
//                       <option value="AZN">Azerbaijani manat</option>
//                       <option value="BAM">
//                         Bosnia and Herzegovina convertible mark
//                       </option>
//                       <option value="BBD">Barbadian dollar</option>
//                       <option value="BDT">Bangladeshi taka</option>
//                       <option value="BGN">Bulgarian lev</option>
//                       <option value="BHD">Bahraini dinar</option>
//                       <option value="BIF">Burundian franc</option>
//                       <option value="BMD">Bermudian dollar</option>
//                       <option value="BND">Brunei dollar</option>
//                       <option value="BOB">Bolivian boliviano</option>
//                       <option value="BRL">Brazilian real</option>
//                       <option value="BSD">Bahamian dollar</option>
//                       <option value="BTN">Bhutanese ngultrum</option>
//                       <option value="BWP">Botswana pula</option>
//                       <option value="BYR">Belarusian ruble</option>
//                       <option value="BZD">Belize dollar</option>
//                       <option value="CAD">Canadian dollar</option>
//                       <option value="CDF">Congolese franc</option>
//                       <option value="CHF">Swiss franc</option>
//                       <option value="CLP">Chilean peso</option>
//                       <option value="CNY">Chinese yuan</option>
//                       <option value="COP">Colombian peso</option>
//                       <option value="CRC">Costa Rican colón</option>
//                       <option value="CUP">Cuban convertible peso</option>
//                       <option value="CVE">Cape Verdean escudo</option>
//                       <option value="CZK">Czech koruna</option>
//                       <option value="DJF">Djiboutian franc</option>
//                       <option value="DKK">Danish krone</option>
//                       <option value="DOP">Dominican peso</option>
//                       <option value="DZD">Algerian dinar</option>
//                       <option value="EGP">Egyptian pound</option>
//                       <option value="ERN">Eritrean nakfa</option>
//                       <option value="ETB">Ethiopian birr</option>
//                       <option value="EUR">Euro</option>
//                       <option value="FJD">Fijian dollar</option>
//                       <option value="FKP">Falkland Islands pound</option>
//                       <option value="GBP">British pound</option>
//                       <option value="GEL">Georgian lari</option>
//                       <option value="GHS">Ghana cedi</option>
//                       <option value="GMD">Gambian dalasi</option>
//                       <option value="GNF">Guinean franc</option>
//                       <option value="GTQ">Guatemalan quetzal</option>
//                       <option value="GYD">Guyanese dollar</option>
//                       <option value="HKD">Hong Kong dollar</option>
//                       <option value="HNL">Honduran lempira</option>
//                       <option value="HRK">Croatian kuna</option>
//                       <option value="HTG">Haitian gourde</option>
//                       <option value="HUF">Hungarian forint</option>
//                       <option value="IDR">Indonesian rupiah</option>
//                       <option value="ILS">Israeli new shekel</option>
//                       <option value="IMP">Manx pound</option>
//                       <option value="INR">Indian rupee</option>
//                       <option value="IQD">Iraqi dinar</option>
//                       <option value="IRR">Iranian rial</option>
//                       <option value="ISK">Icelandic króna</option>
//                       <option value="JEP">Jersey pound</option>
//                       <option value="JMD">Jamaican dollar</option>
//                       <option value="JOD">Jordanian dinar</option>
//                       <option value="JPY">Japanese yen</option>
//                       <option value="KES">Kenyan shilling</option>
//                       <option value="KGS">Kyrgyzstani som</option>
//                       <option value="KHR">Cambodian riel</option>
//                       <option value="KMF">Comorian franc</option>
//                       <option value="KPW">North Korean won</option>
//                       <option value="KRW">South Korean won</option>
//                       <option value="KWD">Kuwaiti dinar</option>
//                       <option value="KYD">Cayman Islands dollar</option>
//                       <option value="KZT">Kazakhstani tenge</option>
//                       <option value="LAK">Lao kip</option>
//                       <option value="LBP">Lebanese pound</option>
//                       <option value="LKR">Sri Lankan rupee</option>
//                       <option value="LRD">Liberian dollar</option>
//                       <option value="LSL">Lesotho loti</option>
//                       <option value="LTL">Lithuanian litas</option>
//                       <option value="LVL">Latvian lats</option>
//                       <option value="LYD">Libyan dinar</option>
//                       <option value="MAD">Moroccan dirham</option>
//                       <option value="MDL">Moldovan leu</option>
//                       <option value="MGA">Malagasy ariary</option>
//                       <option value="MKD">Macedonian denar</option>
//                       <option value="MMK">Burmese kyat</option>
//                       <option value="MNT">Mongolian tögrög</option>
//                       <option value="MOP">Macanese pataca</option>
//                       <option value="MRO">Mauritanian ouguiya</option>
//                       <option value="MUR">Mauritian rupee</option>
//                       <option value="MVR">Maldivian rufiyaa</option>
//                       <option value="MWK">Malawian kwacha</option>
//                       <option value="MXN">Mexican peso</option>
//                       <option value="MYR">Malaysian ringgit</option>
//                       <option value="MZN">Mozambican metical</option>
//                       <option value="NAD">Namibian dollar</option>
//                       <option value="NGN">Nigerian naira</option>
//                       <option value="NIO">Nicaraguan córdoba</option>
//                       <option value="NOK">Norwegian krone</option>
//                       <option value="NPR">Nepalese rupee</option>
//                       <option value="NZD">New Zealand dollar</option>
//                       <option value="OMR">Omani rial</option>
//                       <option value="PAB">Panamanian balboa</option>
//                       <option value="PEN">Peruvian nuevo sol</option>
//                       <option value="PGK">Papua New Guinean kina</option>
//                       <option value="PHP">Philippine peso</option>
//                       <option value="PKR">Pakistani rupee</option>
//                       <option value="PLN">Polish złoty</option>
//                       <option value="PRB">Transnistrian ruble</option>
//                       <option value="PYG">Paraguayan guaraní</option>
//                       <option value="QAR">Qatari riyal</option>
//                       <option value="RON">Romanian leu</option>
//                       <option value="RSD">Serbian dinar</option>
//                       <option value="RUB">Russian ruble</option>
//                       <option value="RWF">Rwandan franc</option>
//                       <option value="SAR">Saudi riyal</option>
//                       <option value="SBD">Solomon Islands dollar</option>
//                       <option value="SCR">Seychellois rupee</option>
//                       <option value="SDG">Singapore dollar</option>
//                       <option value="SEK">Swedish krona</option>
//                       <option value="SGD">Singapore dollar</option>
//                       <option value="SHP">Saint Helena pound</option>
//                       <option value="SLL">Sierra Leonean leone</option>
//                       <option value="SOS">Somali shilling</option>
//                       <option value="SRD">Surinamese dollar</option>
//                       <option value="SSP">South Sudanese pound</option>
//                       <option value="STD">São Tomé and Príncipe dobra</option>
//                       <option value="SVC">Salvadoran colón</option>
//                       <option value="SYP">Syrian pound</option>
//                       <option value="SZL">Swazi lilangeni</option>
//                       <option value="THB">Thai baht</option>
//                       <option value="TJS">Tajikistani somoni</option>
//                       <option value="TMT">Turkmenistan manat</option>
//                       <option value="TND">Tunisian dinar</option>
//                       <option value="TOP">Tongan paʻanga</option>
//                       <option value="TRY">Turkish lira</option>
//                       <option value="TTD">Trinidad and Tobago dollar</option>
//                       <option value="TWD">New Taiwan dollar</option>
//                       <option value="TZS">Tanzanian shilling</option>
//                       <option value="UAH">Ukrainian hryvnia</option>
//                       <option value="UGX">Ugandan shilling</option>
//                       <option selected value="USD">
//                         United States dollar
//                       </option>
//                       <option value="UYU">Uruguayan peso</option>
//                       <option value="UZS">Uzbekistani som</option>
//                       <option value="VEF">Venezuelan bolívar</option>
//                       <option value="VND">Vietnamese đồng</option>
//                       <option value="VUV">Vanuatu vatu</option>
//                       <option value="WST">Samoan tālā</option>
//                       <option value="XAF">Central African CFA franc</option>
//                       <option value="XCD">East Caribbean dollar</option>
//                       <option value="XOF">West African CFA franc</option>
//                       <option value="XPF">CFP franc</option>
//                       <option value="YER">Yemeni rial</option>
//                       <option value="ZAR">South African rand</option>
//                       <option value="ZMW">Zambian kwacha</option>
//                       <option value="ZWL">Zimbabwean dollar</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="split-50">
//                   <div className="dash-form-box">
//                     <label>Type Chart</label>
//                     <select name="type-chart" id="type-chart">
//                       <option value="Default">Default</option>
//                       <option value="Trading View">Trading View</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="split-50" />
//                 <div className="split-50">
//                   <div className="dash-form-box">
//                     <label>Change Password</label>
//                     <input type="password" name="password" id="password" />
//                   </div>
//                 </div>
//                 <div className="split-50">
//                   <div className="dash-form-box">
//                     <label>Verify Password</label>
//                     <input type="password" name="vpassword" id="vpassword" />
//                   </div>
//                 </div>
//                 <div className="split-50">
//                   <div className="dash-form-box">
//                     <a data-action="close">Back</a>
//                   </div>
//                 </div>
//                 <div className="split-50" style={{ textAlign: "right" }}>
//                   <div className="dash-form-box">
//                     <button type="submit">Validate</button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div data-tab-dtl="notification" className="tabs-details">
//             <div className="dash-row dash-row-centralized">
//               <div className="split-50">
//                 <h3>Mobile, browser, windows notifications</h3>
//                 <p></p>
//                 <ul>
//                   <li>Create price alert</li>
//                 </ul>
//                 <p />
//                 <div className="dash-form-box">
//                   <input
//                     type="text"
//                     name="token"
//                     id="token"
//                     placeholder="Your PushBullet Access Token"
//                   />
//                 </div>
//                 <div className="dash-form-box" style={{ textAlign: "right" }}>
//                   <button type="submit">Save</button>
//                 </div>
//               </div>
//               <div className="split-50">
//                 <img src="images/mobile.png" />
//               </div>
//             </div>
//             <div className="other-dtls">
//               <h3>I need help !</h3>
//               <ul>
//                 <li>
//                   Download PushBullet app on your phone (available for Android
//                   &amp; iOS)
//                 </li>
//                 <li>Create an account on it</li>
//                 <li>
//                   Connect with your new account here :{" "}
//                   <a href="https://www.pushbullet.com/signin" target="_blank">
//                     https://www.pushbullet.com/signin
//                   </a>
//                 </li>
//                 <li>Go on Settings &gt; Account and create an Access token</li>
//                 <li>
//                   Copy the key and paste it on the fill and click on save.
//                 </li>
//                 <li>
//                   An notification will be sent to check if connexion is
//                   successful.
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div data-tab-dtl="security" className="tabs-details">
//             <h1>Security</h1>
//           </div>
//           <div data-tab-dtl="exchanges" className="tabs-details">
//             <h1>Exchanges</h1>
//           </div>
//           <div data-tab-dtl="withdraw/wallets" className="tabs-details">
//             <h1>Withdraw / Wallets</h1>
//           </div>
//           <span className="close">x</span>
//         </section>
//         {this.state.forexBox ? 
//           <section className="forex-box">
//             <div className="dash-row">
//               <div className="first">
//                 <a className="active" href="#">
//                   All
//                 </a>
//                 <a href="#">Favourites</a>
//               </div>
//               <div className="second">
//                 <div className="all">
//                   <div className="header">
//                     <form>
//                       <input
//                         type="search"
//                         name="search"
//                         placeholder="Search Asset"
//                         onChange={this.handleFilter}
//                       />
//                     </form>
//                   </div>
//                   {/* //here oo */}

//                   {this.state.hideIbox ? (
//                     ""
//                   ) : (
//                     <div
//                       className="instrument-box"
//                       onMouseLeave={() => this.setState({ hideIbox: true })}
//                     >
//                       <img className="header-img" src="images/profile.jpg" />
//                       <div className="dtls">
//                         <div className="dash-row dash-row-centralized">
//                           <div>
//                             <img
//                               src={
//                                 this.state.currentItem !== undefined
//                                   ? this.state.currentItem[0]
//                                     ? this.state.currentItem[0].symbol === "FB"
//                                       ? `https://storage.googleapis.com/iex/api/logos/${this.state.currentItem[0].symbol}.png`
//                                       : this.state.currentItem[0].symbol ===
//                                         "TSLA"
//                                       ? `https://storage.googleapis.com/iex/api/logos/${this.state.currentItem[0].symbol}.png`
//                                       : this.state.currentItem[0].symbol ===
//                                         "AAPL"
//                                       ? `https://storage.googleapis.com/iex/api/logos/${this.state.currentItem[0].symbol}.png`
//                                       : this.state.currentItem[0].symbol ===
//                                         "GOOGL"
//                                       ? `https://storage.googleapis.com/iex/api/logos/${this.state.currentItem[0].symbol}.png`
//                                       : this.state.currentItem[0].symbol ===
//                                         "MSFT"
//                                       ? `https://storage.googleapis.com/iex/api/logos/${this.state.currentItem[0].symbol}.png`
//                                       : this.state.currentItem[0].symbol ===
//                                         "BTCUSD"
//                                       ? `https://cryptologos.cc/logos/${
//                                           this.state.currentItem[0].symbol ===
//                                           "ETHUSD"
//                                             ? "ethereum"
//                                             : this.state.currentItem[0]
//                                                 .symbol === "BTCUSD"
//                                             ? "bitcoin"
//                                             : this.state.currentItem[0]
//                                                 .symbol === "LTCUSD"
//                                             ? "litecoin"
//                                             : "https://st2.depositphotos.com/4160903/6037/i/950/depositphotos_60374771-stock-photo-golden-shiny-dollar-symbol-isolated.jpg"
//                                         }-${this.state.currentItem[0].symbol
//                                           .slice(0, 3)
//                                           .toLowerCase()}-logo.png`
//                                       : this.state.currentItem[0].symbol ===
//                                         "ETHUSD"
//                                       ? `https://cryptologos.cc/logos/${
//                                           this.state.currentItem[0].symbol ===
//                                           "ETHUSD"
//                                             ? "ethereum"
//                                             : this.state.currentItem[0]
//                                                 .symbol === "BTCUSD"
//                                             ? "bitcoin"
//                                             : this.state.currentItem[0]
//                                                 .symbol === "LTCUSD"
//                                             ? "litecoin"
//                                             : "https://st2.depositphotos.com/4160903/6037/i/950/depositphotos_60374771-stock-photo-golden-shiny-dollar-symbol-isolated.jpg"
//                                         }-${this.state.currentItem[0].symbol
//                                           .slice(0, 3)
//                                           .toLowerCase()}-logo.png`
//                                       : this.state.currentItem[0].symbol ===
//                                         "LTCUSD"
//                                       ? `https://cryptologos.cc/logos/${
//                                           this.state.currentItem[0].symbol ===
//                                           "ETHUSD"
//                                             ? "ethereum"
//                                             : this.state.currentItem[0]
//                                                 .symbol === "BTCUSD"
//                                             ? "bitcoin"
//                                             : this.state.currentItem[0]
//                                                 .symbol === "LTCUSD"
//                                             ? "litecoin"
//                                             : "https://st2.depositphotos.com/4160903/6037/i/950/depositphotos_60374771-stock-photo-golden-shiny-dollar-symbol-isolated.jpg"
//                                         }-${this.state.currentItem[0].symbol
//                                           .slice(0, 3)
//                                           .toLowerCase()}-logo.png`
//                                       : "https://st2.depositphotos.com/4160903/6037/i/950/depositphotos_60374771-stock-photo-golden-shiny-dollar-symbol-isolated.jpg"
//                                     : "https://st2.depositphotos.com/4160903/6037/i/950/depositphotos_60374771-stock-photo-golden-shiny-dollar-symbol-isolated.jpg"
//                                   : "https://st2.depositphotos.com/4160903/6037/i/950/depositphotos_60374771-stock-photo-golden-shiny-dollar-symbol-isolated.jpg"
//                               }
//                             />
//                           </div>
//                           <div>
//                             <span className="instrument">
//                               {this.state.currentItem !== undefined
//                                 ? this.state.currentItem[0]
//                                   ? this.state.currentItem[0].symbol
//                                   : ""
//                                 : "hellp"}
//                             </span>
//                           </div>
//                         </div>
//                         <div className="dash-row split">
//                           <div className="split-50">
//                             <span className="sub">Leverage</span>
//                             <span className="main">X50</span>
//                           </div>
//                           <div className="split-50">
//                             <span className="sub">Commission</span>
//                             <span className="main">0.02 USD</span>
//                           </div>
//                           <div className="split-50">
//                             <span className="sub">Financing Rate Long</span>
//                             <span className="main">
//                               {" "}
//                               {this.state.currentItem !== undefined
//                                 ? this.state.currentItem[0]
//                                   ? this.state.currentItem[0].price
//                                   : ""
//                                 : "hellp"}
//                               {this.state.currentItem !== undefined
//                                 ? this.state.currentItem[0]
//                                   ? this.state.currentItem[0].rate
//                                     ? this.state.currentItem[0].rate
//                                     : ""
//                                   : ""
//                                 : "hellp"}
//                             </span>
//                           </div>
//                           <div className="split-50">
//                             <span className="sub">Financing Rate Short</span>
//                             <span className="main">-0.07</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   <table>
//                     <tbody>
//                       <tr>
//                         <th>Asset</th>
//                         <th>Price</th>
//                         <th>Leverage</th>
//                         <th>Today Change</th>
//                       </tr>
//                       {this.state.fillArr.length > 0
//                         ? this.state.fillArr.map((item, index) => (
//                             <tr
//                               onMouseMove={this.handleC(item)}
//                               onClick={this.handleAC(item)}
//                             >
//                               <td>
//                                 <div className="dash-row dash-row-centralized">
//                                   <div>
//                                     <img
//                                       src={`https://cryptologos.cc/logos/${
//                                         item.symbol === "ETHUSD"
//                                           ? "ethereum"
//                                           : item.symbol === "BTCUSD"
//                                           ? "bitcoin"
//                                           : item.symbol === "LTCUSD"
//                                           ? "litecoin"
//                                           : ""
//                                       }-${item.symbol
//                                         .slice(0, 3)
//                                         .toLowerCase()}-logo.png`}
//                                     />
//                                   </div>
//                                   <div>
//                                     <span className="instrument">
//                                       {item.symbol}
//                                     </span>
//                                   </div>
//                                 </div>
//                               </td>
//                               <td>$ {item.price ? item.price : item.rate} </td>
//                               <td>X50</td>
//                               <td>
//                                 <div className="dash-row dash-row-centralized space-around">
//                                   <div>
//                                     <span>-4.18%</span>
//                                   </div>
//                                   <div>
//                                     <i className="jam jam-star-f" />
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))
//                         : this.state.crypto.length > 0
//                         ? this.state.crypto.map((item, index) => (
//                             <tr
//                               onMouseMove={this.handleC(item)}
//                               onClick={this.handleAC(item)}
//                             >
//                               <td>
//                                 <div className="dash-row dash-row-centralized">
//                                   <div>
//                                     <img
//                                       src={`https://cryptologos.cc/logos/${
//                                         item.symbol === "ETHUSD"
//                                           ? "ethereum"
//                                           : item.symbol === "BTCUSD"
//                                           ? "bitcoin"
//                                           : item.symbol === "LTCUSD"
//                                           ? "litecoin"
//                                           : ""
//                                       }-${item.symbol
//                                         .slice(0, 3)
//                                         .toLowerCase()}-logo.png`}
//                                     />
//                                   </div>
//                                   <div>
//                                     <span className="instrument">
//                                       {item.symbol}
//                                     </span>
//                                   </div>
//                                 </div>
//                               </td>
//                               <td>$ {item.price}</td>
//                               <td>X50</td>
//                               <td>
//                                 <div className="dash-row dash-row-centralized space-around">
//                                   <div>
//                                     <span>-4.18%</span>
//                                   </div>
//                                   <div>
//                                     <i className="jam jam-star-f" />
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))
//                         : ""}

//                       {this.state.fxPrice.length > 0
//                         ? this.state.fxPrice.map((item, index) => (
//                             <tr
//                               onMouseMove={this.handleC(item)}
//                               onClick={this.handleAFx(item)}
//                             >
//                               <td>
//                                 <div className="dash-row dash-row-centralized">
//                                   <div>
//                                     <img
//                                       src={`https://outsourcing.techzis.com/wp-content/uploads/2020/06/png-transparent-gold-dollar-sign-dollar-sign-united-states-dollar-currency-symbol-dollar-trademark-sign-computer-icons.png`}
//                                     />
//                                   </div>
//                                   <div>
//                                     <span className="instrument">
//                                       {item.symbol}
//                                     </span>
//                                   </div>
//                                 </div>
//                               </td>
//                               <td>$ {item.rate}</td>
//                               <td>X50</td>
//                               <td>
//                                 <div className="dash-row dash-row-centralized space-around">
//                                   <div>
//                                     <span>-4.18%</span>
//                                   </div>
//                                   <div>
//                                     <i className="jam jam-star-f" />
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))
//                         : ""}

//                       {this.state.iex.length > 0
//                         ? this.state.iex.map((item, index) => (
//                             <tr
//                               onMouseMove={this.handleC(item)}
//                               onClick={this.handleAIex(item)}
//                             >
//                               <td>
//                                 <div className="dash-row dash-row-centralized">
//                                   <div>
//                                     <img
//                                       src={`https://storage.googleapis.com/iex/api/logos/${item.symbol}.png`}
//                                     />
//                                   </div>
//                                   <div>
//                                     <span className="instrument">
//                                       {item.symbol}
//                                     </span>
//                                   </div>
//                                 </div>
//                               </td>
//                               <td>$ {item.price}</td>
//                               <td>X50</td>
//                               <td>
//                                 <div className="dash-row dash-row-centralized space-around">
//                                   <div>
//                                     <span>-4.18%</span>
//                                   </div>
//                                   <div>
//                                     <i className="jam jam-star-f" />
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))
//                         : ""}

//                       {this.state.cum.length > 0
//                         ? this.state.cum.map((item, index) => (
//                             <tr
//                               onMouseMove={this.handleC(item)}
//                               onClick={this.handleACum(item)}
//                             >
//                               <td>
//                                 <div className="dash-row dash-row-centralized">
//                                   <div>
//                                     <img
//                                       src={`https://outsourcing.techzis.com/wp-content/uploads/2020/06/png-transparent-gold-dollar-sign-dollar-sign-united-states-dollar-currency-symbol-dollar-trademark-sign-computer-icons.png`}
//                                     />
//                                   </div>
//                                   <div>
//                                     <span className="instrument">
//                                       {item.symbol}
//                                     </span>
//                                   </div>
//                                 </div>
//                               </td>
//                               <td>$ {item.price}</td>
//                               <td>X50</td>
//                               <td>
//                                 <div className="dash-row dash-row-centralized space-around">
//                                   <div>
//                                     <span>-4.18%</span>
//                                   </div>
//                                   <div>
//                                     <i className="jam jam-star-f" />
//                                   </div>
//                                 </div>
//                               </td>
//                             </tr>
//                           ))
//                         : ""}
//                     </tbody>
//                   </table>
//                 </div>
//                 <div className="favourites">
//                   <table>
//                     <tbody>
//                       <tr>
//                         <th>Asset</th>
//                         <th>Price</th>
//                         <th>Leverage</th>
//                         <th>Today Change</th>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//             <span className="close">x</span>
//           </section>
//         : (
//           ""
//         )}
//       </div>
//     );
//   }
// }

// export default Dashboard;
