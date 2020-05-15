export default {}

// import emoji from 'src/constants/emoji.json'

// const angent: string = window.navigator.userAgent.toLowerCase()
// // 符合这个正则表达式的命令，恢复选区时，不要恢复外围选区（如插入图片）
// const regRestoreNoWrapSelection = /insertimage/i;

// export default class MobileEditor {

//   private $body = $('body')
//   private $textarea: any
//   public isAndroid: boolean = angent.indexOf('android') > 0
//   public agent: string = angent
//   private $txt: any
//   private $modalContainer: any
//   private $menuContainer: any
//   private $menuItemContainer: any
//   private menus: any

//   // 全局配置
//   private config = {
//     // color 按钮点击时的颜色值
//     menuColorValue: 'red',
//     // 菜单栏中 quote 按钮点击时的样式
//     menuQuoteStyle: {
// 			'display': 'block',
// 			'border-left': '5px solid #d0e5f2',
// 			'padding': '4px 0 4px 10px',
// 			'background-color': '#f1f1f1',
// 			'margin': '4px 0'
//     },
//     // 菜单配置
//     menus: [
// 			'head',
// 			'bold',
// 			'color',
// 			'quote',
// 			'list',
// 			'img',
// 			'happy',
// 			'check'
//     ],
//     happy: emoji.map((item: any) => item.src)

//   }

//   constructor(textareaId: string, opt: any) {
//     this.init(textareaId, opt)
//   }

//   private init(textareaId: string, opt: any) {
//     this.$textarea = $('#' + textareaId)

//     // 初始化各个组件
//     // 初始化编辑器对象的默认配置
//     // this.initDefaultConfig(opt)

//     // 初始化编辑区域的配置
//     // this.addText()

//     // 初始化操作条
//     // this.addMenus()
//   }

//   // 记录每一个 tap 事件时间，防止短时间内重复 tap
//   private checkTapTime(e: any, info: string) {
//     let type = e.type.toLowerCase()
//     var currentElem
// 		var $currentElem
//     var result = true
    
//     // 只针对 tap
//     if (type.indexOf('tap') < 0) {
//       return result
//     }

//     if (e) {
//       // 传入 event 对象，则为每个event对象分配事件
//       currentElem = e.currentTarget || e.target;
//       $currentElem = $(currentElem);
//     } else {
//       // 未传入，则都用body
//       $currentElem = this.$body;
//     }

//     if ($currentElem.data('tapTime') == null) {
//       // 第一次，直接通过
//       $currentElem.data('tapTime', Date.now().toString())
//       result = true
//     } else {
//       if (Date.now() - parseInt($currentElem.data('tapTime')) < 100) {
//         // 如果当前时间和上一次tapTime相差 **ms 之内，
//         // 则视为无效，并阻止冒泡和默认行为
//         e.preventDefault()
//         e.stopPropagation()
//         result = false
//       } else {
//         // 否则就继续并更新tapTime
//         $currentElem.data('tapTime', Date.now().toString())
//         result = true
//       }
//     }

//     return result
//   }

//   // 初始化编辑器对象的默认配置
//   private initDefaultConfig(opt: any) {
//     console.log('opt>>>', opt)
//     var objConfig = $.extend({}, this.config, opt)

//     this.config = objConfig
//   }

//   // 初始化编辑区域的数据对象
//   private addTxt() {
//     let $textarea = this.$textarea
//     let val = $.trim($textarea.val())

//     // 把 textarea 的值复制到编辑区域，初始化数据
//     var $txt = $(
//       '<div contentEditable="true" class="mobileEditor-mobile-txt">' + 
// 			val + 
// 			'</div>'
//     )

//     // modal container
// 		var $modalContainer = $('<div class="mobileEditor-mobile-modal-container"></div>')

// 		// 记录到对象中
// 		this.$txt = $txt
// 		this.$modalContainer = $modalContainer

// 		// 最后插入一个空行
// 		this.insertEmpltyLink()
//   }

//   // 插入空行
//   private insertEmpltyLink () {
// 		var $txt = this.$txt
// 		var $children = $txt.children()

// 		if ($children.length === 0) {
// 			$txt.append($('<p><br></p>'))
// 			return
// 		}

// 		if ($children.last().html() !== '<br>') {
// 			$txt.append($('<p><br></p>'))
// 		}
//   }
  
//   private addMenus() {
//     // ------------- menus container  
//     var $menuContainer = $('<div class="mobileEditor-mobile-menu-container" contentEditable="false"></div>')
    
