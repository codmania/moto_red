function $_(idElement){
	return document.getElementById(idElement);
}

function $F_(idElement){
   var element = $_(idElement);
   switch(element.type){
     case 'select-one':
       return element.options[element.selectedIndex].value;
     break;
     case 'radio':
     case 'checkbox':
       return element.checked;
     break;
     case 'text':
     case 'password':
     case 'textarea':
     case 'hidden':
       return element.value;
     break;
     default:
       return element.innerHTML;
   }
}

function killEvent(elm, evType, fn, useCapture){
    if (elm.removeEventListener) {
        elm.removeEventListener(evType, fn, useCapture);
        return true;
    }else if (elm.detachEvent) {
        var r = elm.detachEvent('on' + evType, fn);
        return r;
    }else{
        elm['on' + evType] = null;
    }
}

function addEventMy(elm, evType, fn, useCapture) {
    if (elm.addEventListener) {
        elm.addEventListener(evType, fn, useCapture);
        return true;
    }else if (elm.attachEvent) {
        var r = elm.attachEvent('on' + evType, fn);
        return r;
    }else{
        elm['on' + evType] = fn;
    }
}

function highlightField(field){
    jQuery('#'+field).addClass('fielderror');
}

function unhighlightField(formName){
    var form = document.forms[formName];
    var countElements = form.length;
    for (i = 0; i < countElements; i++){
       	if (form.elements[i].type == 'button' || form.elements[i].type == 'submit' || form.elements[i].type == 'radio' || form.elements[i].type == 'hidden') continue;
       	jQuery(form.elements[i]).removeClass('fielderror');
    }
}

function isEmpty(value){
	var pattern = /\S/;
	return ret = (pattern.test(value)) ? (0) : (1);
}

function checkMail(value){
   var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   return ret = (pattern.test(value)) ? (1) : (0);
}

function Equal(value1, value2){
  return (value1 == value2);
}

