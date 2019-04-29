webpackJsonp([9], {
	0: function (t, e, i) {
		(function ($, t) {
			"use strict";
			i(98), i(5), i(51), i(66), i(154), i(71), i(156), i(158), i(35), i(91), i(37), i(41), i(160), i(164), i(43), i(166), i(153), $(function () {
				var e = $("body"),
					n = 1,
					o = e.find(".packery-container"),
					s = new t(i(168));
				e.find(".com-page-header").PageHeader({}), e.find(".com-page-footer").PageFooter(), e.find(".com-totop").Totop(), e.find(".com-grid-login").GridLogin({}), e.find(".com-grid-latest").GridLatest({}), e.find(".com-grid-articles-banner").GridArticlesBanner({}), e.find(".com-grid-key-paper").GridKeyPaper({}), e.find(".com-video-player").VideoPlayer({}), e.find(".com-grid-article").GridArticle({}), e.find(".com-grid-key-article").GridKeyArticle({}), e.find(".com-grid-paper").GridPaper({}), e.find(".com-grid-makemoney").GridMakemoney({}), e.find(".com-grid-mob-banner").GridMobBanner({}), $.fn.initLink(), $.fn.initRipple(), $.fn.initLoginStatus(), $.fn.initLoadMore({
					packery: !0,
					baseUrl: "homes/articlemore/",
					lastKey: o.attr("data-lastKey"),
					elContainer: o,
					elLoader: e.find(".com-loader"),
					forbidLoadCondition: function () {
						return 3 == n
					},
					doneCallback: function (t) {
						var e, i = $(s.render({
							home: t.feeds
						})).filter(".packery-item");
						resetImgQuantity(i), i.find(".com-grid-article").GridArticle({}), i.find(".com-grid-paper").GridPaper({}), i.find(".com-grid-makemoney").GridMakemoney({}), o.append(i), o.packery("appended", i), i.find(".com-grid-key-article").GridKeyArticle({}), i.find(".com-video-player").VideoPlayer({}), n++, 3 == n && (e = $.fn.utils.getComponentInstance(".com-loader"), e.setStatus("showmore"))
					}
				})
			})
		}).call(e, i(1), i(24))
	},
	51: function (t, e, i) {
		(function (t) {
			"use strict";
			i(52), i(53),
				function ($, e, n, o) {
					var s = function (t, e) {
						this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
					};
					s.prototype = {
						init: function () {
							var t = this,
								i = t.el;
							return t.initQRcode(), t.bindEvents(), e.COMS = e.COMS || [], i.attr("data-initialized", "true"), i.attr("data-guid", e.COMS.length), e.COMS.push(t), t
						},
						bindEvents: function () {
							var n = this,
								o = n.el;
							o.on("click", ".ribbon .user .text, .ribbon .user .avatar", 
							// function (t, e) {
							// 	$.fn.utils.isLogined() || (t.preventDefault(), i.e(1, function (t) {
							// 		var i = [t(54), t(64)];
							// 		(function (t) {
							// 			$(".com-devise-popup").trigger("RelatedComments::sendHref", e), $(".com-devise-popup").DevisePopup(), $.fn.utils.getComponentInstance(".com-devise-popup").hidePopup(), setTimeout(function () {
							// 				$.fn.utils.getComponentInstance(".com-devise-popup").showPopup()
							// 			}, 300)
							// 		}).apply(null, i)
							// 	}))
							// }
							), o.on("click", ".section-center .dropdown", 
							// function (t) {
							// 	t.preventDefault();
							// 	var e = $(t.currentTarget),
							// 		i = o.find(".page-header-ft"),
							// 		n = e.parents(".section-center"),
							// 		s = o.find(".arrow");
							// 	n.toggleClass("unfold"), i.toggleClass("hidden"), s.hasClass("toUp") ? s.removeClass("toUp").addClass("toDown") : s.removeClass("toDown").addClass("toUp")
							// }
							), o.on("click", ".section-right .search", 
							// function (t) {
							// 	t.preventDefault();
							// 	$(t.currentTarget);
							// 	i.e(1, function (t) {
							// 		var e = [t(54), t(64)];
							// 		(function (t) {
							// 			$(".com-search-popup").SearchPopup(), $.fn.utils.getComponentInstance(o.find(".com-search-popup")).hidePopup(), setTimeout(function () {
							// 				$.fn.utils.getComponentInstance(o.find(".com-search-popup")).showPopup()
							// 			}, 300)
							// 		}).apply(null, e)
							// 	})
							// }
							), o.on("PageHeader::login", function (t, e) {
								o.find(".ribbon .user .text, .ribbon .user .avatar").trigger("click", e)
							});
							var s = !1;
							$(e).on("scroll", t.throttle(function (t) {
								var i = $(e).scrollTop();
								!s && i > 30 ? (o.addClass("collapse"), s = !0) : s && i <= 30 && (o.removeClass("collapse"), s = !1), o.find(".page-header-bd .section-center").removeClass("unfold"), o.find(".page-header-bd .item .arrow").addClass("toDown").removeClass("toUp"), o.find(".page-header-ft").addClass("hidden")
							}, 300))
						},
						updateLoginInfo: function () {
							var t, i, o = this,
								s = o.el,
								a = s.find(".section-right .user");
							e.innerWidth ? t = e.innerWidth : n.body && n.body.clientWidth && (t = e.body.clientWidth), e.innerHeight ? i = e.innerHeight : n.body && n.body.clientHeight && (i = e.body.clientHeight);
							var r = e.location.href,
								l = new RegExp("special_columns"),
								d = l.test(r);
							$.ajax({
								url: "/get_user_and_radar.json",
								type: "GET",
								dataType: "json",
								data: {
									winWidth: screen.width,
									winHeight: screen.height,
									subscribe: d
								},
								success: function (t) {
									var e = $.fn.utils.getComponentInstance(".com-grid-login"),
										i = $.fn.utils.getComponentInstance(".com-avatar-banner"),
										n = $.fn.utils.getComponentInstance(".com-page-footer"),
										o = $.fn.utils.getComponentInstance(".com-related-comments"),
										r = $.fn.utils.getComponentInstance(".com-recommend-articles"),
										l = $.fn.utils.getComponentInstance(".com-article-detail"),
										d = $.fn.utils.getComponentInstance(".com-tot-information"),
										c = $.fn.utils.getComponentInstance(".com-tot-result"),
										h = $.fn.utils.getComponentInstance(".com-choice-result");
									if (s.trigger("Subscribe::Infor", {
											results: t
										}), t && t.status) {
										var p = t.data;
										s.attr("data-isLogined", !0), s.attr("data-userId", p.id), a.find(".avatar img").attr("src", p.face), a.find(".avatar").attr("href", "/users/center"), a.find(".text").attr("href", "/users/center").text(p.name), a.find(".logout").removeClass("hidden"), e && (e.updateLoginInfo(p), e.renderRadar(p.radar)), i && (i.updateLoginInfo(p), i.renderRadar(p.radar)), n && n.updateLoginInfo(p), r && r.setCuriositiesData(p.radar), o && o.setAvatar(p), l && (l.resetVideo(!0), l.resetOldVideo(!0)), d && d.setAvatar(p), c && c.setUserInfo(p), h && h.setUserInfo(p)
									} else e && e.renderRadar(), r && r.setCuriositiesData(!0), l && (l.resetVideo(!1), l.resetOldVideo(!1)), c && c.setUserInfo(!1), h && h.setUserInfo(!1)
								},
								error: function (t) {},
								complete: function (t, e) {
									$.fn.utils.readStatistic(s.attr("data-userId"), "web")
								}
							})
						},
						initQRcode: function () {
							var t = this,
								e = t.el,
								i = $("html").hasClass("canvas");
							e.find(".weixin-qrcode .qrcode").qrcode({
								render: i ? "canvas" : "table",
								text: e.find(".weixin-qrcode").attr("data-text"),
								width: 120,
								height: 120
							})
						}
					}, $.fn.PageHeader = function (t) {
						var e;
						return this.each(function () {
							var i = $(this);
							"true" != i.attr("data-initialized") && (e = new s(i, t), e.init())
						})
					}
				}(window.jQuery || window.Zepto, window, document)
		}).call(e, i(10))
	},
	53: 7,
	66: function (t, e, i) {
		(function ($) {
			"use strict";

			function t(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			var e = function () {
				function t(t, e) {
					for (var i = 0; i < e.length; i++) {
						var n = e[i];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
					}
				}
				return function (e, i, n) {
					return i && t(e.prototype, i), n && t(e, n), e
				}
			}();
			i(67);
			var n = function () {
				function i(e, n) {
					t(this, i), this.el = e, this.defaults = {}, this.options = $.extend({}, this.defaults, n)
				}
				return e(i, [{
					key: "init",
					value: function () {
						var t = this,
							e = t.el;
						return t.initQRcode(), t.bindEvents(), window.COMS = window.COMS || [], e.attr("data-initialized", "true"), e.attr("data-guid", window.COMS.length), window.COMS.push(t), t
					}
				}, {
					key: "bindEvents",
					value: function () {
						var t = this;
						t.el
					}
				}, {
					key: "initQRcode",
					value: function () {
						var t = this,
							e = t.el,
							i = $("html").hasClass("canvas");
						e.find(".weixin-qrcode .qrcode").qrcode({
							render: i ? "canvas" : "table",
							text: e.find(".weixin-qrcode").attr("data-text"),
							width: 120,
							height: 120
						}), e.on("click", ".ribbon .user", function (t) {
							$.fn.utils.isLogined() || (t.preventDefault(), e.trigger("PageFooter::login"))
						})
					}
				}, {
					key: "updateLoginInfo",
					value: function (t) {
						var e = this,
							i = e.el,
							n = i.find(".ribbon .user");
						t && (n.text(t.name), n.attr("href", "/users/center"))
					}
				}]), i
			}();
			! function ($, t, e, i) {
				$.fn.PageFooter = function (t) {
					var e;
					return this.each(function () {
						var i = $(this);
						"true" != i.attr("data-initialized") && (e = new n(i, t), e.init())
					})
				}
			}(window.jQuery || window.Zepto, window, document)
		}).call(e, i(1))
	},
	67: 7,
	71: function (t, e, i) {
		(function (t) {
			"use strict";
			i(72), i(73),
				function ($, e, i, n) {
					var o, s = function (t, e) {
						this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
					};
					s.prototype = {
						init: function () {
							var t = this,
								i = t.el;
							return t.bindEvents(), e.COMS = e.COMS || [], i.attr("data-initialized", "true"), i.attr("data-guid", e.COMS.length), e.COMS.push(t), t
						},
						bindEvents: function () {
							var t = this,
								e = t.el;
							e.on("click", ".grid-login-bd .avatar, .grid-login-ft .btn", function (t) {
								$.fn.utils.isLogined() || (t.preventDefault(), e.trigger("GridLogin::login"))
							})
						},
						renderRadar: function (e) {
							var i, n, s, a = this,
								r = a.el,
								l = (r.find(".tip"), r.find(".radar")),
								d = {
									labels: ["颜\t\t\t\t控", "技术宅", "商业家", "二次元", "开脑洞"],
									datasets: [{
										fillColor: "rgba(255,255,255,0.05)",
										strokeColor: "transparent",
										pointColor: "rgba(255,200,31,1)",
										pointStrokeColor: "rgba(255,200,31,0.15)",
										data: [100, 100, 100, 100, 100]
									}, {
										fillColor: "rgba(255,255,255,0.05)",
										strokeColor: "transparent",
										pointColor: "transparent",
										pointStrokeColor: "transparent",
										data: [90, 90, 90, 90, 90]
									}, {
										fillColor: "rgba(255,200,31,0.05)",
										strokeColor: "rgba(255,200,31,1)",
										strokeWidth: 6,
										pointColor: "transparent",
										pointStrokeColor: "transparent",
										data: [70, 70, 70, 70, 70]
									}]
								};
							if (l[0] && l[0].getContext && (i = l[0].getContext("2d"))) {
								if (e && e.length)
									for (d.labels = [], d.datasets[2].data = [], n = 0, s = e.length; n < s; n++) "颜控" == e[n].title && (e[n].title = "颜\t\t\t\t控"), d.labels.push(e[n].title), d.datasets[2].data.push(100 * e[n].value);
								o = new t(i).Radar(d, {
									showTooltips: !1,
									scaleShowLine: !1,
									angleShowLineOut: !1,
									pointLabelFontColor: "#ffffff",
									datasetStrokeWidth: 1,
									pointDotRadius: 2,
									pointDotStrokeWidth: 5
								})
							}
						},
						updateLoginInfo: function (t) {
							var e, i, n, o = this,
								s = o.el,
								a = s.find(".grid-login-bd"),
								r = s.find(".grid-login-ft"),
								l = 1;
							if (t) {
								for (e = 0, i = t.radar.length; e < i; e++) t.radar[e].value < l && (l = t.radar[e].value, n = t.radar[e]);
								a.find(".avatar img").attr("src", t.face), a.find(".avatar").attr("href", "/users/center"), r.find(".btn").text(t.name).removeClass("ripple"), r.find(".btn").attr("href", "/users/center"), r.find(".tip").html('你的<a rel="nofollow" href="/radars/' + n.id + '.html">' + n.title + "</a>的好奇心还不够哦")
							}
						}
					}, $.fn.GridLogin = function (t) {
						var e;
						return this.each(function () {
							var i = $(this);
							"true" != i.attr("data-initialized") && (e = new s(i, t), e.init())
						})
					}
				}(window.jQuery || window.Zepto, window, document)
		}).call(e, i(72))
	},
	72: function (t, e, i) {
		var n;
		/*!
		 * Chart.js
		 * http://chartjs.org/
		 * Version: 1.0.2
		 *
		 * Copyright 2015 Nick Downie
		 * Released under the MIT license
		 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
		 */
		(function () {
			"use strict";
			var o = this,
				s = o.Chart,
				a = function (t) {
					this.canvas = t.canvas, this.ctx = t;
					var e = function (t, e) {
							return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
						},
						i = this.width = e(t.canvas, "Width"),
						n = this.height = e(t.canvas, "Height");
					t.canvas.width = i, t.canvas.height = n;
					var i = this.width = t.canvas.width,
						n = this.height = t.canvas.height;
					return this.aspectRatio = this.width / this.height, r.retinaScale(this), this
				};
			a.defaults = {
				global: {
					animation: !0,
					animationSteps: 60,
					animationEasing: "easeOutQuart",
					showScale: !0,
					scaleOverride: !1,
					scaleSteps: null,
					scaleStepWidth: null,
					scaleStartValue: null,
					scaleLineColor: "rgba(0,0,0,.1)",
					scaleLineWidth: 1,
					scaleShowLabels: !0,
					scaleLabel: "<%=value%>",
					scaleIntegersOnly: !0,
					scaleBeginAtZero: !1,
					scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					scaleFontSize: 12,
					scaleFontStyle: "normal",
					scaleFontColor: "#666",
					responsive: !1,
					maintainAspectRatio: !0,
					showTooltips: !0,
					customTooltips: !1,
					tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
					tooltipFillColor: "rgba(0,0,0,0.8)",
					tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					tooltipFontSize: 14,
					tooltipFontStyle: "normal",
					tooltipFontColor: "#fff",
					tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
					tooltipTitleFontSize: 14,
					tooltipTitleFontStyle: "bold",
					tooltipTitleFontColor: "#fff",
					tooltipYPadding: 6,
					tooltipXPadding: 6,
					tooltipCaretSize: 8,
					tooltipCornerRadius: 6,
					tooltipXOffset: 10,
					tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
					multiTooltipTemplate: "<%= value %>",
					multiTooltipKeyBackground: "#fff",
					onAnimationProgress: function () {},
					onAnimationComplete: function () {}
				}
			}, a.types = {};
			var r = a.helpers = {},
				l = r.each = function (t, e, i) {
					var n = Array.prototype.slice.call(arguments, 3);
					if (t)
						if (t.length === +t.length) {
							var o;
							for (o = 0; o < t.length; o++) e.apply(i, [t[o], o].concat(n))
						} else
							for (var s in t) e.apply(i, [t[s], s].concat(n))
				},
				d = r.clone = function (t) {
					var e = {};
					return l(t, function (i, n) {
						t.hasOwnProperty(n) && (e[n] = i)
					}), e
				},
				c = r.extend = function (t) {
					return l(Array.prototype.slice.call(arguments, 1), function (e) {
						l(e, function (i, n) {
							e.hasOwnProperty(n) && (t[n] = i)
						})
					}), t
				},
				h = r.merge = function (t, e) {
					var i = Array.prototype.slice.call(arguments, 0);
					return i.unshift({}), c.apply(null, i)
				},
				p = r.indexOf = function (t, e) {
					if (Array.prototype.indexOf) return t.indexOf(e);
					for (var i = 0; i < t.length; i++)
						if (t[i] === e) return i;
					return -1
				},
				u = (r.where = function (t, e) {
					var i = [];
					return r.each(t, function (t) {
						e(t) && i.push(t)
					}), i
				}, r.findNextWhere = function (t, e, i) {
					i || (i = -1);
					for (var n = i + 1; n < t.length; n++) {
						var o = t[n];
						if (e(o)) return o
					}
				}, r.findPreviousWhere = function (t, e, i) {
					i || (i = t.length);
					for (var n = i - 1; n >= 0; n--) {
						var o = t[n];
						if (e(o)) return o
					}
				}, r.inherits = function (t) {
					var e = this,
						i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
							return e.apply(this, arguments)
						},
						n = function () {
							this.constructor = i
						};
					return n.prototype = e.prototype, i.prototype = new n, i.extend = u, t && c(i.prototype, t), i.__super__ = e.prototype, i
				}),
				f = r.noop = function () {},
				g = r.uid = function () {
					var t = 0;
					return function () {
						return "chart-" + t++
					}
				}(),
				v = r.warn = function (t) {
					window.console && "function" == typeof window.console.warn && console.warn(t)
				},
				m = r.amd = i(16),
				y = r.isNumber = function (t) {
					return !isNaN(parseFloat(t)) && isFinite(t)
				},
				w = r.max = function (t) {
					return Math.max.apply(Math, t)
				},
				b = r.min = function (t) {
					return Math.min.apply(Math, t)
				},
				S = (r.cap = function (t, e, i) {
					if (y(e)) {
						if (t > e) return e
					} else if (y(i) && t < i) return i;
					return t
				}, r.getDecimalPlaces = function (t) {
					return t % 1 !== 0 && y(t) ? t.toString().split(".")[1].length : 0
				}),
				k = r.radians = function (t) {
					return t * (Math.PI / 180)
				},
				x = (r.getAngleFromPoint = function (t, e) {
					var i = e.x - t.x,
						n = e.y - t.y,
						o = Math.sqrt(i * i + n * n),
						s = 2 * Math.PI + Math.atan2(n, i);
					return i < 0 && n < 0 && (s += 2 * Math.PI), {
						angle: s,
						distance: o
					}
				}, r.aliasPixel = function (t) {
					return t % 2 === 0 ? 0 : .5
				}),
				C = (r.splineCurve = function (t, e, i, n) {
					var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
						s = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
						a = n * o / (o + s),
						r = n * s / (o + s);
					return {
						inner: {
							x: e.x - a * (i.x - t.x),
							y: e.y - a * (i.y - t.y)
						},
						outer: {
							x: e.x + r * (i.x - t.x),
							y: e.y + r * (i.y - t.y)
						}
					}
				}, r.calculateOrderOfMagnitude = function (t) {
					return Math.floor(Math.log(t) / Math.LN10)
				}),
				T = (r.calculateScaleRange = function (t, e, i, n, o) {
					var s = 2,
						a = Math.floor(e / (1.5 * i)),
						r = s >= a,
						l = w(t),
						d = b(t);
					l === d && (l += .5, d >= .5 && !n ? d -= .5 : l += .5);
					for (var c = Math.abs(l - d), h = C(c), p = Math.ceil(l / (1 * Math.pow(10, h))) * Math.pow(10, h), u = n ? 0 : Math.floor(d / (1 * Math.pow(10, h))) * Math.pow(10, h), f = p - u, g = Math.pow(10, h), v = Math.round(f / g);
						(v > a || 2 * v < a) && !r;)
						if (v > a) g *= 2, v = Math.round(f / g), v % 1 !== 0 && (r = !0);
						else if (o && h >= 0) {
						if (g / 2 % 1 !== 0) break;
						g /= 2, v = Math.round(f / g)
					} else g /= 2, v = Math.round(f / g);
					return r && (v = s, g = f / v), {
						steps: v,
						stepValue: g,
						min: u,
						max: u + v * g
					}
				}, r.template = function (t, e) {
					function i(t, e) {
						var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n[t] = n[t];
						return e ? i(e) : i
					}
					if (t instanceof Function) return t(e);
					var n = {};
					return i(t, e)
				}),
				_ = (r.generateLabels = function (t, e, i, n) {
					var o = new Array(e);
					return labelTemplateString && l(o, function (e, s) {
						o[s] = T(t, {
							value: i + n * (s + 1)
						})
					}), o
				}, r.easingEffects = {
					linear: function (t) {
						return t
					},
					easeInQuad: function (t) {
						return t * t
					},
					easeOutQuad: function (t) {
						return -1 * t * (t - 2)
					},
					easeInOutQuad: function (t) {
						return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
					},
					easeInCubic: function (t) {
						return t * t * t
					},
					easeOutCubic: function (t) {
						return 1 * ((t = t / 1 - 1) * t * t + 1)
					},
					easeInOutCubic: function (t) {
						return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
					},
					easeInQuart: function (t) {
						return t * t * t * t
					},
					easeOutQuart: function (t) {
						return -1 * ((t = t / 1 - 1) * t * t * t - 1)
					},
					easeInOutQuart: function (t) {
						return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
					},
					easeInQuint: function (t) {
						return 1 * (t /= 1) * t * t * t * t
					},
					easeOutQuint: function (t) {
						return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
					},
					easeInOutQuint: function (t) {
						return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
					},
					easeInSine: function (t) {
						return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
					},
					easeOutSine: function (t) {
						return 1 * Math.sin(t / 1 * (Math.PI / 2))
					},
					easeInOutSine: function (t) {
						return -.5 * (Math.cos(Math.PI * t / 1) - 1)
					},
					easeInExpo: function (t) {
						return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
					},
					easeOutExpo: function (t) {
						return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
					},
					easeInOutExpo: function (t) {
						return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
					},
					easeInCirc: function (t) {
						return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
					},
					easeOutCirc: function (t) {
						return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
					},
					easeInOutCirc: function (t) {
						return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
					},
					easeInElastic: function (t) {
						var e = 1.70158,
							i = 0,
							n = 1;
						return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
					},
					easeOutElastic: function (t) {
						var e = 1.70158,
							i = 0,
							n = 1;
						return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
					},
					easeInOutElastic: function (t) {
						var e = 1.70158,
							i = 0,
							n = 1;
						return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
					},
					easeInBack: function (t) {
						var e = 1.70158;
						return 1 * (t /= 1) * t * ((e + 1) * t - e)
					},
					easeOutBack: function (t) {
						var e = 1.70158;
						return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
					},
					easeInOutBack: function (t) {
						var e = 1.70158;
						return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
					},
					easeInBounce: function (t) {
						return 1 - _.easeOutBounce(1 - t)
					},
					easeOutBounce: function (t) {
						return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
					},
					easeInOutBounce: function (t) {
						return t < .5 ? .5 * _.easeInBounce(2 * t) : .5 * _.easeOutBounce(2 * t - 1) + .5
					}
				}),
				L = r.requestAnimFrame = function () {
					return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
						return window.setTimeout(t, 1e3 / 60)
					}
				}(),
				P = r.cancelAnimFrame = function () {
					return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (t) {
						return window.clearTimeout(t, 1e3 / 60)
					}
				}(),
				E = (r.animationLoop = function (t, e, i, n, o, s) {
					var a = 0,
						r = _[i] || _.linear,
						l = function () {
							a++;
							var i = a / e,
								d = r(i);
							t.call(s, d, i, a), n.call(s, d, i), a < e ? s.animationFrame = L(l) : o.apply(s)
						};
					L(l)
				}, r.getRelativePosition = function (t) {
					var e, i, n = t.originalEvent || t,
						o = t.currentTarget || t.srcElement,
						s = o.getBoundingClientRect();
					return n.touches ? (e = n.touches[0].clientX - s.left, i = n.touches[0].clientY - s.top) : (e = n.clientX - s.left, i = n.clientY - s.top), {
						x: e,
						y: i
					}
				}, r.addEvent = function (t, e, i) {
					t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
				}),
				z = r.removeEvent = function (t, e, i) {
					t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = f
				},
				M = (r.bindEvents = function (t, e, i) {
					t.events || (t.events = {}), l(e, function (e) {
						t.events[e] = function () {
							i.apply(t, arguments)
						}, E(t.chart.canvas, e, t.events[e])
					})
				}, r.unbindEvents = function (t, e) {
					l(e, function (e, i) {
						z(t.chart.canvas, i, e)
					})
				}),
				R = r.getMaximumWidth = function (t) {
					var e = t.parentNode;
					return e.clientWidth
				},
				A = r.getMaximumHeight = function (t) {
					var e = t.parentNode;
					return e.clientHeight
				},
				O = (r.getMaximumSize = r.getMaximumWidth, r.retinaScale = function (t) {
					var e = t.ctx,
						i = t.canvas.width,
						n = t.canvas.height;
					window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
				}),
				I = r.clear = function (t) {
					t.ctx.clearRect(0, 0, t.width, t.height)
				},
				F = r.fontString = function (t, e, i) {
					return e + " " + t + "px " + i
				},
				W = r.longestText = function (t, e, i) {
					t.font = e;
					var n = 0;
					return l(i, function (e) {
						var i = t.measureText(e).width;
						n = i > n ? i : n
					}), n
				},
				D = r.drawRoundedRectangle = function (t, e, i, n, o, s) {
					t.beginPath(), t.moveTo(e + s, i), t.lineTo(e + n - s, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + o - s), t.quadraticCurveTo(e + n, i + o, e + n - s, i + o), t.lineTo(e + s, i + o), t.quadraticCurveTo(e, i + o, e, i + o - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + s, i), t.closePath()
				};
			a.instances = {}, a.Type = function (t, e, i) {
				this.options = e, this.chart = i, this.id = g(), a.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
			}, c(a.Type.prototype, {
				initialize: function () {
					return this
				},
				clear: function () {
					return I(this.chart), this
				},
				stop: function () {
					return P(this.animationFrame), this
				},
				resize: function (t) {
					this.stop();
					var e = this.chart.canvas,
						i = R(this.chart.canvas),
						n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : A(this.chart.canvas);
					return e.width = this.chart.width = i, e.height = this.chart.height = n, O(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
				},
				reflow: f,
				render: function (t) {
					return t && this.reflow(), this.options.animation && !t ? r.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
				},
				generateLegend: function () {
					return T(this.options.legendTemplate, this)
				},
				destroy: function () {
					this.clear(), M(this, this.events);
					var t = this.chart.canvas;
					t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), delete a.instances[this.id]
				},
				showTooltip: function (t, e) {
					"undefined" == typeof this.activeElements && (this.activeElements = []);
					var i = function (t) {
						var e = !1;
						return t.length !== this.activeElements.length ? e = !0 : (l(t, function (t, i) {
							t !== this.activeElements[i] && (e = !0)
						}, this), e)
					}.call(this, t);
					if (i || e) {
						if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
							if (this.datasets && this.datasets.length > 1) {
								for (var n, o, s = this.datasets.length - 1; s >= 0 && (n = this.datasets[s].points || this.datasets[s].bars || this.datasets[s].segments, o = p(n, t[0]), o === -1); s--);
								var d = [],
									c = [],
									h = function (t) {
										var e, i, n, s, a, l = [],
											h = [],
											p = [];
										return r.each(this.datasets, function (t) {
											e = t.points || t.bars || t.segments, e[o] && e[o].hasValue() && l.push(e[o])
										}), r.each(l, function (t) {
											h.push(t.x), p.push(t.y), d.push(r.template(this.options.multiTooltipTemplate, t)), c.push({
												fill: t._saved.fillColor || t.fillColor,
												stroke: t._saved.strokeColor || t.strokeColor
											})
										}, this), a = b(p), n = w(p), s = b(h), i = w(h), {
											x: s > this.chart.width / 2 ? s : i,
											y: (a + n) / 2
										}
									}.call(this, o);
								new a.MultiTooltip({
									x: h.x,
									y: h.y,
									xPadding: this.options.tooltipXPadding,
									yPadding: this.options.tooltipYPadding,
									xOffset: this.options.tooltipXOffset,
									fillColor: this.options.tooltipFillColor,
									textColor: this.options.tooltipFontColor,
									fontFamily: this.options.tooltipFontFamily,
									fontStyle: this.options.tooltipFontStyle,
									fontSize: this.options.tooltipFontSize,
									titleTextColor: this.options.tooltipTitleFontColor,
									titleFontFamily: this.options.tooltipTitleFontFamily,
									titleFontStyle: this.options.tooltipTitleFontStyle,
									titleFontSize: this.options.tooltipTitleFontSize,
									cornerRadius: this.options.tooltipCornerRadius,
									labels: d,
									legendColors: c,
									legendColorBackground: this.options.multiTooltipKeyBackground,
									title: t[0].label,
									chart: this.chart,
									ctx: this.chart.ctx,
									custom: this.options.customTooltips
								}).draw()
							} else l(t, function (t) {
								var e = t.tooltipPosition();
								new a.Tooltip({
									x: Math.round(e.x),
									y: Math.round(e.y),
									xPadding: this.options.tooltipXPadding,
									yPadding: this.options.tooltipYPadding,
									fillColor: this.options.tooltipFillColor,
									textColor: this.options.tooltipFontColor,
									fontFamily: this.options.tooltipFontFamily,
									fontStyle: this.options.tooltipFontStyle,
									fontSize: this.options.tooltipFontSize,
									caretHeight: this.options.tooltipCaretSize,
									cornerRadius: this.options.tooltipCornerRadius,
									text: T(this.options.tooltipTemplate, t),
									chart: this.chart,
									custom: this.options.customTooltips
								}).draw()
							}, this);
						return this
					}
				},
				toBase64Image: function () {
					return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
				}
			}), a.Type.extend = function (t) {
				var e = this,
					i = function () {
						return e.apply(this, arguments)
					};
				if (i.prototype = d(e.prototype), c(i.prototype, t), i.extend = a.Type.extend, t.name || e.prototype.name) {
					var n = t.name || e.prototype.name,
						o = a.defaults[e.prototype.name] ? d(a.defaults[e.prototype.name]) : {};
					a.defaults[n] = c(o, t.defaults), a.types[n] = i, a.prototype[n] = function (t, e) {
						var o = h(a.defaults.global, a.defaults[n], e || {});
						return new i(t, o, this)
					}
				} else v("Name not provided for this chart, so it hasn't been registered");
				return e
			}, a.Element = function (t) {
				c(this, t), this.initialize.apply(this, arguments), this.save()
			}, c(a.Element.prototype, {
				initialize: function () {},
				restore: function (t) {
					return t ? l(t, function (t) {
						this[t] = this._saved[t]
					}, this) : c(this, this._saved), this
				},
				save: function () {
					return this._saved = d(this), delete this._saved._saved, this
				},
				update: function (t) {
					return l(t, function (t, e) {
						this._saved[e] = this[e], this[e] = t
					}, this), this
				},
				transition: function (t, e) {
					return l(t, function (t, i) {
						this[i] = (t - this._saved[i]) * e + this._saved[i]
					}, this), this
				},
				tooltipPosition: function () {
					return {
						x: this.x,
						y: this.y
					}
				},
				hasValue: function () {
					return y(this.value)
				}
			}), a.Element.extend = u, a.Point = a.Element.extend({
				display: !0,
				inRange: function (t, e) {
					var i = this.hitDetectionRadius + this.radius;
					return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
				},
				draw: function () {
					if (this.display) {
						var t = this.ctx;
						t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
					}
				}
			}), a.Arc = a.Element.extend({
				inRange: function (t, e) {
					var i = r.getAngleFromPoint(this, {
							x: t,
							y: e
						}),
						n = i.angle >= this.startAngle && i.angle <= this.endAngle,
						o = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
					return n && o
				},
				tooltipPosition: function () {
					var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
						e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
					return {
						x: this.x + Math.cos(t) * e,
						y: this.y + Math.sin(t) * e
					}
				},
				draw: function (t) {
					var e = this.ctx;
					e.beginPath(), e.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), e.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke()
				}
			}), a.Rectangle = a.Element.extend({
				draw: function () {
					var t = this.ctx,
						e = this.width / 2,
						i = this.x - e,
						n = this.x + e,
						o = this.base - (this.base - this.y),
						s = this.strokeWidth / 2;
					this.showStroke && (i += s, n -= s, o += s), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, o), t.lineTo(n, o), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke()
				},
				height: function () {
					return this.base - this.y
				},
				inRange: function (t, e) {
					return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
				}
			}), a.Tooltip = a.Element.extend({
				draw: function () {
					var t = this.chart.ctx;
					t.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
					var e = this.caretPadding = 2,
						i = t.measureText(this.text).width + 2 * this.xPadding,
						n = this.fontSize + 2 * this.yPadding,
						o = n + this.caretHeight + e;
					this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - o < 0 && (this.yAlign = "below");
					var s = this.x - i / 2,
						a = this.y - o;
					if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
					else {
						switch (this.yAlign) {
							case "above":
								t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
								break;
							case "below":
								a = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
						}
						switch (this.xAlign) {
							case "left":
								s = this.x - i + (this.cornerRadius + this.caretHeight);
								break;
							case "right":
								s = this.x - (this.cornerRadius + this.caretHeight)
						}
						D(t, s, a, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, s + i / 2, a + n / 2)
					}
				}
			}), a.MultiTooltip = a.Element.extend({
				initialize: function () {
					this.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = F(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
					var t = this.ctx.measureText(this.title).width,
						e = W(this.ctx, this.font, this.labels) + this.fontSize + 3,
						i = w([e, t]);
					this.width = i + 2 * this.xPadding;
					var n = this.height / 2;
					this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
				},
				getLineHeight: function (t) {
					var e = this.y - this.height / 2 + this.yPadding,
						i = t - 1;
					return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + 1.5 * this.titleFontSize
				},
				draw: function () {
					if (this.custom) this.custom(this);
					else {
						D(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
						var t = this.ctx;
						t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, r.each(this.labels, function (e, i) {
							t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
						}, this)
					}
				}
			}), a.Scale = a.Element.extend({
				initialize: function () {
					this.fit()
				},
				buildYLabels: function () {
					this.yLabels = [];
					for (var t = S(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(T(this.templateString, {
						value: (this.min + e * this.stepValue).toFixed(t)
					}));
					this.yLabelWidth = this.display && this.showLabels ? W(this.ctx, this.font, this.yLabels) : 0
				},
				addXLabel: function (t) {
					this.xLabels.push(t), this.valuesCount++, this.fit()
				},
				removeXLabel: function () {
					this.xLabels.shift(), this.valuesCount--, this.fit()
				},
				fit: function () {
					this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
					var t, e = this.endPoint - this.startPoint;
					for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
				},
				calculateXLabelRotation: function () {
					this.ctx.font = this.font;
					var t, e, i = this.ctx.measureText(this.xLabels[0]).width,
						n = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
					if (this.xScalePaddingRight = n / 2 + 3, this.xScalePaddingLeft = i / 2 > this.yLabelWidth + 10 ? i / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
						var o, s = W(this.ctx, this.font, this.xLabels);
						this.xLabelWidth = s;
						for (var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > a && 0 === this.xLabelRotation || this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) o = Math.cos(k(this.xLabelRotation)), t = o * i, e = o * n, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = o * s;
						this.xLabelRotation > 0 && (this.endPoint -= Math.sin(k(this.xLabelRotation)) * s + 3)
					} else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
				},
				calculateYRange: f,
				drawingArea: function () {
					return this.startPoint - this.endPoint
				},
				calculateY: function (t) {
					var e = this.drawingArea() / (this.min - this.max);
					return this.endPoint - e * (t - this.min)
				},
				calculateX: function (t) {
					var e = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
						i = e / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
						n = i * t + this.xScalePaddingLeft;
					return this.offsetGridLines && (n += i / 2), Math.round(n)
				},
				update: function (t) {
					r.extend(this, t), this.fit()
				},
				draw: function () {
					var t = this.ctx,
						e = (this.endPoint - this.startPoint) / this.steps,
						i = Math.round(this.xScalePaddingLeft);
					this.display && (t.fillStyle = this.textColor, t.font = this.font, l(this.yLabels, function (n, o) {
						var s = this.endPoint - e * o,
							a = Math.round(s),
							l = this.showHorizontalLines;
						t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(n, i - 10, s), 0 !== o || l || (l = !0), l && t.beginPath(), o > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a += r.aliasPixel(t.lineWidth), l && (t.moveTo(i, a), t.lineTo(this.width, a), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, a), t.lineTo(i, a), t.stroke(), t.closePath()
					}, this), l(this.xLabels, function (e, i) {
						var n = this.calculateX(i) + x(this.lineWidth),
							o = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + x(this.lineWidth),
							s = this.xLabelRotation > 0,
							a = this.showVerticalLines;
						0 !== i || a || (a = !0), a && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a && (t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(o, this.endPoint), t.lineTo(o, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, s ? this.endPoint + 12 : this.endPoint + 8), t.rotate(k(this.xLabelRotation) * -1), t.font = this.font, t.textAlign = s ? "right" : "center", t.textBaseline = s ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
					}, this))
				}
			}), a.RadialScale = a.Element.extend({
				initialize: function () {
					this.size = b([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
				},
				calculateCenterOffset: function (t) {
					var e = this.drawingArea / (this.max - this.min);
					return (t - this.min) * e
				},
				update: function () {
					this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
				},
				buildYLabels: function () {
					this.yLabels = [];
					for (var t = S(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(T(this.templateString, {
						value: (this.min + e * this.stepValue).toFixed(t)
					}))
				},
				getCircumference: function () {
					return 2 * Math.PI / this.valuesCount
				},
				setScaleSize: function () {
					var t, e, i, n, o, s, a, r, l, d, c, h, p = b([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
						u = this.width,
						f = 0;
					for (this.ctx.font = F(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, p), i = this.ctx.measureText(T(this.templateString, {
						value: this.labels[e]
					})).width + 5, 0 === e || e === this.valuesCount / 2 ? (n = i / 2, t.x + n > u && (u = t.x + n, o = e), t.x - n < f && (f = t.x - n, a = e)) : e < this.valuesCount / 2 ? t.x + i > u && (u = t.x + i, o = e) : e > this.valuesCount / 2 && t.x - i < f && (f = t.x - i, a = e);
					l = f, d = Math.ceil(u - this.width), s = this.getIndexAngle(o), r = this.getIndexAngle(a), c = d / Math.sin(s + Math.PI / 2), h = l / Math.sin(r + Math.PI / 2), c = y(c) ? c : 0, h = y(h) ? h : 0, this.drawingArea = p - (h + c) / 2, this.setCenterPoint(h, c)
				},
				setCenterPoint: function (t, e) {
					var i = this.width - e - this.drawingArea,
						n = t + this.drawingArea;
					this.xCenter = (n + i) / 2, this.yCenter = this.height / 2
				},
				getIndexAngle: function (t) {
					var e = 2 * Math.PI / this.valuesCount;
					return t * e - Math.PI / 2
				},
				getPointPosition: function (t, e) {
					var i = this.getIndexAngle(t);
					return {
						x: Math.cos(i) * e + this.xCenter,
						y: Math.sin(i) * e + this.yCenter
					}
				},
				draw: function () {
					if (this.display) {
						var t = this.ctx;
						if (l(this.yLabels, function (e, i) {
								if (i > 0) {
									var n, o = i * (this.drawingArea / this.steps),
										s = this.yCenter - o;
									if (this.lineWidth > 0)
										if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI), t.closePath(), t.stroke();
										else {
											t.beginPath();
											for (var a = 0; a < this.valuesCount; a++) n = this.getPointPosition(a, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === a ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y);
											t.closePath(), t.stroke()
										} if (this.showLabels) {
										if (t.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
											var r = t.measureText(e).width;
											t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, s - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
										}
										t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, s)
									}
								}
							}, this), !this.lineArc) {
							t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
							for (var e = this.valuesCount - 1; e >= 0; e--) {
								if (this.angleLineWidth > 0) {
									var i = this.getPointPosition(e, this.calculateCenterOffset(this.max));
									t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(i.x, i.y), t.stroke(), t.closePath()
								}
								var n = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
								t.font = F(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
								var o = this.labels.length,
									s = this.labels.length / 2,
									a = s / 2,
									r = e < a || e > o - a,
									d = e === a || e === o - a;
								0 === e ? t.textAlign = "center" : e === s ? t.textAlign = "center" : e < s ? t.textAlign = "left" : t.textAlign = "right", d ? t.textBaseline = "middle" : r ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.labels[e], n.x, n.y)
							}
						}
					}
				}
			}), r.addEvent(window, "resize", function () {
				var t;
				return function () {
					clearTimeout(t), t = setTimeout(function () {
						l(a.instances, function (t) {
							t.options.responsive && t.resize(t.render, !0)
						})
					}, 50)
				}
			}()), m ? (n = function () {
				return a
			}.call(e, i, e, t), !(void 0 !== n && (t.exports = n))) : "object" == typeof t && t.exports && (t.exports = a), o.Chart = a, a.noConflict = function () {
				return o.Chart = s, a
			}
		}).call(this),
			function () {
				"use strict";
				var t = this,
					e = t.Chart,
					i = e.helpers,
					n = {
						scaleBeginAtZero: !0,
						scaleShowGridLines: !0,
						scaleGridLineColor: "rgba(0,0,0,.05)",
						scaleGridLineWidth: 1,
						scaleShowHorizontalLines: !0,
						scaleShowVerticalLines: !0,
						barShowStroke: !0,
						barStrokeWidth: 2,
						barValueSpacing: 5,
						barDatasetSpacing: 1,
						legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
					};
				e.Type.extend({
					name: "Bar",
					defaults: n,
					initialize: function (t) {
						var n = this.options;
						this.ScaleClass = e.Scale.extend({
							offsetGridLines: !0,
							calculateBarX: function (t, e, i) {
								var o = this.calculateBaseWidth(),
									s = this.calculateX(i) - o / 2,
									a = this.calculateBarWidth(t);
								return s + a * e + e * n.barDatasetSpacing + a / 2
							},
							calculateBaseWidth: function () {
								return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
							},
							calculateBarWidth: function (t) {
								var e = this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing;
								return e / t
							}
						}), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
							var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
							this.eachBars(function (t) {
								t.restore(["fillColor", "strokeColor"])
							}), i.each(e, function (t) {
								t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
							}), this.showTooltip(e)
						}), this.BarClass = e.Rectangle.extend({
							strokeWidth: this.options.barStrokeWidth,
							showStroke: this.options.barShowStroke,
							ctx: this.chart.ctx
						}), i.each(t.datasets, function (e, n) {
							var o = {
								label: e.label || null,
								fillColor: e.fillColor,
								strokeColor: e.strokeColor,
								bars: []
							};
							this.datasets.push(o), i.each(e.data, function (i, n) {
								o.bars.push(new this.BarClass({
									value: i,
									label: t.labels[n],
									datasetLabel: e.label,
									strokeColor: e.strokeColor,
									fillColor: e.fillColor,
									highlightFill: e.highlightFill || e.fillColor,
									highlightStroke: e.highlightStroke || e.strokeColor
								}))
							}, this)
						}, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function (t, e, n) {
							i.extend(t, {
								width: this.scale.calculateBarWidth(this.datasets.length),
								x: this.scale.calculateBarX(this.datasets.length, n, e),
								y: this.scale.endPoint
							}), t.save()
						}, this), this.render()
					},
					update: function () {
						this.scale.update(), i.each(this.activeElements, function (t) {
							t.restore(["fillColor", "strokeColor"])
						}), this.eachBars(function (t) {
							t.save()
						}), this.render()
					},
					eachBars: function (t) {
						i.each(this.datasets, function (e, n) {
							i.each(e.bars, t, this, n)
						}, this)
					},
					getBarsAtEvent: function (t) {
						for (var e, n = [], o = i.getRelativePosition(t), s = function (t) {
								n.push(t.bars[e])
							}, a = 0; a < this.datasets.length; a++)
							for (e = 0; e < this.datasets[a].bars.length; e++)
								if (this.datasets[a].bars[e].inRange(o.x, o.y)) return i.each(this.datasets, s), n;
						return n
					},
					buildScale: function (t) {
						var e = this,
							n = function () {
								var t = [];
								return e.eachBars(function (e) {
									t.push(e.value)
								}), t
							},
							o = {
								templateString: this.options.scaleLabel,
								height: this.chart.height,
								width: this.chart.width,
								ctx: this.chart.ctx,
								textColor: this.options.scaleFontColor,
								fontSize: this.options.scaleFontSize,
								fontStyle: this.options.scaleFontStyle,
								fontFamily: this.options.scaleFontFamily,
								valuesCount: t.length,
								beginAtZero: this.options.scaleBeginAtZero,
								integersOnly: this.options.scaleIntegersOnly,
								calculateYRange: function (t) {
									var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
									i.extend(this, e)
								},
								xLabels: t,
								font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
								lineWidth: this.options.scaleLineWidth,
								lineColor: this.options.scaleLineColor,
								showHorizontalLines: this.options.scaleShowHorizontalLines,
								showVerticalLines: this.options.scaleShowVerticalLines,
								gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
								gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
								padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
								showLabels: this.options.scaleShowLabels,
								display: this.options.showScale
							};
						this.options.scaleOverride && i.extend(o, {
							calculateYRange: i.noop,
							steps: this.options.scaleSteps,
							stepValue: this.options.scaleStepWidth,
							min: this.options.scaleStartValue,
							max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
						}), this.scale = new this.ScaleClass(o)
					},
					addData: function (t, e) {
						i.each(t, function (t, i) {
							this.datasets[i].bars.push(new this.BarClass({
								value: t,
								label: e,
								x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
								y: this.scale.endPoint,
								width: this.scale.calculateBarWidth(this.datasets.length),
								base: this.scale.endPoint,
								strokeColor: this.datasets[i].strokeColor,
								fillColor: this.datasets[i].fillColor
							}))
						}, this), this.scale.addXLabel(e), this.update()
					},
					removeData: function () {
						this.scale.removeXLabel(), i.each(this.datasets, function (t) {
							t.bars.shift()
						}, this), this.update()
					},
					reflow: function () {
						i.extend(this.BarClass.prototype, {
							y: this.scale.endPoint,
							base: this.scale.endPoint
						});
						var t = i.extend({
							height: this.chart.height,
							width: this.chart.width
						});
						this.scale.update(t)
					},
					draw: function (t) {
						var e = t || 1;
						this.clear();
						this.chart.ctx;
						this.scale.draw(e), i.each(this.datasets, function (t, n) {
							i.each(t.bars, function (t, i) {
								t.hasValue() && (t.base = this.scale.endPoint, t.transition({
									x: this.scale.calculateBarX(this.datasets.length, n, i),
									y: this.scale.calculateY(t.value),
									width: this.scale.calculateBarWidth(this.datasets.length)
								}, e).draw())
							}, this)
						}, this)
					}
				})
			}.call(this),
			function () {
				"use strict";
				var t = this,
					e = t.Chart,
					i = e.helpers,
					n = {
						segmentShowStroke: !0,
						segmentStrokeColor: "#fff",
						segmentStrokeWidth: 2,
						percentageInnerCutout: 50,
						animationSteps: 100,
						animationEasing: "easeOutBounce",
						animateRotate: !0,
						animateScale: !1,
						legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
					};
				e.Type.extend({
					name: "Doughnut",
					defaults: n,
					initialize: function (t) {
						this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
							ctx: this.chart.ctx,
							x: this.chart.width / 2,
							y: this.chart.height / 2
						}), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
							var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
							i.each(this.segments, function (t) {
								t.restore(["fillColor"])
							}), i.each(e, function (t) {
								t.fillColor = t.highlightColor
							}), this.showTooltip(e)
						}), this.calculateTotal(t), i.each(t, function (t, e) {
							this.addData(t, e, !0)
						}, this), this.render()
					},
					getSegmentsAtEvent: function (t) {
						var e = [],
							n = i.getRelativePosition(t);
						return i.each(this.segments, function (t) {
							t.inRange(n.x, n.y) && e.push(t)
						}, this), e
					},
					addData: function (t, e, i) {
						var n = e || this.segments.length;
						this.segments.splice(n, 0, new this.SegmentArc({
							value: t.value,
							outerRadius: this.options.animateScale ? 0 : this.outerRadius,
							innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
							fillColor: t.color,
							highlightColor: t.highlight || t.color,
							showStroke: this.options.segmentShowStroke,
							strokeWidth: this.options.segmentStrokeWidth,
							strokeColor: this.options.segmentStrokeColor,
							startAngle: 1.5 * Math.PI,
							circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
							label: t.label
						})), i || (this.reflow(), this.update())
					},
					calculateCircumference: function (t) {
						return 2 * Math.PI * (Math.abs(t) / this.total)
					},
					calculateTotal: function (t) {
						this.total = 0, i.each(t, function (t) {
							this.total += Math.abs(t.value)
						}, this)
					},
					update: function () {
						this.calculateTotal(this.segments), i.each(this.activeElements, function (t) {
							t.restore(["fillColor"])
						}), i.each(this.segments, function (t) {
							t.save()
						}), this.render()
					},
					removeData: function (t) {
						var e = i.isNumber(t) ? t : this.segments.length - 1;
						this.segments.splice(e, 1), this.reflow(), this.update()
					},
					reflow: function () {
						i.extend(this.SegmentArc.prototype, {
							x: this.chart.width / 2,
							y: this.chart.height / 2
						}), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function (t) {
							t.update({
								outerRadius: this.outerRadius,
								innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
							})
						}, this)
					},
					draw: function (t) {
						var e = t ? t : 1;
						this.clear(), i.each(this.segments, function (t, i) {
							t.transition({
								circumference: this.calculateCircumference(t.value),
								outerRadius: this.outerRadius,
								innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
							}, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle)
						}, this)
					}
				}), e.types.Doughnut.extend({
					name: "Pie",
					defaults: i.merge(n, {
						percentageInnerCutout: 0
					})
				})
			}.call(this),
			function () {
				"use strict";
				var t = this,
					e = t.Chart,
					i = e.helpers,
					n = {
						scaleShowGridLines: !0,
						scaleGridLineColor: "rgba(0,0,0,.05)",
						scaleGridLineWidth: 1,
						scaleShowHorizontalLines: !0,
						scaleShowVerticalLines: !0,
						bezierCurve: !0,
						bezierCurveTension: .4,
						pointDot: !0,
						pointDotRadius: 4,
						pointDotStrokeWidth: 1,
						pointHitDetectionRadius: 20,
						datasetStroke: !0,
						datasetStrokeWidth: 2,
						datasetFill: !0,
						legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
					};
				e.Type.extend({
					name: "Line",
					defaults: n,
					initialize: function (t) {
						this.PointClass = e.Point.extend({
							strokeWidth: this.options.pointDotStrokeWidth,
							radius: this.options.pointDotRadius,
							display: this.options.pointDot,
							hitDetectionRadius: this.options.pointHitDetectionRadius,
							ctx: this.chart.ctx,
							inRange: function (t) {
								return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
							}
						}), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
							var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
							this.eachPoints(function (t) {
								t.restore(["fillColor", "strokeColor"])
							}), i.each(e, function (t) {
								t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
							}), this.showTooltip(e)
						}), i.each(t.datasets, function (e) {
							var n = {
								label: e.label || null,
								fillColor: e.fillColor,
								strokeColor: e.strokeColor,
								pointColor: e.pointColor,
								pointStrokeColor: e.pointStrokeColor,
								points: []
							};
							this.datasets.push(n), i.each(e.data, function (i, o) {
								n.points.push(new this.PointClass({
									value: i,
									label: t.labels[o],
									datasetLabel: e.label,
									strokeColor: e.pointStrokeColor,
									fillColor: e.pointColor,
									highlightFill: e.pointHighlightFill || e.pointColor,
									highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
								}))
							}, this), this.buildScale(t.labels), this.eachPoints(function (t, e) {
								i.extend(t, {
									x: this.scale.calculateX(e),
									y: this.scale.endPoint
								}), t.save()
							}, this)
						}, this), this.render()
					},
					update: function () {
						this.scale.update(), i.each(this.activeElements, function (t) {
							t.restore(["fillColor", "strokeColor"])
						}), this.eachPoints(function (t) {
							t.save()
						}), this.render()
					},
					eachPoints: function (t) {
						i.each(this.datasets, function (e) {
							i.each(e.points, t, this)
						}, this)
					},
					getPointsAtEvent: function (t) {
						var e = [],
							n = i.getRelativePosition(t);
						return i.each(this.datasets, function (t) {
							i.each(t.points, function (t) {
								t.inRange(n.x, n.y) && e.push(t)
							})
						}, this), e
					},
					buildScale: function (t) {
						var n = this,
							o = function () {
								var t = [];
								return n.eachPoints(function (e) {
									t.push(e.value)
								}), t
							},
							s = {
								templateString: this.options.scaleLabel,
								height: this.chart.height,
								width: this.chart.width,
								ctx: this.chart.ctx,
								textColor: this.options.scaleFontColor,
								fontSize: this.options.scaleFontSize,
								fontStyle: this.options.scaleFontStyle,
								fontFamily: this.options.scaleFontFamily,
								valuesCount: t.length,
								beginAtZero: this.options.scaleBeginAtZero,
								integersOnly: this.options.scaleIntegersOnly,
								calculateYRange: function (t) {
									var e = i.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);
									i.extend(this, e)
								},
								xLabels: t,
								font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
								lineWidth: this.options.scaleLineWidth,
								lineColor: this.options.scaleLineColor,
								showHorizontalLines: this.options.scaleShowHorizontalLines,
								showVerticalLines: this.options.scaleShowVerticalLines,
								gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
								gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
								padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
								showLabels: this.options.scaleShowLabels,
								display: this.options.showScale
							};
						this.options.scaleOverride && i.extend(s, {
							calculateYRange: i.noop,
							steps: this.options.scaleSteps,
							stepValue: this.options.scaleStepWidth,
							min: this.options.scaleStartValue,
							max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
						}), this.scale = new e.Scale(s)
					},
					addData: function (t, e) {
						i.each(t, function (t, i) {
							this.datasets[i].points.push(new this.PointClass({
								value: t,
								label: e,
								x: this.scale.calculateX(this.scale.valuesCount + 1),
								y: this.scale.endPoint,
								strokeColor: this.datasets[i].pointStrokeColor,
								fillColor: this.datasets[i].pointColor
							}))
						}, this), this.scale.addXLabel(e), this.update()
					},
					removeData: function () {
						this.scale.removeXLabel(), i.each(this.datasets, function (t) {
							t.points.shift()
						}, this), this.update()
					},
					reflow: function () {
						var t = i.extend({
							height: this.chart.height,
							width: this.chart.width
						});
						this.scale.update(t)
					},
					draw: function (t) {
						var e = t || 1;
						this.clear();
						var n = this.chart.ctx,
							o = function (t) {
								return null !== t.value
							},
							s = function (t, e, n) {
								return i.findNextWhere(e, o, n) || t
							},
							a = function (t, e, n) {
								return i.findPreviousWhere(e, o, n) || t
							};
						this.scale.draw(e), i.each(this.datasets, function (t) {
							var r = i.where(t.points, o);
							i.each(t.points, function (t, i) {
								t.hasValue() && t.transition({
									y: this.scale.calculateY(t.value),
									x: this.scale.calculateX(i)
								}, e)
							}, this), this.options.bezierCurve && i.each(r, function (t, e) {
								var n = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;
								t.controlPoints = i.splineCurve(a(t, r, e), t, s(t, r, e), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
							}, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(r, function (t, e) {
								if (0 === e) n.moveTo(t.x, t.y);
								else if (this.options.bezierCurve) {
									var i = a(t, r, e);
									n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
								} else n.lineTo(t.x, t.y)
							}, this), n.stroke(), this.options.datasetFill && r.length > 0 && (n.lineTo(r[r.length - 1].x, this.scale.endPoint), n.lineTo(r[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(r, function (t) {
								t.draw()
							})
						}, this)
					}
				})
			}.call(this),
			function () {
				"use strict";
				var t = this,
					e = t.Chart,
					i = e.helpers,
					n = {
						scaleShowLabelBackdrop: !0,
						scaleBackdropColor: "rgba(255,255,255,0.75)",
						scaleBeginAtZero: !0,
						scaleBackdropPaddingY: 2,
						scaleBackdropPaddingX: 2,
						scaleShowLine: !0,
						segmentShowStroke: !0,
						segmentStrokeColor: "#fff",
						segmentStrokeWidth: 2,
						animationSteps: 100,
						animationEasing: "easeOutBounce",
						animateRotate: !0,
						animateScale: !1,
						legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
					};
				e.Type.extend({
					name: "PolarArea",
					defaults: n,
					initialize: function (t) {
						this.segments = [], this.SegmentArc = e.Arc.extend({
							showStroke: this.options.segmentShowStroke,
							strokeWidth: this.options.segmentStrokeWidth,
							strokeColor: this.options.segmentStrokeColor,
							ctx: this.chart.ctx,
							innerRadius: 0,
							x: this.chart.width / 2,
							y: this.chart.height / 2
						}), this.scale = new e.RadialScale({
							display: this.options.showScale,
							fontStyle: this.options.scaleFontStyle,
							fontSize: this.options.scaleFontSize,
							fontFamily: this.options.scaleFontFamily,
							fontColor: this.options.scaleFontColor,
							showLabels: this.options.scaleShowLabels,
							showLabelBackdrop: this.options.scaleShowLabelBackdrop,
							backdropColor: this.options.scaleBackdropColor,
							backdropPaddingY: this.options.scaleBackdropPaddingY,
							backdropPaddingX: this.options.scaleBackdropPaddingX,
							lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
							lineColor: this.options.scaleLineColor,
							lineArc: !0,
							width: this.chart.width,
							height: this.chart.height,
							xCenter: this.chart.width / 2,
							yCenter: this.chart.height / 2,
							ctx: this.chart.ctx,
							templateString: this.options.scaleLabel,
							valuesCount: t.length
						}), this.updateScaleRange(t), this.scale.update(), i.each(t, function (t, e) {
							this.addData(t, e, !0)
						}, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
							var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
							i.each(this.segments, function (t) {
								t.restore(["fillColor"])
							}), i.each(e, function (t) {
								t.fillColor = t.highlightColor
							}), this.showTooltip(e)
						}), this.render()
					},
					getSegmentsAtEvent: function (t) {
						var e = [],
							n = i.getRelativePosition(t);
						return i.each(this.segments, function (t) {
							t.inRange(n.x, n.y) && e.push(t)
						}, this), e
					},
					addData: function (t, e, i) {
						var n = e || this.segments.length;
						this.segments.splice(n, 0, new this.SegmentArc({
							fillColor: t.color,
							highlightColor: t.highlight || t.color,
							label: t.label,
							value: t.value,
							outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
							circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
							startAngle: 1.5 * Math.PI
						})), i || (this.reflow(), this.update())
					},
					removeData: function (t) {
						var e = i.isNumber(t) ? t : this.segments.length - 1;
						this.segments.splice(e, 1), this.reflow(), this.update()
					},
					calculateTotal: function (t) {
						this.total = 0, i.each(t, function (t) {
							this.total += t.value
						}, this), this.scale.valuesCount = this.segments.length
					},
					updateScaleRange: function (t) {
						var e = [];
						i.each(t, function (t) {
							e.push(t.value)
						});
						var n = this.options.scaleOverride ? {
							steps: this.options.scaleSteps,
							stepValue: this.options.scaleStepWidth,
							min: this.options.scaleStartValue,
							max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
						} : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
						i.extend(this.scale, n, {
							size: i.min([this.chart.width, this.chart.height]),
							xCenter: this.chart.width / 2,
							yCenter: this.chart.height / 2
						})
					},
					update: function () {
						this.calculateTotal(this.segments), i.each(this.segments, function (t) {
							t.save()
						}), this.reflow(), this.render()
					},
					reflow: function () {
						i.extend(this.SegmentArc.prototype, {
							x: this.chart.width / 2,
							y: this.chart.height / 2
						}), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, {
							xCenter: this.chart.width / 2,
							yCenter: this.chart.height / 2
						}), i.each(this.segments, function (t) {
							t.update({
								outerRadius: this.scale.calculateCenterOffset(t.value)
							})
						}, this)
					},
					draw: function (t) {
						var e = t || 1;
						this.clear(), i.each(this.segments, function (t, i) {
							t.transition({
								circumference: this.scale.getCircumference(),
								outerRadius: this.scale.calculateCenterOffset(t.value)
							}, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw()
						}, this), this.scale.draw()
					}
				})
			}.call(this),
			function () {
				"use strict";
				var t = this,
					e = t.Chart,
					i = e.helpers;
				e.Type.extend({
					name: "Radar",
					defaults: {
						scaleShowLine: !0,
						angleShowLineOut: !0,
						scaleShowLabels: !1,
						scaleBeginAtZero: !0,
						angleLineColor: "rgba(0,0,0,.1)",
						angleLineWidth: 1,
						pointLabelFontFamily: "'Arial'",
						pointLabelFontStyle: "normal",
						pointLabelFontSize: 10,
						pointLabelFontColor: "#666",
						pointDot: !0,
						pointDotRadius: 3,
						pointDotStrokeWidth: 1,
						pointHitDetectionRadius: 20,
						datasetStroke: !0,
						datasetStrokeWidth: 2,
						datasetFill: !0,
						legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
					},
					initialize: function (t) {
						this.PointClass = e.Point.extend({
							strokeWidth: this.options.pointDotStrokeWidth,
							radius: this.options.pointDotRadius,
							display: this.options.pointDot,
							hitDetectionRadius: this.options.pointHitDetectionRadius,
							ctx: this.chart.ctx
						}), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function (t) {
							var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
							this.eachPoints(function (t) {
								t.restore(["fillColor", "strokeColor"])
							}), i.each(e, function (t) {
								t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
							}), this.showTooltip(e)
						}), i.each(t.datasets, function (e) {
							var n = {
								label: e.label || null,
								fillColor: e.fillColor,
								strokeColor: e.strokeColor,
								pointColor: e.pointColor,
								pointStrokeColor: e.pointStrokeColor,
								points: []
							};
							this.datasets.push(n), i.each(e.data, function (i, o) {
								var s;
								this.scale.animation || (s = this.scale.getPointPosition(o, this.scale.calculateCenterOffset(i))), n.points.push(new this.PointClass({
									value: i,
									label: t.labels[o],
									datasetLabel: e.label,
									x: this.options.animation ? this.scale.xCenter : s.x,
									y: this.options.animation ? this.scale.yCenter : s.y,
									strokeColor: e.pointStrokeColor,
									fillColor: e.pointColor,
									highlightFill: e.pointHighlightFill || e.pointColor,
									highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
								}))
							}, this)
						}, this), this.render()
					},
					eachPoints: function (t) {
						i.each(this.datasets, function (e) {
							i.each(e.points, t, this)
						}, this)
					},
					getPointsAtEvent: function (t) {
						var e = i.getRelativePosition(t),
							n = i.getAngleFromPoint({
								x: this.scale.xCenter,
								y: this.scale.yCenter
							}, e),
							o = 2 * Math.PI / this.scale.valuesCount,
							s = Math.round((n.angle - 1.5 * Math.PI) / o),
							a = [];
						return (s >= this.scale.valuesCount || s < 0) && (s = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function (t) {
							a.push(t.points[s])
						}), a
					},
					buildScale: function (t) {
						this.scale = new e.RadialScale({
							display: this.options.showScale,
							fontStyle: this.options.scaleFontStyle,
							fontSize: this.options.scaleFontSize,
							fontFamily: this.options.scaleFontFamily,
							fontColor: this.options.scaleFontColor,
							showLabels: this.options.scaleShowLabels,
							showLabelBackdrop: this.options.scaleShowLabelBackdrop,
							backdropColor: this.options.scaleBackdropColor,
							backdropPaddingY: this.options.scaleBackdropPaddingY,
							backdropPaddingX: this.options.scaleBackdropPaddingX,
							lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
							lineColor: this.options.scaleLineColor,
							angleLineColor: this.options.angleLineColor,
							angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
							pointLabelFontColor: this.options.pointLabelFontColor,
							pointLabelFontSize: this.options.pointLabelFontSize,
							pointLabelFontFamily: this.options.pointLabelFontFamily,
							pointLabelFontStyle: this.options.pointLabelFontStyle,
							height: this.chart.height,
							width: this.chart.width,
							xCenter: this.chart.width / 2,
							yCenter: this.chart.height / 2,
							ctx: this.chart.ctx,
							templateString: this.options.scaleLabel,
							labels: t.labels,
							valuesCount: t.datasets[0].data.length
						}), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
					},
					updateScaleRange: function (t) {
						var e = function () {
								var e = [];
								return i.each(t, function (t) {
									t.data ? e = e.concat(t.data) : i.each(t.points, function (t) {
										e.push(t.value)
									})
								}), e
							}(),
							n = this.options.scaleOverride ? {
								steps: this.options.scaleSteps,
								stepValue: this.options.scaleStepWidth,
								min: this.options.scaleStartValue,
								max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
							} : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
						i.extend(this.scale, n)
					},
					addData: function (t, e) {
						this.scale.valuesCount++, i.each(t, function (t, i) {
							var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
							this.datasets[i].points.push(new this.PointClass({
								value: t,
								label: e,
								x: n.x,
								y: n.y,
								strokeColor: this.datasets[i].pointStrokeColor,
								fillColor: this.datasets[i].pointColor
							}))
						}, this), this.scale.labels.push(e), this.reflow(), this.update()
					},
					removeData: function () {
						this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function (t) {
							t.points.shift()
						}, this), this.reflow(), this.update()
					},
					update: function () {
						this.eachPoints(function (t) {
							t.save()
						}), this.reflow(), this.render()
					},
					reflow: function () {
						i.extend(this.scale, {
							width: this.chart.width,
							height: this.chart.height,
							size: i.min([this.chart.width, this.chart.height]),
							xCenter: this.chart.width / 2,
							yCenter: this.chart.height / 2
						}), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
					},
					draw: function (t) {
						var e = t || 1,
							n = this.chart.ctx;
						this.clear(), this.scale.draw(), i.each(this.datasets, function (t) {
							i.each(t.points, function (t, i) {
								t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e)
							}, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function (t, e) {
								0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y)
							}, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, n.fill(), i.each(t.points, function (t) {
								t.hasValue() && t.draw()
							})
						}, this)
					}
				})
			}.call(this)
	},
	73: 7,
	77: function (t, e, i) {
		var n, o, s;
		! function (a) {
			"use strict";
			o = [i(1)], n = a, s = "function" == typeof n ? n.apply(e, o) : n, !(void 0 !== s && (t.exports = s))
		}(function (t) {
			"use strict";
			var e = window.Slick || {};
			e = function () {
				function e(e, n) {
					var o, s = this;
					s.defaults = {
						accessibility: !0,
						adaptiveHeight: !1,
						appendArrows: t(e),
						appendDots: t(e),
						arrows: !0,
						asNavFor: null,
						prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
						nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
						autoplay: !1,
						autoplaySpeed: 3e3,
						centerMode: !1,
						centerPadding: "50px",
						cssEase: "ease",
						customPaging: function (e, i) {
							return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
						},
						dots: !1,
						dotsClass: "slick-dots",
						draggable: !0,
						easing: "linear",
						edgeFriction: .35,
						fade: !1,
						focusOnSelect: !1,
						infinite: !0,
						initialSlide: 0,
						lazyLoad: "ondemand",
						mobileFirst: !1,
						pauseOnHover: !0,
						pauseOnFocus: !0,
						pauseOnDotsHover: !1,
						respondTo: "window",
						responsive: null,
						rows: 1,
						rtl: !1,
						slide: "",
						slidesPerRow: 1,
						slidesToShow: 1,
						slidesToScroll: 1,
						speed: 500,
						swipe: !0,
						swipeToSlide: !1,
						touchMove: !0,
						touchThreshold: 5,
						useCSS: !0,
						useTransform: !0,
						variableWidth: !1,
						vertical: !1,
						verticalSwiping: !1,
						waitForAnimate: !0,
						zIndex: 1e3
					}, s.initials = {
						animating: !1,
						dragging: !1,
						autoPlayTimer: null,
						currentDirection: 0,
						currentLeft: null,
						currentSlide: 0,
						direction: 1,
						$dots: null,
						listWidth: null,
						listHeight: null,
						loadIndex: 0,
						$nextArrow: null,
						$prevArrow: null,
						slideCount: null,
						slideWidth: null,
						$slideTrack: null,
						$slides: null,
						sliding: !1,
						slideOffset: 0,
						swipeLeft: null,
						$list: null,
						touchObject: {},
						transformsEnabled: !1,
						unslicked: !1
					}, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(e).data("slick") || {}, s.options = t.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
				}
				var i = 0;
				return e
			}(), e.prototype.activateADA = function () {
				var t = this;
				t.$slideTrack.find(".slick-active").attr({
					"aria-hidden": "false"
				}).find("a, input, button, select").attr({
					tabindex: "0"
				})
			}, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
				var o = this;
				if ("boolean" == typeof i) n = i, i = null;
				else if (0 > i || i >= o.slideCount) return !1;
				o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (e, i) {
					t(i).attr("data-slick-index", e)
				}), o.$slidesCache = o.$slides, o.reinit()
			}, e.prototype.animateHeight = function () {
				var t = this;
				if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
					var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
					t.$list.animate({
						height: e
					}, t.options.speed)
				}
			}, e.prototype.animateSlide = function (e, i) {
				var n = {},
					o = this;
				o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
					left: e
				}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
					top: e
				}, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({
					animStart: o.currentLeft
				}).animate({
					animStart: e
				}, {
					duration: o.options.speed,
					easing: o.options.easing,
					step: function (t) {
						t = Math.ceil(t), o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
					},
					complete: function () {
						i && i.call()
					}
				})) : (o.applyTransition(), e = Math.ceil(e), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function () {
					o.disableTransition(), i.call()
				}, o.options.speed))
			}, e.prototype.getNavTarget = function () {
				var e = this,
					i = e.options.asNavFor;
				return i && null !== i && (i = t(i).not(e.$slider)), i
			}, e.prototype.asNavFor = function (e) {
				var i = this,
					n = i.getNavTarget();
				null !== n && "object" == typeof n && n.each(function () {
					var i = t(this).slick("getSlick");
					i.unslicked || i.slideHandler(e, !0)
				})
			}, e.prototype.applyTransition = function (t) {
				var e = this,
					i = {};
				e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
			}, e.prototype.autoPlay = function () {
				var t = this;
				t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
			}, e.prototype.autoPlayClear = function () {
				var t = this;
				t.autoPlayTimer && clearInterval(t.autoPlayTimer)
			}, e.prototype.autoPlayIterator = function () {
				var t = this,
					e = t.currentSlide + t.options.slidesToScroll;
				t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
			}, e.prototype.buildArrows = function () {
				var e = this;
				e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
					"aria-disabled": "true",
					tabindex: "-1"
				}))
			}, e.prototype.buildDots = function () {
				var e, i, n = this;
				if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
					for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
					n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
				}
			}, e.prototype.buildOut = function () {
				var e = this;
				e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
					t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
				}), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
			}, e.prototype.buildRows = function () {
				var t, e, i, n, o, s, a, r = this;
				if (n = document.createDocumentFragment(), s = r.$slider.children(), r.options.rows > 1) {
					for (a = r.options.slidesPerRow * r.options.rows, o = Math.ceil(s.length / a), t = 0; o > t; t++) {
						var l = document.createElement("div");
						for (e = 0; e < r.options.rows; e++) {
							var d = document.createElement("div");
							for (i = 0; i < r.options.slidesPerRow; i++) {
								var c = t * a + (e * r.options.slidesPerRow + i);
								s.get(c) && d.appendChild(s.get(c))
							}
							l.appendChild(d)
						}
						n.appendChild(l)
					}
					r.$slider.empty().append(n), r.$slider.children().children().children().css({
						width: 100 / r.options.slidesPerRow + "%",
						display: "inline-block"
					})
				}
			}, e.prototype.checkResponsive = function (e, i) {
				var n, o, s, a = this,
					r = !1,
					l = a.$slider.width(),
					d = window.innerWidth || t(window).width();
				if ("window" === a.respondTo ? s = d : "slider" === a.respondTo ? s = l : "min" === a.respondTo && (s = Math.min(d, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
					o = null;
					for (n in a.breakpoints) a.breakpoints.hasOwnProperty(n) && (a.originalSettings.mobileFirst === !1 ? s < a.breakpoints[n] && (o = a.breakpoints[n]) : s > a.breakpoints[n] && (o = a.breakpoints[n]));
					null !== o ? null !== a.activeBreakpoint ? (o !== a.activeBreakpoint || i) && (a.activeBreakpoint = o, "unslick" === a.breakpointSettings[o] ? a.unslick(o) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[o]), e === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = o) : (a.activeBreakpoint = o, "unslick" === a.breakpointSettings[o] ? a.unslick(o) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[o]), e === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = o) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, e === !0 && (a.currentSlide = a.options.initialSlide), a.refresh(e), r = o), e || r === !1 || a.$slider.trigger("breakpoint", [a, r])
				}
			}, e.prototype.changeSlide = function (e, i) {
				var n, o, s, a = this,
					r = t(e.currentTarget);
				switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), s = a.slideCount % a.options.slidesToScroll !== 0, n = s ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, e.data.message) {
					case "previous":
						o = 0 === n ? a.options.slidesToScroll : a.options.slidesToShow - n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - o, !1, i);
						break;
					case "next":
						o = 0 === n ? a.options.slidesToScroll : n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + o, !1, i);
						break;
					case "index":
						var l = 0 === e.data.index ? 0 : e.data.index || r.index() * a.options.slidesToScroll;
						a.slideHandler(a.checkNavigable(l), !1, i), r.children().trigger("focus");
						break;
					default:
						return
				}
			}, e.prototype.checkNavigable = function (t) {
				var e, i, n = this;
				if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
				else
					for (var o in e) {
						if (t < e[o]) {
							t = i;
							break
						}
						i = e[o]
					}
				return t
			}, e.prototype.cleanUpEvents = function () {
				var e = this;
				e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
					t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
			}, e.prototype.cleanUpSlideEvents = function () {
				var e = this;
				e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
			}, e.prototype.cleanUpRows = function () {
				var t, e = this;
				e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
			}, e.prototype.clickHandler = function (t) {
				var e = this;
				e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
			}, e.prototype.destroy = function (e) {
				var i = this;
				i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
					t(this).attr("style", t(this).data("originalStyling"))
				}), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
			}, e.prototype.disableTransition = function (t) {
				var e = this,
					i = {};
				i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
			}, e.prototype.fadeSlide = function (t, e) {
				var i = this;
				i.cssTransitions === !1 ? (i.$slides.eq(t).css({
					zIndex: i.options.zIndex
				}), i.$slides.eq(t).animate({
					opacity: 1
				}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
					opacity: 1,
					zIndex: i.options.zIndex
				}), e && setTimeout(function () {
					i.disableTransition(t), e.call()
				}, i.options.speed))
			}, e.prototype.fadeSlideOut = function (t) {
				var e = this;
				e.cssTransitions === !1 ? e.$slides.eq(t).animate({
					opacity: 0,
					zIndex: e.options.zIndex - 2
				}, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
					opacity: 0,
					zIndex: e.options.zIndex - 2
				}))
			}, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
				var e = this;
				null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
			}, e.prototype.focusHandler = function () {
				var e = this;
				e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i) {
					i.stopImmediatePropagation();
					var n = t(this);
					setTimeout(function () {
						e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
					}, 0)
				})
			}, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
				var t = this;
				return t.currentSlide
			}, e.prototype.getDotCount = function () {
				var t = this,
					e = 0,
					i = 0,
					n = 0;
				if (t.options.infinite === !0)
					for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
				else if (t.options.centerMode === !0) n = t.slideCount;
				else if (t.options.asNavFor)
					for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
				else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
				return n - 1
			}, e.prototype.getLeft = function (t) {
				var e, i, n, o = this,
					s = 0;
				return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = o.options.rtl === !0 ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
			}, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
				var e = this;
				return e.options[t]
			}, e.prototype.getNavigableIndexes = function () {
				var t, e = this,
					i = 0,
					n = 0,
					o = [];
				for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
				return o
			}, e.prototype.getSlick = function () {
				return this
			}, e.prototype.getSlideCount = function () {
				var e, i, n, o = this;
				return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function (e, s) {
					return s.offsetLeft - n + t(s).outerWidth() / 2 > -1 * o.swipeLeft ? (i = s, !1) : void 0
				}), e = Math.abs(t(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
			}, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
				var i = this;
				i.changeSlide({
					data: {
						message: "index",
						index: parseInt(t)
					}
				}, e)
			}, e.prototype.init = function (e) {
				var i = this;
				t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
			}, e.prototype.initADA = function () {
				var e = this;
				e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
					"aria-hidden": "true",
					tabindex: "-1"
				}).find("a, input, button, select").attr({
					tabindex: "-1"
				}), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
					t(this).attr({
						role: "option",
						"aria-describedby": "slick-slide" + e.instanceUid + i
					})
				}), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (i) {
					t(this).attr({
						role: "presentation",
						"aria-selected": "false",
						"aria-controls": "navigation" + e.instanceUid + i,
						id: "slick-slide" + e.instanceUid + i
					})
				}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
			}, e.prototype.initArrowEvents = function () {
				var t = this;
				t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
					message: "previous"
				}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
					message: "next"
				}, t.changeSlide))
			}, e.prototype.initDotEvents = function () {
				var e = this;
				e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
					message: "index"
				}, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
			}, e.prototype.initSlideEvents = function () {
				var e = this;
				e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
			}, e.prototype.initializeEvents = function () {
				var e = this;
				e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
					action: "start"
				}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
					action: "move"
				}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
					action: "end"
				}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
					action: "end"
				}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
			}, e.prototype.initUI = function () {
				var t = this;
				t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
			}, e.prototype.keyHandler = function (t) {
				var e = this;
				t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
					data: {
						message: e.options.rtl === !0 ? "next" : "previous"
					}
				}) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
					data: {
						message: e.options.rtl === !0 ? "previous" : "next"
					}
				}))
			}, e.prototype.lazyLoad = function () {
				function e(e) {
					t("img[data-lazy]", e).each(function () {
						var e = t(this),
							i = t(this).attr("data-lazy"),
							n = document.createElement("img");
						n.onload = function () {
							e.animate({
								opacity: 0
							}, 100, function () {
								e.attr("src", i).animate({
									opacity: 1
								}, 200, function () {
									e.removeAttr("data-lazy").removeClass("slick-loading")
								}), a.$slider.trigger("lazyLoaded", [a, e, i])
							})
						}, n.onerror = function () {
							e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, e, i])
						}, n.src = i
					})
				}
				var i, n, o, s, a = this;
				a.options.centerMode === !0 ? a.options.infinite === !0 ? (o = a.currentSlide + (a.options.slidesToShow / 2 + 1), s = o + a.options.slidesToShow + 2) : (o = Math.max(0, a.currentSlide - (a.options.slidesToShow / 2 + 1)), s = 2 + (a.options.slidesToShow / 2 + 1) + a.currentSlide) : (o = a.options.infinite ? a.options.slidesToShow + a.currentSlide : a.currentSlide, s = Math.ceil(o + a.options.slidesToShow), a.options.fade === !0 && (o > 0 && o--, s <= a.slideCount && s++)), i = a.$slider.find(".slick-slide").slice(o, s), e(i), a.slideCount <= a.options.slidesToShow ? (n = a.$slider.find(".slick-slide"), e(n)) : a.currentSlide >= a.slideCount - a.options.slidesToShow ? (n = a.$slider.find(".slick-cloned").slice(0, a.options.slidesToShow), e(n)) : 0 === a.currentSlide && (n = a.$slider.find(".slick-cloned").slice(-1 * a.options.slidesToShow), e(n))
			}, e.prototype.loadSlider = function () {
				var t = this;
				t.setPosition(), t.$slideTrack.css({
					opacity: 1
				}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
			}, e.prototype.next = e.prototype.slickNext = function () {
				var t = this;
				t.changeSlide({
					data: {
						message: "next"
					}
				})
			}, e.prototype.orientationChange = function () {
				var t = this;
				t.checkResponsive(), t.setPosition()
			}, e.prototype.pause = e.prototype.slickPause = function () {
				var t = this;
				t.autoPlayClear(), t.paused = !0
			}, e.prototype.play = e.prototype.slickPlay = function () {
				var t = this;
				t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
			}, e.prototype.postSlide = function (t) {
				var e = this;
				e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
			}, e.prototype.prev = e.prototype.slickPrev = function () {
				var t = this;
				t.changeSlide({
					data: {
						message: "previous"
					}
				})
			}, e.prototype.preventDefault = function (t) {
				t.preventDefault()
			}, e.prototype.progressiveLazyLoad = function (e) {
				e = e || 1;
				var i, n, o, s = this,
					a = t("img[data-lazy]", s.$slider);
				a.length ? (i = a.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function () {
					i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), s.options.adaptiveHeight === !0 && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, n]), s.progressiveLazyLoad()
				}, o.onerror = function () {
					3 > e ? setTimeout(function () {
						s.progressiveLazyLoad(e + 1)
					}, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, n]), s.progressiveLazyLoad())
				}, o.src = n) : s.$slider.trigger("allImagesLoaded", [s])
			}, e.prototype.refresh = function (e) {
				var i, n, o = this;
				n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
					currentSlide: i
				}), o.init(), e || o.changeSlide({
					data: {
						message: "index",
						index: i
					}
				}, !1)
			}, e.prototype.registerBreakpoints = function () {
				var e, i, n, o = this,
					s = o.options.responsive || null;
				if ("array" === t.type(s) && s.length) {
					o.respondTo = o.options.respondTo || "window";
					for (e in s)
						if (n = o.breakpoints.length - 1, i = s[e].breakpoint, s.hasOwnProperty(e)) {
							for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
							o.breakpoints.push(i), o.breakpointSettings[i] = s[e].settings
						} o.breakpoints.sort(function (t, e) {
						return o.options.mobileFirst ? t - e : e - t
					})
				}
			}, e.prototype.reinit = function () {
				var e = this;
				e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
			}, e.prototype.resize = function () {
				var e = this;
				t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
					e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
				}, 50))
			}, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
				var n = this;
				return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) && (n.unload(), i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
			}, e.prototype.setCSS = function (t) {
				var e, i, n = this,
					o = {};
				n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
			}, e.prototype.setDimensions = function () {
				var t = this;
				t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
					padding: "0px " + t.options.centerPadding
				}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
					padding: t.options.centerPadding + " 0px"
				})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
				var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
				t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
			}, e.prototype.setFade = function () {
				var e, i = this;
				i.$slides.each(function (n, o) {
					e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(o).css({
						position: "relative",
						right: e,
						top: 0,
						zIndex: i.options.zIndex - 2,
						opacity: 0
					}) : t(o).css({
						position: "relative",
						left: e,
						top: 0,
						zIndex: i.options.zIndex - 2,
						opacity: 0
					})
				}), i.$slides.eq(i.currentSlide).css({
					zIndex: i.options.zIndex - 1,
					opacity: 1
				})
			}, e.prototype.setHeight = function () {
				var t = this;
				if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
					var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
					t.$list.css("height", e)
				}
			}, e.prototype.setOption = e.prototype.slickSetOption = function () {
				var e, i, n, o, s, a = this,
					r = !1;
				if ("object" === t.type(arguments[0]) ? (n = arguments[0], r = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : "undefined" != typeof arguments[1] && (s = "single")), "single" === s) a.options[n] = o;
				else if ("multiple" === s) t.each(n, function (t, e) {
					a.options[t] = e
				});
				else if ("responsive" === s)
					for (i in o)
						if ("array" !== t.type(a.options.responsive)) a.options.responsive = [o[i]];
						else {
							for (e = a.options.responsive.length - 1; e >= 0;) a.options.responsive[e].breakpoint === o[i].breakpoint && a.options.responsive.splice(e, 1), e--;
							a.options.responsive.push(o[i])
						} r && (a.unload(), a.reinit())
			}, e.prototype.setPosition = function () {
				var t = this;
				t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
			}, e.prototype.setProps = function () {
				var t = this,
					e = document.body.style;
				t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
			}, e.prototype.setSlideClasses = function (t) {
				var e, i, n, o, s = this;
				i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
			}, e.prototype.setupInfinite = function () {
				var e, i, n, o = this;
				if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
					for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
					for (e = 0; n > e; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
					o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
						t(this).attr("id", "")
					})
				}
			}, e.prototype.interrupt = function (t) {
				var e = this;
				t || e.autoPlay(), e.interrupted = t
			}, e.prototype.selectHandler = function (e) {
				var i = this,
					n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
					o = parseInt(n.attr("data-slick-index"));
				return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
			}, e.prototype.slideHandler = function (t, e, i) {
				var n, o, s, a, r, l = null,
					d = this;
				return e = e || !1, d.animating === !0 && d.options.waitForAnimate === !0 || d.options.fade === !0 && d.currentSlide === t || d.slideCount <= d.options.slidesToShow ? void 0 : (e === !1 && d.asNavFor(t), n = t, l = d.getLeft(n), a = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? a : d.swipeLeft, d.options.infinite === !1 && d.options.centerMode === !1 && (0 > t || t > d.getDotCount() * d.options.slidesToScroll) ? void(d.options.fade === !1 && (n = d.currentSlide, i !== !0 ? d.animateSlide(a, function () {
					d.postSlide(n)
				}) : d.postSlide(n))) : d.options.infinite === !1 && d.options.centerMode === !0 && (0 > t || t > d.slideCount - d.options.slidesToScroll) ? void(d.options.fade === !1 && (n = d.currentSlide, i !== !0 ? d.animateSlide(a, function () {
					d.postSlide(n)
				}) : d.postSlide(n))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), o = 0 > n ? d.slideCount % d.options.slidesToScroll !== 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + n : n >= d.slideCount ? d.slideCount % d.options.slidesToScroll !== 0 ? 0 : n - d.slideCount : n, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), s = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (r = d.getNavTarget(), r = r.slick("getSlick"), r.slideCount <= r.options.slidesToShow && r.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), d.options.fade === !0 ? (i !== !0 ? (d.fadeSlideOut(s), d.fadeSlide(o, function () {
					d.postSlide(o)
				})) : d.postSlide(o), void d.animateHeight()) : void(i !== !0 ? d.animateSlide(l, function () {
					d.postSlide(o)
				}) : d.postSlide(o))))
			}, e.prototype.startLoad = function () {
				var t = this;
				t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
			}, e.prototype.swipeDirection = function () {
				var t, e, i, n, o = this;
				return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
			}, e.prototype.swipeEnd = function (t) {
				var e, i, n = this;
				if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
				if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
					switch (i = n.swipeDirection()) {
						case "left":
						case "down":
							e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
							break;
						case "right":
						case "up":
							e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
					}
					"vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
				} else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
			}, e.prototype.swipeHandler = function (t) {
				var e = this;
				if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
					case "start":
						e.swipeStart(t);
						break;
					case "move":
						e.swipeMove(t);
						break;
					case "end":
						e.swipeEnd(t)
				}
			}, e.prototype.swipeMove = function (t) {
				var e, i, n, o, s, a = this;
				return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), i = a.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && t.preventDefault(), o = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), a.options.verticalSwiping === !0 && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o, a.options.verticalSwiping === !0 && (a.swipeLeft = e + n * o), a.options.fade !== !0 && a.options.touchMove !== !1 && (a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
			}, e.prototype.swipeStart = function (t) {
				var e, i = this;
				return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
			}, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
				var t = this;
				null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
			}, e.prototype.unload = function () {
				var e = this;
				t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
			}, e.prototype.unslick = function (t) {
				var e = this;
				e.$slider.trigger("unslick", [e, t]), e.destroy()
			}, e.prototype.updateArrows = function () {
				var t, e = this;
				t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
			}, e.prototype.updateDots = function () {
				var t = this;
				null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
			}, e.prototype.visibility = function () {
				var t = this;
				t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
			}, t.fn.slick = function () {
				var t, i, n = this,
					o = arguments[0],
					s = Array.prototype.slice.call(arguments, 1),
					a = n.length;
				for (t = 0; a > t; t++)
					if ("object" == typeof o || "undefined" == typeof o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, s), "undefined" != typeof i) return i;
				return n
			}
		})
	},
	78: 7,
	91: function (t, e, i) {
		"use strict";
		i(92),
			function ($, t, e, i) {
				var n = function (t, e) {
					this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
				};
				n.prototype = {
					init: function () {
						var e = this,
							i = e.el;
						return e.formatCount(), e.bindEvents(), t.COMS = t.COMS || [], i.attr("data-initialized", "true"), i.attr("data-guid", t.COMS.length), t.COMS.push(e), e
					},
					bindEvents: function () {
						var t = this;
						t.el
					},
					formatCount: function () {
						var t, e, i, n = this,
							o = n.el,
							s = o.find(".grid-paper-bd .count"),
							a = !1;
						s.length && (e = new Date, t = new Date(s.attr("data-publishDate").replace(/-/g, "/")), i = Math.round((e.getTime() - t.getTime()) / 6e4), i <= 60 * e.getHours() && (a = !0), a && (s.addClass("new"), s.find(".num").remove(), s.find(".text").text("NEW")))
					}
				}, $.fn.GridPaper = function (t) {
					var e;
					return this.each(function () {
						var i = $(this);
						"true" != i.attr("data-initialized") && (e = new n(i, t), e.init())
					})
				}
			}(window.jQuery || window.Zepto, window, document)
	},
	92: 7,
	98: function (t, e, i) {
		var n, o, s, o, n, a, o, n, r, n, l, o, d, o, c, o, h, o, p, o, n, u, o, f, n, g, o, n, v, o, m, n, y, n, o, s;
		/*!
		 * Packery PACKAGED v1.4.1
		 * bin-packing layout library
		 *
		 * Licensed GPLv3 for open source use
		 * or Flickity Commercial License for commercial use
		 *
		 * http://packery.metafizzy.co
		 * Copyright 2015 Metafizzy
		 */
		! function (a) {
			function r() {}

			function l($) {
				function t(t) {
					t.prototype.option || (t.prototype.option = function (t) {
						$.isPlainObject(t) && (this.options = $.extend(!0, this.options, t))
					})
				}

				function e(t, e) {
					$.fn[t] = function (n) {
						if ("string" == typeof n) {
							for (var o = d.call(arguments, 1), s = 0, a = this.length; s < a; s++) {
								var r = this[s],
									l = $.data(r, t);
								if (l)
									if ($.isFunction(l[n]) && "_" !== n.charAt(0)) {
										var c = l[n].apply(l, o);
										if (void 0 !== c) return c
									} else i("no such method '" + n + "' for " + t + " instance");
								else i("cannot call methods on " + t + " prior to initialization; attempted to call '" + n + "'")
							}
							return this
						}
						return this.each(function () {
							var i = $.data(this, t);
							i ? (i.option(n), i._init()) : (i = new e(this, n), $.data(this, t, i))
						})
					}
				}
				if ($) {
					var i = "undefined" == typeof console ? r : function (t) {
						console.error(t)
					};
					return $.bridget = function (i, n) {
						t(n), e(i, n)
					}, $.bridget
				}
			}
			var d = Array.prototype.slice;
			o = [i(1)], n = l, s = "function" == typeof n ? n.apply(e, o) : n, !(void 0 !== s && (t.exports = s))
		}(window),
		/*!
		 * classie v1.0.1
		 * class helper functions
		 * from bonzo https://github.com/ded/bonzo
		 * MIT license
		 * 
		 * classie.has( elem, 'my-class' ) -> true/false
		 * classie.add( elem, 'my-new-class' )
		 * classie.remove( elem, 'my-unwanted-class' )
		 * classie.toggle( elem, 'my-class' )
		 */
		function (o) {
			function s(t) {
				return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
			}

			function a(t, e) {
				var i = r(t, e) ? d : l;
				i(t, e)
			}
			var r, l, d;
			"classList" in document.documentElement ? (r = function (t, e) {
				return t.classList.contains(e)
			}, l = function (t, e) {
				t.classList.add(e)
			}, d = function (t, e) {
				t.classList.remove(e)
			}) : (r = function (t, e) {
				return s(e).test(t.className)
			}, l = function (t, e) {
				r(t, e) || (t.className = t.className + " " + e)
			}, d = function (t, e) {
				t.className = t.className.replace(s(e), " ")
			});
			var c = {
				hasClass: r,
				addClass: l,
				removeClass: d,
				toggleClass: a,
				has: r,
				add: l,
				remove: d,
				toggle: a
			};
			n = c, !(y = "function" == typeof n ? n.call(e, i, e, t) : n)
		}(window),
		/*!
		 * getStyleProperty v1.0.4
		 * original by kangax
		 * http://perfectionkills.com/feature-testing-css-properties/
		 * MIT license
		 */
		function (t) {
			function i(t) {
				if (t) {
					if ("string" == typeof s[t]) return t;
					t = t.charAt(0).toUpperCase() + t.slice(1);
					for (var e, i = 0, o = n.length; i < o; i++)
						if (e = n[i] + t, "string" == typeof s[e]) return e
				}
			}
			var n = "Webkit Moz ms Ms O".split(" "),
				s = document.documentElement.style;
			o = [], !(m = function () {
				return i
			}.apply(e, o))
		}(window),
		/*!
		 * getSize v1.2.2
		 * measure size of elements
		 * MIT license
		 */
		function (t, i) {
			function s(t) {
				var e = parseFloat(t),
					i = t.indexOf("%") === -1 && !isNaN(e);
				return i && e
			}

			function a() {}

			function r() {
				for (var t = {
						width: 0,
						height: 0,
						innerWidth: 0,
						innerHeight: 0,
						outerWidth: 0,
						outerHeight: 0
					}, e = 0, i = c.length; e < i; e++) {
					var n = c[e];
					t[n] = 0
				}
				return t
			}

			function l(e) {
				function i() {
					if (!p) {
						p = !0;
						var i = t.getComputedStyle;
						if (a = function () {
								var t = i ? function (t) {
									return i(t, null)
								} : function (t) {
									return t.currentStyle
								};
								return function (e) {
									var i = t(e);
									return i || d("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
								}
							}(), l = e("boxSizing")) {
							var n = document.createElement("div");
							n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style[l] = "border-box";
							var o = document.body || document.documentElement;
							o.appendChild(n);
							var r = a(n);
							h = 200 === s(r.width), o.removeChild(n)
						}
					}
				}

				function n(t) {
					if (i(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
						var e = a(t);
						if ("none" === e.display) return r();
						var n = {};
						n.width = t.offsetWidth, n.height = t.offsetHeight;
						for (var d = n.isBorderBox = !(!l || !e[l] || "border-box" !== e[l]), p = 0, u = c.length; p < u; p++) {
							var f = c[p],
								g = e[f];
							g = o(t, g);
							var v = parseFloat(g);
							n[f] = isNaN(v) ? 0 : v
						}
						var m = n.paddingLeft + n.paddingRight,
							y = n.paddingTop + n.paddingBottom,
							w = n.marginLeft + n.marginRight,
							b = n.marginTop + n.marginBottom,
							S = n.borderLeftWidth + n.borderRightWidth,
							k = n.borderTopWidth + n.borderBottomWidth,
							x = d && h,
							C = s(e.width);
						C !== !1 && (n.width = C + (x ? 0 : m + S));
						var T = s(e.height);
						return T !== !1 && (n.height = T + (x ? 0 : y + k)), n.innerWidth = n.width - (m + S), n.innerHeight = n.height - (y + k), n.outerWidth = n.width + w, n.outerHeight = n.height + b, n
					}
				}

				function o(e, i) {
					if (t.getComputedStyle || i.indexOf("%") === -1) return i;
					var n = e.style,
						o = n.left,
						s = e.runtimeStyle,
						a = s && s.left;
					return a && (s.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, a && (s.left = a), i
				}
				var a, l, h, p = !1;
				return n
			}
			var d = "undefined" == typeof console ? a : function (t) {
					console.error(t)
				},
				c = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
			o = [m], n = l, !(v = "function" == typeof n ? n.apply(e, o) : n)
		}(window),
		/*!
		 * eventie v1.0.6
		 * event binding helper
		 *   eventie.bind( elem, 'click', myFn )
		 *   eventie.unbind( elem, 'click', myFn )
		 * MIT license
		 */
		function (o) {
			function s(t) {
				var e = o.event;
				return e.target = e.target || e.srcElement || t, e
			}
			var a = document.documentElement,
				r = function () {};
			a.addEventListener ? r = function (t, e, i) {
				t.addEventListener(e, i, !1)
			} : a.attachEvent && (r = function (t, e, i) {
				t[e + i] = i.handleEvent ? function () {
					var e = s(t);
					i.handleEvent.call(i, e)
				} : function () {
					var e = s(t);
					i.call(t, e)
				}, t.attachEvent("on" + e, t[e + i])
			});
			var l = function () {};
			a.removeEventListener ? l = function (t, e, i) {
				t.removeEventListener(e, i, !1)
			} : a.detachEvent && (l = function (t, e, i) {
				t.detachEvent("on" + e, t[e + i]);
				try {
					delete t[e + i]
				} catch (n) {
					t[e + i] = void 0
				}
			});
			var d = {
				bind: r,
				unbind: l
			};
			n = d, !(g = "function" == typeof n ? n.call(e, i, e, t) : n)
		}(window),
		function () {
			function t() {}

			function e(t, e) {
				for (var i = t.length; i--;)
					if (t[i].listener === e) return i;
				return -1
			}

			function i(t) {
				return function () {
					return this[t].apply(this, arguments)
				}
			}
			var n = t.prototype,
				s = this,
				a = s.EventEmitter;
			n.getListeners = function (t) {
				var e, i, n = this._getEvents();
				if (t instanceof RegExp) {
					e = {};
					for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
				} else e = n[t] || (n[t] = []);
				return e
			}, n.flattenListeners = function (t) {
				var e, i = [];
				for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
				return i
			}, n.getListenersAsObject = function (t) {
				var e, i = this.getListeners(t);
				return i instanceof Array && (e = {}, e[t] = i), e || i
			}, n.addListener = function (t, i) {
				var n, o = this.getListenersAsObject(t),
					s = "object" == typeof i;
				for (n in o) o.hasOwnProperty(n) && e(o[n], i) === -1 && o[n].push(s ? i : {
					listener: i,
					once: !1
				});
				return this
			}, n.on = i("addListener"), n.addOnceListener = function (t, e) {
				return this.addListener(t, {
					listener: e,
					once: !0
				})
			}, n.once = i("addOnceListener"), n.defineEvent = function (t) {
				return this.getListeners(t), this
			}, n.defineEvents = function (t) {
				for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
				return this
			}, n.removeListener = function (t, i) {
				var n, o, s = this.getListenersAsObject(t);
				for (o in s) s.hasOwnProperty(o) && (n = e(s[o], i), n !== -1 && s[o].splice(n, 1));
				return this
			}, n.off = i("removeListener"), n.addListeners = function (t, e) {
				return this.manipulateListeners(!1, t, e)
			}, n.removeListeners = function (t, e) {
				return this.manipulateListeners(!0, t, e)
			}, n.manipulateListeners = function (t, e, i) {
				var n, o, s = t ? this.removeListener : this.addListener,
					a = t ? this.removeListeners : this.addListeners;
				if ("object" != typeof e || e instanceof RegExp)
					for (n = i.length; n--;) s.call(this, e, i[n]);
				else
					for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : a.call(this, n, o));
				return this
			}, n.removeEvent = function (t) {
				var e, i = typeof t,
					n = this._getEvents();
				if ("string" === i) delete n[t];
				else if (t instanceof RegExp)
					for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
				else delete this._events;
				return this
			}, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
				var i, n, o, s, a = this.getListenersAsObject(t);
				for (o in a)
					if (a.hasOwnProperty(o))
						for (n = a[o].length; n--;) i = a[o][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
				return this
			}, n.trigger = i("emitEvent"), n.emit = function (t) {
				var e = Array.prototype.slice.call(arguments, 1);
				return this.emitEvent(t, e)
			}, n.setOnceReturnValue = function (t) {
				return this._onceReturnValue = t, this
			}, n._getOnceReturnValue = function () {
				return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
			}, n._getEvents = function () {
				return this._events || (this._events = {})
			}, t.noConflict = function () {
				return s.EventEmitter = a, t
			}, o = [], !(f = function () {
				return t
			}.apply(s, o))
		}.call(this),
			/*!
			 * docReady v1.0.4
			 * Cross browser DOMContentLoaded event emitter
			 * MIT license
			 */
			function (t) {
				function i(t) {
					"function" == typeof t && (i.isReady ? t() : d.push(t))
				}

				function s(t) {
					var e = "readystatechange" === t.type && "complete" !== l.readyState;
					i.isReady || e || a()
				}

				function a() {
					i.isReady = !0;
					for (var t = 0, e = d.length; t < e; t++) {
						var n = d[t];
						n()
					}
				}

				function r(e) {
					return "complete" === l.readyState ? a() : (e.bind(l, "DOMContentLoaded", s), e.bind(l, "readystatechange", s), e.bind(t, "load", s)), i
				}
				var l = t.document,
					d = [];
				i.isReady = !1, o = [g], n = r, !(u = "function" == typeof n ? n.apply(e, o) : n)
			}(window),
			function (t) {
				function i(t, e) {
					return t[l](e)
				}

				function n(t) {
					if (!t.parentNode) {
						var e = document.createDocumentFragment();
						e.appendChild(t)
					}
				}

				function s(t, e) {
					n(t);
					for (var i = t.parentNode.querySelectorAll(e), o = 0, s = i.length; o < s; o++)
						if (i[o] === t) return !0;
					return !1
				}

				function a(t, e) {
					return n(t), i(t, e)
				}
				var r, l = function () {
					if (t.matches) return "matches";
					if (t.matchesSelector) return "matchesSelector";
					for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; i < n; i++) {
						var o = e[i],
							s = o + "MatchesSelector";
						if (t[s]) return s
					}
				}();
				if (l) {
					var d = document.createElement("div"),
						c = i(d, "div");
					r = c ? i : a
				} else r = s;
				o = [], !(p = function () {
					return r
				}.apply(e, o))
			}(Element.prototype),
			function (t, i) {
				o = [u, p], !(h = function (e, n) {
					return i(t, e, n)
				}.apply(e, o))
			}(window, function (t, e, i) {
				var n = {};
				n.extend = function (t, e) {
					for (var i in e) t[i] = e[i];
					return t
				}, n.modulo = function (t, e) {
					return (t % e + e) % e
				};
				var o = Object.prototype.toString;
				n.isArray = function (t) {
					return "[object Array]" == o.call(t)
				}, n.makeArray = function (t) {
					var e = [];
					if (n.isArray(t)) e = t;
					else if (t && "number" == typeof t.length)
						for (var i = 0, o = t.length; i < o; i++) e.push(t[i]);
					else e.push(t);
					return e
				}, n.indexOf = Array.prototype.indexOf ? function (t, e) {
					return t.indexOf(e)
				} : function (t, e) {
					for (var i = 0, n = t.length; i < n; i++)
						if (t[i] === e) return i;
					return -1
				}, n.removeFrom = function (t, e) {
					var i = n.indexOf(t, e);
					i != -1 && t.splice(i, 1)
				}, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
					return t instanceof HTMLElement
				} : function (t) {
					return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
				}, n.setText = function () {
					function t(t, i) {
						e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
					}
					var e;
					return t
				}(), n.getParent = function (t, e) {
					for (; t != document.body;)
						if (t = t.parentNode, i(t, e)) return t
				}, n.getQueryElement = function (t) {
					return "string" == typeof t ? document.querySelector(t) : t
				}, n.handleEvent = function (t) {
					var e = "on" + t.type;
					this[e] && this[e](t)
				}, n.filterFindElements = function (t, e) {
					t = n.makeArray(t);
					for (var o = [], s = 0, a = t.length; s < a; s++) {
						var r = t[s];
						if (n.isElement(r))
							if (e) {
								i(r, e) && o.push(r);
								for (var l = r.querySelectorAll(e), d = 0, c = l.length; d < c; d++) o.push(l[d])
							} else o.push(r)
					}
					return o
				}, n.debounceMethod = function (t, e, i) {
					var n = t.prototype[e],
						o = e + "Timeout";
					t.prototype[e] = function () {
						var t = this[o];
						t && clearTimeout(t);
						var e = arguments,
							s = this;
						this[o] = setTimeout(function () {
							n.apply(s, e), delete s[o]
						}, i || 100)
					}
				}, n.toDashed = function (t) {
					return t.replace(/(.)([A-Z])/g, function (t, e, i) {
						return e + "-" + i
					}).toLowerCase()
				};
				var s = t.console;
				return n.htmlInit = function (i, o) {
					e(function () {
						for (var e = n.toDashed(o), a = document.querySelectorAll(".js-" + e), r = "data-" + e + "-options", l = 0, d = a.length; l < d; l++) {
							var c, h = a[l],
								p = h.getAttribute(r);
							try {
								c = p && JSON.parse(p)
							} catch (t) {
								s && s.error("Error parsing " + r + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + t);
								continue
							}
							var u = new i(h, c),
								jQuery = t.jQuery;
							jQuery && jQuery.data(h, o, u)
						}
					})
				}, n
			}),
			function (t, i) {
				o = [f, v, m, h], !(c = function (e, n, o, s) {
					return i(t, e, n, o, s)
				}.apply(e, o))
			}(window, function (t, e, i, n, o) {
				function s(t) {
					for (var e in t) return !1;
					return e = null, !0
				}

				function a(t, e) {
					t && (this.element = t, this.layout = e, this.position = {
						x: 0,
						y: 0
					}, this._create())
				}
				var r = t.getComputedStyle,
					l = r ? function (t) {
						return r(t, null)
					} : function (t) {
						return t.currentStyle
					},
					d = n("transition"),
					c = n("transform"),
					h = d && c,
					p = !!n("perspective"),
					u = {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "otransitionend",
						transition: "transitionend"
					} [d],
					f = ["transform", "transition", "transitionDuration", "transitionProperty"],
					g = function () {
						for (var t = {}, e = 0, i = f.length; e < i; e++) {
							var o = f[e],
								s = n(o);
							s && s !== o && (t[o] = s)
						}
						return t
					}();
				o.extend(a.prototype, e.prototype), a.prototype._create = function () {
					this._transn = {
						ingProperties: {},
						clean: {},
						onEnd: {}
					}, this.css({
						position: "absolute"
					})
				}, a.prototype.handleEvent = function (t) {
					var e = "on" + t.type;
					this[e] && this[e](t)
				}, a.prototype.getSize = function () {
					this.size = i(this.element)
				}, a.prototype.css = function (t) {
					var e = this.element.style;
					for (var i in t) {
						var n = g[i] || i;
						e[n] = t[i]
					}
				}, a.prototype.getPosition = function () {
					var t = l(this.element),
						e = this.layout.options,
						i = e.isOriginLeft,
						n = e.isOriginTop,
						o = parseInt(t[i ? "left" : "right"], 10),
						s = parseInt(t[n ? "top" : "bottom"], 10);
					o = isNaN(o) ? 0 : o, s = isNaN(s) ? 0 : s;
					var a = this.layout.size;
					o -= i ? a.paddingLeft : a.paddingRight, s -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = s
				}, a.prototype.layoutPosition = function () {
					var t = this.layout.size,
						e = this.layout.options,
						i = {},
						n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
						o = e.isOriginLeft ? "left" : "right",
						s = e.isOriginLeft ? "right" : "left",
						a = this.position.x + t[n];
					a = e.percentPosition && !e.isHorizontal ? a / t.width * 100 + "%" : a + "px", i[o] = a, i[s] = "";
					var r = e.isOriginTop ? "paddingTop" : "paddingBottom",
						l = e.isOriginTop ? "top" : "bottom",
						d = e.isOriginTop ? "bottom" : "top",
						c = this.position.y + t[r];
					c = e.percentPosition && e.isHorizontal ? c / t.height * 100 + "%" : c + "px", i[l] = c, i[d] = "", this.css(i), this.emitEvent("layout", [this])
				};
				var v = p ? function (t, e) {
					return "translate3d(" + t + "px, " + e + "px, 0)"
				} : function (t, e) {
					return "translate(" + t + "px, " + e + "px)"
				};
				a.prototype._transitionTo = function (t, e) {
					this.getPosition();
					var i = this.position.x,
						n = this.position.y,
						o = parseInt(t, 10),
						s = parseInt(e, 10),
						a = o === this.position.x && s === this.position.y;
					if (this.setPosition(t, e), a && !this.isTransitioning) return void this.layoutPosition();
					var r = t - i,
						l = e - n,
						d = {},
						c = this.layout.options;
					r = c.isOriginLeft ? r : -r, l = c.isOriginTop ? l : -l, d.transform = v(r, l), this.transition({
						to: d,
						onTransitionEnd: {
							transform: this.layoutPosition
						},
						isCleaning: !0
					})
				}, a.prototype.goTo = function (t, e) {
					this.setPosition(t, e), this.layoutPosition()
				}, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
					this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
				}, a.prototype._nonTransition = function (t) {
					this.css(t.to), t.isCleaning && this._removeStyles(t.to);
					for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
				}, a.prototype._transition = function (t) {
					if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
					var e = this._transn;
					for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
					for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
					if (t.from) {
						this.css(t.from);
						var n = this.element.offsetHeight;
						n = null
					}
					this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
				};
				var m = c && o.toDashed(c) + ",opacity";
				a.prototype.enableTransition = function () {
					this.isTransitioning || (this.css({
						transitionProperty: m,
						transitionDuration: this.layout.options.transitionDuration
					}), this.element.addEventListener(u, this, !1))
				}, a.prototype.transition = a.prototype[d ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
					this.ontransitionend(t)
				}, a.prototype.onotransitionend = function (t) {
					this.ontransitionend(t)
				};
				var y = {
					"-webkit-transform": "transform",
					"-moz-transform": "transform",
					"-o-transform": "transform"
				};
				a.prototype.ontransitionend = function (t) {
					if (t.target === this.element) {
						var e = this._transn,
							i = y[t.propertyName] || t.propertyName;
						if (delete e.ingProperties[i], s(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
							var n = e.onEnd[i];
							n.call(this), delete e.onEnd[i]
						}
						this.emitEvent("transitionEnd", [this])
					}
				}, a.prototype.disableTransition = function () {
					this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
				}, a.prototype._removeStyles = function (t) {
					var e = {};
					for (var i in t) e[i] = "";
					this.css(e)
				};
				var w = {
					transitionProperty: "",
					transitionDuration: ""
				};
				return a.prototype.removeTransitionStyles = function () {
					this.css(w)
				}, a.prototype.removeElem = function () {
					this.element.parentNode.removeChild(this.element), this.css({
						display: ""
					}), this.emitEvent("remove", [this])
				}, a.prototype.remove = function () {
					if (!d || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
					var t = this;
					this.once("transitionEnd", function () {
						t.removeElem()
					}), this.hide()
				}, a.prototype.reveal = function () {
					delete this.isHidden, this.css({
						display: ""
					});
					var t = this.layout.options,
						e = {},
						i = this.getHideRevealTransitionEndProperty("visibleStyle");
					e[i] = this.onRevealTransitionEnd, this.transition({
						from: t.hiddenStyle,
						to: t.visibleStyle,
						isCleaning: !0,
						onTransitionEnd: e
					})
				}, a.prototype.onRevealTransitionEnd = function () {
					this.isHidden || this.emitEvent("reveal")
				}, a.prototype.getHideRevealTransitionEndProperty = function (t) {
					var e = this.layout.options[t];
					if (e.opacity) return "opacity";
					for (var i in e) return i
				}, a.prototype.hide = function () {
					this.isHidden = !0, this.css({
						display: ""
					});
					var t = this.layout.options,
						e = {},
						i = this.getHideRevealTransitionEndProperty("hiddenStyle");
					e[i] = this.onHideTransitionEnd, this.transition({
						from: t.visibleStyle,
						to: t.hiddenStyle,
						isCleaning: !0,
						onTransitionEnd: e
					})
				}, a.prototype.onHideTransitionEnd = function () {
					this.isHidden && (this.css({
						display: "none"
					}), this.emitEvent("hide"))
				}, a.prototype.destroy = function () {
					this.css({
						position: "",
						left: "",
						right: "",
						top: "",
						bottom: "",
						transition: "",
						transform: ""
					})
				}, a
			}),
			/*!
			 * Outlayer v1.4.0
			 * the brains and guts of a layout library
			 * MIT license
			 */
			function (t, i) {
				o = [g, f, v, h, c], !(d = function (e, n, o, s, a) {
					return i(t, e, n, o, s, a)
				}.apply(e, o))
			}(window, function (t, e, i, n, o, s) {
				function a(t, e) {
					var i = o.getQueryElement(t);
					if (!i) return void(r && r.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
					this.element = i, jQuery && (this.$element = jQuery(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
					var n = ++d;
					this.element.outlayerGUID = n, c[n] = this, this._create(), this.options.isInitLayout && this.layout()
				}
				var r = t.console,
					jQuery = t.jQuery,
					l = function () {},
					d = 0,
					c = {};
				return a.namespace = "outlayer", a.Item = s, a.defaults = {
					containerStyle: {
						position: "relative"
					},
					isInitLayout: !0,
					isOriginLeft: !0,
					isOriginTop: !0,
					isResizeBound: !0,
					isResizingContainer: !0,
					transitionDuration: "0.4s",
					hiddenStyle: {
						opacity: 0,
						transform: "scale(0.001)"
					},
					visibleStyle: {
						opacity: 1,
						transform: "scale(1)"
					}
				}, o.extend(a.prototype, i.prototype), a.prototype.option = function (t) {
					o.extend(this.options, t)
				}, a.prototype._create = function () {
					this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
				}, a.prototype.reloadItems = function () {
					this.items = this._itemize(this.element.children)
				}, a.prototype._itemize = function (t) {
					for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, s = e.length; o < s; o++) {
						var a = e[o],
							r = new i(a, this);
						n.push(r)
					}
					return n
				}, a.prototype._filterFindItemElements = function (t) {
					return o.filterFindElements(t, this.options.itemSelector)
				}, a.prototype.getItemElements = function () {
					for (var t = [], e = 0, i = this.items.length; e < i; e++) t.push(this.items[e].element);
					return t
				}, a.prototype.layout = function () {
					this._resetLayout(), this._manageStamps();
					var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
					this.layoutItems(this.items, t), this._isLayoutInited = !0
				}, a.prototype._init = a.prototype.layout, a.prototype._resetLayout = function () {
					this.getSize()
				}, a.prototype.getSize = function () {
					this.size = n(this.element)
				}, a.prototype._getMeasurement = function (t, e) {
					var i, s = this.options[t];
					s ? ("string" == typeof s ? i = this.element.querySelector(s) : o.isElement(s) && (i = s), this[t] = i ? n(i)[e] : s) : this[t] = 0
				}, a.prototype.layoutItems = function (t, e) {
					t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
				}, a.prototype._getItemsForLayout = function (t) {
					for (var e = [], i = 0, n = t.length; i < n; i++) {
						var o = t[i];
						o.isIgnored || e.push(o)
					}
					return e
				}, a.prototype._layoutItems = function (t, e) {
					if (this._emitCompleteOnItems("layout", t), t && t.length) {
						for (var i = [], n = 0, o = t.length; n < o; n++) {
							var s = t[n],
								a = this._getItemLayoutPosition(s);
							a.item = s, a.isInstant = e || s.isLayoutInstant, i.push(a)
						}
						this._processLayoutQueue(i)
					}
				}, a.prototype._getItemLayoutPosition = function () {
					return {
						x: 0,
						y: 0
					}
				}, a.prototype._processLayoutQueue = function (t) {
					for (var e = 0, i = t.length; e < i; e++) {
						var n = t[e];
						this._positionItem(n.item, n.x, n.y, n.isInstant)
					}
				}, a.prototype._positionItem = function (t, e, i, n) {
					n ? t.goTo(e, i) : t.moveTo(e, i)
				}, a.prototype._postLayout = function () {
					this.resizeContainer()
				}, a.prototype.resizeContainer = function () {
					if (this.options.isResizingContainer) {
						var t = this._getContainerSize();
						t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
					}
				}, a.prototype._getContainerSize = l, a.prototype._setContainerMeasure = function (t, e) {
					if (void 0 !== t) {
						var i = this.size;
						i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
					}
				}, a.prototype._emitCompleteOnItems = function (t, e) {
					function i() {
						o.emitEvent(t + "Complete", [e])
					}

					function n() {
						a++, a === s && i()
					}
					var o = this,
						s = e.length;
					if (!e || !s) return void i();
					for (var a = 0, r = 0, l = e.length; r < l; r++) {
						var d = e[r];
						d.once(t, n)
					}
				}, a.prototype.ignore = function (t) {
					var e = this.getItem(t);
					e && (e.isIgnored = !0)
				}, a.prototype.unignore = function (t) {
					var e = this.getItem(t);
					e && delete e.isIgnored
				}, a.prototype.stamp = function (t) {
					if (t = this._find(t)) {
						this.stamps = this.stamps.concat(t);
						for (var e = 0, i = t.length; e < i; e++) {
							var n = t[e];
							this.ignore(n)
						}
					}
				}, a.prototype.unstamp = function (t) {
					if (t = this._find(t))
						for (var e = 0, i = t.length; e < i; e++) {
							var n = t[e];
							o.removeFrom(this.stamps, n), this.unignore(n)
						}
				}, a.prototype._find = function (t) {
					if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
				}, a.prototype._manageStamps = function () {
					if (this.stamps && this.stamps.length) {
						this._getBoundingRect();
						for (var t = 0, e = this.stamps.length; t < e; t++) {
							var i = this.stamps[t];
							this._manageStamp(i)
						}
					}
				}, a.prototype._getBoundingRect = function () {
					var t = this.element.getBoundingClientRect(),
						e = this.size;
					this._boundingRect = {
						left: t.left + e.paddingLeft + e.borderLeftWidth,
						top: t.top + e.paddingTop + e.borderTopWidth,
						right: t.right - (e.paddingRight + e.borderRightWidth),
						bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
					}
				}, a.prototype._manageStamp = l, a.prototype._getElementOffset = function (t) {
					var e = t.getBoundingClientRect(),
						i = this._boundingRect,
						o = n(t),
						s = {
							left: e.left - i.left - o.marginLeft,
							top: e.top - i.top - o.marginTop,
							right: i.right - e.right - o.marginRight,
							bottom: i.bottom - e.bottom - o.marginBottom
						};
					return s
				}, a.prototype.handleEvent = function (t) {
					var e = "on" + t.type;
					this[e] && this[e](t)
				}, a.prototype.bindResize = function () {
					this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
				}, a.prototype.unbindResize = function () {
					this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
				}, a.prototype.onresize = function () {
					function t() {
						e.resize(), delete e.resizeTimeout
					}
					this.resizeTimeout && clearTimeout(this.resizeTimeout);
					var e = this;
					this.resizeTimeout = setTimeout(t, 100)
				}, a.prototype.resize = function () {
					this.isResizeBound && this.needsResizeLayout() && this.layout()
				}, a.prototype.needsResizeLayout = function () {
					var t = n(this.element),
						e = this.size && t;
					return e && t.innerWidth !== this.size.innerWidth
				}, a.prototype.addItems = function (t) {
					var e = this._itemize(t);
					return e.length && (this.items = this.items.concat(e)), e
				}, a.prototype.appended = function (t) {
					var e = this.addItems(t);
					e.length && (this.layoutItems(e, !0), this.reveal(e))
				}, a.prototype.prepended = function (t) {
					var e = this._itemize(t);
					if (e.length) {
						var i = this.items.slice(0);
						this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
					}
				}, a.prototype.reveal = function (t) {
					this._emitCompleteOnItems("reveal", t);
					for (var e = t && t.length, i = 0; e && i < e; i++) {
						var n = t[i];
						n.reveal()
					}
				}, a.prototype.hide = function (t) {
					this._emitCompleteOnItems("hide", t);
					for (var e = t && t.length, i = 0; e && i < e; i++) {
						var n = t[i];
						n.hide()
					}
				}, a.prototype.revealItemElements = function (t) {
					var e = this.getItems(t);
					this.reveal(e)
				}, a.prototype.hideItemElements = function (t) {
					var e = this.getItems(t);
					this.hide(e)
				}, a.prototype.getItem = function (t) {
					for (var e = 0, i = this.items.length; e < i; e++) {
						var n = this.items[e];
						if (n.element === t) return n
					}
				}, a.prototype.getItems = function (t) {
					t = o.makeArray(t);
					for (var e = [], i = 0, n = t.length; i < n; i++) {
						var s = t[i],
							a = this.getItem(s);
						a && e.push(a)
					}
					return e
				}, a.prototype.remove = function (t) {
					var e = this.getItems(t);
					if (this._emitCompleteOnItems("remove", e), e && e.length)
						for (var i = 0, n = e.length; i < n; i++) {
							var s = e[i];
							s.remove(), o.removeFrom(this.items, s)
						}
				}, a.prototype.destroy = function () {
					var t = this.element.style;
					t.height = "", t.position = "", t.width = "";
					for (var e = 0, i = this.items.length; e < i; e++) {
						var n = this.items[e];
						n.destroy()
					}
					this.unbindResize();
					var o = this.element.outlayerGUID;
					delete c[o], delete this.element.outlayerGUID, jQuery && jQuery.removeData(this.element, this.constructor.namespace)
				}, a.data = function (t) {
					t = o.getQueryElement(t);
					var e = t && t.outlayerGUID;
					return e && c[e]
				}, a.create = function (t, e) {
					function i() {
						a.apply(this, arguments)
					}
					return Object.create ? i.prototype = Object.create(a.prototype) : o.extend(i.prototype, a.prototype), i.prototype.constructor = i, i.defaults = o.extend({}, a.defaults), o.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = a.data, i.Item = function () {
						s.apply(this, arguments)
					}, i.Item.prototype = new s, o.htmlInit(i, t), jQuery && jQuery.bridget && jQuery.bridget(t, i), i
				}, a.Item = s, a
			}),
			function (o, s) {
				n = s, !(l = "function" == typeof n ? n.call(e, i, e, t) : n)
			}(window, function () {
				function t(e) {
					for (var i in t.defaults) this[i] = t.defaults[i];
					for (i in e) this[i] = e[i]
				}
				var e = window.Packery = function () {};
				return e.Rect = t, t.defaults = {
					x: 0,
					y: 0,
					width: 0,
					height: 0
				}, t.prototype.contains = function (t) {
					var e = t.width || 0,
						i = t.height || 0;
					return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
				}, t.prototype.overlaps = function (t) {
					var e = this.x + this.width,
						i = this.y + this.height,
						n = t.x + t.width,
						o = t.y + t.height;
					return this.x < n && e > t.x && this.y < o && i > t.y
				}, t.prototype.getMaximalFreeRects = function (e) {
					if (!this.overlaps(e)) return !1;
					var i, n = [],
						o = this.x + this.width,
						s = this.y + this.height,
						a = e.x + e.width,
						r = e.y + e.height;
					return this.y < e.y && (i = new t({
						x: this.x,
						y: this.y,
						width: this.width,
						height: e.y - this.y
					}), n.push(i)), o > a && (i = new t({
						x: a,
						y: this.y,
						width: o - a,
						height: this.height
					}), n.push(i)), s > r && (i = new t({
						x: this.x,
						y: r,
						width: this.width,
						height: s - r
					}), n.push(i)), this.x < e.x && (i = new t({
						x: this.x,
						y: this.y,
						width: e.x - this.x,
						height: this.height
					}), n.push(i)), n
				}, t.prototype.canFit = function (t) {
					return this.width >= t.width && this.height >= t.height
				}, t
			}),
			function (t, i) {
				o = [l], n = i, !(r = "function" == typeof n ? n.apply(e, o) : n)
			}(window, function (t) {
				function e(t, e, i) {
					this.width = t || 0, this.height = e || 0, this.sortDirection = i || "downwardLeftToRight", this.reset()
				}
				e.prototype.reset = function () {
					this.spaces = [], this.newSpaces = [];
					var e = new t({
						x: 0,
						y: 0,
						width: this.width,
						height: this.height
					});
					this.spaces.push(e), this.sorter = i[this.sortDirection] || i.downwardLeftToRight
				}, e.prototype.pack = function (t) {
					for (var e = 0, i = this.spaces.length; e < i; e++) {
						var n = this.spaces[e];
						if (n.canFit(t)) {
							this.placeInSpace(t, n);
							break
						}
					}
				}, e.prototype.placeInSpace = function (t, e) {
					t.x = e.x, t.y = e.y, this.placed(t)
				}, e.prototype.placed = function (t) {
					for (var e = [], i = 0, n = this.spaces.length; i < n; i++) {
						var o = this.spaces[i],
							s = o.getMaximalFreeRects(t);
						s ? e.push.apply(e, s) : e.push(o)
					}
					this.spaces = e, this.mergeSortSpaces()
				}, e.prototype.mergeSortSpaces = function () {
					e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
				}, e.prototype.addSpace = function (t) {
					this.spaces.push(t), this.mergeSortSpaces()
				}, e.mergeRects = function (t) {
					for (var e = 0, i = t.length; e < i; e++) {
						var n = t[e];
						if (n) {
							var o = t.slice(0);
							o.splice(e, 1);
							for (var s = 0, a = 0, r = o.length; a < r; a++) {
								var l = o[a],
									d = e > a ? 0 : 1;
								n.contains(l) && (t.splice(a + d - s, 1), s++)
							}
						}
					}
					return t
				};
				var i = {
					downwardLeftToRight: function (t, e) {
						return t.y - e.y || t.x - e.x
					},
					rightwardTopToBottom: function (t, e) {
						return t.x - e.x || t.y - e.y
					}
				};
				return e
			}),
			function (t, i) {
				o = [m, d, l], n = i, !(a = "function" == typeof n ? n.apply(e, o) : n)
			}(window, function (t, e, i) {
				var n = t("transform"),
					o = function () {
						e.Item.apply(this, arguments)
					};
				o.prototype = new e.Item;
				var s = o.prototype._create;
				return o.prototype._create = function () {
					s.call(this), this.rect = new i, this.placeRect = new i
				}, o.prototype.dragStart = function () {
					this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
				}, o.prototype.dragMove = function (t, e) {
					this.didDrag = !0;
					var i = this.layout.size;
					t -= i.paddingLeft, e -= i.paddingTop, this.positionPlaceRect(t, e)
				}, o.prototype.dragStop = function () {
					this.getPosition();
					var t = this.position.x != this.placeRect.x,
						e = this.position.y != this.placeRect.y;
					this.needsPositioning = t || e, this.didDrag = !1
				}, o.prototype.positionPlaceRect = function (t, e, i) {
					this.placeRect.x = this.getPlaceRectCoord(t, !0), this.placeRect.y = this.getPlaceRectCoord(e, !1, i)
				}, o.prototype.getPlaceRectCoord = function (t, e, i) {
					var n = e ? "Width" : "Height",
						o = this.size["outer" + n],
						s = this.layout[e ? "columnWidth" : "rowHeight"],
						a = this.layout.size["inner" + n];
					e || (a = Math.max(a, this.layout.maxY), this.layout.rowHeight || (a -= this.layout.gutter));
					var r;
					if (s) {
						s += this.layout.gutter, a += e ? this.layout.gutter : 0, t = Math.round(t / s);
						var l;
						l = this.layout.options.isHorizontal ? e ? "ceil" : "floor" : e ? "floor" : "ceil";
						var d = Math[l](a / s);
						d -= Math.ceil(o / s), r = d
					} else r = a - o;
					return t = i ? t : Math.min(t, r), t *= s || 1, Math.max(0, t)
				}, o.prototype.copyPlaceRectPosition = function () {
					this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
				}, o.prototype.removeElem = function () {
					this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
				}, o
			}),
			/*!
			 * Packery v1.4.1
			 * bin-packing layout library
			 *
			 * Licensed GPLv3 for open source use
			 * or Flickity Commercial License for commercial use
			 *
			 * http://packery.metafizzy.co
			 * Copyright 2015 Metafizzy
			 */
			function (i, c) {
				o = [y, v, d, l, r, a], n = c, s = "function" == typeof n ? n.apply(e, o) : n, !(void 0 !== s && (t.exports = s))
			}(window, function (t, e, i, n, o, s) {
				function a(t, e) {
					return t.position.y - e.position.y || t.position.x - e.position.x
				}

				function r(t, e) {
					return t.position.x - e.position.x || t.position.y - e.position.y
				}
				n.prototype.canFit = function (t) {
					return this.width >= t.width - 1 && this.height >= t.height - 1
				};
				var l = i.create("packery");
				return l.Item = s, l.prototype._create = function () {
					i.prototype._create.call(this), this.packer = new o, this.stamp(this.options.stamped);
					var t = this;
					this.handleDraggabilly = {
						dragStart: function () {
							t.itemDragStart(this.element)
						},
						dragMove: function () {
							t.itemDragMove(this.element, this.position.x, this.position.y)
						},
						dragEnd: function () {
							t.itemDragEnd(this.element)
						}
					}, this.handleUIDraggable = {
						start: function (e) {
							t.itemDragStart(e.currentTarget)
						},
						drag: function (e, i) {
							t.itemDragMove(e.currentTarget, i.position.left, i.position.top)
						},
						stop: function (e) {
							t.itemDragEnd(e.currentTarget)
						}
					}
				}, l.prototype._resetLayout = function () {
					this.getSize(), this._getMeasurements();
					var t = this.packer;
					this.options.isHorizontal ? (t.width = Number.POSITIVE_INFINITY, t.height = this.size.innerHeight + this.gutter, t.sortDirection = "rightwardTopToBottom") : (t.width = this.size.innerWidth + this.gutter, t.height = Number.POSITIVE_INFINITY, t.sortDirection = "downwardLeftToRight"), t.reset(), this.maxY = 0, this.maxX = 0
				}, l.prototype._getMeasurements = function () {
					this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
				}, l.prototype._getItemLayoutPosition = function (t) {
					return this._packItem(t), t.rect
				}, l.prototype._packItem = function (t) {
					this._setRectSize(t.element, t.rect), this.packer.pack(t.rect), this._setMaxXY(t.rect)
				}, l.prototype._setMaxXY = function (t) {
					this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
				}, l.prototype._setRectSize = function (t, i) {
					var n = e(t),
						o = n.outerWidth,
						s = n.outerHeight;
					(o || s) && (o = this._applyGridGutter(o, this.columnWidth), s = this._applyGridGutter(s, this.rowHeight)), i.width = Math.min(o, this.packer.width), i.height = Math.min(s, this.packer.height)
				}, l.prototype._applyGridGutter = function (t, e) {
					if (!e) return t + this.gutter;
					e += this.gutter;
					var i = t % e,
						n = i && i < 1 ? "round" : "ceil";
					return t = Math[n](t / e) * e
				}, l.prototype._getContainerSize = function () {
					return this.options.isHorizontal ? {
						width: this.maxX - this.gutter
					} : {
						height: this.maxY - this.gutter
					}
				}, l.prototype._manageStamp = function (t) {
					var e, i = this.getItem(t);
					if (i && i.isPlacing) e = i.placeRect;
					else {
						var o = this._getElementOffset(t);
						e = new n({
							x: this.options.isOriginLeft ? o.left : o.right,
							y: this.options.isOriginTop ? o.top : o.bottom
						})
					}
					this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
				}, l.prototype.sortItemsByPosition = function () {
					var t = this.options.isHorizontal ? r : a;
					this.items.sort(t)
				}, l.prototype.fit = function (t, e, i) {
					var n = this.getItem(t);
					n && (this._getMeasurements(), this.stamp(n.element), n.getSize(), n.isPlacing = !0, e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, n.positionPlaceRect(e, i, !0), this._bindFitEvents(n), n.moveTo(n.placeRect.x, n.placeRect.y), this.layout(), this.unstamp(n.element), this.sortItemsByPosition(), n.isPlacing = !1, n.copyPlaceRectPosition())
				}, l.prototype._bindFitEvents = function (t) {
					function e() {
						n++, 2 == n && i.emitEvent("fitComplete", [t])
					}
					var i = this,
						n = 0;
					t.on("layout", function () {
						return e(), !0
					}), this.on("layoutComplete", function () {
						return e(), !0
					})
				}, l.prototype.resize = function () {
					var t = e(this.element),
						i = this.size && t,
						n = this.options.isHorizontal ? "innerHeight" : "innerWidth";
					i && t[n] == this.size[n] || this.layout()
				}, l.prototype.itemDragStart = function (t) {
					this.stamp(t);
					var e = this.getItem(t);
					e && e.dragStart()
				}, l.prototype.itemDragMove = function (t, e, i) {
					function n() {
						s.layout(), delete s.dragTimeout
					}
					var o = this.getItem(t);
					o && o.dragMove(e, i);
					var s = this;
					this.clearDragTimeout(), this.dragTimeout = setTimeout(n, 40)
				}, l.prototype.clearDragTimeout = function () {
					this.dragTimeout && clearTimeout(this.dragTimeout)
				}, l.prototype.itemDragEnd = function (e) {
					var i, n = this.getItem(e);
					if (n && (i = n.didDrag, n.dragStop()), !n || !i && !n.needsPositioning) return void this.unstamp(e);
					t.add(n.element, "is-positioning-post-drag");
					var o = this._getDragEndLayoutComplete(e, n);
					n.needsPositioning ? (n.on("layout", o), n.moveTo(n.placeRect.x, n.placeRect.y)) : n && n.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", o), this.layout()
				}, l.prototype._getDragEndLayoutComplete = function (e, i) {
					var n = i && i.needsPositioning,
						o = 0,
						s = n ? 2 : 1,
						a = this;
					return function () {
						return o++, o != s || (i && (t.remove(i.element, "is-positioning-post-drag"), i.isPlacing = !1, i.copyPlaceRectPosition()), a.unstamp(e), a.sortItemsByPosition(), n && a.emitEvent("dragItemPositioned", [i]), !0)
					}
				}, l.prototype.bindDraggabillyEvents = function (t) {
					t.on("dragStart", this.handleDraggabilly.dragStart), t.on("dragMove", this.handleDraggabilly.dragMove), t.on("dragEnd", this.handleDraggabilly.dragEnd)
				}, l.prototype.bindUIDraggableEvents = function (t) {
					t.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
				}, l.Rect = n, l.Packer = o, l
			})
	},
	124: function (t, e) {
		t.exports = function (t) {
			function e(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += "";
				var s = (d = o.grid_article) !== i ? null != d ? null != (c = d.advertisement) ? h = c.ad_url : c : d : (d = n.grid_article) !== i ? null != d ? null != (c = d.advertisement) ? h = c.ad_url : c : d : t.resolveLooseUp(["grid_article", "advertisement", "ad_url"]);
				return e = e.writeEscaped(s), e.data += "", e
			}

			function i(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += "/articles/";
				var s = (d = o.grid_article) !== i ? null != d ? null != (c = d.post) ? h = c.id : c : d : (d = n.grid_article) !== i ? null != d ? null != (c = d.post) ? h = c.id : c : d : t.resolveLooseUp(["grid_article", "post", "id"]);
				return e = e.writeEscaped(s), e.data += ".html", e
			}

			function n(t, e, i) {
				var n = t.data,
					o = t.affix,
					s = (d = o.grid_article) !== i ? null != d ? null != (c = d.post) ? h = c.genre : c : d : (d = n.grid_article) !== i ? null != d ? null != (c = d.post) ? h = c.genre : c : d : t.resolveLooseUp(["grid_article", "post", "genre"]),
					a = s;
				return a = 12 === s
			}

			function o(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += "/cards/";
				var s = (d = o.grid_article) !== i ? null != d ? null != (c = d.post) ? h = c.id : c : d : (d = n.grid_article) !== i ? null != d ? null != (c = d.post) ? h = c.id : c : d : t.resolveLooseUp(["grid_article", "post", "id"]);
				return e = e.writeEscaped(s), e.data += ".html", e
			}

			function s(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += "";
				var s = (d = o.grid_article) !== i ? null != d ? null != (c = d.advertisement) ? h = c.image : c : d : (d = n.grid_article) !== i ? null != d ? null != (c = d.advertisement) ? h = c.image : c : d : t.resolveLooseUp(["grid_article", "advertisement", "image"]);
				return e = e.writeEscaped(s), e.data += "", e
			}

			function a(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += "";
				var s = (d = o.grid_article) !== i ? null != d ? c = d.image : d : (d = n.grid_article) !== i ? null != d ? c = d.image : d : t.resolveLooseUp(["grid_article", "image"]);
				return e = e.writeEscaped(s), e.data += "", e
			}

			function r(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n\t\t\t\t<span class="iconfont icon-message smart-count" data-originCount="', m.line = 20;
				var s = (d = o.grid_article) !== i ? null != d ? null != (c = d.post) ? h = c.comment_count : c : d : (d = n.grid_article) !== i ? null != d ? null != (c = d.post) ? h = c.comment_count : c : d : t.resolveLooseUp(["grid_article", "post", "comment_count"]);
				return e = e.writeEscaped(s), e.data += '"></span>\n\t\t\t', e
			}

			function l(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n\t\t\t\t<span class="iconfont icon-heart smart-count" data-originCount="', m.line = 23;
				var s = (d = o.grid_article) !== i ? null != d ? null != (c = d.post) ? h = c.praise_count : c : d : (d = n.grid_article) !== i ? null != d ? null != (c = d.post) ? h = c.praise_count : c : d : t.resolveLooseUp(["grid_article", "post", "praise_count"]);
				return e = e.writeEscaped(s), e.data += '"></span>\n\t\t\t', e
			}
			var d, c, h, p, u = this,
				f = u.root,
				g = u.buffer,
				v = u.scope,
				m = (u.runtime, u.name, u.pos),
				y = v.data,
				w = v.affix,
				b = f.nativeCommands,
				S = f.utils,
				k = (S.callFn, S.callDataFn, S.callCommand, b.range, b.void, b.foreach, b.forin, b.each, b.with, b.if);
			b.set, b.include, b.includeOnce, b.parse, b.extend, b.block, b.macro, b.debugger;
			g.data += '<!-- 普通文章格子，占位1x1，智能占位 -->\n<!-- 传入参数：post -->\n<a href="', m.line = 3;
			var x = (d = w.grid_article) !== t ? null != d ? null != (c = d.advertisement) ? h = c.ad_url : c : d : (d = y.grid_article) !== t ? null != d ? null != (c = d.advertisement) ? h = c.ad_url : c : d : v.resolveLooseUp(["grid_article", "advertisement", "ad_url"]);
			g = k.call(u, v, {
				params: [x],
				fn: e,
				inverse: i,
				elseIfs: [{
					test: n,
					fn: o
				}]
			}, g), g.data += '" class="com-grid-article">\n\t<div class="grid-article-hd">\n\t\t<div class="pic imgcover">\n\t\t\t<img class="lazyload" data-src="', m.line = 6;
			var C = (d = w.grid_article) !== t ? null != d ? null != (c = d.advertisement) ? h = c.image : c : d : (d = y.grid_article) !== t ? null != d ? null != (c = d.advertisement) ? h = c.image : c : d : v.resolveLooseUp(["grid_article", "advertisement", "image"]);
			g = k.call(u, v, {
				params: [C],
				fn: s,
				inverse: a
			}, g), g.data += '"alt="';
			var T = (d = w.grid_article) !== t ? null != d ? null != (c = d.post) ? h = c.title : c : d : (d = y.grid_article) !== t ? null != d ? null != (c = d.post) ? h = c.title : c : d : v.resolveLooseUp(["grid_article", "post", "title"]);
			g = g.writeEscaped(T), g.data += '">\n\t\t</div>\n\t\t<p class="category">\n\t\t\t<span class="iconfont icon-', m.line = 9;
			var _ = (d = w.grid_article) !== t ? null != d ? null != (c = d.post) ? null != (h = c.category) ? p = h.css_name : h : c : d : (d = y.grid_article) !== t ? null != d ? null != (c = d.post) ? null != (h = c.category) ? p = h.css_name : h : c : d : v.resolveLooseUp(["grid_article", "post", "category", "css_name"]);
			g = g.writeEscaped(_), g.data += '-bg"></span>\n\t\t\t<span>', m.line = 10;
			var L = (d = w.grid_article) !== t ? null != d ? null != (c = d.post) ? null != (h = c.category) ? p = h.title : h : c : d : (d = y.grid_article) !== t ? null != d ? null != (c = d.post) ? null != (h = c.category) ? p = h.title : h : c : d : v.resolveLooseUp(["grid_article", "post", "category", "title"]);
			g = g.writeEscaped(L), g.data += '</span>\n\t\t</p>\n\t</div>\n\t<div class="grid-article-bd">\n\t\t<h3 class="smart-dotdotdot" data-titleReveal="', m.line = 14;
			var P = (d = w.grid_article) !== t ? null != d ? null != (c = d.advertisement) ? h = c.title_reveal : c : d : (d = y.grid_article) !== t ? null != d ? null != (c = d.advertisement) ? h = c.title_reveal : c : d : v.resolveLooseUp(["grid_article", "advertisement", "title_reveal"]);
			g = g.writeEscaped(P), g.data += '">';
			var E = (d = w.grid_article) !== t ? null != d ? null != (c = d.post) ? h = c.title : c : d : (d = y.grid_article) !== t ? null != d ? null != (c = d.post) ? h = c.title : c : d : v.resolveLooseUp(["grid_article", "post", "title"]);
			g = g.writeEscaped(E), g.data += '</h3>\n\t</div>\n\t<div class="grid-article-ft  clearfix">\n\t\t<span class="smart-date" data-originDate="', m.line = 17;
			var z = (d = w.grid_article) !== t ? null != d ? null != (c = d.post) ? h = c.publish_time : c : d : (d = y.grid_article) !== t ? null != d ? null != (c = d.post) ? h = c.publish_time : c : d : v.resolveLooseUp(["grid_article", "post", "publish_time"]);
			g = g.writeEscaped(z), g.data += '"></span>\n\t\t<div class="ribbon">\n\t\t\t', m.line = 19, m.line = 19;
			var M = (d = w.grid_article) !== t ? null != d ? null != (c = d.post) ? h = c.comment_count : c : d : (d = y.grid_article) !== t ? null != d ? null != (c = d.post) ? h = c.comment_count : c : d : v.resolveLooseUp(["grid_article", "post", "comment_count"]);
			g = k.call(u, v, {
				params: [M],
				fn: r
			}, g), g.data += "\n\t\t\t", m.line = 22, m.line = 22;
			var R = (d = w.grid_article) !== t ? null != d ? null != (c = d.post) ? h = c.praise_count : c : d : (d = y.grid_article) !== t ? null != d ? null != (c = d.post) ? h = c.praise_count : c : d : v.resolveLooseUp(["grid_article", "post", "praise_count"]);
			return g = k.call(u, v, {
				params: [R],
				fn: l
			}, g), g.data += "\n\t\t</div>\n\t</div>\n</a>", g
		}
	},
	153: 7,
	154: function (t, e, i) {
		(function (t) {
			"use strict";
			i(155),
				function ($, e, i, n) {
					var o = function (t, e) {
						this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
					};
					o.prototype = {
						init: function () {
							var t = this,
								i = t.el;
							return t.bindEvents(), e.COMS = e.COMS || [], i.attr("data-initialized", "true"), i.attr("data-guid", e.COMS.length), e.COMS.push(t), t
						},
						bindEvents: function () {
							var i = this,
								n = i.el;
							$(e).on("scroll", t.throttle(function (t) {
								t.preventDefault();
								var i = $(t.currentTarget),
									o = i.scrollTop(),
									s = $(e).height();
								o > s ? n.fadeIn() : n.fadeOut()
							}, 300)), n.on("click", ".totop-bd img", function (t) {
								t.preventDefault(), $("html, body").animate({
									scrollTop: 0
								})
							})
						}
					}, $.fn.Totop = function (t) {
						var e;
						return this.each(function () {
							var i = $(this);
							"true" != i.attr("data-initialized") && (e = new o(i, t), e.init())
						})
					}
				}(window.jQuery || window.Zepto, window, document)
		}).call(e, i(10))
	},
	155: 7,
	156: [260, 157],
	157: 7,
	158: function (t, e, i) {
		"use strict";
		i(159),
			function ($, t, e, i) {
				var n, o = function (t, e) {
					this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
				};
				o.prototype = {
					init: function () {
						var e = this,
							i = e.el;
						return e.parseCount(), e.initSwiper(), e.bindEvents(), t.COMS = t.COMS || [], i.attr("data-initialized", "true"), i.attr("data-guid", t.COMS.length), t.COMS.push(e), e
					},
					bindEvents: function () {
						var t = this;
						t.el
					},
					parseCount: function () {
						var t = this,
							e = t.el,
							i = e.find(".count"),
							n = parseInt(i.text()) || 0,
							o = "";
						n < 10 ? (o += '<span class="num">0</span>', o += '<span class="num">' + n + "</span>") : n < 100 ? (o += '<span class="num">' + Math.floor(n / 10) + "</span>", o += '<span class="num">' + n % 10 + "</span>") : o += '<span class="num">9</span>\t                        <span class="num">9</span>', i.html(o).css("visibility", "visible")
					},
					initSwiper: function () {
						var t = this,
							e = t.el;
						n = e.find(".swiper-container").swiper({
							loop: !0,
							speed: 2e3,
							autoplay: 300,
							slidesPerView: "auto",
							loopedSlides: e.find(".swiper-container .swiper-slide").length
						})
					}
				}, $.fn.GridLatest = function (t) {
					var e;
					return this.each(function () {
						var i = $(this);
						"true" != i.attr("data-initialized") && (e = new o(i, t), e.init())
					})
				}
			}(window.jQuery || window.Zepto, window, document)
	},
	159: 7,
	160: function (t, e, i) {
		(function (t) {
			"use strict";
			i(77), i(78), i(161),
				function ($, e, n, o) {
					var s, a = new t(i(162)),
						r = new t(i(163)),
						l = function (t, e) {
							this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
						};
					l.prototype = {
						init: function () {
							var t = this,
								i = t.el;
							return s = i.find(".slick-wrapper"), t.addMakemoney(), t.initSlick(), t.bindEvents(), e.COMS = e.COMS || [], i.attr("data-initialized", "true"), i.attr("data-guid", e.COMS.length), e.COMS.push(t), t
						},
						bindEvents: function () {
							var t = this,
								e = t.el,
								i = e.find(".slick-btn"),
								n = e.find(".pagination");
							e.on("mouseenter", ".slick-container", function (t) {
								i.addClass("visible"), s.slick("slickPause")
							}), e.on("mouseleave", ".slick-container", function (t) {
								i.removeClass("visible"), s.slick("slickPlay")
							}), e.on("click", ".slick-btn.prev", function (t) {
								t.preventDefault(), s.slick("slickPrev")
							}), e.on("click", ".slick-btn.next", function (t) {
								t.preventDefault(), s.slick("slickNext")
							}), e.on("click", ".pagination", function (t) {
								t.preventDefault();
								var e = $(t.currentTarget),
									i = n.index(e);
								n.removeClass("active").eq(i).addClass("active"), s.slick("slickGoTo", i)
							}), s.on("beforeChange", function (t, i, n, o) {
								var s = e.find(".grid-articles-banner-hd .category-title"),
									a = e.find(".paginations .pagination");
								s.addClass("hidden"), s.eq(o).removeClass("hidden"), s.find(".smart-lines").smartLines(), a.removeClass("active").eq(o).addClass("active")
							})
						},
						addMakemoney: function () {
							var t, i = this,
								n = i.el;
							e.makemoneyData && e.makemoneyData.banner && (t = e.makemoneyData.banner, t = t.sort(function (t, e) {
								return !(t.position <= e.position)
							}), $.each(t, function (t, e) {
								var i, o, s = e.position,
									l = e.makemoney,
									d = e.category,
									c = n.find(".grid-articles-banner-hd .category-title:eq(" + s + ")"),
									h = n.find(".grid-articles-banner-bd .slick-item:eq(" + s + ")");
								i = "normalPic" == e.type ? r.render({
									url: l.url,
									feedback_url: l.feedback_url,
									title: "",
									category: "",
									cssName: d.css_name
								}) : r.render({
									url: l.url,
									feedback_url: l.feedback_url,
									title: l.title,
									category: d.name,
									cssName: ""
								}), o = a.render({
									url: l.url,
									feedback_url: l.feedback_url,
									title: l.title,
									image: l.image
								}), 0 == c.length ? n.find(".grid-articles-banner-hd").append(i) : c.before(i), 0 == h.length ? n.find(".grid-articles-banner-bd .slick-wrapper").append(o) : h.before(o)
							}))
						},
						initSlick: function () {
							var t = this,
								e = t.el;
							s.on("init", function (t, i) {
								var n, o = 0,
									s = e.find(".grid-articles-banner-hd .category-title"),
									a = e.find(".paginations");
								s.addClass("hidden"), s.eq(o).removeClass("hidden"), s.find(".smart-lines").smartLines();
								for (var r = 0; r < i.slideCount; r++) n = $('<div class="pagination"></div>'), 0 === r ? n.addClass("active") : n.removeClass("active"), a.append(n)
							}), s.slick({
								infinite: !0,
								autoplay: !0,
								autoplaySpeed: 3e3,
								speed: 500,
								arrows: !1
							})
						}
					}, $.fn.GridArticlesBanner = function (t) {
						var e;
						return this.each(function () {
							var i = $(this);
							"true" != i.attr("data-initialized") && (e = new l(i, t), e.init())
						})
					}
				}(window.jQuery || window.Zepto, window, document)
		}).call(e, i(24))
	},
	161: 7,
	162: function (t, e) {
		t.exports = function (t) {
			function e(t, e, n) {
				var o = t.data,
					s = t.affix;
				e.data += '\n        <img class="hidden" src="', r.line = 3;
				var a = (i = s.feedback_url) !== n ? i : (i = o.feedback_url) !== n ? i : t.resolveLooseUp(["feedback_url"]);
				return e = e.writeEscaped(a), e.data += '">\n    ', e
			}
			var i, n = this,
				o = n.root,
				s = n.buffer,
				a = n.scope,
				r = (n.runtime, n.name, n.pos),
				l = a.data,
				d = a.affix,
				c = o.nativeCommands,
				h = o.utils,
				p = (h.callFn, h.callDataFn, h.callCommand, c.range, c.void, c.foreach, c.forin, c.each, c.with, c.if);
			c.set, c.include, c.includeOnce, c.parse, c.extend, c.block, c.macro, c.debugger;
			s.data += '<a rel="nofollow" href="';
			var u = (i = d.url) !== t ? i : (i = l.url) !== t ? i : a.resolveLooseUp(["url"]);
			s = s.writeEscaped(u), s.data += '" class="slick-item" data-title="';
			var f = (i = d.title) !== t ? i : (i = l.title) !== t ? i : a.resolveLooseUp(["title"]);
			s = s.writeEscaped(f), s.data += '" style="background-image:url(';
			var g = (i = d.image) !== t ? i : (i = l.image) !== t ? i : a.resolveLooseUp(["image"]);
			s = s.writeEscaped(g), s.data += ')">\n    ', r.line = 2, r.line = 2;
			var v = (i = d.feedback_url) !== t ? i : (i = l.feedback_url) !== t ? i : a.resolveLooseUp(["feedback_url"]);
			return s = p.call(n, a, {
				params: [v],
				fn: e
			}, s), s.data += "\n</a>", s
		}
	},
	163: function (t, e) {
		t.exports = function (t) {
			function e(t, e, i) {
				var n = t.data,
					s = t.affix;
				e.data += '\n   \t\t<p class="category">', d.line = 3;
				var a = (o = s.category) !== i ? o : (o = n.category) !== i ? o : t.resolveLooseUp(["category"]);
				return e = e.writeEscaped(a), e.data += "</p>\n   \t", e
			}

			function i(t, e, i) {
				var n = t.data,
					s = t.affix;
				e.data += '\n        <p class="category makemoney-category">\n        \t<span class="iconfont icon-', d.line = 7;
				var a = (o = s.cssName) !== i ? o : (o = n.cssName) !== i ? o : t.resolveLooseUp(["cssName"]);
				return e = e.writeEscaped(a), e.data += '-bg"></span>\n        \t<span class="text">广告</span>\n        </p>\n    ', e
			}

			function n(t, e, i) {
				var n = t.data,
					s = t.affix;
				e.data += '\n\t    <h3 class="title smart-lines" data-originText="', d.line = 12;
				var a = (o = s.title) !== i ? o : (o = n.title) !== i ? o : t.resolveLooseUp(["title"]);
				e = e.writeEscaped(a), e.data += '">\n\t        <span class="line">', d.line = 13;
				var r = (o = s.title) !== i ? o : (o = n.title) !== i ? o : t.resolveLooseUp(["title"]);
				return e = e.writeEscaped(r), e.data += "</span>\n\t    </h3>\n    ", e
			}
			var o, s = this,
				a = s.root,
				r = s.buffer,
				l = s.scope,
				d = (s.runtime, s.name, s.pos),
				c = l.data,
				h = l.affix,
				p = a.nativeCommands,
				u = a.utils,
				f = (u.callFn, u.callDataFn, u.callCommand, p.range, p.void, p.foreach, p.forin, p.each, p.with, p.if);
			p.set, p.include, p.includeOnce, p.parse, p.extend, p.block, p.macro, p.debugger;
			r.data += '<a rel="nofollow" href="';
			var g = (o = h.url) !== t ? o : (o = c.url) !== t ? o : l.resolveLooseUp(["url"]);
			r = r.writeEscaped(g), r.data += '"  class="category-title hidden">\n    ', d.line = 2, d.line = 2;
			var v = (o = h.category) !== t ? o : (o = c.category) !== t ? o : l.resolveLooseUp(["category"]);
			r = f.call(s, l, {
				params: [v],
				fn: e
			}, r), r.data += "\n    ", d.line = 5, d.line = 5;
			var m = (o = h.cssName) !== t ? o : (o = c.cssName) !== t ? o : l.resolveLooseUp(["cssName"]);
			r = f.call(s, l, {
				params: [m],
				fn: i
			}, r), r.data += "\n    ", d.line = 11, d.line = 11;
			var y = (o = h.title) !== t ? o : (o = c.title) !== t ? o : l.resolveLooseUp(["title"]);
			return r = f.call(s, l, {
				params: [y],
				fn: n
			}, r), r.data += "\n</a>", r
		}
	},
	164: function (t, e, i) {
		"use strict";
		i(165),
			function ($, t, e, i) {
				var n = function (t, e) {
					this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
				};
				n.prototype = {
					init: function () {
						var e = this,
							i = e.el;
						return i.find(".smart-dotdotdot").smartDotdotdot(), e.formatCount(), e.bindEvents(), t.COMS = t.COMS || [], i.attr("data-initialized", "true"), i.attr("data-guid", t.COMS.length), t.COMS.push(e), e
					},
					bindEvents: function () {
						var t = this;
						t.el
					},
					formatCount: function () {
						var t, e, i, n = this,
							o = n.el,
							s = o.find(".grid-key-paper-hd .count"),
							a = !1;
						s.length && (e = new Date, t = new Date(s.attr("data-publishDate").replace(/-/g, "/")), i = Math.round((e.getTime() - t.getTime()) / 6e4), i <= 60 * e.getHours() && (a = !0), a && (s.addClass("new"), s.find(".num").remove(), s.find(".text").text("NEW")))
					}
				}, $.fn.GridKeyPaper = function (t) {
					var e;
					return this.each(function () {
						var i = $(this);
						"true" != i.attr("data-initialized") && (e = new n(i, t), e.init())
					})
				}
			}(window.jQuery || window.Zepto, window, document)
	},
	165: 7,
	166: function (t, e, i) {
		(function (jQuery) {
			"use strict";
			i(167),
				function ($, t, e, i) {
					var n = function (t, e) {
						this.el = t, this.defaults = {}, this.options = $.extend({}, this.defaults, e)
					};
					n.prototype = {
						init: function () {
							var e = this,
								i = e.el;
							return e.bindEvents(), t.COMS = t.COMS || [], i.attr("data-initialized", "true"), i.attr("data-guid", t.COMS.length), t.COMS.push(e), e
						},
						bindEvents: function () {
							var t = this;
							t.el
						}
					}, $.fn.GridMobBanner = function (t) {
						var e;
						return this.each(function () {
							var i = $(this);
							"true" != i.attr("data-initialized") && (e = new n(i, t), e.init())
						})
					}
				}(jQuery, window, document)
		}).call(e, i(1))
	},
	167: 7,
	168: function (t, e, i) {
		t.exports = function (t) {
			function e(t, e, n) {
				var o = t.data;
				t.affix;
				e.data += '\n            <div class="packery-item article size1x2">\n                ', y.line = 5;
				var s, a = o;
				e = g.includeModule(t, {
					params: [i(169)],
					hash: {
						video_player: a
					}
				}, e, f);
				var r = s;
				return e = e.writeEscaped(r), e.data += "\n            </div>\n        ", e
			}

			function n(t, e, n) {
				var o = t.data;
				t.affix;
				e.data += '\n            <div class="packery-item article">\n                ', y.line = 17;
				var s, a = o;
				e = g.includeModule(t, {
					params: [i(124)],
					hash: {
						grid_article: a
					}
				}, e, f);
				var r = s;
				return e = e.writeEscaped(r), e.data += "\n            </div>\n        ", e
			}

			function o(t, e, i) {
				var n = t.data,
					o = t.affix;
				y.line = 7;
				var s = (p = o.advertisement) !== i ? null != p ? u = p.ad_type : p : null != n.advertisement ? u = n.advertisement.ad_type : n.advertisement,
					a = s;
				return a = 3 === s
			}

			function s(t, e, n) {
				var o = t.data;
				t.affix;
				e.data += '\n            <div class="packery-item article">\n                ', y.line = 9;
				var s, a = o;
				e = g.includeModule(t, {
					params: [i(169)],
					hash: {
						video_player: a
					}
				}, e, f);
				var r = s;
				return e = e.writeEscaped(r), e.data += "\n            </div>    \n        ", e
			}

			function a(t, e, i) {
				var n = t.data,
					o = t.affix;
				y.line = 11;
				var s = (p = o.type) !== i ? p : n.type,
					a = s;
				return a = 2 === s
			}

			function r(t, e, n) {
				var o = t.data;
				t.affix;
				e.data += '\n            <div class="packery-item article size1x2">\n                ', y.line = 13;
				var s, a = o;
				e = g.includeModule(t, {
					params: [i(170)],
					hash: {
						grid_key_article: a
					}
				}, e, f);
				var r = s;
				return e = e.writeEscaped(r), e.data += "\n            </div>\n        ", e
			}

			function l(t, i, l) {
				var d = t.data,
					c = t.affix;
				i.data += "\n        ", y.line = 3, y.line = 3;
				var h = (p = c.advertisement) !== l ? null != p ? u = p.ad_type : p : null != d.advertisement ? u = d.advertisement.ad_type : d.advertisement,
					g = h;
				g = 3 === h;
				var v = g;
				if (v) {
					var m = (p = c.type) !== l ? p : d.type,
						w = m;
					w = 2 === m, v = w
				}
				return i = C.call(f, t, {
					params: [v],
					fn: e,
					inverse: n,
					elseIfs: [{
						test: o,
						fn: s
					}, {
						test: a,
						fn: r
					}]
				}, i), i.data += "\n    ", i
			}

			function d(t, e, i) {
				var n = t.data,
					o = t.affix;
				y.line = 20;
				var s = (p = o.datatype) !== i ? p : n.datatype,
					a = s;
				return a = "paper" === s
			}

			function c(t, e, n) {
				var o = t.data,
					s = t.affix;
				e.data += ' \n        <div class="packery-item paper size1x2">\n            ', y.line = 22;
				var a, r = (p = s.post) !== n ? p : o.post;
				e = g.includeModule(t, {
					params: [i(171)],
					hash: {
						grid_paper: r
					}
				}, e, f);
				var l = a;
				return e = e.writeEscaped(l), e.data += "\n        </div>\n    ", e
			}

			function h(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += "\n    ", y.line = 2, y.line = 2;
				var s = (p = o.datatype) !== i ? p : n.datatype,
					a = s;
				return a = "article" === s, e = C.call(f, t, {
					params: [a],
					fn: l,
					elseIfs: [{
						test: d,
						fn: c
					}]
				}, e), e.data += "\n", e
			}
			var p, u, f = this,
				g = f.root,
				v = f.buffer,
				m = f.scope,
				y = (f.runtime, f.name, f.pos),
				w = m.data,
				b = m.affix,
				S = g.nativeCommands,
				k = g.utils,
				x = (k.callFn, k.callDataFn, k.callCommand, S.range, S.void, S.foreach, S.forin, S.each),
				C = (S.with, S.if);
			S.set, S.include, S.includeOnce, S.parse, S.extend, S.block, S.macro, S.debugger;
			v.data += "", y.line = 1;
			var T = (p = b.home) !== t ? p : (p = w.home) !== t ? p : m.resolveLooseUp(["home"]);
			return v = x.call(f, m, {
				params: [T],
				fn: h
			}, v)
		}
	},
	169: function (t, e) {
		t.exports = function (t) {
			var e, i, n, o = this,
				s = o.root,
				a = o.buffer,
				r = o.scope,
				l = (o.runtime, o.name, o.pos),
				d = r.data,
				c = r.affix,
				h = s.nativeCommands,
				p = s.utils;
			p.callFn, p.callDataFn, p.callCommand, h.range, h.void, h.foreach, h.forin, h.each, h.with, h.if, h.set, h.include, h.includeOnce, h.parse, h.extend, h.block, h.macro, h.debugger;
			a.data += '<a rel="nofollow" href="';
			var u = (e = c.video_player) !== t ? null != e ? null != (i = e.advertisement) ? n = i.ad_url : i : e : (e = d.video_player) !== t ? null != e ? null != (i = e.advertisement) ? n = i.ad_url : i : e : r.resolveLooseUp(["video_player", "advertisement", "ad_url"]);
			a = a.writeEscaped(u), a.data += '" class="com-grid-makemoney">\n\t<div class="com-video-player ">\n\t\t<video class="video" autoplay muted>\n\t\t\t<source src="', l.line = 4;
			var f = (e = c.video_player) !== t ? null != e ? null != (i = e.post) ? n = i.description : i : e : (e = d.video_player) !== t ? null != e ? null != (i = e.post) ? n = i.description : i : e : r.resolveLooseUp(["video_player", "post", "description"]);
			a = a.writeEscaped(f), a.data += '">\n\t\t</video>\n\t\t<div class="poster imgcover">\n\t\t\t<img src="', l.line = 7;
			var g = (e = c.video_player) !== t ? null != e ? null != (i = e.advertisement) ? n = i.image : i : e : (e = d.video_player) !== t ? null != e ? null != (i = e.advertisement) ? n = i.image : i : e : r.resolveLooseUp(["video_player", "advertisement", "image"]);
			a = a.writeEscaped(g), a.data += '"/>\n\t  \t</div>\n\t\t<p class="category">\n\t\t\t<span class="iconfont icon-', l.line = 10;
			var v = (e = c.post) !== t ? null != e ? null != (i = e.category) ? n = i.css_name : i : e : (e = d.post) !== t ? null != e ? null != (i = e.category) ? n = i.css_name : i : e : r.resolveLooseUp(["post", "category", "css_name"]);
			return a = a.writeEscaped(v), a.data += '-bg"></span>\n\t\t\t<span></span>\n\t\t</p>\n\t\t<span class="iconfont icon-nosound"></span>\n\t\t<span class="iconfont icon-pause"></span>\n\t</div>\n</a>', a
		}
	},
	170: function (t, e) {
		t.exports = function (t) {
			function e(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n\t<a href="', y.line = 4;
				var s = (c = o.grid_key_article) !== i ? null != c ? null != (h = c.advertisement) ? p = h.ad_url : h : c : (c = n.grid_key_article) !== i ? null != c ? null != (h = c.advertisement) ? p = h.ad_url : h : c : t.resolveLooseUp(["grid_key_article", "advertisement", "ad_url"]);
				return e = e.writeEscaped(s), e.data += '" class="com-grid-key-article">\n', e
			}

			function i(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n\t<a href="/articles/', y.line = 8;
				var s = (c = o.grid_key_article) !== i ? null != c ? null != (h = c.post) ? p = h.id : h : c : (c = n.grid_key_article) !== i ? null != c ? null != (h = c.post) ? p = h.id : h : c : t.resolveLooseUp(["grid_key_article", "post", "id"]);
				return e = e.writeEscaped(s), e.data += '.html"  class="com-grid-key-article">\n', e
			}

			function n(t, e, i) {
				var n = t.data,
					o = t.affix;
				y.line = 5;
				var s = (c = o.grid_key_article) !== i ? null != c ? null != (h = c.post) ? p = h.genre : h : c : (c = n.grid_key_article) !== i ? null != c ? null != (h = c.post) ? p = h.genre : h : c : t.resolveLooseUp(["grid_key_article", "post", "genre"]),
					a = s;
				return a = 12 === s
			}

			function o(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n\t<a href="/cards/', y.line = 6;
				var s = (c = o.grid_key_article) !== i ? null != c ? null != (h = c.post) ? p = h.id : h : c : (c = n.grid_key_article) !== i ? null != c ? null != (h = c.post) ? p = h.id : h : c : t.resolveLooseUp(["grid_key_article", "post", "id"]);
				return e = e.writeEscaped(s), e.data += '.html"  class="com-grid-key-article">\n', e
			}

			function s(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += "";
				var s = (c = o.grid_key_article) !== i ? null != c ? null != (h = c.advertisement) ? p = h.image : h : c : (c = n.grid_key_article) !== i ? null != c ? null != (h = c.advertisement) ? p = h.image : h : c : t.resolveLooseUp(["grid_key_article", "advertisement", "image"]);
				return e = e.writeEscaped(s), e.data += "", e
			}

			function a(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += "";
				var s = (c = o.grid_key_article) !== i ? null != c ? h = c.image : c : (c = n.grid_key_article) !== i ? null != c ? h = c.image : c : t.resolveLooseUp(["grid_key_article", "image"]);
				return e = e.writeEscaped(s), e.data += "", e
			}

			function r(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n\t\t<div class="play">\n\t\t\t<span class="iconfont icon-video_play"></span>\n\t\t\t<span class="time">', y.line = 21;
				var s = (c = o.grid_key_article) !== i ? null != c ? null != (h = c.video) ? p = h.show_duration : h : c : (c = n.grid_key_article) !== i ? null != c ? null != (h = c.video) ? p = h.show_duration : h : c : t.resolveLooseUp(["grid_key_article", "video", "show_duration"]);
				return e = e.writeEscaped(s), e.data += "</span>\n\t\t</div>\n\t\t", e
			}

			function l(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n\t\t\t\t<span class="iconfont icon-message">', y.line = 34;
				var s = (c = o.grid_key_article) !== i ? null != c ? null != (h = c.post) ? p = h.comment_count : h : c : (c = n.grid_key_article) !== i ? null != c ? null != (h = c.post) ? p = h.comment_count : h : c : t.resolveLooseUp(["grid_key_article", "post", "comment_count"]);
				return e = e.writeEscaped(s), e.data += "</span>\n\t\t\t", e
			}

			function d(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n\t\t\t\t<span class="iconfont icon-heart smart-count" data-originCount="', y.line = 37;
				var s = (c = o.grid_key_article) !== i ? null != c ? null != (h = c.post) ? p = h.praise_count : h : c : (c = n.grid_key_article) !== i ? null != c ? null != (h = c.post) ? p = h.praise_count : h : c : t.resolveLooseUp(["grid_key_article", "post", "praise_count"]);
				return e = e.writeEscaped(s), e.data += '"></span>\n\t\t\t', e
			}
			var c, h, p, u, f = this,
				g = f.root,
				v = f.buffer,
				m = f.scope,
				y = (f.runtime, f.name, f.pos),
				w = m.data,
				b = m.affix,
				S = g.nativeCommands,
				k = g.utils,
				x = (k.callFn, k.callDataFn, k.callCommand, S.range, S.void, S.foreach, S.forin, S.each, S.with, S.if);
			S.set, S.include, S.includeOnce, S.parse, S.extend, S.block, S.macro, S.debugger;
			v.data += "<!-- 重点文章格子，1x2的占位，智能占位 -->\n<!-- 传入参数：article -->\n", y.line = 3, y.line = 3;
			var C = (c = b.grid_key_article) !== t ? null != c ? null != (h = c.advertisement) ? p = h.ad_url : h : c : (c = w.grid_key_article) !== t ? null != c ? null != (h = c.advertisement) ? p = h.ad_url : h : c : m.resolveLooseUp(["grid_key_article", "advertisement", "ad_url"]);
			v = x.call(f, m, {
				params: [C],
				fn: e,
				inverse: i,
				elseIfs: [{
					test: n,
					fn: o
				}]
			}, v), v.data += '\n\t<div class="grid-key-article-hd">\n\t\t<div class="pic imgcover">\n\t\t\t<img class="lazyload" data-src="', y.line = 12;
			var T = (c = b.grid_key_article) !== t ? null != c ? h = c.advertisement : c : (c = w.grid_key_article) !== t ? null != c ? h = c.advertisement : c : m.resolveLooseUp(["grid_key_article", "advertisement"]);
			v = x.call(f, m, {
				params: [T],
				fn: s,
				inverse: a
			}, v), v.data += '" alt="';
			var _ = (c = b.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.title : h : c : (c = w.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.title : h : c : m.resolveLooseUp(["grid_key_article", "post", "title"]);
			v = v.writeEscaped(_), v.data += '">\n\t\t</div>\n\t\t<p class="category">\n\t\t\t<span class="iconfont icon-', y.line = 15;
			var L = (c = b.grid_key_article) !== t ? null != c ? null != (h = c.post) ? null != (p = h.category) ? u = p.css_name : p : h : c : (c = w.grid_key_article) !== t ? null != c ? null != (h = c.post) ? null != (p = h.category) ? u = p.css_name : p : h : c : m.resolveLooseUp(["grid_key_article", "post", "category", "css_name"]);
			v = v.writeEscaped(L), v.data += '-bg"></span>\n\t\t\t<span>', y.line = 16;
			var P = (c = b.grid_key_article) !== t ? null != c ? null != (h = c.post) ? null != (p = h.category) ? u = p.title : p : h : c : (c = w.grid_key_article) !== t ? null != c ? null != (h = c.post) ? null != (p = h.category) ? u = p.title : p : h : c : m.resolveLooseUp(["grid_key_article", "post", "category", "title"]);
			v = v.writeEscaped(P), v.data += "</span>\n\t\t</p>\n\t\t", y.line = 18, y.line = 18;
			var E = (c = b.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.genre : h : c : (c = w.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.genre : h : c : m.resolveLooseUp(["grid_key_article", "post", "genre"]),
				z = E;
			z = 8 === E, v = x.call(f, m, {
				params: [z],
				fn: r
			}, v), v.data += '\n\t</div>\n\t<div class="grid-key-article-bd">\n\t\t<h3 class="title smart-lines" data-titleReveal="', y.line = 26;
			var M = (c = b.grid_key_article) !== t ? null != c ? null != (h = c.advertisement) ? p = h.title_reveal : h : c : (c = w.grid_key_article) !== t ? null != c ? null != (h = c.advertisement) ? p = h.title_reveal : h : c : m.resolveLooseUp(["grid_key_article", "advertisement", "title_reveal"]);
			v = v.writeEscaped(M), v.data += '" data-originText="';
			var R = (c = b.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.title : h : c : (c = w.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.title : h : c : m.resolveLooseUp(["grid_key_article", "post", "title"]);
			v = v.writeEscaped(R), v.data += '">\n\t\t\t<span class="line">', y.line = 27;
			var A = (c = b.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.title : h : c : (c = w.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.title : h : c : m.resolveLooseUp(["grid_key_article", "post", "title"]);
			v = v.writeEscaped(A), v.data += '</span>\n\t\t</h3>\n\t</div>\n\t<div class="grid-key-article-ft clearfix">\n\t\t<span class="smart-date" data-originDate="', y.line = 31;
			var O = (c = b.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.publish_time : h : c : (c = w.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.publish_time : h : c : m.resolveLooseUp(["grid_key_article", "post", "publish_time"]);
			v = v.writeEscaped(O), v.data += '"></span>\n\t\t<div class="ribbon">\n\t\t\t', y.line = 33, y.line = 33;
			var I = (c = b.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.comment_count : h : c : (c = w.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.comment_count : h : c : m.resolveLooseUp(["grid_key_article", "post", "comment_count"]),
				F = I;
			F = I > 0, v = x.call(f, m, {
				params: [F],
				fn: l
			}, v), v.data += "\t\n\t\t\t", y.line = 36, y.line = 36;
			var W = (c = b.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.praise_count : h : c : (c = w.grid_key_article) !== t ? null != c ? null != (h = c.post) ? p = h.praise_count : h : c : m.resolveLooseUp(["grid_key_article", "post", "praise_count"]);
			return v = x.call(f, m, {
				params: [W],
				fn: d
			}, v), v.data += "\n\t\t</div>\n\t</div>\n</a>", v
		}
	},
	171: function (t, e) {
		t.exports = function (t) {
			function e(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n<!-- 报告 -->\n<a href="/articles/', y.line = 7;
				var s = (h = o.grid_paper) !== i ? null != h ? p = h.id : h : (h = n.grid_paper) !== i ? null != h ? p = h.id : h : t.resolveLooseUp(["grid_paper", "id"]);
				e = e.writeEscaped(s), e.data += '.html" class="com-grid-paper " >\n    <div class="grid-paper-bd">\n        <div class="imgcover pic">\n            <img class="lazyload"  data-src="', y.line = 10;
				var a = (h = o.grid_paper) !== i ? null != h ? p = h.image : h : (h = n.grid_paper) !== i ? null != h ? p = h.image : h : t.resolveLooseUp(["grid_paper", "image"]);
				e = e.writeEscaped(a), e.data += '" alt="';
				var r = (h = o.grid_paper) !== i ? null != h ? p = h.title : h : (h = n.grid_paper) !== i ? null != h ? p = h.title : h : t.resolveLooseUp(["grid_paper", "title"]);
				e = e.writeEscaped(r), e.data += '">\n        </div>\n        <p class="category x44">\n            <img class="lazyload"  data-src="', y.line = 13;
				var l = (h = o.grid_paper) !== i ? null != h ? null != (p = h.category) ? u = p.image : p : h : (h = n.grid_paper) !== i ? null != h ? null != (p = h.category) ? u = p.image : p : h : t.resolveLooseUp(["grid_paper", "category", "image"]);
				e = e.writeEscaped(l), e.data += '" alt="';
				var d = (h = o.grid_paper) !== i ? null != h ? null != (p = h.category) ? u = p.title : p : h : (h = n.grid_paper) !== i ? null != h ? null != (p = h.category) ? u = p.title : p : h : t.resolveLooseUp(["grid_paper", "category", "title"]);
				e = e.writeEscaped(d), e.data += '">\n        </p>\n    </div>\n    <div class="grid-paper-ft">\n        <div class="title-description">\n            <h3 class="title">', y.line = 18;
				var c = (h = o.grid_paper) !== i ? null != h ? p = h.title : h : (h = n.grid_paper) !== i ? null != h ? p = h.title : h : t.resolveLooseUp(["grid_paper", "title"]);
				e = e.writeEscaped(c), e.data += '</h3>\n            <p class="description">', y.line = 19;
				var f = (h = o.grid_paper) !== i ? null != h ? p = h.description : h : (h = n.grid_paper) !== i ? null != h ? p = h.description : h : t.resolveLooseUp(["grid_paper", "description"]);
				return e = e.writeEscaped(f), e.data += "</p>\n        </div>\n    </div>\n</a>\n", e
			}

			function i(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n<a href="/papers/', y.line = 27;
				var s = (h = o.grid_paper) !== i ? null != h ? p = h.id : h : (h = n.grid_paper) !== i ? null != h ? p = h.id : h : t.resolveLooseUp(["grid_paper", "id"]);
				return e = e.writeEscaped(s), e.data += '.html" class="com-grid-paper " >\n', e
			}

			function n(t, e, i) {
				var n = t.data,
					o = t.affix;
				y.line = 28;
				var s = (h = o.grid_paper) !== i ? null != h ? p = h.genre : h : (h = n.grid_paper) !== i ? null != h ? p = h.genre : h : t.resolveLooseUp(["grid_paper", "genre"]),
					a = s;
				return a = 1001 === s
			}

			function o(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n<a href="/mobs/', y.line = 29;
				var s = (h = o.grid_paper) !== i ? null != h ? p = h.id : h : (h = n.grid_paper) !== i ? null != h ? p = h.id : h : t.resolveLooseUp(["grid_paper", "id"]);
				return e = e.writeEscaped(s), e.data += '.html" class="com-grid-paper " >\n', e
			}

			function s(t, e, i) {
				var n = t.data,
					o = t.affix;
				y.line = 30;
				var s = (h = o.grid_paper) !== i ? null != h ? p = h.genre : h : (h = n.grid_paper) !== i ? null != h ? p = h.genre : h : t.resolveLooseUp(["grid_paper", "genre"]),
					a = s;
				return a = 1002 === s
			}

			function a(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n<a href="/tots/', y.line = 31;
				var s = (h = o.grid_paper) !== i ? null != h ? p = h.id : h : (h = n.grid_paper) !== i ? null != h ? p = h.id : h : t.resolveLooseUp(["grid_paper", "id"]);
				return e = e.writeEscaped(s), e.data += '.html" class="com-grid-paper " >\n', e
			}

			function r(t, e, i) {
				var n = t.data,
					o = t.affix;
				y.line = 32;
				var s = (h = o.grid_paper) !== i ? null != h ? p = h.genre : h : (h = n.grid_paper) !== i ? null != h ? p = h.genre : h : t.resolveLooseUp(["grid_paper", "genre"]),
					a = s;
				return a = 1003 === s
			}

			function l(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n<a href="/choices/', y.line = 33;
				var s = (h = o.grid_paper) !== i ? null != h ? p = h.id : h : (h = n.grid_paper) !== i ? null != h ? p = h.id : h : t.resolveLooseUp(["grid_paper", "id"]);
				return e = e.writeEscaped(s), e.data += '.html" class="com-grid-paper " >\n', e
			}

			function d(t, e, i) {
				var n = t.data,
					o = t.affix;
				y.line = 34;
				var s = (h = o.grid_paper) !== i ? null != h ? p = h.genre : h : (h = n.grid_paper) !== i ? null != h ? p = h.genre : h : t.resolveLooseUp(["grid_paper", "genre"]),
					a = s;
				return a = 1004 === s
			}

			function c(t, e, i) {
				var n = t.data,
					o = t.affix;
				e.data += '\n<a href="/whos/', y.line = 35;
				var s = (h = o.grid_paper) !== i ? null != h ? p = h.id : h : (h = n.grid_paper) !== i ? null != h ? p = h.id : h : t.resolveLooseUp(["grid_paper", "id"]);
				return e = e.writeEscaped(s), e.data += '.html" class="com-grid-paper " >\n', e
			}
			var h, p, u, f = this,
				g = f.root,
				v = f.buffer,
				m = f.scope,
				y = (f.runtime, f.name, f.pos),
				w = m.data,
				b = m.affix,
				S = g.nativeCommands,
				k = g.utils,
				x = (k.callFn, k.callDataFn, k.callCommand, S.range, S.void, S.foreach, S.forin, S.each, S.with, S.if);
			S.set, S.include, S.includeOnce, S.parse, S.extend, S.block, S.macro, S.debugger;
			v.data += "<!-- 普通文章格子，占位1x1，智能占位 -->\n<!-- 传入参数：post, type -->\n<!-- 其中type有三种，分别是xsmall, small,normal,large（好莱坞块，首页块，普通文章页块，长文章页块）,暂时先都认为是普通大小 -->\n\n", y.line = 5, y.line = 5;
			var C = (h = b.grid_paper) !== t ? null != h ? p = h.genre : h : (h = w.grid_paper) !== t ? null != h ? p = h.genre : h : m.resolveLooseUp(["grid_paper", "genre"]),
				T = C;
			T = 14 === C, v = x.call(f, m, {
				params: [T],
				fn: e
			}, v), v.data += "\n\n<!-- 投票或者我说 -->\n", y.line = 26, y.line = 26;
			var _ = (h = b.grid_paper) !== t ? null != h ? p = h.genre : h : (h = w.grid_paper) !== t ? null != h ? p = h.genre : h : m.resolveLooseUp(["grid_paper", "genre"]),
				L = _;
			L = 1e3 === _, v = x.call(f, m, {
				params: [L],
				fn: i,
				elseIfs: [{
					test: n,
					fn: o
				}, {
					test: s,
					fn: a
				}, {
					test: r,
					fn: l
				}, {
					test: d,
					fn: c
				}]
			}, v), v.data += '\n    <div class="grid-paper-bd">\n        <div class="imgcover pic">\n            <img class="lazyload"  data-src="', y.line = 39;
			var P = (h = b.grid_paper) !== t ? null != h ? p = h.image : h : (h = w.grid_paper) !== t ? null != h ? p = h.image : h : m.resolveLooseUp(["grid_paper", "image"]);
			v = v.writeEscaped(P), v.data += '" alt="';
			var E = (h = b.grid_paper) !== t ? null != h ? p = h.title : h : (h = w.grid_paper) !== t ? null != h ? p = h.title : h : m.resolveLooseUp(["grid_paper", "title"]);
			v = v.writeEscaped(E), v.data += '">\n        </div>\n\n        <p class="category x44">\n            <img class="lazyload"  data-src="', y.line = 43;
			var z = (h = b.grid_paper) !== t ? null != h ? null != (p = h.category) ? u = p.image_lab : p : h : (h = w.grid_paper) !== t ? null != h ? null != (p = h.category) ? u = p.image_lab : p : h : m.resolveLooseUp(["grid_paper", "category", "image_lab"]);
			v = v.writeEscaped(z), v.data += '" alt="';
			var M = (h = b.grid_paper) !== t ? null != h ? null != (p = h.category) ? u = p.title : p : h : (h = w.grid_paper) !== t ? null != h ? null != (p = h.category) ? u = p.title : p : h : m.resolveLooseUp(["grid_paper", "category", "title"]);
			v = v.writeEscaped(M), v.data += '">\n        </p>\n        <div class="count" data-publishDate="', y.line = 45;
			var R = (h = b.grid_paper) !== t ? null != h ? p = h.publish_time : h : (h = w.grid_paper) !== t ? null != h ? p = h.publish_time : h : m.resolveLooseUp(["grid_paper", "publish_time"]);
			v = v.writeEscaped(R), v.data += '">\n            <span class="iconfont icon-join"></span>\n            <span class="num">', y.line = 47;
			var A = (h = b.grid_paper) !== t ? null != h ? p = h.record_count : h : (h = w.grid_paper) !== t ? null != h ? p = h.record_count : h : m.resolveLooseUp(["grid_paper", "record_count"]);
			v = v.writeEscaped(A), v.data += '</span>\n            <span class="text">人已参加</span>\n        </div>\n    </div>\n    <div class="grid-paper-ft">\n        <div class="title-description">\n            <h3 class="title">', y.line = 53;
			var O = (h = b.grid_paper) !== t ? null != h ? p = h.title : h : (h = w.grid_paper) !== t ? null != h ? p = h.title : h : m.resolveLooseUp(["grid_paper", "title"]);
			v = v.writeEscaped(O), v.data += '</h3>\n            <p class="description">', y.line = 54;
			var I = (h = b.grid_paper) !== t ? null != h ? p = h.description : h : (h = w.grid_paper) !== t ? null != h ? p = h.description : h : m.resolveLooseUp(["grid_paper", "description"]);
			return v = v.writeEscaped(I), v.data += "</p>\n        </div>\n    </div>\n</a>\n", v
		}
	}
});