/*======================================注册====================================*/
 /*
	功能：正则验证
	参数1：验证类型
	参数2：验证的字符串
	返回值：true:false
	**/		
	function checkAll(type,value){ 		 //type是你要验证的类型（自定），value验证该值
		switch(type) {				//判断该类型       
		case 'phone':   			//如果类型是Phone的话，就执行下面的判断  
			if((/^1[34578]\d{9}$/).test(value)){   //1开头后跟345678，后跟9个数字，结尾
				return true;   
			}else{  
				return false;
			}  
			break;  
		case 'email':  
			if((/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(value)){   
				return true;   
			}else{  
				return false;
			}  
			break; 
		
		case 'zipcode':
			if((/^[1-9]\d{5}$/).test(value)){
				return true;
			}else{
				return false;
			}
			break;	
		
		case 'username':
			if((/^[a-zA-Z_]\w{5,14}$/).test(value)){
				return true;
			}else{
				return false;
			}
			break;
		case 'file':
			if((/jpg|png|gif/i).test(img)){
				return true;
			}else{
				return false;
			}
			break;				
		}	
	} 