function validateRegistrationForm(urlcheckdata, formName){
    
    var arrayId = new Array();
    var arrayType = new Array();
    var arrayParams = new Array();
    var arrayErrorMessages = new Array();

    var i = 0;

    if (register_field_require.title){
        arrayId[i] = 'title';
        arrayType[i] = 'notn';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }

    if (register_field_require.f_name){
        arrayId[i] = 'f_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.l_name){
        arrayId[i] = 'l_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
	
	if (register_field_require.m_name){
        arrayId[i] = 'm_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.firma_name){
        arrayId[i] = 'firma_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.client_type){
        arrayId[i] = 'client_type';
        arrayType[i] = 'notn';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }    

    if ( (document.forms[formName].client_type && document.forms[formName].client_type.value=="2") || !document.forms[formName].client_type ){
        if (register_field_require.firma_code){
            arrayId[i] = 'firma_code';
            arrayType[i] = 'nem';
            arrayParams[i] = '';
            arrayErrorMessages[i] = '';
            i++;
        }

        if (register_field_require.tax_number){
            arrayId[i] = 'tax_number';
            arrayType[i] = 'nem';
            arrayParams[i] = '';
            arrayErrorMessages[i] = '';
            i++;
        }
    }
    
    if (register_field_require.email){
        arrayId[i] = 'email';
        arrayType[i] = 'em';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.email2){
        arrayId[i] = 'email';
        arrayType[i] = 'eqne';
        arrayParams[i] = 'email2';
        arrayErrorMessages[i] = '';
        i++;
    }
	
	if (register_field_require.birthday){
        arrayId[i] = 'birthday';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.home){
        arrayId[i] = 'home';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.apartment){
        arrayId[i] = 'apartment';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.street){
        arrayId[i] = 'street';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.street_nr){
        arrayId[i] = 'street_nr';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.zip){
        arrayId[i] = 'zip';
        arrayType[i] = 'zip';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.city){
        arrayId[i] = 'city';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.state){
        arrayId[i] = 'state';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.country){
        arrayId[i] = 'country';
        arrayType[i] = 'notn';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.phone){
        arrayId[i] = 'phone';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.mobil_phone){
        arrayId[i] = 'mobil_phone';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.fax){
        arrayId[i] = 'fax';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.ext_field_1){
        arrayId[i] = 'ext_field_1';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }

    if (register_field_require.ext_field_2){
        arrayId[i] = 'ext_field_2';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }

    if (register_field_require.ext_field_3){
        arrayId[i] = 'ext_field_3';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }   
    
    if (register_field_require.u_name){
        arrayId[i] = 'u_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;    
    }
    
    if (register_field_require.password && register_field_require.password_2){
        arrayId[i] = 'password';
        arrayType[i] = 'eqne';
        arrayParams[i] = 'password_2';
        arrayErrorMessages[i] = '';
        i++;
    }else if (register_field_require.password){
        arrayId[i] = 'password';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.privacy_statement){
        arrayId[i] = 'privacy_statement';
        arrayType[i] = 'chk';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
	var myForm = new validateForm(formName, arrayId, arrayType, arrayParams, arrayErrorMessages, 2);
	var error = (myForm.validate()) ? (1) : (0);
	if (!error){
		return false;
	}else{
        function showResponse(originalRequest){
           if (originalRequest != 1){
           	  alert(originalRequest);
           	  return false;
           } else {
           	  document.forms[formName].submit();
           }
        }        
        var udata = {"username":jQuery('#u_name').val(),"email":jQuery('#email').val()};
	    jQuery.get(urlcheckdata, udata, showResponse);
        return false;
	}
}

function validateCheckoutAdressForm(livepath, formName){
    
    var typeShowError = 2;
    var arrayId = new Array();
    var arrayType = new Array();
    var arrayParams = new Array();
    var arrayErrorMessages = new Array();
    
    var i = 0;
    
    if (register_field_require.title){
        arrayId[i] = 'title';
        arrayType[i] = 'notn';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.f_name){
        arrayId[i] = 'f_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.l_name){
        arrayId[i] = 'l_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
	
	if (register_field_require.m_name){
        arrayId[i] = 'm_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.firma_name){
        arrayId[i] = 'firma_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.client_type){
        arrayId[i] = 'client_type';
        arrayType[i] = 'notn';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }

    if ( (document.forms[formName].client_type && document.forms[formName].client_type.value=="2") || !document.forms[formName].client_type ){
        if (register_field_require.firma_code){
            arrayId[i] = 'firma_code';
            arrayType[i] = 'nem';
            arrayParams[i] = '';
            arrayErrorMessages[i] = '';
            i++;
        }

        if (register_field_require.tax_number){
            arrayId[i] = 'tax_number';
            arrayType[i] = 'nem';
            arrayParams[i] = '';
            arrayErrorMessages[i] = '';
            i++;
        }
    }
    
    if (register_field_require.email){
        arrayId[i] = 'email';
        arrayType[i] = 'em';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
	
	if (register_field_require.email2){
        arrayId[i] = 'email';
        arrayType[i] = 'eqne';
        arrayParams[i] = 'email2';
        arrayErrorMessages[i] = '';
        i++;
    }
	
	if (register_field_require.birthday){
        arrayId[i] = 'birthday';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.home){
        arrayId[i] = 'home';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.apartment){
        arrayId[i] = 'apartment';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.street){
        arrayId[i] = 'street';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.street_nr){
        arrayId[i] = 'street_nr';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.zip){
        arrayId[i] = 'zip';
        arrayType[i] = 'zip';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.city){
        arrayId[i] = 'city';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.state){
        arrayId[i] = 'state';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.country){
        arrayId[i] = 'country';
        arrayType[i] = 'notn';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.phone){
        arrayId[i] = 'phone';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.mobil_phone){
        arrayId[i] = 'mobil_phone';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.fax){
        arrayId[i] = 'fax';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.ext_field_1){
        arrayId[i] = 'ext_field_1';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }

    if (register_field_require.ext_field_2){
        arrayId[i] = 'ext_field_2';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }

    if (register_field_require.ext_field_3){
        arrayId[i] = 'ext_field_3';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.privacy_statement){
        arrayId[i] = 'privacy_statement';
        arrayType[i] = 'chk';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
        
    if ($_('delivery_adress_2')){
        if ($F_('delivery_adress_2')){
            
            if (register_field_require.d_title){
                arrayId[i] = 'd_title';
                arrayType[i] = 'notn';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_f_name){
                arrayId[i] = 'd_f_name';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_l_name){
                arrayId[i] = 'd_l_name';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
			
			if (register_field_require.d_m_name){
                arrayId[i] = 'd_m_name';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_firma_name){
                arrayId[i] = 'd_firma_name';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_email){
                arrayId[i] = 'd_email';
                arrayType[i] = 'em';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
			
			if (register_field_require.d_birthday){
                arrayId[i] = 'd_birthday';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_home){
                arrayId[i] = 'd_home';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_apartment){
                arrayId[i] = 'd_apartment';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_street){
                arrayId[i] = 'd_street';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_street_nr){
                arrayId[i] = 'd_street_nr';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_zip){
                arrayId[i] = 'd_zip';
                arrayType[i] = 'zip';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_city){
                arrayId[i] = 'd_city';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_state){
                arrayId[i] = 'd_state';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_country){
                arrayId[i] = 'd_country';
                arrayType[i] = 'notn';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_phone){
                arrayId[i] = 'd_phone';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_mobil_phone){
                arrayId[i] = 'd_mobil_phone';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_fax){
                arrayId[i] = 'd_fax';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_ext_field_1){
                arrayId[i] = 'd_ext_field_1';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }

            if (register_field_require.d_ext_field_2){
                arrayId[i] = 'd_ext_field_2';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }

            if (register_field_require.d_ext_field_3){
                arrayId[i] = 'd_ext_field_3';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
        }
    }
	var myForm = new validateForm(formName, arrayId, arrayType, arrayParams, arrayErrorMessages, typeShowError);
return error = myForm.validate();
}

function validateEditAccountForm(livepath, formName){
    var typeShowError = 2;
    var arrayId = new Array();
    var arrayType = new Array();
    var arrayParams = new Array();
    var arrayErrorMessages = new Array();
    
    var i = 0;
    
    if (register_field_require.title){
        arrayId[i] = 'title';
        arrayType[i] = 'notn';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.f_name){
        arrayId[i] = 'f_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.l_name){
        arrayId[i] = 'l_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
	
	if (register_field_require.m_name){
        arrayId[i] = 'm_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.firma_name){
        arrayId[i] = 'firma_name';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.client_type){
        arrayId[i] = 'client_type';
        arrayType[i] = 'notn';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }

    if ( (document.forms[formName].client_type && document.forms[formName].client_type.value=="2") || !document.forms[formName].client_type ){
        if (register_field_require.firma_code){
            arrayId[i] = 'firma_code';
            arrayType[i] = 'nem';
            arrayParams[i] = '';
            arrayErrorMessages[i] = '';
            i++;
        }

        if (register_field_require.tax_number){
            arrayId[i] = 'tax_number';
            arrayType[i] = 'nem';
            arrayParams[i] = '';
            arrayErrorMessages[i] = '';
            i++;
        }
    }
    
    if (register_field_require.email){
        arrayId[i] = 'email';
        arrayType[i] = 'em';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
	
	if (register_field_require.birthday){
        arrayId[i] = 'birthday';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.home){
        arrayId[i] = 'home';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.apartment){
        arrayId[i] = 'apartment';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.street){
        arrayId[i] = 'street';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.street_nr){
        arrayId[i] = 'street_nr';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.zip){
        arrayId[i] = 'zip';
        arrayType[i] = 'zip';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.city){
        arrayId[i] = 'city';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.state){
        arrayId[i] = 'state';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.country){
        arrayId[i] = 'country';
        arrayType[i] = 'notn';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.phone){
        arrayId[i] = 'phone';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.mobil_phone){
        arrayId[i] = 'mobil_phone';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }    
    
    if (register_field_require.fax){
        arrayId[i] = 'fax';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.ext_field_1){
        arrayId[i] = 'ext_field_1';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }

    if (register_field_require.ext_field_2){
        arrayId[i] = 'ext_field_2';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }

    if (register_field_require.ext_field_3){
        arrayId[i] = 'ext_field_3';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.password){
        arrayId[i] = 'password';
        arrayType[i] = 'nem';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
    if (register_field_require.password_2){
        arrayId[i] = 'password_2';
        arrayType[i] = 'eqne';
        arrayParams[i] = 'password';
        arrayErrorMessages[i] = '';
        i++;
    }
    
    if (register_field_require.privacy_statement){
        arrayId[i] = 'privacy_statement';
        arrayType[i] = 'chk';
        arrayParams[i] = '';
        arrayErrorMessages[i] = '';
        i++;
    }
        
    if ($_('delivery_adress_2')){
        if ($F_('delivery_adress_2')){
            
            if (register_field_require.d_title){
                arrayId[i] = 'd_title';
                arrayType[i] = 'notn';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_f_name){
                arrayId[i] = 'd_f_name';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_l_name){
                arrayId[i] = 'd_l_name';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
			
			if (register_field_require.d_m_name){
                arrayId[i] = 'd_m_name';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_firma_name){
                arrayId[i] = 'd_firma_name';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_email){
                arrayId[i] = 'd_email';
                arrayType[i] = 'em';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
			
			if (register_field_require.d_birthday){
                arrayId[i] = 'd_birthday';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_home){
                arrayId[i] = 'd_home';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_apartment){
                arrayId[i] = 'd_apartment';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_street){
                arrayId[i] = 'd_street';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_street_nr){
                arrayId[i] = 'd_street_nr';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_zip){
                arrayId[i] = 'd_zip';
                arrayType[i] = 'zip';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_city){
                arrayId[i] = 'd_city';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_state){
                arrayId[i] = 'd_state';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_country){
                arrayId[i] = 'd_country';
                arrayType[i] = 'notn';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_phone){
                arrayId[i] = 'd_phone';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_mobil_phone){
                arrayId[i] = 'd_mobil_phone';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }            
            
            if (register_field_require.d_fax){
                arrayId[i] = 'd_fax';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
            if (register_field_require.d_ext_field_1){
                arrayId[i] = 'd_ext_field_1';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }

            if (register_field_require.d_ext_field_2){
                arrayId[i] = 'd_ext_field_2';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }

            if (register_field_require.d_ext_field_3){
                arrayId[i] = 'd_ext_field_3';
                arrayType[i] = 'nem';
                arrayParams[i] = '';
                arrayErrorMessages[i] = '';
                i++;
            }
            
        }
    }
    var myForm = new validateForm(formName, arrayId, arrayType, arrayParams, arrayErrorMessages, typeShowError);
return error = myForm.validate();
}

function validateFormAdvancedSearch(formName){
    var arrayId            = new Array('date_from', 'date_to', 'price_from', 'price_to');
    var arrayType          = new Array('date|em', 'date|em', 'fl|em|0', 'fl|em');
    var arrayParams        = new Array('', '');
    var arrayErrorMessages = new Array('', '');
    var myForm = new validateForm(formName, arrayId, arrayType, arrayParams, arrayErrorMessages, 2);
    error = myForm.validate(); 
return error;
}

function validateReviewForm(formName){
    var arrayId            = new Array('review_user_name', 'review_user_email', 'review_review');
    var arrayType          = new Array('nem', 'em', 'nem');
    var arrayParams        = new Array('', '');
    var arrayErrorMessages = new Array('', '');
    var myForm = new validateForm(formName, arrayId, arrayType, arrayParams, arrayErrorMessages, 2);
    error = myForm.validate(); 
return error;
}

function checkAGBAndNoReturn(agb, no_return){
    result1=result2=true;
    if (agb=='1') result1 = checkAGB();
    if (no_return=='1') result2 = checkNoReturn();
    if (result1 && result2)
        return true;
    else
        return false;   
}
function checkAGB(){
    if ($_("agb").checked){
        jQuery(".row_agb").removeClass('fielderror');
        return true;
    }else{
        jQuery(".row_agb").addClass('fielderror');
        jQuery('#agb').focus();
        return false;
    }
}
function checkNoReturn(){
    if ($_("no_return").checked){
        jQuery(".row_no_return").removeClass('fielderror');
        return true;
    }else{
        jQuery(".row_no_return").addClass('fielderror');
        jQuery('#no_return').focus();
        return false;
    }    
}

var activePaymentMethod = "";
function showPaymentForm(paymentMethod){
    activePaymentMethod = paymentMethod;
    jQuery("*[id^='tr_payment_']").hide();
    jQuery('#tr_payment_'+paymentMethod).show();
}

function checkPaymentForm(){
    if (activePaymentMethod){        
        if (payment_type_check[activePaymentMethod]=='1'){
            try {
                eval("check_"+activePaymentMethod+"();");
            }catch(exception){
                console.log(exception);
                jQuery('#payment_form').submit();
            }
        }else{
            jQuery('#payment_form').submit();
        }
    }
}

function isInt_5_8(value){
	var pattern = /^(\d){5,8}$/;
	return ret = (pattern.test(value)) ? (1) : (0);
}

function validateShippingMethods(){
    var tableShip = $_('table_shippings');
    var inputs = tableShip.getElementsByTagName('input');
    for (var i=0; i<inputs.length; i++){
    	if (inputs[i].type != 'radio') continue;
        if (inputs[i].checked) return true;
    }
    return false;
}

function showShippingForm(id){
    jQuery("div.shipping_form").removeClass('shipping_form_active');
    jQuery("#shipping_form_"+id).addClass('shipping_form_active');
}

function hideElement(idElement){
    $_(idElement).style.display = 'none';
}

function disableElement(idElement){
    $_(idElement).disabled = true;
}

function submitListProductFilterSortDirection(){
    $_('orderby').value = $_('orderby').value ^ 1;
    submitListProductFilters();
}

function submitListProductFilters(){
    $_('sort_count').submit();
}

function clearProductListFilter(){
    jQuery("#manufacturers").val("0");
    jQuery("#categorys").val("0");
    jQuery("#price_from").val("");
    jQuery("#price_to").val("");
    submitListProductFilters();
}

function showVideo(idElement, width, height){
	jQuery('.video_full').hide();
    jQuery('#hide_' + idElement).attr("href", jQuery("#"+idElement).attr("href"));
	jQuery('a.lightbox').hide();
    jQuery('#main_image').hide();
	jQuery('#hide_' + idElement).show();
	jQuery('#hide_' + idElement).media( { width: width, height: height} );
    jQuery(".product_label").hide();
}

function showVideoCode(idElement){
	jQuery('.video_full:not(#hide_' + idElement + ')').hide();
    jQuery('a.lightbox').hide();
    jQuery('#main_image').hide();
    jQuery(".product_label").hide();
	jQuery('#hide_' + idElement).show();
}

function showImage(id){    
    jQuery('.video_full').hide();
    jQuery('a.lightbox').hide();
    jQuery("#main_image_full_"+id).show();
    jQuery(".product_label").show();
}

function playMusic(idElement){
	jQuery('#'+idElement).media( { width: 100, height: 20, autoplay:true } );
}

function showHideReview(){
	jQuery('#jshop_review_write').show();
}

function formatprice(price){    
    if (typeof(decimal_count)==='undefined') decimal_count = 2;
    if (typeof(decimal_symbol)==='undefined') decimal_symbol = ".";
    price = price.toFixed(decimal_count).toString();
    price = price.replace('.',decimal_symbol);
    res = format_currency.replace("Symb",currency_code);
    res = res.replace("00",price);    
return res;
}

var prevAjaxHandler = null;
var reloadAttribEvents = [];
var extdataurlupdateattr = {};
function reloadAttribSelectAndPrice(id_select){
    var product_id = jQuery("#product_id").val();
    var qty = jQuery("#quantity").val();
    var data = {};
    data["change_attr"] = id_select;
    data["qty"] = qty;    
    for(var i=0;i<attr_list.length;i++){
        var id = attr_list[i];
        data["attr["+id+"]"] = attr_value[id];
    }
    for(extdatakey in extdataurlupdateattr){
        data[extdatakey] = extdataurlupdateattr[extdatakey];
    }

    if (prevAjaxHandler){
        prevAjaxHandler.abort();
    }

    prevAjaxHandler = jQuery.getJSON(
        urlupdateprice,
        data,
        function(json){
            var reload_atribut = 0;
            for(var i=0;i<attr_list.length;i++){
                var id = attr_list[i];
                if (reload_atribut){
                    jQuery("#block_attr_sel_"+id).html(json['id_'+id]);
                }
                if (id == id_select) reload_atribut = 1;
            }
			
            jQuery("#block_price").html(json.price);
            jQuery("#pricefloat").val(json.pricefloat);
            
			if (json.basicprice){
                jQuery("#block_basic_price").html(json.basicprice);
            }
			
            for(key in json){
                if (key.substr(0,3)=="pq_"){
                    jQuery("#pricelist_from_"+key.substr(3)).html(json[key]);
                }
            }

            if (json.available=="0"){
                jQuery("#not_available").html(translate_not_available);
            }else{
                jQuery("#not_available").html("");
            }
			
			if (json.displaybuttons=="0"){
                jQuery(".productfull .prod_buttons").hide();
            }else{
                jQuery(".productfull .prod_buttons").show();
            }

            if (json.ean){
                jQuery("#product_code").html(json.ean);
            }

            if (json.weight){
                jQuery("#block_weight").html(json.weight);
            }
            if (json.pricedefault){
                jQuery("#pricedefault").html(json.pricedefault);
            }
            if (json.qty){
                jQuery("#product_qty").html(json.qty);
            }
            if (json.oldprice){
                jQuery("#old_price").html(json.oldprice);
                jQuery(".old_price").show();
            }else{
                jQuery(".old_price").hide();
            }

            if (json.images && json.images.length>0){
                var count_prod_img = json.images.length;
                var html_thumb_img = "";
                var html_middle_img = "";
				var html_zoom_img = '';
                if (typeof(jshop_product_hide_zoom_image)==='undefined') jshop_product_hide_zoom_image = 0;
                if (!jshop_product_hide_zoom_image){
                    html_zoom_img = ' <div class="text_zoom"><img alt="zoom" src="'+liveimgpath+'/search.png" /> '+translate_zoom_image+'</div>';
                }
                for(var j=0;j<count_prod_img;j++){
                    html_thumb_img+='<img class="jshop_img_thumb" src="'+liveproductimgpath+'/thumb_'+json.images[j]+'" onclick = "showImage('+j+')" />';
                    tmp = 'style="display:none"';
                    if (j==0) tmp = '';
                    html_middle_img+='<a class="lightbox" id="main_image_full_'+j+'" href="'+liveproductimgpath+'/full_'+json.images[j]+'" '+tmp+'><img id="main_image_'+j+'" src="'+liveproductimgpath+'/'+json.images[j]+'" />'+html_zoom_img+'</a>';
                }
                if (json.displayimgthumb=="1") 
                    jQuery("#list_product_image_thumb").html(html_thumb_img);
                else
                    jQuery("#list_product_image_thumb").html("");
                jQuery("#list_product_image_middle").html(html_middle_img);
                initJSlightBox();
            }

			if (json.block_image_thumb || json.block_image_middle){
                jQuery("#list_product_image_thumb").html(json.block_image_thumb);            
                jQuery("#list_product_image_middle").html(json.block_image_middle);
                initJSlightBox();
            }
			
			if (typeof(json.demofiles)!='undefined'){
				jQuery("#list_product_demofiles").html(json.demofiles);
			}
            
            if (json.showdeliverytime){
                if (json.showdeliverytime=="0"){
                    jQuery(".productfull .deliverytime").hide();
                }else{
                    jQuery(".productfull .deliverytime").show();
                }
            }

            jQuery.each(reloadAttribEvents, function(key, handler){
                handler.call(this, json);
            });

            reloadAttrValue();
        }
    );
}

function setAttrValue(id, value){
    attr_value[id] = value;
    reloadAttribSelectAndPrice(id);
    reloadAttribImg(id, value);
}

function reloadAttribImg(id, value){
    var path = "";
    var img = "";
    if (value=="0"){
        img = "";
    }else{
        if (attr_img[value]){
            img = attr_img[value];
        }else{
            img = "";
        }
    }
    
    if (img==""){
        path = liveimgpath;
        img = "blank.gif";
    }else{
        path = liveattrpath;
    }
    jQuery("#prod_attr_img_"+id).attr('src', path+"/"+img);
}

function reloadAttrValue(){    
    for(var id in attr_value){
        if (jQuery("input[name=jshop_attr_id\\["+id+"\\]]").attr("type")=="radio"){
            attr_value[id] = jQuery("input[name=jshop_attr_id\\["+id+"\\]]:checked").val();
        }else{
            attr_value[id] = jQuery("#jshop_attr_id"+id).val();
        }
    }
}

function reloadPrices(){
    var qty = jQuery("#quantity").val();
    if (qty!=""){
        reloadAttribSelectAndPrice(0);
    }
}

function showHideFieldFirm(type_id){
    if (type_id=="2"){
        jQuery("#tr_field_firma_code").show();
        jQuery('#tr_field_tax_number').show();
    }else{
        jQuery("#tr_field_firma_code").hide();
        jQuery('#tr_field_tax_number').hide();
    }
}

function updateSearchCharacteristic(url, category_id){
    function showResponse(data){
        jQuery("#list_characteristics").html(data);
    }
    var data = {"category_id":category_id};
    jQuery.get(url, data, showResponse);
}