//     var $menuItemContainer = $('<div class="item-container"></div>')
    
//     var $menuContainerTip = $('<div class="tip"></div>')  // 三角形
    
//     // 增加小三角 tip
// 		$menuContainer.append($menuContainerTip)

// 		// 菜单项的容器
//     $menuContainer.append($menuItemContainer)
    
//     // 添加到数据对象
// 		this.$menuContainer = $menuContainer
//     this.$menuItemContainer = $menuItemContainer
    
//     // menus 数据集合
//     this.menus = {}
//     this.addMenuBold('bold')
//     // this.addMenuHead('head')
// 		// this.addMenuColor('color')
// 		// this.addMenuQuote('quote')
// 		// this.addMenuList('list')
// 		// this.addMenuCheck('check')
// 		// this.addMenuHappy('happy')
// 		// this.addMenuImg('img')
//   }

//   private addMenuBold(menuId: string) {
//     var self = this
// 		var menus = this.menus

// 		menus[menuId] = {

// 			// 是否处于选中状态
// 			selected: false,

// 			// 触发器
// 			$trigger: $('<div><i class="icon-mobileEditor-m-bold"></i></div>'),
// 			// 包裹触发器的容器
// 			$wrap: $('<div class="item"></div>'),

// 			// 绑定触发器事件
// 			bindEvent: function (editor: any) {
// 				var menuData: any = this;
// 				menuData.$trigger.on('singleTap', function (e: any) {
// 					if (self.checkTapTime(e, 'bold') === false) {
// 						return;
// 					}

// 					self.command('bold', false, undefined, e)
// 				})
// 			},

// 			// 更新样式
// 			updateStyle: function (editor: any) {
// 				var menuData = this
// 				var $trigger = menuData.$trigger

// 				if ( document.queryCommandState('bold') ) {
// 					menuData.selected = true;
// 					$trigger.addClass('selected');
// 				} else {
// 					menuData.selected = false;
// 					$trigger.removeClass('selected');
// 				}
// 			}
// 		}
//   }
  
//   private command(commandName: string, bool: boolean, commandValue: string, e: any, callback: any) {
//     var self = this;

// 		// 验证该命令是否不能恢复外围选区，将传入到 customCommand 中
//     var regResult = regRestoreNoWrapSelection.test(commandName)
    
//     var fn = function () {
// 			document.execCommand(commandName, !!bool, commandValue)
// 		};

// 		// 执行事件
// 		self.customCommand(regResult, fn, e, callback)
//   }

//   // 自定义事件
//   private customCommand(isRestoreNoWrapSelection: boolean, fn: any, e: any, callback: any) {
// 		var self = this;
// 		var currentRange = self.currentRange()
// 		var currentWrapRange = self.currentWrapRange()
// 		var $txt = self.$txt

// 		/*
// 			isRestoreNoWrapSelection 参数的作用：
// 			1. 有些 command 是需要选中整个外围选区再进行操作的，一般是修改样式，例如加粗。
// 			   针对加粗这种样式操作，如果不默认选中一个选区，是看不到任何效果的。
// 			2. 但是有些 command 一定不能选中外围选区，一般是插入操作，例如插入图片。
// 			   如果选中了一段区域，再执行插入图片，插入图片之后，刚才的那段选区就没有了。

// 			因此，isRestoreNoWrapSelection 的作用就是来判断，是否要选中外围选区。
// 		*/
// 		if (isRestoreNoWrapSelection) {
// 			// 恢复选区（非整个外围选区）
// 			self.restoreSelection(currentRange)
// 		} else {
// 			// 恢复选区（整个外围选区）
// 			self.restoreSelection(currentWrapRange)
// 		}

// 		// 执行命令
// 		fn()

// 		// 如果 $txt 最后没有空行，则增加一个
// 		self.insertEmpltyLink()

// 		// 重新保存选区，因为部分浏览器会自动清空选区
// 		self.saveSelection()

// 		// 恢复选区（非外围选区）
// 		self.restoreSelection(currentRange)

// 		// 阻止默认行为，阻止冒泡
// 		if (e) {
// 			e.preventDefault()
// 			e.stopPropagation()
// 		}

// 		// 回调函数
// 		if (callback) {
// 			callback.call(self)
// 		}

// 		// 隐藏菜单栏
// 		self.hideMenuContainer()
//   }
  
//   // 设置或读取当前的range
// 	private currentRange(cr: boolean) {
// 		if (cr) {
// 			this.currentRangeData = cr;
// 		} else {
// 			return this.currentRangeData;
// 		}
// 	};

// }