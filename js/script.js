function UpdateQueryString(key, value, url) {
  	    if (!url) url = window.location.href;
		    var re = new RegExp("([?|&])" + key + "=.*?(&|#|$)(.*)", "gi");

		    if (re.test(url)) {
		        if (value)
		            return url.replace(re, '$1' + key + "=" + value + '$2$3');
		        else {
		            return url.replace(re, '$1$3').replace(/(&|\?)$/, '');
		        }
		    }
		    else {
		        if (value) {
		            var separator = url.indexOf('?') !== -1 ? '&' : '?',
		                hash = url.split('#');
		            url = hash[0] + separator + key + '=' + value;
		            if (hash[1]) url += '#' + hash[1];
		            return url;
		        }
		        else
		            return url;
	    	}
		}

function moe_get_sel_val(sel) {
		    var value = sel.options[sel.selectedIndex].value;  
		    window.location = UpdateQueryString("ml_order", value);
		}

jQuery(document).ready(function() {
jQuery('ul.items').before('<select id="moe_filter_drop" onchange="moe_get_sel_val(this)"><option>Sort by:</option><option value="alpha">Alphabetical</option><option value="date">Date</option></select>');
})
